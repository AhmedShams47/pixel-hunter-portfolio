import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Sparkles, Zap, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const AboutPage = () => {
  const processItems = [
    { icon: <MessageSquare className="w-5 h-5" />, label: 'Clear Communication' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Fixed Milestones' },
    { icon: <Sparkles className="w-5 h-5" />, label: 'Organized Delivery' },
    { icon: <Zap className="w-5 h-5" />, label: 'Consistent Results' },
  ];

  const socials = [
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: 'https://instagram.com/k_0_p_a', color: 'hover:text-pink-400' },
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', href: 'https://facebook.com/ahmed.shams', color: 'hover:text-blue-400' },
    { icon: <Phone className="w-5 h-5" />, label: 'WhatsApp', href: 'https://wa.me/8801707887676', color: 'hover:text-green-500' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:shamsvisuals@gmail.com', color: 'hover:text-primary' },
  ];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-primary text-sm font-display tracking-[0.3em] mb-4 block">
              // ABOUT ME
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Meet <span className="gold-text gold-glow">Ahmed Shams</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Who I Am */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-card p-8 md:p-12 rounded-3xl"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Who I <span className="text-primary">Am</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Ahmed Shams, the creator of Shams Visuals. I help brands, businesses and creators look professional and memorable through design, motion, and web experiences. Over the years, I've worked with clients who needed everything from a simple logo refresh to a complete brand overhaul—and I've loved every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Discipline & Process */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-card p-8 md:p-12 rounded-3xl"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Discipline & <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every project starts with listening and planning. I work with clear communication, fixed milestones, and organized delivery, so you always know what is happening. I don't just "make designs"; I build systems that stay consistent across your brand.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {processItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-secondary/30 border border-border/50 text-center"
                >
                  <div className="text-primary">{item.icon}</div>
                  <span className="text-xs text-muted-foreground font-display tracking-wider uppercase">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3D & Animations */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-card p-8 md:p-12 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-primary/15 border border-primary/25 text-primary">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                3D & <span className="text-primary">Animations</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I love using smooth 3D animations and motion graphics to bring brands to life—logo reveals, social media intros, and subtle website animations that feel premium instead of noisy. Movement should guide the eye and add value, not distract.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Connect With Me */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-card p-8 md:p-12 rounded-3xl text-center"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Connect <span className="text-primary">With Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              You can reach me anytime through social media or email—just send a message, share your idea, and we'll start building together.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-6 py-3 glass-card rounded-xl text-muted-foreground ${social.color} transition-all duration-300 hover:border-primary/50 hover:-translate-y-0.5`}
                >
                  {social.icon}
                  <span className="font-display text-sm">{social.label}</span>
                </a>
              ))}
            </div>

            <Link
              to="/packages"
              className="inline-block px-8 py-4 metallic-gold text-primary-foreground font-display font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(var(--gold)/0.4)]"
            >
              Let's Work Together
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
