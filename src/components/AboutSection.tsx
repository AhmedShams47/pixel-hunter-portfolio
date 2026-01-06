import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Headphones, Target, Sparkles, MessageCircle } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workProcess = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "I listen first",
      description: "Understanding your vision before any design begins"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "I plan every step",
      description: "From concept to final delivery, nothing is left to chance"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "I refine until perfect",
      description: "Your brand feels like 'you,' but upgraded"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "I stay connected",
      description: "Fast replies, honest feedback, long-term relationships"
    }
  ];

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-display tracking-[0.3em] mb-4 block">
            // WHO I AM
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ahmed{' '}
            <span className="gold-text gold-glow">Shams</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto tracking-wide text-lg leading-relaxed">
            A disciplined, detail-driven designer and developer who lives for clean visuals, smooth motion, and scroll-stopping content. I bring together branding, graphic design, social media management, and web development to build a full experience around your brand—not just a logo or a post.
          </p>
        </motion.div>

        {/* How I Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeInOut" }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-10">
            How I <span className="text-primary">Work</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeInOut" }}
                className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-500 ease-in-out rounded-3xl"
              >
                <div className="mb-4 inline-flex p-4 rounded-2xl bg-primary/15 border border-primary/25 text-primary group-hover:shadow-[0_0_30px_hsl(var(--gold)/0.3)] transition-all duration-500 ease-in-out">
                  {step.icon}
                </div>
                <h4 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground tracking-wide">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Years Experience', value: '5+' },
            { label: 'Projects Completed', value: '100+' },
            { label: 'Happy Clients', value: '50+' },
            { label: 'Brands Built', value: '30+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeInOut" }}
              className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-500 ease-in-out rounded-3xl"
            >
              <div className="font-display text-3xl md:text-4xl font-bold gold-text gold-glow mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-display tracking-[0.15em] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
