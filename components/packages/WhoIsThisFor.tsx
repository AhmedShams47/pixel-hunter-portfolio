'use client';

import { motion } from 'framer-motion';
import { Rocket, ShoppingBag, Store, Users, User } from 'lucide-react';

const audiences = [
  { icon: Rocket, label: 'Startups' },
  { icon: Store, label: 'Retail Businesses' },
  { icon: ShoppingBag, label: 'E-commerce Brands' },
  { icon: Users, label: 'Agencies' },
  { icon: User, label: 'Personal Brands' },
];

const WhoIsThisFor = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Who Is This <span className="text-primary">For</span>?
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {audiences.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card px-6 py-4 rounded-2xl flex items-center gap-3 group hover:border-primary/50 transition-all duration-300"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
