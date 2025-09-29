"use client";

import React, { useState } from "react";

const CLINIC_ADDRESS = "Нижний Новгород, ул. Октябрьской Революции, д. 43, оф. 316";

function DirectionsButton() {
  const [loading, setLoading] = useState(false);

  const openMaps = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(
            CLINIC_ADDRESS
          )}`;
          window.open(mapsUrl, "_blank");
          setLoading(false);
        },
        () => {
          alert("Не удалось получить ваше местоположение. Пожалуйста, разрешите доступ.");
          setLoading(false);
        }
      );
    } else {
      alert("Геолокация не поддерживается вашим браузером.");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={openMaps}
      disabled={loading}
      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition inline-block ml-4"
    >
      {loading ? "Загрузка маршрута..." : "Как добраться"}
    </button>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-6 font-sans bg-gradient-to-br from-blue-100 via-blue-50 to-white">
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="relative z-10 text-center max-w-xl">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-700">
          Стоматолог - ортопед Никитина Марина Георгиевна
        </h1>
        <p className="text-xl mb-10 text-gray-700">
          Профессиональное протезирование зубов — восстановление эстетики и функций улыбки в Нижнем Новгороде.
        </p>
        <section className="bg-blue-50 rounded-md p-6 shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Врачебная специализация</h2>
          <p className="text-base text-gray-700">Современное протезирование зубов любой сложности</p>
        </section>
        <div className="flex justify-center">
          <a
            href="tel:+79202537317"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition inline-block"
          >
            Позвонить: 7 920 253 73 17
          </a>
          <DirectionsButton />
        </div>
      </div>
    </main>
  );
}
