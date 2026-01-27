/**
 * OptimizedVideoIntro Component
 * 
 * PURPOSE: Play intro video once per session, then fade out
 * - Uses sessionStorage to track if intro has played (see useIntroSession hook)
 * - Only loads on desktop with good connection
 * - Falls back to instant display on mobile/slow connections
 * 
 * SESSION BEHAVIOR:
 * - First visit: Plays full intro
 * - Navigate away and back: Skips intro (same session)
 * - Close tab/browser: Intro plays again next session
 * 
 * TO RESET (for testing):
 * - Browser console: window.__resetShamsIntro()
 * - Or: sessionStorage.removeItem('shams_intro_played')
 * 
 * PERFORMANCE: Video is optional, site is usable without it
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useConnectionQuality } from '@/hooks/useConnectionQuality';
import { useIntroSession } from '@/hooks/useIntroSession';

interface OptimizedVideoIntroProps {
  onComplete: () => void;
}

const OptimizedVideoIntro = ({ onComplete }: OptimizedVideoIntroProps) => {
  const { hasPlayed, markAsPlayed } = useIntroSession();
  const [isPlaying, setIsPlaying] = useState(!hasPlayed); // Skip if already played
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { shouldLoadVideo } = useConnectionQuality();

  useEffect(() => {
    // SESSION CHECK: If intro already played this session, skip immediately
    if (hasPlayed) {
      setIsPlaying(false);
      onComplete();
      return;
    }

    // If not loading video (mobile/slow), complete immediately but mark as played
    if (!shouldLoadVideo) {
      const timer = setTimeout(() => {
        markAsPlayed(); // Mark intro as played in sessionStorage
        setIsPlaying(false);
        onComplete();
      }, 300);
      return () => clearTimeout(timer);
    }

    const video = videoRef.current;
    if (!video) return;

    // Mark as played when video starts (so it won't replay on navigation)
    const handlePlay = () => {
      markAsPlayed(); // Write to sessionStorage: intro has started
    };

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
        markAsPlayed(); // Still mark as played even if skipped
        setIsPlaying(false);
        onComplete();
      }
    }, 3000);

    video.addEventListener('play', handlePlay);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      clearTimeout(fallbackTimer);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [onComplete, shouldLoadVideo, videoLoaded, hasPlayed, markAsPlayed]);

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
