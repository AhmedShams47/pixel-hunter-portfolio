import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Palette, Share2, Globe, Sparkles } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import CinematicDragonHero from '@/components/CinematicDragonHero';
import ScrollNarrative from '@/components/ScrollNarrative';
import { useLanguage } from '@/contexts/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();

  const skills = [
    { icon: <Palette className="w-5 h-5" />, labelKey: 'skills.branding' },
    { icon: <Share2 className="w-5 h-5" />, labelKey: 'skills.social' },
    { icon: <Globe className="w-5 h-5" />, labelKey: 'skills.web' },
    { icon: <Sparkles className="w-5 h-5" />, labelKey: 'skills.motion' },
  ];

  return (
    <>
      <PageLayout>
        {/* Cinematic 3D Dragon Hero */}
        <CinematicDragonHero />

        {/* Unified Scroll Narrative */}
        <ScrollNarrative />

        {/* Skills Highlights */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('skills.title')}{' '}
                <span className="text-primary">{t('skills.titleHighlight')}</span>
              </h2>
              <p className="max-w-xl mx-auto text-black text-xl">
                {t('skills.desc')}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.labelKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                  className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300 rounded-2xl"
                >
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/15 border border-primary/25 text-primary group-hover:shadow-[0_0_20px_hsl(280_85%_65%/0.25)] transition-shadow duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {t(skill.labelKey)}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="glass-card p-10 md:p-14 rounded-3xl text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('cta.title1')}{' '}
                <span className="prime-text prime-glow">{t('cta.titleHighlight')}</span>
                {t('cta.title2')}
              </h2>
              <p className="mb-8 max-w-lg mx-auto text-xl text-black">
                {t('cta.desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/projects"
                  className="px-8 py-4 font-display font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] text-primary-foreground"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--prime)) 0%, hsl(var(--accent)) 100%)',
                    boxShadow: '0 4px 24px hsl(var(--prime) / 0.3)',
                  }}
                >
                  {t('cta.seeWork')}
                </Link>
                <Link
                  to="/packages"
                  className="glass-card px-8 py-4 font-display font-bold text-primary border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02]"
                >
                  {t('cta.getStarted')}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default HomePage;