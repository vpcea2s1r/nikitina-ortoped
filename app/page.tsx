/**
 * Главная страница - Новый дизайн "Тёплый профессионализм"
 * @page
 * @description Современный, душевный дизайн для стоматологической клиники
 */
"use client";

import React, { useState, useCallback } from "react";
import SymptomCalculator from "@/components/SymptomCalculator";
import PatientEducationHub from "@/components/PatientEducationHub";
import { CLINIC_ADDRESS, CLINIC_PHONE } from "@/lib/constants";

// =============================================================================
// КОНСТАНТЫ
// =============================================================================

const DOCTOR_NAME = "Никитина Марина Георгиевна";
const DOCTOR_TITLE = "Стоматолог-ортопед";
const TAGLINE = "Профессиональное протезирование зубов — восстановление эстетики и функций вашей улыбки";
const LOCATION = "Нижний Новгород";

// =============================================================================
// КОМПОНЕНТЫ UI
// =============================================================================

/**
 * Иконка телефона
 */
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

/**
 * Иконка маршрута
 */
function RouteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/**
 * Иконка стоматологии
 */
function ToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.5 2 6 4.5 6 8c0 2 1 3.5 2 5 1 1.5 2 4 3 6 1-2 2-4.5 3-6 1-1.5 2-3 2-5 0-3.5-2.5-6-6-6z"/>
    </svg>
  );
}

/**
 * Кнопка "Позвонить"
 */
function CallButton() {
  return (
    <a
      href={`tel:${CLINIC_PHONE}`}
      className="btn-primary flex items-center gap-3"
    >
      <PhoneIcon className="w-5 h-5" />
      <span>7 920 253 73 17</span>
    </a>
  );
}

/**
 * Кнопка "Как добраться"
 */
function DirectionsButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenMaps = useCallback(() => {
    if (!navigator.geolocation) {
      // Fallback - открыть карту без геолокации
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`,
        "_blank",
        "noopener,noreferrer"
      );
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(CLINIC_ADDRESS)}`;
        window.open(mapsUrl, "_blank", "noopener,noreferrer");
        setIsLoading(false);
      },
      () => {
        // При ошибке - открыть карту
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`,
          "_blank",
          "noopener,noreferrer"
        );
        setIsLoading(false);
      }
    );
  }, []);

  return (
    <button
      onClick={handleOpenMaps}
      disabled={isLoading}
      className="btn-secondary flex items-center gap-2"
    >
      <RouteIcon className="w-5 h-5" />
      {isLoading ? "Загрузка..." : "Маршрут"}
    </button>
  );
}

/**
 * Hero секция с фотографией врача
 */
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-coral-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Текстовый контент */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 text-teal-600 font-medium mb-4">
              <ToothIcon className="w-5 h-5" />
              <span>{LOCATION}</span>
            </div>
            
            <h1 className="font-serif text-display-sm lg:text-display text-warm-800 mb-6">
              {DOCTOR_NAME}
            </h1>
            
            <p className="text-heading-3 text-teal-600 font-medium mb-8">
              {DOCTOR_TITLE}
            </p>
            
            <p className="text-lg text-warm-600 mb-10 max-w-lg mx-auto lg:mx-0">
              {TAGLINE}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CallButton />
              <DirectionsButton />
            </div>
          </div>

          {/* Изображение врача (placeholder) */}
          <div className="relative animate-slide-up delay-200">
            <div className="relative w-72 h-72 mx-auto lg:w-96 lg:h-96">
              {/* Декоративное кольцо */}
              <div className="absolute inset-0 rounded-full border-4 border-coral-500/20" />
              <div className="absolute inset-4 rounded-full border-2 border-teal-500/10" />
              
              {/* Заглушка для фото */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cream-200 to-warm-200 flex items-center justify-center">
                <div className="text-center">
                  <ToothIcon className="w-20 h-20 text-coral-400 mx-auto mb-4" />
                  <p className="text-warm-500 text-sm">Фото врача</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Секция специализации
 */
function ServicesSection() {
  const services = [
    { title: "Протезирование коронками", desc: "Металлокерамика, цирконий" },
    { title: "Виниры", desc: "Эстетическая реставрация" },
    { title: "Съёмные протезы", desc: "Частичные и полные" },
    { title: "Бюгельное протезирование", desc: "На кламмерах и замках" },
  ];

  return (
    <section className="py-22 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-heading-1 text-warm-800 mb-4">
            Моя специализация
          </h2>
          <p className="text-warm-600 max-w-2xl mx-auto">
            Современное протезирование зубов любой сложности с использованием качественных материалов
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card text-center group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-coral-100 flex items-center justify-center group-hover:bg-coral-500 transition-colors">
                <ToothIcon className="w-7 h-7 text-coral-500 group-hover:text-white" />
              </div>
              <h3 className="font-semibold text-warm-800 mb-2">{service.title}</h3>
              <p className="text-warm-500 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Секция контактов
 */
function ContactsSection() {
  return (
    <section className="py-22 bg-gradient-to-b from-white to-cream-100">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-heading-1 text-warm-800 mb-6">
            Запишитесь на приём
          </h2>
          
          <p className="text-warm-600 mb-10">
            Приходите по адресу: {CLINIC_ADDRESS}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton />
            <DirectionsButton />
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// ОСНОВНОЙ КОМПОНЕНТ
// =============================================================================

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PatientEducationHub />
      <SymptomCalculator />
      <ContactsSection />
      
      {/* Футер */}
      <footer className="py-8 bg-warm-800 text-white/70 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} {DOCTOR_NAME}. Все права защищены.
        </p>
      </footer>
    </main>
  );
}