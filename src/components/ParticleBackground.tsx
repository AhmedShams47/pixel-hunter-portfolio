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

  useEffect(() => {
    const newStars: Star[] = [];
    const starCount = window.innerWidth < 768 ? 15 : 25;
    
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.15 + 0.05,
        delay: Math.random() * 5,
      });
    }
    setStars(newStars);
  }, []);

  const starElements = useMemo(() => (
    stars.map((star) => (
      <div
        key={star.id}
        className="absolute rounded-full"
        style={{
          left: `${star.x}%`,
          top: `${star.y}%`,
          width: star.size,
          height: star.size,
          opacity: star.opacity,
          background: star.id % 3 === 0
            ? 'hsl(310 60% 75%)'
            : 'hsl(270 20% 80%)',
        }}
      />
    ))
  ), [stars]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft light gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(270 15% 96%) 0%, hsl(275 12% 94%) 40%, hsl(270 15% 96%) 100%)',
        }}
      />

      {/* Subtle nebula orbs */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute top-[12%] left-[8%] w-[350px] h-[350px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, hsl(280 80% 55% / 0.3) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />
        <div
          className="absolute top-[55%] right-[5%] w-[280px] h-[280px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, hsl(310 70% 50% / 0.25) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />
        <div
          className="absolute bottom-[10%] left-[40%] w-[200px] h-[200px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, hsl(290 60% 45% / 0.2) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Stars */}
      <div className="absolute inset-0">
        {starElements}
      </div>

      {/* Subtle center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.015]"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)',
        }}
      />
    </div>
  );
};

export default ParticleBackground;
