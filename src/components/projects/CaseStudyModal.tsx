import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { Project } from '@/data/projectsData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

const CaseStudyModal = ({ project, onClose }: CaseStudyModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative glass-card rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl glass-card text-muted-foreground hover:text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 text-xs font-display tracking-widest bg-primary/20 text-primary rounded-full border border-primary/30 mb-3 inline-block">
                  {project.industry}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Case study content */}
            <div className="p-6 md:p-10 space-y-8">
              {/* Client type */}
              <div>
                <h3 className="font-display text-sm tracking-widest text-primary mb-2">
                  CLIENT TYPE
                </h3>
                <p className="text-foreground text-lg">
                  {project.caseStudy.clientType}
                </p>
              </div>

              {/* Problem */}
              <div>
                <h3 className="font-display text-sm tracking-widest text-primary mb-2">
                  THE CHALLENGE
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.caseStudy.problem}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="font-display text-sm tracking-widest text-primary mb-2">
                  THE SOLUTION
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.caseStudy.solution}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-display text-sm tracking-widest text-primary mb-4">
                  KEY FEATURES
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.caseStudy.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="glass-card p-6 rounded-2xl border-primary/20">
                <h3 className="font-display text-sm tracking-widest text-primary mb-2">
                  RESULTS
                </h3>
                <p className="text-foreground leading-relaxed">
                  {project.caseStudy.results}
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 metallic-prime text-primary-foreground font-display font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(var(--prime)/0.4)]"
                >
                  <span>View Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/8801707887676?text=Hi%20Ahmed!%20I%27m%20interested%20in%20a%20project%20similar%20to%20your%20work.%20Can%20we%20discuss?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 glass-card font-display font-bold text-primary border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02]"
                >
                  Want Something Similar?
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
