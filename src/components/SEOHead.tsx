import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
}

/**
 * SEO component that dynamically updates document head for each page.
 * Call this at the top of each page component to set unique meta tags.
 */
const SEOHead = ({
  title,
  description,
  keywords,
  canonicalPath = '/',
  ogImage = '/og-image.jpg',
}: SEOHeadProps) => {
  const baseUrl = 'https://shamsvisuals.com';
  const fullUrl = `${baseUrl}${canonicalPath}`;
  const fullTitle = `${title} | Shams Visuals`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const updateMeta = (selector: string, content: string, attr = 'name') => {
      let meta = document.querySelector(`meta[${attr}="${selector}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute(attr, selector);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Update primary meta tags
    updateMeta('description', description);
    if (keywords) {
      updateMeta('keywords', keywords);
    }

    // Update Open Graph tags
    updateMeta('og:title', fullTitle, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:url', fullUrl, 'property');
    updateMeta('og:image', `${baseUrl}${ogImage}`, 'property');

    // Update Twitter tags
    updateMeta('twitter:title', fullTitle, 'name');
    updateMeta('twitter:description', description, 'name');
    updateMeta('twitter:url', fullUrl, 'name');
    updateMeta('twitter:image', `${baseUrl}${ogImage}`, 'name');

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', fullUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', fullUrl);
      document.head.appendChild(canonical);
    }
  }, [title, description, keywords, fullUrl, ogImage, fullTitle]);

  return null;
};

export default SEOHead;
