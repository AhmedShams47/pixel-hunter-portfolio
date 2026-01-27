-- ============================================================
-- SECURITY FIX: Lock down blocked_ips table completely
-- ============================================================
-- 
-- GOAL: Only service_role (edge functions, SECURITY DEFINER functions) 
-- can access this table. Anonymous and authenticated users get NO access.
--
-- HOW IT WORKS:
-- 1. RLS is enabled on the table
-- 2. We remove all policies (no PERMISSIVE policies = no access granted)
-- 3. service_role bypasses RLS by design in Supabase
-- 4. SECURITY DEFINER functions (check_rate_limit, cleanup_rate_limits) 
--    run as postgres superuser, also bypassing RLS
--
-- RESULT:
-- - anon role: NO access (denied by default, no policy grants access)
-- - authenticated role: NO access (denied by default, no policy grants access)  
-- - service_role: FULL access (bypasses RLS completely)
-- - SECURITY DEFINER functions: FULL access (run as superuser)
-- ============================================================

-- Drop all existing policies on blocked_ips (cleanup)
DROP POLICY IF EXISTS "Deny public delete" ON public.blocked_ips;
DROP POLICY IF EXISTS "Deny public insert" ON public.blocked_ips;
DROP POLICY IF EXISTS "Deny public select" ON public.blocked_ips;
DROP POLICY IF EXISTS "Deny public update" ON public.blocked_ips;

-- Ensure RLS is enabled (should already be, but confirm)
ALTER TABLE public.blocked_ips ENABLE ROW LEVEL SECURITY;

-- Force RLS even for table owner (extra security layer)
ALTER TABLE public.blocked_ips FORCE ROW LEVEL SECURITY;

-- Add a table comment explaining the security model
COMMENT ON TABLE public.blocked_ips IS 
'SECURITY: This table has RLS enabled with NO policies, meaning:
- Anonymous users: NO ACCESS
- Authenticated users: NO ACCESS  
- Service role: FULL ACCESS (bypasses RLS)
- SECURITY DEFINER functions: FULL ACCESS (superuser context)
This table is managed only by internal rate-limiting functions.';

-- ============================================================
-- Apply same hardening to rate_limits and security_logs tables
-- ============================================================

-- rate_limits table
DROP POLICY IF EXISTS "Deny public delete" ON public.rate_limits;
DROP POLICY IF EXISTS "Deny public insert" ON public.rate_limits;
DROP POLICY IF EXISTS "Deny public select" ON public.rate_limits;
DROP POLICY IF EXISTS "Deny public update" ON public.rate_limits;
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rate_limits FORCE ROW LEVEL SECURITY;
COMMENT ON TABLE public.rate_limits IS 
'SECURITY: RLS enabled, no policies = no public access. Service role and SECURITY DEFINER functions only.';

-- security_logs table
DROP POLICY IF EXISTS "Deny public delete" ON public.security_logs;
DROP POLICY IF EXISTS "Deny public insert" ON public.security_logs;
DROP POLICY IF EXISTS "Deny public select" ON public.security_logs;
DROP POLICY IF EXISTS "Deny public update" ON public.security_logs;
ALTER TABLE public.security_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.security_logs FORCE ROW LEVEL SECURITY;
COMMENT ON TABLE public.security_logs IS 
'SECURITY: RLS enabled, no policies = no public access. Service role and SECURITY DEFINER functions only.';