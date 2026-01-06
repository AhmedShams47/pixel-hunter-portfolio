import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import shamsLogo from '@/assets/shams-logo.jpg';
import ConnectModal from './ConnectModal';

const HeroSection = () => {
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], [0, 200]);
  const backgroundOpacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  // Single video with loop - no crossfade needed
  useEffect(() => {
    const video = video1Ref.current;
    if (video) {
      video.playbackRate = 0.8; // Slightly slower for smoothness
    }
  }, []);

  const highlights = [
    "Branding & graphic design that makes you memorable.",
    "Social media visuals that your audience actually wants to share.",
    "Web design & development that feels smooth, clean, and modern."
  ];

  return (
    <>
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
        {/* Simplified video background */}
        <motion.div 
          className="absolute inset-0 z-0 will-change-transform"
          style={{ 
            y: backgroundY, 
            opacity: backgroundOpacity 
          }}
        >
          <video
            ref={video1Ref}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.35)' }}
          >
            <source src="/videos/dragon-eye-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content - simplified animations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              <div className="inline-block glass-card px-5 py-2.5 mb-6">
                <span className="text-primary text-sm font-display tracking-[0.3em]">
                  SHAMS VISUALS
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Designs that speak</span>
                <br />
                <span className="prime-text prime-glow">before you do.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 font-light tracking-wide max-w-xl">
                I am Ahmed Shams, the face behind Shams Visuals—a multidisciplinary creative who turns ideas into visual stories through branding, social media, and web experiences.
              </p>

              {/* Highlight lines */}
              <div className="space-y-3 mb-10">
                {highlights.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4, ease: "easeOut" }}
                    className="flex items-center gap-3 text-sm md:text-base text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{line}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="px-10 py-4 metallic-prime text-primary-foreground font-display font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_hsl(var(--prime)/0.4)] text-center"
                >
                  Explore My Work
                </a>
                <button
                  onClick={() => setIsConnectOpen(true)}
                  className="glass-card px-10 py-4 font-display font-bold text-foreground border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02] text-center"
                >
                  Let's Build Together
                </button>
              </div>
            </motion.div>

            {/* Logo - simplified animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-1 lg:order-2 flex items-center justify-center"
            >
              <div className="relative group">
                {/* Static glow rings - CSS only */}
                <div className="absolute inset-[-15px] rounded-full border border-primary/30 animate-pulse" />
                <div className="absolute inset-[-5px] rounded-full border border-primary/50 opacity-60" />
                
                {/* Glow background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/20 to-primary/40 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                
                <img
                  src={shamsLogo}
                  alt="Shams Visuals - Logo"
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl shadow-primary/30 border-2 border-primary/40 z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator - CSS animation only */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col items-center gap-2 animate-bounce" style={{ animationDuration: '2s' }}>
            <span className="text-xs text-muted-foreground font-display tracking-[0.3em]">SCROLL</span>
            <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </section>

      <ConnectModal isOpen={isConnectOpen} onClose={() => setIsConnectOpen(false)} />
    </>
  );
};

export default HeroSection;
