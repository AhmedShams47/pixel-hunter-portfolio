import { motion } from 'framer-motion';
import { Sparkles, Rocket, Crown, CheckCircle2 } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '25,000',
    currency: 'BDT',
    tagline: 'For small or local businesses',
    icon: Sparkles,
    popular: false,
    features: [
      '3–5 pages',
      'Responsive design',
      'Contact / WhatsApp',
      'Basic SEO',
      'Standard delivery',
    ],
  },
  {
    name: 'Growth',
    price: '65,000',
    currency: 'BDT',
    tagline: 'For growing companies ready to scale',
    icon: Rocket,
    popular: true,
    badge: 'MOST POPULAR',
    features: [
      'Everything in Starter',
      'More pages & sections',
      'Advanced UI/UX',
      'Speed optimization',
      'Lead capture system',
      'Priority support',
    ],
  },
  {
    name: 'Premium',
    price: '1,50,000',
    currency: 'BDT',
    startingFrom: true,
    tagline: 'For brands that want authority and advanced systems',
    icon: Crown,
    popular: false,
    features: [
      'Custom strategy',
      'Premium animations',
      'Booking or e-commerce',
      'Marketing funnel',
      'Analytics integration',
      'Dedicated support',
    ],
  },
];

const PricingCards = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className={`relative glass-card rounded-3xl p-8 flex flex-col transition-all duration-500 group hover:border-primary/60 ${
                plan.popular
                  ? 'border-primary/50 ring-1 ring-primary/20 md:scale-105 md:-my-4 shadow-[0_0_40px_hsl(var(--prime)/0.15)]'
                  : ''
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 text-xs font-display tracking-widest metallic-prime text-primary-foreground rounded-full shadow-[0_0_20px_hsl(var(--prime)/0.3)]">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Icon + Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <plan.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {plan.name}
                </h3>
              </div>

              {/* Tagline */}
              <p className="text-sm text-muted-foreground mb-6">
                {plan.tagline}
              </p>

              {/* Price */}
              <div className="mb-6">
                {plan.startingFrom && (
                  <span className="text-xs text-muted-foreground font-display tracking-wider">
                    Starting from
                  </span>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-foreground">
                    ৳{plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {plan.currency}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/8801707887676?text=Hi%20Ahmed!%20I'm%20interested%20in%20the%20${plan.name}%20package.%20Can%20you%20share%20more%20details?`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-4 rounded-2xl font-display font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                  plan.popular
                    ? 'metallic-prime text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--prime)/0.4)]'
                    : 'glass-card text-primary border border-primary/30 hover:border-primary/60'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-muted-foreground">
            Need something custom?{' '}
            <a
              href="https://wa.me/8801707887676?text=Hi%20Ahmed!%20I%20need%20a%20custom%20quote%20for%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Request a tailored quote →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCards;
