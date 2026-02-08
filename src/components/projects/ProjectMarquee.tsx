import { useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { projects, type Project } from '@/data/projectsData';

interface ProjectMarqueeProps {
  onProjectClick: (project: Project) => void;
}

const ProjectMarquee = ({ onProjectClick }: ProjectMarqueeProps) => {
  const featured = projects.slice(0, 7);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      dragFree: true,
      containScroll: false,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between"
        >
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2 hidden sm:block">
              Swipe or drag to explore
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="p-2.5 rounded-xl glass-card text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-2.5 rounded-xl glass-card text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="relative px-6">
        {/* Left/right fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {featured.map((project, index) => (
              <button
                key={project.id}
                onClick={() => onProjectClick(project)}
                className="group relative w-[300px] md:w-[380px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer border border-border/30 hover:border-primary/50 transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-xs font-display tracking-widest text-primary/90 mb-1 block">
                      {project.industry}
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary text-sm font-display opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>View Case Study</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectMarquee;
