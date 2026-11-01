'use client';

import LazyVideo from '@/components/LazyVideo';

/**
 * VideoSectionDivider
 *
 * Uses particle-transition.mp4 (0.9MB, 1.5s loop) as a cinematic
 * section break. Tiny file — safe to preload.
 *
 * Creates a 30vh film-strip moment between major sections.
 */
const VideoSectionDivider = () => (
  <div className="relative w-full overflow-hidden" style={{ height: '28vh' }}>
    <LazyVideo
      mp4Src="/videos/particle-transition.mp4"
      poster="/images/poster-hero.jpg"
      loop
      rootMargin="100px"
      pauseWhenHidden
      objectFit="cover"
      playbackRate={0.85}
      videoFilter="brightness(0.55) contrast(1.1) saturate(1.1)"
      className="absolute inset-0 w-full h-full"
    />
    {/* Top + bottom blends into surrounding sections */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'linear-gradient(to bottom, hsl(270 12% 4%) 0%, transparent 30%, transparent 70%, hsl(270 12% 4%) 100%)',
      }}
    />
  </div>
);

export default VideoSectionDivider;
