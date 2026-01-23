import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg metallic-gold flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xs">SV</span>
            </div>
            <span className="font-display text-sm font-semibold tracking-[0.15em] text-foreground">
              SHAMS VISUALS
            </span>
          </Link>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors duration-300">Home</Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors duration-300">About</Link>
            <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">Projects</Link>
            <Link to="/packages" className="text-muted-foreground hover:text-primary transition-colors duration-300">Packages</Link>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <div className="text-muted-foreground text-sm tracking-wide">
              © 2025 Shams Visuals
            </div>
            <div className="text-xs text-muted-foreground/50 mt-1">
              Designed with passion
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
