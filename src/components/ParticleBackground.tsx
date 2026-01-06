import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDuration: number;
  twinkleDelay: number;
}

const ParticleBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 25 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 30, damping: 25 });

  const { scrollY } = useScroll();
  const parallaxY1 = useTransform(scrollY, [0, 3000], [0, -400]);
  const parallaxY2 = useTransform(scrollY, [0, 3000], [0, -250]);
  const parallaxY3 = useTransform(scrollY, [0, 3000], [0, -150]);

  useEffect(() => {
    const newStars: Star[] = [];
    for (let i = 0; i < 120; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleDuration: Math.random() * 3 + 2,
        twinkleDelay: Math.random() * 5,
      });
    }
    setStars(newStars);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 30);
    mouseY.set((clientY / innerHeight - 0.5) * 30);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep space gradient - Purple themed */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(270,35%,6%)] to-[hsl(280,40%,4%)]" />

      {/* Nebula clouds - Layer 1 (furthest) - Purple themed */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: parallaxY1 }}
      >
        <motion.div
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full animate-nebula"
          style={{
            background: 'radial-gradient(ellipse, hsl(280 80% 50% / 0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
            x: smoothMouseX,
            y: smoothMouseY,
          }}
        />
        <motion.div
          className="absolute top-[60%] right-[10%] w-[500px] h-[500px] rounded-full animate-nebula"
          style={{
            background: 'radial-gradient(ellipse, hsl(300 70% 45% / 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animationDelay: '7s',
            x: smoothMouseX,
            y: smoothMouseY,
          }}
        />
      </motion.div>

      {/* Nebula clouds - Layer 2 - Purple themed */}
      <motion.div 
        className="absolute inset-0 opacity-15"
        style={{ y: parallaxY2 }}
      >
        <motion.div
          className="absolute top-[30%] right-[20%] w-[450px] h-[450px] rounded-full animate-nebula"
          style={{
            background: 'radial-gradient(ellipse, hsl(260 75% 55% / 0.35) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animationDelay: '3s',
            x: smoothMouseX,
            y: smoothMouseY,
          }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[15%] w-[400px] h-[400px] rounded-full animate-nebula"
          style={{
            background: 'radial-gradient(ellipse, hsl(270 60% 40% / 0.3) 0%, transparent 70%)',
            filter: 'blur(70px)',
            animationDelay: '10s',
            x: smoothMouseX,
            y: smoothMouseY,
          }}
        />
      </motion.div>

      {/* Stars - Layer 3 (closest) */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: parallaxY3 }}
      >
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-[hsl(280,20%,90%)] animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              '--twinkle-duration': `${star.twinkleDuration}s`,
              '--twinkle-delay': `${star.twinkleDelay}s`,
              x: smoothMouseX,
              y: smoothMouseY,
            } as React.CSSProperties}
          />
        ))}
      </motion.div>

      {/* Bright stars with glow */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: parallaxY3 }}
      >
        {stars.slice(0, 15).map((star) => (
          <motion.div
            key={`glow-${star.id}`}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size * 3,
              height: star.size * 3,
              background: `radial-gradient(circle, hsl(var(--primary) / 0.8) 0%, transparent 70%)`,
              '--twinkle-duration': `${star.twinkleDuration}s`,
              '--twinkle-delay': `${star.twinkleDelay}s`,
              x: smoothMouseX,
              y: smoothMouseY,
            } as React.CSSProperties}
          />
        ))}
      </motion.div>

      {/* Central glow accent */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)',
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ParticleBackground;
