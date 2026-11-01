'use client';

import { Instagram, Facebook, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const socials = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/k_0_p_a/',
    label: 'Instagram',
    gradient: 'from-pink-500 to-purple-600',
    shadow: 'hover:shadow-pink-500/30',
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/profile.php?id=61570747318790',
    label: 'Facebook',
    gradient: 'from-blue-500 to-blue-700',
    shadow: 'hover:shadow-blue-500/30',
  },
  {
    icon: Phone,
    href: 'https://wa.me/8801629580476?text=Hi%20Ahmed!%20I%27m%20on%20your%20website%20and%20I%27d%20like%20to%20know%20more%20about%20your%20services.',
    label: 'WhatsApp',
    gradient: 'from-green-400 to-green-600',
    shadow: 'hover:shadow-green-500/30',
  },
];

const FloatingSocialBar = () => (
  <motion.div
    initial={{ opacity: 0, x: 24 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
    className="fixed bottom-5 right-4 sm:bottom-7 sm:right-6 z-40 flex flex-col gap-2.5"
  >
    {socials.map((s, i) => (
      <motion.a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        data-cursor="hover"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 1.2 + i * 0.1, ease: 'easeOut' }}
        whileHover={{ scale: 1.12, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`p-2.5 sm:p-3 rounded-2xl text-white bg-gradient-to-br ${s.gradient} shadow-lg ${s.shadow} hover:shadow-xl transition-shadow duration-300 relative group`}
      >
        <s.icon className="w-4 h-4 sm:w-5 sm:h-5" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 text-xs font-display font-medium bg-[hsl(270_12%_8%)] text-foreground rounded-xl opacity-0 pointer-events-none translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-250 whitespace-nowrap border border-white/8 shadow-xl hidden sm:block">
          {s.label}
        </span>
      </motion.a>
    ))}
  </motion.div>
);

export default FloatingSocialBar;
