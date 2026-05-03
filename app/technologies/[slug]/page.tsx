import { TECHNOLOGIES } from '../data';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return Object.entries(TECHNOLOGIES).map(([slug]) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tech = TECHNOLOGIES[slug];
  if (!tech) return {};
  
  return {
    title: `${tech.name} — что это, плюсы и минусы, срок службы`,
    description: tech.description.slice(0, 160),
    alternates: { canonical: `https://ortopednn.ru/technologies/${slug}` },
  };
}

export default async function TechnologyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tech = TECHNOLOGIES[slug];
  if (!tech) notFound();

  return (
    <div style={{ minHeight: '100vh', background: '#F0F8FF' }}>
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

      <div className="container" style={{ maxWidth: '800px', padding: '3rem 1rem' }}>
        <a href="/" style={{ color: '#4A90D9', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          ← На главную
        </a>
        
        <h1 style={{ color: '#1E3A5F', fontSize: '2rem', marginBottom: '1rem' }}>{tech.name}</h1>
        
        <div className="card" style={{ marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8, color: '#1E3A5F', fontSize: '1.1rem' }}>{tech.description}</p>
        </div>

        <div className="card" style={{ marginBottom: '2rem', background: 'linear-gradient(135deg, #E8F4FD 0%, #F0F8FF 100%)' }}>
          <h2 style={{ color: '#2E6AB3', marginBottom: '1rem' }}>Как это работает</h2>
          <p style={{ lineHeight: 1.8, color: '#1E3A5F' }}>{tech.howItWorks}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div className="card">
            <h3 style={{ color: '#2E6AB3', marginBottom: '1rem' }}>Плюсы</h3>
            <ul style={{ paddingLeft: '1.25rem', color: '#1E3A5F' }}>
              {tech.pros.map((item, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
            </ul>
          </div>
          <div className="card">
            <h3 style={{ color: '#5A7A9A', marginBottom: '1rem' }}>Минусы</h3>
            <ul style={{ paddingLeft: '1.25rem', color: '#5A7A9A' }}>
              {tech.cons.map((item, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
            </ul>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
          <div className="card">
            <h3 style={{ color: '#2E6AB3', marginBottom: '0.5rem' }}>Срок службы</h3>
            <p style={{ color: '#1E3A5F', fontWeight: 600 }}>{tech.lifespan}</p>
          </div>
          <div className="card">
            <h3 style={{ color: '#2E6AB3', marginBottom: '0.5rem' }}>Цена</h3>
            <p style={{ color: '#2E6AB3', fontWeight: 700, fontSize: '1.2rem' }}>{tech.price}</p>
          </div>
        </div>

        <div className="cta-box" style={{ background: 'linear-gradient(135deg, #4A90D9 0%, #2E6AB3 100%)', borderRadius: '1.5rem', padding: '2rem', textAlign: 'center', color: 'white' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Нужна консультация?</h2>
          <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>Позвоните — врач ответит на ваши вопросы</p>
          <a href="tel:+79202537317" className="btn btn-primary" style={{ background: 'white', color: '#2E6AB3' }}>
            Позвонить: 7 920 253 73 17
          </a>
        </div>
      </div>

      <footer>
        <p>© {new Date().getFullYear()} Никитина Марина Георгиевна</p>
      </footer>
    </div>
  );
}