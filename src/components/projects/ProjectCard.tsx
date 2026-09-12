import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projectsData';

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewCaseStudy: (project: Project) => void;
}

const ProjectCard = ({ project, index, onViewCaseStudy }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="group glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--prime)/0.12)] hover:-translate-y-1 w-full"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        {/* Live demo link */}
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-2.5 rounded-xl glass-card text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--prime)/0.3)]"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </a>

        {/* Industry badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-display tracking-widest bg-background/80 backdrop-blur-sm text-primary rounded-lg border border-primary/20">
            {project.industry}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {project.caseStudy.solution}
        </p>

        <button
          onClick={() => onViewCaseStudy(project)}
          className="flex items-center gap-2 text-xs sm:text-sm font-display font-semibold text-primary hover:gap-3 transition-all duration-300 group/btn"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
