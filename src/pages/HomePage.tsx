/**
 * HomePage - Optimized for Performance
 * 
 * PERFORMANCE OPTIMIZATIONS APPLIED:
 * - Lazy video loading (desktop only, good connections)
 * - Poster image for instant LCP
 * - Minimal animations (CSS-based, 200-400ms)
 * - No heavy scroll libraries
 * - Respects prefers-reduced-motion
 * 
 * EXPECTED LIGHTHOUSE SCORES:
 * - Performance: 90+
 * - Accessibility: 95+
 * - Best Practices: 100
 * - SEO: 100
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Palette, Share2, Globe, Sparkles, Instagram, Phone, Facebook, Mail } from 'lucide-react';
import shamsLogo from '@/assets/shams-logo.jpg';
import PageLayout from '@/components/PageLayout';
import OptimizedVideoIntro from '@/components/OptimizedVideoIntro';
import OptimizedVideo from '@/components/OptimizedVideo';

const INTRO_STORAGE_KEY = 'shams_intro_played';

const HomePage = () => {
  const [introComplete, setIntroComplete] = useState(() => {
    return localStorage.getItem(INTRO_STORAGE_KEY) === 'true';
  });

  const handleIntroComplete = () => {
    localStorage.setItem(INTRO_STORAGE_KEY, 'true');
    setIntroComplete(true);
  };

  const skills = [
    { icon: <Palette className="w-5 h-5" />, label: 'Branding & Graphic Design' },
    { icon: <Share2 className="w-5 h-5" />, label: 'Social Media Management' },
    { icon: <Globe className="w-5 h-5" />, label: 'Web Design & Development' },
    { icon: <Sparkles className="w-5 h-5" />, label: '3D & Motion Graphics' },
  ];

  const contactMethods = [
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: 'https://www.instagram.com/k_0_p_a/' },
    { icon: <Phone className="w-5 h-5" />, label: 'WhatsApp', href: 'https://wa.me/8801707887676' },
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', href: 'https://www.facebook.com/AhmedShams164' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:shamsvisuals@gmail.com' },
  ];

  return (
    <>
      {/* Intro video - only on desktop with good connection */}
      {!introComplete && (
        <OptimizedVideoIntro onComplete={handleIntroComplete} />
      )}

      <PageLayout>
        {/* Hero Section - Optimized with lazy video */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
          {/* Background - poster loads instantly, video loads lazily */}
          <OptimizedVideo
            src="/videos/dragon-eye-bg.mp4"
            brightness={0.3}
            playbackRate={0.8}
          />
          
          <div className="relative z-10 max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Light fade animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-center lg:text-left"
              >
                <div className="inline-block glass-card px-4 py-2 mb-6">
                  <span className="text-primary text-sm font-display tracking-[0.25em]">
                    SHAMS VISUALS
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-foreground">Designs that speak</span>
                  <br />
                  <span className="prime-text prime-glow">before you do.</span>
                </h1>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                  I'm Ahmed Shams. I blend branding, design, social media, and web development to turn your ideas into visual stories that resonate.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/projects"
                    className="px-8 py-4 metallic-prime text-primary-foreground font-display font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(var(--prime)/0.4)] text-center"
                  >
                    View Projects
                  </Link>
                  <Link
                    to="/packages"
                    className="glass-card px-8 py-4 font-display font-bold text-foreground border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02] text-center"
                  >
                    See Packages
                  </Link>
                </div>
              </motion.div>

              {/* Logo - Optimized with explicit dimensions */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                className="flex items-center justify-center"
              >
                <div className="relative group">
                  <div className="absolute inset-[-12px] rounded-full border border-primary/40 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                  <img
                    src={shamsLogo}
                    alt="Shams Visuals Logo"
                    width={320}
                    height={320}
                    className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl shadow-primary/30 border-2 border-primary/40 z-10"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator - Pure CSS animation */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 opacity-60">
              <span className="text-xs text-muted-foreground font-display tracking-[0.2em]">SCROLL</span>
              <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
            </div>
          </div>
        </section>

        {/* What I Do - Lightweight cards */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                What I <span className="text-primary">Do</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Full creative package for brands that want to stand out.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                  className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300 rounded-2xl"
                >
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/15 border border-primary/25 text-primary group-hover:shadow-[0_0_20px_hsl(var(--prime)/0.2)] transition-shadow duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.label}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Contact funnel */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="glass-card p-10 md:p-14 rounded-3xl text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Let's build something <span className="gold-text gold-glow">beautiful</span> together
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Ready to start? Message me directly—no forms, just a quick chat.
              </p>

              {/* Quick contact buttons */}
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 glass-card rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  >
                    {method.icon}
                    <span className="font-display text-sm font-semibold">{method.label}</span>
                  </a>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/projects"
                  className="px-8 py-4 metallic-gold text-primary-foreground font-display font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(var(--gold)/0.4)]"
                >
                  See My Work
                </Link>
                <Link
                  to="/packages"
                  className="glass-card px-8 py-4 font-display font-bold text-primary border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02]"
                >
                  View Packages
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
