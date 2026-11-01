'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  /** WebM source (preferred — smaller, VP9 codec) */
  webmSrc?: string;
  /** MP4 fallback (H.264, wider compat) */
  mp4Src?: string;
  /** Poster image shown before/instead of video */
  poster?: string;
  /** Loop the video (for ambient backgrounds) */
  loop?: boolean;
  /** How much before viewport to start loading (px or %) */
  rootMargin?: string;
  className?: string;
  style?: React.CSSProperties;
  /** objectFit for the video element */
  objectFit?: 'cover' | 'contain' | 'fill';
  /** Playback rate (0.75 for slow, 1 for normal) */
  playbackRate?: number;
  /** CSS filter */
  videoFilter?: string;
  /** Pause when section leaves viewport (saves battery) */
  pauseWhenHidden?: boolean;
  'aria-hidden'?: boolean;
}

/**
 * LazyVideo
 *
 * Performance-first video loader:
 *
 *   1. Renders only a poster image until element is near viewport.
 *   2. IntersectionObserver fires → sets src → video begins loading.
 *   3. Once loaded and playing, poster fades out cleanly.
 *   4. Pauses when scrolled out of view (saves CPU/battery).
 *   5. Respects prefers-reduced-motion (poster only, no video).
 *   6. WebM preferred → MP4 fallback (VP9 ~60% smaller than H.264).
 *   7. Handles error state gracefully (stays on poster).
 *
 * Usage:
 *   <LazyVideo
 *     webmSrc="/videos/webm/about-portrait.webm"
 *     mp4Src="/videos/about-portrait.mp4"
 *     poster="/images/dragon-face.jpg"
 *     loop
 *     objectFit="cover"
 *     pauseWhenHidden
 *   />
 */
const LazyVideo = ({
  webmSrc,
  mp4Src,
  poster,
  loop            = true,
  rootMargin      = '400px',
  className       = '',
  style           = {},
  objectFit       = 'cover',
  playbackRate    = 1,
  videoFilter,
  pauseWhenHidden = true,
  'aria-hidden': ariaHidden = true,
}: LazyVideoProps) => {
  const videoRef      = useRef<HTMLVideoElement>(null);
  const [srcLoaded,   setSrcLoaded]   = useState(false);
  const [isPlaying,   setIsPlaying]   = useState(false);
  const [hasError,    setHasError]    = useState(false);

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Lazy src injection ────────────────────────────────────────
  useEffect(() => {
    if (prefersReduced) return; // Never load video for reduced-motion users
    const video = videoRef.current;
    if (!video) return;

    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !srcLoaded) {
          // Inject sources — triggers network request
          if (webmSrc) {
            const s = document.createElement('source');
            s.src  = webmSrc;
            s.type = 'video/webm';
            video.prepend(s);
          }
          if (mp4Src) {
            const s = document.createElement('source');
            s.src  = mp4Src;
            s.type = 'video/mp4';
            video.appendChild(s);
          }
          video.load();
          setSrcLoaded(true);
          loadObserver.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    loadObserver.observe(video);
    return () => loadObserver.disconnect();
  }, [webmSrc, mp4Src, rootMargin, srcLoaded, prefersReduced]);

  // ── Play/pause based on visibility ───────────────────────────
  useEffect(() => {
    if (!pauseWhenHidden || !srcLoaded) return;
    const video = videoRef.current;
    if (!video) return;

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { /* autoplay blocked */ });
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    visibilityObserver.observe(video);
    return () => visibilityObserver.disconnect();
  }, [srcLoaded, pauseWhenHidden]);

  // ── Page visibility (tab hidden = pause) ─────────────────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onVisibility = () => {
      if (document.hidden) video.pause();
      else if (isPlaying) video.play().catch(() => {});
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [isPlaying]);

  // ── Apply playback rate ───────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = playbackRate;
  }, [playbackRate, isPlaying]);

  return (
    <div
      // `relative` must not be combined with a caller-supplied `absolute` (Tailwind emits relative last, so it wins)
      className={`overflow-hidden ${/(^|\s)(absolute|fixed|sticky)(\s|$)/.test(className) ? '' : 'relative'} ${className}`}
      style={style}
    >
      {/* Poster — visible until video plays */}
      {poster && (
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit,
            opacity: isPlaying && !hasError ? 0 : 1,
            transition: 'opacity 0.6s ease',
          }}
        />
      )}

      {/* Video element */}
      <video
        ref={videoRef}
        aria-hidden={ariaHidden}
        muted
        autoPlay={false} /* LazyVideo controls playback manually */
        loop={loop}
        playsInline
        preload="none"  /* we control loading via src injection */
        tabIndex={-1}
        disablePictureInPicture
        className="w-full h-full"
        style={{
          objectFit,
          opacity: isPlaying && !hasError ? 1 : 0,
          transition: 'opacity 0.6s ease',
          filter: videoFilter,
        }}
        onCanPlay={() => {
          const video = videoRef.current;
          if (!video) return;
          video.playbackRate = playbackRate;
          video.play().then(() => setIsPlaying(true)).catch(() => {});
        }}
        onError={() => setHasError(true)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
    </div>
  );
};

export default LazyVideo;
