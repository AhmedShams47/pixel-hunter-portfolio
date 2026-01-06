import { motion } from 'framer-motion';
import { Sparkles, Rocket, Crown, MessageCircle, Palette, Share2, Globe } from 'lucide-react';

const PackagesSection = () => {
  const serviceCategories = [
    {
      service: 'Graphic Design',
      icon: <Palette className="w-5 h-5" />,
      packages: [
        {
          name: 'Basic',
          description: 'Perfect for getting started with a clean, professional look. Ideal for one-time designs like a logo refresh, a poster, or a small bundle of social media posts.',
        },
        {
          name: 'Pro',
          description: 'For growing brands that need consistent design support. This covers multiple deliverables such as brand assets, post templates, highlight covers, and more polished visual systems.',
        },
        {
          name: 'Unlimited',
          description: 'For brands that want me as their ongoing design partner. Continuous updates, new creatives every month, and priority support for your campaigns and ideas.',
        },
      ],
    },
    {
      service: 'Social Media Management',
      icon: <Share2 className="w-5 h-5" />,
      packages: [
        {
          name: 'Basic',
          description: 'Start with a simple but strong presence: a limited number of posts per month, basic captions, and a clean visual style to introduce your brand.',
        },
        {
          name: 'Pro',
          description: 'Content strategy, consistent posting, story/post designs, and feed planning focused on engagement and growth.',
        },
        {
          name: 'Unlimited',
          description: 'Full creative support: content ideas, visuals, scheduling, optimization, and regular adjustments based on performance to keep your pages active and alive.',
        },
      ],
    },
    {
      service: 'Web Development',
      icon: <Globe className="w-5 h-5" />,
      packages: [
        {
          name: 'Basic',
          description: 'A clean, responsive single-page or simple multi-section website that introduces who you are and what you do.',
        },
        {
          name: 'Pro',
          description: 'A more advanced, multi-page website with custom sections, better structure, and strong visual design that matches your brand.',
        },
        {
          name: 'Unlimited',
          description: 'Long-term web partner: continuous improvements, new sections, redesigns, and technical support as your brand grows.',
        },
      ],
    },
  ];

  const packageIcons: Record<string, React.ReactNode> = {
    Basic: <Sparkles className="w-5 h-5" />,
    Pro: <Rocket className="w-5 h-5" />,
    Unlimited: <Crown className="w-5 h-5" />,
  };

  const packageColors: Record<string, string> = {
    Basic: 'border-slate-500/30',
    Pro: 'border-primary/50',
    Unlimited: 'border-gold/50',
  };

  return (
    <section id="packages" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-display tracking-[0.3em] mb-4 block">
            // CHOOSE YOUR FIT
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Flexible{' '}
            <span className="gold-text gold-glow">Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto tracking-wide text-lg">
            Different brands have different needs, so I offer flexible packages for Graphic Design, Social Media Management, and Web Development. No fixed prices shown—just clear structures. DM me and we'll match the right package to your goals.
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-12 mb-16">
          {serviceCategories.map((category) => (
            <motion.div
              key={category.service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-primary/15 border border-primary/25 text-primary">
                  {category.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {category.service}
                </h3>
              </div>

              {/* Packages Grid */}
              <div className="grid md:grid-cols-3 gap-4">
                {category.packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`glass-card p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group ${packageColors[pkg.name]}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-primary">
                        {packageIcons[pkg.name]}
                      </div>
                      <h4 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {pkg.name}
                      </h4>
                      {pkg.name === 'Pro' && (
                        <span className="px-2 py-0.5 text-[10px] font-display tracking-wider bg-primary/20 text-primary rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed tracking-wide">
                      {pkg.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* DM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass-card p-8 md:p-12 rounded-3xl text-center"
        >
          <div className="inline-flex p-4 rounded-2xl bg-primary/15 border border-primary/25 text-primary mb-4">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h3 className="font-display text-xl font-bold text-foreground mb-3">
            Ready to get started?
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6 tracking-wide">
            For package details, availability, and custom offers, please DM me directly. No need to fill long forms—just send a message, tell me what you need, and we'll build the right package together.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://instagram.com/k_0_p_a"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-sm font-display font-semibold metallic-prime text-primary-foreground transition-all duration-300 rounded-xl hover:scale-[1.02] hover:-translate-y-0.5"
            >
              Instagram DM
            </a>
            <a
              href="https://wa.me/8801707887676"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-sm font-display font-semibold text-primary border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 rounded-xl hover:-translate-y-0.5"
            >
              WhatsApp
            </a>
            <a
              href="https://facebook.com/ahmed.shams"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-sm font-display font-semibold text-primary border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 rounded-xl hover:-translate-y-0.5"
            >
              Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;
