# Vercel Portfolio Release Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Harden the existing React/Vite portfolio against confirmed correctness, accessibility, performance, and deployment defects, then publish the verified `chiki/smooth-3d-redesign` commit to Vercel.

**Architecture:** Keep the current React 18, TypeScript, Vite, Tailwind, React Router, Framer Motion, Lenis, and Three.js structure. Preserve the existing route shell and content while adding only targeted hardening and Vercel release configuration. Use the existing `origin/main` commit `233aaa429668c264cc7c49470b697115f571aaeb` as the merge base and the feature branch as the release line.

**Tech Stack:** React 18, TypeScript, Vite 5, Tailwind CSS 3, React Router 6, Framer Motion 11, Lenis 1, React Three Fiber 8, Drei 9, Three.js 0.160, GitHub, Vercel.

**Spec:** `docs/superpowers/specs/2026-09-12-smooth-3d-portfolio-design.md`

## Global Constraints
- Preserve every existing route: `/`, `/about`, `/projects`, `/packages`.
- Preserve all project data, case studies, pricing, contact links, bilingual copy, and media assets.
- Maintain WCAG AA contrast for overlaid text.
- Honor `prefers-reduced-motion` at system level by disabling non-essential motion.
- Keep first contentful paint under 1.5s on a mid-tier mobile device where measurable.
- Keep scroll and interactions smooth; avoid new render-loop work for reduced motion.
- Do not add new runtime dependencies beyond the existing stack.
- Keep bundle size growth under 50KB gzipped for the initial route.
- Deploy only a commit that passes build, TypeScript, lint, diff hygiene, and route/content checks.

---

### Task 1: Audit the complete release branch

**Files:**
- Read: `src/App.tsx`
- Read: `src/main.tsx`
- Read: `src/pages/HomePage.tsx`
- Read: `src/components/CinematicCrownHero.tsx`
- Read: `src/components/GoldCrown3D.tsx`
- Read: `src/components/ScrollNarrative.tsx`
- Read: `src/contexts/LanguageContext.tsx`
- Read: `src/index.css`
- Read: `package.json`
- Read: `docs/superpowers/specs/2026-09-12-smooth-3d-portfolio-design.md`
- Test: `npm run build`, `npx tsc --noEmit`, `npm run lint`, `git diff --check`

**Interfaces:**
- Consumes: the current branch at `f35c812` and the design specification.
- Produces: a findings list with severity, file/line evidence, and an explicit merge/deploy readiness verdict.

- [ ] **Step 1: Audit route preservation**

Verify `App.tsx` still declares `/`, `/about`, `/projects`, `/packages`, and the wildcard route. Confirm route links and navigation targets remain unchanged.

- [ ] **Step 2: Audit content and media preservation**

Compare the feature branch with `origin/main` for project data, case studies, pricing, contact links, bilingual translation keys, logo/profile/project assets, and video assets. Report any intentional removals separately from missing assets.

- [ ] **Step 3: Audit motion and performance behavior**

Check the crown render loop, `prefers-reduced-motion` handling, lazy loading, Suspense fallback, image loading attributes, Lenis configuration, and bundle output. Do not claim a mobile Lighthouse number unless a real measurement is available.

- [ ] **Step 4: Audit accessibility and resilience**

Check semantic landmarks, accessible names, focus behavior, alt text, contrast-sensitive copy, reduced-motion behavior, and lazy-load failure behavior.

- [ ] **Step 5: Run release gates**

Run `npm run build`, `npx tsc --noEmit`, `npm run lint`, and `git diff --check`. Record exact exit codes and warnings.

- [ ] **Step 6: Commit the audit result**

No production change is required for this task. Record the findings in the task report and stop before Task 2.

### Task 2: Harden confirmed application defects

**Files:**
- Modify: `src/components/CinematicCrownHero.tsx`
- Modify: `src/components/GoldCrown3D.tsx`
- Modify: `src/components/ScrollNarrative.tsx`
- Modify: `src/index.css` only if a confirmed reduced-motion or contrast defect remains
- Modify: `src/App.tsx` only if route-level lazy loading or a required error boundary is confirmed
- Test: `npm run build`, `npx tsc --noEmit`, `npm run lint`

**Interfaces:**
- Consumes: Task 1 findings and the existing component interfaces.
- Produces: targeted fixes with no new runtime dependencies and no route/content changes.

- [ ] **Step 1: Fix reduced-motion render-loop waste**

In `src/components/GoldCrown3D.tsx`, return from `useFrame` before reading or updating crown state when `reducedMotion` is true. Keep the static crown visible.

- [ ] **Step 2: Make lazy-load fallback visible**

In `src/components/CinematicCrownHero.tsx`, replace `Suspense fallback={null}` with a lightweight visible placeholder that preserves the hero’s visual hierarchy while the Three.js chunk loads. Do not add a dependency.

- [ ] **Step 3: Preserve image loading performance**

In `src/components/ScrollNarrative.tsx`, keep `loading="lazy"` and `decoding="async"` on the three project thumbnail images. Verify the same attributes remain on project cards.

- [ ] **Step 4: Fix confirmed accessibility defects only**

Add an accessible hero label if absent, preserve meaningful image alt text, and ensure reduced-motion users do not see animated fallback content. Do not change unrelated UI.

- [ ] **Step 5: Run focused verification**

Run `npm run build`, `npx tsc --noEmit`, and `npm run lint` on the changed files and record exact results.

- [ ] **Step 6: Commit the hardening changes**

Commit the focused fixes with a conventional commit message. Do not commit generated `dist/` output.

### Task 3: Add the Vercel release configuration

**Files:**
- Create: `vercel.json`
- Create or modify: `.github/workflows/deploy.yml` only if the repository’s release policy requires CI before deployment
- Modify: `package.json` only if a missing release script is confirmed necessary
- Test: `npm run build`, `npx tsc --noEmit`, `npm run lint`, Vercel CLI preview/build command

**Interfaces:**
- Consumes: the verified Vite production build and the selected Vercel project.
- Produces: a reproducible Vercel configuration with SPA fallback and no secret values committed.

- [ ] **Step 1: Add Vercel configuration**

Create `vercel.json` with `buildCommand: "npm run build"`, `outputDirectory: "dist"`, and a rewrite from `/(.*)` to `/index.html` for React Router routes.

- [ ] **Step 2: Verify no secrets are committed**

Inspect `.env`, workflow files, and Vercel configuration. Do not add tokens, account IDs, or private URLs to Git.

- [ ] **Step 3: Verify the Vite production build**

Run `npm run build` and confirm `dist/index.html` and route assets are emitted.

- [ ] **Step 4: Verify release checks**

Run `npx tsc --noEmit`, `npm run lint`, and `git diff --check` after the configuration change.

- [ ] **Step 5: Commit the release configuration**

Commit only the Vercel/release files and any necessary script changes.

### Task 4: Verify, push, and deploy the release

**Files:**
- Read: `git status`, `git log`, `git diff --check`
- Test: `npm run build`, `npx tsc --noEmit`, `npm run lint`
- External: GitHub push and Vercel deployment

**Interfaces:**
- Consumes: the reviewed, committed release branch.
- Produces: a pushed branch and a Vercel deployment URL or a concrete authorization blocker.

- [ ] **Step 1: Run the final release gate**

Run `npm run build`, `npx tsc --noEmit`, `npm run lint`, and `git diff --check` on the final commit.

- [ ] **Step 2: Review the final branch diff**

Review the complete diff from `origin/main` through the final release commit. Confirm no unrelated files, generated assets, secrets, or accidental deletions are included.

- [ ] **Step 3: Push the release branch**

Run `git push -u origin chiki/smooth-3d-redesign`. If the push is rejected, inspect the remote state and do not force-push without explicit user authorization.

- [ ] **Step 4: Connect or select the Vercel project**

Use the existing Vercel/GitHub flow when available. Do not expose credentials. If Vercel requires an interactive login, project selection, or account authorization, stop at that exact blocker and report it.

- [ ] **Step 5: Deploy the verified commit**

Deploy the pushed commit to Vercel. Verify the deployment reports a successful build and provide the resulting URL. Do not claim success from a local build alone.

- [ ] **Step 6: Record the release result**

Record the final commit SHA, branch, Vercel project/deployment URL, verification results, and any residual warnings or blockers in the final response.

