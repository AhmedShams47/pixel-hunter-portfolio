import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/projectsData';
import type { Project } from '@/data/projectsData';
import CategoryFilter from './CategoryFilter';

interface ProjectGridProps {
  onSelectProject: (project: Project) => void;
}

const ProjectCard = ({ project, onSelect }: { project: Project; onSelect: () => void }) => {
  const Icon = project.icon;

  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      onClick={onSelect}
      className="group glass-card p-0 rounded-2xl overflow-hidden text-left cursor-pointer w-full hover:border-primary/40 transition-all duration-500"
      style={{ perspective: '1000px' }}
    >
      {/* Thumbnail area */}
      <div
        className="relative h-44 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(${project.accentHue} 50% 20% / 0.7), hsl(${project.accentHue} 40% 10% / 0.9))`,
        }}
      >
        <div className="absolute inset-0 bg-card/20" />

        {/* Glow overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, hsl(${project.accentHue} 70% 50% / 0.2), transparent 70%)`,
          }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-background/20 backdrop-blur-sm border border-foreground/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500">
            <Icon className="w-7 h-7 text-foreground/80 group-hover:text-primary transition-colors duration-300" />
          </div>
          <span className="text-xs font-display tracking-[0.2em] text-foreground/50 uppercase">
            {project.industry}
          </span>
        </div>

        {/* Hover reveal */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400">
          <span className="flex items-center gap-2 text-sm font-display tracking-wider text-primary">
            VIEW CASE STUDY
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </div>

      {/* Info area */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {project.caseStudy.solution}
        </p>
        <div className="mt-3">
          <span className="inline-block px-3 py-1 text-[10px] font-display tracking-wider bg-primary/10 text-primary/80 rounded-full border border-primary/20">
            {project.category}
          </span>
        </div>
      </div>
    </motion.button>
  );
};

const ProjectGrid = ({ onSelectProject }: ProjectGridProps) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            All <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Browse by industry to find projects relevant to your business.
          </p>
        </motion.div>

        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={() => onSelectProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGrid;
