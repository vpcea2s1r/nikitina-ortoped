"use client";

import { PRICE_LIST } from "@/app/data";

export function PriceList() {
  return (
    <section className="price-section" id="price" aria-labelledby="price-heading">
      <div className="container">
        <h2 id="price-heading">Прайс-лист</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {PRICE_LIST.map((section) => (
            <div key={section.category} className="price-category">
              <h3>{section.category}</h3>
              <div className="overflow-x-auto">
                <table className="price-table" role="table" aria-label={`Цены: ${section.category}`}>
                  <tbody>
                    {section.items.map((item) => (
                      <tr key={item.code}>
                        <td className="code" role="cell">{item.code}</td>
                        <td className="name" role="cell">
                          <a 
                            href={item.link} 
                            style={{ color: '#1E3A5F', textDecoration: 'none', borderBottom: '1px dashed #1E3A5F' }}
                          >
                            {item.name}
                          </a>
                        </td>
                        <td className="price" role="cell">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}