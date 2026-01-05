import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoIntroProps {
  onComplete: () => void;
}

const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPortal, setShowPortal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Show portal effect near the end
    const handleTimeUpdate = () => {
      if (video.currentTime >= video.duration - 2) {
        setShowPortal(true);
      }
    };

    const handleEnded = () => {
      setTimeout(() => {
        setIsPlaying(false);
        onComplete();
      }, 500);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="video-intro-overlay"
        >
          {/* Video */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/dragon-intro.mp4" type="video/mp4" />
          </video>

          {/* Portal hole that opens from center - like entering dragon's belly */}
          <AnimatePresence>
            {showPortal && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ zIndex: 50 }}
              >
                {/* Black mask with expanding hole */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ 
                    clipPath: 'circle(0% at 50% 50%)',
                    background: 'hsl(var(--background))'
                  }}
                  animate={{ 
                    clipPath: 'circle(150% at 50% 50%)',
                  }}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Golden rim around the portal */}
                <motion.div
                  className="absolute rounded-full"
                  style={{
                    border: '4px solid hsl(var(--gold))',
                    boxShadow: '0 0 60px hsl(var(--gold) / 0.8), 0 0 120px hsl(var(--gold) / 0.5), inset 0 0 40px hsl(var(--gold) / 0.3)',
                  }}
                  initial={{ width: 0, height: 0, opacity: 1 }}
                  animate={{ 
                    width: '300vmax', 
                    height: '300vmax',
                    opacity: 0,
                  }}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Spiral golden particles being sucked into center */}
                {[...Array(20)].map((_, i) => {
                  const angle = (i * 18) * Math.PI / 180;
                  const delay = i * 0.05;
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        background: 'hsl(var(--gold))',
                        boxShadow: '0 0 10px hsl(var(--gold))',
                      }}
                      initial={{ 
                        x: Math.cos(angle) * 400,
                        y: Math.sin(angle) * 400,
                        opacity: 1,
                        scale: 2,
                      }}
                      animate={{ 
                        x: 0,
                        y: 0,
                        opacity: 0,
                        scale: 0,
                      }}
                      transition={{ 
                        duration: 1.5, 
                        delay,
                        ease: "easeIn" 
                      }}
                    />
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoIntro;