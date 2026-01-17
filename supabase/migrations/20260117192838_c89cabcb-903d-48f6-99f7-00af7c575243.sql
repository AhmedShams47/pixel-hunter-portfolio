-- Drop existing policies and recreate with correct PERMISSIVE type
-- The issue is that RESTRICTIVE policies alone don't work - they only restrict what PERMISSIVE policies allow

-- Drop existing policies on blocked_ips
DROP POLICY IF EXISTS "No public access" ON public.blocked_ips;
DROP POLICY IF EXISTS "Service role only" ON public.blocked_ips;

-- Drop existing policies on security_logs
DROP POLICY IF EXISTS "No public access" ON public.security_logs;
DROP POLICY IF EXISTS "Service role only" ON public.security_logs;

-- Drop existing policies on rate_limits
DROP POLICY IF EXISTS "No public access" ON public.rate_limits;
DROP POLICY IF EXISTS "Service role only" ON public.rate_limits;

-- Create new PERMISSIVE policies that deny all access to anon and authenticated users
-- These are the default policy type (PERMISSIVE) which properly blocks access

-- blocked_ips: Deny all public access
CREATE POLICY "Deny public select" ON public.blocked_ips
  FOR SELECT TO anon, authenticated USING (false);

CREATE POLICY "Deny public insert" ON public.blocked_ips
  FOR INSERT TO anon, authenticated WITH CHECK (false);

CREATE POLICY "Deny public update" ON public.blocked_ips
  FOR UPDATE TO anon, authenticated USING (false) WITH CHECK (false);

CREATE POLICY "Deny public delete" ON public.blocked_ips
  FOR DELETE TO anon, authenticated USING (false);

-- security_logs: Deny all public access  
CREATE POLICY "Deny public select" ON public.security_logs
  FOR SELECT TO anon, authenticated USING (false);

CREATE POLICY "Deny public insert" ON public.security_logs
  FOR INSERT TO anon, authenticated WITH CHECK (false);

CREATE POLICY "Deny public update" ON public.security_logs
  FOR UPDATE TO anon, authenticated USING (false) WITH CHECK (false);

CREATE POLICY "Deny public delete" ON public.security_logs
  FOR DELETE TO anon, authenticated USING (false);

-- rate_limits: Deny all public access
CREATE POLICY "Deny public select" ON public.rate_limits
  FOR SELECT TO anon, authenticated USING (false);

CREATE POLICY "Deny public insert" ON public.rate_limits
  FOR INSERT TO anon, authenticated WITH CHECK (false);

CREATE POLICY "Deny public update" ON public.rate_limits
  FOR UPDATE TO anon, authenticated USING (false) WITH CHECK (false);

CREATE POLICY "Deny public delete" ON public.rate_limits
  FOR DELETE TO anon, authenticated USING (false);