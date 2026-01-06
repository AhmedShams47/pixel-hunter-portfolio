import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoIntroProps {
  onComplete: () => void;
}

const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleExit = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    
    // Smooth fade out before calling onComplete
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600);
    }, 100);
  }, [onComplete, isExiting]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Optimize video for smooth playback
    video.preload = 'auto';
    
    const handleCanPlay = () => {
      video.play().catch(() => {
        // If autoplay fails, skip intro
        handleExit();
      });
    };

    const handleEnded = () => {
      handleExit();
    };

    // Skip on click/tap for user control
    const handleClick = () => {
      handleExit();
    };

    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('ended', handleEnded);
    document.addEventListener('click', handleClick);
    document.addEventListener('touchstart', handleClick);

    // Fallback timeout in case video doesn't load
    const fallbackTimer = setTimeout(() => {
      if (!isExiting) handleExit();
    }, 8000);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('ended', handleEnded);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchstart', handleClick);
      clearTimeout(fallbackTimer);
    };
  }, [handleExit, isExiting]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isExiting ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.4, 0, 0.2, 1]
          }}
          className="video-intro-overlay"
        >
          {/* Gradient overlay for smoother blend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExiting ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-background z-10 pointer-events-none"
          />
          
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{ 
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
          >
            <source src="/videos/dragon-intro.mp4" type="video/mp4" />
          </video>

          {/* Skip hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          >
            <span className="text-foreground/60 text-sm font-sans tracking-wide">
              Tap anywhere to skip
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoIntro;