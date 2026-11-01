'use client';

import { useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { projects } from '@/lib/projects-data';

export default function ProjectMarquee() {
  const featured = projects.slice(0, 7);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', dragFree: true }, [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]);
  // Autoplay doesn't honour prefers-reduced-motion by itself.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) emblaApi?.plugins().autoplay?.stop();
  }, [emblaApi]);
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative py-10 overflow-hidden" aria-label="Featured projects">
      <div className="max-w-7xl mx-auto px-6 hidden sm:flex justify-end gap-2 mb-4">
        <button onClick={prev} aria-label="Previous projects" className="p-3 rounded-xl border border-border/40 hover:border-primary/50 transition-colors"><ChevronLeft className="w-4 h-4" aria-hidden="true" /></button>
        <button onClick={next} aria-label="Next projects" className="p-3 rounded-xl border border-border/40 hover:border-primary/50 transition-colors"><ChevronRight className="w-4 h-4" aria-hidden="true" /></button>
      </div>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-5 px-6">
          {featured.map((p) => (
            <Link key={p.id} href={`/projects/${p.id}`} data-cursor="hover" className="group relative block w-[280px] md:w-[380px] flex-shrink-0 rounded-2xl overflow-hidden border border-border/30 hover:border-primary/50 transition-colors duration-500">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={p.image} alt={`${p.title} website preview`} fill sizes="(max-width: 768px) 280px, 380px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[10px] font-display tracking-[0.18em] uppercase text-primary mb-1">{p.industry}</p>
                  <p className="font-display font-bold text-foreground">{p.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
