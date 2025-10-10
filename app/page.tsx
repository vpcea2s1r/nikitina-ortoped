"use client";
import React, { useState } from "react";
import SymptomCalculator from "../components/SymptomCalculator"; // Проверь путь импорта
import PatientEducationHub from "../components/PatientEducationHub";

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
