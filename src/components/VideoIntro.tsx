import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoIntroProps {
  onComplete: () => void;
}

const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPortal, setShowPortal] = useState(false);
  const [portalPhase, setPortalPhase] = useState<'forming' | 'stable' | 'entering' | 'complete'>('forming');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Show portal when dragon mouth opens (adjust timing based on your video)
    const handleTimeUpdate = () => {
      const timeRemaining = video.duration - video.currentTime;
      
      // Start portal formation 3.5 seconds before end
      if (timeRemaining <= 3.5 && !showPortal) {
        setShowPortal(true);
        setPortalPhase('forming');
      }
      
      // Portal stabilizes 2 seconds before end
      if (timeRemaining <= 2 && portalPhase === 'forming') {
        setPortalPhase('stable');
      }
      
      // Enter portal 1 second before end
      if (timeRemaining <= 1 && portalPhase === 'stable') {
        setPortalPhase('entering');
      }
    };

    const handleEnded = () => {
      setPortalPhase('complete');
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
  }, [onComplete, showPortal, portalPhase]);

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="video-intro-overlay"
        >
          {/* Dragon Video */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/dragon-intro.mp4" type="video/mp4" />
          </video>

          {/* Magical Portal Effect */}
          <AnimatePresence>
            {showPortal && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                {/* Portal Container - positioned to appear in dragon's mouth */}
                <motion.div
                  className="relative"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: portalPhase === 'entering' || portalPhase === 'complete' ? 15 : 1,
                  }}
                  transition={{ 
                    duration: portalPhase === 'entering' ? 1.5 : 1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {/* Outer energy ring - purple */}
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      width: '280px',
                      height: '280px',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'radial-gradient(circle, transparent 40%, rgba(139, 92, 246, 0.3) 60%, rgba(139, 92, 246, 0.6) 80%, rgba(139, 92, 246, 0.8) 100%)',
                      boxShadow: '0 0 60px rgba(139, 92, 246, 0.6), 0 0 120px rgba(139, 92, 246, 0.4), inset 0 0 80px rgba(139, 92, 246, 0.3)',
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      rotate: 360
                    }}
                    transition={{ 
                      opacity: { duration: 0.5 },
                      scale: { duration: 1, ease: 'easeOut' },
                      rotate: { duration: 8, repeat: Infinity, ease: 'linear' }
                    }}
                  />

                  {/* Middle energy ring - blue */}
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      width: '220px',
                      height: '220px',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'radial-gradient(circle, transparent 35%, rgba(59, 130, 246, 0.4) 55%, rgba(59, 130, 246, 0.7) 75%, rgba(59, 130, 246, 0.9) 100%)',
                      boxShadow: '0 0 50px rgba(59, 130, 246, 0.7), 0 0 100px rgba(59, 130, 246, 0.4), inset 0 0 60px rgba(59, 130, 246, 0.4)',
                    }}
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      rotate: -360
                    }}
                    transition={{ 
                      opacity: { duration: 0.5, delay: 0.2 },
                      scale: { duration: 1.2, ease: 'easeOut', delay: 0.2 },
                      rotate: { duration: 6, repeat: Infinity, ease: 'linear' }
                    }}
                  />

                  {/* Inner core - bright cyan/white */}
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      width: '160px',
                      height: '160px',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(147, 197, 253, 0.9) 30%, rgba(96, 165, 250, 0.7) 60%, rgba(59, 130, 246, 0.5) 100%)',
                      boxShadow: '0 0 40px rgba(255, 255, 255, 0.8), 0 0 80px rgba(147, 197, 253, 0.6), 0 0 120px rgba(59, 130, 246, 0.4)',
                    }}
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ 
                      opacity: [0, 1, 0.8, 1],
                      scale: [0.1, 1.1, 0.95, 1],
                    }}
                    transition={{ 
                      duration: 1.5,
                      ease: 'easeOut',
                      delay: 0.3,
                    }}
                  />

                  {/* Swirling energy particles */}
                  {[...Array(24)].map((_, i) => {
                    const angle = (i * 15) * Math.PI / 180;
                    const radius = 100 + (i % 3) * 30;
                    const delay = i * 0.05;
                    const isBlue = i % 2 === 0;
                    
                    return (
                      <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                          width: `${4 + (i % 3) * 2}px`,
                          height: `${4 + (i % 3) * 2}px`,
                          left: '50%',
                          top: '50%',
                          background: isBlue 
                            ? 'radial-gradient(circle, rgba(147, 197, 253, 1), rgba(59, 130, 246, 0.8))'
                            : 'radial-gradient(circle, rgba(196, 181, 253, 1), rgba(139, 92, 246, 0.8))',
                          boxShadow: isBlue
                            ? '0 0 10px rgba(59, 130, 246, 0.9), 0 0 20px rgba(59, 130, 246, 0.5)'
                            : '0 0 10px rgba(139, 92, 246, 0.9), 0 0 20px rgba(139, 92, 246, 0.5)',
                        }}
                        initial={{ 
                          x: Math.cos(angle) * radius,
                          y: Math.sin(angle) * radius,
                          opacity: 0,
                          scale: 0,
                        }}
                        animate={{ 
                          x: [
                            Math.cos(angle) * radius,
                            Math.cos(angle + Math.PI) * (radius * 0.6),
                            Math.cos(angle + Math.PI * 2) * radius,
                          ],
                          y: [
                            Math.sin(angle) * radius,
                            Math.sin(angle + Math.PI) * (radius * 0.6),
                            Math.sin(angle + Math.PI * 2) * radius,
                          ],
                          opacity: [0, 1, 1, 0.5],
                          scale: [0, 1.5, 1, 0.8],
                        }}
                        transition={{ 
                          duration: 3,
                          delay,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    );
                  })}

                  {/* Volumetric light rays */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30) * Math.PI / 180;
                    
                    return (
                      <motion.div
                        key={`ray-${i}`}
                        className="absolute origin-center"
                        style={{
                          width: '2px',
                          height: '120px',
                          left: '50%',
                          top: '50%',
                          background: `linear-gradient(to top, transparent, ${i % 2 === 0 ? 'rgba(59, 130, 246, 0.6)' : 'rgba(139, 92, 246, 0.6)'}, transparent)`,
                          transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                        }}
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ 
                          opacity: [0, 0.8, 0.4, 0.8],
                          scaleY: [0, 1, 0.8, 1],
                        }}
                        transition={{ 
                          duration: 2,
                          delay: i * 0.1,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    );
                  })}

                  {/* Smoke/wisp particles */}
                  {[...Array(8)].map((_, i) => {
                    const startAngle = (i * 45) * Math.PI / 180;
                    
                    return (
                      <motion.div
                        key={`wisp-${i}`}
                        className="absolute rounded-full blur-sm"
                        style={{
                          width: '30px',
                          height: '30px',
                          left: '50%',
                          top: '50%',
                          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent)',
                        }}
                        initial={{ 
                          x: Math.cos(startAngle) * 80,
                          y: Math.sin(startAngle) * 80,
                          opacity: 0,
                          scale: 0.5,
                        }}
                        animate={{ 
                          x: [
                            Math.cos(startAngle) * 80,
                            Math.cos(startAngle + 0.5) * 120,
                            Math.cos(startAngle + 1) * 160,
                          ],
                          y: [
                            Math.sin(startAngle) * 80,
                            Math.sin(startAngle + 0.5) * 120,
                            Math.sin(startAngle + 1) * 160,
                          ],
                          opacity: [0, 0.6, 0],
                          scale: [0.5, 1.5, 2],
                        }}
                        transition={{ 
                          duration: 2.5,
                          delay: i * 0.2,
                          repeat: Infinity,
                          ease: 'easeOut',
                        }}
                      />
                    );
                  })}

                  {/* Inner depth rings for 3D tunnel effect */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={`depth-${i}`}
                      className="absolute rounded-full"
                      style={{
                        width: `${140 - i * 20}px`,
                        height: `${140 - i * 20}px`,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        border: `1px solid rgba(147, 197, 253, ${0.3 - i * 0.05})`,
                        boxShadow: `inset 0 0 ${20 - i * 3}px rgba(59, 130, 246, ${0.2 - i * 0.03})`,
                      }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ 
                        opacity: 1,
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ 
                        opacity: { duration: 0.5, delay: 0.5 + i * 0.1 },
                        scale: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }
                      }}
                    />
                  ))}
                </motion.div>

                {/* Final transition - black overlay expanding from center */}
                {(portalPhase === 'entering' || portalPhase === 'complete') && (
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'hsl(var(--background))',
                    }}
                    initial={{ 
                      clipPath: 'circle(0% at 50% 50%)',
                    }}
                    animate={{ 
                      clipPath: 'circle(150% at 50% 50%)',
                    }}
                    transition={{ 
                      duration: 1.5, 
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.3,
                    }}
                  />
                )}

                {/* Motion blur / speed lines during portal entry */}
                {portalPhase === 'entering' && (
                  <>
                    {[...Array(20)].map((_, i) => {
                      const angle = (i * 18) * Math.PI / 180;
                      
                      return (
                        <motion.div
                          key={`speed-${i}`}
                          className="absolute"
                          style={{
                            width: '3px',
                            height: '200px',
                            left: '50%',
                            top: '50%',
                            background: `linear-gradient(to top, transparent, ${i % 3 === 0 ? 'rgba(59, 130, 246, 0.8)' : i % 3 === 1 ? 'rgba(139, 92, 246, 0.8)' : 'rgba(255, 255, 255, 0.6)'})`,
                            transform: `translate(-50%, -100%) rotate(${i * 18}deg)`,
                            transformOrigin: 'bottom center',
                          }}
                          initial={{ scaleY: 0, opacity: 0 }}
                          animate={{ 
                            scaleY: [0, 3, 6],
                            opacity: [0, 1, 0],
                          }}
                          transition={{ 
                            duration: 1,
                            delay: i * 0.03,
                            ease: 'easeIn',
                          }}
                        />
                      );
                    })}
                  </>
                )}
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoIntro;
