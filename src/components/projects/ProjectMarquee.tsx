import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects, type Project } from '@/data/projectsData';

interface ProjectMarqueeProps {
  onProjectClick: (project: Project) => void;
}

const ProjectMarquee = ({ onProjectClick }: ProjectMarqueeProps) => {
  const featured = projects.slice(0, 7);
  const duplicated = [...featured, ...featured];

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        {/* Left/right fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 marquee" style={{ width: 'max-content' }}>
          {duplicated.map((project, index) => (
            <button
              key={`${project.id}-${index}`}
              onClick={() => onProjectClick(project)}
              className="group relative w-[320px] md:w-[380px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer border border-border/30 hover:border-primary/50 transition-all duration-500"
              style={{ perspective: '1000px' }}
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
                  <span className="text-xs font-display tracking-widest text-primary/80 mb-1 block">
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
    </section>
  );
};

export default ProjectMarquee;
