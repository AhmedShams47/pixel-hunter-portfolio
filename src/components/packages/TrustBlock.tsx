import { motion } from 'framer-motion';
import { Clock, MessageSquare, RefreshCw, TrendingUp, Handshake } from 'lucide-react';

const trustItems = [
  { icon: Clock, label: 'On-time delivery' },
  { icon: MessageSquare, label: 'Clear communication' },
  { icon: RefreshCw, label: 'Revision support' },
  { icon: TrendingUp, label: 'Scalable systems' },
  { icon: Handshake, label: 'Long-term partnership' },
];

const TrustBlock = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-10 rounded-3xl text-center"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            Built on <span className="text-primary">Trust</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {trustItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="flex items-center gap-2.5 text-sm text-foreground"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBlock;
