/**
 * Корневой макет приложения
 * @layout
 * @description Основная структура HTML-страницы с метаданными для SEO
 * 
 * @param children - Дочерние компоненты страницы
 */
import './globals.css';
import type { Metadata } from 'next';

/**
 * Метаданные для SEO и социальных сетей
 */
export const metadata: Metadata = {
  // Основные метаданные
  title: 'Никитина М.Г. стоматолог-ортопед в Нижнем Новгороде',
  description: 'Профессиональное протезирование зубов любой сложности. Восстановление эстетики и функций улыбки. Консультации и запись на приём.',
  keywords: ['стоматолог', 'ортопед', 'протезирование зубов', 'Нижний Новгород', 'Никитина Марина'],
  authors: [{ name: 'Никитина Марина Георгиевна' }],
  creator: 'Никитина М.Г.',
  
  // Метаданные для поисковых систем
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph для социальных сетей
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://ortopednn.ru/',
    siteName: 'Стоматолог-ортопед Никитина М.Г.',
    title: 'Никитина М.Г. стоматолог-ортопед в Нижнем Новгороде',
    description: 'Профессиональное протезирование зубов — восстановление эстетики и функций улыбки.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Стоматолог-ортопед Никитина Марина Георгиевна',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Никитина М.Г. стоматолог-ортопед',
    description: 'Профессиональное протезирование зубов в Нижнем Новгороде',
    images: ['/og-image.jpg'],
  },
  
  // Иконки
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  
  // Географические метаданные
  alternates: {
    canonical: 'https://ortopednn.ru/',
  },
};

/**
 * Схема структурированных данных для организации
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
    addressRegion: 'Нижегородская область',
    postalCode: '603000',
    addressCountry: 'RU',
  },
  telephone: '+79202537317',
  url: 'https://ortopednn.ru/',
  priceRange: '$$',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        {/* Структурированные данные JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-white text-gray-800 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}