/**
 * TypeScript типы для проекта ortopednn.ru
 * @author Разработка с 20+ годами опыта
 * @description Централизованные типы для всего приложения
 */

// ==================== Типы для услуг ====================

/** Услуга стоматолога */
export interface Service {
  /** Уникальный идентификатор (slug) */
  slug: string;
  /** Название услуги */
  name: string;
  /** Категория услуги */
  category: string;
  /** Краткое описание */
  shortDesc: string;
  /** Полное описание */
  description: string;
  /** Показания к услуге */
  indications: string[];
  /** Противопоказания */
  contraindications: string[];
  /** Варианты услуги с ценами */
  variants: ServiceVariant[];
  /** Рекомендации по уходу */
  care: string[];
  /** Цена (от) */
  price: string;
}

/** Вариант услуги */
export interface ServiceVariant {
  /** Название варианта */
  name: string;
  /** Описание */
  desc: string;
  /** Цена */
  price: string;
}

// ==================== Типы для показаний/противопоказаний ====================

/** Показание или противопоказание */
export interface Condition {
  /**Slug идентификатор */
  slug: string;
  /** Название */
  name: string;
  /** Описание */
  description: string;
  /** Симптомы */
  symptoms: string[];
  /** Метод лечения/рекомендация */
  treatment: string;
}

// ==================== Типы для технологий ====================

/** Технология протезирования */
export interface Technology {
  /**Slug */
  slug: string;
  /** Название */
  name: string;
  /** Описание */
  description: string;
  /** Как работает технология */
  howItWorks: string;
  /** Преимущества */
  pros: string[];
  /** Недостатки */
  cons: string[];
  /** Срок службы */
  lifespan: string;
  /** Цена (от) */
  price: string;
}

// ==================== Типы для вариантов ====================

/** Вариант с подробным описанием */
export interface VariantDetail {
  /**Slug */
  slug: string;
  /** Название */
  name: string;
  /** Описание */
  description: string;
  /** Плюсы */
  pros: string[];
  /** Минусы */
  cons: string[];
  /** Срок службы */
  lifespan: string;
  /** Уход */
  care: string;
}

// ==================== Типы для прайс-листа ====================

/** Категория прайс-листа */
export interface PriceCategory {
  /** Название категории */
  category: string;
  /** Список услуг */
  items: PriceItem[];
}

/** Пункт прайс-листа */
export interface PriceItem {
  /** Код услуги */
  code: string;
  /** Название */
  name: string;
  /** Цена */
  price: string;
  /** Ссылка на страницу услуги (опционально) */
  link?: string;
}

// ==================== Типы для UI компонентов ====================

/** Свойства карточки услуги */
export interface ServiceCardProps {
  title: string;
  description: string;
  link?: string;
}

/** Свойства навигации */
export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

/** Свойства кнопки */
export interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

// ==================== Типы для SEO ====================

/** SEO мета-данные страницы */
export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

/** Настройки организации для схемы */
export interface OrganizationSchema {
  name: string;
  url: string;
  logo: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: string;
    longitude: string;
  };
  telephone: string;
  priceRange: string;
  areaServed: string;
}

// ==================== Константы ====================

/** Контактные данные клиники */
export const CLINIC = {
  /** Название врача */
  DOCTOR_NAME: 'Никитина Марина Георгиевна',
  /** Должность */
  JOB_TITLE: 'Стоматолог-ортопед',
  /** Телефон */
  PHONE: '+79202537317',
  /** Форматированный телефон для отображения */
  PHONE_DISPLAY: '7 920 253 73 17',
  /** Адрес */
  ADDRESS: 'Нижний Новгород, ул. Октябрьской Революции, д. 43, оф. 316',
  /** Город */
  CITY: 'Нижний Новгород',
  /** Область */
  REGION: 'Нижегородская область',
  /** Индекс */
  POSTAL_CODE: '603000',
  /** Координаты */
  COORDS: {
    lat: '56.294',
    lon: '43.936'
  },
  /** Время работы */
  WORK_HOURS: 'Пн-Пт 09:00-18:00',
  /** Email */
  EMAIL: 'info@ortopednn.ru',
  /** Сайт */
  SITE: 'https://ortopednn.ru'
} as const;

/** URL сайта */
export const SITE_URL = 'https://ortopednn.ru' as const;

/** Настройки SEO по умолчанию */
export const DEFAULT_SEO = {
  title: 'Никитина Марина Георгиевна | Стоматолог-ортопед в Нижнем Новгороде',
  description: 'Профессиональное протезирование зубов в Нижнем Новгороде. Металлокерамика, цирконий, виниры, съемные и бюгельные протезы.',
  keywords: 'стоматолог ортопед, протезирование зубов, металлокерамика, цирконий, виниры, Нижний Новгород'
} as const;