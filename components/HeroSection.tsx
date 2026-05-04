"use client";

import { CLINIC_ADDRESS, CLINIC_PHONE } from "@/app/data";

export function HeroSection() {
  const openMap = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`,
      "_blank"
    );
  };

  return (
    <section className="hero" aria-label="Главный баннер">
      <div>
        <h1>Никитина Марина Георгиевна</h1>
        <p>Стоматолог-ортопед</p>
        <p className="subtitle">
          Профессиональное протезирование зубов — восстановление эстетики и функций вашей улыбки
        </p>
        <div 
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          role="group"
          aria-label="Контактные действия"
        >
          <a 
            href={`tel:${CLINIC_PHONE}`} 
            className="btn btn-primary"
            aria-label="Позвонить в клинику"
          >
            7 920 253 73 17
          </a>
          <button 
            onClick={openMap}
            className="btn btn-secondary"
            aria-label="Открыть карту с местоположением клиники"
          >
            Маршрут
          </button>
        </div>
      </div>
    </section>
  );
}