import { SERVICES_DATA, getAllServices } from '../data';
import { getConditionSlug } from '../conditions';
import { getVariantSlug } from '../variants';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) return {};
  
  return {
    title: `${service.name} | Услуги стоматолога-ортопеда в Нижнем Новгороде`,
    description: service.shortDesc + ' ' + service.description.slice(0, 100),
    alternates: { canonical: `https://ortopednn.ru/services/${slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": service.name,
    "description": service.description,
    "offers": {
      "@type": "Offer",
      "priceRange": service.price,
      "priceCurrency": "RUB"
    }
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

        <div className="container" style={{ maxWidth: '900px', padding: '3rem 1rem' }}>
          <a href="/services" style={{ color: '#4A90D9', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            ← К списку услуг
          </a>
          
          <span style={{ color: '#4A90D9', fontSize: '0.9rem' }}>{service.category}</span>
          <h1 style={{ color: '#1E3A5F', fontSize: '2rem', margin: '0.5rem 0 1rem' }}>{service.name}</h1>
          <p style={{ color: '#5A7A9A', fontSize: '1.25rem', marginBottom: '2rem' }}>{service.shortDesc}</p>

          <div className="card" style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#2E6AB3', marginBottom: '1rem' }}>Описание</h2>
            <p style={{ lineHeight: 1.8 }}>{service.description}</p>
          </div>

          <div className="card" style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#2E6AB3', marginBottom: '1rem' }}>Показания</h2>
            <ul style={{ paddingLeft: '1.5rem' }}>
              {service.indications.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.75rem' }}>
                  <a href={`/services/condition/${getConditionSlug(item)}`} style={{ color: '#4A90D9', textDecoration: 'none', borderBottom: '1px dashed #4A90D9' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="card" style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#2E6AB3', marginBottom: '1rem' }}>Противопоказания</h2>
            <ul style={{ paddingLeft: '1.5rem' }}>
              {service.contraindications.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.75rem' }}>
                  <a href={`/services/condition/${getConditionSlug(item)}`} style={{ color: '#5A7A9A', textDecoration: 'none', borderBottom: '1px dashed #5A7A9A' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="card" style={{ marginBottom: '2rem', background: 'linear-gradient(135deg, #E8F4FD 0%, #F0F8FF 100%)' }}>
            <h2 style={{ color: '#2E6AB3', marginBottom: '1rem' }}>Варианты и цены</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {service.variants.map((variant, i) => (
                <div key={i} style={{ background: 'white', padding: '1.25rem', borderRadius: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <a href={`/services/variant/${getVariantSlug(variant.name)}`} style={{ fontWeight: 600, color: '#1E3A5F', textDecoration: 'none', borderBottom: '1px dashed #1E3A5F' }}>{variant.name}</a>
                    <p style={{ color: '#5A7A9A', fontSize: '0.9rem', marginTop: '0.25rem' }}>{variant.desc}</p>
                  </div>
                  <span style={{ fontWeight: 700, color: '#2E6AB3', fontSize: '1.1rem' }}>{variant.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#2E6AB3', marginBottom: '1rem' }}>Уход за протезом</h2>
            <ul style={{ paddingLeft: '1.5rem', color: '#1E3A5F' }}>
              {service.care.map((item, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
            </ul>
          </div>

          <div className="cta-box" style={{ background: 'linear-gradient(135deg, #4A90D9 0%, #2E6AB3 100%)', borderRadius: '1.5rem', padding: '2.5rem', textAlign: 'center', color: 'white' }}>
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