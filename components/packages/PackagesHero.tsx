import { Shield } from 'lucide-react';

/** Server Component: text is in the first paint, entrance is CSS-only. */
export default function PackagesHero() {
  return (
    <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden" aria-labelledby="packages-title">
      <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(280 85% 50% / 0.08) 0%, transparent 70%)' }} />

      <div className="max-w-4xl mx-auto text-center relative z-10 hero-rise">
        <p className="text-primary text-sm font-display tracking-[0.3em] mb-6">PACKAGES</p>
        <h1 id="packages-title" className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Choose the plan that fits <span className="gold-text gold-glow">your business</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Conversion-focused websites with clear deliverables and a straightforward process — from your first message to launch.
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground p-0">
          <li className="list-none flex items-center gap-2"><Shield className="w-4 h-4 text-primary" aria-hidden="true" /> Clear pricing</li>
          <li className="list-none">No hidden charges</li>
          <li className="list-none hidden sm:block">Defined deliverables</li>
        </ul>
      </div>
    </section>
  );
}
