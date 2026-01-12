import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Sparkles, Zap, Instagram, Facebook, Mail, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEOHead from '@/components/SEOHead';

const AboutPage = () => {
  const processItems = [
    { icon: <MessageSquare className="w-5 h-5" />, label: 'Clear Communication', desc: 'Regular updates on progress' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Fixed Milestones', desc: 'Deadlines you can count on' },
    { icon: <Sparkles className="w-5 h-5" />, label: 'Quality Delivery', desc: 'Premium, polished results' },
    { icon: <Zap className="w-5 h-5" />, label: 'Fast Turnaround', desc: '3-7 days for most projects' },
  ];

  const socials = [
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: 'https://www.instagram.com/k_0_p_a/', helper: 'Best for quick ideas and sharing references', color: 'hover:text-pink-400' },
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', href: 'https://www.facebook.com/AhmedShams164', helper: 'Perfect if you found me through Facebook', color: 'hover:text-blue-400' },
    { icon: <Phone className="w-5 h-5" />, label: 'WhatsApp', href: 'https://wa.me/8801707887676', helper: 'Great for serious inquiries and fast replies', color: 'hover:text-green-500' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:shamsvisuals@gmail.com', helper: 'Send a detailed brief here', color: 'hover:text-primary' },
  ];

  return (
    <PageLayout>
      <SEOHead
        title="About Ahmed Shams | Graphic Designer in Dhaka"
        description="Meet Ahmed Shams, a professional graphic designer and web developer in Dhaka, Bangladesh. Fast delivery, clear communication, and stunning visual results for your business."
        keywords="Ahmed Shams, graphic designer Dhaka, web developer Bangladesh, Shams Visuals, branding expert Bangladesh"
        canonicalPath="/about"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-primary text-sm font-display tracking-[0.3em] mb-4 block">
              ABOUT ME
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your <span className="gold-text gold-glow">Graphic Designer</span> in Dhaka
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              I help businesses in Bangladesh look professional and memorable through branding, social media design, and web development.
            </p>
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
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm <strong className="text-foreground">Ahmed Shams</strong>, the creative mind behind <strong className="text-foreground">Shams Visuals</strong>. Based in Dhaka, Bangladesh, I specialize in helping businesses create powerful visual identities that attract customers and build trust.
              </p>
              <p>
                Whether you need a complete brand identity, engaging social media content, or a modern website—I combine strategic thinking with creative design to deliver results that actually grow your business.
              </p>
            </div>
            <div className="mt-6">
              <Link 
                to="/projects" 
                className="text-primary hover:text-primary/80 font-display font-semibold inline-flex items-center gap-2 transition-colors"
              >
                See my work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Me */}
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
              Why Clients <span className="text-primary">Trust Me</span>
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Experience that matters</strong> — Helped businesses across restaurants, tech startups, fashion brands, and more</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Direct communication</strong> — You work with me directly, not a team. Your message gets answered fast</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Results-focused</strong> — Designs that don't just look good, but help you get more customers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Complete service</strong> — Branding, social media, and web development from one trusted partner</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* My Process */}
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
              My Design <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every project starts with understanding your business, goals, and audience. I work with clear timelines, regular updates, and organized delivery—so you always know what's happening with your project.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {processItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-secondary/30 border border-border/50 text-center"
                >
                  <div className="text-primary p-2 rounded-lg bg-primary/10">{item.icon}</div>
                  <span className="text-sm font-display font-semibold text-foreground">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3D & Motion */}
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
                3D & <span className="text-primary">Motion Graphics</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond static designs, I create smooth 3D animations and motion graphics that bring your brand to life—animated logos, social media video intros, and subtle website animations that make your brand feel premium and modern.
            </p>
            <div className="mt-6">
              <Link 
                to="/projects" 
                className="text-primary hover:text-primary/80 font-display font-semibold inline-flex items-center gap-2 transition-colors"
              >
                See motion work examples
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
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
              Let's Build Something <span className="text-primary">Together</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to discuss your project? Send me a message on any platform below. No complicated forms—just tell me what you need and I'll reply quickly with ideas and next steps.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Contact Ahmed Shams on ${social.label}`}
                  className={`flex flex-col items-center gap-2 p-5 glass-card rounded-xl text-muted-foreground ${social.color} transition-all duration-300 hover:border-primary/50 hover:-translate-y-0.5`}
                >
                  <div className="flex items-center gap-2">
                    {social.icon}
                    <span className="font-display font-semibold">{social.label}</span>
                  </div>
                  <span className="text-xs text-muted-foreground/70">{social.helper}</span>
                </a>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mb-8">
              Every message comes directly to me, Ahmed—not a bot, not a team. I read everything and reply as soon as possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/packages"
                className="inline-block px-8 py-4 metallic-gold text-primary-foreground font-display font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(var(--gold)/0.4)]"
              >
                View Packages & Pricing
              </Link>
              <Link
                to="/projects"
                className="inline-block px-8 py-4 glass-card font-display font-bold text-primary border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02]"
              >
                See My Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
