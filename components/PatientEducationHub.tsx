"use client";
import React, { useState } from "react";

const articles = [
  {
    id: "prevention",
    category: "Профилактика",
    title: "Профилактика кариеса",
    short: "Как защитить зубы от разрушения.",
    content: (
      <ul>
        <li>Чистите зубы дважды в день пастой с фтором</li>
        <li>Ограничьте сладкое и газировку</li>
        <li>Посещайте стоматолога раз в полгода</li>
      </ul>
    ),
  },
  {
    id: "prosthetics",
    category: "Протезирование",
    title: "Этапы протезирования зубов",
    short: "Что происходит на каждом этапе лечения.",
    content: (
      <ol>
        <li>Консультация и диагностика</li>
        <li>Подготовка зубов и слепки</li>
        <li>Установка временных протезов</li>
        <li>Финальная фиксация постоянных протезов</li>
      </ol>
    ),
  },
];

export default function PatientEducationHub() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="max-w-3xl mx-auto p-6 mb-12 bg-white rounded-xl shadow-lg font-sans">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Patient Education Hub
      </h2>

      <nav className="flex justify-center gap-4 mb-6 flex-wrap">
        <button
          onClick={() => setActiveId(null)}
          className={`px-3 py-1 rounded-full font-semibold transition ${
            activeId === null ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-700"
          }`}
        >
          Все темы
        </button>
        {[...new Set(articles.map((a) => a.category))].map((category) => (
          <button
            key={category}
            onClick={() => setActiveId(category)}
            className={`px-3 py-1 rounded-full font-semibold transition ${
              activeId === category ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-700"
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      {activeId === null ? (
        <div className="grid gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="p-4 rounded-lg border border-gray-200 shadow-sm bg-blue-50 hover:bg-blue-100 transition cursor-pointer"
              onClick={() => setActiveId(article.id)}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setActiveId(article.id)}
            >
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-700">{article.short}</p>
              <button className="mt-3 text-blue-600 underline">Подробнее</button>
            </article>
          ))}
        </div>
      ) : (
        <div className="prose max-w-none mx-auto bg-white p-6 rounded-lg shadow">
          {articles
            .filter((a) => a.category === activeId || a.id === activeId)
            .map((article) => (
              <article key={article.id}>
                <h3 className="text-2xl font-bold mb-4 text-blue-700">{article.title}</h3>
                <div>{article.content}</div>
                <button
                  className="mt-6 text-blue-600 underline"
                  onClick={() => setActiveId(null)}
                >
                  ← Назад к списку
                </button>
              </article>
            ))}
        </div>
      )}
    </section>
  );
}
