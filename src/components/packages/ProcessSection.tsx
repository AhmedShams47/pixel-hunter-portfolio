import { motion } from 'framer-motion';
import { Search, ClipboardList, Palette, Code2, Rocket } from 'lucide-react';

const steps = [
  { icon: Search, step: '01', title: 'Discovery', desc: 'Understanding your brand, goals, and audience.' },
  { icon: ClipboardList, step: '02', title: 'Planning', desc: 'Mapping structure, content, and user flow.' },
  { icon: Palette, step: '03', title: 'Design', desc: 'Creating premium visuals and UI/UX.' },
  { icon: Code2, step: '04', title: 'Development', desc: 'Building with modern, scalable technology.' },
  { icon: Rocket, step: '05', title: 'Launch', desc: 'Testing, optimizing, and going live.' },
];

const ProcessSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-display tracking-[0.3em] mb-4 block">
            // PROCESS
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            How Your Project Moves From{' '}
            <span className="text-primary">Idea to Launch</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl text-center group hover:border-primary/50 transition-all duration-300 relative"
            >
              <span className="text-xs font-display tracking-widest text-primary/50 mb-3 block">
                {step.step}
              </span>
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--prime)/0.2)] transition-shadow duration-300">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
