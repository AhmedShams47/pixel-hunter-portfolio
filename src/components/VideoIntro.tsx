import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoIntroProps {
  onComplete: () => void;
}

const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPortal, setShowPortal] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Show portal effect near the end
    const handleTimeUpdate = () => {
      if (video.currentTime >= video.duration - 2.5) {
        setShowPortal(true);
      }
      if (video.currentTime >= video.duration - 1) {
        setFadeOut(true);
      }
    };

    const handleEnded = () => {
      setTimeout(() => {
        setIsPlaying(false);
        onComplete();
      }, 800);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsPlaying(false);
      onComplete();
    }, 600);
  };

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="video-intro-overlay"
        >
          {/* Video */}
          <motion.video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            animate={{ 
              scale: fadeOut ? 1.1 : 1,
              filter: fadeOut ? 'brightness(1.3)' : 'brightness(1)'
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <source src="/videos/dragon-intro.mp4" type="video/mp4" />
          </motion.video>

          {/* Portal overlay effect */}
          <AnimatePresence>
            {showPortal && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                {/* Outer glow ring */}
                <motion.div
                  className="absolute w-[600px] h-[600px] rounded-full"
                  style={{
                    background: 'radial-gradient(circle, transparent 30%, hsl(var(--gold) / 0.1) 50%, hsl(var(--gold) / 0.3) 70%, transparent 100%)',
                  }}
                  animate={{
                    scale: [1, 1.5, 2],
                    opacity: [0.8, 0.5, 0],
                  }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />

                {/* Inner portal circle */}
                <motion.div
                  className="absolute rounded-full"
                  style={{
                    width: 200,
                    height: 200,
                    background: 'radial-gradient(circle, hsl(var(--gold) / 0.9) 0%, hsl(var(--gold) / 0.5) 40%, transparent 70%)',
                    boxShadow: '0 0 60px hsl(var(--gold) / 0.6), 0 0 120px hsl(var(--gold) / 0.4), inset 0 0 60px hsl(var(--gold) / 0.3)',
                  }}
                  animate={{
                    scale: [0, 1, 15],
                    opacity: [1, 1, 0],
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Particle burst */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary"
                    style={{
                      boxShadow: '0 0 10px hsl(var(--gold))',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      x: [0, Math.cos((i * 30 * Math.PI) / 180) * 300],
                      y: [0, Math.sin((i * 30 * Math.PI) / 180) * 300],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 0.3,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fade to white/gold overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, hsl(var(--gold) / 0.3) 0%, hsl(var(--background)) 100%)',
            }}
            animate={{
              opacity: fadeOut ? 1 : 0,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          {/* Skip button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            onClick={handleSkip}
            className="absolute bottom-8 right-8 px-6 py-3 glass-card text-sm font-display tracking-wider text-foreground/70 hover:text-primary hover:border-primary/50 transition-all duration-300 z-10 rounded-2xl"
          >
            Skip Intro
          </motion.button>

          {/* Loading indicator */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="absolute bottom-8 left-8 flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground font-display tracking-widest">
              LOADING EXPERIENCE
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoIntro;