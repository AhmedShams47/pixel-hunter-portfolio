import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEOHead from '@/components/SEOHead';
import { getPostBySlug, getRelatedPosts, blogPosts } from '@/data/blogPosts';
import ReactMarkdown from 'react-markdown';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 2);
  const currentIndex = blogPosts.findIndex(p => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const shareUrl = `https://shamsvisuals.com/blog/${post.slug}`;

  return (
    <PageLayout>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.keywords}
        canonicalPath={`/blog/${post.slug}`}
      />

      {/* Article Header */}
      <article className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-display">Back to Blog</span>
            </Link>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 text-xs font-display tracking-wider bg-primary/20 text-primary rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pb-8 border-b border-border/50">
              <div className="w-12 h-12 rounded-full metallic-gold flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">AS</span>
              </div>
              <div>
                <p className="font-display font-semibold text-foreground">Ahmed Shams</p>
                <p className="text-sm text-muted-foreground">Graphic Designer & Web Developer</p>
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="prose prose-invert prose-lg max-w-none mt-10"
          >
            <div className="blog-content text-muted-foreground leading-relaxed space-y-6">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-3">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="space-y-2 mb-6 ml-4">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{children}</span>
                    </li>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-foreground font-semibold">{children}</strong>
                  ),
                  a: ({ href, children }) => (
                    <Link
                      to={href || '#'}
                      className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                    >
                      {children}
                    </Link>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </motion.div>

          {/* Share & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-12 pt-8 border-t border-border/50"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Share this article:</span>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  <Share2 className="w-4 h-4" />
                </a>
              </div>
              <Link
                to="/packages"
                className="px-6 py-3 metallic-prime text-primary-foreground font-display font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] text-sm inline-flex items-center gap-2"
              >
                Need Help? View Packages
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Post Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-12 grid sm:grid-cols-2 gap-4"
          >
            {prevPost && (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
              >
                <span className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                  <ArrowLeft className="w-3 h-3" /> Previous
                </span>
                <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {prevPost.title}
                </h4>
              </Link>
            )}
            {nextPost && (
              <Link
                to={`/blog/${nextPost.slug}`}
                className={`glass-card p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group ${!prevPost ? 'sm:col-start-2' : ''}`}
              >
                <span className="text-xs text-muted-foreground flex items-center gap-1 justify-end mb-2">
                  Next <ArrowRight className="w-3 h-3" />
                </span>
                <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors text-right line-clamp-2">
                  {nextPost.title}
                </h4>
              </Link>
            )}
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-6 border-t border-border/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Related <span className="text-primary">Articles</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
                >
                  <span className="px-3 py-1 text-xs font-display tracking-wider bg-primary/20 text-primary rounded-full">
                    {relatedPost.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-4 mb-2 group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
};

export default BlogPostPage;
