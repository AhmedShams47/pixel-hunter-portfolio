/** Single source of truth for identity, contact and feature flags (server-safe). */
export const SITE = {
  url: 'https://shamsvisuals.com',
  name: 'Shams Visuals',
  person: 'Ahmed Shams',
  jobTitle: 'Web Developer & UI/UX Designer',
  location: 'Dhaka, Bangladesh',
  email: 'shamsvisuals@gmail.com',
  phoneDisplay: '+880 1629-580476',
  instagram: 'https://www.instagram.com/k_0_p_a/',
  facebook: 'https://www.facebook.com/profile.php?id=61570747318790',
  whatsapp: 'https://wa.me/8801629580476',
  /** Seasonal banner. Ramadan 2026 has ended; re-enable (and confirm the offer) before Ramadan 2027. */
  promoBannerEnabled: false,
} as const;
