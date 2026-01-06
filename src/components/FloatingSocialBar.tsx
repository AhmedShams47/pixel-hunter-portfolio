import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, Phone, Link, Palette } from 'lucide-react';

const FloatingSocialBar = () => {
  const socials = [
    { icon: Instagram, href: 'https://instagram.com/k_0_p_a', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Facebook, href: 'https://facebook.com/Ahmed Shams', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: Palette, href: 'https://behance.net/ShamsVisuals', label: 'Behance', color: 'hover:text-blue-300' },
    { icon: Link, href: 'https://linktr.ee/shamsvisuals', label: 'Linktree', color: 'hover:text-green-400' },
    { icon: Mail, href: 'mailto:shamsvisuals@gmail.com', label: 'Email', color: 'hover:text-primary' },
    { icon: Phone, href: 'https://wa.me/8801707887676', label: 'WhatsApp', color: 'hover:text-green-500' },
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3"
    >
      <div className="glass-card p-3 rounded-2xl flex flex-col gap-4">
        {socials.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 + index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`text-muted-foreground ${social.color} transition-all duration-300 relative group`}
            aria-label={social.label}
          >
            <social.icon className="w-5 h-5" />
            <span className="absolute left-full ml-3 px-2 py-1 text-xs font-medium bg-card text-foreground rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {social.label}
            </span>
          </motion.a>
        ))}
      </div>
      
      {/* Decorative line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 60 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="w-px bg-gradient-to-b from-primary/50 to-transparent mx-auto"
      />
    </motion.div>
  );
};

export default FloatingSocialBar;
