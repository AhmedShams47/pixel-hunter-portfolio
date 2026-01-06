import { Instagram, Facebook, Phone } from 'lucide-react';

const FloatingSocialBar = () => {
  const socials = [
    { icon: Instagram, href: 'https://www.instagram.com/k_0_p_a/', label: 'Instagram', color: 'bg-gradient-to-br from-pink-500 to-purple-600 hover:shadow-pink-500/40' },
    { icon: Facebook, href: 'https://www.facebook.com/AhmedShams164', label: 'Facebook', color: 'bg-gradient-to-br from-blue-500 to-blue-700 hover:shadow-blue-500/40' },
    { icon: Phone, href: 'https://wa.me/8801707887676?text=Hi%20Ahmed!%20I%27m%20on%20your%20website%20and%20I%27d%20like%20to%20know%20more%20about%20your%20services.', label: 'WhatsApp', color: 'bg-gradient-to-br from-green-500 to-green-700 hover:shadow-green-500/40' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3.5 rounded-full text-white shadow-lg ${social.color} hover:shadow-xl hover:scale-110 transition-all duration-300 relative group`}
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5" />
          <span className="absolute right-full mr-3 px-3 py-1.5 text-xs font-medium bg-card text-foreground rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-border/50 shadow-lg">
            {social.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingSocialBar;
