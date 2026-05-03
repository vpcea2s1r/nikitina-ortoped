/**
 * Главная страница - Чистый CSS без Tailwind
 */
"use client";

const CLINIC_ADDRESS = "Нижний Новгород, ул. Октябрьской Революции, д. 43, оф. 316";
const CLINIC_PHONE = "+79202537317";

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

      {/* SERVICES */}
      <section className="services">
        <div className="container">
          <h2>Моя специализация</h2>
          <div className="services-grid">
            {[
              { title: "Протезирование коронками", desc: "Металлокерамика, цирконий" },
              { title: "Виниры", desc: "Эстетическая реставрация" },
              { title: "Съёмные протезы", desc: "Частичные и полные" },
              { title: "Бюгельное протезирование", desc: "На кламмерах и замках" },
            ].map((item) => (
              <div key={item.title} className="card" style={{ textAlign: 'center' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#6B5B55' }}>{item.desc}</p>
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