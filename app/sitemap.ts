import type { MetadataRoute } from 'next';
import { projects } from '@/lib/projects-data';
import { SITE } from '@/lib/site';
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ['', '/about', '/projects', '/packages'].map((p) => ({ url: `${SITE.url}${p}`, lastModified: now, changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.8 }));
  const work = projects.map((p) => ({ url: `${SITE.url}/projects/${p.id}`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.6 }));
  return [...pages, ...work];
}
