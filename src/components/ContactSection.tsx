import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight, Globe } from 'lucide-react';

const ContactSection = () => {
  const socials = [
    { name: 'Instagram', href: 'https://instagram.com/k_0_p_a' },
    { name: 'Facebook', href: 'https://facebook.com/ahmed.shams' },
    { name: 'Behance', href: 'https://behance.net/ShamsVisuals' },
    { name: 'Linktree', href: 'https://linktr.ee/shamsvisuals' },
  ];

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-display tracking-[0.3em] mb-4 block">
            // LET'S CONNECT
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Design Something{' '}
            <span className="gold-text gold-glow">Unforgettable</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto tracking-wide text-lg">
            Explore my work, discover my process, and let's build something you'll be proud to show the world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
                    className="text-foreground font-medium hover:text-primary transition-colors duration-300"
                  >
                    shamsvisuals@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary/15 border border-primary/25 text-primary">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-[0.15em] mb-1">
                    Website
                  </div>
                  <a 
                    href="https://shamsvisual.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:text-primary transition-colors duration-300"
                  >
                    shamsvisual.com
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
                    Dhaka, Bangladesh
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary/15 border border-primary/25 text-primary">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.612l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.524-.64-6.396-1.754l-.446-.27-2.977.996.996-2.977-.27-.446A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-[0.15em] mb-1">
                    WhatsApp
                  </div>
                  <a 
                    href="https://wa.me/8801707887676"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:text-primary transition-colors duration-300"
                  >
                    +880 1707 887 676
                  </a>
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
              <a
                href="mailto:shamsvisuals@gmail.com"
                className="w-full py-5 metallic-gold text-primary-foreground font-display font-bold rounded-2xl flex items-center justify-center gap-3 group transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_hsl(var(--gold)/0.4)]"
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <p className="text-center text-xs text-muted-foreground mt-4 tracking-wide">
                Or connect via social channels below
              </p>

              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 rounded-xl border border-border/50 hover:border-primary/50 hover:-translate-y-0.5"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center">
        <div className="text-muted-foreground text-sm tracking-wide">
          <span className="font-display tracking-[0.2em]">SHAMS VISUALS</span>
          <span className="mx-2">•</span>
          <span>© 2025 All rights reserved</span>
        </div>
        <div className="text-xs text-muted-foreground/50 mt-2 font-mono">
          Designed with passion • Built with precision
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
