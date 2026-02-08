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
  image: string;
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
    id: 'apex-residences',
    title: 'Apex Residences',
    industry: 'Real Estate',
    category: 'Real Estate',
    image: realEstateImg,
    demoUrl: 'https://apex-residences.vercel.app',
    caseStudy: {
      clientType: 'Real Estate / Property Development',
      problem: 'The business needed a modern digital platform to showcase luxury properties and capture high-value leads from potential buyers.',
      solution: 'Designed a premium, immersive property showcase with cinematic visuals, interactive floor plans, and a seamless inquiry system optimized for conversions.',
      features: ['Property showcase gallery', 'Lead capture forms', 'WhatsApp integration', 'Virtual tour ready', 'SEO optimized', 'Speed optimized'],
      results: 'Built to increase buyer trust, showcase properties with authority, and generate qualified real estate inquiries.',
    },
  },
  {
    id: 'scented-sanctuary',
    title: 'Scented Sanctuary',
    industry: 'Perfume & Beauty',
    category: 'Beauty',
    image: perfumeImg,
    demoUrl: 'https://scented-sanctuary.vercel.app',
    caseStudy: {
      clientType: 'Perfume / Beauty Brand',
      problem: 'The brand lacked an online presence that matched the sensory elegance of their fragrance products.',
      solution: 'Created an atmospheric, visually rich e-commerce experience that evokes emotion and luxury through design, color, and motion.',
      features: ['Product showcase', 'E-commerce ready', 'WhatsApp ordering', 'Brand storytelling', 'Mobile optimized', 'SEO structure'],
      results: 'Built to elevate brand perception, drive product discovery, and convert visitors into loyal fragrance buyers.',
    },
  },
  {
    id: 'gilded-legacy',
    title: 'Gilded Legacy Studio',
    industry: 'Luxury Jewelry',
    category: 'Luxury',
    image: jewelryImg,
    demoUrl: 'https://gilded-legacy-studio.vercel.app',
    caseStudy: {
      clientType: 'Luxury Jewelry / Studio',
      problem: 'The studio needed a digital storefront that reflected the craftsmanship and prestige of their handmade jewelry pieces.',
      solution: 'Designed a premium showcase with rich imagery, elegant typography, and a seamless browsing experience worthy of a luxury brand.',
      features: ['Collection showcase', 'Inquiry system', 'WhatsApp integration', 'High-res galleries', 'CMS ready', 'Speed optimized'],
      results: 'Built to position the brand as a premium destination, increase customer inquiries, and build long-term trust.',
    },
  },
  {
    id: 'aura-timepieces',
    title: 'Aura Timepieces',
    industry: 'Watches',
    category: 'Luxury',
    image: watchesImg,
    demoUrl: 'https://aura-timepieces.vercel.app',
    caseStudy: {
      clientType: 'Watch / Luxury Accessories',
      problem: 'The brand needed to compete with established watch retailers by presenting their collection with maximum visual impact online.',
      solution: 'Built a sleek, dark-themed showcase that highlights each timepiece with cinematic detail and encourages direct purchases or inquiries.',
      features: ['Product catalog', 'Detail zoom views', 'WhatsApp ordering', 'Brand narrative', 'Responsive design', 'SEO optimized'],
      results: 'Built to establish brand authority in the luxury watch space and drive qualified buyer engagement.',
    },
  },
  {
    id: 'elysian-realm',
    title: 'Elysian Realm',
    industry: 'Fashion',
    category: 'Fashion',
    image: fashionImg,
    demoUrl: 'https://elysian-realm.vercel.app',
    caseStudy: {
      clientType: 'Fashion / Clothing Brand',
      problem: 'The fashion brand needed an editorial-quality website that matched the sophistication of their runway collections.',
      solution: 'Designed a fashion-forward digital experience with dramatic visuals, smooth transitions, and a layout inspired by luxury fashion magazines.',
      features: ['Lookbook gallery', 'Collection pages', 'WhatsApp integration', 'Social media links', 'Mobile first', 'Speed optimized'],
      results: 'Built to elevate the brand\'s digital presence, attract fashion-conscious customers, and drive social engagement.',
    },
  },
  {
    id: 'arogya-nexus',
    title: 'Arogya Nexus',
    industry: 'Pharmaceutical',
    category: 'Healthcare',
    image: pharmaceuticalImg,
    demoUrl: 'https://arogya-nexus.vercel.app',
    caseStudy: {
      clientType: 'Pharmaceutical / Healthcare',
      problem: 'The company needed a trustworthy digital platform to present their healthcare products and services to a professional audience.',
      solution: 'Created a clean, authoritative website with clear information architecture, trust indicators, and easy contact pathways for healthcare professionals.',
      features: ['Product information', 'Service pages', 'Contact system', 'Trust indicators', 'Accessibility focused', 'SEO optimized'],
      results: 'Built to establish credibility in the pharmaceutical industry and facilitate professional partnerships.',
    },
  },
  {
    id: 'fitnex-forge',
    title: 'Fitnex Forge',
    industry: 'Fitness & Gym',
    category: 'Fitness',
    image: fitnessImg,
    demoUrl: 'https://fitnex-forge-hub.vercel.app',
    caseStudy: {
      clientType: 'Fitness / Gym',
      problem: 'The gym needed an energetic online presence to attract new members and showcase their facilities and training programs.',
      solution: 'Designed a high-energy, visually dynamic website with bold imagery, membership tiers, and seamless booking integration.',
      features: ['Membership plans', 'Class schedules', 'WhatsApp booking', 'Trainer profiles', 'Mobile optimized', 'Lead capture'],
      results: 'Built to drive membership sign-ups, showcase gym culture, and convert visitors into active members.',
    },
  },
  {
    id: 'lumina-tech',
    title: 'Lumina Tech',
    industry: 'Electronics',
    category: 'Technology',
    image: electronicsImg,
    demoUrl: 'https://lumina-tech-phi.vercel.app',
    caseStudy: {
      clientType: 'Electronics / Technology',
      problem: 'The tech brand needed a modern platform to showcase their product lineup with detailed specifications and easy purchasing pathways.',
      solution: 'Built a futuristic, product-centric website with detailed spec pages, comparison tools, and streamlined inquiry flows.',
      features: ['Product catalog', 'Spec comparison', 'WhatsApp ordering', 'Search functionality', 'Responsive design', 'Speed optimized'],
      results: 'Built to position the brand as innovative, drive product exploration, and increase qualified purchase inquiries.',
    },
  },
  {
    id: 'aura-glow',
    title: 'Aura Glow Collective',
    industry: 'Makeup & Skincare',
    category: 'Beauty',
    image: makeupImg,
    demoUrl: 'https://aura-glow-collective.vercel.app',
    caseStudy: {
      clientType: 'Makeup / Skincare',
      problem: 'The beauty brand needed an online experience that captured the luxurious feel of their skincare and makeup products.',
      solution: 'Designed an elegant, warm-toned showcase that highlights product textures and ingredients with a premium shopping experience.',
      features: ['Product showcase', 'Ingredient details', 'WhatsApp ordering', 'Reviews section', 'Mobile optimized', 'SEO structure'],
      results: 'Built to enhance brand desirability, educate customers about products, and drive direct sales inquiries.',
    },
  },
  {
    id: 'aura-footwear',
    title: 'Aura Footwear',
    industry: 'Footwear',
    category: 'Fashion',
    image: footwearImg,
    demoUrl: 'https://aura-footwear.vercel.app',
    caseStudy: {
      clientType: 'Footwear / Retail',
      problem: 'The footwear brand needed a sleek digital storefront that showcased their collection with the same energy as their streetwear identity.',
      solution: 'Created a bold, contemporary e-commerce experience with dynamic product displays and a frictionless shopping journey.',
      features: ['Product catalog', 'Size guides', 'WhatsApp ordering', 'Collection filters', 'Mobile first', 'Speed optimized'],
      results: 'Built to drive product discovery, reduce friction in the buying process, and increase conversion rates.',
    },
  },
  {
    id: 'lumina-canvas',
    title: 'Lumina Canvas',
    industry: 'Creative Agency',
    category: 'Creative',
    image: agencyImg,
    demoUrl: 'https://lumina-canvas-green.vercel.app',
    caseStudy: {
      clientType: 'Creative Agency / Studio',
      problem: 'The agency needed a portfolio website that demonstrated their creative capabilities and attracted high-value clients.',
      solution: 'Designed an immersive, award-worthy portfolio with case studies, team profiles, and a compelling narrative about their creative process.',
      features: ['Portfolio showcase', 'Case studies', 'Team section', 'Contact forms', 'Blog ready', 'SEO optimized'],
      results: 'Built to attract premium clients, showcase creative authority, and establish the agency as an industry leader.',
    },
  },
  {
    id: 'lux-avenue',
    title: 'Lux Avenue',
    industry: 'Automotive',
    category: 'Automotive',
    image: automotiveImg,
    demoUrl: 'https://lux-avenue-showcase.vercel.app',
    caseStudy: {
      clientType: 'Automotive / Car Dealership',
      problem: 'The dealership needed a premium digital showroom that matched the luxury and performance of their vehicle inventory.',
      solution: 'Built a cinematic, high-performance website with detailed vehicle pages, comparison tools, and seamless test-drive booking.',
      features: ['Vehicle showcase', 'Comparison tools', 'WhatsApp booking', 'Finance calculator', 'Responsive design', 'Speed optimized'],
      results: 'Built to position the dealership as a premium destination, drive showroom visits, and capture qualified buyer leads.',
    },
  },
  {
    id: 'apex-rides',
    title: 'Apex Rides',
    industry: 'Motorcycles',
    category: 'Automotive',
    image: motorcycleImg,
    demoUrl: 'https://apex-rides.vercel.app',
    caseStudy: {
      clientType: 'Motorcycle / Powersports',
      problem: 'The brand needed an adrenaline-fueled website that captured the thrill and engineering of their motorcycle lineup.',
      solution: 'Designed a bold, dynamic showcase with cinematic imagery, detailed spec sheets, and an experience that appeals to motorcycle enthusiasts.',
      features: ['Bike showcase', 'Spec comparison', 'WhatsApp inquiry', 'Dealer locator', 'Mobile optimized', 'SEO structure'],
      results: 'Built to excite enthusiasts, drive dealership traffic, and generate test-ride bookings.',
    },
  },
];
