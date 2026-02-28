import { Link } from 'react-router-dom';
import shamsLogoNav from '@/assets/shams-logo-nav.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={shamsLogoNav}
              alt="Shams Visuals"
              className="w-9 h-9 rounded-xl object-cover border border-primary/20"
              style={{ boxShadow: '0 0 12px hsl(var(--prime) / 0.2)' }}
            />
            <span className="font-display text-sm font-semibold tracking-[0.15em] text-foreground">
              SHAMS VISUALS
            </span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors duration-300">{t('nav.home')}</Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors duration-300">{t('nav.about')}</Link>
            <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">{t('nav.projects')}</Link>
            <Link to="/packages" className="text-muted-foreground hover:text-primary transition-colors duration-300">{t('nav.packages')}</Link>
          </div>

          <div className="text-center md:text-right">
            <div className="text-muted-foreground text-sm tracking-wide">{t('footer.copyright')}</div>
            <div className="text-xs text-muted-foreground/50 mt-1">{t('footer.tagline')}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
