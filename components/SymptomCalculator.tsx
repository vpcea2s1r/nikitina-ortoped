"use client";
import React, { useState } from "react";

// Расширенная структура с иконками и описанием
const symptomCategories: { [category: string]: { name: string; icon: string; urgency: string; description: string }[] } = {
  "Боли": [
    {
      name: "Боль в зубе",
      icon: "/icons/tooth-pain.svg",
      urgency: "Срочно",
      description: "Может быть признаком кариеса, пульпита или перелома зуба.",
    },
    {
      name: "Чувство давления или распирания",
      icon: "/icons/pressure.svg",
      urgency: "Планово",
      description: "Ощущение распирания обычно связано с воспалением.",
    },
  ],
  "Воспаления": [
    {
      name: "Кровоточивость дёсен",
      icon: "/icons/bleeding-gums.svg",
      urgency: "Планово",
      description: "Может указывать на гингивит или пародонтит.",
    },
    {
      name: "Опухоль или отёк",
      icon: "/icons/swelling.svg",
      urgency: "Срочно",
      description: "Срочно обратитесь к врачу в случае отёка.",
    },
  ],
  "Эстетика": [
    {
      name: "Появились пятна на зубах",
      icon: "/icons/spot.svg",
      urgency: "Планово",
      description: "Деминерализация, флюороз или продукты питания.",
    },
    {
      name: "Неприятный запах изо рта",
      icon: "/icons/bad-breath.svg",
      urgency: "Планово",
      description: "Связан с налётом, плохой гигиеной или болезнью.",
    },
  ],
  "Другие": [
    {
      name: "Чувствительность к холодному/горячему",
      icon: "/icons/sensitivity.svg",
      urgency: "Планово",
      description: "Может быть при рецессии дёсен или износе эмали.",
    },
    {
      name: "Зуб расшатался",
      icon: "/icons/loose-tooth.svg",
      urgency: "Срочно",
      description: "Может быть при пародонтите или травме.",
    },
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
  const [tooltip, setTooltip] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const toggleSymptom = (symptom: string) => {
    setSelected((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
    setTooltip(null);
  };

  const getPossibleDiagnoses = (): string[] => {
    const diagnosesSet = new Set<string>();
    selected.forEach((symptom) => {
      (diagnosisMap[symptom] || []).forEach((diag) => diagnosesSet.add(diag));
    });
    return Array.from(diagnosesSet);
  };

  return (
    <section className="max-w-xl mx-auto p-6 bg-blue-50 rounded-md shadow-md my-12 relative">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6">
        Интерактивный калькулятор симптомов
      </h2>
      <p className="mb-6 text-gray-700">
        Выберите симптомы, чтобы получить рекомендации.
      </p>
      {/* Строка поиска */}
      <input
        type="text"
        placeholder="Поиск симптома..."
        className="w-full mb-6 p-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {Object.entries(symptomCategories).map(([category, symptoms]) => (
        <div key={category} className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {symptoms
              .filter(({ name }) =>
                name.toLowerCase().includes(search.toLowerCase())
              )
              .map(({ name, icon, urgency, description }) => (
                <label
                  key={name}
                  className={`cursor-pointer select-none rounded-md border px-3 py-2 flex items-center gap-3 transition relative ${
                    selected.includes(name)
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white border-gray-300 hover:border-blue-400"
                  }`}
                  onMouseEnter={() => setTooltip(name)}
                  onMouseLeave={() => setTooltip(null)}
                  onFocus={() => setTooltip(name)}
                  onBlur={() => setTooltip(null)}
                >
                  <img src={icon} alt="" className="w-6 h-6" />
                  <span>{name}</span>
                  {urgency === "Срочно" && (
                    <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-semibold">Срочно</span>
                  )}
                  {tooltip === name && (
                    <div className="absolute top-full left-0 mt-1 w-64 p-3 bg-white border border-gray-300 rounded shadow-lg text-gray-800 z-20 text-sm">
                      {description}
                    </div>
                  )}
                  <input
                    type="checkbox"
                    checked={selected.includes(name)}
                    onChange={() => toggleSymptom(name)}
                    className="hidden"
                    aria-label={name}
                  />
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
