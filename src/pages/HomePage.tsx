import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Palette, Share2, Globe, Sparkles } from 'lucide-react';
import shamsLogo from '@/assets/shams-logo.jpg';
import PageLayout from '@/components/PageLayout';
import CinematicScrollSection from '@/components/CinematicScrollSection';
import { useLanguage } from '@/contexts/LanguageContext';

const HomePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  const skills = [
  { icon: <Palette className="w-5 h-5" />, labelKey: 'skills.branding' },
  { icon: <Share2 className="w-5 h-5" />, labelKey: 'skills.social' },
  { icon: <Globe className="w-5 h-5" />, labelKey: 'skills.web' },
  { icon: <Sparkles className="w-5 h-5" />, labelKey: 'skills.motion' }];


  return (
    <>
      <PageLayout>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
          {/* Background Video — UNTOUCHED */}
          <div className="absolute inset-0 z-0">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.3)' }}>

              <source src="/videos/dragon-eye-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center lg:text-left">

                <div className="inline-block glass-card px-4 py-2 mb-6">
                  <span className="text-primary text-sm font-display tracking-[0.25em]">
                    {t('hero.badge')}
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-primary-foreground">{t('hero.title1')}</span>
                  <br />
                  <span className="prime-text prime-glow">{t('hero.title2')}</span>
                </h1>

                <p className="mb-8 leading-relaxed max-w-lg text-primary-foreground bg-[#ebe8ed]/0 text-lg">
                  {t('hero.desc')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/projects"
                    className="px-8 py-4 font-display font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] text-primary-foreground text-center"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--prime)) 0%, hsl(var(--accent)) 100%)',
                      boxShadow: '0 4px 24px hsl(var(--prime) / 0.3)'
                    }}>

                    {t('hero.viewProjects')}
                  </Link>
                  <Link
                    to="/packages"
                    className="glass-card px-8 py-4 font-display font-bold text-foreground border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02] text-center">

                    {t('hero.contactMe')}
                  </Link>
                </div>
              </motion.div>

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="flex items-center justify-center">

                <div className="relative group">
                  <div className="absolute inset-[-12px] rounded-full border border-primary/30 opacity-60" />
                  <div
                    className="absolute inset-0 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--prime) / 0.3), hsl(var(--accent) / 0.2))'
                    }} />

                  <img
                    src={shamsLogo}
                    alt="Shams Visuals Logo"
                    className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl border-2 border-primary/30 z-10"
                    style={{
                      boxShadow: '0 0 40px hsl(var(--prime) / 0.25), 0 0 80px hsl(var(--accent) / 0.1)'
                    }} />

                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 opacity-60">
              <span className="text-xs text-muted-foreground font-display tracking-[0.2em]">{t('hero.scroll')}</span>
              <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
            </div>
          </div>
        </section>

        {/* Cinematic scroll-controlled dragon experience */}
        <CinematicScrollSection />

        {/* Skills Highlights */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-12">

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('skills.title')} <span className="text-primary">{t('skills.titleHighlight')}</span>
              </h2>
              <p className="max-w-xl mx-auto text-black text-xl">
                {t('skills.desc')}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) =>
              <motion.div
                key={skill.labelKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300 rounded-2xl">

                  <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/15 border border-primary/25 text-primary group-hover:shadow-[0_0_20px_hsl(280_85%_65%/0.25)] transition-shadow duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {t(skill.labelKey)}
                  </h3>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="glass-card p-10 md:p-14 rounded-3xl text-center">

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('cta.title1')} <span className="prime-text prime-glow">{t('cta.titleHighlight')}</span>{t('cta.title2')}
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
                    boxShadow: '0 4px 24px hsl(var(--prime) / 0.3)'
                  }}>

                  {t('cta.seeWork')}
                </Link>
                <Link
                  to="/packages"
                  className="glass-card px-8 py-4 font-display font-bold text-primary border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02]">

                  {t('cta.getStarted')}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </PageLayout>
    </>);

};

export default HomePage;