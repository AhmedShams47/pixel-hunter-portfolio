import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, Palette } from 'lucide-react';

const FloatingSocialBar = () => {
  const socials = [
    { icon: Instagram, href: 'https://instagram.com/k_0_p_a', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Facebook, href: 'https://facebook.com/ahmed.shams', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: Palette, href: 'https://behance.net/ShamsVisuals', label: 'Behance', color: 'hover:text-blue-300' },
    { icon: Mail, href: 'mailto:shamsvisuals@gmail.com', label: 'Email', color: 'hover:text-primary' },
    { icon: Phone, href: 'https://wa.me/8801707887676', label: 'WhatsApp', color: 'hover:text-green-500' },
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      <div className="glass-card p-3 rounded-2xl flex flex-col gap-4">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-muted-foreground ${social.color} transition-all duration-300 relative group hover:scale-110`}
            aria-label={social.label}
          >
            <social.icon className="w-5 h-5" />
            <span className="absolute left-full ml-3 px-2 py-1 text-xs font-medium bg-card text-foreground rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-border/50">
              {social.label}
            </span>
          </a>
        ))}
      </div>
      
      <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent mx-auto" />
    </div>
  );
};

export default FloatingSocialBar;
