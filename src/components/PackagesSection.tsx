import { motion } from 'framer-motion';
import { Sparkles, Rocket, Crown, MessageCircle } from 'lucide-react';

const PackagesSection = () => {
  const packages = [
    {
      name: 'Basic',
      icon: <Sparkles className="w-6 h-6" />,
      tagline: 'Start Fresh',
      description: 'Perfect for starting your brand or refreshing your look. Essential deliverables to get you going.',
      features: ['Logo Design', 'Brand Colors', 'Basic Social Kit', 'Single Page Website'],
      gradient: 'from-slate-500/20 to-slate-600/20',
      borderColor: 'border-slate-500/30',
    },
    {
      name: 'Pro',
      icon: <Rocket className="w-6 h-6" />,
      tagline: 'Grow Strong',
      description: 'For growing brands that want consistent, higher-impact visuals and systems.',
      features: ['Full Brand Identity', 'Social Media Strategy', 'Multi-page Website', 'Content Calendar'],
      gradient: 'from-primary/20 to-accent/20',
      borderColor: 'border-primary/50',
      popular: true,
    },
    {
      name: 'Unlimited',
      icon: <Crown className="w-6 h-6" />,
      tagline: 'Partner Up',
      description: 'For brands that want me as their long-term creative partner with ongoing support.',
      features: ['Everything in Pro', 'Priority Support', 'Unlimited Revisions', 'Monthly Updates'],
      gradient: 'from-gold-dark/20 to-gold-light/20',
      borderColor: 'border-gold/50',
    },
  ];

  return (
    <section id="packages" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-display tracking-[0.3em] mb-4 block">
            // CHOOSE YOUR FIT
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Flexible{' '}
            <span className="gold-text gold-glow">Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto tracking-wide">
            Three flexible packages for Graphic Design, Social Media Management, and Web Development. Every brand is different—DM me to customize a package that fits your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 + index * 0.1, ease: "easeInOut" }}
              className={`relative glass-card p-8 rounded-3xl hover:border-primary/50 transition-all duration-500 ease-in-out group ${pkg.popular ? 'ring-2 ring-primary/50' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 text-xs font-display tracking-wider bg-primary text-primary-foreground rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Background gradient */}
              <div className={`absolute inset-0 opacity-10 rounded-3xl bg-gradient-to-br ${pkg.gradient}`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/15 border border-primary/25 text-primary group-hover:shadow-[0_0_30px_hsl(var(--gold)/0.3)] transition-all duration-500 ease-in-out">
                  {pkg.icon}
                </div>

                {/* Name & Tagline */}
                <h3 className="font-display text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-500">
                  {pkg.name}
                </h3>
                <p className="text-sm text-primary mb-4">{pkg.tagline}</p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 tracking-wide">
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="https://wa.me/8801707887676"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full py-3 text-center font-display font-semibold text-primary border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-500 ease-in-out rounded-xl"
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
          className="glass-card p-8 rounded-3xl text-center"
        >
          <div className="inline-flex p-4 rounded-2xl bg-primary/15 border border-primary/25 text-primary mb-4">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h3 className="font-display text-xl font-bold text-foreground mb-3">
            Not sure which package fits?
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6 tracking-wide">
            DM me anytime on Instagram, WhatsApp, or Facebook. I'll help you choose or customize a package that fits your goals and your stage.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <motion.a
              href="https://instagram.com/k_0_p_a"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="px-6 py-2.5 text-sm font-display font-semibold text-primary border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-500 ease-in-out rounded-xl"
            >
              Instagram
            </motion.a>
            <motion.a
              href="https://wa.me/8801707887676"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="px-6 py-2.5 text-sm font-display font-semibold text-primary border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-500 ease-in-out rounded-xl"
            >
              WhatsApp
            </motion.a>
            <motion.a
              href="https://facebook.com/ahmed.shams"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="px-6 py-2.5 text-sm font-display font-semibold text-primary border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-500 ease-in-out rounded-xl"
            >
              Facebook
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;
