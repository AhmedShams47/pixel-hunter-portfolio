'use client';

import { useEffect, useRef, useState } from 'react';

interface CanvasScrubberProps {
  /** Total frames available (files are {framePath}-001.{ext} …) */
  frameCount: number;
  framePath: string;
  frameExt?: string;
  /** Shown until the first frame has been drawn */
  poster?: string;
  /** Height of the scroll track; drives scrub length */
  scrubHeight?: string;
  aspectRatio?: number;
  className?: string;
  loadingText?: boolean;
  /** On phones / data-saver / low-memory devices use every Nth frame (default 2) */
  lowEndFrameStep?: number;
  children?: React.ReactNode;
}

const MAX_CONCURRENT = 6;

/** Coarse-to-fine load order: every 8th frame first, then 4th, 2nd, rest — so scrubbing works early. */
function loadOrder(n: number): number[] {
  const seen = new Set<number>();
  const order: number[] = [];
  for (const step of [8, 4, 2, 1]) {
    for (let p = 0; p < n; p += step) if (!seen.has(p)) { seen.add(p); order.push(p); }
  }
  if (!seen.has(n - 1)) order.push(n - 1);
  return order;
}

/**
 * CanvasScrubber — scroll-linked frame-sequence renderer.
 *
 *  • Nothing downloads until the visitor has scrolled within ~one screen of it, in idle time (never competes with the hero).
 *  • Frames load coarse-to-fine with a small concurrency cap; the nearest loaded frame is drawn.
 *  • Low-end devices (phones, data-saver, ≤4GB) use every Nth frame — same story, half the bytes.
 *  • Canvas bitmap = the frame's natural size; CSS `object-cover` does the fitting, so it is
 *    never stretched and DPR is irrelevant (the browser scales).
 *  • RAF runs only while the section is on screen. No React state is touched during scroll.
 *  • prefers-reduced-motion: one static middle frame, no scroll loop.
 */
export default function CanvasScrubber({
  frameCount,
  framePath,
  frameExt = 'jpg',
  poster,
  scrubHeight = '300vh',
  aspectRatio = 16 / 9,
  className = '',
  loadingText = true,
  lowEndFrameStep = 2,
  children,
}: CanvasScrubberProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number };
    const lowEnd = window.matchMedia('(max-width: 767px)').matches || !!nav.connection?.saveData || (nav.deviceMemory !== undefined && nav.deviceMemory <= 4);
    const step = lowEnd ? Math.max(1, lowEndFrameStep) : 1;
    const indices: number[] = [];
    for (let i = 0; i < frameCount; i += step) indices.push(i);
    if (indices[indices.length - 1] !== frameCount - 1) indices.push(frameCount - 1);
    const n = indices.length;

    const frames: (HTMLImageElement | undefined)[] = new Array(n);
    const url = (i: number) => `${framePath}-${String(indices[i] + 1).padStart(3, '0')}.${frameExt}`;
    let loaded = 0, inFlight = 0, started = false, destroyed = false, drawn = -1, sized = false;
    const queue = reduced ? [Math.floor(n / 2)] : loadOrder(n);
    const live: HTMLImageElement[] = [];

    const draw = (i: number) => {
      // nearest loaded frame to i
      let best = -1;
      for (let d = 0; d < n && best < 0; d++) {
        if (frames[i - d]) best = i - d;
        else if (frames[i + d]) best = i + d;
      }
      if (best < 0 || best === drawn) return;
      const img = frames[best]!;
      if (!sized) { canvas.width = img.naturalWidth; canvas.height = img.naturalHeight; sized = true; }
      ctx.drawImage(img, 0, 0);
      drawn = best;
    };

    const pump = () => {
      while (!destroyed && inFlight < MAX_CONCURRENT && queue.length) {
        const i = queue.shift()!;
        const img = new Image();
        img.decoding = 'async';
        inFlight++;
        live.push(img);
        img.onload = () => {
          inFlight--; frames[i] = img; loaded++;
          if (!isReadyRef.current) { isReadyRef.current = true; setIsReady(true); }
          if (reduced) draw(i); else if (currentTarget >= 0) draw(currentTarget);
          setProgress(Math.round((loaded / (reduced ? 1 : n)) * 100));
          pump();
        };
        img.onerror = () => { inFlight--; pump(); };
        img.src = url(i);
      }
    };
    const isReadyRef = { current: false };
    let currentTarget = 0;

    // 1) Start loading only once the visitor has scrolled close (≈ one screen away), and then
    //    only in idle time — the hero video always gets the bandwidth first.
    const begin = () => { if (started || destroyed) return; started = true; pump(); };
    const loadObserver = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started) return;
      loadObserver.disconnect();
      if ('requestIdleCallback' in window) (window as Window & typeof globalThis).requestIdleCallback(begin, { timeout: 1500 });
      else setTimeout(begin, 300);
    }, { rootMargin: '15% 0px' });
    loadObserver.observe(container);

    // 2) Scroll loop only while visible
    let raf = 0, visible = false;
    const tick = () => {
      if (!visible || destroyed) return;
      const rect = container.getBoundingClientRect();
      const track = container.offsetHeight - window.innerHeight;
      const p = track > 0 ? Math.max(0, Math.min(1, -rect.top / track)) : 0;
      currentTarget = Math.round(p * (n - 1));
      draw(currentTarget);
      raf = requestAnimationFrame(tick);
    };
    const visObserver = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !reduced) raf = requestAnimationFrame(tick);
    }, { threshold: 0 });
    visObserver.observe(container);

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      loadObserver.disconnect(); visObserver.disconnect();
      live.forEach((img) => { img.onload = null; img.onerror = null; });
    };
  }, [frameCount, framePath, frameExt, lowEndFrameStep]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`} style={{ height: scrubHeight }}>
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {!isReady && poster && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
        )}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.4s ease' }}
          data-aspect={aspectRatio}
        />
        {loadingText && isReady && progress > 0 && progress < 100 && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5" aria-hidden="true">
            <div className="h-full bg-primary/60 transition-all duration-200" style={{ width: `${progress}%` }} />
          </div>
        )}
        {children && <div className="absolute inset-0 z-10">{children}</div>}
      </div>
    </div>
  );
}
