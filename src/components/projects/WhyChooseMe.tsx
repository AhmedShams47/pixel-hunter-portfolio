import { motion } from 'framer-motion';
import {
  Target,
  Smartphone,
  Zap,
  MessageCircle,
  Search,
  TrendingUp,
  Palette,
  Code2,
} from 'lucide-react';

const reasons = [
  { icon: Target, title: 'Conversion Focused Design', desc: 'Every element is optimized to turn visitors into customers.' },
  { icon: Smartphone, title: 'Mobile & Tablet Optimized', desc: 'Flawless experience on every screen size.' },
  { icon: Zap, title: 'Ultra Fast Performance', desc: 'Speed-optimized for instant loading and engagement.' },
  { icon: MessageCircle, title: 'WhatsApp & Lead Systems', desc: 'Direct communication pipelines built in.' },
  { icon: Search, title: 'SEO & Marketing Ready', desc: 'Structured for search engines from day one.' },
  { icon: TrendingUp, title: 'Built for Scalability', desc: 'Architecture that grows with your business.' },
  { icon: Palette, title: 'Premium UI/UX', desc: 'International agency-level design quality.' },
  { icon: Code2, title: 'Modern Technology', desc: 'Built with the latest frameworks and best practices.' },
];

const WhyChooseMe = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-display tracking-[0.3em] mb-4 block">
            // WHY ME
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Clients Trust <span className="text-primary">My Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every project is built with strategy, precision, and a relentless focus on results.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
              className="glass-card p-5 md:p-6 rounded-2xl group hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--prime)/0.2)] transition-shadow duration-300">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
