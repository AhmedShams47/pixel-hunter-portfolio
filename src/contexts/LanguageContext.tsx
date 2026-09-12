import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type Lang = 'en' | 'bn';

interface Translations {
  [key: string]: { en: string; bn: string };
}

const translations: Translations = {
  // Navbar
  'nav.home': { en: 'Home', bn: 'হোম' },
  'nav.about': { en: 'About', bn: 'আমার সম্পর্কে' },
  'nav.projects': { en: 'Projects', bn: 'প্রজেক্টস' },
  'nav.packages': { en: 'Packages', bn: 'প্যাকেজ' },
  'nav.connect': { en: "Let's Connect", bn: 'যোগাযোগ করুন' },

  // HomePage Hero
  'hero.badge': { en: 'SHAMS VISUALS', bn: 'শামস ভিজ্যুয়ালস' },
  'hero.title1': { en: 'Your Vision,', bn: 'আপনার স্বপ্ন,' },
  'hero.title2': { en: 'My Craft.', bn: 'আমার শিল্প।' },
  'hero.desc': {
    en: "Assalamu Alaikum! I am Ahmed Shams. I help Bangladeshi brands and businesses look world class through premium design, web development, and social media. Talk to me like a friend, and get professional results that speak for themselves.",
    bn: "আসসালামু আলাইকুম! আমি আহমেদ শামস। বাংলাদেশি ব্র্যান্ড ও ব্যবসাকে প্রিমিয়াম ডিজাইন, ওয়েব ডেভেলপমেন্ট এবং সোশ্যাল মিডিয়ার মাধ্যমে world class করি। বন্ধুর মতো কথা বলুন, professional result পান।",
  },
  'hero.viewProjects': { en: 'View Projects', bn: 'প্রজেক্ট দেখুন' },
  'hero.contactMe': { en: 'Contact Me', bn: 'যোগাযোগ করুন' },
  'hero.scroll': { en: 'SCROLL', bn: 'স্ক্রল' },

  // Scroll narrative
  'scroll.label': { en: 'Cinematic scroll narrative', bn: 'সিনেম্যাটিক স্ক্রল অভিজ্ঞতা' },
  'scroll.badge': { en: 'THE JOURNEY', bn: 'যাত্রা' },
  'scroll.title': { en: 'Crafted in Motion', bn: 'গতির মধ্যে তৈরি' },
  'scroll.desc': {
    en: 'Scroll through the world behind every Shams Visuals creation.',
    bn: 'প্রতিটি শামস ভিজ্যুয়ালস সৃষ্টির পেছনের জগতটি দেখতে স্ক্রল করুন।',
  },

  // Skills
  'skills.title': { en: 'What I', bn: 'আমি কী' },
  'skills.titleHighlight': { en: 'Do', bn: 'করি' },
  'skills.desc': {
    en: 'Everything you need to make your brand world class, all in one place.',
    bn: 'আপনার ব্র্যান্ডকে world class করার জন্য যা যা দরকার, সব এক জায়গায়।',
  },
  'skills.branding': { en: 'Branding & Graphic Design', bn: 'ব্র্যান্ডিং ও গ্রাফিক ডিজাইন' },
  'skills.social': { en: 'Social Media Management', bn: 'সোশ্যাল মিডিয়া ম্যানেজমেন্ট' },
  'skills.web': { en: 'Web Design & Development', bn: 'ওয়েব ডিজাইন ও ডেভেলপমেন্ট' },
  'skills.motion': { en: '3D & Motion Graphics', bn: '3D ও মোশন গ্রাফিক্স' },

  // CTA
  'cta.title1': { en: 'Want Your Brand To Be', bn: 'আপনার ব্র্যান্ড' },
  'cta.titleHighlight': { en: 'Premium', bn: 'Premium' },
  'cta.title2': { en: '?', bn: 'করতে চান?' },
  'cta.desc': {
    en: 'From concept to launch, I handle everything. DM me, talk like a friend, get professional results.',
    bn: 'কনসেপ্ট থেকে লঞ্চ, সবকিছু আমি handle করি। DM করুন, বন্ধুর মতো কথা বলুন, professional result পান।',
  },
  'cta.seeWork': { en: 'See My Work', bn: 'আমার কাজ দেখুন' },
  'cta.getStarted': { en: 'Get Started', bn: 'শুরু করুন' },

  // Ramadan
  'ramadan.badge': { en: 'Ramadan Mubarak', bn: 'রমজান মোবারক' },
  'ramadan.title': { en: '20% OFF', bn: '২০% ছাড়' },
  'ramadan.subtitle': { en: 'All Services This Ramadan', bn: 'এই রমজানে সকল সেবায়' },
  'ramadan.helperText': { en: 'Special blessing for this holy month. DM me on WhatsApp to claim.', bn: 'এই পবিত্র মাসে বিশেষ অফার। WhatsApp এ DM করুন।' },
  'ramadan.claim': { en: 'Claim Offer', bn: 'অফার নিন' },

  // Footer
  'footer.copyright': { en: '© 2025 Shams Visuals', bn: '© ২০২৫ শামস ভিজ্যুয়ালস' },
  'footer.tagline': { en: 'Designed with passion', bn: 'ভালোবাসায় তৈরি' },

  // About
  'about.badge': { en: 'ABOUT ME', bn: 'আমার সম্পর্কে' },
  'about.title': { en: 'Meet', bn: 'পরিচয়' },
  'about.titleHighlight': { en: 'Ahmed Shams', bn: 'আহমেদ শামস' },
  'about.whoTitle': { en: 'Who I', bn: 'আমি' },
  'about.whoHighlight': { en: 'Am', bn: 'কে' },
  'about.whoDesc': {
    en: "I am Ahmed Shams, the creator of Shams Visuals. I help brands, businesses and creators look professional and memorable through design, motion, and web experiences. Over the years, I have worked with clients who needed everything from a simple logo refresh to a complete brand overhaul, and I have loved every project.",
    bn: "আমি আহমেদ শামস, Shams Visuals এর স্রষ্টা। আমি ব্র্যান্ড, ব্যবসা এবং ক্রিয়েটরদের ডিজাইন, মোশন এবং ওয়েব এক্সপেরিয়েন্সের মাধ্যমে professional ও memorable করে তুলি।",
  },
  'about.disciplineTitle': { en: 'Discipline &', bn: 'শৃঙ্খলা ও' },
  'about.disciplineHighlight': { en: 'Process', bn: 'প্রক্রিয়া' },
  'about.disciplineDesc': {
    en: 'Every project starts with listening and planning. I work with clear communication, fixed milestones, and organized delivery, so you always know what is happening.',
    bn: 'প্রতিটি প্রজেক্ট শোনা ও পরিকল্পনা দিয়ে শুরু হয়। আমি স্পষ্ট যোগাযোগ, নির্দিষ্ট মাইলস্টোন এবং সংগঠিত ডেলিভারি নিয়ে কাজ করি।',
  },
  'about.clearComm': { en: 'Clear Communication', bn: 'স্পষ্ট যোগাযোগ' },
  'about.milestones': { en: 'Fixed Milestones', bn: 'নির্দিষ্ট মাইলস্টোন' },
  'about.delivery': { en: 'Organized Delivery', bn: 'সংগঠিত ডেলিভারি' },
  'about.results': { en: 'Consistent Results', bn: 'ধারাবাহিক ফলাফল' },
  'about.3dTitle': { en: '3D &', bn: '3D ও' },
  'about.3dHighlight': { en: 'Animations', bn: 'অ্যানিমেশন' },
  'about.3dDesc': {
    en: 'I love using smooth 3D animations and motion graphics to bring brands to life. Logo reveals, social media intros, and subtle website animations that feel premium instead of noisy.',
    bn: 'আমি smooth 3D অ্যানিমেশন এবং মোশন গ্রাফিক্স ব্যবহার করে ব্র্যান্ডকে জীবন্ত করতে ভালোবাসি। লোগো reveal, সোশ্যাল মিডিয়া intro, এবং premium ওয়েবসাইট অ্যানিমেশন।',
  },
  'about.connectTitle': { en: "Let's build something", bn: 'একসাথে কিছু' },
  'about.connectHighlight': { en: 'beautiful', bn: 'সুন্দর' },
  'about.connectSuffix': { en: 'together', bn: 'তৈরি করি' },
  'about.connectDesc': {
    en: 'Tell me about your brand, your idea, or the project you have in mind. The fastest way to reach me is to send me a message on social media or email. No long forms, just a simple chat.',
    bn: 'আপনার ব্র্যান্ড, আইডিয়া বা প্রজেক্ট সম্পর্কে বলুন। আমার কাছে পৌঁছানোর সবচেয়ে দ্রুত উপায় সোশ্যাল মিডিয়া বা ইমেইলে মেসেজ করা।',
  },
  'about.directMsg': {
    en: 'Whichever button you choose, your message comes directly to me, Ahmed. Not a bot, not a team.',
    bn: 'যেকোনো বাটনে ক্লিক করুন, আপনার মেসেজ সরাসরি আমার কাছে আসবে। কোনো বট বা টিম নয়।',
  },
  'about.viewPackages': { en: 'View Packages', bn: 'প্যাকেজ দেখুন' },
  'about.instagram': { en: 'Best for quick ideas and sharing references', bn: 'দ্রুত আইডিয়া ও রেফারেন্স শেয়ারের জন্য' },
  'about.facebook': { en: 'Perfect if you found me through Facebook', bn: 'Facebook থেকে পেলে এখান দিয়ে' },
  'about.whatsapp': { en: 'Great for serious inquiries and fast replies', bn: 'গুরুত্বপূর্ণ প্রশ্ন ও দ্রুত উত্তরের জন্য' },
  'about.email': { en: 'Send a detailed brief here', bn: 'বিস্তারিত ব্রিফ পাঠান' },
};

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  }, []);

  const t = useCallback(
    (key: string) => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[lang];
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
