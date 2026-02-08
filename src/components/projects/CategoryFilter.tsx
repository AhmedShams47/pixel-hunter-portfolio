import { motion } from 'framer-motion';
import { categories } from '@/data/projectsData';

interface CategoryFilterProps {
  active: string;
  onChange: (category: string) => void;
}

const CategoryFilter = ({ active, onChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className="relative px-5 py-2 rounded-full text-sm font-display tracking-wider transition-colors duration-300"
        >
          {active === cat && (
            <motion.div
              layoutId="categoryPill"
              className="absolute inset-0 rounded-full bg-primary/20 border border-primary/40"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className={`relative z-10 ${active === cat ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
            {cat}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
