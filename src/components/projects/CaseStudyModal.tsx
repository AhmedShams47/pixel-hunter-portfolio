import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { Project } from '@/data/projectsData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

const CaseStudyModal = ({ project, onClose }: CaseStudyModalProps) => {
  if (!project) return null;
  const Icon = project.icon;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-card rounded-3xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-secondary/80 hover:bg-secondary text-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div
              className="relative h-48 md:h-56 overflow-hidden rounded-t-3xl"
              style={{
                backgroundImage: `linear-gradient(135deg, hsl(${project.accentHue} 50% 20% / 0.8), hsl(${project.accentHue} 40% 10% / 0.95))`,
              }}
            >
              <div className="absolute inset-0 bg-card/20" />
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 30% 50%, hsl(${project.accentHue} 70% 50% / 0.15), transparent 60%)`,
                }}
              />
              <div className="relative z-10 h-full flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-background/20 backdrop-blur-sm border border-foreground/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-foreground/80" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {project.title}
                </h2>
                <span className="text-sm text-foreground/50 font-display tracking-wider">
                  {project.industry}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10 space-y-8">
              {/* Client Type */}
              <div>
                <h3 className="font-display text-xs tracking-[0.2em] text-primary mb-2 uppercase">Client Type</h3>
                <p className="text-foreground/90">{project.caseStudy.clientType}</p>
              </div>

              {/* Problem */}
              <div>
                <h3 className="font-display text-xs tracking-[0.2em] text-primary mb-2 uppercase">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">{project.caseStudy.problem}</p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="font-display text-xs tracking-[0.2em] text-primary mb-2 uppercase">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed">{project.caseStudy.solution}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-display text-xs tracking-[0.2em] text-primary mb-3 uppercase">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.caseStudy.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="font-display text-xs tracking-[0.2em] text-primary mb-2 uppercase">Results</h3>
                <p className="text-muted-foreground leading-relaxed">{project.caseStudy.results}</p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/30">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 metallic-gold text-primary-foreground font-display font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_hsl(var(--primary)/0.3)] text-sm"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/8801707887676?text=Hi%20Ahmed!%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 glass-card font-display font-bold text-primary border border-primary/30 hover:border-primary/60 rounded-xl transition-all duration-300 hover:scale-[1.02] text-sm"
                >
                  Start a Similar Project
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;
