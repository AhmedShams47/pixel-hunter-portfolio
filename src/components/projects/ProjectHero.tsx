import { motion } from 'framer-motion';

const ProjectHero = () => {
  return (
    <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-primary text-sm font-display tracking-[0.3em] mb-6 block">
            PORTFOLIO
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
            Selected Works &{' '}
            <span className="gold-text gold-glow">Case Studies</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore high converting websites designed to turn visitors into
            customers across industries.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 mt-10 sm:mt-14"
        >
          {[
            { value: '13+', label: 'Projects Delivered' },
            { value: '10+', label: 'Industries Served' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-display tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero;
