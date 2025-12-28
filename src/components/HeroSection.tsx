import { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '@/assets/profile-photo.jpg';
import ConnectModal from './ConnectModal';
import GoldCrown3D from './GoldCrown3D';

const HeroSection = () => {
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-7xl mx-auto w-full">
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
                  GOLDEN PRIME
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none"
              >
                <span className="gold-text gold-glow">Ahmed</span>
                <br />
                <span className="text-foreground">Shams</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
                className="text-xl md:text-2xl text-muted-foreground mb-10 font-light tracking-wide"
              >
                <span className="text-primary">Multi-Disciplinary Technomancer</span>{' '}
                <span className="text-muted-foreground">&</span>{' '}
                <span className="text-foreground">Entrepreneur</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={() => setIsConnectOpen(true)}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 50px hsl(var(--gold) / 0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  className="px-10 py-4 metallic-gold text-primary-foreground font-display font-bold rounded-2xl transition-all duration-500 ease-in-out animate-glow-pulse"
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

            {/* Right side - 3D Crown + Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut", delay: 0.3 }}
              className="order-1 lg:order-2 flex flex-col items-center"
            >
              {/* 3D Crown */}
              <Suspense fallback={
                <div className="w-full h-[300px] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                </div>
              }>
                <GoldCrown3D />
              </Suspense>

              {/* Profile image below crown */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative -mt-8"
              >
                {/* Gold glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl gold-box-glow"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Main image container */}
                <div className="relative w-48 h-64 md:w-56 md:h-72 rounded-3xl overflow-hidden border border-primary/30">
                  <img
                    src={profilePhoto}
                    alt="Ahmed Shams - Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Gold overlay shimmer */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, hsl(var(--gold) / 0.3) 50%, transparent 70%)',
                    }}
                    animate={{
                      backgroundPosition: ['-200% 0', '200% 0'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
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