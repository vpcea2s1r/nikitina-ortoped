/**
 * Главная страница - Server Component
 */
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PriceList } from "@/components/PriceList";
import { SPECIALIZATIONS, CLINIC_PHONE, CLINIC_ADDRESS } from "./data";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ortopednn.ru/#organization",
      "name": "Никитина М.Г. Стоматолог-ортопед",
      "url": "https://ortopednn.ru",
      "logo": "https://ortopednn.ru/favicon.svg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Октябрьской Революции, д. 43, оф. 316",
        "addressLocality": "Нижний Новгород",
        "addressRegion": "Нижегородская область",
        "postalCode": "603000",
        "addressCountry": "RU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "56.294",
        "longitude": "43.936"
      },
      "telephone": "+79202537317",
      "priceRange": "3000-85000 ₽",
      "areaServed": {
        "@type": "City",
        "name": "Нижний Новгород"
      },
      "serviceType": "Стоматологические услуги"
    },
    {
      "@type": "Physician",
      "@id": "https://ortopednn.ru/#physician",
      "name": "Никитина Марина Георгиевна",
      "jobTitle": "Стоматолог-ортопед",
      "image": "https://ortopednn.ru/",
      "url": "https://ortopednn.ru",
      "priceRange": "3000-85000 ₽",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Октябрьской Революции, д. 43, оф. 316",
        "addressLocality": "Нижний Новгород",
        "addressRegion": "Нижегородская область",
        "postalAddress": "603000",
        "addressCountry": "RU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "56.294",
        "longitude": "43.936"
      },
      "telephone": "+79202537317",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    {
      "@type": "Dentist",
      "@id": "https://ortopednn.ru/#dentist",
      "name": "Стоматолог-ортопед Никитина М.Г.",
      "description": "Профессиональное протезирование зубов в Нижнем Новгороде. Металлокерамика, цирконий, виниры, съемные и бюгельные протезы.",
      "url": "https://ortopednn.ru",
      "priceRange": "3000-85000 ₽"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ortopednn.ru/#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Главная",
          "item": "https://ortopednn.ru/"
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />
      
      <Navbar />

      <HeroSection />

      <section className="services" aria-labelledby="specialization-heading">
        <div className="container">
          <h2 id="specialization-heading">Моя специализация</h2>
          <div 
            className="services-grid" 
            role="list"
            aria-label="Услуги специалиста"
          >
            {SPECIALIZATIONS.map((item) => (
              <a 
                key={item.title} 
                href={item.link} 
                className="card" 
                style={{ textDecoration: 'none', display: 'block', transition: 'transform 0.2s' }}
                role="listitem"
              >
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <PriceList />

      <section className="contacts" id="contacts" aria-labelledby="contacts-heading">
        <h2 id="contacts-heading">Запишитесь на приём</h2>
        <p>{CLINIC_ADDRESS}</p>
        <a 
          href={`tel:${CLINIC_PHONE}`} 
          className="btn btn-primary" 
          style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}
          aria-label="Позвонить для записи на прием"
        >
          Позвонить
        </a>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Никитина Марина Георгиевна</p>
      </footer>
    </div>
  );
}