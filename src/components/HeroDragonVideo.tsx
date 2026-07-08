import { useEffect, useRef } from 'react';

/**
 * Hero dragon background video with subtle cursor drift + scroll parallax.
 * Uses transform only (GPU) so it stays cheap. Never modifies the video asset
 * itself and honors prefers-reduced-motion.
 */
const HeroDragonVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.8;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const el = wrapRef.current;
    if (!el) return;

    let mx = 0, my = 0, sy = 0;
    let cx = 0, cy = 0, cs = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      // normalize to [-1, 1]
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onScroll = () => {
      sy = Math.min(window.scrollY, 800);
    };

    const tick = () => {
      // easing toward target
      cx += (mx - cx) * 0.05;
      cy += (my - cy) * 0.05;
      cs += (sy - cs) * 0.08;
      const tx = cx * 14; // px cursor drift
      const ty = cy * 10 + cs * 0.15; // px cursor + parallax
      const scale = 1.08 + Math.min(cs / 4000, 0.06);
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        ref={wrapRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: 'translate3d(0,0,0) scale(1.08)' }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.3)' }}
        >
          <source src="/videos/dragon-eye-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
    </div>
  );
};

export default HeroDragonVideo;
