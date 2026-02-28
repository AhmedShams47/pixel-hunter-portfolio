import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Sparkles, Zap, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

  const processItems = [
    { icon: <MessageSquare className="w-5 h-5" />, labelKey: 'about.clearComm' },
    { icon: <Calendar className="w-5 h-5" />, labelKey: 'about.milestones' },
    { icon: <Sparkles className="w-5 h-5" />, labelKey: 'about.delivery' },
    { icon: <Zap className="w-5 h-5" />, labelKey: 'about.results' },
  ];

  const socials = [
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: 'https://www.instagram.com/k_0_p_a/', helperKey: 'about.instagram', color: 'hover:text-pink-400' },
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', href: 'https://www.facebook.com/AhmedShams164', helperKey: 'about.facebook', color: 'hover:text-blue-400' },
    { icon: <Phone className="w-5 h-5" />, label: 'WhatsApp', href: 'https://wa.me/8801707887676', helperKey: 'about.whatsapp', color: 'hover:text-green-500' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:shamsvisuals@gmail.com', helperKey: 'about.email', color: 'hover:text-primary' },
  ];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-primary text-sm font-display tracking-[0.3em] mb-4 block">
              {t('about.badge')}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t('about.title')} <span className="gold-text gold-glow">{t('about.titleHighlight')}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Who I Am */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-card p-6 sm:p-8 md:p-12 rounded-3xl"
          >
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              {t('about.whoTitle')} <span className="text-primary">{t('about.whoHighlight')}</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t('about.whoDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Discipline & Process */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-card p-6 sm:p-8 md:p-12 rounded-3xl"
          >
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              {t('about.disciplineTitle')} <span className="text-primary">{t('about.disciplineHighlight')}</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              {t('about.disciplineDesc')}
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {processItems.map((item, index) => (
                <motion.div
                  key={item.labelKey}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-2xl bg-secondary/30 border border-border/50 text-center"
                >
                  <div className="text-primary">{item.icon}</div>
                  <span className="text-[10px] sm:text-xs text-muted-foreground font-display tracking-wider uppercase">{t(item.labelKey)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3D & Animations */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-card p-6 sm:p-8 md:p-12 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-primary/15 border border-primary/25 text-primary">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                {t('about.3dTitle')} <span className="text-primary">{t('about.3dHighlight')}</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t('about.3dDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Connect With Me */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-card p-6 sm:p-8 md:p-12 rounded-3xl text-center"
          >
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('about.connectTitle')} <span className="text-primary">{t('about.connectHighlight')}</span> {t('about.connectSuffix')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
              {t('about.connectDesc')}
            </p>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto mb-6 sm:mb-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-1.5 sm:gap-2 p-4 sm:p-5 glass-card rounded-xl text-muted-foreground ${social.color} transition-all duration-300 hover:border-primary/50 hover:-translate-y-0.5`}
                >
                  <div className="flex items-center gap-2">
                    {social.icon}
                    <span className="font-display font-semibold text-sm">{social.label}</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-muted-foreground/70">{t(social.helperKey)}</span>
                </a>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
              {t('about.directMsg')}
            </p>

            <Link
              to="/packages"
              className="inline-block px-6 sm:px-8 py-3.5 sm:py-4 metallic-gold text-primary-foreground font-display font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(var(--prime)/0.4)]"
            >
              {t('about.viewPackages')}
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
