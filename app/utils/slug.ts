/**
 * Утилиты для работы со slug
 * @description Функции для генерации и маппинга URL-friendly идентификаторов
 */

/**
 * Универсальная функция преобразования строки в slug
 * @param str - входная строка
 * @returns slug
 * @example "Металлокерамическая коронка" -> "metallokeramicheskaya-koronka"
 */
export function toSlug(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^а-яёa-z0-9]+/g, '-')
    .replace(/-+$/, '')
    .replace(/^-+/, '');
}

/**
 * Генерирует обратный маппинг для справочника
 * @param data - объект с данными { slug: { name: string, ... } }
 * @returns Map<name, slug>
 * @example { "metallokeramika-standart": { name: "Металлокерамика стандарт" } }
 *          -> Map { "Металлокерамика стандарт" => "metallokeramika-standart" }
 */
export function generateSlugMap<T extends Record<string, { name: string }>>(
  data: Record<string, T>
): Map<string, string> {
  const map = new Map<string, string>();
  
  for (const [slug, item] of Object.entries(data)) {
    map.set(item.name, slug);
  }
  
  return map;
}

/**
 * Безопасное получение slug из маппинга
 * @param name - имя для поиска
 * @param map - маппинг { "Имя": "slug" }
 * @param fallbackSlug - fallback slug при отсутствии в маппинге
 * @returns slug
 */
export function getSlugFromMap(
  name: string,
  map: Record<string, string>,
  fallbackSlug: string
): string {
  return map[name] || toSlug(fallbackSlug);
}

/**
 * Проверка корректности slug
 * @param slug - проверяемый slug
 * @returns boolean
 */
export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9-]+$/.test(slug) && slug.length > 0;
}

/**
 * Форматирование цены для отображения
 * @param price - цена строкой или числом
 * @returns отформатированная строка
 * @example 9000 -> "9 000 ₽"
 */
export function formatPrice(price: string | number): string {
  if (typeof price === 'number') {
    return price.toLocaleString('ru-RU') + ' ₽';
  }
  return price;
}

/**
 * Парсинг цены из строки
 * @param priceStr - строка цены "9 000 ₽"
 * @returns число
 * @example "9 000 ₽" -> 9000
 */
export function parsePrice(priceStr: string): number {
  return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
}

/**
 * Генерация канонического URL
 * @param path - путь страницы
 * @returns полный URL
 */
export function canonicalUrl(path: string): string {
  const baseUrl = 'https://ortopednn.ru';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}