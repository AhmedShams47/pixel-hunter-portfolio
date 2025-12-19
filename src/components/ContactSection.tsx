import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-display tracking-widest mb-4 block">
            // INITIATE CONTACT
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Build{' '}
            <span className="metallic-text glow-text">Something</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to collaborate? Whether you need a design reverse-engineered or a business transformed, I'm listening.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    Email
                  </div>
                  <div className="text-foreground font-medium">
                    hello@pixelhunter.dev
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    Location
                  </div>
                  <div className="text-foreground font-medium">
                    Digital Realm • Earth-616
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="text-sm text-muted-foreground mb-3">Response Time</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-foreground">Usually within 24 hours</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px hsl(var(--primary) / 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-primary text-primary-foreground font-display font-bold rounded-lg flex items-center justify-center gap-3 group transition-all duration-200"
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                Or connect via social channels below
              </p>

              <div className="flex justify-center gap-4 mt-4">
                {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ y: -2 }}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="mt-20 text-center"
      >
        <div className="text-muted-foreground text-sm">
          <span className="font-display tracking-wider">THE PIXEL HUNTER</span>
          <span className="mx-2">•</span>
          <span>© 2025 All rights reserved</span>
        </div>
        <div className="text-xs text-muted-foreground/50 mt-2 font-mono">
          Built with obsession • Deployed with precision
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
