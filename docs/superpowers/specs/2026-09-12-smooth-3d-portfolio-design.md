# Smooth 3D Portfolio Design Specification

**Goal:** Transform the pixel-hunter-portfolio into a polished, high-end, smooth 3D experience that preserves all existing content and routes while delivering cinematic visual quality and buttery performance.

**Architecture:** Keep the current Next.js/Vite/React/Tailwind structure but replace scattered micro-interactions and effects with a unified cinematic 3D hero and restrained scroll-driven choreography. Use React Three Fiber + Drei + existing Lenis + Framer Motion for GPU-accelerated, prefers-reduced-motion-respecting animations.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, React Three Fiber (@react-three/fiber, @react-three/drei), Three.js, Framer Motion, Lenis, shadcn-ui, Lucide Icons.

**Spec:** This document.

## Global Constraints
- Preserve every existing route: `/`, `/about`, `/projects`, `/packages`
- Preserve all project data, case studies, pricing, contact links, bilingual copy
- Preserve all media assets (logo, profile photo, project images, videos)
- Maintain WCAG AA contrast ratios where text is overlaid
- Honor `prefers-reduced-motion` at system level (disable non-essential motion)
- First Contentful Paint < 1.5s on mid-tier mobile (Moto G Power)
- Maintain 60fps scroll + interactions on same device
- Do not add new dependencies beyond the existing stack
- Keep bundle size growth < 50KB gzipped

---
## Design Sections

### 1. Cinematic 3D Hero (replaces HomePage hero section)
**Purpose:** Create a memorable, premium first impression that encapsulates the brand’s 3D/motion strength.
**Approach:**
- A single suspended gold crown (existing `GoldCrown3D` component) floats gently in a dark void.
- Subtle, slow rotation + float; reacts to cursor with soft drift (existing logic from `HeroDragonVideo` adapted).
- Background: a static, deep gradient (`--background` to `--primary/10`) with one soft, blurred nebula (CSS radial-gradient, no JS).
- No video background; replaces `HeroDragonVideo` with lighter, more focused 3D.
- Crown scales slightly on hover/touch; click/tap plays a soft chime (Web Audio API, optional).
- Mobile fallback: static crown image with same gradient nebula (preserves visual identity without 3D cost).
**Files to touch:**
- `src/pages/HomePage.tsx` – replace entire hero `<section>` with `<CinematicCrownHero />`
- New component: `src/components/CinematicCrownHero.tsx` (extract crown logic, add interaction fallback)
- `src/index.css` – add `.cinematic-crown-hero` and motion/fallback classes

### 2. Unified Scroll Experience (replaces CinematicScrollSection + scattered motion)
**Purpose:** Deliver buttery-smooth, performant scroll with clear narrative progression.
**Approach:**
- Keep Lenis for buttery-smooth scroll (already present, verify `lerp` = 0.08–0.12).
- Replace `CinematicScrollSection` with a new `<ScrollNarrative />` component that:
  - Uses Lenis scroll progress to drive three simple, GPU-friendly stages:
    1. Entrance: text/logo fade-in + slight scale (0–30% progress)
    2. Journey: slow parallax of layered project thumbnails (30–70%)
    3. Destination: subtle scale pulse on CTA (70–100%)
  - All transforms use `transform: translateZ(0)` and `will-change: transform`.
  - Honors `prefers-reduced-motion` by reducing to simple fade-in.
- Remove per-section `motion.div` cascades; replace with single scroll-driven narrative.
**Files to touch:**
- `src/components/CinematicScrollSection.tsx` – delete, replace with `src/components/ScrollNarrative.tsx`
- `src/pages/HomePage.tsx` – replace `<CinematicScrollSection />` with `<ScrollNarrative />`
- `src/components/SmoothScrollProvider.tsx` – verify/no changes needed (keep as-is)

### 3. Refined Project & Packages Presentation
**Purpose:** Keep existing excellent project/packages sections but elevate visual polish.
**Approach:**
- Project cards: keep structure, add subtle hover lift (already present), ensure image loading uses `loading="lazy"` and `decode="async"`.
- Pricing cards: keep design, add very soft hover scale (1.02) and shadow, ensure popular plan badge pulses gently.
- All sections use same `whileInView` fade-in (already present) – no changes needed.
- Ensure all images are optimized (already are; verify via next build).
**Files to touch (minor):**
- `src/components/projects/ProjectCard.tsx` – ensure `loading="lazy"` on `<img>`
- `src/components/packages/PricingCards.tsx` – refine hover transition
- No structural changes; only polish.

### 4. Navigation & UI Chroma
**Purpose:** Keep the existing navbar/ui but harden performance.
**Approach:**
- Navbar: keep current design; ensure backdrop-filter uses `blur(24px)` (already).
- Social icons, language toggle, CTA: keep; verify hit areas ≥ 48dp.
- Toasts, modals: keep existing (sonner); no changes.
**Files to touch:** none (if audited clean).

### 5. Performance & Resilience Guardrails
**Purpose:** Ensure the redesign meets smoothness goals across devices.
**Approach:**
- Add a `perfs.json` (not committed) to track Lighthouse/CWV metrics locally.
- In `index.css`, enforce:
  - `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; } }`
  - `.glass-card { transform: translateZ(0); backface-visibility: hidden; }` (already present)
- Lazy-load all route-specific components via `React.lazy` + `Suspense` (already implied by Vite; verify).
- Audit bundle: ensure no duplicate Three.js instances.
**Files to touch:**
- `src/index.css` – add/reduce motion fallback (as above)
- `src/main.tsx` – wrap routes in `Suspure` fallback if not already (check)

---
## Implementation Plan (to be written next)
After design approval, the plan will break this into TDD-verifiable tasks:
1. Implement `CinematicCrownHero` with interaction fallback
2. Implement `ScrollNarrative` replacing `CinematicScrollSection`
3. Polish project/packages hover/focus states
4. Add motion-reduce guardrails and verify performance
5. Preserve and verify all existing routes, data, and media
6. Run full test suite (if any) and manual device checklist

---

**Approval Request:** Please review this design. If approved, I will write the implementation plan and begin TDD-driven implementation on branch `chiki/smooth-3d-redesign`. If changes are needed, specify them now.