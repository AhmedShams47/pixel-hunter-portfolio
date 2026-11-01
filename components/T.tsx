'use client';

import { useLanguage } from '@/lib/language-context';

/**
 * <T k="hero.desc" /> — renders translated text.
 * Server HTML always contains the English string (crawlable); the client
 * swaps to Bangla when the visitor toggles the language.
 */
export default function T({ k }: { k: string }) {
  const { t } = useLanguage();
  return <>{t(k)}</>;
}
