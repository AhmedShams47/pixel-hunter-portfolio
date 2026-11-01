import LazyVideo from '@/components/LazyVideo';
import { projects } from '@/lib/projects-data';

/** Stats come straight from the project data, rendered into the server HTML as real numbers. */
const stats = [
  { value: projects.length, label: 'Projects built' },
  { value: new Set(projects.map((p) => p.category)).size, label: 'Industries covered' },
  { value: projects.length, label: 'Case studies' },
];

export default function ProjectHero() {
  return (
    <section className="pt-28 sm:pt-32 pb-14 sm:pb-16 px-4 sm:px-6 relative overflow-hidden" aria-labelledby="projects-title">
      <LazyVideo mp4Src="/videos/hero-scroll.mp4" poster="/images/poster-hero.jpg" loop rootMargin="0px" pauseWhenHidden objectFit="cover" playbackRate={0.6} videoFilter="brightness(0.3) blur(2px) saturate(1.1)" className="absolute inset-0 w-full h-full opacity-40" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 30%, transparent 20%, hsl(270 12% 4% / 0.78) 75%)' }} />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p className="hero-fade text-primary text-[0.6rem] font-display tracking-[0.5em] uppercase mb-8">Portfolio</p>
        <h1 id="projects-title" className="hero-rise font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[0.95] tracking-tight" style={{ animationDelay: '0.08s' }}>
          Selected works &amp; <span className="prime-text prime-glow">case studies</span>
        </h1>
        <p className="hero-rise text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.18s' }}>
          Every project here is a self-directed build — designed and coded by me to show how I approach a brief in each industry. Each one has a live demo and its own case study.
        </p>
        <dl className="hero-rise flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-20 mt-10" style={{ animationDelay: '0.28s' }}>
          {stats.map((s) => (
            <div key={s.label} className="text-center flex flex-col-reverse">
              <dt className="text-xs text-muted-foreground font-display tracking-[0.18em] uppercase mt-1">{s.label}</dt>
              <dd className="font-display text-4xl md:text-5xl font-bold prime-text">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
