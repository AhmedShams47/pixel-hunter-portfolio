'use client';

import { motion, useTransform, useSpring } from 'framer-motion';
import CanvasScrubber from '@/components/CanvasScrubber';

/**
 * CinematicScrollSection — Dragon 02 / 4K Canvas Scrub
 *
 * Uses 70 pre-decoded JPEG frames extracted from the 4K source
 * (cinematic-4k.mp4 → 3840×2160 → downscaled to 1280×720).
 *
 * Zero-lag because frames are HTMLImageElement objects already decoded
 * in GPU memory. drawImage() per RAF tick, no codec seek.
 *
 * 300vh scroll container = 300px scroll per frame ≈ 4.3px/frame.
 * That's smooth enough for casual scroll AND precise enough for
 * deliberate frame inspection.
 */
const CinematicScrollSection = () => {

  return (
    <CanvasScrubber
      frameCount={70}
      framePath="/frames/cinematic-4k/frame"
      frameExt="jpg"
      poster="/images/dragon-face.jpg"
      scrubHeight="300vh"
      aspectRatio={16 / 9}
      loadingText
    >
      {/* ── Depth overlays ───────────────────────────────── */}
      {/* Cool palette — intentionally different from hero (warm purple) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 20%, hsl(220 40% 3% / 0.75) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, hsl(220 35% 3% / 0.88) 0%, hsl(220 35% 3% / 0.3) 38%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, hsl(220 35% 3% / 0.55) 0%, transparent 22%, transparent 68%, hsl(220 35% 3% / 0.92) 100%)',
        }}
      />

      {/* ── Editorial text ───────────────────────────────── */}
      <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-20">

        {/* Chapter label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-sky-400/50" />
          <span className="text-sky-400/70 text-[0.55rem] font-display tracking-[0.6em] uppercase">
            Chapter 02 — The Vision
          </span>
        </div>

        {/* Headline */}
        <h2
          className="font-display font-bold leading-[0.88] tracking-tight text-white mb-6"
          style={{ fontSize: 'clamp(2.6rem, 6vw, 6rem)' }}
        >
          Where Craft
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(135deg, hsl(200 80% 72%) 0%, hsl(220 85% 68%) 40%, hsl(258 78% 72%) 100%)',
            }}
          >
            Meets Vision.
          </span>
        </h2>

        <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-xs">
          Scroll to reveal the cinematic universe behind every Shams Visuals creation.
        </p>
      </div>
    </CanvasScrubber>
  );
};

export default CinematicScrollSection;
