import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const INTRO_SEEN_KEY = 'shams_intro_seen';

interface VideoIntroProps {
  onComplete: () => void;
}

const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const [shouldShow, setShouldShow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if intro was already seen
    const hasSeenIntro = localStorage.getItem(INTRO_SEEN_KEY);
    
    if (hasSeenIntro) {
      // Skip intro entirely
      onComplete();
      return;
    }

    // Show intro for first-time visitors
    setShouldShow(true);
    setIsPlaying(true);
  }, [onComplete]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldShow) return;

    const handleEnded = () => {
      localStorage.setItem(INTRO_SEEN_KEY, 'true');
      setIsPlaying(false);
      onComplete();
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, [onComplete, shouldShow]);

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="video-intro-overlay"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          >
            <source src="/videos/dragon-intro.mp4" type="video/mp4" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoIntro;