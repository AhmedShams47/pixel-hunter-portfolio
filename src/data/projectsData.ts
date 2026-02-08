import { Building2, Sparkles, Gem, Watch, Shirt, Pill, Dumbbell, Monitor, Palette, Footprints, PenTool, Car, Bike } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  industry: string;
  url: string;
  icon: LucideIcon;
  gradient: string;
  accentHue: number;
  caseStudy: {
    clientType: string;
    problem: string;
    solution: string;
    features: string[];
    results: string;
  };
}

export const categories = [
  'All',
  'Real Estate',
  'Beauty & Wellness',
  'Fashion & Luxury',
  'Automotive',
  'Technology',
  'Health & Fitness',
  'Creative',
];

export const projects: Project[] = [
  {
    id: 'apex-residences',
    title: 'Apex Residences',
    category: 'Real Estate',
    industry: 'Real Estate',
    url: 'https://apex-residences.vercel.app',
    icon: Building2,
    gradient: 'from-emerald-500/30 via-teal-600/20 to-cyan-700/30',
    accentHue: 160,
    caseStudy: {
      clientType: 'Real Estate / Property Development',
      problem: 'The client needed a modern digital platform to showcase luxury properties and capture qualified buyer leads in a competitive market.',
      solution: 'Designed an immersive, mobile-first property showcase with high-resolution imagery and streamlined lead capture funnels.',
      features: ['Interactive property showcase', 'Lead capture forms', 'WhatsApp integration', 'CMS ready architecture', 'SEO optimized structure', 'Speed optimized performance'],
      results: 'Built to increase buyer trust, improve property engagement, and generate qualified real estate inquiries.',
    },
  },
  {
    id: 'scented-sanctuary',
    title: 'Scented Sanctuary',
    category: 'Beauty & Wellness',
    industry: 'Perfume / Beauty',
    url: 'https://scented-sanctuary.vercel.app',
    icon: Sparkles,
    gradient: 'from-rose-500/30 via-pink-600/20 to-fuchsia-700/30',
    accentHue: 340,
    caseStudy: {
      clientType: 'Perfume / Beauty Brand',
      problem: 'The brand lacked a premium digital presence to convey the sensory experience of their fragrance collection online.',
      solution: 'Created an elegant, visually rich website with atmospheric design that translates scent into a visual and emotional experience.',
      features: ['Product showcase gallery', 'Fragrance category filters', 'WhatsApp ordering system', 'CMS ready architecture', 'SEO optimized structure', 'Mobile-first design'],
      results: 'Designed to elevate brand perception, drive online engagement, and convert visitors into fragrance enthusiasts.',
    },
  },
  {
    id: 'gilded-legacy',
    title: 'Gilded Legacy Studio',
    category: 'Fashion & Luxury',
    industry: 'Jewelry / Luxury Studio',
    url: 'https://gilded-legacy-studio.vercel.app',
    icon: Gem,
    gradient: 'from-amber-500/30 via-yellow-600/20 to-orange-700/30',
    accentHue: 45,
    caseStudy: {
      clientType: 'Jewelry / Luxury Studio',
      problem: 'A fine jewelry brand needed a website that matched the exclusivity and craftsmanship of their handcrafted collections.',
      solution: 'Developed a luxury-tier digital experience with dark themes, golden accents, and cinematic product presentation.',
      features: ['High-end product gallery', 'Custom inquiry forms', 'WhatsApp integration', 'Brand storytelling sections', 'SEO optimized structure', 'Speed optimized performance'],
      results: 'Built to position the brand as a premium destination for luxury jewelry and attract high-value clientele.',
    },
  },
  {
    id: 'aura-timepieces',
    title: 'Aura Timepieces',
    category: 'Fashion & Luxury',
    industry: 'Watches',
    url: 'https://aura-timepieces.vercel.app',
    icon: Watch,
    gradient: 'from-slate-500/30 via-zinc-600/20 to-neutral-700/30',
    accentHue: 220,
    caseStudy: {
      clientType: 'Watch / Timepiece Brand',
      problem: 'The watch brand needed a sophisticated platform to showcase precision craftsmanship and attract discerning collectors.',
      solution: 'Designed a minimal yet powerful website with emphasis on product photography, technical specifications, and brand heritage.',
      features: ['Product showcase with specs', 'Collection filters', 'WhatsApp integration', 'CMS ready architecture', 'SEO optimized structure', 'Responsive design'],
      results: 'Crafted to build collector trust, showcase horological excellence, and drive premium purchase inquiries.',
    },
  },
  {
    id: 'elysian-realm',
    title: 'Elysian Realm',
    category: 'Fashion & Luxury',
    industry: 'Clothing / Fashion',
    url: 'https://elysian-realm.vercel.app',
    icon: Shirt,
    gradient: 'from-violet-500/30 via-purple-600/20 to-indigo-700/30',
    accentHue: 280,
    caseStudy: {
      clientType: 'Clothing / Fashion Brand',
      problem: 'A fashion label needed a digital storefront that reflected their avant-garde aesthetic and appealed to style-conscious consumers.',
      solution: 'Built an editorial-style website with lookbook galleries, seasonal collections, and seamless shopping experience.',
      features: ['Lookbook galleries', 'Collection showcases', 'WhatsApp ordering system', 'CMS ready architecture', 'SEO optimized structure', 'Speed optimized performance'],
      results: 'Designed to establish the brand as a fashion-forward destination and drive conversions through visual storytelling.',
    },
  },
  {
    id: 'arogya-nexus',
    title: 'Arogya Nexus',
    category: 'Health & Fitness',
    industry: 'Pharmaceutical',
    url: 'https://arogya-nexus.vercel.app',
    icon: Pill,
    gradient: 'from-blue-500/30 via-cyan-600/20 to-sky-700/30',
    accentHue: 200,
    caseStudy: {
      clientType: 'Pharmaceutical / Healthcare',
      problem: 'A pharmaceutical company needed a trustworthy platform to present their products with medical-grade professionalism.',
      solution: 'Created a clean, authoritative website with structured product information, certifications display, and easy inquiry access.',
      features: ['Product catalog', 'Medical information sections', 'WhatsApp integration', 'CMS ready architecture', 'SEO optimized structure', 'Accessibility focused'],
      results: 'Built to inspire trust in healthcare professionals and patients while streamlining product discovery and inquiries.',
    },
  },
  {
    id: 'fitnex-forge',
    title: 'FitNex Forge Hub',
    category: 'Health & Fitness',
    industry: 'Gym / Fitness',
    url: 'https://fitnex-forge-hub.vercel.app',
    icon: Dumbbell,
    gradient: 'from-red-500/30 via-orange-600/20 to-amber-700/30',
    accentHue: 15,
    caseStudy: {
      clientType: 'Gym / Fitness Center',
      problem: 'A fitness center needed an energetic digital presence to attract new members and showcase their training programs.',
      solution: 'Designed a high-energy website with bold typography, dynamic imagery, and streamlined membership inquiry flows.',
      features: ['Program showcases', 'Membership inquiry forms', 'WhatsApp integration', 'Trainer profiles', 'SEO optimized structure', 'Speed optimized performance'],
      results: 'Crafted to boost membership sign-ups, showcase facility excellence, and build an engaged fitness community.',
    },
  },
  {
    id: 'lumina-tech',
    title: 'Lumina Tech',
    category: 'Technology',
    industry: 'Electronics',
    url: 'https://lumina-tech-phi.vercel.app',
    icon: Monitor,
    gradient: 'from-cyan-500/30 via-blue-600/20 to-indigo-700/30',
    accentHue: 210,
    caseStudy: {
      clientType: 'Electronics / Technology',
      problem: 'An electronics brand needed a sleek platform to showcase tech products with detailed specifications and comparison features.',
      solution: 'Built a modern, tech-forward website with product grids, specification highlights, and intuitive navigation patterns.',
      features: ['Product showcase grid', 'Specification displays', 'WhatsApp integration', 'CMS ready architecture', 'SEO optimized structure', 'Speed optimized performance'],
      results: 'Designed to position the brand as a trusted tech retailer and drive product inquiries through clear, informative presentation.',
    },
  },
  {
    id: 'aura-glow',
    title: 'Aura Glow Collective',
    category: 'Beauty & Wellness',
    industry: 'Makeup / Skincare',
    url: 'https://aura-glow-collective.vercel.app',
    icon: Palette,
    gradient: 'from-pink-500/30 via-rose-600/20 to-red-700/30',
    accentHue: 350,
    caseStudy: {
      clientType: 'Makeup / Skincare Brand',
      problem: 'A skincare brand needed an aesthetic digital presence that reflected their clean beauty philosophy and product quality.',
      solution: 'Created a soft, elegant website with product storytelling, ingredient highlights, and beauty-focused visual design.',
      features: ['Product showcase', 'Ingredient highlights', 'WhatsApp ordering system', 'CMS ready architecture', 'SEO optimized structure', 'Mobile-first design'],
      results: 'Built to enhance brand credibility, educate consumers on product benefits, and drive skincare purchase inquiries.',
    },
  },
  {
    id: 'aura-footwear',
    title: 'Aura Footwear',
    category: 'Fashion & Luxury',
    industry: 'Footwear',
    url: 'https://aura-footwear.vercel.app',
    icon: Footprints,
    gradient: 'from-stone-500/30 via-neutral-600/20 to-zinc-700/30',
    accentHue: 30,
    caseStudy: {
      clientType: 'Footwear / Shoe Brand',
      problem: 'A footwear brand needed a stylish platform to showcase collections and convert browsers into buyers.',
      solution: 'Designed a fashion-forward website with collection grids, size guides, and seamless inquiry-to-purchase flows.',
      features: ['Collection showcase', 'Size & fit guides', 'WhatsApp ordering system', 'CMS ready architecture', 'SEO optimized structure', 'Speed optimized performance'],
      results: 'Crafted to elevate the shopping experience, reduce purchase friction, and increase conversion rates.',
    },
  },
  {
    id: 'lumina-canvas',
    title: 'Lumina Canvas',
    category: 'Creative',
    industry: 'Creative Agency',
    url: 'https://lumina-canvas-green.vercel.app',
    icon: PenTool,
    gradient: 'from-lime-500/30 via-green-600/20 to-emerald-700/30',
    accentHue: 140,
    caseStudy: {
      clientType: 'Creative / Design Agency',
      problem: 'A creative agency needed a portfolio website that showcased their work and attracted high-quality clients.',
      solution: 'Built a visually striking portfolio with case study layouts, team profiles, and compelling project presentations.',
      features: ['Portfolio showcase', 'Case study layouts', 'WhatsApp integration', 'CMS ready architecture', 'SEO optimized structure', 'Speed optimized performance'],
      results: 'Designed to establish creative authority, attract premium clients, and showcase the agency\'s versatile capabilities.',
    },
  },
  {
    id: 'lux-avenue',
    title: 'Lux Avenue Showcase',
    category: 'Automotive',
    industry: 'Car / Convertible',
    url: 'https://lux-avenue-showcase.vercel.app',
    icon: Car,
    gradient: 'from-gray-500/30 via-slate-600/20 to-zinc-800/30',
    accentHue: 0,
    caseStudy: {
      clientType: 'Automotive / Luxury Cars',
      problem: 'A luxury car dealership needed an immersive digital showroom to present their exclusive vehicle collection online.',
      solution: 'Created a cinematic, dark-themed website with vehicle showcases, specification displays, and test drive booking.',
      features: ['Vehicle showcase gallery', 'Specification displays', 'Test drive booking', 'WhatsApp integration', 'SEO optimized structure', 'Speed optimized performance'],
      results: 'Built to create an aspirational digital experience that drives showroom visits and qualified buyer inquiries.',
    },
  },
  {
    id: 'apex-rides',
    title: 'Apex Rides',
    category: 'Automotive',
    industry: 'Bike / Motorcycle',
    url: 'https://apex-rides.vercel.app',
    icon: Bike,
    gradient: 'from-orange-500/30 via-red-600/20 to-rose-700/30',
    accentHue: 20,
    caseStudy: {
      clientType: 'Motorcycle / Bike Retailer',
      problem: 'A motorcycle brand needed a bold platform to showcase their lineup and appeal to passionate riders.',
      solution: 'Designed an adrenaline-fueled website with dynamic visuals, bike specifications, and streamlined inquiry forms.',
      features: ['Bike showcase gallery', 'Specification comparison', 'WhatsApp integration', 'CMS ready architecture', 'SEO optimized structure', 'Speed optimized performance'],
      results: 'Crafted to ignite rider passion, showcase engineering excellence, and convert enthusiasts into customers.',
    },
  },
];
