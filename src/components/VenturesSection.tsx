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
      gradient: 'bg-gradient-to-br from-orange-500/30 to-red-500/30',
    },
    {
      title: 'Phone Depot',
      subtitle: 'Tech Repair & Diagnostics',
      description:
        'Clinical precision meets hardware expertise. We diagnose, repair, and resurrect devices with surgical accuracy. Every component analyzed, every connection optimized.',
      vibe: 'Clean • Clinical • Hardware',
      icon: <Smartphone className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-blue-500/30 to-cyan-500/30',
    },
    {
      title: 'CoreA / SaltSync',
      subtitle: 'IT & Digital Marketing',
      description:
        'Where abstract data transforms into tangible results. Full-spectrum digital solutions from infrastructure deployment to campaign orchestration. The future is automated.',
      vibe: 'Abstract • Data-Driven • Futuristic',
      icon: <Globe className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-purple-500/30 to-pink-500/30',
    },
  ];

  return (
    <section id="ventures" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-display tracking-widest mb-4 block">
            // THE EMPIRE
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Venture{' '}
            <span className="metallic-text glow-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three pillars of innovation. Each business is a different dimension of the same vision—perfection through obsession.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((venture, index) => (
            <VentureCard
              key={venture.title}
              {...venture}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
