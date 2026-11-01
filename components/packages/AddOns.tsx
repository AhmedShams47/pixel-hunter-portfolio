'use client';

import { motion } from 'framer-motion';
import { Palette, Search, Settings, FileText, Megaphone } from 'lucide-react';

const addOns = [
  { icon: Palette, name: 'Logo Design', desc: 'Professional brand identity design' },
  { icon: Search, name: 'SEO Setup', desc: 'On page optimization & structure' },
  { icon: Settings, name: 'Monthly Maintenance', desc: 'Ongoing updates & technical support' },
  { icon: FileText, name: 'Content Writing', desc: 'Website copy & product descriptions' },
  { icon: Megaphone, name: 'Ads Setup', desc: 'Social & search ad campaign configuration' },
];

const AddOns = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm font-display tracking-[0.3em] mb-4 block">
            EXTRAS
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Optional <span className="text-primary">Add Ons</span>
          </h2>
          <p className="text-muted-foreground">
            Enhance your project with additional services.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {addOns.map((addon, index) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card p-4 sm:p-5 rounded-2xl group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <addon.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <h3 className="font-display text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  {addon.name}
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-muted-foreground">
                {addon.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOns;
