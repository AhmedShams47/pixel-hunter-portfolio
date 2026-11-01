'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import shamsLogoNav from '@/assets/shams-logo-nav.jpg';
import { useLanguage } from '@/lib/language-context';
import { SITE } from '@/lib/site';

const navItems = [
  { key: 'nav.home', path: '/', hideOnMobile: true },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.projects', path: '/projects' },
  { key: 'nav.packages', path: '/packages' },
];

const pill = {
  background: 'linear-gradient(135deg, hsl(var(--glass-bg) / 0.95) 0%, hsl(var(--glass-bg) / 0.8) 100%)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid hsl(var(--glass-border) / 0.3)',
  boxShadow: '0 4px 24px hsl(var(--prime) / 0.08), inset 0 1px 0 hsl(var(--prime-shine) / 0.05)',
};

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();
  const isActive = (p: string) => (p === '/' ? pathname === '/' : pathname.startsWith(p));

  return (
    <nav
      className="nav-enter fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 sm:py-4"
      aria-label="Primary"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <Link href="/" aria-label="Shams Visuals — home" className="px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-3 rounded-2xl group shrink-0" style={pill}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shamsLogoNav.src} alt="" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl object-cover border border-primary/20" />
          <span className="font-display text-sm font-semibold tracking-[0.15em] text-foreground hidden sm:block group-hover:text-primary transition-colors duration-300">SHAMS VISUALS</span>
        </Link>

        <div className="px-1 sm:px-3 py-1.5 sm:py-2.5 flex items-center gap-0 sm:gap-0.5 rounded-2xl min-w-0" style={pill}>
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.path}
              aria-current={isActive(item.path) ? 'page' : undefined}
              className={`relative px-2.5 sm:px-5 py-2.5 text-[11px] sm:text-sm font-display font-medium rounded-xl whitespace-nowrap transition-colors duration-300 ${item.hideOnMobile ? 'hidden sm:block' : ''} ${isActive(item.path) ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {isActive(item.path) && (
                <motion.div layoutId="navbar-active" className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(135deg, hsl(var(--prime) / 0.9), hsl(var(--accent) / 0.7))', boxShadow: '0 0 20px hsl(var(--prime) / 0.3)' }} transition={{ type: 'spring', stiffness: 380, damping: 28 }} />
              )}
              <span className="relative z-10">{t(item.key)}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button onClick={toggleLang} className="relative p-3 rounded-xl hover:scale-105 transition-transform group" style={pill} aria-label={lang === 'en' ? 'Switch to Bangla' : 'Switch to English'}>
            <Languages className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
            <span className="absolute -bottom-1 -right-1 text-[9px] font-display font-bold text-primary-foreground rounded-full px-1 border border-primary/30" style={{ background: 'hsl(var(--prime))' }}>{lang === 'en' ? 'BN' : 'EN'}</span>
          </button>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="px-6 md:px-8 py-3 text-sm font-display font-semibold text-primary-foreground rounded-2xl hover:scale-[1.03] transition-transform hidden sm:block" style={{ background: 'linear-gradient(135deg, hsl(var(--prime)) 0%, hsl(var(--accent)) 100%)', boxShadow: '0 4px 24px hsl(var(--prime) / 0.25)' }}>
            {t('nav.connect')}
          </a>
        </div>
      </div>
    </nav>
  );
}
