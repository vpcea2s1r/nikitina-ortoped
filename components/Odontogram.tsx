"use client";
import React, { useState } from "react";

// FDI номера зубов
const toothNumbers = [
  // Верхняя правая четверть
  "18", "17", "16", "15", "14", "13", "12", "11",
  // Верхняя левая четверть
  "21", "22", "23", "24", "25", "26", "27", "28",
  // Нижняя левая четверть
  "38", "37", "36", "35", "34", "33", "32", "31",
  // Нижняя правая четверть
  "41", "42", "43", "44", "45", "46", "47", "48",
];

// Пример симптомов
const symptoms = [
  { name: "Боль", urgency: "Срочно", description: "Острая или ноющая боль." },
  { name: "Чувствительность", urgency: "Планово", description: "Реакция на холод/горячее." },
  { name: "Пятно", urgency: "Планово", description: "Изменение цвета эмали." },
  { name: "Кровоточивость", urgency: "Срочно", description: "Десна кровоточит или опухла." },
];

export default function Odontogram() {
  const [activeTooth, setActiveTooth] = useState<string | null>(null);
  const [selected, setSelected] = useState<{ [toothId: string]: string }>({});

  const handleToothClick = (number: string) => setActiveTooth(number);

  const selectSymptom = (tooth: string, symptom: string) => {
    setSelected(prev => ({ ...prev, [tooth]: symptom }));
    setActiveTooth(null);
  };

  return (
    <section className="mx-auto p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-blue-700 mb-5 text-center">
        Одонтограмма — Ваша интерактивная схема зубов
      </h3>
      <div className="flex flex-col items-center gap-8">
        {/* Верхняя челюсть */}
        <svg viewBox="0 0 520 120" className="max-w-full h-auto">
          {/* Верхний ряд */}
          {toothNumbers.slice(0,16).map((number, i) => (
            <g key={number}>
              <rect
                x={30 + i*30}
                y={20}
                width="26"
                height="36"
                rx="7"
                className={`cursor-pointer transition ${
                  selected[number]
                    ? "fill-blue-400 stroke-blue-700"
                    : "fill-white stroke-gray-400 hover:fill-blue-100"
                }`}
                strokeWidth="2"
                onClick={() => handleToothClick(number)}
              />
              <text
                x={43 + i*30}
                y={60}
                fontSize="12"
                textAnchor="middle"
                className="select-none"
                fill={selected[number] ? "#1742b7" : "#444"}
              >
                {number}
              </text>
            </g>
          ))}
          {/* Нижний ряд */}
          {toothNumbers.slice(16).map((number, i) => (
            <g key={number}>
              <rect
                x={30 + i*30}
                y={70}
                width="26"
                height="36"
                rx="7"
                className={`cursor-pointer transition ${
                  selected[number]
                    ? "fill-blue-400 stroke-blue-700"
                    : "fill-white stroke-gray-400 hover:fill-blue-100"
                }`}
                strokeWidth="2"
                onClick={() => handleToothClick(number)}
              />
              <text
                x={43 + i*30}
                y={102}
                fontSize="12"
                textAnchor="middle"
                className="select-none"
                fill={selected[number] ? "#1742b7" : "#444"}
              >
                {number}
              </text>
            </g>
          ))}
        </svg>

        {/* Модальное окно выбора симптома */}
        {activeTooth && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
            <div className="bg-white rounded-xl p-6 shadow-lg max-w-xs w-full text-left">
              <h4 className="font-bold text-blue-700 mb-2 text-lg">
                Зуб {activeTooth}
              </h4>
              <div>
                {symptoms.map(symptom => (
                  <button
                    key={symptom.name}
                    onClick={() => selectSymptom(activeTooth, symptom.name)}
                    className={`w-full text-left px-4 py-2 mb-2 rounded transition ${
                      symptom.urgency === "Срочно"
                        ? "bg-red-100 text-red-700 font-bold"
                        : "bg-blue-100 text-blue-700"
                    } hover:bg-blue-200`}
                  >
                    {symptom.name}
                    <span className="ml-2 text-xs text-gray-600">{symptom.description}</span>
                  </button>
                ))}
              </div>
              <button
                className="mt-2 text-blue-700 underline"
                onClick={() => setActiveTooth(null)}
              >
                Отмена
              </button>
            </div>
          </div>
        )}

        {/* Выбранные симптомы */}
        {Object.keys(selected).length > 0 && (
          <div className="mt-5 p-4 bg-blue-50 rounded-xl shadow max-w-md mx-auto">
            <h5 className="font-bold mb-3 text-blue-700">Выбранные зубы и симптомы:</h5>
            <ul className="list-disc ml-5 text-left">
              {Object.entries(selected).map(([number, symptom]) => (
                <li key={number}>
                  Зуб {number}: {symptom}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
