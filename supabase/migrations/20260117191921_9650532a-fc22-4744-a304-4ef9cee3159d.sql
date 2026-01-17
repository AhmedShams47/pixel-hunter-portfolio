-- Add PERMISSIVE policies to deny all public access to security tables
-- These work together with the existing RESTRICTIVE policies

-- Policy for blocked_ips table
CREATE POLICY "No public access" ON public.blocked_ips
FOR ALL
TO public
USING (false)
WITH CHECK (false);

-- Policy for security_logs table  
CREATE POLICY "No public access" ON public.security_logs
FOR ALL
TO public
USING (false)
WITH CHECK (false);

-- Policy for rate_limits table
CREATE POLICY "No public access" ON public.rate_limits
FOR ALL
TO public
USING (false)
WITH CHECK (false);