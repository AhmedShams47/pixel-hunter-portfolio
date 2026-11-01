'use client';

import { useEffect, useRef } from 'react';

/**
 * HeroDragonVideo — Dragon 01: POWER
 *
 * PRIMARY: hero-loop.mp4 (2.8MB, 1280×720, 8s seamless loop)
 *   — the lightest canvas video, loads fast, plays immediately
 *
 * SECONDARY: hero-scroll.mp4 (3.3MB) — available for scroll-transition
 *   layer if needed (wired separately via LazyVideo)
 *
 * POSTER: dragon-face.jpg — shown instantly, never blank screen
 *
 * Depth composition (back → front):
 *   0. Poster image (instant, no JS needed)
 *   1. Video layer (hero-loop.mp4, scale(1.10) breathing room for parallax)
 *   2. Dragon ambient glow (purple radiance right-center)
 *   3. Vignette (radial edge darkening)
 *   4. Left fog (negative space for typography)
 *   5. Top darkening (navbar area)
 *   6. Bottom mist (text landing zone — fully opaque at 0%)
 *
 * Interaction:
 *   Mouse → 14px max drift, 0.04 lerp (camera-like float)
 *   Scroll → parallax pull + micro scale (camera pull-back)
 *   Reduced-motion → all movement disabled
 */
const HeroDragonVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.75;

    const prefersReduced =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const el = wrapRef.current;
    if (!el) return;

    let mx = 0, my = 0, sy = 0;
    let cx = 0, cy = 0, cs = 0;
    let raf = 0;

    const onMove   = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onScroll = () => { sy = Math.min(window.scrollY, 800); };

    const tick = () => {
      cx += (mx - cx) * 0.04;
      cy += (my - cy) * 0.04;
      cs += (sy - cs) * 0.07;

      const tx    = cx * 14;
      const ty    = cy * 10 + cs * 0.12;
      const scale = 1.10 + Math.min(cs / 3500, 0.07);

      el.style.transform = `translate3d(${tx}px,${ty}px,0) scale(${scale})`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove,   { passive: true });
    window.addEventListener('scroll',    onScroll, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll',    onScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">

      {/* Poster — immediate, zero JS, never blank */}
      <img
        src="/images/poster-hero.jpg"
        fetchPriority="high"
        decoding="async"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.35) saturate(1.3)' }}
      />

      {/* Video layer */}
      <div
        ref={wrapRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: 'translate3d(0,0,0) scale(1.10)' }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          style={{ filter: 'brightness(0.44) contrast(1.08) saturate(1.18)' }}
        >
          {/* Primary: lightest canvas video */}
          <source src="/videos/hero-loop.mp4"       type="video/mp4" />
        </video>
      </div>

      {/* DEPTH 1: Dragon ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 68% 50%, hsl(280 85% 40% / 0.14) 0%, transparent 75%)',
      }} />

      {/* DEPTH 2: Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 100% 90% at 62% 45%, transparent 25%, hsl(270 12% 4% / 0.52) 75%, hsl(270 12% 4% / 0.82) 100%)',
      }} />

      {/* DEPTH 3: Left fog (typography negative space) */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to right, hsl(270 12% 4% / 0.90) 0%, hsl(270 12% 4% / 0.55) 28%, hsl(270 12% 4% / 0.12) 55%, transparent 75%)',
      }} />

      {/* DEPTH 4: Top darkening */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, hsl(270 12% 4% / 0.72) 0%, hsl(270 12% 4% / 0.18) 30%, transparent 55%)',
      }} />

      {/* DEPTH 5: Bottom ground mist */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to top, hsl(270 12% 4%) 0%, hsl(270 12% 4% / 0.88) 18%, hsl(270 12% 4% / 0.42) 45%, transparent 68%)',
      }} />
    </div>
  );
};

export default HeroDragonVideo;
