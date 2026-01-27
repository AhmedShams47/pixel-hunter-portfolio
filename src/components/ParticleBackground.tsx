/**
 * ParticleBackground - Ultra-Lightweight Version
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * - Pure CSS gradients, no JS animations
 * - No runtime star generation
 * - Uses CSS custom properties for theming
 * - Respects prefers-reduced-motion
 * 
 * EXPECTED IMPACT:
 * - Zero JS runtime cost
 * - No layout shifts
 * - Smooth 60fps scrolling
 */

const ParticleBackground = () => {
  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Static gradient background - no animations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(270,25%,6%)] to-background" />

      {/* Subtle nebula effects - pure CSS, no animation */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-[15%] left-[10%] w-[300px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, hsl(270 70% 50% / 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute top-[50%] right-[5%] w-[250px] h-[250px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, hsl(280 60% 45% / 0.25) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-[20%] left-[30%] w-[200px] h-[200px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, hsl(265 50% 40% / 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Minimal stars - CSS only, fixed positions */}
      <div className="absolute inset-0 opacity-30">
        {/* Static star dots using pseudo-elements would be even lighter, 
            but inline for clarity. These are fixed, no animation. */}
        <div className="absolute top-[10%] left-[20%] w-1 h-1 rounded-full bg-foreground/40" />
        <div className="absolute top-[25%] left-[80%] w-0.5 h-0.5 rounded-full bg-foreground/30" />
        <div className="absolute top-[40%] left-[15%] w-1 h-1 rounded-full bg-foreground/50" />
        <div className="absolute top-[60%] left-[70%] w-0.5 h-0.5 rounded-full bg-foreground/40" />
        <div className="absolute top-[75%] left-[45%] w-1 h-1 rounded-full bg-foreground/30" />
        <div className="absolute top-[85%] left-[25%] w-0.5 h-0.5 rounded-full bg-foreground/50" />
        <div className="absolute top-[15%] left-[55%] w-1 h-1 rounded-full bg-foreground/40" />
        <div className="absolute top-[35%] left-[90%] w-0.5 h-0.5 rounded-full bg-foreground/30" />
        <div className="absolute top-[50%] left-[35%] w-1 h-1 rounded-full bg-foreground/50" />
        <div className="absolute top-[70%] left-[85%] w-0.5 h-0.5 rounded-full bg-foreground/40" />
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
