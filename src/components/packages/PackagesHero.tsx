import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const PackagesHero = () => {
  return (
    <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-primary text-sm font-display tracking-[0.3em] mb-6 block">
            PRICING
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Choose the Perfect Plan for{' '}
            <span className="gold-text gold-glow">Your Business Growth</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Strategic, conversion focused websites designed to attract customers
            and increase revenue.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Transparent pricing</span>
            </div>
            <span className="text-border">•</span>
            <span>No hidden charges</span>
            <span className="text-border hidden sm:inline">•</span>
            <span className="hidden sm:inline">Built for results</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesHero;
