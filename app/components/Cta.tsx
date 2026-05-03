/**
 * CTA (Call To Action) компонент
 * @component
 * @description Блок с призывом к действию - запись на приём
 */

import Link from 'next/link';
import { CLINIC } from '../types';

/** Свойства CTA компонента */
interface CtaProps {
  /** Заголовок */
  title?: string;
  /** Описание */
  description?: string;
  /** Текст кнопки */
  buttonText?: string;
}

/**
 * CTA блок для записи на консультацию
 * - Используется на всех страницах услуг
 * - Настраиваемый текст
 * - phone: звонок по клику
 */
export function Cta({
  title = 'Нужна консультация?',
  description = 'Позвоните — врач ответит на ваши вопросы',
  buttonText = `Позвонить: ${CLINIC.PHONE_DISPLAY}`
}: CtaProps) {
  return (
    <div className="cta-box">
      <h2 className="cta-title">{title}</h2>
      <p className="cta-description">{description}</p>
      <Link href={`tel:${CLINIC.PHONE}`} className="btn btn-primary cta-button">
        {buttonText}
      </Link>
    </div>
  );
}

export default Cta;