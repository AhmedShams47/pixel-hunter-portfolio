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
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="relative px-5 py-3 flex items-center gap-3 rounded-2xl transition-all duration-300 group"
          style={{
            background: 'linear-gradient(135deg, hsl(270 25% 8% / 0.9) 0%, hsl(270 25% 8% / 0.7) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid hsl(270 40% 30% / 0.25)',
            boxShadow: '0 4px 20px hsl(270 80% 65% / 0.06), inset 0 1px 0 hsl(270 20% 95% / 0.04)',
          }}
        >
          <div className="w-9 h-9 rounded-xl metallic-prime flex items-center justify-center shadow-[0_0_12px_hsl(var(--prime)/0.25)]">
            <span className="text-primary-foreground font-display font-bold text-sm">SV</span>
          </div>
          <span className="font-display text-sm font-semibold tracking-[0.15em] text-foreground hidden sm:block group-hover:text-primary transition-colors duration-300">
            SHAMS VISUALS
          </span>
        </Link>

        {/* Navigation links */}
        <div
          className="relative px-2 md:px-3 py-2.5 flex items-center gap-0.5 md:gap-1 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, hsl(270 25% 8% / 0.9) 0%, hsl(270 25% 8% / 0.7) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid hsl(270 40% 30% / 0.25)',
            boxShadow: '0 4px 20px hsl(270 80% 65% / 0.06), inset 0 1px 0 hsl(270 20% 95% / 0.04)',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative px-4 md:px-5 py-2.5 text-sm font-display font-medium transition-all duration-300 rounded-xl group/link ${
                isActive(item.path)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {isActive(item.path) && (
                <motion.div
                  layoutId="navbar-active"
                  className="absolute inset-0 rounded-xl bg-primary/12 border border-primary/20"
                  style={{
                    boxShadow: '0 0 18px hsl(270 80% 65% / 0.12)',
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}
              {!isActive(item.path) && (
                <span className="absolute inset-0 rounded-xl bg-foreground/0 group-hover/link:bg-foreground/5 transition-colors duration-300" />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="https://www.instagram.com/k_0_p_a/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-6 md:px-8 py-3 text-sm font-display font-semibold text-primary rounded-2xl transition-all duration-300 hover:scale-[1.03] hidden sm:block"
          style={{
            background: 'linear-gradient(135deg, hsl(270 25% 8% / 0.9) 0%, hsl(270 25% 8% / 0.7) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid hsl(270 80% 65% / 0.3)',
            boxShadow: '0 4px 20px hsl(270 80% 65% / 0.1), inset 0 1px 0 hsl(270 20% 95% / 0.04)',
          }}
        >
          Let's Connect
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
