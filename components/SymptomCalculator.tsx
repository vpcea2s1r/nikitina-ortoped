"use client";
import { useState } from "react";

const symptomCategories: { [category: string]: string[] } = {
  "Боли": [
    "Боль в зубе",
    "Чувство давления или распирания",
  ],
  "Воспаления": [
    "Кровоточивость дёсен",
    "Опухоль или отёк",
  ],
  "Эстетика": [
    "Появились пятна на зубах",
    "Неприятный запах изо рта",
  ],
  "Другие": [
    "Чувствительность к холодному/горячему",
    "Зуб расшатался",
  ],
};

const diagnosisMap: { [key: string]: string[] } = {
  "Боль в зубе": ["Кариес", "Пульпит", "Перелом зуба"],
  "Чувствительность к холодному/горячему": ["Рецессия десны", "Износ эмали"],
  "Кровоточивость дёсен": ["Гингивит", "Пародонтит"],
  "Опухоль или отёк": ["Абсцесс", "Воспаление мягких тканей"],
  "Неприятный запах изо рта": ["Налёт на языке", "Плохая гигиена", "Патология в полости рта"],
  "Зуб расшатался": ["Пародонтит", "Травма"],
  "Появились пятна на зубах": ["Деминерализация эмали", "Флюороз"],
  "Чувство давления или распирания": ["Периодонтит", "Воспаление"],
};

export default function SymptomCalculator() {
  const [selected, setSelected] = useState<string[]>([]);
  const toggleSymptom = (symptom: string) => {
    setSelected((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const getPossibleDiagnoses = (): string[] => {
    const diagnosesSet = new Set<string>();
    selected.forEach((symptom) => {
      (diagnosisMap[symptom] || []).forEach((diag) => diagnosesSet.add(diag));
    });
    return Array.from(diagnosesSet);
  };

  return (
    <section className="max-w-xl mx-auto p-6 bg-blue-50 rounded-md shadow-md my-12">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        Интерактивный калькулятор симптомов
      </h2>
      <p className="mb-6 text-gray-700">
        Выберите симптомы, которые вы испытываете, чтобы получить рекомендации.
      </p>

      {Object.entries(symptomCategories).map(([category, symptoms]) => (
        <div key={category} className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {symptoms.map((symptom) => (
              <label
                key={symptom}
                className={`cursor-pointer select-none rounded-md border px-3 py-2 flex items-center gap-3 transition ${
                  selected.includes(symptom)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-gray-300 hover:border-blue-400"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selected.includes(symptom)}
                  onChange={() => toggleSymptom(symptom)}
                  className="hidden"
                  aria-label={symptom}
                />
                <span>{symptom}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-2">
          Возможные причины:
        </h3>
        {selected.length === 0 ? (
          <p className="text-gray-600">Пожалуйста, выберите симптомы выше.</p>
        ) : (
          <ul className="list-disc ml-5 text-gray-700">
            {getPossibleDiagnoses().map((diag) => (
              <li key={diag}>{diag}</li>
            ))}
          </ul>
        )}
      </div>

      {selected.length > 0 && (
        <p className="mt-6 text-blue-700 font-semibold">
          Рекомендуется обратиться к стоматологу для точного диагноза.
        </p>
      )}
    </section>
  );
}
