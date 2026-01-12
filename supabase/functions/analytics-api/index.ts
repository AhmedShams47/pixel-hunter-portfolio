import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-forwarded-for, x-real-ip',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
}

// Minimal, privacy-respecting analytics
// No cookies, no fingerprinting, no PII storage

const CONFIG = {
  MAX_REQUESTS_PER_MINUTE: 30,
  WINDOW_SECONDS: 60,
}

function getClientIP(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
         req.headers.get('x-real-ip') ||
         req.headers.get('cf-connecting-ip') ||
         'unknown'
}

// Hash IP for privacy - we don't store raw IPs
async function hashIP(ip: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(ip + Deno.env.get('ANALYTICS_SALT') || 'default-salt')
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.slice(0, 8).map(b => b.toString(16).padStart(2, '0')).join('')
}

function parseUserAgent(ua: string | null): { browser: string; os: string; device: string } {
  if (!ua) return { browser: 'Unknown', os: 'Unknown', device: 'Unknown' }
  
  // Simple parsing - no detailed fingerprinting
  const browser = 
    ua.includes('Firefox') ? 'Firefox' :
    ua.includes('Chrome') ? 'Chrome' :
    ua.includes('Safari') ? 'Safari' :
    ua.includes('Edge') ? 'Edge' : 'Other'
  
  const os = 
    ua.includes('Windows') ? 'Windows' :
    ua.includes('Mac') ? 'macOS' :
    ua.includes('Linux') ? 'Linux' :
    ua.includes('Android') ? 'Android' :
    ua.includes('iOS') || ua.includes('iPhone') ? 'iOS' : 'Other'
  
  const device = 
    ua.includes('Mobile') || ua.includes('Android') || ua.includes('iPhone') ? 'Mobile' :
    ua.includes('Tablet') || ua.includes('iPad') ? 'Tablet' : 'Desktop'
  
  return { browser, os, device }
}

interface AnalyticsEvent {
  event: 'pageview' | 'click' | 'scroll' | 'form_start' | 'custom'
  page?: string
  referrer?: string
  data?: Record<string, string | number | boolean>
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

    // Rate limit check
    const { data: rateLimit } = await supabase
      .rpc('check_rate_limit', {
        p_ip_address: clientIP,
        p_endpoint: 'analytics-api',
        p_max_requests: CONFIG.MAX_REQUESTS_PER_MINUTE,
        p_window_seconds: CONFIG.WINDOW_SECONDS
      })

    if (rateLimit && rateLimit.length > 0 && !rateLimit[0].allowed) {
      return new Response(
        JSON.stringify({ error: 'Rate limited' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Parse body
    let body: AnalyticsEvent
    try {
      body = await req.json()
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Validate event type
    const validEvents = ['pageview', 'click', 'scroll', 'form_start', 'custom']
    if (!validEvents.includes(body.event)) {
      return new Response(
        JSON.stringify({ error: 'Invalid event type' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Parse minimal, non-identifying data
    const userAgent = req.headers.get('user-agent')
    const { browser, os, device } = parseUserAgent(userAgent)
    const hashedIP = await hashIP(clientIP)
    
    // Get country from Cloudflare header (privacy-friendly, no precise location)
    const country = req.headers.get('cf-ipcountry') || 'Unknown'

    // Clean referrer (remove query params for privacy)
    let referrer = body.referrer || ''
    try {
      if (referrer && referrer !== 'direct') {
        const url = new URL(referrer)
        referrer = url.hostname
      }
    } catch {
      referrer = 'Unknown'
    }

    // Log analytics event (minimal data, no PII)
    await supabase.from('security_logs').insert({
      ip_address: hashedIP, // Hashed, not raw
      endpoint: 'analytics',
      action: body.event,
      details: {
        page: body.page?.slice(0, 100), // Limit length
        referrer,
        browser,
        os,
        device,
        country,
        timestamp: new Date().toISOString(),
        ...(body.data && typeof body.data === 'object' ? { custom: body.data } : {})
      }
    })

    return new Response(
      JSON.stringify({ success: true }),
      { 
        status: 200, 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        }
      }
    )

  } catch (error) {
    console.error('Analytics API error:', error)
    
    return new Response(
      JSON.stringify({ error: 'Internal error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
