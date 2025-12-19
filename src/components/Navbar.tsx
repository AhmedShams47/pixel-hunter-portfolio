import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = ['About', 'Ventures', 'Arsenal', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo placeholder */}
        <div className="glass-card px-4 py-2 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span className="text-primary font-display font-bold text-sm">PH</span>
          </div>
          <span className="font-display text-sm font-semibold tracking-wider text-foreground hidden sm:block">
            PIXEL HUNTER
          </span>
        </div>

        {/* Navigation links */}
        <div className="glass-card px-2 py-2 flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.2 }}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/10"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* CTA button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass-card px-6 py-2 text-sm font-display font-semibold text-primary border border-primary/30 hover:border-primary/60 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-200"
        >
          Hire Me
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
