import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Cinematic scroll-controlled parallax section.
 * Uses the existing dragon-intro.mp4 as a scroll-driven centerpiece
 * (Jesko Jets / Apple style). The video file itself is NOT modified.
 */
const CinematicScrollSection = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);
  const [canPlay, setCanPlay] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Buttery smooth spring for all derived values
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.4,
  });

  // Parallax + cinematic transforms
  const scale = useTransform(smooth, [0, 0.5, 1], [1.05, 1.12, 1.22]);
  const titleY = useTransform(smooth, [0, 1], ['0%', '-60%']);
  const titleOpacity = useTransform(smooth, [0, 0.35, 0.7, 1], [1, 1, 0.3, 0]);
  const subY = useTransform(smooth, [0, 1], ['0%', '-30%']);
  const overlayOpacity = useTransform(smooth, [0, 0.5, 1], [0.55, 0.35, 0.7]);
  const blurAmount = useTransform(smooth, [0, 0.5, 1], [0, 1.5, 4]);
  const blur = useTransform(blurAmount, (v) => `blur(${v}px)`);

  // Drive video currentTime from scroll progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canPlay || !duration) return;

    let raf = 0;
    const unsub = smooth.on('change', (p) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const target = Math.max(0, Math.min(duration - 0.05, p * duration));
        // Avoid micro-seek thrash
        if (Math.abs(video.currentTime - target) > 0.03) {
          try {
            video.currentTime = target;
          } catch {
            /* ignore seek errors */
          }
        }
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      unsub();
    };
  }, [smooth, duration, canPlay]);

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: '320vh' }}
      aria-label="Cinematic dragon scroll experience"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Video layer */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ scale, filter: blur }}
        >
          <video
            ref={videoRef}
            src="/videos/dragon-intro.mp4"
            muted
            playsInline
            preload="auto"
            tabIndex={-1}
            disablePictureInPicture
            className="h-full w-full object-cover pointer-events-none select-none"
            style={{ transform: 'translateZ(0)' }}
            onLoadedMetadata={(e) => {
              const v = e.currentTarget;
              setDuration(v.duration || 0);
              v.pause();
              v.currentTime = 0;
            }}
            onCanPlay={() => setCanPlay(true)}
          />
        </motion.div>

        {/* Cinematic dark gradient overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: overlayOpacity,
            background:
              'radial-gradient(ellipse at center, transparent 30%, hsl(270 30% 4% / 0.85) 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, hsl(270 30% 4% / 0.5) 0%, transparent 25%, transparent 70%, hsl(270 30% 4% / 0.85) 100%)',
          }}
        />

        {/* Foreground text — parallax */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            style={{ y: titleY, opacity: titleOpacity }}
            className="will-change-transform"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/15 backdrop-blur-md bg-white/5">
              <span className="text-white/80 text-xs font-display tracking-[0.35em] uppercase">
                {t('hero.badge')}
              </span>
            </div>

            <h2 className="font-display font-bold tracking-tight text-white text-5xl md:text-7xl lg:text-8xl leading-[1.05]">
              Enter The
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, hsl(280 90% 75%) 0%, hsl(310 90% 70%) 50%, hsl(280 90% 75%) 100%)',
                }}
              >
                Dragon's Realm
              </span>
            </h2>
          </motion.div>

          <motion.p
            style={{ y: subY }}
            className="mt-8 max-w-xl text-white/70 text-lg md:text-xl font-light leading-relaxed will-change-transform"
          >
            Scroll to unveil the cinematic universe behind every Shams Visuals creation.
          </motion.p>

          {/* Scroll hint */}
          <motion.div
            style={{ opacity: titleOpacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-white/50 text-[10px] tracking-[0.4em] uppercase font-display">
              Scroll
            </span>
            <div className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CinematicScrollSection;
