import Link from 'next/link';
import { ArrowUpRight, Palette, Share2, Globe, Sparkles } from 'lucide-react';
import { Reveal, FadeIn } from '@/components/motion/Reveal';
import T from '@/components/T';
import HeroDragonVideo from '@/components/HeroDragonVideo';
import VideoSectionDivider from '@/components/VideoSectionDivider';
import CinematicScrollSection from '@/components/CinematicScrollSection';
import CanvasScrubber from '@/components/CanvasScrubber';
import LazyVideo from '@/components/LazyVideo';
import { SITE } from '@/lib/site';

export const metadata = {
  title: { absolute: 'Shams Visuals — Ahmed Shams | Web Developer & UI/UX Designer in Dhaka' },
  description: 'Ahmed Shams (Shams Visuals) designs and builds premium websites, brand identities and motion work for brands in Bangladesh — web development, UI/UX, branding and social media.',
  alternates: { canonical: '/' },
};

const skills = [
  { icon: Palette, k: 'skills.branding' },
  { icon: Share2, k: 'skills.social' },
  { icon: Globe, k: 'skills.web' },
  { icon: Sparkles, k: 'skills.motion' },
];
const services = ['web', 'ui', 'brand', 'motion'];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] flex flex-col justify-end px-6 sm:px-10 md:px-14 lg:px-20 pb-20 pt-28 overflow-hidden" aria-label="Introduction">
        <HeroDragonVideo />

        <FadeIn trigger="hero" delay={0.3} className="hidden sm:block absolute right-[6%] top-1/2 -translate-y-1/2 z-[2] pointer-events-none" style={{ mixBlendMode: 'screen' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/v-logo.webp" alt="" aria-hidden="true" width={384} height={384} className="w-40 h-40 sm:w-72 sm:h-72 md:w-96 md:h-96 object-contain select-none opacity-90" />
        </FadeIn>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <Reveal trigger="hero" delay={0.08}>
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-10 bg-primary/60" />
              <p className="text-primary text-[0.6rem] font-display tracking-[0.35em] sm:tracking-[0.55em] uppercase">Ahmed Shams · Shams Visuals</p>
            </div>
          </Reveal>

          <Reveal trigger="hero" delay={0.18}>
            <h1 className="font-display font-bold leading-[0.9] tracking-tight mb-8 sm:mb-10 text-foreground" style={{ fontSize: 'clamp(2.75rem, 8.5vw, 8.5rem)' }}>
              <T k="hero.title1" />
              <br />
              <span className="prime-text prime-glow"><T k="hero.title2" /></span>
            </h1>
          </Reveal>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12">
            <Reveal trigger="hero" delay={0.3} className="flex flex-col gap-6 max-w-lg">
              <p className="text-foreground/80 text-base leading-relaxed [text-shadow:0_1px_14px_rgba(0,0,0,0.7)]"><T k="hero.desc" /></p>
              <div className="flex flex-wrap gap-3">
                <Link href="/projects" className="cinematic-btn-primary" data-cursor="hover">
                  <T k="hero.viewProjects" /> <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-80" aria-hidden="true" />
                </Link>
                <Link href="/packages" className="cinematic-btn-glass" data-cursor="hover"><T k="hero.start" /></Link>
              </div>
            </Reveal>
          </div>
        </div>

        <FadeIn trigger="hero" delay={0.7} className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-50 pointer-events-none">
          <span className="text-[0.55rem] text-muted-foreground font-display tracking-[0.5em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-primary/70 to-transparent" />
        </FadeIn>
      </section>

      <VideoSectionDivider />
      <CinematicScrollSection />

      <section className="py-24 sm:py-28 px-6" aria-labelledby="disciplines">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-primary text-[0.6rem] font-display tracking-[0.5em] uppercase mb-4"><T k="skills.kicker" /></p>
              <h2 id="disciplines" className="font-display text-3xl md:text-4xl font-bold text-foreground"><T k="skills.title" /></h2>
            </div>
            <p className="max-w-sm text-muted-foreground text-sm leading-relaxed md:text-right"><T k="skills.desc" /></p>
          </Reveal>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-0">
            {skills.map((s, i) => (
              <li key={s.k} className="list-none">
                <Reveal delay={i * 0.08} className="glass-card h-full p-6 group">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary"><s.icon className="w-5 h-5" aria-hidden="true" /></div>
                  <h3 className="font-display text-xs font-semibold tracking-[0.12em] uppercase text-foreground mb-2 group-hover:text-primary transition-colors duration-300"><T k={s.k} /></h3>
                  <p className="text-sm text-muted-foreground leading-relaxed"><T k={`${s.k}.note`} /></p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CanvasScrubber frameCount={60} framePath="/frames/cinematic-square/frame" frameExt="jpg" poster="/images/poster-square.jpg" scrubHeight="240vh" aspectRatio={1} loadingText>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 25%, hsl(240 35% 3% / 0.8) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, hsl(240 35% 3% / 0.6) 0%, transparent 30%, transparent 68%, hsl(240 35% 3% / 0.95) 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 md:p-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-indigo-400/50" />
            <p className="text-indigo-300/80 text-[0.55rem] font-display tracking-[0.6em] uppercase">Chapter 03 — The Work</p>
          </div>
          <h2 className="font-display font-bold text-white leading-[0.9] mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}>
            Thirteen builds.<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #818cf8 0%, #a5b4fc 50%, #c7d2fe 100%)' }}>One standard.</span>
          </h2>
          <p className="text-white/70 text-sm max-w-sm mb-5">Self-directed projects across nine industries, each built to show how I design and ship.</p>
          <Link href="/projects" className="cinematic-btn-glass inline-flex" data-cursor="hover">Browse the projects <ArrowUpRight className="w-4 h-4 ml-1.5" aria-hidden="true" /></Link>
        </div>
      </CanvasScrubber>

      <section className="relative py-24 sm:py-28 overflow-hidden" aria-labelledby="services">
        <LazyVideo mp4Src="/videos/cyberpunk.mp4" poster="/images/poster-cyberpunk.jpg" loop rootMargin="400px" pauseWhenHidden objectFit="cover" playbackRate={0.7} videoFilter="brightness(0.28) saturate(1.4) hue-rotate(-20deg)" className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, hsl(270 12% 4% / 0.85) 0%, hsl(270 12% 4% / 0.4) 50%, transparent 100%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, hsl(270 12% 4% / 0.6) 0%, transparent 25%, transparent 70%, hsl(270 12% 4% / 0.9) 100%)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <Reveal className="mb-14">
            <p className="text-primary text-[0.6rem] font-display tracking-[0.5em] uppercase mb-5"><T k="services.kicker" /></p>
            <h2 id="services" className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              <T k="services.title1" /> <span className="prime-text prime-glow"><T k="services.title2" /></span>
            </h2>
          </Reveal>
          <ul className="grid sm:grid-cols-2 gap-5 p-0">
            {services.map((s, i) => (
              <li key={s} className="list-none">
                <Reveal delay={i * 0.09} className="glass-card h-full p-7 rounded-2xl group">
                  <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300"><T k={`services.${s}.t`} /></h3>
                  <p className="text-sm text-muted-foreground leading-relaxed"><T k={`services.${s}.d`} /></p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 sm:py-28 px-6 relative overflow-hidden" aria-labelledby="contact-cta">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 100%, hsl(280 85% 28% / 0.18) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal className="glass-card p-10 sm:p-12 md:p-16 rounded-3xl text-center">
            <p className="text-primary text-[0.6rem] font-display tracking-[0.5em] uppercase mb-6"><T k="cta.kicker" /></p>
            <h2 id="contact-cta" className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight"><T k="cta.title" /></h2>
            <p className="mb-10 max-w-md mx-auto text-muted-foreground leading-relaxed"><T k="cta.desc" /></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="cinematic-btn-primary" data-cursor="hover"><T k="cta.whatsapp" /> <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-80" aria-hidden="true" /></a>
              <Link href="/packages" className="cinematic-btn-glass" data-cursor="hover"><T k="cta.packages" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
