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
      { code: "О.1.1", name: "Врачебная вкладка", price: "3 180 ₽" },
      { code: "О.1.2", name: "Лабораторная вкладка", price: "5 040 ₽" },
      { code: "О.1.4", name: "Безметалловая коронка на оксиде циркония", price: "27 000 ₽" },
      { code: "О.1.5", name: "Винир E-MAX", price: "30 000 ₽" },
      { code: "О.1.7", name: "Металлокерамическая коронка", price: "9 000 ₽" },
      { code: "О.1.10", name: "Цельнолитая коронка (кобальт)", price: "6 060 ₽" },
    ]
  },
  {
    category: "Съемное протезирование",
    items: [
      { code: "О.2.1.1", name: "Частичный съемный протез", price: "24 400 ₽" },
      { code: "О.2.1.2", name: "Полный съемный протез", price: "27 360 ₽" },
      { code: "О.2.2.1", name: "Протез «AcryFree»", price: "41 400 ₽" },
      { code: "О.2.2.4", name: "Нейлоновый протез", price: "41 400 ₽" },
    ]
  },
  {
    category: "Бюгельное протезирование",
    items: [
      { code: "О.2.3.1", name: "Бюгельный протез (2 кламмера)", price: "60 700 ₽" },
      { code: "О.2.3.2", name: "Бюгельный протез (3 кламмера)", price: "62 400 ₽" },
      { code: "О.2.3.3", name: "Бюгельный протез (замки)", price: "83 200 ₽" },
    ]
  },
];

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      
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
              { title: "Несъемные коронки", desc: "Металлокерамика, цирконий, E-MAX" },
              { title: "Съемные протезы", desc: "Акрил, нейлон, AcryFree" },
              { title: "Бюгельные протезы", desc: "На кламмерах и замках" },
              { title: "Виниры", desc: "Эстетическая реставрация" },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
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
                        <td className="name">{item.name}</td>
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