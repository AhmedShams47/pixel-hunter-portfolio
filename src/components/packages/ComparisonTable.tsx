import { motion } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

const features = [
  { name: 'Responsive Design', starter: true, growth: true, premium: true },
  { name: 'WhatsApp Integration', starter: true, growth: true, premium: true },
  { name: 'Basic SEO', starter: true, growth: true, premium: true },
  { name: 'Contact Forms', starter: true, growth: true, premium: true },
  { name: 'Advanced UI/UX', starter: false, growth: true, premium: true },
  { name: 'Speed Optimization', starter: false, growth: true, premium: true },
  { name: 'Lead Capture System', starter: false, growth: true, premium: true },
  { name: 'Priority Support', starter: false, growth: true, premium: true },
  { name: 'Custom Strategy', starter: false, growth: false, premium: true },
  { name: 'Premium Animations', starter: false, growth: false, premium: true },
  { name: 'E-commerce / Booking', starter: false, growth: false, premium: true },
  { name: 'Marketing Funnel', starter: false, growth: false, premium: true },
  { name: 'Analytics Integration', starter: false, growth: false, premium: true },
  { name: 'Dedicated Support', starter: false, growth: false, premium: true },
];

const ComparisonTable = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Compare <span className="text-primary">Plans</span>
          </h2>
          <p className="text-muted-foreground">
            See exactly what's included in each package.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-4 md:p-5 font-display text-sm tracking-wider text-muted-foreground">
                    Feature
                  </th>
                  <th className="p-4 md:p-5 font-display text-sm tracking-wider text-muted-foreground text-center">
                    Starter
                  </th>
                  <th className="p-4 md:p-5 font-display text-sm tracking-wider text-primary text-center">
                    Growth
                  </th>
                  <th className="p-4 md:p-5 font-display text-sm tracking-wider text-muted-foreground text-center">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className={`border-b border-border/20 ${
                      index % 2 === 0 ? 'bg-secondary/10' : ''
                    }`}
                  >
                    <td className="p-4 md:p-5 text-sm text-foreground">
                      {feature.name}
                    </td>
                    <td className="p-4 md:p-5 text-center">
                      {feature.starter ? (
                        <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 md:p-5 text-center">
                      {feature.growth ? (
                        <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 md:p-5 text-center">
                      {feature.premium ? (
                        <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
