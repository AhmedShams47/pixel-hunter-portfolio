export type Lang = 'en' | 'bn';
type Entry = { en: string; bn: string };

/** Translations. English is the server-rendered default (what crawlers see). */
export const translations: Record<string, Entry> = {
  'nav.home': { en: 'Home', bn: 'হোম' },
  'nav.about': { en: 'About', bn: 'পরিচিতি' },
  'nav.projects': { en: 'Projects', bn: 'প্রজেক্ট' },
  'nav.packages': { en: 'Packages', bn: 'প্যাকেজ' },
  'nav.connect': { en: "Let's Connect", bn: 'যোগাযোগ করুন' },

  'hero.title1': { en: 'Your Vision,', bn: 'আপনার ভাবনা,' },
  'hero.title2': { en: 'My Craft.', bn: 'আমার কাজ।' },
  'hero.desc': {
    en: "Assalamu Alaikum — I'm Ahmed Shams, a web developer and UI/UX designer in Dhaka. I design and build websites, brand identities and motion work for Bangladeshi businesses. Talk to me like a friend; expect clear milestones and finished work.",
    bn: 'আসসালামু আলাইকুম — আমি আহমেদ শামস, ঢাকার একজন ওয়েব ডেভেলপার ও UI/UX ডিজাইনার। বাংলাদেশি ব্যবসার জন্য ওয়েবসাইট, ব্র্যান্ড আইডেন্টিটি ও মোশন ওয়ার্ক ডিজাইন ও তৈরি করি। বন্ধুর মতো কথা বলুন; পাবেন স্পষ্ট মাইলস্টোন আর সম্পূর্ণ কাজ।',
  },
  'hero.viewProjects': { en: 'View Projects', bn: 'প্রজেক্ট দেখুন' },
  'hero.start': { en: 'Start a Project', bn: 'প্রজেক্ট শুরু করুন' },

  'skills.kicker': { en: 'Disciplines', bn: 'কাজের ক্ষেত্র' },
  'skills.title': { en: 'What I do', bn: 'আমি যা করি' },
  'skills.desc': { en: 'Four disciplines, one person: the site, the identity and the motion all come from the same hands.', bn: 'চারটি ক্ষেত্র, একজন মানুষ: সাইট, আইডেন্টিটি আর মোশন — সবই একই হাতে তৈরি।' },
  'skills.branding': { en: 'Branding & Graphic Design', bn: 'ব্র্যান্ডিং ও গ্রাফিক ডিজাইন' },
  'skills.branding.note': { en: 'Logos, identity systems, social visuals', bn: 'লোগো, আইডেন্টিটি সিস্টেম, সোশ্যাল ভিজ্যুয়াল' },
  'skills.social': { en: 'Social Media Management', bn: 'সোশ্যাল মিডিয়া ম্যানেজমেন্ট' },
  'skills.social.note': { en: 'Content direction and consistent visuals', bn: 'কনটেন্ট পরিকল্পনা ও সামঞ্জস্যপূর্ণ ভিজ্যুয়াল' },
  'skills.web': { en: 'Web Design & Development', bn: 'ওয়েব ডিজাইন ও ডেভেলপমেন্ট' },
  'skills.web.note': { en: 'React and Next.js builds, responsive by default', bn: 'React ও Next.js দিয়ে তৈরি, সব স্ক্রিনে রেসপনসিভ' },
  'skills.motion': { en: '3D & Motion Graphics', bn: '৩ডি ও মোশন গ্রাফিক্স' },
  'skills.motion.note': { en: 'Logo reveals, intros, short-form motion', bn: 'লোগো রিভিল, ইন্ট্রো, ছোট মোশন ভিডিও' },

  'services.kicker': { en: 'Services', bn: 'সার্ভিস' },
  'services.title1': { en: 'What you can', bn: 'যে কাজে আমাকে' },
  'services.title2': { en: 'hire me for.', bn: 'নিতে পারেন।' },
  'services.web.t': { en: 'Web Design & Development', bn: 'ওয়েব ডিজাইন ও ডেভেলপমেন্ট' },
  'services.web.d': { en: 'Fast, responsive websites built for a clear goal: bookings, enquiries or sales. Designed and coded by the same person.', bn: 'বুকিং, এনকোয়ারি বা বিক্রির মতো স্পষ্ট লক্ষ্যের জন্য দ্রুত ও রেসপনসিভ ওয়েবসাইট। ডিজাইন ও কোড — একই মানুষের হাতে।' },
  'services.ui.t': { en: 'UI/UX Design', bn: 'UI/UX ডিজাইন' },
  'services.ui.d': { en: 'Interface and flow design that makes the next action obvious, from first screen to checkout or contact.', bn: 'ইন্টারফেস ও ফ্লো ডিজাইন যাতে প্রথম স্ক্রিন থেকে চেকআউট বা যোগাযোগ পর্যন্ত পরের ধাপটি স্পষ্ট থাকে।' },
  'services.brand.t': { en: 'Brand Identity', bn: 'ব্র্যান্ড আইডেন্টিটি' },
  'services.brand.d': { en: 'Logo, colour, type and visual rules so your brand looks the same on the website, social and print.', bn: 'লোগো, রং, টাইপ ও ভিজ্যুয়াল নিয়ম — যাতে ওয়েবসাইট, সোশ্যাল ও প্রিন্টে আপনার ব্র্যান্ড একই রকম দেখায়।' },
  'services.motion.t': { en: 'Motion & 3D', bn: 'মোশন ও ৩ডি' },
  'services.motion.d': { en: 'Short cinematic intros, reels and 3D brand assets to make your launch feel finished.', bn: 'ছোট সিনেমাটিক ইন্ট্রো, রিল ও ৩ডি ব্র্যান্ড অ্যাসেট — লঞ্চকে পরিপূর্ণ করতে।' },

  'cta.kicker': { en: "Let's talk", bn: 'কথা বলি' },
  'cta.title': { en: 'Have a project in mind?', bn: 'মাথায় কোনো প্রজেক্ট আছে?' },
  'cta.desc': { en: "Message me on WhatsApp or Instagram with what you're building. I reply personally — no forms, no bots.", bn: 'আপনি কী বানাচ্ছেন তা WhatsApp বা Instagram-এ লিখুন। আমি নিজেই উত্তর দিই — কোনো ফর্ম বা বট নয়।' },
  'cta.whatsapp': { en: 'WhatsApp me', bn: 'WhatsApp করুন' },
  'cta.packages': { en: 'See packages', bn: 'প্যাকেজ দেখুন' },

  'about.title': { en: 'Meet', bn: 'পরিচিত হন' },
  'about.who.title': { en: 'Who I', bn: 'আমি' },
  'about.who.title2': { en: 'am', bn: 'কে' },
  'about.who.p1': {
    en: "I'm Ahmed Shams, the creator of Shams Visuals. I design and build web, UI/UX and motion work for brands that want to look premium and move with intention. The projects on this site are self-directed capability builds — real, deployed work I made to show how I design and build, not claimed client commissions.",
    bn: 'আমি আহমেদ শামস, Shams Visuals-এর নির্মাতা। যে ব্র্যান্ড প্রিমিয়াম দেখাতে চায় এবং ভেবেচিন্তে এগোতে চায়, তাদের জন্য ওয়েব, UI/UX ও মোশন কাজ ডিজাইন ও তৈরি করি। এই সাইটের প্রজেক্টগুলো আমার নিজের উদ্যোগে তৈরি সামর্থ্য-প্রদর্শনী — আসল, চালু কাজ; ক্লায়েন্টের কাজ বলে দাবি করা হয়নি।',
  },
  'about.who.p2': { en: "I work with clear communication, fixed milestones and organised delivery, so you always know what's happening.", bn: 'আমি স্পষ্ট যোগাযোগ, নির্দিষ্ট মাইলস্টোন ও গোছানো ডেলিভারিতে কাজ করি, যাতে আপনি সবসময় জানেন কী চলছে।' },

  'ramadan.badge': { en: 'Ramadan Mubarak', bn: 'রমজান মোবারক' },
  'ramadan.title': { en: '20% OFF', bn: '২০% ছাড়' },
  'ramadan.subtitle': { en: 'All Services This Ramadan', bn: 'এই রমজানে সকল সেবায়' },
  'ramadan.helperText': { en: 'DM me on WhatsApp to claim.', bn: 'নিতে WhatsApp-এ মেসেজ করুন।' },
  'ramadan.claim': { en: 'Claim Offer', bn: 'অফার নিন' },
};
