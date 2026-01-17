import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-forwarded-for, x-real-ip',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

// Security configuration
const CONFIG = {
  // Rate limiting
  MAX_REQUESTS_PER_MINUTE: 60,
  MAX_REQUESTS_PER_HOUR: 500,
  WINDOW_SECONDS: 60,
  
  // Request validation
  MAX_BODY_SIZE: 10000, // 10KB
  MAX_URL_LENGTH: 2048,
  
  // Bot detection patterns
  SUSPICIOUS_USER_AGENTS: [
    'curl', 'wget', 'python-requests', 'go-http-client', 'java/',
    'libwww', 'httpclient', 'okhttp', 'axios/', 'node-fetch',
    'headless', 'phantom', 'selenium', 'puppeteer', 'playwright'
  ],
  
  // Blocked paths (prevent path traversal)
  BLOCKED_PATHS: ['../', '/.env', '/wp-admin', '/phpmyadmin', '/.git'],
  
  // SQL injection patterns
  SQL_PATTERNS: [
    /(\bunion\b.*\bselect\b)/i,
    /(\bselect\b.*\bfrom\b.*\bwhere\b)/i,
    /(\binsert\b.*\binto\b)/i,
    /(\bdelete\b.*\bfrom\b)/i,
    /(\bdrop\b.*\btable\b)/i,
    /(\bexec\b|\bexecute\b)/i,
    /(--|\#|\/\*)/,
  ],
  
  // XSS patterns
  XSS_PATTERNS: [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe/gi,
    /<object/gi,
    /<embed/gi,
  ],
}

interface SecurityCheckResult {
  allowed: boolean
  reason?: string
  statusCode: number
}

function getClientIP(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
         req.headers.get('x-real-ip') ||
         req.headers.get('cf-connecting-ip') ||
         'unknown'
}

function checkUserAgent(userAgent: string | null): SecurityCheckResult {
  if (!userAgent) {
    return { allowed: false, reason: 'Missing User-Agent', statusCode: 400 }
  }
  
  const lowerUA = userAgent.toLowerCase()
  for (const pattern of CONFIG.SUSPICIOUS_USER_AGENTS) {
    if (lowerUA.includes(pattern.toLowerCase())) {
      return { allowed: false, reason: 'Suspicious client detected', statusCode: 403 }
    }
  }
  
  return { allowed: true, statusCode: 200 }
}

function checkPath(url: string): SecurityCheckResult {
  const lowerUrl = url.toLowerCase()
  for (const blocked of CONFIG.BLOCKED_PATHS) {
    if (lowerUrl.includes(blocked)) {
      return { allowed: false, reason: 'Blocked path', statusCode: 403 }
    }
  }
  
  if (url.length > CONFIG.MAX_URL_LENGTH) {
    return { allowed: false, reason: 'URL too long', statusCode: 414 }
  }
  
  return { allowed: true, statusCode: 200 }
}

function checkPayload(body: string): SecurityCheckResult {
  if (body.length > CONFIG.MAX_BODY_SIZE) {
    return { allowed: false, reason: 'Payload too large', statusCode: 413 }
  }
  
  // Check for SQL injection
  for (const pattern of CONFIG.SQL_PATTERNS) {
    if (pattern.test(body)) {
      return { allowed: false, reason: 'Malicious payload detected', statusCode: 403 }
    }
  }
  
  // Check for XSS
  for (const pattern of CONFIG.XSS_PATTERNS) {
    if (pattern.test(body)) {
      return { allowed: false, reason: 'Malicious payload detected', statusCode: 403 }
    }
  }
  
  return { allowed: true, statusCode: 200 }
}

function generateFingerprint(req: Request): string {
  const ua = req.headers.get('user-agent') || ''
  const accept = req.headers.get('accept') || ''
  const acceptLang = req.headers.get('accept-language') || ''
  const acceptEnc = req.headers.get('accept-encoding') || ''
  
  return btoa(`${ua}|${accept}|${acceptLang}|${acceptEnc}`).slice(0, 32)
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  const startTime = Date.now()
  const clientIP = getClientIP(req)
  const userAgent = req.headers.get('user-agent')
  const fingerprint = generateFingerprint(req)
  
  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )

    // Parse request body
    let body = ''
    let requestData: any = {}
    
    try {
      body = await req.text()
      if (body) {
        requestData = JSON.parse(body)
      }
    } catch {
      // Not JSON, use raw body
    }

    const endpoint = requestData.endpoint || 'default'
    const action = requestData.action || 'validate'

    // 1. Check if IP is already blocked
    const { data: blockedIP } = await supabase
      .from('blocked_ips')
      .select('blocked_until, reason')
      .eq('ip_address', clientIP)
      .gt('blocked_until', new Date().toISOString())
      .maybeSingle()

    if (blockedIP) {
      await supabase.from('security_logs').insert({
        ip_address: clientIP,
        endpoint,
        action: 'request_blocked',
        details: { reason: blockedIP.reason, blocked_until: blockedIP.blocked_until }
      })

      return new Response(
        JSON.stringify({ 
          error: 'Access denied', 
          retry_after: blockedIP.blocked_until 
        }),
        { 
          status: 429, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Retry-After': '300' }
        }
      )
    }

    // 2. User-Agent validation
    const uaCheck = checkUserAgent(userAgent)
    if (!uaCheck.allowed) {
      await supabase.from('security_logs').insert({
        ip_address: clientIP,
        endpoint,
        action: 'ua_blocked',
        details: { user_agent: userAgent, reason: uaCheck.reason }
      })

      return new Response(
        JSON.stringify({ error: uaCheck.reason }),
        { status: uaCheck.statusCode, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // 3. Path validation
    const pathCheck = checkPath(req.url)
    if (!pathCheck.allowed) {
      await supabase.from('security_logs').insert({
        ip_address: clientIP,
        endpoint,
        action: 'path_blocked',
        details: { url: req.url, reason: pathCheck.reason }
      })

      return new Response(
        JSON.stringify({ error: pathCheck.reason }),
        { status: pathCheck.statusCode, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // 4. Payload validation
    const payloadCheck = checkPayload(body)
    if (!payloadCheck.allowed) {
      await supabase.from('security_logs').insert({
        ip_address: clientIP,
        endpoint,
        action: 'payload_blocked',
        details: { reason: payloadCheck.reason, body_length: body.length }
      })

      return new Response(
        JSON.stringify({ error: payloadCheck.reason }),
        { status: payloadCheck.statusCode, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // 5. Rate limiting check
    const { data: rateLimit, error: rateLimitError } = await supabase
      .rpc('check_rate_limit', {
        p_ip_address: clientIP,
        p_endpoint: endpoint,
        p_max_requests: CONFIG.MAX_REQUESTS_PER_MINUTE,
        p_window_seconds: CONFIG.WINDOW_SECONDS
      })

    if (rateLimitError) {
      console.error('Rate limit check error:', rateLimitError)
    }

    if (rateLimit && rateLimit.length > 0 && !rateLimit[0].allowed) {
      return new Response(
        JSON.stringify({ 
          error: 'Rate limit exceeded', 
          retry_after: rateLimit[0].blocked_until 
        }),
        { 
          status: 429, 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json',
            'Retry-After': '300',
            'X-RateLimit-Limit': String(CONFIG.MAX_REQUESTS_PER_MINUTE),
            'X-RateLimit-Remaining': '0'
          }
        }
      )
    }

    // 6. Log successful validation
    const processingTime = Date.now() - startTime
    
    await supabase.from('security_logs').insert({
      ip_address: clientIP,
      endpoint,
      action: 'validated',
      details: { 
        fingerprint,
        processing_time_ms: processingTime,
        request_count: rateLimit?.[0]?.current_count || 1
      }
    })

    // Return success with security headers
    return new Response(
      JSON.stringify({ 
        success: true,
        validated: true,
        request_id: crypto.randomUUID(),
        remaining_requests: CONFIG.MAX_REQUESTS_PER_MINUTE - (rateLimit?.[0]?.current_count || 1)
      }),
      { 
        status: 200, 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block',
          'X-RateLimit-Limit': String(CONFIG.MAX_REQUESTS_PER_MINUTE),
          'X-RateLimit-Remaining': String(CONFIG.MAX_REQUESTS_PER_MINUTE - (rateLimit?.[0]?.current_count || 1)),
          'X-Processing-Time': `${processingTime}ms`
        }
      }
    )

  } catch (error: unknown) {
    // Sanitized error logging - only safe properties
    const err = error as Error
    console.error('Security gateway error:', {
      message: err?.message || 'Unknown error',
      name: err?.name,
      timestamp: new Date().toISOString()
    })
    
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
