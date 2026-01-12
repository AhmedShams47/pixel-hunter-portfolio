# Cloudflare Configuration Guide for Portfolio Security

## 1. DNS Setup
- Add your domain to Cloudflare
- Update nameservers at your registrar
- Enable "Proxied" (orange cloud) for all DNS records

## 2. SSL/TLS Settings
Path: SSL/TLS > Overview
- Mode: **Full (strict)**
- Enable: **Always Use HTTPS**
- Enable: **Automatic HTTPS Rewrites**
- Min TLS Version: **TLS 1.2**

Path: SSL/TLS > Edge Certificates
- Enable: **HTTP Strict Transport Security (HSTS)**
  - Max Age: 12 months
  - Include subdomains: Yes
  - Preload: Yes

## 3. Firewall Rules (WAF)
Path: Security > WAF

### Rule 1: Block Bad Bots
Expression:
```
(cf.client.bot) or 
(http.user_agent contains "curl") or 
(http.user_agent contains "wget") or 
(http.user_agent contains "python") or
(http.user_agent contains "Go-http-client") or
(http.user_agent contains "Scrapy")
```
Action: **Block**

### Rule 2: Challenge Suspicious Traffic
Expression:
```
(cf.threat_score gt 30)
```
Action: **Managed Challenge**

### Rule 3: Block Countries (Optional)
Expression:
```
(ip.geoip.country in {"CN" "RU" "KP"})
```
Action: **Block** (or Managed Challenge)

### Rule 4: Protect API Endpoints
Expression:
```
(http.request.uri.path contains "/api/" or http.request.uri.path contains "/functions/") and 
(not cf.edge.server_port eq 443)
```
Action: **Block**

## 4. Rate Limiting
Path: Security > WAF > Rate limiting rules

### Contact Form Protection
- URL: `/functions/v1/contact-api`
- Requests per 10 minutes: 5
- Action: Block for 1 hour

### General API Protection
- URL: `*`
- Requests per minute: 100
- Action: Managed Challenge

## 5. Bot Management
Path: Security > Bots

- Enable: **Bot Fight Mode**
- Block AI Scrapers: **Yes** (optional)
- JavaScript Challenge for suspicious bots: **Yes**

## 6. Caching Rules
Path: Caching > Cache Rules

### Rule 1: Cache Static Assets Aggressively
Match: `*.js, *.css, *.woff2, *.png, *.jpg, *.webp, *.svg`
- Edge TTL: 1 year
- Browser TTL: 1 year
- Cache everything

### Rule 2: No Cache for HTML
Match: `*.html, /`
- Edge TTL: 1 hour
- Browser TTL: No cache
- Origin Cache-Control: On

### Rule 3: Cache Videos
Match: `/videos/*`
- Edge TTL: 30 days
- Cache everything

## 7. Page Rules (Legacy but useful)
Path: Rules > Page Rules

### Rule 1: Cache Everything for Assets
URL: `*domain.com/assets/*`
Settings:
- Cache Level: Cache Everything
- Edge Cache TTL: 1 month

### Rule 2: Security for API
URL: `*domain.com/functions/*`
Settings:
- Security Level: High
- Browser Integrity Check: On

## 8. Performance Settings
Path: Speed > Optimization

- **Auto Minify**: JS, CSS, HTML ✓
- **Brotli**: On
- **Early Hints**: On
- **Rocket Loader**: Off (can break React apps)
- **Mirage**: Off (we handle image optimization)
- **Polish**: Lossy/Lossless (your choice)

## 9. Network Settings
Path: Network

- HTTP/3 (with QUIC): **On**
- 0-RTT Connection Resumption: **On**
- gRPC: **On**
- WebSockets: **On**

## 10. Scrape Shield
Path: Scrape Shield

- Email Address Obfuscation: **On**
- Server-side Excludes: **On**
- Hotlink Protection: **On**

## 11. DDoS Protection (Automatic)
Cloudflare provides automatic DDoS protection. For additional control:

Path: Security > DDoS
- Sensitivity: **High**
- Enable all DDoS managed rulesets

## 12. Under Attack Mode (Emergency)
Path: Security > Settings

Keep "I'm Under Attack Mode" ready to enable if you detect an attack.
This adds a 5-second JavaScript challenge to all visitors.

---

## Quick Checklist
- [ ] DNS proxied through Cloudflare
- [ ] SSL set to Full (strict)
- [ ] HSTS enabled with preload
- [ ] WAF rules configured
- [ ] Rate limiting active
- [ ] Bot Fight Mode on
- [ ] Caching rules optimized
- [ ] Auto-minify enabled
- [ ] HTTP/3 enabled

## Monitoring
Path: Analytics & Logs > Web Traffic
- Monitor traffic patterns
- Check blocked requests
- Review bot activity

Path: Security > Events
- Review security events
- Adjust rules based on patterns
