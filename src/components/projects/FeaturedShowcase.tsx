import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/projectsData';
import type { Project } from '@/data/projectsData';

interface FeaturedShowcaseProps {
  onSelectProject: (project: Project) => void;
}

const ShowcaseCard = ({ project, onSelect }: { project: Project; onSelect: () => void }) => {
  const Icon = project.icon;

  return (
    <button
      onClick={onSelect}
      className="group relative flex-shrink-0 w-[320px] h-[220px] rounded-2xl overflow-hidden cursor-pointer border border-border/30 hover:border-primary/50 transition-all duration-500"
      style={{ perspective: '800px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-60 group-hover:opacity-80 transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(${project.accentHue} 60% 25% / 0.6), hsl(${project.accentHue} 50% 15% / 0.8))`,
        }}
      />
      <div className="absolute inset-0 bg-card/40" />

      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 60px hsl(${project.accentHue} 70% 50% / 0.15)`,
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between p-6 group-hover:-translate-y-1 transition-transform duration-500">
        <div>
          <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-shadow duration-500">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{project.industry}</p>
        </div>

        <div className="flex items-center gap-2 text-sm text-primary/70 group-hover:text-primary transition-colors duration-300">
          <span className="font-display text-xs tracking-wider">VIEW CASE STUDY</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </div>
      </div>
    </button>
  );
};

const FeaturedShowcase = ({ onSelectProject }: FeaturedShowcaseProps) => {
  const duplicated = [...projects, ...projects];

  return (
    <section className="py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 px-6"
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          A selection of websites built for brands across industries.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 marquee" style={{ width: 'max-content' }}>
          {duplicated.map((project, index) => (
            <ShowcaseCard
              key={`${project.id}-${index}`}
              project={project}
              onSelect={() => onSelectProject(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedShowcase;
