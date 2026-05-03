/**
 * Навигационный компонент
 * @component
 * @description Универсальная навигация для всех страниц сайта
 */

import Link from 'next/link';
import { CLINIC } from '../types';

/** Свойства навигации */
interface NavProps {
  /** Дополнительные ссылки для навигации */
  additionalLinks?: { label: string; href: string }[];
}

/**
 * Навигационный компонент
 * - Sticky position для постоянной видимости
 * - Адаптивный дизайн
 * - Поддержка дополнительных ссылок
 */
export function Nav({ additionalLinks = [] }: NavProps) {
  const defaultLinks = [
    { label: 'Услуги', href: '/services' },
    { label: 'Цены', href: '/#price' },
    { label: 'Контакты', href: '/#contacts' }
  ];

  const allLinks = [...defaultLinks, ...additionalLinks];

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          {CLINIC.DOCTOR_NAME.split(' ')[0]} {CLINIC.DOCTOR_NAME.split(' ')[1].charAt(0)}.
        </Link>
        <div className="nav-links">
          {allLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;