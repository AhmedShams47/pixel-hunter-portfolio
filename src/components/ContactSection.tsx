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
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-display tracking-[0.3em] mb-4 block">
            // INITIATE CONTACT
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Build{' '}
            <span className="gold-text gold-glow">Something</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto tracking-wide">
            Ready to collaborate? Whether you need a design reverse-engineered or a business transformed, I'm listening.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeInOut" }}
          className="glass-card p-8 md:p-12 rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary/15 border border-primary/25 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-[0.15em] mb-1">
                    Email
                  </div>
                  <a 
                    href="mailto:shamsvisuals@gmail.com"
                    className="text-foreground font-medium hover:text-primary transition-colors duration-500"
                  >
                    shamsvisuals@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary/15 border border-primary/25 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-[0.15em] mb-1">
                    Location
                  </div>
                  <div className="text-foreground font-medium">
                    Digital Realm • Earth-616
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="text-sm text-muted-foreground mb-3 tracking-wide">Response Time</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-foreground">Usually within 24 hours</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center">
              <motion.a
                href="mailto:shamsvisuals@gmail.com"
                whileHover={{ scale: 1.02, boxShadow: '0 0 50px hsl(var(--gold) / 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 metallic-gold text-primary-foreground font-display font-bold rounded-2xl flex items-center justify-center gap-3 group transition-all duration-500 ease-in-out"
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500 ease-in-out" />
              </motion.a>

              <p className="text-center text-xs text-muted-foreground mt-4 tracking-wide">
                Or connect via social channels below
              </p>

              <div className="flex justify-center gap-4 mt-4">
                {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-500 ease-in-out rounded-xl"
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
        transition={{ duration: 0.7, delay: 0.25, ease: "easeInOut" }}
        className="mt-20 text-center"
      >
        <div className="text-muted-foreground text-sm tracking-wide">
          <span className="font-display tracking-[0.2em]">AHMED SHAMS</span>
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