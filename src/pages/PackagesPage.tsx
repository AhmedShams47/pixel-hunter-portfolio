import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Crown, Palette, Share2, Globe, MessageCircle, Instagram, Phone, Facebook, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEOHead from '@/components/SEOHead';

const PackagesPage = () => {
  const services = [
    {
      name: 'Branding & Graphic Design',
      icon: <Palette className="w-6 h-6" />,
      description: 'Professional brand identities that make your business stand out',
      packages: [
        { 
          tier: 'Basic', 
          desc: 'Perfect for startups needing a professional logo and basic brand materials to launch with confidence.',
          forWho: 'New businesses, personal brands',
          results: 'Look professional from day one'
        },
        { 
          tier: 'Pro', 
          desc: 'Complete brand identity with logo, colors, typography, and marketing materials for growing businesses.',
          forWho: 'Established businesses, rebrands',
          results: 'Stand out and attract more customers'
        },
        { 
          tier: 'Unlimited', 
          desc: 'Your ongoing creative partner with continuous design updates, priority support, and brand evolution.',
          forWho: 'Active brands, agencies',
          results: 'Always fresh, always on-brand'
        },
      ],
    },
    {
      name: 'Social Media Design & Management',
      icon: <Share2 className="w-6 h-6" />,
      description: 'Content that grows your audience and drives engagement',
      packages: [
        { 
          tier: 'Basic', 
          desc: 'Regular social media posts with cohesive visual style to maintain your online presence.',
          forWho: 'Small businesses, solopreneurs',
          results: 'Consistent posting, professional look'
        },
        { 
          tier: 'Pro', 
          desc: 'Full content strategy with post design, stories, reels covers, and engagement-focused visuals.',
          forWho: 'Growing brands, influencers',
          results: 'More followers, more engagement'
        },
        { 
          tier: 'Unlimited', 
          desc: 'Complete social media management with scheduling, optimization, and performance-based adjustments.',
          forWho: 'Busy entrepreneurs, teams',
          results: 'Hands-off growth, maximum reach'
        },
      ],
    },
    {
      name: 'Website Design & Development',
      icon: <Globe className="w-6 h-6" />,
      description: 'Modern websites that convert visitors into customers',
      packages: [
        { 
          tier: 'Basic', 
          desc: 'Clean, responsive single-page or simple website to establish your online presence.',
          forWho: 'Freelancers, small shops',
          results: 'Get online fast and look professional'
        },
        { 
          tier: 'Pro', 
          desc: 'Multi-page website with custom sections, SEO optimization, and strong visual design.',
          forWho: 'Service businesses, portfolios',
          results: 'Rank on Google, get more leads'
        },
        { 
          tier: 'Unlimited', 
          desc: 'Long-term web partner with continuous improvements, redesigns, and full technical support.',
          forWho: 'Active businesses, e-commerce',
          results: 'Always improving, always converting'
        },
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
    { icon: <Instagram className="w-5 h-5" />, label: 'DM on Instagram', href: 'https://www.instagram.com/k_0_p_a/', helper: 'Best for quick ideas and project questions.', primary: true },
    { icon: <Phone className="w-5 h-5" />, label: 'Chat on WhatsApp', href: 'https://wa.me/8801707887676?text=Hi%20Ahmed!%20I%27m%20on%20your%20website%20and%20I%27d%20like%20to%20know%20more%20about%20this%20package.%20Can%20you%20share%20the%20details%20and%20what%20you%20recommend%20for%20my%20brand%3F', helper: 'Great for serious inquiries and fast replies.', primary: false },
    { icon: <Facebook className="w-5 h-5" />, label: 'Message on Facebook', href: 'https://www.facebook.com/AhmedShams164', helper: 'Perfect if you found me on Facebook.', primary: false },
    { icon: <Mail className="w-5 h-5" />, label: 'Email Me', href: 'mailto:shamsvisuals@gmail.com', helper: 'Send a detailed brief or proposal.', primary: false },
  ];

  return (
    <PageLayout>
      <SEOHead
        title="Packages & Pricing | Graphic Design Services Dhaka"
        description="Affordable graphic design, social media management, and website design packages in Bangladesh. Get professional branding, social content, and web development from Ahmed Shams."
        keywords="graphic design packages Dhaka, social media management pricing Bangladesh, website design cost Bangladesh, branding packages, design services pricing"
        canonicalPath="/packages"
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
              PACKAGES
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Design <span className="gold-text gold-glow">Packages</span> That Fit Your Business
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're just starting or scaling up, I offer flexible packages for branding, social media, and web development. Choose what fits your goals, then message me for exact pricing.
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
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-primary/15 border border-primary/25 text-primary inline-flex">
                  {service.icon}
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {service.name}
                  </h2>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
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
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Best for:</strong> {pkg.forWho}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Result:</strong> {pkg.results}</span>
                      </div>
                    </div>
                    <p className="text-xs text-primary/80 font-display">
                      Want this? Message me with the package name ↓
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
              <strong className="text-foreground">Custom pricing</strong> — I create offers based on your specific goals, not fixed price tags. Message me with what you need (example: <span className="text-primary font-semibold">"Pro – Social Media"</span>) and I'll reply with options that fit your budget.
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
              Ready to Get <span className="text-primary">Started</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              No complicated forms. Just message me on Instagram, WhatsApp, Facebook, or email. Tell me what you need, and I'll help you pick the right package for your budget and goals.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Contact Ahmed Shams via ${method.label}`}
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
              Every message comes directly to me, Ahmed—not a bot, not a team. I read everything and reply quickly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA with internal links */}
      <section className="py-8 px-6 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground">
              Not sure which package is right? Just send a quick <span className="text-primary">"Hi"</span> and I'll help you decide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/projects" 
                className="text-primary hover:text-primary/80 font-display font-semibold inline-flex items-center gap-2 transition-colors"
              >
                See my portfolio first
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/about" 
                className="text-primary hover:text-primary/80 font-display font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Learn about my process
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PackagesPage;
