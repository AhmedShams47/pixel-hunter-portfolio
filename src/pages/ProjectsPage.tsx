import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Palette, Share2, Globe, Quote, ExternalLink, ArrowRight, CheckCircle } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEOHead from '@/components/SEOHead';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Branding & Graphic Design',
      type: 'Branding',
      icon: <Palette className="w-6 h-6" />,
      description: 'Complete brand identities including logos, color systems, typography, business cards, and marketing materials. I create visual systems that make your business instantly recognizable and professional.',
      benefits: [
        'Stand out from competitors with unique visuals',
        'Build customer trust with professional branding',
        'Get print-ready files for all uses'
      ],
      feedback: '"The branding work exceeded our expectations. Clean, professional, and perfectly captures our vision."',
      gradient: 'from-primary/20 to-accent/20',
    },
    {
      title: 'Social Media Post Design',
      type: 'Social Media',
      icon: <Share2 className="w-6 h-6" />,
      description: 'Scroll-stopping social media graphics, stories, and content strategies designed to grow your audience. From Instagram and Facebook to LinkedIn—visuals that get likes, shares, and followers.',
      benefits: [
        'Increase engagement with eye-catching posts',
        'Maintain brand consistency across platforms',
        'Save time with ready-to-post designs'
      ],
      feedback: '"Our engagement increased significantly after working with Shams Visuals. The content is always on brand and creative."',
      gradient: 'from-orange-500/20 to-amber-500/20',
    },
    {
      title: 'Website Design & Development',
      type: 'Web Design',
      icon: <Globe className="w-6 h-6" />,
      description: 'Modern, fast, mobile-responsive websites that convert visitors into customers. Clean UI, smooth animations, and SEO-friendly structure to help you rank on Google and grow your online presence.',
      benefits: [
        'Get found on Google with SEO-optimized sites',
        'Convert visitors with professional design',
        'Work perfectly on mobile and desktop'
      ],
      feedback: '"The website is exactly what we needed—fast, beautiful, and easy to navigate. Highly recommended."',
      gradient: 'from-emerald-500/20 to-teal-500/20',
    },
  ];

  const artworks = [
    'Logo Collections',
    'Poster Designs',
    'Feed Layouts',
    'UI Screens',
    'Brand Boards',
    'Social Templates',
  ];

  return (
    <PageLayout>
      <SEOHead
        title="Portfolio | Social Media & Website Design in Bangladesh"
        description="Explore branding, social media post designs, and website design projects by Ahmed Shams. Professional graphic design services in Dhaka for businesses across Bangladesh."
        keywords="portfolio graphic designer Dhaka, social media post design Dhaka, website design service Bangladesh, logo design Bangladesh, branding projects"
        canonicalPath="/projects"
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
              MY WORK
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Design <span className="gold-text gold-glow">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real projects for real businesses in Bangladesh. From complete brand identities to social media content to full website builds—here's how I help businesses grow with design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="glass-card p-8 md:p-10 rounded-3xl overflow-hidden relative group"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-2xl bg-primary/15 border border-primary/25 text-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-shadow duration-300">
                      {project.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-display tracking-wider bg-primary/20 text-primary rounded-full">
                        {project.type}
                      </span>
                    </div>
                    
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Benefits List */}
                    <ul className="space-y-2 mb-6">
                      {project.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Feedback */}
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-secondary/30 border border-border/50">
                      <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground italic">
                        {project.feedback}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Design Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Design <span className="text-primary">Categories</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A sample of the different types of visual work I create for businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {artworks.map((artwork, index) => (
              <motion.div
                key={artwork}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                className="glass-card p-6 rounded-2xl text-center group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {artwork}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-card p-10 md:p-14 rounded-3xl text-center"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              If you like what you see and want stunning visuals for your own business, let's talk. Check my packages or send me a message to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/packages"
                className="px-8 py-4 metallic-gold text-primary-foreground font-display font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(var(--gold)/0.4)] inline-flex items-center justify-center gap-2"
              >
                View Packages
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/8801707887676?text=Hi%20Ahmed!%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-8 py-4 font-display font-bold text-primary border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02]"
              >
                Message on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectsPage;
