import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEOHead from '@/components/SEOHead';
import { blogPosts } from '@/data/blogPosts';

const BlogPage = () => {
  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <PageLayout>
      <SEOHead
        title="Blog | Graphic Design Tips & Branding Advice"
        description="Expert graphic design tips, branding advice, and web design insights from Ahmed Shams. Learn how to grow your business with professional design in Bangladesh."
        keywords="graphic design blog, branding tips Bangladesh, web design advice, social media design tips, design blog Dhaka"
        canonicalPath="/blog"
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
              BLOG
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Design Tips & <span className="gold-text gold-glow">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical advice on branding, social media design, and web development to help your business grow. Written for business owners in Bangladesh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 text-sm font-display tracking-wider bg-primary/15 text-primary rounded-full border border-primary/25"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="glass-card rounded-3xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-display tracking-wider bg-primary/20 text-primary rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-2">
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-primary hover:text-primary/80 font-display font-semibold text-sm inline-flex items-center gap-1 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
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
            <div className="inline-flex p-4 rounded-2xl bg-primary/15 border border-primary/25 text-primary mb-6">
              <BookOpen className="w-8 h-8" />
            </div>
            
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Apply These Tips?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              If you'd rather have a professional handle your branding, social media, or website—I'm here to help. Let's create something great together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/packages"
                className="px-8 py-4 metallic-gold text-primary-foreground font-display font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(var(--gold)/0.4)] inline-flex items-center justify-center gap-2"
              >
                View My Packages
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="glass-card px-8 py-4 font-display font-bold text-primary border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02]"
              >
                See My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogPage;
