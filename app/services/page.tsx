export const metadata = {
  title: 'Услуги | Протезирование зубов в Нижнем Новгороде',
  description: 'Услуги стоматолога-ортопеда: несъемное протезирование (коронки, виниры), съемное протезирование (протезы AcryFree, нейлоновые), бюгельные протезы. Цены и запись на приём.',
  alternates: { canonical: 'https://ortopednn.ru/services' },
};

const SLUG_MAP: Record<string, string> = {
  "Металлокерамическая коронка": "metallokeramicheskaya-koronka",
  "Безметалловая коронка (цирконий)": "cirkonievaya-koronka",
  "Виниры E-MAX": "viniry-emaks",
  "Врачебная вкладка": "vradecheskaya-vkladka",
  "Лабораторная вкладка": "laboratornaya-vkladka",
  "Цельнолитая коронка": "celnolitaya-koronka",
  "Полный съемный протез": "polny-sjemny-protez",
  "Частичный съемный протез": "chastichny-sjemny-protez",
  "Протез AcryFree (термопластический)": "acryfree",
  "Нейлоновый протез съёмный": "nejlonovyj-protez",
  "Иммедиат-протез": "immediat-protez",
  "Бюгельный протез на кламмерах": "byugelnyj-klammery",
  "Бюгельный протез на замках": "byugelnyj-zamki",
};

const SERVICES = [
  {
    id: "non-removable",
    name: "Несъемное протезирование",
    description: "Коронки и виниры, которые фиксируются на зубах и снимаются только врачом",
    items: [
      { name: "Металлокерамическая коронка", desc: "Классический вариант, оптимальное соотношение цены и качества", price: "от 9 000 ₽" },
      { name: "Безметалловая коронка (цирконий)", desc: "Современный материал, гипоаллергенный, максимально естественный вид", price: "от 27 000 ₽" },
      { name: "Виниры E-MAX", desc: "Тонкие керамические накладки для идеальной эстетики", price: "от 30 000 ₽" },
      { name: "Врачебная вкладка", desc: "Индивидуальная пломба, изготовленная в лаборатории", price: "от 3 180 ₽" },
      { name: "Лабораторная вкладка", desc: "Восстановление сильно разрушенных зубов", price: "от 5 040 ₽" },
      { name: "Цельнолитая коронка", desc: "Металлическая коронка из кобальтового сплава", price: "от 6 060 ₽" },
    ]
  },
  {
    id: "removable",
    name: "Съемное протезирование",
    description: "Протезы, которые пациент может снимать и надевать самостоятельно",
    items: [
      { name: "Полный съемный протез", desc: "При полном отсутствии зубов — классический акриловый протез", price: "от 27 360 ₽" },
      { name: "Частичный съемный протез", desc: "При частичном отсутствии зубов, фиксируется на сохранившихся", price: "от 24 400 ₽" },
      { name: "Протез AcryFree (термопластический)", desc: "Без акрила, гибкий и комфортный, не вызывает аллергии", price: "от 41 400 ₽" },
      { name: "Нейлоновый протез съёмный", desc: "Мягкий и эластичный, практически незаметный", price: "от 41 400 ₽" },
      { name: "Иммедиат-протез", desc: "Временный протез сразу после удаления зубов", price: "от 21 000 ₽" },
    ]
  },
  {
    id: "budget",
    name: "Бюгельное протезирование",
    description: "Протезы с металлической дугой — надежная фиксация и комфорт",
    items: [
      { name: "Бюгельный протез на кламмерах", desc: "Классический бюгель с металлическими крючками", price: "от 60 700 ₽" },
      { name: "Бюгельный протез на замках", desc: "Скрытая фиксация — замки практически не видны", price: "от 83 200 ₽" },
    ]
  },
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Услуги протезирования зубов",
    "description": "Профессиональное протезирование зубов в Нижнем Новгороде: металлокерамика, цирконий, виниры, съемные и бюгельные протезы.",
    "provider": {
      "@type": "Physician",
      "name": "Никитина Марина Георгиевна",
      "jobTitle": "Стоматолог-ортопед"
    },
    "areaServed": {
      "@type": "City",
      "name": "Нижний Новгород"
    },
    "priceRange": "3000-85000 ₽"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="page-services">
        <nav style={{ background: 'white', padding: '1rem', boxShadow: '0 2px 10px rgba(30,58,95,0.08)', position: 'sticky', top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="/" style={{ fontWeight: 600, color: '#1E3A5F' }}>Никитина М.Г.</a>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="/services" style={{ color: '#4A90D9' }}>Услуги</a>
              <a href="/#price" style={{ color: '#4A90D9' }}>Цены</a>
              <a href="/#contacts" style={{ color: '#4A90D9' }}>Контакты</a>
            </div>
          </div>
        </nav>

        <section className="hero" style={{ minHeight: '50vh' }}>
          <div className="container">
            <h1>Услуги стоматолога-ортопеда</h1>
            <p className="subtitle">Профессиональное протезирование зубов любой сложности в Нижнем Новгороде</p>
          </div>
        </section>

        <section className="services-list">
          <div className="container">
            {SERVICES.map((section) => (
              <div key={section.id} className="service-category" id={section.id}>
                <h2>{section.name}</h2>
                <p className="category-desc">{section.description}</p>
                <div className="service-grid">
                  {section.items.map((item) => (
                    <a key={item.name} href={`/services/${SLUG_MAP[item.name]}`} className="card service-card" style={{ textDecoration: 'none', display: 'block', transition: 'transform 0.2s' }}>
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                      <span className="price">{item.price}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h2>Нужна консультация?</h2>
            <p>Запишитесь на приём — подберём оптимальный вариант протезирования</p>
            <a href="tel:+79202537317" className="btn btn-primary">Позвонить: 7 920 253 73 17</a>
          </div>
        </section>

        <footer>
          <p>© {new Date().getFullYear()} Никитина Марина Георгиевна</p>
        </footer>
      </div>
    </>
  );
}