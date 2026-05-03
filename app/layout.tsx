/**
 * Корневой макет приложения
 * @layout
 * @description Основная структура с новыми шрифтами и SEO
 */
import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Manrope } from 'next/font/google';

/**
 * Шрифт для заголовков - Playfair Display
 * Элегантный serif для профессионального вида
 */
const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
});

/**
 * Шрифт для текста - Manrope
 * Современный sans-serif для отличной читаемости
 */
const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
});

/**
 * Метаданные для SEO
 */
export const metadata: Metadata = {
  title: 'Никитина М.Г. | Стоматолог-ортопед в Нижнем Новгороде',
  description: 'Профессиональное протезирование зубов любой сложности. Восстановление эстетики и функций улыбки. Запишитесь на консультацию.',
  keywords: ['стоматолог', 'ортопед', 'протезирование', 'Нижний Новгород', 'зубной протез'],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://ortopednn.ru/',
    siteName: 'Стоматолог-ортопед Никитина М.Г.',
    title: 'Никитина М.Г. | Стоматолог-ортопед',
    description: 'Профессиональное протезирование зубов в Нижнем Новгороде',
  },
};

/**
 * JSON-LD схема для организации
 */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Никитина Марина Георгиевна',
  jobTitle: 'Стоматолог-ортопед',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Октябрьской Революции, д. 43, оф. 316',
    addressLocality: 'Нижний Новгород',
    postalCode: '603000',
    addressCountry: 'RU',
  },
  telephone: '+79202537317',
  url: 'https://ortopednn.ru/',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${playfair.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans bg-cream-100 text-warm-800 antialiased">
        {children}
      </body>
    </html>
  );
}