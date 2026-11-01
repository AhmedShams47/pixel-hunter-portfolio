'use client';

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { translations, type Lang } from '@/lib/i18n';

interface LanguageContextType { lang: Lang; toggleLang: () => void; t: (key: string) => string }
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en');
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const toggleLang = useCallback(() => setLang((p) => (p === 'en' ? 'bn' : 'en')), []);
  const t = useCallback((key: string) => translations[key]?.[lang] ?? translations[key]?.en ?? key, [lang]);
  return <LanguageContext.Provider value={{ lang, toggleLang, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
