import { MetadataRoute } from 'next';
import { SERVICES_CONTENT } from './services/content';
import { SERVICES_DATA } from './services/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ortopednn.ru';
  const now = new Date();

  const services = [
    { slug: 'vradecheskaya-vkladka', name: 'Врачебная вкладка' },
    { slug: 'laboratornaya-vkladka', name: 'Лабораторная вкладка' },
    { slug: 'cirkonievaya-koronka', name: 'Безметалловая коронка (цирконий)' },
    { slug: 'viniry-emaks', name: 'Виниры E-MAX' },
    { slug: 'metallokeramicheskaya-koronka', name: 'Металлокерамическая коронка' },
    { slug: 'celnolitaya-koronka', name: 'Цельнолитая коронка' },
    { slug: 'chastichny-sjemny-protez', name: 'Частичный съемный протез' },
    { slug: 'polny-sjemny-protez', name: 'Полный съемный протез' },
    { slug: 'acryfree', name: 'Протез AcryFree' },
    { slug: 'nejlonovyj-protez', name: 'Нейлоновый протез' },
    { slug: 'immediat-protez', name: 'Иммедиат-протез' },
    { slug: 'byugelnyj-klammery', name: 'Бюгельный протез на кламмерах' },
    { slug: 'byugelnyj-zamki', name: 'Бюгельный протез на замках' },
    { slug: 'sjemny-protez', name: 'Съёмный протез' },
  ];

  return [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...services.map((s) => ({
      url: `${baseUrl}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: s.slug === 'viniry-emaks' || s.slug === 'sjemny-protez' ? 0.9 : 0.8,
    })),
  ];
}