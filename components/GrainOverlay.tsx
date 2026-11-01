'use client';

/**
 * GrainOverlay
 *
 * Adds a subtle animated film-grain texture across the entire page.
 * This is the single most cost-effective "premium feel" improvement:
 * it removes the "flat digital" quality that makes sites feel cheap.
 *
 * The SVG feTurbulence generates the noise; the CSS @keyframes
 * shifts its position every frame to produce animated grain.
 * Total GPU cost: essentially zero.
 *
 * Respects prefers-reduced-motion by stopping animation.
 */
const GrainOverlay = () => (
  <div
    aria-hidden="true"
    className="grain-overlay"
  />
);

export default GrainOverlay;
