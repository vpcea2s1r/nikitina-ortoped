import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES_CONTENT } from '../content';

export async function generateStaticParams() {
  return [{ slug: 'immediat-protez' }];
}

export async function generateMetadata(): Promise<Metadata> {
  const data = SERVICES_CONTENT['immediat-protez'];
  if (!data) return {};
  return {
    title: `${data.name} — ${data.shortDesc}`,
    description: data.description.slice(0, 160),
    alternates: { canonical: 'https://ortopednn.ru/services/immediat-protez' },
  };
}

export default function ImmediatProtezPage() {
  const data = SERVICES_CONTENT['immediat-protez'];
  if (!data) notFound();

  return (
    <main className="min-h-screen">
      <nav className="breadcrumbs" aria-label="Хлебные крошки">
        <div className="container">
          <a href="/">Главная</a>
          <span>/</span>
          <a href="/services">Услуги</a>
          <span>/</span>
          <span>{data.name}</span>
        </div>
      </nav>

      <article className="service-content">
        <div className="container">
          <header className="service-header">
            <h1 className="service-header__title">{data.name}</h1>
            <p className="service-header__desc">{data.shortDesc}</p>
          </header>

          <div className="service-body">
            <section className="info-section">
              <h2>Что это такое простыми словами</h2>
              <p>{data.description}</p>
              <p>{data.howItWorks}</p>
            </section>

            <section className="info-section">
              <h2>Кому подходит</h2>
              <ul>
                {data.indications.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="info-section">
              <h2>Кому не подходит</h2>
              <ul>
                {data.contraindications.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <div className="info-grid">
              <section className="info-block info-block--pros">
                <h3>Преимущества</h3>
                <ul>
                  {data.advantages.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="info-block info-block--cons">
                <h3>Что учитывать</h3>
                <ul>
                  {data.disadvantages.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="info-section">
              <h2>Как проходит установка</h2>
              {data.steps.map((step, i) => (
                <p key={i}><strong>{i+1}. {step.title}</strong> — {step.desc}</p>
              ))}
            </section>

            <section className="info-section">
              <h2>Материалы и виды</h2>
              {data.materials.map((m, i) => (
                <p key={i}><strong>{m.name}</strong> — {m.desc}</p>
              ))}
            </section>

            <section className="info-section">
              <h2>Как ухаживать</h2>
              <ul>
                {data.care.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="info-section">
              <h2>Срок службы и цена</h2>
              <p>{data.priceNote}</p>
            </section>
          </div>

          <div className="service-cta">
            <p>Хотите узнать подробнее?</p>
            <div className="cta-buttons">
              <a href="tel:+79202537317" className="btn">Позвонить</a>
              <a href="https://t.me/nikitina_ortoped" className="btn btn--secondary">Написать в Telegram</a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}