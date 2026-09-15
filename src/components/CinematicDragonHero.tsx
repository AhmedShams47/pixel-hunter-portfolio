import { Suspense, lazy, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Dragon3D = lazy(() => import('./Dragon3D'));

const CinematicDragonHero = () => {
  const { t } = useLanguage();
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReduced(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return (
    <motion.section
      aria-label={t('hero.badge')}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0c0716]"
    >
      {/* Background gradient nebula - purple/pink matching existing theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{
            background:
              'radial-gradient(circle, hsl(280 85% 65%) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background:
              'radial-gradient(circle, hsl(320 80% 60%) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background:
              'radial-gradient(circle, hsl(260 90% 70%) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Subtle animated particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(${260 + Math.random() * 60}, 85%, ${55 + Math.random() * 20}%)`,
              opacity: 0.15 + Math.random() * 0.2,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1, 0], opacity: [0, 0.3, 0] }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* 3D Dragon - lazy loaded with visible fallback */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Suspense
          fallback={
            <div className="flex items-center justify-center w-full h-full">
              <motion.div
                className="w-48 h-48 md:w-72 md:h-72 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, hsl(280 80% 60% / 0.18) 0%, transparent 65%)',
                }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          }
        >
          <Dragon3D reducedMotion={prefersReduced} />
        </Suspense>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-4xl mx-auto w-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.span
            className="text-primary font-display text-sm tracking-[0.3em] mb-4 block"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('hero.badge')}
          </motion.span>

          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="text-foreground">{t('hero.title1')}</span>
            <br />
            <motion.span
              className="prime-text prime-glow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            >
              {t('hero.title2')}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t('hero.desc')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              to="/projects"
              className="px-8 py-4 font-display font-bold rounded-2xl text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
              style={{
                background:
                  'linear-gradient(135deg, hsl(var(--prime)) 0%, hsl(var(--accent)) 100%)',
                boxShadow: '0 4px 24px hsl(var(--prime) / 0.3)',
              }}
            >
              {t('hero.viewProjects')}
            </Link>
            <Link
              to="/packages"
              className="glass-card px-8 py-4 font-display font-bold text-foreground border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02]"
            >
              {t('hero.contactMe')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex flex-col items-center gap-2 opacity-60">
            <span className="text-xs text-muted-foreground font-display tracking-[0.2em]">
              {t('hero.scroll')}
            </span>
            <motion.div
              className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CinematicDragonHero;