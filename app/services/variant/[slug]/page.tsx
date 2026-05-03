import { VARIANTS } from '../../variants';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return Object.entries(VARIANTS).map(([slug]) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const variant = VARIANTS[slug];
  if (!variant) return {};
  
  return {
    title: `${variant.name} — описание и характеристики`,
    description: variant.description.slice(0, 160),
    alternates: { canonical: `https://ortopednn.ru/services/variant/${slug}` },
  };
}

export default async function VariantPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const variant = VARIANTS[slug];
  if (!variant) notFound();

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
        <a href="javascript:history.back()" style={{ color: '#4A90D9', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          ← Назад
        </a>
        
        <h1 style={{ color: '#1E3A5F', fontSize: '2rem', marginBottom: '1rem' }}>{variant.name}</h1>
        
        <div className="card" style={{ marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8, color: '#1E3A5F', fontSize: '1.1rem' }}>{variant.description}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div className="card">
            <h3 style={{ color: '#2E6AB3', marginBottom: '1rem' }}>Плюсы</h3>
            <ul style={{ paddingLeft: '1.25rem', color: '#1E3A5F' }}>
              {variant.pros.map((item, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
            </ul>
          </div>
          <div className="card">
            <h3 style={{ color: '#5A7A9A', marginBottom: '1rem' }}>Минусы</h3>
            <ul style={{ paddingLeft: '1.25rem', color: '#5A7A9A' }}>
              {variant.cons.map((item, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
            </ul>
          </div>
        </div>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#2E6AB3', marginBottom: '0.75rem' }}>Срок службы</h3>
          <p style={{ color: '#1E3A5F' }}>{variant.lifespan}</p>
        </div>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#2E6AB3', marginBottom: '0.75rem' }}>Уход</h3>
          <p style={{ color: '#1E3A5F' }}>{variant.care}</p>
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