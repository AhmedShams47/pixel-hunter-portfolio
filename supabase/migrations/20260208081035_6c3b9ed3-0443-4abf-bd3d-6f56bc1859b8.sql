-- Ensure FORCE ROW LEVEL SECURITY on all security tables
-- This enforces RLS even for the table owner, making them accessible
-- ONLY through SECURITY DEFINER functions (check_rate_limit, cleanup_rate_limits)

ALTER TABLE public.security_logs FORCE ROW LEVEL SECURITY;
ALTER TABLE public.blocked_ips FORCE ROW LEVEL SECURITY;
ALTER TABLE public.rate_limits FORCE ROW LEVEL SECURITY;