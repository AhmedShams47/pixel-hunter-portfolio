'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/projects-data';

/**
 * Links to the real /projects/[slug] page. Tilt is pointer-only (off for touch and
 * reduced-motion) and writes straight to element style — no React state per mouse move.
 */
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const canTilt = () => window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || !canTilt()) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    el.style.transform = `perspective(900px) rotateX(${-dy * 4}deg) rotateY(${dx * 6}deg) scale3d(1.012,1.012,1.012)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ''; };

  return (
    <motion.li initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.55, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }} onMouseMove={onMove} onMouseLeave={onLeave} className="list-none">
      <Link ref={ref} href={`/projects/${project.id}`} data-cursor="hover" style={{ transition: 'transform 0.45s cubic-bezier(0.23,1,0.32,1)' }} className="group block relative overflow-hidden rounded-2xl border border-white/5 bg-[hsl(270_12%_7%)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image src={project.image} alt={`${project.title} — ${project.industry} website design preview`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(270_12%_4%)] via-[hsl(270_12%_4%/0.35)] to-transparent" />
          <span className="absolute top-3 left-3 px-3 py-1.5 text-[10px] font-display tracking-[0.18em] uppercase text-primary bg-background/85 backdrop-blur-md rounded-lg border border-primary/20">{project.industry}</span>
        </div>
        <div className="p-5 sm:p-6">
          <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{project.caseStudy.solution}</p>
          <span className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-primary">
            Read the case study <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.li>
  );
}
