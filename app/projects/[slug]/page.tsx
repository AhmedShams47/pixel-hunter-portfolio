import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowUpRight, ArrowLeft, Check } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { projects } from '@/lib/projects-data';
import { SITE } from '@/lib/site';

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};
  const title = `${project.title} — ${project.industry} website case study`;
  const description = `${project.caseStudy.problem} A self-directed ${project.industry.toLowerCase()} website build by Ahmed Shams.`;
  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: { type: 'article', url: `${SITE.url}/projects/${project.id}`, title, description, images: [{ url: project.image.src, width: project.image.width, height: project.image.height, alt: project.title }] },
    twitter: { card: 'summary_large_image', title, description, images: [project.image.src] },
  };
}

const label = 'text-[0.6rem] font-display tracking-[0.3em] uppercase text-muted-foreground mb-1';

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.id === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const others = projects.filter((p) => p.id !== project.id);
  const related = [...others.filter((p) => p.category === project.category), ...others.filter((p) => p.category !== project.category)].slice(0, 3);
  const next = projects[(index + 1) % projects.length];
  const url = `${SITE.url}/projects/${project.id}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CreativeWork', '@id': `${url}#work`, name: project.title, url, description: project.caseStudy.problem, genre: project.industry, image: `${SITE.url}${project.image.src}`, creator: { '@id': `${SITE.url}/#person` }, sameAs: project.demoUrl, isPartOf: { '@id': `${SITE.url}/#website` } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE.url}/projects` },
        { '@type': 'ListItem', position: 3, name: project.title, item: url },
      ] },
    ],
  };

  return (
    <article className="pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="pt-32 pb-10 px-6">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs font-display tracking-[0.2em] uppercase text-muted-foreground">
            <Link href="/projects" className="inline-flex items-center gap-2 hover:text-primary transition-colors" data-cursor="hover"><ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" /> All projects</Link>
          </nav>
          <Reveal trigger="hero">
            <p className="text-primary text-[0.6rem] font-display tracking-[0.5em] uppercase mb-4">{project.industry} · Self-directed build</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-[0.95] mb-6">{project.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{project.caseStudy.solution}</p>
          </Reveal>
          <Reveal trigger="hero" delay={0.15} className="flex flex-wrap gap-3 mt-8">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="cinematic-btn-primary" data-cursor="hover">Open live demo <ArrowUpRight className="w-4 h-4 ml-1.5" aria-hidden="true" /></a>
            <a href={`${SITE.whatsapp}?text=${encodeURIComponent(`Hi Ahmed, I saw the ${project.title} project and I'd like something similar.`)}`} target="_blank" rel="noopener noreferrer" className="cinematic-btn-glass" data-cursor="hover">Ask about something similar</a>
          </Reveal>
        </div>
      </header>

      <div className="px-6">
        <div className="max-w-5xl mx-auto relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/8">
          <Image src={project.image} alt={`${project.title} — ${project.industry} website design`} fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
        </div>
      </div>

      <section className="px-6 mt-16" aria-label="Case study">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
          <Reveal>
            <dl className="glass-card p-6 rounded-2xl space-y-5 text-sm lg:sticky lg:top-28">
              <div><dt className={label}>Built for</dt><dd className="text-foreground">{project.caseStudy.clientType}</dd></div>
              <div><dt className={label}>Type</dt><dd className="text-foreground">Self-directed capability build — not a client commission</dd></div>
              <div><dt className={label}>My role</dt><dd className="text-foreground">Design and development</dd></div>
              <div><dt className={label}>Live demo</dt><dd><a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">{project.demoUrl.replace('https://', '')}</a></dd></div>
            </dl>
          </Reveal>

          <div className="space-y-12">
            <Reveal><h2 className="font-display text-2xl font-bold text-foreground mb-3">The <span className="text-primary">problem</span></h2><p className="text-muted-foreground leading-relaxed">{project.caseStudy.problem}</p></Reveal>
            <Reveal><h2 className="font-display text-2xl font-bold text-foreground mb-3">The <span className="text-primary">approach</span></h2><p className="text-muted-foreground leading-relaxed">{project.caseStudy.solution}</p></Reveal>
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">What&apos;s <span className="text-primary">in the build</span></h2>
              <ul className="grid sm:grid-cols-2 gap-3 p-0">
                {project.caseStudy.features.map((f) => (<li key={f} className="flex items-start gap-3 text-sm text-muted-foreground list-none"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" /> {f}</li>))}
              </ul>
            </Reveal>
            <Reveal><h2 className="font-display text-2xl font-bold text-foreground mb-3">What it <span className="text-primary">demonstrates</span></h2><p className="text-muted-foreground leading-relaxed">{project.caseStudy.results}</p></Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 mt-24" aria-labelledby="more-work">
        <div className="max-w-6xl mx-auto">
          <h2 id="more-work" className="font-display text-2xl font-bold text-foreground mb-8">More <span className="text-primary">work</span></h2>
          <ul className="grid sm:grid-cols-3 gap-5 p-0">
            {related.map((p) => (
              <li key={p.id} className="list-none">
                <Link href={`/projects/${p.id}`} data-cursor="hover" className="group block rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition-colors">
                  <div className="relative aspect-[16/10]"><Image src={p.image} alt={`${p.title} website preview`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" /></div>
                  <div className="p-4"><p className="text-[10px] font-display tracking-[0.18em] uppercase text-primary mb-1">{p.industry}</p><p className="font-display font-bold text-foreground">{p.title}</p></div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
            <Link href={`/projects/${next.id}`} className="cinematic-btn-glass" data-cursor="hover">Next: {next.title} <ArrowUpRight className="w-4 h-4 ml-1.5" aria-hidden="true" /></Link>
            <Link href="/packages" className="cinematic-btn-primary" data-cursor="hover">Start your project</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
