/**
 * OptimizedVideoIntro Component
 * 
 * PURPOSE: Play intro video once, then fade out
 * - Only loads on desktop with good connection
 * - Falls back to instant display on mobile/slow connections
 * - Uses poster for immediate visual if skipping video
 * 
 * PERFORMANCE: Video is optional, site is usable without it
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useConnectionQuality } from '@/hooks/useConnectionQuality';

interface OptimizedVideoIntroProps {
  onComplete: () => void;
}

const OptimizedVideoIntro = ({ onComplete }: OptimizedVideoIntroProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { shouldLoadVideo } = useConnectionQuality();

  useEffect(() => {
    // If not loading video, complete immediately
    if (!shouldLoadVideo) {
      // Small delay for smooth transition
      const timer = setTimeout(() => {
        setIsPlaying(false);
        onComplete();
      }, 300);
      return () => clearTimeout(timer);
    }

    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
      onComplete();
    };

    const handleCanPlay = () => {
      setVideoLoaded(true);
    };

    // Fallback: if video doesn't load in 3s, skip
    const fallbackTimer = setTimeout(() => {
      if (!videoLoaded) {
        setIsPlaying(false);
        onComplete();
      }
    }, 3000);

    video.addEventListener('ended', handleEnded);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      clearTimeout(fallbackTimer);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [onComplete, shouldLoadVideo, videoLoaded]);

  // Skip button for accessibility
  const handleSkip = () => {
    setIsPlaying(false);
    onComplete();
  };

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="video-intro-overlay"
        >
          {shouldLoadVideo ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/dragon-intro.mp4" type="video/mp4" />
            </video>
          ) : (
            // Fallback: show brief branded loading screen
            <div className="w-full h-full flex items-center justify-center bg-background">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full metallic-prime flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-xl">SV</span>
                </div>
                <p className="text-muted-foreground font-display tracking-widest text-sm">SHAMS VISUALS</p>
              </div>
            </div>
          )}
          
          {/* Skip button for accessibility */}
          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-display tracking-wider"
            aria-label="Skip intro"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OptimizedVideoIntro;
