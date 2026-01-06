import { useRef, useCallback, useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface VentureCardProps {
  title: string;
  subtitle: string;
  description: string;
  vibe: string;
  icon: React.ReactNode;
  gradient: string;
  delay?: number;
}

const VentureCard = ({
  title,
  subtitle,
  description,
  vibe,
  icon,
  gradient,
}: VentureCardProps) => {
  const [transform, setTransform] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    // Cancel any pending animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const rotateX = (mouseY / (rect.height / 2)) * -4;
      const rotateY = (mouseX / (rect.width / 2)) * 4;
      
      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    setTransform('');
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform || 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        transition: 'transform 0.3s ease-out',
        willChange: 'transform',
      }}
      className="group relative"
    >
      <div className="glass-card p-8 h-full hover:border-primary/50 transition-all duration-300 overflow-hidden rounded-3xl">
        {/* Background gradient */}
        <div
          className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl ${gradient}`}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/15 border border-primary/25 text-primary group-hover:shadow-[0_0_20px_hsl(var(--gold)/0.2)] transition-shadow duration-300">
            {icon}
          </div>

          {/* Vibe tag */}
          <div className="mb-4">
            <span className="text-xs font-display tracking-[0.2em] text-muted-foreground uppercase">
              {vibe}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-primary mb-4">{subtitle}</p>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 tracking-wide">
            {description}
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-display text-primary hover:text-foreground transition-colors duration-300 hover:translate-x-1"
          >
            Explore
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VentureCard;
