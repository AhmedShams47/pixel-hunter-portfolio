import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = ['About', 'Ventures', 'Arsenal', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="glass-card px-5 py-2.5 flex items-center gap-3 rounded-2xl">
          <div className="w-9 h-9 rounded-xl purple-gradient-btn flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">VS</span>
          </div>
          <span className="font-display text-sm font-semibold tracking-[0.15em] text-foreground hidden sm:block">
            SHAMS VISUALS
          </span>
        </div>

        {/* Navigation links */}
        <div className="glass-card px-3 py-2.5 flex items-center gap-1 rounded-2xl">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5, ease: "easeInOut" }}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-500 ease-in-out rounded-xl hover:bg-primary/10"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* CTA button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="glass-card px-7 py-2.5 text-sm font-display font-semibold text-primary border border-primary/30 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(var(--purple-neon)/0.3)] transition-all duration-500 ease-in-out rounded-2xl"
        >
          Hire Me
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
