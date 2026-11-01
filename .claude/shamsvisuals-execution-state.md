# SHAMSVISUALS — Execution State
**Persistence rule:** only /mnt/user-data survives sandbox resets (/tmp is wiped — happened 3×). This folder is the source of truth.
Build: copy to /tmp/build (tar, excluding node_modules/.next) → `npm install && npm run build`.

## Status: BUILT + TESTED locally. NOT deployed (no Vercel/GitHub credentials in sandbox).
Next.js 15.5 · React 18 · App Router · Tailwind 3. 22 static pages: 4 routes + 13 /projects/[slug] + 404 + robots + sitemap.
Rollback = existing Vite site on GitHub `main` (untouched by this work).

## Verified (real headless Chromium + crawl)
- tsc 0 errors; build clean. 17 routes: unique title/description/canonical/OG, 1×h1, valid JSON-LD, 25 internal links none broken, no stale contacts/banned words.
- 18 behaviour checks pass: BN/EN toggle, filter (13→Beauty 2), card→slug nav, Lenis off on touch/reduced-motion (on, with fine pointer), grain off in reduced-motion, skip link + focus, both canvases paint, scrubbing yields 4/4 distinct frames, no console errors.
- Content visible with JS disabled (h1/nav opacity 1, 0 stuck elements).
- 0px horizontal overflow, CLS 0 on all routes at 390/820/1440.

## Measured improvements
- Home load payload 17.4MB → 5.1MB (frames 9.5MB → 0 at load; stream in on scroll). /projects 8.3MB → 1.3MB.
- public/ 120MB → ~25MB. about-portrait 17→1.1MB, ambient 9.9→1.1MB, cyberpunk 4.1→0.7MB, hero-scroll 3.4→0.4MB, v-logo 1.9MB→15KB (webp). Videos faststart.
- Fonts self-hosted (108KB), no third-party request (was render-blocking Google @import).
- Next-reported First Load JS shared 103kB (Vite build was 565kB / 176kB gz). Not directly comparable; no real-device LCP/INP measured.

## Bugs found & fixed (would have shipped)
1. ParticleBackground painted a LIGHT full-screen gradient over the dark theme (white pages).
2. LazyVideo hard-coded `relative`, overriding `absolute` → "background" videos sat in flow and pushed text down.
3. Above-fold text + whole page (template.tsx) were opacity:0 in server HTML until hydration → now pure CSS entrances; noscript fallback for scroll reveals.
4. CanvasScrubber: eager 130-frame download; DPR double-scaling (retina phones showed a cropped quarter); stretched frames; permanent RAF. Rewritten (lazy, idle, coarse-to-fine, capped concurrency, low-end stride, RAF only while visible, native-size bitmap + CSS cover).
5. Hero poster was dragon-face.jpg but video is different footage (flash swap) → poster-hero.jpg (first frame), fetchPriority high.
6. Mobile nav clipped "Packages"; V-logo collided with kicker; scroll cue overlapped CTA.
7. Muted text contrast 4.7:1 → 7.1:1.

## Content/fact fixes
- REMOVED fabricated "100% Client Satisfaction" and "10+ Industries Served" (data has 9; no clients). Stats now derived from data (13/9/13).
- About no longer says "worked with clients across 10+ industries"; says projects are self-directed builds. Case-study pages label every project "Self-directed build".
- "world-class/world class" removed everywhere. WhyChooseMe ("Why Clients Trust My Work", "International agency level") → HowIBuild.
- Stale WhatsApp 8801707887676 → 8801629580476; old Facebook URL gone. Single source: lib/site.ts.
- RamadanBanner OFF (SITE.promoBannerEnabled=false): "20% OFF this Ramadan" was live in October. Confirm the offer + re-enable before Ramadan 2027.

## Late fixes (final pass)
- PackagesHero: removed unbackable outcome claims ("increase revenue", "Built for results"); now a Server Component with CSS entrance (was hydration-dependent opacity:0 on the above-fold H1).
- Footer links 20px → ≥40px tap targets (only undersized targets on mobile). <html lang> follows the BN/EN toggle.
- Social card: new 1200×630 /images/og.jpg (dragon artwork + V mark + Cinzel). Hero-footage prop weapon deliberately NOT used in share previews.
- Verified rendered tags: og:image 1200×630, twitter summary_large_image.

## Decisions
- Hybrid RSC: pages are Server Components; Reveal/T are thin client boundaries; below-fold reveals via framer, above-fold via CSS.
- Route transition = entrance-only CSS in template.tsx (Server Component). No exit animation: exits need the old page mounted, fighting App Router + delaying clicks.
- Lenis only on fine-pointer, non-reduced-motion. BN/EN preserved via lib/i18n.ts + <T k>; SSR HTML is English.
- Dropped dead infra: QueryClientProvider, ThemeContext, GoldCrown3D/DragonFrame/VideoIntro/ConnectModal, CaseStudyModal, AnimatedCounter, 13 deps (~92MB).
- dragon-eye-bg.mp4 not shipped (unused). Original raw 4K/square sources not shipped (frames extracted).

## Open / needs the owner
- PRICING_UNVERIFIED: ৳25,000 / ৳65,000 / ৳1,50,000+ unchanged. Packages sub-components (PricingCards, ComparisonTable, TrustBlock, WhoIsThisFor, AddOns, PackagesHero, PackagesCTA) copy NOT audited line by line.
- Demo URLs (*.vercel.app) not verifiable from sandbox.
- Not done: push to GitHub, Vercel staging/production, real Safari/iOS/Firefox/Android testing, real-device Core Web Vitals (sandbox renders in software; LCP/INP numbers there are meaningless).
- Bangla coverage: nav, hero, disciplines, services, CTA, About intro. Chapter text, process steps, case studies, packages are English only. Bangla glyph font = system fallback.
- Hero video is the "Vice City" character footage the owner supplied; confirm it is wanted as the main identity visual.
