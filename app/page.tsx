/**
 * Главная страница - С прайс-листом
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
      { code: "О.1.3", name: "Разборная лабораторная вкладка", price: "5 340 ₽" },
      { code: "О.1.4", name: "Безметалловая коронка на оксиде циркония", price: "27 000 ₽" },
      { code: "О.1.5", name: "Винир, коронка E-MAX", price: "30 000 ₽" },
      { code: "О.1.6", name: "Винир на рефракторе", price: "39 000 ₽" },
      { code: "О.1.7", name: "Металлокерамическая коронка/зуб", price: "9 000 ₽" },
      { code: "О.1.8", name: "Металлокерамическая коронка на вкладке", price: "12 000 ₽" },
      { code: "О.1.9", name: "Металлокерамическая искусственная десна", price: "2 080 ₽" },
      { code: "О.1.10", name: "Цельнолитая коронка (кобальтовый сплав)", price: "6 060 ₽" },
      { code: "О.1.11", name: "Цельнолитая коронка (никель-хром)", price: "5 900 ₽" },
      { code: "О.1.12", name: "Цельнолитая коронка на вкладке", price: "8 200 ₽" },
      { code: "О.1.16", name: "Временная коронка врачебная", price: "2 160 ₽" },
      { code: "О.1.17", name: "Временная коронка лабораторная", price: "4 080 ₽" },
    ]
  },
  {
    category: "Съемное протезирование",
    items: [
      { code: "О.2.1.1", name: "Частичный съемный протез (импортные зубы)", price: "24 400 ₽" },
      { code: "О.2.1.2", name: "Полный съемный протез (импортные зубы)", price: "27 360 ₽" },
      { code: "О.2.1.3", name: "Иммедиат-протез акриловый", price: "12 940 ₽" },
      { code: "О.2.1.4", name: "Съемный протез из «Имплакрила»", price: "41 400 ₽" },
      { code: "О.2.2.1", name: "Полный съемный протез «AcryFree»", price: "41 400 ₽" },
      { code: "О.2.2.2", name: "Бюгель «ДенталДи» (белый)", price: "52 200 ₽" },
      { code: "О.2.2.3", name: "Частичный съемный протез термопластический", price: "41 400 ₽" },
      { code: "О.2.2.4", name: "Нейлоновый съемный протез", price: "41 400 ₽" },
    ]
  },
  {
    category: "Бюгельное протезирование",
    items: [
      { code: "О.2.3.1", name: "Бюгельный протез (2 кламмера)", price: "60 700 ₽" },
      { code: "О.2.3.2", name: "Бюгельный протез (3 кламмера)", price: "62 400 ₽" },
      { code: "О.2.3.3", name: "Бюгельный протез (2 замка)", price: "83 200 ₽" },
    ]
  },
  {
    category: "Прочие работы",
    items: [
      { code: "О.3.1", name: "Снятие альгинатных оттисков", price: "720 ₽" },
      { code: "О.3.2", name: "Снятие двухслойных оттисков (Speedex)", price: "1 380 ₽" },
      { code: "О.3.6", name: "Фиксация коронки «Fuji»", price: "960 ₽" },
      { code: "О.3.10", name: "Снятие металлокерамической коронки", price: "1 000 ₽" },
      { code: "О.3.11", name: "Диагностические модели двух челюстей", price: "1 800 ₽" },
      { code: "О.3.17", name: "Перебазировка съемного протеза (врачебная)", price: "4 200 ₽" },
      { code: "О.3.18", name: "Перебазировка съемного протеза (лабораторная)", price: "5 700 ₽" },
      { code: "О.3.21", name: "Починка перелома съемного протеза", price: "3 360 ₽" },
      { code: "О.3.22", name: "Приварка одного зуба", price: "3 180 ₽" },
    ]
  }
];

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#FDF8F3' }}>
      
      {/* HERO */}
      <section className="hero">
        <div>
          <h1>Никитина Марина Георгиевна</h1>
          <p>Стоматолог-ортопед</p>
          <p style={{ color: '#6B5B55', maxWidth: '500px', margin: '0 auto 2rem' }}>
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

      {/* PRICE LIST */}
      <section className="services" id="price">
        <div className="container">
          <h2>Прайс-лист</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {PRICE_LIST.map((section) => (
              <div key={section.category} style={{ marginBottom: '2rem' }}>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  color: '#2D6A6E', 
                  marginBottom: '1rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '2px solid #E8846B'
                }}>
                  {section.category}
                </h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {section.items.map((item) => (
                      <tr key={item.code} style={{ borderBottom: '1px solid #E8DDD3' }}>
                        <td style={{ padding: '0.75rem 0', color: '#6B5B55', fontSize: '0.875rem' }}>
                          {item.code}
                        </td>
                        <td style={{ padding: '0.75rem', textAlign: 'left' }}>
                          {item.name}
                        </td>
                        <td style={{ padding: '0.75rem 0', textAlign: 'right', fontWeight: '600', color: '#2A2A2A' }}>
                          {item.price}
                        </td>
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
      <section className="contacts">
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