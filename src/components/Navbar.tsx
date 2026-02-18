import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import shamsLogoNav from '@/assets/shams-logo-nav.jpg';

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
          className="relative px-4 py-2.5 flex items-center gap-3 rounded-2xl transition-all duration-300 group"
          style={{
            background: 'linear-gradient(135deg, hsl(270 18% 5% / 0.95) 0%, hsl(270 18% 5% / 0.8) 100%)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid hsl(280 50% 35% / 0.3)',
            boxShadow: '0 4px 24px hsl(280 85% 65% / 0.08), inset 0 1px 0 hsl(310 100% 80% / 0.05)',
          }}
        >
          <img
            src={shamsLogoNav}
            alt="Shams Visuals"
            className="w-10 h-10 rounded-xl object-cover shadow-[0_0_16px_hsl(280_85%_65%/0.3)] border border-primary/20"
          />
          <span className="font-display text-sm font-semibold tracking-[0.15em] text-foreground hidden sm:block group-hover:text-primary transition-colors duration-300">
            SHAMS VISUALS
          </span>
        </Link>

        {/* Navigation links */}
        <div
          className="relative px-2 md:px-3 py-2.5 flex items-center gap-0.5 md:gap-1 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, hsl(270 18% 5% / 0.95) 0%, hsl(270 18% 5% / 0.8) 100%)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid hsl(280 50% 35% / 0.3)',
            boxShadow: '0 4px 24px hsl(280 85% 65% / 0.08), inset 0 1px 0 hsl(310 100% 80% / 0.05)',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative px-4 md:px-5 py-2.5 text-sm font-display font-medium transition-all duration-300 rounded-xl group/link ${
                isActive(item.path)
                  ? 'text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {isActive(item.path) && (
                <motion.div
                  layoutId="navbar-active"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, hsl(280 85% 65% / 0.9), hsl(310 75% 60% / 0.7))',
                    boxShadow: '0 0 20px hsl(280 85% 65% / 0.3), 0 0 40px hsl(310 75% 60% / 0.1)',
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
          className="relative px-6 md:px-8 py-3 text-sm font-display font-semibold text-primary-foreground rounded-2xl transition-all duration-300 hover:scale-[1.03] hidden sm:block"
          style={{
            background: 'linear-gradient(135deg, hsl(280 85% 65%) 0%, hsl(310 75% 60%) 100%)',
            boxShadow: '0 4px 24px hsl(280 85% 65% / 0.25), inset 0 1px 0 hsl(310 100% 80% / 0.2)',
          }}
        >
          Let's Connect
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
