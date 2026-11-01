import type { Metadata, Viewport } from 'next';
import Providers from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocialBar from '@/components/FloatingSocialBar';
import RamadanBanner from '@/components/RamadanBanner';
import ParticleBackground from '@/components/ParticleBackground';
import { SITE } from '@/lib/site';
import localFont from 'next/font/local';
import './globals.css';

// Self-hosted, latin-subset variable fonts: no third-party request, preloaded by Next, swap fallback.
const cinzel = localFont({ src: './fonts/cinzel-latin-wght-normal.woff2', weight: '400 900', variable: '--font-cinzel', display: 'swap' });
const cormorant = localFont({
  src: [
    { path: './fonts/cormorant-garamond-latin-wght-normal.woff2', style: 'normal' },
    { path: './fonts/cormorant-garamond-latin-wght-italic.woff2', style: 'italic' },
  ],
  weight: '300 700', variable: '--font-cormorant', display: 'swap',
});

export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#0A0512' };

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — ${SITE.person} | ${SITE.jobTitle}`, template: `%s | ${SITE.name}` },
  description: 'Ahmed Shams (Shams Visuals) is a web developer and UI/UX designer in Dhaka, Bangladesh, building premium, cinematic websites, brand identities and motion work.',
  applicationName: SITE.name,
  authors: [{ name: SITE.person, url: SITE.url }],
  creator: SITE.person,
  openGraph: {
    type: 'website', locale: 'en_US', url: SITE.url, siteName: SITE.name,
    title: `${SITE.name} — ${SITE.person}`,
    description: 'Web development, UI/UX design and brand work from Dhaka, Bangladesh.',
    images: [{ url: '/images/og.jpg', width: 1200, height: 630, alt: 'Ahmed Shams — Shams Visuals: web developer and UI/UX designer in Dhaka' }],
  },
  twitter: { card: 'summary_large_image', title: `${SITE.name} — ${SITE.person}`, description: 'Web developer and UI/UX designer based in Dhaka, Bangladesh.', images: ['/images/og.jpg'] },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person', '@id': `${SITE.url}/#person`, name: SITE.person, alternateName: SITE.name, url: SITE.url,
      jobTitle: SITE.jobTitle, email: `mailto:${SITE.email}`,
      address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
      knowsAbout: ['Web development', 'UI/UX design', 'Branding', 'Digital marketing', 'Motion graphics'],
      sameAs: [SITE.instagram, SITE.facebook],
    },
    { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { '@id': `${SITE.url}/#person` }, inLanguage: 'en' },
    {
      '@type': 'ProfessionalService', '@id': `${SITE.url}/#service`, name: SITE.name, url: SITE.url,
      founder: { '@id': `${SITE.url}/#person` }, areaServed: 'Bangladesh',
      address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
      serviceType: ['Web design and development', 'UI/UX design', 'Brand identity', 'Motion and 3D graphics'],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable}`}>
      <body>
        <noscript>
          <style>{`[style*="opacity: 0"],[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10000] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-primary-foreground">Skip to content</a>
        <Providers>
          <ParticleBackground />
          <FloatingSocialBar />
          <Navbar />
          <main id="main">{children}</main>
          {SITE.promoBannerEnabled && <RamadanBanner />}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
