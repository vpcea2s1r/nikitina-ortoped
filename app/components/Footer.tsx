/**
 * Footer компонент
 * @component
 * @description Подвал сайта с копирайтом
 */

import { CLINIC } from '../types';

/**
 * Footer компонент
 * - Отображает год и имя врача
 * - Простой и понятный дизайн
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} {CLINIC.DOCTOR_NAME}</p>
        <p className="footer-subtitle">{CLINIC.JOB_TITLE} в {CLINIC.CITY}</p>
      </div>
    </footer>
  );
}

export default Footer;