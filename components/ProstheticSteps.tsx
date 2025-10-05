import React, { useState } from "react";

const steps = [
  {
    title: "Консультация",
    description: "Осмотр и планирование лечения с врачом-ортопедом.",
  },
  {
    title: "Подготовка",
    description: "Подготовка зубов и слепки для изготовления протеза.",
  },
  {
    title: "Изготовление",
    description: "Создание протеза с использованием современных технологий.",
  },
  {
    title: "Установка",
    description: "Фиксация протеза и корректировка для комфорта.",
  },
  {
    title: "Обслуживание",
    description: "Регулярный уход и контроль состояния протеза.",
  },
];

export default function ProstheticSteps() {
  const [current, setCurrent] = useState(0);

  const nextStep = () => {
    setCurrent((prev) => (prev + 1) % steps.length);
  };
  const prevStep = () => {
    setCurrent((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="max-w-xl mx-auto p-6 bg-white rounded shadow-md text-center">
      <h2 className="text-3xl font-semibold mb-4">Этапы протезирования</h2>
      <div className="mb-6">
        <div key={current} className="animate-fadeIn">
          <h3 className="text-xl font-bold text-blue-600 mb-2">
            {steps[current].title}
          </h3>
          <p className="text-gray-700">{steps[current].description}</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={prevStep}
          aria-label="Предыдущий этап"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Назад
        </button>
        <button
          onClick={nextStep}
          aria-label="Следующий этап"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Вперед
        </button>
      </div>
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
