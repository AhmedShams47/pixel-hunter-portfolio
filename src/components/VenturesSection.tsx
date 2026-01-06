import { motion } from 'framer-motion';
import { Utensils, Smartphone, Globe } from 'lucide-react';
import VentureCard from './VentureCard';

const VenturesSection = () => {
  const ventures = [
    {
      title: 'Crave Haus',
      subtitle: 'Restaurant & Dining Experience',
      description:
        'Premium dining destination where culinary art meets fast-casual convenience. From menu engineering to digital ordering systems, every touchpoint is optimized for maximum satisfaction.',
      vibe: 'Warm • Premium • Fast',
      icon: <Utensils className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-orange-500/30 to-amber-500/30',
    },
    {
      title: 'Phone Depot',
      subtitle: 'Tech Repair & Diagnostics',
      description:
        'Clinical precision meets hardware expertise. We diagnose, repair, and resurrect devices with surgical accuracy. Every component analyzed, every connection optimized.',
      vibe: 'Clean • Clinical • Hardware',
      icon: <Smartphone className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-primary/30 to-accent/30',
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