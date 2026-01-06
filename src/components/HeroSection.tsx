import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import shamsLogo from '@/assets/shams-logo.jpg';
import ConnectModal from './ConnectModal';

const HeroSection = () => {
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 400]);
  const contentY = useTransform(scrollY, [0, 1000], [0, 150]);
  const backgroundScale = useTransform(scrollY, [0, 500], [1, 1.15]);
  const backgroundOpacity = useTransform(scrollY, [0, 600], [1, 0.3]);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    if (!video1 || !video2) return;

    const crossfadeDuration = 1.5;

    const handleTimeUpdate = () => {
      const activeVid = activeVideo === 1 ? video1 : video2;
      const inactiveVid = activeVideo === 1 ? video2 : video1;
      
      if (activeVid.duration - activeVid.currentTime <= crossfadeDuration) {
        inactiveVid.currentTime = 0;
        inactiveVid.play();
        setActiveVideo(activeVideo === 1 ? 2 : 1);
      }
    };

    video1.addEventListener('timeupdate', handleTimeUpdate);
    video2.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video1.removeEventListener('timeupdate', handleTimeUpdate);
      video2.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [activeVideo]);

  const highlights = [
    "Branding & graphic design that makes you memorable.",
    "Social media visuals that your audience actually wants to share.",
    "Web design & development that feels smooth, clean, and modern."
  ];

  return (
    <>
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ 
            y: backgroundY, 
            scale: backgroundScale,
            opacity: backgroundOpacity 
          }}
        >
          <video
            ref={video1Ref}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out"
            style={{ 
              filter: 'brightness(0.4)',
              opacity: activeVideo === 1 ? 1 : 0
            }}
          >
            <source src="/videos/dragon-eye-bg.mp4" type="video/mp4" />
          </video>
          <video
            ref={video2Ref}
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out"
            style={{ 
              filter: 'brightness(0.4)',
              opacity: activeVideo === 2 ? 1 : 0
            }}
          >
            <source src="/videos/dragon-eye-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        </motion.div>
        
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto w-full"
          style={{ y: contentY }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
                className="inline-block glass-card px-5 py-2.5 mb-6"
              >
                <span className="text-primary text-sm font-display tracking-[0.3em]">
                  SHAMS VISUALS
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="text-foreground">Designs that speak</span>
                <br />
                <span className="prime-text prime-glow">before you do.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
                className="text-lg md:text-xl text-muted-foreground mb-8 font-light tracking-wide max-w-xl"
              >
                I am Ahmed Shams, the face behind Shams Visuals—a multidisciplinary creative who turns ideas into visual stories through branding, social media, and web experiences.
              </motion.p>

              {/* Highlight lines */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: "easeInOut" }}
                className="space-y-3 mb-10"
              >
                {highlights.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5, ease: "easeInOut" }}
                    className="flex items-center gap-3 text-sm md:text-base text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{line}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 50px hsl(var(--prime) / 0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  className="px-10 py-4 metallic-prime text-primary-foreground font-display font-bold rounded-2xl transition-all duration-500 ease-in-out animate-glow-pulse text-center"
                >
                  Explore My Work
                </motion.a>
                <motion.button
                  onClick={() => setIsConnectOpen(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="glass-card px-10 py-4 font-display font-bold text-foreground border border-primary/30 hover:border-primary/60 transition-all duration-500 ease-in-out text-center"
                >
                  Let's Build Together
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut", delay: 0.3 }}
              className="order-1 lg:order-2 flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 0.5, ease: "easeInOut" }
                }}
                className="relative"
                style={{ perspective: 1000 }}
              >
                <motion.div 
                  animate={{ 
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-[-20px] rounded-full border-2 border-primary/40"
                />
                
                <motion.div 
                  animate={{ 
                    scale: [1, 1.08, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute inset-[-10px] rounded-full border border-primary/60"
                />
                
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/50 via-accent/30 to-primary/50 rounded-full blur-3xl" 
                />
                
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-5px] rounded-full bg-gradient-conic from-primary/40 via-transparent via-50% to-primary/40 blur-sm"
                />
                
                <img
                  src={shamsLogo}
                  alt="Shams Visuals - Logo"
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl shadow-primary/40 border-2 border-primary/40 z-10"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground font-display tracking-[0.3em]">SCROLL</span>
            <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      <ConnectModal isOpen={isConnectOpen} onClose={() => setIsConnectOpen(false)} />
    </>
  );
};

export default HeroSection;
