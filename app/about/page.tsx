import Link from 'next/link';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import T from '@/components/T';
import LazyVideo from '@/components/LazyVideo';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'About',
  description: 'Ahmed Shams is the web developer and designer behind Shams Visuals in Dhaka, Bangladesh. How I work: clear communication, fixed milestones and organised delivery — plus how to reach me.',
  alternates: { canonical: '/about' },
};

const steps = [
  { n: '01', t: 'Discovery', d: 'We talk on WhatsApp or a call: your brand, your audience, what the site or visual has to achieve.' },
  { n: '02', t: 'Plan', d: 'I map the structure, content and milestones, and agree scope and timing before any design starts.' },
  { n: '03', t: 'Design', d: 'Layouts, type and visual direction — shared with you as work-in-progress, not a surprise at the end.' },
  { n: '04', t: 'Build', d: 'Developed responsively, with media optimised so pages open quickly on mobile data.' },
  { n: '05', t: 'Launch', d: 'Testing, small fixes, going live, and a handover so you know how everything works.' },
];

const contacts = [
  { icon: Phone, label: 'WhatsApp', href: SITE.whatsapp, note: 'Fastest reply', hover: 'hover:text-green-400' },
  { icon: Instagram, label: 'Instagram', href: SITE.instagram, note: 'References and quick ideas', hover: 'hover:text-pink-400' },
  { icon: Facebook, label: 'Facebook', href: SITE.facebook, note: 'Message on Facebook', hover: 'hover:text-blue-400' },
  { icon: Mail, label: 'Email', href: `mailto:${SITE.email}`, note: 'For a detailed brief', hover: 'hover:text-primary' },
];

const facts = [
  ['Based in', SITE.location],
  ['Works in', 'English and Bangla'],
  ['Focus', 'Web, UI/UX, branding, motion'],
  ['Stack', 'React, Next.js, Tailwind, Framer Motion'],
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal trigger="hero">
            <p className="text-primary text-xs font-display tracking-[0.35em] mb-4 uppercase">About</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              <T k="about.title" /> <span className="prime-text prime-glow">Ahmed Shams</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-10 px-6 max-w-6xl mx-auto" aria-labelledby="who">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <Reveal className="flex-1 glass-card p-8 md:p-12 rounded-3xl">
            <h2 id="who" className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              <T k="about.who.title" /> <span className="text-primary"><T k="about.who.title2" /></span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6"><T k="about.who.p1" /></p>
            <p className="text-base leading-relaxed text-muted-foreground"><T k="about.who.p2" /></p>
            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
              {facts.map(([k, v]) => (
                <div key={k}><dt className="text-[0.6rem] font-display tracking-[0.3em] uppercase text-muted-foreground mb-1">{k}</dt><dd className="text-foreground">{v}</dd></div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="w-full max-w-xs mx-auto lg:mx-0 lg:w-72 xl:w-80 flex-shrink-0">
            <div className="relative rounded-3xl overflow-hidden border border-white/8" style={{ aspectRatio: '9/16' }}>
              <LazyVideo mp4Src="/videos/about-portrait.mp4" poster="/images/poster-about.jpg" loop rootMargin="300px" pauseWhenHidden objectFit="cover" playbackRate={0.8} videoFilter="brightness(0.85) contrast(1.05) saturate(1.1)" className="absolute inset-0 w-full h-full" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-display text-sm font-bold text-white">Ahmed Shams</p>
                <p className="text-[0.65rem] text-white/60 tracking-[0.2em]">SHAMS VISUALS</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden" aria-labelledby="process">
        <LazyVideo mp4Src="/videos/ambient-process.mp4" poster="/images/poster-1080.jpg" loop rootMargin="500px" pauseWhenHidden objectFit="cover" playbackRate={0.6} videoFilter="brightness(0.2) saturate(1.2)" className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, hsl(270 12% 4% / 0.92) 0%, hsl(270 12% 4% / 0.6) 30%, hsl(270 12% 4% / 0.6) 70%, hsl(270 12% 4% / 0.95) 100%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Reveal className="mb-12">
            <p className="text-primary text-[0.6rem] font-display tracking-[0.5em] uppercase mb-4">How a project runs</p>
            <h2 id="process" className="font-display text-3xl md:text-4xl font-bold text-foreground">From first message to <span className="text-primary">launch</span></h2>
          </Reveal>
          <ol className="p-0">
            {steps.map((s, i) => (
              <li key={s.n} className="list-none">
                <Reveal delay={i * 0.06} className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[5rem_1fr_2fr] gap-x-4 gap-y-1 py-6 border-t border-white/10 items-baseline">
                  <span className="font-display text-2xl sm:text-3xl text-primary/70">{s.n}</span>
                  <h3 className="font-display text-lg font-bold text-foreground">{s.t}</h3>
                  <p className="col-start-2 sm:col-start-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{s.d}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 px-6" aria-labelledby="contact">
        <div className="max-w-4xl mx-auto">
          <Reveal className="glass-card p-8 md:p-12 rounded-3xl text-center">
            <h2 id="contact" className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Let&apos;s talk about your <span className="text-primary">project</span></h2>
            <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto text-muted-foreground">Tell me what you&apos;re building. WhatsApp is the fastest way; every message comes straight to me.</p>
            <ul className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8 p-0">
              {contacts.map((c) => (
                <li key={c.label} className="list-none">
                  <a href={c.href} target="_blank" rel="noopener noreferrer" data-cursor="hover" className={`flex flex-col items-center gap-2 p-5 glass-card rounded-xl text-muted-foreground ${c.hover} transition-all duration-300 hover:border-primary/50 hover:-translate-y-0.5`}>
                    <span className="flex items-center gap-2"><c.icon className="w-4 h-4" aria-hidden="true" /><span className="font-display font-semibold text-foreground">{c.label}</span></span>
                    <span className="text-xs text-muted-foreground">{c.note}</span>
                  </a>
                </li>
              ))}
            </ul>
            <Link href="/packages" className="cinematic-btn-primary inline-flex" data-cursor="hover">View packages</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
