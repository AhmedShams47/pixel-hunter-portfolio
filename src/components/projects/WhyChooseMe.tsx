import { motion } from 'framer-motion';
import { Target, Smartphone, Zap, MessageCircle, Search, TrendingUp, Layers, Code2 } from 'lucide-react';

const reasons = [
  { icon: Target, title: 'Conversion Focused', description: 'Every element is designed to guide visitors toward action.' },
  { icon: Smartphone, title: 'Mobile & Tablet Optimized', description: 'Flawless experience across every screen size.' },
  { icon: Zap, title: 'Ultra Fast Performance', description: 'Speed-optimized to keep visitors engaged.' },
  { icon: MessageCircle, title: 'WhatsApp & Lead Systems', description: 'Direct customer communication built in.' },
  { icon: Search, title: 'SEO & Marketing Ready', description: 'Structured for search engine visibility from day one.' },
  { icon: TrendingUp, title: 'Built for Scalability', description: 'Architecture that grows with your business.' },
  { icon: Layers, title: 'Premium UI/UX', description: 'Award-worthy visual design and smooth interactions.' },
  { icon: Code2, title: 'Modern Technology', description: 'Built with the latest frameworks and best practices.' },
];

const WhyChooseMe = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-display tracking-[0.3em] text-primary border border-primary/30 rounded-full mb-4 bg-primary/5">
            WHY ME
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
            Why Clients <span className="gold-text">Trust My Work</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Combining premium design with technical excellence to deliver results that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
              className="group glass-card p-6 rounded-2xl text-center hover:border-primary/40 transition-all duration-400"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-all duration-400">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
