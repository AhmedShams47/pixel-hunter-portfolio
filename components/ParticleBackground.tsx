/**
 * Atmosphere layer: deep obsidian base, two soft violet glows and a sparse star field.
 * Server Component — stars come from a seeded generator, so there is no client JS,
 * no setState-after-mount and no hydration mismatch. Glows are plain radial gradients
 * (no CSS blur filter), which keeps this fixed layer cheap on mobile GPUs.
 * Sits at -z-10 (above the body background, below all page content).
 */
function seeded(seed: number) {
  let s = seed;
  return () => ((s = (s * 1664525 + 1013904223) % 4294967296) / 4294967296);
}

const rand = seeded(20260);
const STARS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: +(rand() * 100).toFixed(2),
  y: +(rand() * 100).toFixed(2),
  size: +(rand() * 1.6 + 0.8).toFixed(2),
  opacity: +(rand() * 0.35 + 0.12).toFixed(2),
  warm: i % 3 === 0,
}));

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsl(270 12% 4%) 0%, hsl(272 16% 6%) 50%, hsl(270 12% 4%) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 45% 35% at 12% 14%, hsl(280 80% 40% / 0.16) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 90% 60%, hsl(310 70% 38% / 0.12) 0%, transparent 70%)' }} />
      {STARS.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, opacity: s.opacity, background: s.warm ? 'hsl(310 60% 78%)' : 'hsl(270 30% 85%)' }}
        />
      ))}
    </div>
  );
}
