-- Lock down security/ops tables: deny all client access.
-- These tables are written/read only by SECURITY DEFINER functions and edge functions
-- using the service_role, which bypasses RLS. No anon/authenticated access needed.

ALTER TABLE public.security_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blocked_ips ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Revoke any Data API access from anon/authenticated roles
REVOKE ALL ON public.security_logs FROM anon, authenticated;
REVOKE ALL ON public.blocked_ips FROM anon, authenticated;
REVOKE ALL ON public.rate_limits FROM anon, authenticated;

-- Ensure service_role retains full access for edge functions / admin code
GRANT ALL ON public.security_logs TO service_role;
GRANT ALL ON public.blocked_ips TO service_role;
GRANT ALL ON public.rate_limits TO service_role;

-- Explicit default-deny policies so the RLS linter is satisfied and intent is clear.
-- No policy grants access to anon or authenticated; service_role bypasses RLS.
DROP POLICY IF EXISTS "Deny all client access to security_logs" ON public.security_logs;
CREATE POLICY "Deny all client access to security_logs"
  ON public.security_logs
  AS RESTRICTIVE
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

DROP POLICY IF EXISTS "Deny all client access to blocked_ips" ON public.blocked_ips;
CREATE POLICY "Deny all client access to blocked_ips"
  ON public.blocked_ips
  AS RESTRICTIVE
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

DROP POLICY IF EXISTS "Deny all client access to rate_limits" ON public.rate_limits;
CREATE POLICY "Deny all client access to rate_limits"
  ON public.rate_limits
  AS RESTRICTIVE
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);