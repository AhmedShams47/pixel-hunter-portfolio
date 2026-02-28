

## Plan: Light-Only Theme, Text Cleanup, Responsive Polish & Premium UI Refinement

### Summary
This plan removes dark mode entirely, strips all dash symbols from text, rewrites copy to sound natural and confident, and applies responsive/viewport fixes across all devices. Videos and routing remain completely untouched.

### Tasks

#### 1. Remove Dark Mode Completely
- **ThemeContext.tsx**: Hardcode theme to `'light'` only. Remove `toggleTheme`, `localStorage`, and class toggling logic. Keep the provider wrapper so imports don't break.
- **Navbar.tsx**: Remove the Sun/Moon theme toggle button entirely. Keep the language toggle.
- **index.css**: Remove the `:root, .dark` block. Make `.light` the default `:root`. Remove the `.dark` class variables entirely. Ensure `body` always uses light variables.
- **ParticleBackground.tsx**: Update the deep-space gradient and star colors to work on a light background (soft lavender/white tones instead of near-black). Reduce nebula orb opacity for light mode.

#### 2. Remove All Dashes from Text & Rewrite Copy
- **LanguageContext.tsx**: Go through every translation string and:
  - Remove all `—` (em dashes) and `-` (hyphens used as punctuation)
  - Rewrite descriptions to sound natural, confident, human (not AI-generated)
  - Example: `"Assalamu Alaikum! I'm Ahmed Shams — I help..."` → `"Assalamu Alaikum! I am Ahmed Shams. I help..."`
- **projectsData.ts**: Remove dashes from all 13 project titles, descriptions, problems, solutions, results, and feature lists. Rewrite to feel professional and emotionally compelling.
- **PackagesHero.tsx**: Remove `// PRICING` badge style, rewrite heading naturally.
- **ProcessSection.tsx**: Remove `// PROCESS` badge, rewrite step descriptions without dashes.
- **AddOns.tsx**: Remove `// EXTRAS` badge, rewrite addon descriptions.
- **WhyChooseMe.tsx**: Remove `// WHY ME` badge, rewrite reason descriptions.
- **ProjectHero.tsx**: Remove `// PORTFOLIO` badge, rewrite copy.
- **PricingCards.tsx**: Remove dashes from feature lists (e.g., `'3–5 pages'` → `'3 to 5 pages'`).
- **PackagesCTA.tsx**: Rewrite CTA copy without dashes.
- **ProjectsCTA.tsx**: Rewrite CTA copy without dashes.
- **TrustBlock.tsx**: Clean up label text.
- **ComparisonTable.tsx**: Clean feature names.
- **AboutPage.tsx**: Remove `// ABOUT ME` badge style.
- **CaseStudyModal.tsx**: Ensure all modal text is dash-free.

#### 3. Responsive & Viewport Fixes
- **index.html**: Verify `<meta name="viewport">` includes `width=device-width, initial-scale=1.0` (already present, confirmed).
- **PageLayout.tsx**: Ensure `overflow-x-hidden` and `w-full` are on the main wrapper to prevent horizontal scroll on mobile.
- **HomePage.tsx**: Add `w-full max-w-full` to hero section containers. Ensure the video background doesn't overflow. Fix grid breakpoints for small screens.
- **Navbar.tsx**: Improve mobile spacing. Ensure nav pills don't overflow on small screens. Add `overflow-x-auto` if needed for very small devices.
- **Footer.tsx**: Make footer links wrap properly on mobile with `flex-wrap`.
- **RamadanBanner.tsx**: Ensure countdown blocks and CTA don't overflow on 320px screens. Use `flex-wrap` on the main container.
- **ProjectCard.tsx**: Ensure cards are full-width on mobile with proper padding.
- **PricingCards.tsx**: Ensure pricing grid stacks cleanly on mobile with no overflow.
- **ComparisonTable.tsx**: Ensure table scroll works properly on mobile.
- **FloatingSocialBar.tsx**: Ensure it doesn't overlap content on small screens. Adjust `bottom` and `right` values for mobile.

#### 4. Light Theme Color Refinement
- **index.css**: Refine the light theme variables for maximum premium feel:
  - Background: clean white with subtle lavender undertone
  - Cards: pure white with soft shadows
  - Muted foreground: strong enough contrast for readability
  - Glass-card utility: update for light mode (white glass with subtle border instead of dark glass)
  - Scrollbar: update for light theme
  - `gold-text` / `prime-text`: ensure gradient is visible on white background
  - `metallic-prime`: ensure it looks rich on light backgrounds

#### 5. Premium Hover & Transition Polish
- Already have `hover:-translate-y-0.5` on buttons — keep these.
- Ensure all `glass-card` elements have smooth `transition-all duration-300`.
- Verify all links and buttons have proper hover states that feel premium on the light theme.

### Protected Elements (NO CHANGES)
- `VideoIntro.tsx` — untouched
- `HomePage.tsx` video section — untouched  
- All WhatsApp/Facebook/Instagram links — untouched
- Page routing in `App.tsx` — untouched
- `FloatingSocialBar.tsx` social links — untouched

### File Change Summary
| File | Change Type |
|------|-------------|
| `src/index.css` | Major: remove dark vars, refine light theme |
| `src/contexts/ThemeContext.tsx` | Simplify to light-only |
| `src/contexts/LanguageContext.tsx` | Rewrite all translations, remove dashes |
| `src/components/Navbar.tsx` | Remove theme toggle button |
| `src/components/ParticleBackground.tsx` | Adapt for light background |
| `src/components/PageLayout.tsx` | Responsive fix |
| `src/components/Footer.tsx` | Responsive fix, text cleanup |
| `src/components/RamadanBanner.tsx` | Responsive fix, text cleanup |
| `src/components/FloatingSocialBar.tsx` | Mobile spacing fix |
| `src/data/projectsData.ts` | Remove dashes, rewrite copy |
| `src/pages/HomePage.tsx` | Responsive fix, text cleanup |
| `src/pages/AboutPage.tsx` | Text cleanup |
| `src/components/packages/PackagesHero.tsx` | Text cleanup |
| `src/components/packages/PricingCards.tsx` | Text cleanup |
| `src/components/packages/ProcessSection.tsx` | Text cleanup |
| `src/components/packages/AddOns.tsx` | Text cleanup |
| `src/components/packages/TrustBlock.tsx` | Text cleanup |
| `src/components/packages/ComparisonTable.tsx` | Text cleanup |
| `src/components/packages/PackagesCTA.tsx` | Text cleanup |
| `src/components/projects/ProjectHero.tsx` | Text cleanup |
| `src/components/projects/WhyChooseMe.tsx` | Text cleanup |
| `src/components/projects/ProjectsCTA.tsx` | Text cleanup |
| `src/components/projects/ProjectCard.tsx` | Minor responsive |
| `src/components/projects/CaseStudyModal.tsx` | Text cleanup |

