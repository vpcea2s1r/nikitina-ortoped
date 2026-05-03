/**
 * Интерактивный калькулятор симптомов для предварительной самодиагностики
 * @component
 * @description Позволяет пользователю выбрать симптомы и получить список возможных причин
 * 
 * @example
 * <SymptomCalculator />
 * 
 * @returns Секция с интерактивным калькулятором симптомов
 */
"use client";

import React, { useState, useMemo, useCallback } from "react";
import { SYMPTOM_CATEGORIES, DIAGNOSIS_MAP, type Symptom } from "@/lib/constants";

/**
 * Хук для управления выбранными симптомами
 * @returns Массив выбранных симптомов и функция переключения
 */
function useSelectedSymptoms() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSymptom = useCallback((symptom: string) => {
    setSelected((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  }, []);

  return { selected, toggleSymptom };
}

/**
 * Хук для фильтрации симптомов по поисковому запросу
 * @param search Поисковый запрос
 * @returns Отфильтрованные категории симптомов
 */
function useFilteredSymptoms(search: string) {
  return useMemo(() => {
    if (!search.trim()) return SYMPTOM_CATEGORIES;

    const searchLower = search.toLowerCase();
    const filtered: typeof SYMPTOM_CATEGORIES = {};

    for (const [category, symptoms] of Object.entries(SYMPTOM_CATEGORIES)) {
      const matchingSymptoms = symptoms.filter((s) =>
        s.name.toLowerCase().includes(searchLower)
      );
      if (matchingSymptoms.length > 0) {
        filtered[category] = matchingSymptoms;
      }
    }

    return filtered;
  }, [search]);
}

/**
 * Хук для получения возможных диагнозов на основе выбранных симптомов
 * @param selectedSymptoms Массив выбранных симптомов
 * @returns Уникальный массив возможных диагнозов
 */
function useDiagnoses(selectedSymptoms: string[]) {
  return useMemo(() => {
    const diagnosesSet = new Set<string>();
    selectedSymptoms.forEach((symptom) => {
      (DIAGNOSIS_MAP[symptom] || []).forEach((diag) => diagnosesSet.add(diag));
    });
    return Array.from(diagnosesSet).sort();
  }, [selectedSymptoms]);
}

/**
 * Компонент отображения одного симптома с иконкой и подсказкой
 * @param symptom Объект симптома
 * @param isSelected Флаг выбора симптома
 * @param onToggle Функция переключения выбора
 * @param onHover Функция обработки наведения (для подсказки)
 */
interface SymptomItemProps {
  symptom: Symptom;
  isSelected: boolean;
  onToggle: () => void;
  onHover: (show: boolean) => void;
}

function SymptomItem({ symptom, isSelected, onToggle, onHover }: SymptomItemProps) {
  return (
    <label
      className={`
        cursor-pointer select-none rounded-md border px-3 py-2 flex items-center gap-3 transition relative
        ${isSelected ? "bg-blue-600 text-white border-blue-600" : "bg-white border-gray-300 hover:border-blue-400"}
      `}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onFocus={() => onHover(true)}
      onBlur={() => onHover(false)}
    >
      <img 
        src={symptom.icon} 
        alt="" 
        className="w-6 h-6" 
        loading="lazy"
      />
      <span className="flex-1">{symptom.name}</span>
      {symptom.urgency === "Срочно" && (
        <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-semibold shrink-0">
          Срочно
        </span>
      )}
      <input
        type="checkbox"
        checked={isSelected}
        onChange={onToggle}
        className="sr-only"
        aria-label={symptom.name}
      />
    </label>
  );
}

/**
 * Компонент подсказки с описанием симптома
 * @param description Текст подсказки
 */
function Tooltip({ description }: { description: string }) {
  return (
    <div className="absolute left-0 bottom-full mb-2 w-64 p-3 bg-white border border-gray-300 rounded shadow-lg text-gray-800 z-20 text-sm">
      {description}
    </div>
  );
}

/**
 * Компонент списка возможных диагнозов
 * @param diagnoses Массив диагнозов
 */
function DiagnosisList({ diagnoses }: { diagnoses: string[] }) {
  if (diagnoses.length === 0) {
    return <p className="text-gray-600">Пожалуйста, выберите симптомы выше.</p>;
  }

  return (
    <ul className="list-disc ml-5 text-gray-700">
      {diagnoses.map((diag) => (
        <li key={diag}>{diag}</li>
      ))}
    </ul>
  );
}

// =============================================================================
// ОСНОВОЙ КОМПОНЕНТ
// =============================================================================

export default function SymptomCalculator() {
  const [search, setSearch] = useState("");
  const [tooltipName, setTooltipName] = useState<string | null>(null);
  const { selected, toggleSymptom } = useSelectedSymptoms();
  const filteredCategories = useFilteredSymptoms(search);
  const diagnoses = useDiagnoses(selected);

  // Проверка наличия симптомов для отображения
  const hasSymptoms = Object.keys(filteredCategories).length > 0;

  return (
    <section 
      className="max-w-xl mx-auto p-6 bg-blue-50 rounded-md shadow-md my-12"
      aria-labelledby="symptom-calculator-title"
    >
      <h2 
        id="symptom-calculator-title"
        className="text-2xl font-semibold text-blue-700 mb-6"
      >
        Интерактивный калькулятор симптомов
      </h2>
      
      <p className="mb-6 text-gray-700">
        Выберите симптомы, чтобы получить рекомендации.
      </p>

      {/* Поиск симптомов */}
      <input
        type="search"
        placeholder="Поиск симптома..."
        className="w-full mb-6 p-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Поиск симптомов"
      />

      {/* Категории симптомов */}
      {hasSymptoms ? (
        Object.entries(filteredCategories).map(([category, symptoms]) => (
          <div key={category} className="mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {symptoms.map((symptom) => (
                <div key={symptom.name} className="relative">
                  <SymptomItem
                    symptom={symptom}
                    isSelected={selected.includes(symptom.name)}
                    onToggle={() => {
                      toggleSymptom(symptom.name);
                      setTooltipName(null);
                    }}
                    onHover={(show) => setTooltipName(show ? symptom.name : null)}
                  />
                  {tooltipName === symptom.name && (
                    <Tooltip description={symptom.description} />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center py-4">
          Симптомы не найдены. Попробуйте изменить поисковый запрос.
        </p>
      )}

      {/* Возможные причины */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">
          Возможные причины:
        </h3>
        <DiagnosisList diagnoses={diagnoses} />
      </div>

      {/* Рекомендация */}
      {selected.length > 0 && (
        <p className="mt-6 text-blue-700 font-semibold">
          Рекомендуется обратиться к стоматологу для точного диагноза.
        </p>
      )}
    </section>
  );
}