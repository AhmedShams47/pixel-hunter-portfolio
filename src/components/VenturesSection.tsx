import { motion } from 'framer-motion';
import { Utensils, Smartphone, Globe, Pizza } from 'lucide-react';
import VentureCard from './VentureCard';

const VenturesSection = () => {
  const ventures = [
    {
      title: 'Pizza House',
      subtitle: 'Restaurant & Dining',
      description:
        'Authentic pizzeria experience with modern web presence. From online ordering to menu showcase, crafted for maximum appetite appeal and seamless customer journey.',
      vibe: 'Warm • Delicious • Inviting',
      icon: <Pizza className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-red-500/30 to-orange-500/30',
      link: 'https://pizzahouse.pizza/',
    },
    {
      title: 'Phone Depot & Repair',
      subtitle: 'Tech Repair & Diagnostics',
      description:
        'Clinical precision meets hardware expertise. Professional device repair services with a polished digital storefront. Every component analyzed, every connection optimized.',
      vibe: 'Clean • Clinical • Professional',
      icon: <Smartphone className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-primary/30 to-accent/30',
      link: 'https://www.phonedepotrepair.net/',
    },
    {
      title: 'CoreA / SaltSync',
      subtitle: 'IT & Digital Marketing',
      description:
        'Where abstract data transforms into tangible results. Full-spectrum digital solutions from infrastructure deployment to campaign orchestration. The future is automated.',
      vibe: 'Abstract • Data-Driven • Futuristic',
      icon: <Globe className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-gold-dark/30 to-gold-light/30',
    },
  ];

  return (
    <section id="ventures" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-display tracking-[0.3em] mb-4 block">
            // THE PORTFOLIO
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Recent{' '}
            <span className="gold-text gold-glow">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto tracking-wide">
            Crafted with precision and passion. Each project represents a unique vision brought to life through design and development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((venture, index) => (
            <VentureCard
              key={venture.title}
              {...venture}
              delay={0.15 + index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;