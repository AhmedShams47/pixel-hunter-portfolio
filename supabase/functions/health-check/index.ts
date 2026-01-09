import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  const startTime = Date.now()

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )

    // Check database connectivity
    const { error: dbError } = await supabase
      .from('security_logs')
      .select('id')
      .limit(1)

    const dbHealthy = !dbError
    const responseTime = Date.now() - startTime

    // Get security stats
    const { data: blockedCount } = await supabase
      .from('blocked_ips')
      .select('id', { count: 'exact', head: true })
      .gt('blocked_until', new Date().toISOString())

    const { data: recentLogs } = await supabase
      .from('security_logs')
      .select('action')
      .gte('created_at', new Date(Date.now() - 3600000).toISOString()) // Last hour

    const logStats = recentLogs?.reduce((acc: Record<string, number>, log) => {
      acc[log.action] = (acc[log.action] || 0) + 1
      return acc
    }, {}) || {}

    return new Response(
      JSON.stringify({
        status: dbHealthy ? 'healthy' : 'degraded',
        timestamp: new Date().toISOString(),
        response_time_ms: responseTime,
        services: {
          database: dbHealthy ? 'up' : 'down',
          security_gateway: 'up',
          rate_limiting: 'up'
        },
        security: {
          currently_blocked_ips: blockedCount || 0,
          last_hour_events: logStats
        }
      }),
      { 
        status: dbHealthy ? 200 : 503, 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      }
    )

  } catch (error) {
    console.error('Health check error:', error)
    
    return new Response(
      JSON.stringify({ 
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: 'Service unavailable'
      }),
      { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
