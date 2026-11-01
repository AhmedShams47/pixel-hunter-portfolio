import { Reveal } from '@/components/motion/Reveal';

const points = [
  { t: 'Design and code, one person', d: 'The person who designs the layout also builds it, so nothing gets lost between a mock-up and the finished page.' },
  { t: 'Phones first', d: 'Most Bangladeshi visitors arrive on a phone. Layouts are designed for small screens first and scaled up, not the other way round.' },
  { t: 'Light on mobile data', d: 'Images are sized properly and heavy video is only loaded when it scrolls into view, so pages open quickly on a normal connection.' },
  { t: 'Contact in one tap', d: 'Buttons open WhatsApp directly — the channel customers already use — instead of burying a form three clicks deep.' },
  { t: 'Findable by search', d: 'Clear headings, page titles, descriptions and structured data, so search engines and AI assistants can understand each page.' },
  { t: 'Clear milestones', d: 'Scope and timing are agreed before design starts, and you see work in progress along the way.' },
];

export default function HowIBuild() {
  return (
    <section className="py-20 px-6" aria-labelledby="how-i-build">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 self-start">
          <p className="text-primary text-[0.6rem] font-display tracking-[0.5em] uppercase mb-4">Approach</p>
          <h2 id="how-i-build" className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">How I <span className="prime-text">build</span></h2>
          <p className="text-muted-foreground leading-relaxed max-w-sm">The principles behind every project above — and the ones I&apos;d bring to yours.</p>
        </Reveal>
        <ol className="p-0">
          {points.map((p, i) => (
            <li key={p.t} className="list-none">
              <Reveal delay={i * 0.05} className="grid grid-cols-[2.5rem_1fr] gap-4 py-6 border-t border-white/10">
                <span className="font-display text-sm text-primary/70 pt-1">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1.5">{p.t}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
