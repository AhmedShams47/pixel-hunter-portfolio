import type { StaticImageData } from 'next/image';
import realEstateImg from '@/assets/projects/real-estate.jpg';
import perfumeImg from '@/assets/projects/perfume.jpg';
import jewelryImg from '@/assets/projects/jewelry.jpg';
import watchesImg from '@/assets/projects/watches.jpg';
import fashionImg from '@/assets/projects/fashion.jpg';
import pharmaceuticalImg from '@/assets/projects/pharmaceutical.jpg';
import fitnessImg from '@/assets/projects/fitness.jpg';
import electronicsImg from '@/assets/projects/electronics.jpg';
import makeupImg from '@/assets/projects/makeup.jpg';
import footwearImg from '@/assets/projects/footwear.jpg';
import agencyImg from '@/assets/projects/agency.jpg';
import automotiveImg from '@/assets/projects/automotive.jpg';
import motorcycleImg from '@/assets/projects/motorcycle.jpg';

export interface Project {
  id: string;
  title: string;
  industry: string;
  category: string;
  image: StaticImageData;
  demoUrl: string;
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
  'Beauty',
  'Luxury',
  'Fashion',
  'Healthcare',
  'Fitness',
  'Technology',
  'Automotive',
  'Creative',
];

export const projects: Project[] = [
  {
    id: 'real-estate-visuals',
    title: 'Real Estate Visuals',
    industry: 'Real Estate',
    category: 'Real Estate',
    image: realEstateImg,
    demoUrl: 'https://apex-residences.vercel.app',
    caseStudy: {
      clientType: 'Real Estate / Property Development',
      problem: 'Property businesses need a modern digital platform to showcase luxury properties and capture high value leads from potential buyers.',
      solution: 'A premium, immersive property showcase with cinematic visuals, interactive floor plans, and a seamless inquiry system. Ready to deploy for your real estate brand.',
      features: ['Property showcase gallery', 'Lead capture forms', 'WhatsApp integration', 'Virtual tour ready', 'SEO optimized', 'Speed optimized'],
      results: 'This sample demonstrates how we build trust, showcase properties with authority, and generate qualified real estate inquiries for your business.',
    },
  },
  {
    id: 'perfume-brand-visuals',
    title: 'Perfume Brand Visuals',
    industry: 'Perfume & Beauty',
    category: 'Beauty',
    image: perfumeImg,
    demoUrl: 'https://scented-sanctuary.vercel.app',
    caseStudy: {
      clientType: 'Perfume / Beauty Brand',
      problem: 'Fragrance brands need an online presence that matches the sensory elegance of their products.',
      solution: 'An atmospheric, visually rich ecommerce experience that evokes emotion and luxury. Perfect for perfume and beauty brands looking to sell online.',
      features: ['Product showcase', 'Ecommerce ready', 'WhatsApp ordering', 'Brand storytelling', 'Mobile optimized', 'SEO structure'],
      results: 'This sample shows how we elevate brand perception, drive product discovery, and convert visitors into loyal fragrance buyers.',
    },
  },
  {
    id: 'jewelry-store-visuals',
    title: 'Jewelry Store Visuals',
    industry: 'Luxury Jewelry',
    category: 'Luxury',
    image: jewelryImg,
    demoUrl: 'https://gilded-legacy-studio.vercel.app',
    caseStudy: {
      clientType: 'Luxury Jewelry / Studio',
      problem: 'Jewelry businesses need a digital storefront that reflects the craftsmanship and prestige of handmade pieces.',
      solution: 'A premium showcase with rich imagery, elegant typography, and a seamless browsing experience. Designed to make a jewelry brand feel like a premium destination.',
      features: ['Collection showcase', 'Inquiry system', 'WhatsApp integration', 'High res galleries', 'CMS ready', 'Speed optimized'],
      results: 'This sample demonstrates how we position jewelry brands as premium destinations that build customer trust and inquiries.',
    },
  },
  {
    id: 'watch-brand-visuals',
    title: 'Watch Brand Visuals',
    industry: 'Watches',
    category: 'Luxury',
    image: watchesImg,
    demoUrl: 'https://aura-timepieces.vercel.app',
    caseStudy: {
      clientType: 'Watch / Luxury Accessories',
      problem: 'Watch brands need to present their collection with maximum visual impact online to compete with established retailers.',
      solution: 'A sleek, dark themed showcase that highlights each timepiece with cinematic detail. Built to drive direct purchases and inquiries for your watch brand.',
      features: ['Product catalog', 'Detail zoom views', 'WhatsApp ordering', 'Brand narrative', 'Responsive design', 'SEO optimized'],
      results: 'This sample shows how we establish brand authority in the luxury watch space and drive qualified buyer engagement.',
    },
  },
  {
    id: 'fashion-brand-visuals',
    title: 'Fashion Brand Visuals',
    industry: 'Fashion',
    category: 'Fashion',
    image: fashionImg,
    demoUrl: 'https://elysian-realm.vercel.app',
    caseStudy: {
      clientType: 'Fashion / Clothing Brand',
      problem: 'Fashion brands need an editorial quality website that matches the sophistication of their collections.',
      solution: 'A fashion forward digital experience with dramatic visuals, smooth transitions, and layouts inspired by luxury fashion magazines. Tailored for your clothing brand.',
      features: ['Lookbook gallery', 'Collection pages', 'WhatsApp integration', 'Social media links', 'Mobile first', 'Speed optimized'],
      results: 'This sample demonstrates how we elevate a fashion brand\'s digital presence, attract customers, and drive social engagement.',
    },
  },
  {
    id: 'pharma-visuals',
    title: 'Pharmaceutical Visuals',
    industry: 'Pharmaceutical',
    category: 'Healthcare',
    image: pharmaceuticalImg,
    demoUrl: 'https://arogya-nexus.vercel.app',
    caseStudy: {
      clientType: 'Pharmaceutical / Healthcare',
      problem: 'Healthcare companies need a trustworthy digital platform to present products and services to professionals and patients.',
      solution: 'A clean, authoritative website with clear information architecture, trust indicators, and easy contact pathways. Built for healthcare and pharmaceutical brands.',
      features: ['Product information', 'Service pages', 'Contact system', 'Trust indicators', 'Accessibility focused', 'SEO optimized'],
      results: 'This sample shows how we establish credibility in the pharmaceutical industry and facilitate professional partnerships.',
    },
  },
  {
    id: 'fitness-gym-visuals',
    title: 'Fitness & Gym Visuals',
    industry: 'Fitness & Gym',
    category: 'Fitness',
    image: fitnessImg,
    demoUrl: 'https://fitnex-forge-hub.vercel.app',
    caseStudy: {
      clientType: 'Fitness / Gym',
      problem: 'Gyms and fitness brands need an energetic online presence to attract new members and showcase facilities.',
      solution: 'A high energy, visually dynamic website with bold imagery, membership tiers, and seamless booking. Designed for gyms, trainers, and fitness brands.',
      features: ['Membership plans', 'Class schedules', 'WhatsApp booking', 'Trainer profiles', 'Mobile optimized', 'Lead capture'],
      results: 'This sample demonstrates how we drive membership sign ups, showcase gym culture, and convert visitors into active members.',
    },
  },
  {
    id: 'electronics-tech-visuals',
    title: 'Electronics & Tech Visuals',
    industry: 'Electronics',
    category: 'Technology',
    image: electronicsImg,
    demoUrl: 'https://lumina-tech-phi.vercel.app',
    caseStudy: {
      clientType: 'Electronics / Technology',
      problem: 'Tech brands need a modern platform to showcase products with detailed specifications and easy purchasing.',
      solution: 'A futuristic, product centric website with detailed spec pages, comparison tools, and streamlined inquiry flows. Perfect for electronics and tech brands.',
      features: ['Product catalog', 'Spec comparison', 'WhatsApp ordering', 'Search functionality', 'Responsive design', 'Speed optimized'],
      results: 'This sample shows how we position tech brands as innovative leaders and increase qualified purchase inquiries.',
    },
  },
  {
    id: 'makeup-skincare-visuals',
    title: 'Makeup & Skincare Visuals',
    industry: 'Makeup & Skincare',
    category: 'Beauty',
    image: makeupImg,
    demoUrl: 'https://aura-glow-collective.vercel.app',
    caseStudy: {
      clientType: 'Makeup / Skincare',
      problem: 'Beauty brands need an online experience that captures the luxurious feel of their skincare and makeup products.',
      solution: 'An elegant, warm toned showcase that highlights product textures and ingredients. Designed to drive sales for makeup and skincare brands.',
      features: ['Product showcase', 'Ingredient details', 'WhatsApp ordering', 'Reviews section', 'Mobile optimized', 'SEO structure'],
      results: 'This sample demonstrates how we enhance brand desirability, educate customers, and drive direct sales inquiries.',
    },
  },
  {
    id: 'footwear-brand-visuals',
    title: 'Footwear Brand Visuals',
    industry: 'Footwear',
    category: 'Fashion',
    image: footwearImg,
    demoUrl: 'https://aura-footwear.vercel.app',
    caseStudy: {
      clientType: 'Footwear / Retail',
      problem: 'Footwear brands need a sleek digital storefront that showcases their collection with streetwear energy.',
      solution: 'A bold, contemporary ecommerce experience with dynamic product displays. Built to convert browsers into buyers for your shoe brand.',
      features: ['Product catalog', 'Size guides', 'WhatsApp ordering', 'Collection filters', 'Mobile first', 'Speed optimized'],
      results: 'This sample shows how we drive product discovery and increase conversion rates for footwear brands.',
    },
  },
  {
    id: 'agency-portfolio-visuals',
    title: 'Agency Portfolio Visuals',
    industry: 'Creative Agency',
    category: 'Creative',
    image: agencyImg,
    demoUrl: 'https://lumina-canvas-green.vercel.app',
    caseStudy: {
      clientType: 'Creative Agency / Studio',
      problem: 'Creative agencies need a portfolio website that demonstrates capabilities and attracts high value clients.',
      solution: 'An immersive, award worthy portfolio with case studies, team profiles, and compelling narrative. Perfect for agencies that want to stand out.',
      features: ['Portfolio showcase', 'Case studies', 'Team section', 'Contact forms', 'Blog ready', 'SEO optimized'],
      results: 'This sample demonstrates how we attract premium clients and establish creative authority for agencies and studios.',
    },
  },
  {
    id: 'automotive-showroom-visuals',
    title: 'Automotive Showroom Visuals',
    industry: 'Automotive',
    category: 'Automotive',
    image: automotiveImg,
    demoUrl: 'https://lux-avenue-showcase.vercel.app',
    caseStudy: {
      clientType: 'Automotive / Car Dealership',
      problem: 'Dealerships need a premium digital showroom that matches the luxury and performance of their vehicle inventory.',
      solution: 'A cinematic, high performance website with detailed vehicle pages and test drive booking. Built for car dealerships and automotive brands.',
      features: ['Vehicle showcase', 'Comparison tools', 'WhatsApp booking', 'Finance calculator', 'Responsive design', 'Speed optimized'],
      results: 'This sample shows how we position dealerships as premium destinations and capture qualified buyer leads.',
    },
  },
  {
    id: 'motorcycle-brand-visuals',
    title: 'Motorcycle Brand Visuals',
    industry: 'Motorcycles',
    category: 'Automotive',
    image: motorcycleImg,
    demoUrl: 'https://apex-rides.vercel.app',
    caseStudy: {
      clientType: 'Motorcycle / Powersports',
      problem: 'Motorcycle brands need an adrenaline fueled website that captures the thrill and engineering of their lineup.',
      solution: 'A bold, dynamic showcase with cinematic imagery and detailed spec sheets. Designed to excite motorcycle enthusiasts and drive test ride bookings.',
      features: ['Bike showcase', 'Spec comparison', 'WhatsApp inquiry', 'Dealer locator', 'Mobile optimized', 'SEO structure'],
      results: 'This sample demonstrates how we excite enthusiasts, drive dealership traffic, and generate bookings for powersports brands.',
    },
  },
];
