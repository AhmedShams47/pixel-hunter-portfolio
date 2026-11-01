'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor
 *
 * Two-part custom cursor for desktop:
 *
 *   • Inner dot  — 8px, follows mouse exactly (instant)
 *   • Outer ring — 44px, spring-lags behind the dot (~9% lerp per frame)
 *
 * States (driven by hovered element):
 *   • default   → ring at 44px, semi-transparent border
 *   • hover     → ring scales to 64px, fills with primary glow
 *   • text      → ring collapses to a thin underline-like bar
 *   • drag      → ring scales to 80px with a "grab" appearance
 *
 * Hidden automatically on touch/mobile via the `no-fine-pointer` check.
 * Respects prefers-reduced-motion (no lag, instant position only).
 *
 * Usage: drop <CustomCursor /> once inside <App /> outside all routes.
 * Elements opt in to hover state via:
 *   data-cursor="hover"   → on buttons, cards, links
 *   data-cursor="text"    → on readable body text areas
 *   data-cursor="drag"    → on carousels / draggable areas
 */
const CustomCursor = () => {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<'default' | 'hover' | 'text' | 'drag'>('default');
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true); // assume touch until proven otherwise

  // Ring position (lerped)
  const ringPos = useRef({ x: -100, y: -100 });
  // Dot position (instant)
  const dotPos  = useRef({ x: -100, y: -100 });
  const raf     = useRef(0);

  const prefersReduced = useRef(
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    // Only show custom cursor when the device has a fine pointer (mouse)
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;
    setIsTouch(false);

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const lerp = prefersReduced.current ? 1.0 : 0.09; // 1.0 = instant for reduced motion

    const onMove = (e: MouseEvent) => {
      dotPos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const el = target.closest('[data-cursor]') as HTMLElement | null;
      const tag = target.tagName.toLowerCase();
      const isLink = tag === 'a' || tag === 'button' || target.closest('a,button') !== null;

      if (el) {
        const s = el.dataset.cursor as typeof state;
        setState(s || 'default');
      } else if (isLink) {
        setState('hover');
      } else if (tag === 'p' || tag === 'span' || tag === 'h1' || tag === 'h2' || tag === 'h3' || tag === 'li') {
        setState('text');
      } else {
        setState('default');
      }
    };

    document.addEventListener('mousemove', onMove,  { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseover',  onOver, { passive: true });

    const tick = () => {
      // Ring lerps toward dot
      ringPos.current.x += (dotPos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (dotPos.current.y - ringPos.current.y) * lerp;

      dot.style.transform  = `translate(${dotPos.current.x}px, ${dotPos.current.y}px)`;
      ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      document.removeEventListener('mousemove',  onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseover',  onOver);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isTouch) return null;

  // ── Ring size & style per state ──────────────────────
  const ringSize: Record<typeof state, string> = {
    default: '44px',
    hover:   '64px',
    text:    '2px',
    drag:    '80px',
  };
  const ringW: Record<typeof state, string> = {
    default: '44px',
    hover:   '64px',
    text:    '56px',
    drag:    '80px',
  };
  const ringBg: Record<typeof state, string> = {
    default: 'transparent',
    hover:   'hsl(268 87% 64% / 0.12)',
    text:    'hsl(268 87% 64% / 0.8)',
    drag:    'hsl(268 87% 64% / 0.08)',
  };
  const ringBorder: Record<typeof state, string> = {
    default: '1.5px solid rgba(255,255,255,0.45)',
    hover:   '1.5px solid hsl(268 87% 64% / 0.9)',
    text:    'none',
    drag:    '1.5px solid hsl(268 87% 64% / 0.7)',
  };
  const ringRadius: Record<typeof state, string> = {
    default: '50%',
    hover:   '50%',
    text:    '2px',
    drag:    '50%',
  };

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position:  'fixed',
          top:       '-4px',
          left:      '-4px',
          width:     '8px',
          height:    '8px',
          borderRadius: '50%',
          background: state === 'hover' ? 'hsl(268 87% 72%)' : 'white',
          pointerEvents: 'none',
          zIndex:    9998,
          opacity:   visible ? (state === 'text' ? 0 : 1) : 0,
          transition: 'opacity 0.2s ease, background 0.25s ease, width 0.25s ease, height 0.25s ease',
          mixBlendMode: 'difference' as const,
          willChange: 'transform',
        }}
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position:  'fixed',
          top:       `calc(-${ringSize[state]} / 2)`,
          left:      `calc(-${ringW[state]} / 2)`,
          width:     ringW[state],
          height:    ringSize[state],
          borderRadius: ringRadius[state],
          background: ringBg[state],
          border:    ringBorder[state],
          pointerEvents: 'none',
          zIndex:    9997,
          opacity:   visible ? 1 : 0,
          transition:
            'opacity 0.2s ease, width 0.35s cubic-bezier(0.23,1,0.32,1), height 0.35s cubic-bezier(0.23,1,0.32,1), top 0.35s cubic-bezier(0.23,1,0.32,1), left 0.35s cubic-bezier(0.23,1,0.32,1), background 0.3s ease, border 0.3s ease, border-radius 0.35s ease',
          willChange: 'transform',
          boxShadow: state === 'hover'
            ? '0 0 18px hsl(268 87% 64% / 0.35)'
            : state === 'drag'
              ? '0 0 24px hsl(268 87% 64% / 0.2)'
              : 'none',
        }}
      />
    </>
  );
};

export default CustomCursor;
