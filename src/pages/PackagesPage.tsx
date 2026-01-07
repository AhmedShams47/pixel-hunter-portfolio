import { motion } from 'framer-motion';
import { Sparkles, Rocket, Crown, Palette, Share2, Globe, MessageCircle, Instagram, Phone, Facebook, Mail } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const PackagesPage = () => {
  const services = [
    {
      name: 'Graphic Design',
      icon: <Palette className="w-6 h-6" />,
      packages: [
        { tier: 'Basic', desc: 'Great for starting or refreshing your look with a small set of focused deliverables.' },
        { tier: 'Pro', desc: 'For growing brands that want consistent visuals, stronger strategy, and ongoing creative support.' },
        { tier: 'Unlimited', desc: 'For brands that want me as their long-term creative partner with continuous updates and priority support.' },
      ],
    },
    {
      name: 'Social Media Management',
      icon: <Share2 className="w-6 h-6" />,
      packages: [
        { tier: 'Basic', desc: 'Start with a clean, simple presence—limited posts per month with a cohesive visual style.' },
        { tier: 'Pro', desc: 'Content strategy, consistent posting, story designs, and feed planning focused on engagement.' },
        { tier: 'Unlimited', desc: 'Full creative support with scheduling, optimization, and regular adjustments based on performance.' },
      ],
    },
    {
      name: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      packages: [
        { tier: 'Basic', desc: 'A clean, responsive single-page or simple website that introduces who you are.' },
        { tier: 'Pro', desc: 'Multi-page website with custom sections, better structure, and strong visual design.' },
        { tier: 'Unlimited', desc: 'Long-term web partner with continuous improvements, redesigns, and technical support.' },
      ],
    },
  ];

  const tierIcons: Record<string, React.ReactNode> = {
    Basic: <Sparkles className="w-5 h-5" />,
    Pro: <Rocket className="w-5 h-5" />,
    Unlimited: <Crown className="w-5 h-5" />,
  };

  const tierColors: Record<string, string> = {
    Basic: 'border-slate-500/40',
    Pro: 'border-primary/50 ring-1 ring-primary/20',
    Unlimited: 'border-gold/50',
  };

  const contactMethods = [
    { icon: <Instagram className="w-5 h-5" />, label: 'DM on Instagram', href: 'https://www.instagram.com/k_0_p_a/', helper: 'Best for quick ideas, project questions, and sharing references.', primary: true },
    { icon: <Phone className="w-5 h-5" />, label: 'Chat on WhatsApp', href: 'https://wa.me/8801707887676?text=Hi%20Ahmed!%20I%27m%20on%20your%20website%20and%20I%27d%20like%20to%20know%20more%20about%20this%20package.%20Can%20you%20share%20the%20details%20and%20what%20you%20recommend%20for%20my%20brand%3F', helper: 'Great for serious inquiries, voice notes, and fast replies.', primary: false },
    { icon: <Facebook className="w-5 h-5" />, label: 'Message on Facebook', href: 'https://www.facebook.com/AhmedShams164', helper: 'Perfect if you found me through Facebook.', primary: false },
    { icon: <Mail className="w-5 h-5" />, label: 'Email Me', href: 'mailto:shamsvisuals@gmail.com', helper: 'If you prefer writing everything clearly, send a detailed brief.', primary: false },
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
              // PACKAGES
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Flexible <span className="gold-text gold-glow">Packages</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Different brands need different levels of support, so I offer flexible packages for Graphic Design, Social Media Management, and Web Development. Choose the level that fits you, then message me directly for details.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services & Packages */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: serviceIndex * 0.1, ease: "easeOut" }}
            >
              {/* Service Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-primary/15 border border-primary/25 text-primary">
                  {service.icon}
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {service.name}
                </h2>
              </div>

              {/* Package Tiers */}
              <div className="grid md:grid-cols-3 gap-6">
                {service.packages.map((pkg, pkgIndex) => (
                  <motion.div
                    key={pkg.tier}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: pkgIndex * 0.1, ease: "easeOut" }}
                    className={`glass-card p-6 rounded-2xl hover:border-primary/60 transition-all duration-300 group ${tierColors[pkg.tier]}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-primary">
                        {tierIcons[pkg.tier]}
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {pkg.tier}
                      </h3>
                      {pkg.tier === 'Pro' && (
                        <span className="px-2 py-0.5 text-[10px] font-display tracking-wider bg-primary text-primary-foreground rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {pkg.desc}
                    </p>
                    <p className="text-xs text-primary/80 font-display">
                      Want this package? Tap a button below and tell me the package name.
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom Offers Note */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass-card p-6 rounded-2xl text-center border-primary/30"
          >
            <p className="text-muted-foreground">
              I create custom offers based on your goals, not fixed price tags. Message me, tell me what you need (for example: <span className="text-primary font-semibold">'Pro – Social Media Management'</span>), and I'll reply with options that fit you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-card p-10 md:p-14 rounded-3xl text-center"
          >
            <div className="inline-flex p-4 rounded-2xl bg-primary/15 border border-primary/25 text-primary mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Let's build something <span className="text-primary">beautiful</span> together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              No complicated forms—just message me. Reach out via Instagram, WhatsApp, Facebook, or email, tell me what you're looking for, and I'll help you choose or customize the perfect package.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-2 p-5 rounded-xl font-display transition-all duration-300 hover:scale-[1.02] ${
                    method.primary
                      ? 'metallic-prime text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--prime)/0.4)]'
                      : 'glass-card text-primary border border-primary/30 hover:border-primary/60'
                  }`}
                >
                  <div className="flex items-center gap-2 font-semibold">
                    {method.icon}
                    <span>{method.label}</span>
                  </div>
                  <span className={`text-xs ${method.primary ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {method.helper}
                  </span>
                </a>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              Whichever button you choose, your message comes directly to me, Ahmed—not a bot, not a team. I read everything and reply as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 px-6 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground"
          >
            Not sure which package is right for you? Just send me a quick <span className="text-primary">'Hi'</span> on Instagram, Facebook, WhatsApp or email, and I'll help you choose in a few messages.
          </motion.p>
        </div>
      </section>
    </PageLayout>
  );
};

export default PackagesPage;
