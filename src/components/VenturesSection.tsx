import { motion } from 'framer-motion';
import { Utensils, Smartphone, Globe } from 'lucide-react';
import VentureCard from './VentureCard';

const VenturesSection = () => {
  const ventures = [
    {
      title: 'Pizza House',
      subtitle: 'Restaurant Website',
      description:
        'A delicious digital experience for a premium pizza restaurant. Custom-built ordering system, menu showcase, and seamless user experience that makes customers crave more.',
      vibe: 'Warm • Appetizing • Modern',
      icon: <Utensils className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-orange-500/30 to-amber-500/30',
      href: 'https://pizzahouse.pizza/',
    },
    {
      title: 'Phone Depot',
      subtitle: 'Tech Repair & Diagnostics',
      description:
        'Professional repair service website with clinical precision. Device diagnostics, service booking, and transparent pricing—all designed for trust and efficiency.',
      vibe: 'Clean • Clinical • Hardware',
      icon: <Smartphone className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-primary/30 to-accent/30',
      href: 'https://www.phonedepotrepair.net/',
    },
    {
      title: 'CoreA',
      subtitle: 'IT & Digital Marketing',
      description:
        'Where abstract data transforms into tangible results. Full-spectrum digital solutions from infrastructure deployment to campaign orchestration. The future is automated.',
      vibe: 'Abstract • Data-Driven • Futuristic',
      icon: <Globe className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-gold-dark/30 to-gold-light/30',
      href: '#',
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
            // THE EMPIRE
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Venture{' '}
            <span className="gold-text gold-glow">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto tracking-wide">
            Three pillars of innovation. Each business is a different dimension of the same vision—perfection through obsession.
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