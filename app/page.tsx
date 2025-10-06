"use client";

import React, { useState } from "react";
import SymptomCalculator from "../components/SymptomCalculator"; // Проверьте путь импорта

const CLINIC_ADDRESS = "Нижний Новгород, ул. Октябрьской Революции, д. 43, оф. 316";

function DirectionsButton() {
  const [loading, setLoading] = useState(false);

  const openMaps = () => {
    if (!navigator.geolocation) {
      alert("Геолокация не поддерживается вашим браузером.");
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(
          CLINIC_ADDRESS
        )}`;
        window.open(mapsUrl, "_blank");
        setLoading(false);
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          alert("Пожалуйста, разрешите доступ к геолокации для построения маршрута.");
        } else {
          alert("Не удалось получить ваше местоположение.");
        }
        setLoading(false);
      }
    );
  };

  return (
    <button
      onClick={openMaps}
      disabled={loading}
      aria-label={`Построить маршрут до клиники по адресу ${CLINIC_ADDRESS}`}
      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition inline-block ml-4 flex items-center justify-center focus:outline focus:outline-3 focus:outline-blue-500"
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 mr-2 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          ></path>
        </svg>
      ) : null}
      {loading ? "Загрузка маршрута..." : "Как добраться"}
    </button>
  );
}

function Navigation() {
  return (
    <nav role="navigation" aria-label="Основное меню сайта" className="mb-6">
      <ul className="flex justify-center space-x-6">
        <li>
          <a
            href="#about"
            className="text-blue-700 hover:underline focus:outline focus:outline-3 focus:outline-blue-500"
            tabIndex={0}
          >
            О враче
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="text-blue-700 hover:underline focus:outline focus:outline-3 focus:outline-blue-500"
            tabIndex={0}
          >
            Услуги
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            className="text-blue-700 hover:underline focus:outline focus:outline-3 focus:outline-blue-500"
            tabIndex={0}
          >
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default function Home() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center p-6 font-sans bg-gradient-to-br from-blue-100 via-blue-50 to-white"
      role="main"
    >
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="relative z-10 text-center max-w-xl">

        <Navigation />

        <h1 className="text-5xl font-extrabold mb-6 text-blue-700" id="about">
          Стоматолог - ортопед Никитина Марина Георгиевна
        </h1>
        <p className="text-xl mb-10 text-gray-700">
          Профессиональное протезирование зубов — восстановление эстетики и функций улыбки в Нижнем Новгороде.
        </p>

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

        {/* Встраиваем калькулятор симптомов здесь */}
        <SymptomCalculator />

        {/* Вставляем анимацию этапов протезирования */}

        <div
          id="contacts"
          className="flex justify-center mt-12"
          aria-label="Контактные данные"
        >
          <a
            href="tel:+79202537317"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition inline-block focus:outline focus:outline-3 focus:outline-blue-500"
          >
            Позвонить: 7 920 253 73 17
          </a>
          <DirectionsButton />
        </div>
      </div>
    </main>
  );
}
