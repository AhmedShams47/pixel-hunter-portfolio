import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Palette, Share2, Globe, Sparkles, ArrowRight } from 'lucide-react';
import shamsLogo from '@/assets/shams-logo.jpg';
import PageLayout from '@/components/PageLayout';
import VideoIntro from '@/components/VideoIntro';
import SEOHead from '@/components/SEOHead';

const HomePage = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  const skills = [
    { 
      icon: <Palette className="w-5 h-5" />, 
      label: 'Branding & Graphic Design',
      desc: 'Logos, brand identities & print materials'
    },
    { 
      icon: <Share2 className="w-5 h-5" />, 
      label: 'Social Media Design',
      desc: 'Engaging posts & content strategy'
    },
    { 
      icon: <Globe className="w-5 h-5" />, 
      label: 'Website Design & Development',
      desc: 'Modern, responsive websites'
    },
    { 
      icon: <Sparkles className="w-5 h-5" />, 
      label: '3D & Motion Graphics',
      desc: 'Animated logos & video intros'
    },
  ];

  return (
    <>
      <SEOHead
        title="Graphic Designer in Dhaka | Branding & Web Design"
        description="Ahmed Shams is a professional graphic designer in Dhaka offering branding, social media post design, and website design services in Bangladesh. Get stunning visuals today."
        keywords="graphic designer in Dhaka, social media post design Dhaka, website design service Bangladesh, branding design Bangladesh, logo design Dhaka"
        canonicalPath="/"
      />

      {!introComplete && (
        <VideoIntro onComplete={() => setIntroComplete(true)} />
      )}

      <PageLayout>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.3)' }}
            >
              <source src="/videos/dragon-eye-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center lg:text-left"
              >
                <div className="inline-block glass-card px-4 py-2 mb-6">
                  <span className="text-primary text-sm font-display tracking-[0.25em]">
                    GRAPHIC DESIGNER IN DHAKA
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-foreground">Visual Stories That</span>
                  <br />
                  <span className="prime-text prime-glow">Grow Your Brand</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                  I'm <strong className="text-foreground">Ahmed Shams</strong>, a graphic designer and web developer in Dhaka. I blend branding, motion graphics, and website design to create visual identities that help businesses stand out and attract more customers.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/projects"
                    className="px-8 py-4 metallic-prime text-primary-foreground font-display font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(var(--prime)/0.4)] text-center inline-flex items-center justify-center gap-2"
                  >
                    View My Work
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/packages"
                    className="glass-card px-8 py-4 font-display font-bold text-foreground border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02] text-center"
                  >
                    See Packages
                  </Link>
                </div>
              </motion.div>

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="flex items-center justify-center"
              >
                <div className="relative group">
                  <div className="absolute inset-[-12px] rounded-full border border-primary/40 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                  <img
                    src={shamsLogo}
                    alt="Shams Visuals - Graphic Design Studio Dhaka"
                    className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl shadow-primary/30 border-2 border-primary/40 z-10"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 opacity-60">
              <span className="text-xs text-muted-foreground font-display tracking-[0.2em]">SCROLL</span>
              <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="py-24 px-6" id="services">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Design Services in <span className="text-primary">Bangladesh</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From brand identity to social media content to complete website design—everything your business needs to look professional and attract customers online.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300 rounded-2xl"
                >
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/15 border border-primary/25 text-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-shadow duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                    {skill.label}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {skill.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Internal links for SEO */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              className="text-center mt-10"
            >
              <Link 
                to="/projects" 
                className="text-primary hover:text-primary/80 font-display font-semibold inline-flex items-center gap-2 transition-colors"
              >
                See project examples
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="glass-card p-8 md:p-12 rounded-3xl"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                Why Businesses Choose <span className="text-primary">Shams Visuals</span>
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong className="text-foreground">Fast delivery</strong> — Most projects completed within 3–7 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong className="text-foreground">Clear communication</strong> — You'll always know the status of your project</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong className="text-foreground">Local expertise</strong> — I understand what works for businesses in Bangladesh</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong className="text-foreground">Complete solutions</strong> — Branding, social media, and websites from one designer</span>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <Link
                  to="/about"
                  className="text-primary hover:text-primary/80 font-display font-semibold inline-flex items-center gap-2 transition-colors"
                >
                  Learn more about my process
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
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
              className="glass-card p-10 md:p-14 rounded-3xl text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Build Your <span className="gold-text gold-glow">Visual Identity</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                Whether you need a complete brand identity, social media designs, or a professional website—let's create something that helps your business grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/projects"
                  className="px-8 py-4 metallic-gold text-primary-foreground font-display font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(var(--gold)/0.4)]"
                >
                  View My Portfolio
                </Link>
                <Link
                  to="/packages"
                  className="glass-card px-8 py-4 font-display font-bold text-primary border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02]"
                >
                  Check Pricing
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
