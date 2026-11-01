'use client';

import Link from 'next/link';
import { Instagram, Facebook, Phone, Mail, ArrowUpRight } from 'lucide-react';
import shamsLogoNav from '@/assets/shams-logo-nav.jpg';

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/k_0_p_a/',
  facebook:  'https://www.facebook.com/profile.php?id=61570747318790',
  whatsapp:  'https://wa.me/8801629580476?text=Hi%20Ahmed!%20I%27m%20on%20your%20website%20and%20I%27d%20like%20to%20discuss%20a%20project.',
  email:     'mailto:shamsvisuals@gmail.com',
};

const NAV = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Packages', path: '/packages' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[hsl(270_12%_3%)]">

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            'linear-gradient(to right, transparent, hsl(268 87% 64% / 0.25), hsl(310 72% 58% / 0.18), transparent)',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, hsl(268 87% 40% / 0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-10">

        {/* ── Top row ───────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between mb-12">

          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-3 mb-5 group" data-cursor="hover">
              <img
                src={shamsLogoNav.src}
                alt="Shams Visuals"
                className="w-10 h-10 rounded-xl object-cover border border-primary/20"
                style={{ boxShadow: '0 0 12px hsl(268 87% 64% / 0.2)' }}
              />
              <span className="font-display text-sm font-semibold tracking-[0.15em] text-foreground group-hover:text-primary transition-colors duration-300">
                SHAMS VISUALS
              </span>
            </Link>
            <p className="py-2.5 text-sm text-muted-foreground leading-relaxed">
              Premium digital design for Bangladeshi brands. Web. Branding. Motion.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              📍 Dhaka, Bangladesh
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-[0.6rem] text-muted-foreground/50 font-display tracking-[0.4em] uppercase mb-4">
              Navigation
            </p>
            <ul className="space-y-0">
              {NAV.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    href={path}
                    data-cursor="hover"
                    className="py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1.5 group/link"
                  >
                    <span>{label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.6rem] text-muted-foreground/50 font-display tracking-[0.4em] uppercase mb-4">
              Contact
            </p>
            <ul className="space-y-0">
              <li>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="py-2.5 text-sm text-muted-foreground hover:text-green-400 transition-colors duration-300 flex items-center gap-2.5"
                >
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>+880 1629-580476</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.email}
                  data-cursor="hover"
                  className="py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2.5"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>shamsvisuals@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-[0.6rem] text-muted-foreground/50 font-display tracking-[0.4em] uppercase mb-4">
              Social
            </p>
            <div className="flex flex-col gap-0">
              {[
                { icon: Instagram, label: 'Instagram', href: SOCIAL_LINKS.instagram, color: 'hover:text-pink-400' },
                { icon: Facebook,  label: 'Facebook',  href: SOCIAL_LINKS.facebook,  color: 'hover:text-blue-400' },
              ].map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className={`py-2.5 text-sm text-muted-foreground ${color} transition-colors duration-300 flex items-center gap-2.5`}
                >
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────── */}
        <div
          className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-xs text-muted-foreground/50">
            © {year} Shams Visuals — Ahmed Shams. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/35">
            Designed with passion. Built to convert.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
