import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Packages', path: '/packages' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="glass-card px-4 md:px-5 py-2.5 flex items-center gap-3 rounded-2xl hover:border-primary/50 transition-all duration-300">
          <div className="w-9 h-9 rounded-xl metallic-gold flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">SV</span>
          </div>
          <span className="font-display text-sm font-semibold tracking-[0.15em] text-foreground hidden sm:block">
            SHAMS VISUALS
          </span>
        </Link>

        {/* Navigation links */}
        <div className="glass-card px-2 md:px-3 py-2 flex items-center gap-0.5 md:gap-1 rounded-2xl">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-3 md:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl ${
                isActive(item.path)
                  ? 'text-primary bg-primary/15'
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="https://www.instagram.com/k_0_p_a/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card px-5 md:px-7 py-2.5 text-sm font-display font-semibold text-primary border border-primary/30 hover:border-primary/60 hover:shadow-[0_0_20px_hsl(var(--gold)/0.2)] transition-all duration-300 rounded-2xl hidden sm:block"
        >
          Let's Connect
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
