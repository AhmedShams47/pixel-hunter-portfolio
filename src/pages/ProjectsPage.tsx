import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Palette, Share2, Globe, Quote, ExternalLink } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Branding & Graphic Design',
      type: 'Branding',
      icon: <Palette className="w-6 h-6" />,
      description: 'Logos, brand identities, marketing materials, and visual systems that make your business look established from day one. I dig into your goals first, then design assets that actually connect with your audience.',
      feedback: '"Ahmed delivered exactly what we envisioned—professional, unique, and ahead of schedule. Our rebrand drove a 40% increase in customer inquiries."',
      gradient: 'from-primary/20 to-accent/20',
    },
    {
      title: 'Social Media Management',
      type: 'Social Media',
      icon: <Share2 className="w-6 h-6" />,
      description: 'Content that stops the scroll. I handle strategy, design, and scheduling so your feed stays active, on-brand, and engagement-focused—without you lifting a finger.',
      feedback: '"Our follower count doubled in three months, and our DMs are finally full of real leads. Worth every penny."',
      gradient: 'from-orange-500/20 to-amber-500/20',
    },
    {
      title: 'Web Design & Development',
      type: 'Web',
      icon: <Globe className="w-6 h-6" />,
      description: 'Fast, mobile-friendly websites that look stunning and actually convert visitors into customers. Clean code, sharp design, and smooth animations that make your brand memorable.',
      feedback: '"Our bounce rate dropped and conversions went up. The site looks incredible and loads lightning fast."',
      gradient: 'from-emerald-500/20 to-teal-500/20',
    },
  ];

  const artworks = [
    'Logo Collections',
    'Poster Designs',
    'Feed Layouts',
    'UI Screens',
    'Brand Boards',
    'Social Templates',
  ];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-primary text-sm font-display tracking-[0.3em] mb-4 block">
              // MY WORK
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Results That <span className="gold-text gold-glow">Speak</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real projects. Real clients. Real impact. Here's what happens when strategy meets creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="glass-card p-8 md:p-10 rounded-3xl overflow-hidden relative group"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-2xl bg-primary/15 border border-primary/25 text-primary group-hover:shadow-[0_0_20px_hsl(var(--gold)/0.2)] transition-shadow duration-300">
                      {project.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-display tracking-wider bg-primary/20 text-primary rounded-full">
                        {project.type}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Feedback */}
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-secondary/30 border border-border/50">
                      <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground italic">
                        {project.feedback}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Artworks */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Work <span className="text-primary">Samples</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A snapshot of the creative assets I produce for clients across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {artworks.map((artwork, index) => (
              <motion.div
                key={artwork}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                className="glass-card p-6 rounded-2xl text-center group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {artwork}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-card p-10 md:p-14 rounded-3xl text-center"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Want results like these?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Your brand could be next. Message me and let's discuss what you need—no pressure, just a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/packages"
                className="px-8 py-4 metallic-gold text-primary-foreground font-display font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(var(--gold)/0.4)]"
                >
                  Get Started
                </Link>
              <a
                href="https://instagram.com/k_0_p_a"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-8 py-4 font-display font-bold text-primary border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02]"
              >
                DM on Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectsPage;
