import { motion } from 'framer-motion';
import { Palette, Share2, Globe, Quote } from 'lucide-react';
import VentureCard from './VentureCard';

const VenturesSection = () => {
  const projects = [
    {
      title: 'Branding & Graphic Design',
      subtitle: 'Visual Identity Creation',
      description:
        'Logo designs, full brand identities, posters, social posts, and more. Every project starts with understanding your brand voice, then building concepts, refining direction, and delivering designs that fit your audience.',
      vibe: 'Bold • Premium • Memorable',
      icon: <Palette className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-primary/30 to-accent/30',
    },
    {
      title: 'Social Media Management',
      subtitle: 'Content Strategy & Design',
      description:
        'Content strategy, feed design, post scheduling, and engagement-focused visuals. Building a consistent online presence with visuals your audience actually wants to share.',
      vibe: 'Strategic • Engaging • Consistent',
      icon: <Share2 className="w-6 h-6" />,
      gradient: 'bg-gradient-to-br from-orange-500/30 to-amber-500/30',
    },
    {
      title: 'Web Design & Development',
      subtitle: 'Modern Web Experiences',
      description:
        'Modern, responsive websites that look good and feel smooth to use. Clean UI, strong visual design, and when needed, 3D animations that make your brand stand out.',
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
            // MY WORK
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects &{' '}
            <span className="gold-text gold-glow">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto tracking-wide text-lg">
            Every project starts with listening. Here is a look at how ideas from my clients became visuals that match their story and goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <VentureCard
              key={project.title}
              {...project}
              delay={0.15 + index * 0.15}
            />
          ))}
        </div>

        {/* Client Feedback Example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
          className="glass-card p-8 md:p-12 rounded-3xl text-center"
        >
          <div className="inline-flex p-4 rounded-2xl bg-primary/15 border border-primary/25 text-primary mb-6">
            <Quote className="w-6 h-6" />
          </div>
          <blockquote className="text-lg md:text-xl text-foreground font-medium italic mb-4 max-w-2xl mx-auto">
            "Working with Shams Visuals was smooth and clear from start to finish. The final result was even better than what we imagined."
          </blockquote>
          <p className="text-sm text-muted-foreground tracking-wide">
            — Happy Client
          </p>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6 tracking-wide">
            If you like what you see and want something similar for your brand, send me a message and let's start planning your project.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, boxShadow: '0 0 50px hsl(var(--gold) / 0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 metallic-gold text-primary-foreground font-display font-bold rounded-2xl transition-all duration-500 ease-in-out"
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default VenturesSection;
