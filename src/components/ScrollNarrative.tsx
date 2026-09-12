import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import shamsLogo from '@/assets/shams-logo.jpg';
import { projects } from '@/data/projectsData';

const ScrollNarrative = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.4,
  });

  const scale = useTransform(smooth, [0, 0.5, 1], [1.05, 1.12, 1.22]);
  const titleY = useTransform(smooth, [0, 1], ['0%', '-60%']);
  const titleOpacity = useTransform(smooth, [0, 0.35, 0.7, 1], [1, 1, 0.3, 0]);
  const subY = useTransform(smooth, [0, 1], ['0%', '-30%']);
  const overlayOpacity = useTransform(smooth, [0, 0.5, 1], [0.55, 0.35, 0.7]);
  const blurAmount = useTransform(smooth, [0, 0.5, 1], [0, 1.5, 4]);
  const blur = useTransform(blurAmount, (v) => `blur(${v}px)`);

  // For parallax thumbnails
  const parallax1 = useTransform(smooth, [0, 0.5, 1], [0, -100, -200]);
  const parallax2 = useTransform(smooth, [0, 0.5, 1], [0, 50, 100]);
  const parallax3 = useTransform(smooth, [0, 0.5, 1], [0, -30, -60]);
  const parallaxOpacity1 = useTransform(smooth, [0, 0.5, 1], [0, 0.8, 0.3]);
  const parallaxOpacity2 = useTransform(smooth, [0, 0.5, 1], [0, 0.7, 0.2]);
  const parallaxOpacity3 = useTransform(smooth, [0, 0.5, 1], [0, 0.6, 0.1]);
  const ctaScale = useTransform(smooth, [0.7, 1], [1, 1.03]);
  const ctaOpacity = useTransform(smooth, [0.5, 1], [0, 1]);

  // Reduced motion fallback: simple fade-in
  const reducedScale = useTransform(smooth, [0, 1], [1.05, 1.05]);
  const reducedOpacity = useTransform(smooth, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-gradient-to-b from-[#0c0716] via-[#1a0c2e] to-[#0c0716]"
      style={{ height: '300vh' }}
      aria-label={t('scroll.label')}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Parallax background layers */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={
            prefersReduced
              ? { scale: reducedScale, opacity: reducedOpacity }
              : { scale, filter: blur }
          }
        >
          <motion.img
            src={shamsLogo}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            draggable={false}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] object-cover rounded-full opacity-[0.05]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 30%, hsl(270 30% 4% / 0.85) 100%)',
            }}
          />
        </motion.div>

        {/* Parallax thumbnail layers */}
        {!prefersReduced && (
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-[10%] w-[200px] h-[150px] rounded-xl overflow-hidden border border-white/10"
              style={{ y: parallax1, opacity: parallaxOpacity1 }}
            >
              <img
                src={projects[0]?.image}
                alt={projects[0]?.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 right-[10%] w-[180px] h-[140px] rounded-xl overflow-hidden border border-white/10"
              style={{ y: parallax2, opacity: parallaxOpacity2 }}
            >
              <img
                src={projects[1]?.image}
                alt={projects[1]?.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-[5%] w-[160px] h-[120px] rounded-xl overflow-hidden border border-white/10"
              style={{ y: parallax3, opacity: parallaxOpacity3 }}
            >
              <img
                src={projects[2]?.image}
                alt={projects[2]?.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        )}

        {/* Cinematic gradient overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0c0716]/60 via-transparent to-[#0c0716]/80" />

        {/* Foreground text */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            style={prefersReduced ? { opacity: reducedOpacity } : { y: titleY, opacity: titleOpacity }}
            className="will-change-transform"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 backdrop-blur-md bg-white/5">
              <span className="text-white/80 text-xs font-display tracking-[0.35em] uppercase">
                {t('scroll.badge')}
              </span>
            </div>

            <h2 className="font-display font-bold tracking-tight text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, hsl(280 90% 75%) 0%, hsl(310 90% 70%) 50%, hsl(280 90% 75%) 100%)',
                }}
              >
                {t('scroll.title')}
              </span>
            </h2>
          </motion.div>

          <motion.p
            style={prefersReduced ? { opacity: reducedOpacity } : { y: subY }}
            className="mt-8 max-w-xl text-white/70 text-lg md:text-xl font-light leading-relaxed will-change-transform"
          >
            {t('scroll.desc')}
          </motion.p>

          {/* CTA at end of scroll */}
          <motion.div
            style={prefersReduced ? { opacity: ctaOpacity } : { scale: ctaScale, opacity: ctaOpacity }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2"
          >
            <Link
              to="/projects"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-display font-bold rounded-2xl text-primary-foreground transition-all duration-300"
              style={{
                background:
                  'linear-gradient(135deg, hsl(var(--prime)) 0%, hsl(var(--accent)) 100%)',
                boxShadow: '0 4px 24px hsl(var(--prime) / 0.3)',
              }}
            >
              {t('hero.viewProjects')}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScrollNarrative;