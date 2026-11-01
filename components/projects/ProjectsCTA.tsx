'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectsCTA = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="glass-card p-8 sm:p-10 md:p-16 rounded-3xl text-center relative overflow-hidden"
        >
          {/* Glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to build a website that{' '}
              <span className="text-primary">sells</span>?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-lg mx-auto">
              Let's create something that makes your brand impossible to ignore.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/packages"
                className="px-8 sm:px-10 py-3.5 sm:py-4 metallic-prime text-primary-foreground font-display font-bold rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_hsl(var(--prime)/0.4)]"
              >
                Start Your Project
              </Link>
              <a
                href="https://wa.me/8801629580476?text=Hi%20Ahmed!%20I%20want%20to%20book%20a%20free%20consultation%20for%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-8 sm:px-10 py-3.5 sm:py-4 font-display font-bold text-primary border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:-translate-y-0.5"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsCTA;
