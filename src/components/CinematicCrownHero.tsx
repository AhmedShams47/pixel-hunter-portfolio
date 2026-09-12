import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import GoldCrown3D from './GoldCrown3D';

const CinematicCrownHero = () => {
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0c0716]"
    >
      {/* Background gradient nebula */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{
            background:
              'radial-gradient(circle, hsl(280 90% 75%) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            background:
              'radial-gradient(circle, hsl(310 85% 65%) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* 3D crown */}
      <div className="absolute inset-0 z-0">
        <GoldCrown3D reducedMotion={prefersReduced} />
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
            <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent animate-bounce" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CinematicCrownHero;