import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import shamsLogo from '@/assets/shams-logo.jpg';
import ConnectModal from './ConnectModal';

const HeroSection = () => {
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    if (!video1 || !video2) return;

    const crossfadeDuration = 1.5; // seconds before end to start crossfade

    const handleTimeUpdate = () => {
      const activeVid = activeVideo === 1 ? video1 : video2;
      const inactiveVid = activeVideo === 1 ? video2 : video1;
      
      if (activeVid.duration - activeVid.currentTime <= crossfadeDuration) {
        // Start the inactive video and crossfade
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

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
        {/* Dragon Eye Background Video with Crossfade */}
        <div className="absolute inset-0 z-0">
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
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
          {/* Purple ambient glow */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
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
                  PRIME PURPLE
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none"
              >
                <span className="prime-text prime-glow">Ahmed</span>
                <br />
                <span className="text-foreground">Shams</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
                className="text-xl md:text-2xl text-muted-foreground mb-10 font-light tracking-wide"
              >
                <span className="text-primary">Branding & Graphic Design</span>{' '}
                <span className="text-muted-foreground">•</span>{' '}
                <span className="text-foreground">Web Development</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={() => setIsConnectOpen(true)}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 50px hsl(var(--prime) / 0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  className="px-10 py-4 metallic-prime text-primary-foreground font-display font-bold rounded-2xl transition-all duration-500 ease-in-out animate-glow-pulse"
                >
                  Connect
                </motion.button>
                <motion.a
                  href="#ventures"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="glass-card px-10 py-4 font-display font-bold text-foreground border border-primary/30 hover:border-primary/60 transition-all duration-500 ease-in-out text-center"
                >
                  View Ventures
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right side - Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut", delay: 0.3 }}
              className="order-1 lg:order-2 flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/20 to-primary/40 rounded-full blur-3xl animate-glow-pulse" />
                <img
                  src={shamsLogo}
                  alt="Shams Visuals - Logo"
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl shadow-primary/30 border-2 border-primary/30"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
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