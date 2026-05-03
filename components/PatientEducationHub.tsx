/**
 * Образовательный центр для пациентов
 * @component
 * @description Информационные статьи о профилактике и протезировании зубов
 * 
 * @example
 * <PatientEducationHub />
 * 
 * @returns Секция с образовательными материалами
 */
"use client";

import React, { useState, useMemo, useCallback } from "react";
import { ARTICLES, type Article } from "@/lib/constants";

/**
 * Получение уникальных категорий из статей
 * @returns Массив уникальных названий категорий
 */
function useCategories(): string[] {
  return useMemo(() => {
    return [...new Set(ARTICLES.map((a) => a.category))];
  }, []);
}

/**
 * Фильтрация статей по выбранной категории или идентификатору
 * @param activeId Идентификатор выбранной статьи или категории
 * @returns Отфильтрованный массив статей
 */
function useFilteredArticles(activeId: string | null): Article[] {
  return useMemo(() => {
    if (!activeId) return ARTICLES;
    return ARTICLES.filter(
      (a) => a.category === activeId || a.id === activeId
    );
  }, [activeId]);
}

/**
 * Компонент кнопки фильтра категорий
 */
interface CategoryButtonProps {
  category: string | null;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function CategoryButton({ category, isActive, onClick, children }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-3 py-1 rounded-full font-semibold transition
        ${isActive 
          ? "bg-blue-600 text-white" 
          : "bg-blue-100 text-blue-700 hover:bg-blue-200"
        }
      `}
      aria-pressed={isActive}
    >
      {children}
    </button>
  );
}

/**
 * Компонент карточки статьи в списке
 */
interface ArticleCardProps {
  article: Article;
  onClick: () => void;
}

function ArticleCard({ article, onClick }: ArticleCardProps) {
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  }, [onClick]);

  return (
    <article
      className="p-4 rounded-lg border border-gray-200 shadow-sm bg-blue-50 hover:bg-blue-100 transition cursor-pointer"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="button"
      aria-label={`Читать: ${article.title}`}
    >
      <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
      <p className="text-gray-700">{article.short}</p>
      <span className="mt-3 text-blue-600 underline block">
        Подробнее
      </span>
    </article>
  );
}

/**
 * Компонент полного отображения статьи
 */
interface ArticleViewProps {
  articles: Article[];
  onBack: () => void;
}

function ArticleView({ articles, onBack }: ArticleViewProps) {
  return (
    <div className="prose max-w-none mx-auto bg-white p-6 rounded-lg shadow">
      {articles.map((article) => (
        <article key={article.id}>
          <h3 className="text-2xl font-bold mb-4 text-blue-700">
            {article.title}
          </h3>
          <div className="text-gray-700">{article.content}</div>
          <button
            className="mt-6 text-blue-600 underline"
            onClick={onBack}
          >
            ← Назад к списку
          </button>
        </article>
      ))}
    </div>
  );
}

// =============================================================================
// ОСНОВНОЙ КОМПОНЕНТ
// =============================================================================

export default function PatientEducationHub() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const categories = useCategories();
  const filteredArticles = useFilteredArticles(activeId);

  const handleCategoryClick = useCallback((category: string | null) => {
    setActiveId(category);
  }, []);

  const handleArticleClick = useCallback((articleId: string) => {
    setActiveId(articleId);
  }, []);

  return (
    <section 
      className="max-w-3xl mx-auto p-6 mb-12 bg-white rounded-xl shadow-lg font-sans"
      aria-labelledby="education-hub-title"
    >
      <h2 
        id="education-hub-title"
        className="text-3xl font-bold text-blue-700 mb-8 text-center"
      >
        Образовательный центр для пациентов
      </h2>

      {/* Навигация по категориям */}
      <nav className="flex justify-center gap-4 mb-6 flex-wrap" aria-label="Фильтр статей">
        <CategoryButton
          category={null}
          isActive={activeId === null}
          onClick={() => handleCategoryClick(null)}
        >
          Все темы
        </CategoryButton>
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            isActive={activeId === category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </nav>

      {/* Контент */}
      {activeId === null ? (
        <div className="grid gap-6">
          {ARTICLES.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={() => handleArticleClick(article.id)}
            />
          ))}
        </div>
      ) : (
        <ArticleView
          articles={filteredArticles}
          onBack={() => setActiveId(null)}
        />
      )}
    </section>
  );
}