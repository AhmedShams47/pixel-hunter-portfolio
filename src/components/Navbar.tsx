import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon, Languages } from 'lucide-react';
import shamsLogoNav from '@/assets/shams-logo-nav.jpg';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  const navItems = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.about', path: '/about' },
    { key: 'nav.projects', path: '/projects' },
    { key: 'nav.packages', path: '/packages' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const pillStyle = {
    background: 'linear-gradient(135deg, hsl(var(--glass-bg) / 0.95) 0%, hsl(var(--glass-bg) / 0.8) 100%)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    border: '1px solid hsl(var(--glass-border) / 0.3)',
    boxShadow: '0 4px 24px hsl(var(--prime) / 0.08), inset 0 1px 0 hsl(var(--prime-shine) / 0.05)',
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Logo */}
        <Link
          to="/"
          className="relative px-4 py-2.5 flex items-center gap-3 rounded-2xl transition-all duration-300 group shrink-0"
          style={pillStyle}
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
        <div className="relative px-2 md:px-3 py-2.5 flex items-center gap-0.5 md:gap-1 rounded-2xl" style={pillStyle}>
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className={`relative px-3 md:px-5 py-2.5 text-xs md:text-sm font-display font-medium transition-all duration-300 rounded-xl group/link ${
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
                    background: 'linear-gradient(135deg, hsl(var(--prime) / 0.9), hsl(var(--accent) / 0.7))',
                    boxShadow: '0 0 20px hsl(var(--prime) / 0.3), 0 0 40px hsl(var(--accent) / 0.1)',
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}
              {!isActive(item.path) && (
                <span className="absolute inset-0 rounded-xl bg-foreground/0 group-hover/link:bg-foreground/5 transition-colors duration-300" />
              )}
              <span className="relative z-10">{t(item.key)}</span>
            </Link>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="relative p-2.5 rounded-xl transition-all duration-300 hover:scale-105 group"
            style={pillStyle}
            aria-label="Toggle language"
            title={lang === 'en' ? 'বাংলায় পড়ুন' : 'Read in English'}
          >
            <Languages className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="absolute -bottom-1 -right-1 text-[9px] font-display font-bold text-primary-foreground rounded-full px-1 border border-primary/30" style={{ background: 'hsl(var(--prime))' }}>
              {lang === 'en' ? 'BN' : 'EN'}
            </span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="relative p-2.5 rounded-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
            style={pillStyle}
            aria-label="Toggle theme"
          >
            <motion.div
              key={theme}
              initial={{ y: -20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-muted-foreground group-hover:text-yellow-400 transition-colors" />
              ) : (
                <Moon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              )}
            </motion.div>
          </button>

          {/* CTA */}
          <a
            href="https://www.instagram.com/k_0_p_a/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-5 md:px-8 py-3 text-sm font-display font-semibold text-primary-foreground rounded-2xl transition-all duration-300 hover:scale-[1.03] hidden sm:block"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--prime)) 0%, hsl(var(--accent)) 100%)',
              boxShadow: '0 4px 24px hsl(var(--prime) / 0.25), inset 0 1px 0 hsl(var(--prime-shine) / 0.2)',
            }}
          >
            {t('nav.connect')}
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
