import { useEffect, useState, useMemo } from 'react';

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

  // Generate minimal stars for smooth performance
  useEffect(() => {
    const newStars: Star[] = [];
    const starCount = window.innerWidth < 768 ? 20 : 35;
    
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.2,
        delay: Math.random() * 5,
      });
    }
    setStars(newStars);
  }, []);

  // Memoize star elements - simple CSS-only twinkle
  const starElements = useMemo(() => (
    stars.map((star) => (
      <div
        key={star.id}
        className="absolute rounded-full bg-foreground/50"
        style={{
          left: `${star.x}%`,
          top: `${star.y}%`,
          width: star.size,
          height: star.size,
          opacity: star.opacity,
        }}
      />
    ))
  ), [stars]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Simple static gradient background - no animations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(270,25%,6%)] to-background" />

      {/* Static subtle nebula - no animation */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute top-[15%] left-[10%] w-[300px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, hsl(270 70% 50% / 0.25) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute top-[50%] right-[5%] w-[250px] h-[250px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, hsl(280 60% 45% / 0.2) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Stars layer - static, no animations */}
      <div className="absolute inset-0">
        {starElements}
      </div>

      {/* Subtle center glow - static */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.02]"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)',
        }}
      />
    </div>
  );
};

export default ParticleBackground;
