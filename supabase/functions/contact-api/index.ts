import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-forwarded-for, x-real-ip',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

// Strict input validation schema
const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s\-']+$/, 'Name contains invalid characters'),
  email: z.string()
    .trim()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters'),
  message: z.string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
  subject: z.string()
    .trim()
    .max(200, 'Subject must be less than 200 characters')
    .optional(),
  package_type: z.enum(['basic', 'pro', 'unlimited', 'custom']).optional(),
})

const CONFIG = {
  MAX_REQUESTS_PER_HOUR: 5, // Very strict for contact forms
  WINDOW_SECONDS: 3600,
}

function getClientIP(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
         req.headers.get('x-real-ip') ||
         req.headers.get('cf-connecting-ip') ||
         'unknown'
}

// Honeypot field check (bots often fill hidden fields)
function checkHoneypot(data: any): boolean {
  // If a hidden field like 'website' or 'url' is filled, it's likely a bot
  return !data.website && !data.url && !data.phone_confirm
}

// Timing check (humans take at least a few seconds to fill forms)
function checkTiming(startTime: number | undefined): boolean {
  if (!startTime) return true // No timing data, allow
  const elapsed = Date.now() - startTime
  return elapsed > 3000 // At least 3 seconds to fill form
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  const clientIP = getClientIP(req)

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )

    // Check rate limit first
    const { data: rateLimit } = await supabase
      .rpc('check_rate_limit', {
        p_ip_address: clientIP,
        p_endpoint: 'contact-api',
        p_max_requests: CONFIG.MAX_REQUESTS_PER_HOUR,
        p_window_seconds: CONFIG.WINDOW_SECONDS
      })

    if (rateLimit && rateLimit.length > 0 && !rateLimit[0].allowed) {
      await supabase.from('security_logs').insert({
        ip_address: clientIP,
        endpoint: 'contact-api',
        action: 'rate_limited',
        details: { blocked_until: rateLimit[0].blocked_until }
      })

      return new Response(
        JSON.stringify({ 
          error: 'Too many requests. Please try again later.',
          retry_after: rateLimit[0].blocked_until 
        }),
        { 
          status: 429, 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json',
            'Retry-After': '3600'
          }
        }
      )
    }

    // Parse and validate body
    let body: any
    try {
      body = await req.json()
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON body' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Honeypot check
    if (!checkHoneypot(body)) {
      await supabase.from('security_logs').insert({
        ip_address: clientIP,
        endpoint: 'contact-api',
        action: 'honeypot_triggered',
        details: { filled_fields: Object.keys(body).filter(k => ['website', 'url', 'phone_confirm'].includes(k)) }
      })

      // Return success to not tip off bots
      return new Response(
        JSON.stringify({ success: true, message: 'Message sent successfully' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Timing check
    if (!checkTiming(body._form_start_time)) {
      await supabase.from('security_logs').insert({
        ip_address: clientIP,
        endpoint: 'contact-api',
        action: 'timing_check_failed',
        details: { elapsed_ms: body._form_start_time ? Date.now() - body._form_start_time : 0 }
      })

      return new Response(
        JSON.stringify({ error: 'Please take your time filling out the form' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Validate input
    const validationResult = contactSchema.safeParse(body)
    if (!validationResult.success) {
      return new Response(
        JSON.stringify({ 
          error: 'Validation failed',
          details: validationResult.error.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const validatedData = validationResult.data

    // Log successful submission
    await supabase.from('security_logs').insert({
      ip_address: clientIP,
      endpoint: 'contact-api',
      action: 'contact_submitted',
      details: { 
        name: validatedData.name,
        email: validatedData.email.replace(/(.{2}).*(@.*)/, '$1***$2'), // Partially masked
        package_type: validatedData.package_type,
        message_length: validatedData.message.length
      }
    })

    // Here you would typically:
    // 1. Store in database
    // 2. Send notification email
    // 3. Integrate with CRM
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for your message! I will get back to you soon.',
        request_id: crypto.randomUUID()
      }),
      { 
        status: 200, 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'X-Content-Type-Options': 'nosniff'
        }
      }
    )

  } catch (error) {
    console.error('Contact API error:', error)
    
    return new Response(
      JSON.stringify({ error: 'An error occurred. Please try again.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
