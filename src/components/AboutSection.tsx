import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Calendar, Sparkles, Zap } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Who I Am */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-display tracking-[0.3em] mb-4 block">
            // WHO I AM
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Shams{' '}
            <span className="gold-text gold-glow">Visuals</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto tracking-wide text-lg leading-relaxed">
            Shams Visuals is my creative studio where design, discipline, and storytelling meet. Over the last few years I've helped brands, small businesses, and personal projects look more professional, consistent, and visually powerful.
          </p>
        </motion.div>

        {/* How I Work */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
          className="glass-card p-8 md:p-12 rounded-3xl mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-primary/15 border border-primary/25 text-primary">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  How I <span className="text-primary">Work</span>
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                I treat every project with structure and discipline: clear communication, fixed milestones, and clean delivery. From the first message to the final file, you always know what is happening, what comes next, and when you will receive it. I don't rush work—I refine it until it feels right for your brand.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <MessageSquare className="w-5 h-5" />, label: 'Clear Communication' },
                { icon: <Calendar className="w-5 h-5" />, label: 'Fixed Milestones' },
                { icon: <Sparkles className="w-5 h-5" />, label: 'Clean Delivery' },
                { icon: <Zap className="w-5 h-5" />, label: 'Refined Results' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-secondary/30 border border-border/50 text-center"
                >
                  <div className="text-primary">{item.icon}</div>
                  <span className="text-xs text-muted-foreground font-display tracking-wider uppercase">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3D & Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeInOut" }}
          className="glass-card p-8 md:p-12 rounded-3xl mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-primary/15 border border-primary/25 text-primary">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              3D & <span className="text-primary">Animation</span>
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed tracking-wide max-w-3xl">
            I love bringing designs to life with smooth 3D animations and motion elements. Whether it is a logo reveal, a social media reel, or a website section, movement is used carefully to guide the eye and keep your audience engaged without overwhelming them.
          </p>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
          className="text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto tracking-wide mb-6">
            You can discover my past projects in branding, social media management, and web development throughout this site. For quick communication, reach out anytime via Instagram, Facebook, WhatsApp, email, or my website contact form—I try to reply as fast as possible and keep things friendly and simple.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Instagram', href: 'https://instagram.com/k_0_p_a' },
              { name: 'WhatsApp', href: 'https://wa.me/8801707887676' },
              { name: 'Facebook', href: 'https://facebook.com/ahmed.shams' },
              { name: 'Email', href: 'mailto:shamsvisuals@gmail.com' },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -2 }}
                className="px-5 py-2.5 text-sm font-display text-primary border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-500 ease-in-out rounded-xl"
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
