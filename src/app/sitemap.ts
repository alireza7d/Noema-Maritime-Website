import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://noemagroup.co';
  const pages = ['', '/about', '/services', '/dry-bulk', '/vessel-capacity', '/market-intelligence', '/contact', '/inquiry'];
  return pages.map(path => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));
}