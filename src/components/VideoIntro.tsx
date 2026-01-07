import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoIntroProps {
  onComplete: () => void;
}

const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
      onComplete();
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, [onComplete]);

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
            preload="auto"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23110818' width='1' height='1'/%3E%3C/svg%3E"
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