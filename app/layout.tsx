import './globals.css';
import { Providers } from '@/components/Providers';

export const metadata = {
  title: 'Никитина Марина Георгиевна | Стоматолог-ортопед в Нижнем Новгороде | Протезирование зубов',
  description: 'Стоматолог-ортопед Никитина М.Г. в Нижнем Новгороде. Протезирование зубов: металлокерамика, цирконий, виниры E-MAX, съемные и бюгельные протезы. Запись на приём. Адрес: ул. Октябрьской Революции, д. 43, оф. 316.',
  keywords: 'стоматолог ортопед, протезирование зубов, металлокерамика, циркониевые коронки, виниры E-MAX, съемные протезы, бюгельные протезы, нейлоновые протезы, AcryFree, зубные коронки, Нижний Новгород',
  authors: [{ name: 'Никитина Марина Георгиевна' }],
  creator: 'Никитина Марина Георгиевна',
  publisher: 'Никитина Марина Георгиевна',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://ortopednn.ru' },
  other: {
    'geo.region': 'RU-NIZ',
    'geo.placename': 'Нижний Новгород',
    'ICBM': '56.294, 43.936',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://ortopednn.ru',
    siteName: 'Никитина М.Г. Стоматолог-ортопед',
    title: 'Никитина Марина Георгиевна | Стоматолог-ортопед в Нижнем Новгороде',
    description: 'Профессиональное протезирование зубов любой сложности в Нижнем Новгороде. Металлокерамика, цирконий, виниры, съемные и бюгельные протезы.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Никитина М.Г. - Стоматолог-ортопед' }],
  },
  twitter: { card: 'summary_large_image', title: 'Никитина М.Г. - Стоматолог-ортопед', description: 'Протезирование зубов в Нижнем Новгороде' },
  verification: { yandex: 'yandex_verification_code' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#4A90D9" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="yandex-verification" content="yandex_verification_code" />
        <meta name="yandex" content="noyandex" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Перейти к основному контенту</a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}