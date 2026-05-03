/**
 * Интерактивная одонтограмма (схема зубов)
 * @component
 * @description Визуальная схема зубов для отметки проблемных участков
 * 
 * @example
 * <Odontogram />
 * 
 * @returns Секция с интерактивной схемой зубов
 */
"use client";

import React, { useState, useCallback, useMemo } from "react";
import { TOOTH_NUMBERS, ODONTOGRAM_SYMPTOMS, type OdontogramSymptom } from "@/lib/constants";

/**
 * Тип состояния выбранных симптомов для зубов
 */
type SelectedSymptoms = Record<string, string>;

/**
 * Хук для управления состоянием выбранных симптомов
 */
function useOdontogramState() {
  const [activeTooth, setActiveTooth] = useState<string | null>(null);
  const [selected, setSelected] = useState<SelectedSymptoms>({});

  const handleToothClick = useCallback((number: string) => {
    setActiveTooth(number);
  }, []);

  const selectSymptom = useCallback((tooth: string, symptom: string) => {
    setSelected((prev) => ({ ...prev, [tooth]: symptom }));
    setActiveTooth(null);
  }, []);

  const clearActiveTooth = useCallback(() => {
    setActiveTooth(null);
  }, []);

  return {
    activeTooth,
    selected,
    handleToothClick,
    selectSymptom,
    clearActiveTooth,
  };
}

/**
 * Проверка, выбран ли зуб
 */
function isToothSelected(selected: SelectedSymptoms, toothNumber: string): boolean {
  return Boolean(selected[toothNumber]);
}

/**
 * Компонент одного зуба в схеме
 */
interface ToothProps {
  number: string;
  x: number;
  y: number;
  isSelected: boolean;
  onClick: () => void;
}

function Tooth({ number, x, y, isSelected, onClick }: ToothProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="26"
        height="36"
        rx="7"
        className={`
          cursor-pointer transition
          ${isSelected 
            ? "fill-blue-400 stroke-blue-700" 
            : "fill-white stroke-gray-400 hover:fill-blue-100"
          }
        `}
        strokeWidth="2"
        onClick={onClick}
        role="button"
        aria-label={`Зуб ${number}${isSelected ? ", отмечен" : ""}`}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
      />
      <text
        x={x + 13}
        y={y + 24}
        fontSize="12"
        textAnchor="middle"
        className="select-none pointer-events-none"
        fill={isSelected ? "#1742b7" : "#444"}
      >
        {number}
      </text>
    </g>
  );
}

/**
 * Компонент модального окна выбора симптома
 */
interface SymptomModalProps {
  toothNumber: string;
  symptoms: OdontogramSymptom[];
  onSelect: (tooth: string, symptom: string) => void;
  onClose: () => void;
}

function SymptomModal({ toothNumber, symptoms, onSelect, onClose }: SymptomModalProps) {
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black/30 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-xl p-6 shadow-lg max-w-xs w-full text-left">
        <h4 
          id="modal-title"
          className="font-bold text-blue-700 mb-2 text-lg"
        >
          Зуб {toothNumber}
        </h4>
        <div role="listbox" aria-label="Выберите симптом">
          {symptoms.map((symptom) => (
            <button
              key={symptom.name}
              onClick={() => onSelect(toothNumber, symptom.name)}
              className={`
                w-full text-left px-4 py-2 mb-2 rounded transition
                ${symptom.urgency === "Срочно"
                  ? "bg-red-100 text-red-700 font-bold hover:bg-red-200"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }
              `}
              role="option"
            >
              <span className="font-semibold">{symptom.name}</span>
              <span className="ml-2 text-xs text-gray-600">{symptom.description}</span>
            </button>
          ))}
        </div>
        <button
          className="mt-2 text-blue-700 underline"
          onClick={onClose}
          aria-label="Закрыть окно выбора"
        >
          Отмена
        </button>
      </div>
    </div>
  );
}

/**
 * Компонент списка выбранных симптомов
 */
interface SelectedListProps {
  selected: SelectedSymptoms;
}

function SelectedList({ selected }: SelectedListProps) {
  const entries = useMemo(() => Object.entries(selected), [selected]);
  
  if (entries.length === 0) return null;

  return (
    <div className="mt-5 p-4 bg-blue-50 rounded-xl shadow max-w-md mx-auto">
      <h5 className="font-bold mb-3 text-blue-700">Выбранные зубы и симптомы:</h5>
      <ul className="list-disc ml-5 text-left" role="list">
        {entries.map(([number, symptom]) => (
          <li key={number}>
            Зуб {number}: {symptom}
          </li>
        ))}
      </ul>
    </div>
  );
}

// =============================================================================
// ОСНОВНОЙ КОМПОНЕНТ
// =============================================================================

export default function Odontogram() {
  const { activeTooth, selected, handleToothClick, selectSymptom, clearActiveTooth } = useOdontogramState();
  
  // Верхняя челюсть (первые 16 зубов)
  const upperTeeth = useMemo(() => TOOTH_NUMBERS.slice(0, 16), []);
  // Нижняя челюсть (оставшиеся 16 зубов)
  const lowerTeeth = useMemo(() => TOOTH_NUMBERS.slice(16), []);

  return (
    <section 
      className="mx-auto p-4 bg-white rounded-xl shadow-md"
      aria-labelledby="odontogram-title"
    >
      <h3 
        id="odontogram-title"
        className="text-xl font-bold text-blue-700 mb-5 text-center"
      >
        Одонтограмма — Ваша интерактивная схема зубов
      </h3>
      
      <div className="flex flex-col items-center gap-8">
        {/* Схема зубов */}
        <svg 
          viewBox="0 0 520 120" 
          className="max-w-full h-auto"
          role="img"
          aria-label="Схема зубов. Верхний ряд: зубы 11-18, нижний ряд: зубы 31-48"
        >
          {/* Верхняя челюсть */}
          {upperTeeth.map((number, i) => (
            <Tooth
              key={`upper-${number}`}
              number={number}
              x={30 + i * 30}
              y={20}
              isSelected={isToothSelected(selected, number)}
              onClick={() => handleToothClick(number)}
            />
          ))}
          
          {/* Нижняя челюсть */}
          {lowerTeeth.map((number, i) => (
            <Tooth
              key={`lower-${number}`}
              number={number}
              x={30 + i * 30}
              y={70}
              isSelected={isToothSelected(selected, number)}
              onClick={() => handleToothClick(number)}
            />
          ))}
        </svg>

        {/* Модальное окно выбора симптома */}
        {activeTooth && (
          <SymptomModal
            toothNumber={activeTooth}
            symptoms={ODONTOGRAM_SYMPTOMS}
            onSelect={selectSymptom}
            onClose={clearActiveTooth}
          />
        )}

        {/* Список выбранных симптомов */}
        <SelectedList selected={selected} />
      </div>
    </section>
  );
}