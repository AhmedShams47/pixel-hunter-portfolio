-- Create table to track rate limits per IP
CREATE TABLE public.rate_limits (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    ip_address TEXT NOT NULL,
    endpoint TEXT NOT NULL,
    request_count INTEGER NOT NULL DEFAULT 1,
    window_start TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(ip_address, endpoint)
);

-- Create table for blocked IPs
CREATE TABLE public.blocked_ips (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    ip_address TEXT NOT NULL UNIQUE,
    reason TEXT NOT NULL DEFAULT 'rate_limit_exceeded',
    blocked_until TIMESTAMP WITH TIME ZONE NOT NULL,
    block_count INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for security logs
CREATE TABLE public.security_logs (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    ip_address TEXT NOT NULL,
    endpoint TEXT,
    action TEXT NOT NULL,
    details JSONB,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create indexes for fast lookups
CREATE INDEX idx_rate_limits_ip_endpoint ON public.rate_limits(ip_address, endpoint);
CREATE INDEX idx_rate_limits_window ON public.rate_limits(window_start);
CREATE INDEX idx_blocked_ips_address ON public.blocked_ips(ip_address);
CREATE INDEX idx_blocked_ips_until ON public.blocked_ips(blocked_until);
CREATE INDEX idx_security_logs_ip ON public.security_logs(ip_address);
CREATE INDEX idx_security_logs_created ON public.security_logs(created_at);

-- Enable RLS
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blocked_ips ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.security_logs ENABLE ROW LEVEL SECURITY;

-- Only service role can access these tables (edge functions use service role)
CREATE POLICY "Service role only" ON public.rate_limits FOR ALL USING (false);
CREATE POLICY "Service role only" ON public.blocked_ips FOR ALL USING (false);
CREATE POLICY "Service role only" ON public.security_logs FOR ALL USING (false);

-- Function to clean up old rate limit entries (run periodically)
CREATE OR REPLACE FUNCTION public.cleanup_rate_limits()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    -- Delete rate limits older than 1 hour
    DELETE FROM public.rate_limits WHERE window_start < now() - INTERVAL '1 hour';
    
    -- Delete expired blocks
    DELETE FROM public.blocked_ips WHERE blocked_until < now();
    
    -- Delete security logs older than 7 days
    DELETE FROM public.security_logs WHERE created_at < now() - INTERVAL '7 days';
END;
$$;

-- Function to check and update rate limit
CREATE OR REPLACE FUNCTION public.check_rate_limit(
    p_ip_address TEXT,
    p_endpoint TEXT,
    p_max_requests INTEGER DEFAULT 100,
    p_window_seconds INTEGER DEFAULT 60
)
RETURNS TABLE(allowed BOOLEAN, current_count INTEGER, blocked_until TIMESTAMP WITH TIME ZONE)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_blocked_until TIMESTAMP WITH TIME ZONE;
    v_current_count INTEGER;
    v_window_start TIMESTAMP WITH TIME ZONE;
BEGIN
    -- Check if IP is blocked
    SELECT b.blocked_until INTO v_blocked_until
    FROM public.blocked_ips b
    WHERE b.ip_address = p_ip_address AND b.blocked_until > now();
    
    IF v_blocked_until IS NOT NULL THEN
        RETURN QUERY SELECT false, 0, v_blocked_until;
        RETURN;
    END IF;
    
    -- Calculate window start
    v_window_start := now() - (p_window_seconds || ' seconds')::INTERVAL;
    
    -- Upsert rate limit record
    INSERT INTO public.rate_limits (ip_address, endpoint, request_count, window_start)
    VALUES (p_ip_address, p_endpoint, 1, now())
    ON CONFLICT (ip_address, endpoint) DO UPDATE
    SET request_count = CASE 
        WHEN rate_limits.window_start < v_window_start THEN 1
        ELSE rate_limits.request_count + 1
    END,
    window_start = CASE 
        WHEN rate_limits.window_start < v_window_start THEN now()
        ELSE rate_limits.window_start
    END
    RETURNING rate_limits.request_count INTO v_current_count;
    
    -- Check if limit exceeded
    IF v_current_count > p_max_requests THEN
        -- Block the IP with exponential backoff
        INSERT INTO public.blocked_ips (ip_address, reason, blocked_until, block_count)
        VALUES (p_ip_address, 'rate_limit_exceeded', now() + INTERVAL '5 minutes', 1)
        ON CONFLICT (ip_address) DO UPDATE
        SET blocked_until = now() + (power(2, LEAST(blocked_ips.block_count, 8)) || ' minutes')::INTERVAL,
            block_count = blocked_ips.block_count + 1,
            updated_at = now()
        RETURNING blocked_ips.blocked_until INTO v_blocked_until;
        
        -- Log the block
        INSERT INTO public.security_logs (ip_address, endpoint, action, details)
        VALUES (p_ip_address, p_endpoint, 'blocked', jsonb_build_object('reason', 'rate_limit_exceeded', 'count', v_current_count));
        
        RETURN QUERY SELECT false, v_current_count, v_blocked_until;
        RETURN;
    END IF;
    
    RETURN QUERY SELECT true, v_current_count, NULL::TIMESTAMP WITH TIME ZONE;
END;
$$;