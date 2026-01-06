import { motion } from 'framer-motion';
import { Palette, Share2, Globe } from 'lucide-react';
import VentureCard from './VentureCard';

const VenturesSection = () => {
  const projects = [
    {
      title: 'Branding & Graphic Design',
      subtitle: 'Visual Identity Creation',
      description:
        'Logos, full brand identities, posters, social posts, and more. Every project is built with clear structure, strong typography, and powerful color that makes your brand feel alive.',
      vibe: 'Bold • Premium • Memorable',
      icon: <Palette className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-primary/30 to-accent/30',
    },
    {
      title: 'Social Media Management',
      subtitle: 'Content Strategy & Design',
      description:
        'Content strategy, feed design, post scheduling, and engagement-focused visuals. Building a consistent online presence that connects with your audience.',
      vibe: 'Strategic • Engaging • Consistent',
      icon: <Share2 className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-orange-500/30 to-amber-500/30',
    },
    {
      title: 'Web Design & Development',
      subtitle: 'Modern Web Experiences',
      description:
        'Modern, responsive websites that look good and feel smooth to use. When needed, 3D animations that make your brand stand out from the crowd.',
      vibe: 'Smooth • Responsive • Interactive',
      icon: <Globe className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-gold-dark/30 to-gold-light/30',
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-display tracking-[0.3em] mb-4 block">
            // WHAT I DO
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects &{' '}
            <span className="gold-text gold-glow">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto tracking-wide">
            Over the years, I've worked on branding, social media, and web projects—each built with care, clear structure, and client feedback that matters.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <VentureCard
              key={project.title}
              {...project}
              delay={0.15 + index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
