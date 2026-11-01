'use client';

import { motion } from 'framer-motion';
import { categories } from '@/lib/projects-data';

interface IndustryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const IndustryFilter = ({ activeCategory, onCategoryChange }: IndustryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((cat) => (
        <motion.button
          key={cat}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(cat)}
          className={`px-5 py-2.5 rounded-xl text-sm font-display tracking-wider transition-all duration-300 ${
            activeCategory === cat
              ? 'metallic-prime text-primary-foreground shadow-[0_0_20px_hsl(var(--prime)/0.3)]'
              : 'glass-card text-muted-foreground hover:text-primary hover:border-primary/40'
          }`}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
};

export default IndustryFilter;
