/**
 * Главная страница сайта стоматолога-ортопеда
 * @page
 * @description Основная страница с информацией о враче, услугах и интерактивными инструментами
 * 
 * @returns Главная страница приложения
 */
"use client";

import React, { useState, useCallback } from "react";
import SymptomCalculator from "@/components/SymptomCalculator";
import PatientEducationHub from "@/components/PatientEducationHub";
import { CLINIC_ADDRESS, CLINIC_PHONE } from "@/lib/constants";

// =============================================================================
// КОНСТАНТЫ И ТИПЫ
// =============================================================================

/** Элементы навигации */
const NAV_ITEMS = [
  { href: "#about", label: "О враче" },
  { href: "#services", label: "Услуги" },
  { href: "#contacts", label: "Контакты" },
] as const;

// =============================================================================
// КОМПОНЕНТЫ UI
// =============================================================================

/**
 * Иконка загрузки (Spinner)
 */
function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-5 w-5 mr-2 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8z"
      />
    </svg>
  );
}

/**
 * Кнопка построения маршрута к клинике
 * @description Использует геолокацию браузера для построения маршрута в Google Maps
 */
function DirectionsButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenMaps = useCallback(() => {
    // Проверка поддержки геолокации
    if (!navigator.geolocation) {
      alert("Геолокация не поддерживается вашим браузером.");
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
      (error) => {
        let message = "Не удалось получить ваше местоположение.";
        
        if (error.code === error.PERMISSION_DENIED) {
          message = "Пожалуйста, разрешите доступ к геолокации для построения маршрута.";
        }
        
        alert(message);
        setIsLoading(false);
      },
      { timeout: 10000, enableHighAccuracy: false }
    );
  }, []);

  return (
    <button
      onClick={handleOpenMaps}
      disabled={isLoading}
      aria-label={`Построить маршрут до клиники по адресу ${CLINIC_ADDRESS}`}
      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition inline-block ml-4 flex items-center justify-center focus:outline focus:outline-3 focus:outline-blue-500 disabled:opacity-70"
    >
      {isLoading ? (
        <>
          <LoadingSpinner />
          Загрузка маршрута...
        </>
      ) : (
        "Как добраться"
      )}
    </button>
  );
}

/**
 * Навигационное меню сайта
 */
function Navigation() {
  return (
    <nav 
      role="navigation" 
      aria-label="Основное меню сайта" 
      className="mb-6"
    >
      <ul className="flex justify-center space-x-6">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a 
              href={item.href} 
              className="text-blue-700 hover:underline focus:outline focus:outline-3 focus:outline-blue-500"
              tabIndex={0}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Секция "О враче"
 */
function AboutSection() {
  return (
    <>
      <h1 
        className="text-5xl font-extrabold mb-6 text-blue-700" 
        id="about"
      >
        Стоматолог - ортопед Никитина Марина Георгиевна
      </h1>
      <p className="text-xl mb-10 text-gray-700">
        Профессиональное протезирование зубов — восстановление эстетики и функций улыбки в Нижнем Новгороде.
      </p>
    </>
  );
}

/**
 * Секция "Услуги"
 */
function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-blue-50 rounded-md p-6 shadow-md mb-12"
      aria-labelledby="services-title"
    >
      <h2
        id="services-title"
        className="text-2xl font-semibold text-blue-600 mb-4"
      >
        Врачебная специализация
      </h2>
      <p className="text-base text-gray-700">
        Современное протезирование зубов любой сложности
      </p>
    </section>
  );
}

/**
 * Секция "Контакты"
 */
function ContactsSection() {
  return (
    <div
      id="contacts"
      className="flex justify-center mt-12"
      aria-label="Контактные данные"
    >
      <a
        href={`tel:${CLINIC_PHONE}`}
        className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition inline-block focus:outline focus:outline-3 focus:outline-blue-500"
      >
        Позвонить: 7 920 253 73 17
      </a>
      <DirectionsButton />
    </div>
  );
}

// =============================================================================
// ОСНОВНОЙ КОМПОНЕНТ СТРАНИЦЫ
// =============================================================================

export default function Home() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center p-6 font-sans bg-gradient-to-br from-blue-100 via-blue-50 to-white"
      role="main"
    >
      <div className="absolute inset-0 bg-white/70" aria-hidden="true" />
      
      <div className="relative z-10 text-center max-w-xl">
        <Navigation />
        
        <AboutSection />
        
        <ServicesSection />
        
        <PatientEducationHub />
        
        <SymptomCalculator />
        
        <ContactsSection />
      </div>
    </main>
  );
}