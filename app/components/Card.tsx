/**
 * Card компонент
 * @component
 * @description Переиспользуемая карточка для услуг и технологий
 */

import Link from 'next/link';

/** Свойства карточки */
interface CardProps {
  /** Заголовок карточки */
  title: string;
  /** Описание */
  description: string;
  /** Ссылка (опционально - если не указана, div) */
  href?: string;
  /** Дополнительный контент (цена и т.д.) */
  extra?: React.ReactNode;
  /** Дополнительные классы */
  className?: string;
}

/**
 * Универсальная карточка
 * - Может быть ссылкой или просто блоком
 * - Поддерживает дополнительный контент (цена, теги)
 * - Hover эффект для интерактивности
 */
export function Card({ title, description, href, extra, className = '' }: CardProps) {
  const content = (
    <>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {extra && <div className="card-extra">{extra}</div>}
    </>
  );

  const cardClass = `card ${className}`;

  if (href) {
    return (
      <Link href={href} className={cardClass}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cardClass}>
      {content}
    </div>
  );
}

export default Card;