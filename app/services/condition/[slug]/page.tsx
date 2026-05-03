import { CONDITIONS } from '../../conditions';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return Object.entries(CONDITIONS).map(([slug]) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = CONDITIONS[slug];
  if (!condition) return {};
  
  return {
    title: `${condition.name} — Стоматологические показания`,
    description: condition.description.slice(0, 160),
    alternates: { canonical: `https://ortopednn.ru/services/condition/${slug}` },
  };
}

export default async function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = CONDITIONS[slug];
  if (!condition) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": condition.name,
    "description": condition.description
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
          <a href="/services" style={{ color: '#4A90D9', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            ← К услугам
          </a>
          
          <h1 style={{ color: '#1E3A5F', fontSize: '2rem', marginBottom: '1rem' }}>{condition.name}</h1>
          
          <div className="card" style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#2E6AB3', marginBottom: '1rem' }}>Что это такое</h2>
            <p style={{ lineHeight: 1.8, color: '#1E3A5F' }}>{condition.description}</p>
          </div>

          <div className="card" style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#2E6AB3', marginBottom: '1rem' }}>Симптомы и признаки</h2>
            <ul style={{ paddingLeft: '1.5rem', color: '#1E3A5F', lineHeight: 1.8 }}>
              {condition.symptoms.map((item, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
            </ul>
          </div>

          <div className="card" style={{ marginBottom: '2rem', background: 'linear-gradient(135deg, #E8F4FD 0%, #F0F8FF 100%)' }}>
            <h2 style={{ color: '#2E6AB3', marginBottom: '1rem' }}>Как это лечится</h2>
            <p style={{ lineHeight: 1.8, color: '#1E3A5F' }}>{condition.treatment}</p>
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
    </>
  );
}