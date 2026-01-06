import { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
}

const ParticleBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Lighter spring config for better performance
  const smoothMouseX = useSpring(mouseX, { stiffness: 20, damping: 30, mass: 1 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 20, damping: 30, mass: 1 });

  // Generate fewer stars for better performance
  useEffect(() => {
    const newStars: Star[] = [];
    const starCount = window.innerWidth < 768 ? 30 : 50; // Fewer on mobile
    
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        delay: Math.random() * 5,
      });
    }
    setStars(newStars);
  }, []);

  // Throttled mouse handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 15);
    mouseY.set((clientY / innerHeight - 0.5) * 15);
  }, [mouseX, mouseY]);

  useEffect(() => {
    let ticking = false;
    const throttledHandler = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleMouseMove(e);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('mousemove', throttledHandler, { passive: true });
    return () => window.removeEventListener('mousemove', throttledHandler);
  }, [handleMouseMove]);

  // Memoize star elements
  const starElements = useMemo(() => (
    stars.map((star) => (
      <div
        key={star.id}
        className="absolute rounded-full bg-foreground/60 animate-twinkle"
        style={{
          left: `${star.x}%`,
          top: `${star.y}%`,
          width: star.size,
          height: star.size,
          '--twinkle-duration': '4s',
          '--twinkle-delay': `${star.delay}s`,
          willChange: 'opacity',
        } as React.CSSProperties}
      />
    ))
  ), [stars]);

  // Memoize glow stars
  const glowStars = useMemo(() => (
    stars.slice(0, 8).map((star) => (
      <div
        key={`glow-${star.id}`}
        className="absolute rounded-full animate-twinkle"
        style={{
          left: `${star.x}%`,
          top: `${star.y}%`,
          width: star.size * 4,
          height: star.size * 4,
          background: `radial-gradient(circle, hsl(var(--primary) / 0.6) 0%, transparent 70%)`,
          '--twinkle-duration': '5s',
          '--twinkle-delay': `${star.delay}s`,
          willChange: 'opacity',
        } as React.CSSProperties}
      />
    ))
  ), [stars]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(270,30%,5%)] to-background" />

      {/* Single nebula layer with CSS animation (no JS) */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-[15%] left-[10%] w-[400px] h-[400px] rounded-full animate-nebula"
          style={{
            background: 'radial-gradient(ellipse, hsl(270 70% 50% / 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
            willChange: 'transform',
          }}
        />
        <div
          className="absolute top-[50%] right-[5%] w-[350px] h-[350px] rounded-full animate-nebula"
          style={{
            background: 'radial-gradient(ellipse, hsl(280 60% 45% / 0.25) 0%, transparent 70%)',
            filter: 'blur(70px)',
            animationDelay: '8s',
            willChange: 'transform',
          }}
        />
      </div>

      {/* Stars layer - CSS only, no motion tracking */}
      <div className="absolute inset-0">
        {starElements}
      </div>

      {/* Glow stars - minimal count */}
      <div className="absolute inset-0">
        {glowStars}
      </div>

      {/* Subtle center glow - CSS animation */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] animate-pulse"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)',
        }}
      />
    </div>
  );
};

export default ParticleBackground;
