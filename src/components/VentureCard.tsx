import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
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
  delay = 0,
}: VentureCardProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / (rect.height / 2)) * -6;
    const rotateYValue = (mouseX / (rect.width / 2)) * 6;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: "easeInOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.4s ease-out',
      }}
      className="group relative"
    >
      <div className="glass-card p-8 h-full hover:border-primary/50 transition-all duration-500 ease-in-out overflow-hidden rounded-3xl">
        {/* Background gradient */}
        <div
          className={`absolute inset-0 opacity-10 transition-opacity duration-500 ease-in-out group-hover:opacity-20 rounded-3xl ${gradient}`}
        />

        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-3xl"
          style={{
            background: `linear-gradient(105deg, transparent 40%, hsl(var(--gold) / 0.08) 45%, hsl(var(--gold) / 0.15) 50%, hsl(var(--gold) / 0.08) 55%, transparent 60%)`,
            transform: 'translateZ(10px)',
          }}
        />

        <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
          {/* Icon */}
          <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/15 border border-primary/25 text-primary group-hover:shadow-[0_0_30px_hsl(var(--gold)/0.3)] transition-all duration-500 ease-in-out">
            {icon}
          </div>

          {/* Vibe tag */}
          <div className="mb-4">
            <span className="text-xs font-display tracking-[0.2em] text-muted-foreground uppercase">
              {vibe}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-500 ease-in-out">
            {title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-primary mb-4">{subtitle}</p>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 tracking-wide">
            {description}
          </p>

          {/* CTA */}
          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 text-sm font-display text-primary hover:text-foreground transition-colors duration-500 ease-in-out"
          >
            Explore
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default VentureCard;