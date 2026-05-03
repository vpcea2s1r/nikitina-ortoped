/**
 * Главная страница - Светло-голубая схема
 */
"use client";

const CLINIC_ADDRESS = "Нижний Новгород, ул. Октябрьской Революции, д. 43, оф. 316";
const CLINIC_PHONE = "+79202537317";

const PRICE_LIST = [
  {
    category: "Несъемное протезирование",
    items: [
      { code: "О.1.1", name: "Врачебная вкладка", price: "3 180 ₽", link: "/services/vradecheskaya-vkladka" },
      { code: "О.1.2", name: "Лабораторная вкладка", price: "5 040 ₽", link: "/services/laboratornaya-vkladka" },
      { code: "О.1.4", name: "Безметалловая коронка на оксиде циркония", price: "27 000 ₽", link: "/services/cirkonievaya-koronka" },
      { code: "О.1.5", name: "Винир E-MAX", price: "30 000 ₽", link: "/services/viniry-emaks" },
      { code: "О.1.7", name: "Металлокерамическая коронка", price: "9 000 ₽", link: "/services/metallokeramicheskaya-koronka" },
      { code: "О.1.10", name: "Цельнолитая коронка (кобальт)", price: "6 060 ₽", link: "/services/celnolitaya-koronka" },
    ]
  },
  {
    category: "Съемное протезирование",
    items: [
      { code: "О.2.1.1", name: "Частичный съемный протез", price: "24 400 ₽", link: "/services/chastichny-sjemny-protez" },
      { code: "О.2.1.2", name: "Полный съемный протез", price: "27 360 ₽", link: "/services/polny-sjemny-protez" },
      { code: "О.2.2.1", name: "Протез «AcryFree»", price: "41 400 ₽", link: "/services/acryfree" },
      { code: "О.2.2.4", name: "Нейлоновый протез", price: "41 400 ₽", link: "/services/nejlonovyj-protez" },
    ]
  },
  {
    category: "Бюгельное протезирование",
    items: [
      { code: "О.2.3.1", name: "Бюгельный протез (2 кламмера)", price: "60 700 ₽", link: "/services/byugelnyj-klammery" },
      { code: "О.2.3.2", name: "Бюгельный протез (3 кламмера)", price: "62 400 ₽", link: "/services/byugelnyj-klammery" },
      { code: "О.2.3.3", name: "Бюгельный протез (замки)", price: "83 200 ₽", link: "/services/byugelnyj-zamki" },
    ]
  },
];

export default function Home() {
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

  return (
    <div style={{ minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* NAV */}
      <nav style={{ 
        background: 'white', 
        padding: '1rem', 
        position: 'sticky', 
        top: 0,
        boxShadow: '0 2px 10px rgba(30,58,95,0.08)',
        zIndex: 100
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <span style={{ fontWeight: 600, color: '#1E3A5F' }}>Никитина М.Г.</span>
<div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="/services" style={{ color: '#4A90D9' }}>Услуги</a>
              <a href="#price" style={{ color: '#4A90D9' }}>Цены</a>
              <a href="#contacts" style={{ color: '#4A90D9' }}>Контакты</a>
            </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div>
          <h1>Никитина Марина Георгиевна</h1>
          <p>Стоматолог-ортопед</p>
          <p className="subtitle">
            Профессиональное протезирование зубов — восстановление эстетики и функций вашей улыбки
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:${CLINIC_PHONE}`} className="btn btn-primary">
              7 920 253 73 17
            </a>
            <button 
              onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`, "_blank")}
              className="btn btn-secondary"
            >
              Маршрут
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="container">
          <h2>Моя специализация</h2>
          <div className="services-grid">
            {[
              { title: "Несъемные коронки", desc: "Металлокерамика, цирконий, E-MAX", link: "metallokeramika" },
              { title: "Съемные протезы", desc: "Акрил, нейлон, AcryFree", link: "akril" },
              { title: "Бюгельные протезы", desc: "На кламмерах и замках", link: "byugel" },
              { title: "Виниры", desc: "Эстетическая реставрация", link: "viniry" },
            ].map((item) => (
              <a key={item.title} href={`/technologies/${item.link}`} className="card" style={{ textDecoration: 'none', display: 'block', transition: 'transform 0.2s' }}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="price-section" id="price">
        <div className="container">
          <h2>Прайс-лист</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {PRICE_LIST.map((section) => (
              <div key={section.category} className="price-category">
                <h3>{section.category}</h3>
                <table className="price-table">
                  <tbody>
                    {section.items.map((item) => (
                      <tr key={item.code}>
                        <td className="code">{item.code}</td>
                        <td className="name">
                          <a href={item.link} style={{ color: '#1E3A5F', textDecoration: 'none', borderBottom: '1px dashed #1E3A5F' }}>{item.name}</a>
                        </td>
                        <td className="price">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section className="contacts" id="contacts">
        <h2>Запишитесь на приём</h2>
        <p>{CLINIC_ADDRESS}</p>
        <a href={`tel:${CLINIC_PHONE}`} className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
          Позвонить
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© {new Date().getFullYear()} Никитина Марина Георгиевна</p>
      </footer>
    </div>
  );
}