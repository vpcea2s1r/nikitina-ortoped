# SEO-индекс ortopednn.ru — проверка требований Яндекса

> Обновлено: 2026-05-11
> Версия: 1.1 (исправления выполнены)

---

## Статус: В РАБОТЕ

---

## 1. Технические требования

| Параметр | Состояние | Текущее значение | Требуется | Действие |
|----------|-----------|-----------------|-----------|----------|
| robots.txt | ✅ Есть | `/out/robots.txt` | Доступен поисковику | — |
| sitemap.xml | ✅ Исправлено | 16 URL | Все страницы | sitemap.ts обновлён, билд выполнен |
| HTTPS | ✅ Работает | ortopednn.ru SSL | Обязательно | — |
| Канонические URL | ✅ Есть | `alternates: canonical` в metadata | На каждой странице | — |
| Статический HTML | ✅ Есть | Next.js output: 'export' | Для индексации | — |
| HTTP-ответы | ❓ Не проверено | — | 200 OK | Проверить ортопеднн |

---

## 2. Метатеги (title, description, keywords)

### Главная страница

| Тег | Статус | Текущее | Требуется |
|-----|--------|---------|-----------|
| `<title>` | ✅ | "Никитина Марина Георгиевна \| Стоматолог-ортопед в Нижнем Новгороде \| Протезирование зубов" | — |
| `<meta name="description">` | ✅ | "Стоматолог-ортопед Никитина М.Г. в Нижнем Новгороде. Протезирование зубов: металлокерамика, цирконий, виниры E-MAX, съемные и бюгельные протезы. Запись на приём. Адрес: ул. Октябрьской Революции, д. 43, оф. 316." | — |
| `<meta name="keywords">` | ✅ | "стоматолог ортопед, протезирование зубов, металлокерамика, циркониевые коронки, виниры E-MAX, съемные протезы, бюгельные протезы, нейлоновые протезы, AcryFree, зубные коронки, Нижний Новгород" | — |
| `<link rel="canonical">` | ✅ | `https://ortopednn.ru` | — |

### Страница /services

| Тег | Статус | Текущее |
|-----|--------|---------|
| `<title>` | ✅ | "Услуги \| Протезирование зубов в Нижнем Новгороде" |
| `<meta name="description">` | ✅ | Описания услуг |

### Страницы услуг (/services/[slug])

| Страница | title | description | canonical | Статус |
|----------|-------|-------------|-----------|--------|
| metallokeramicheskaya-koronka | ✅ | ✅ | ✅ | — |
| cirkonievaya-koronka | ✅ | ✅ | ✅ | — |
| viniry-emaks | ✅ | ✅ | ✅ | — |
| vradecheskaya-vkladka | ✅ (через content.ts) | ✅ | ✅ | — |
| laboratornaya-vkladka | ✅ | ✅ | ✅ | — |
| celnolitaya-koronka | ✅ | ✅ | ✅ | — |
| acryfree | ✅ | ✅ | ✅ | — |
| nejlonovyj-protez | ✅ | ✅ | ✅ | — |
| chastichny-sjemny-protez | ✅ | ✅ | ✅ | — |
| polny-sjemny-protez | ✅ | ✅ | ✅ | — |
| byugelnyj-klammery | ✅ | ✅ | ✅ | — |
| byugelnyj-zamki | ✅ | ✅ | ✅ | — |
| sjemny-protez | ✅ | ✅ | ✅ | — |

---

## 3. Структурированные данные (Schema.org / JSON-LD)

| Элемент | Статус | Файл | Примечание |
|---------|--------|------|------------|
| Organization | ✅ Есть | `app/page.tsx` | Полный адрес, телефон, GeoCoordinates |
| Physician | ✅ Есть | `app/page.tsx` | Никитина М.Г., график работы |
| Dentist | ✅ Есть | `app/page.tsx` | |
| BreadcrumbList | ✅ Есть | `app/page.tsx` | |
| Service (services page) | ✅ Есть | `app/services/page.tsx` | |
| MedicalCondition | ✅ Есть | `app/services/condition/[slug]/page.tsx` | |
| Hreflang | ❌ Нет | — | Для мультиязычности (ru only — не требуется) |
| Image | ⚠️ Частично | og-image.png в /public | Нужна SVG/PNG иконка услуг |

**Замечание по geo**: координаты указаны как `56.294, 43.936` — могут быть неточны. Рекомендуется уточнить по адресу ул. Октябрьской Революции, 43.

---

## 4. Контент и ключевые слова

### Целевые запросы для Нижнего Новгорода

| Ключевое слово | Частота | Страница | Статус |
|----------------|---------|----------|--------|
 протезирование зубов Нижний Новгород | Высокая | / | ✅ |
| металлокерамическая коронка Нижний Новгород | Высокая | /services/metallokeramicheskaya-koronka | ✅ |
| циркониевая коронка Нижний Новгород | Высокая | /services/cirkonievaya-koronka | ✅ |
| виниры Нижний Новгород | Высокая | /services/viniry-emaks | ✅ |
| съёмный протез Нижний Новгород | Средняя | /services/sjemny-protez | ✅ |
| бюгельный протез Нижний Новгород | Средняя | /services/byugelnyj-klammery | ✅ |
| нейлоновый протез | Средняя | /services/nejlonovyj-protez | ✅ |
| AcryFree протез | Средняя | /services/acryfree | ✅ |
| вкладка на зуб | Средняя | /services/vradecheskaya-vkladka | ✅ |
| иммедиат протез | Низкая | — | ❌ Страница отсутствует |
| протезирование без обточки | Низкая | — | ❌ Не реализовано |
| коронка на передние зубы | Средняя | /services/viniry-emaks | ✅ |
| имплант или коронка | Низкая | — | ❌ Нет страницы-сравнения |
| протезирование при пародонтозе | Низкая | — | ❌ Нет страницы |
| стоматолог ортопед Никитина | Бренд | / | ✅ |
| врач ортопед Никитина Марина | Бренд | / | ✅ |

### Кластеризация запросов

**Информационные (статьи/блог):**
- Как ухаживать за съёмным протезом
- Что лучше: коронка или винир
- Чем отличается цирконий от металлокерамики
- Срок службы коронок
- Больно ли ставить виниры

**Коммерческие (услуги):**
- Цена металлокерамической коронки
- Стоимость виниров E-MAX
- Протезирование зубов цены
- AcryFree отзывы / цена

**Навигационные:**
- Стоматолог ортопед Никитина Нижний Новгород
- ortopednn.ru

### Проверка частотности (не проверено)

> TODO: Проверить частоту запросов через Яндекс.Wordstat:
> - https://wordstat.yandex.ru/

---

## 5. Sitemap

**sitemap.xml** (`out/sitemap.xml`) содержит 16 URL (после исправлений):

1. https://ortopednn.ru (priority 1)
2. https://ortopednn.ru/services (priority 0.9)
3. https://ortopednn.ru/services/vradecheskaya-vkladka
4. https://ortopednn.ru/services/laboratornaya-vkladka
5. https://ortopednn.ru/services/cirkonievaya-koronka
6. https://ortopednn.ru/services/viniry-emaks (priority 0.9)
7. https://ortopednn.ru/services/metallokeramicheskaya-koronka
8. https://ortopednn.ru/services/celnolitaya-koronka
9. https://ortopednn.ru/services/chastichny-sjemny-protez
10. https://ortopednn.ru/services/polny-sjemny-protez
11. https://ortopednn.ru/services/acryfree
12. https://ortopednn.ru/services/nejlonovyj-protez
13. https://ortopednn.ru/services/immediat-protez (✅ добавлен)
14. https://ortopednn.ru/services/byugelnyj-klammery
15. https://ortopednn.ru/services/byugelnyj-zamki
16. https://ortopednn.ru/services/sjemny-protez (priority 0.9)

**Динамические разделы** (не в sitemap, но индексируются через внутренние ссылки):
- /services/variant/[slug] — 32 варианта протезов и коронок
- /services/condition/[slug] — 55 состояний/показаний
- /technologies/[slug] — 8 технологий

✅ Исправлено: sitemap.ts был ручным, обновлён с полным списком услуг.
1. https://ortopednn.ru
2. https://ortopednn.ru/services
3. https://ortopednn.ru/services/viniry-emaks
4. https://ortopednn.ru/services/sjemny-protez
5. https://ortopednn.ru/services/cirkonievaya-koronka

**Должно быть** — минимум 15 URL:
- / (главная)
- /services (список услуг)
- /services/sjemny-protez
- /services/metallokeramicheskaya-koronka
- /services/cirkonievaya-koronka
- /services/viniry-emaks
- /services/vradecheskaya-vkladka
- /services/laboratornaya-vkladka
- /services/celnolitaya-koronka
- /services/chastichny-sjemny-protez
- /services/polny-sjemny-protez
- /services/acryfree
- /services/nejlonovyj-protez
- /services/byugelnyj-klammery
- /services/byugelnyj-zamki
- /services/variant/[slug] — динамические, не в sitemap
- /services/condition/[slug] — динамические, не в sitemap
- /technologies/[slug] — динамические, не в sitemap

**Действие:** Пересобрать `out/` через `npm run build` — sitemap генерируется автоматически.

---

## 6. robots.txt

```
User-Agent: *
Allow: /

Sitemap: https://ortopednn.ru/sitemap.xml
```

✅ Корректно. Sitemap указан.

---

## 7. Битые ссылки

| # | Проблема | Файл | Статус |
|---|----------|------|--------|
| 1 | Иммедиат-протез (21 000 ₽) — страница не существовала | PRICE_LIST | ✅ Создана `/services/immediat-protez` |
| 2 | Термопластический AcryFree (41 400 ₽) — ссылка ведёт на `/services/acryfree` | PRICE_LIST | ✅ Исправлено название |
| 3 | Нейлоновый протез — `/services/nejlonovyj-protez` | PRICE_LIST | ✅ Работает |

✅ Исправлено: все битые ссылки исправлены, страница иммедиат-протеза создана.

---

## 8. H1 и структура заголовков

| Страница | H1 | H2 | Структура |
|----------|----|----|-----------|
| Главная | "Никитина Марина Георгиевна" | Специализация, прайс, контакты | ✅ |
| /services | "Услуги стоматолога-ортопеда" | 3 категории услуг | ✅ |
| /services/[slug] | Название услуги | Что это, кому подходит, этапы, уход | ✅ |
| /services/sjemny-protez | "Съёмный протез" | — | ✅ |

---

## 9. Адаптивность (мобильные)

| Параметр | Статус |
|----------|--------|
| `<meta name="viewport">` | ✅ width=device-width, initial-scale=1, maximum-scale=5 |
| Шрифт | ✅ fluid clamp() |
| CSS | ✅ Tailwind v4 |

---

## 10. Скорость загрузки

> TODO: Проверить через PageSpeed Insights и Яндекс.Метрику

---

## 11. Yandex.Webmaster (верификация)

| Параметр | Статус |
|----------|--------|
| `<meta name="yandex-verification">` | ✅ `yandex_verification_code` (placeholder) |
| `<meta name="yandex" content="noyandex">` | ✅ **УДАЛЁН** — раньше запрещал индексацию |

**КРИТИЧЕСКАЯ ПРОБЛЕМА ИСПРАВЛЕНА:** Удалён `yandex: 'noyandex'` из `app/layout.tsx`. Теперь Яндекс может индексировать сайт.

---

## 12. Геолокация

| Параметр | Текущее | Требуется |
|----------|---------|-----------|
| geo.region | RU-NIZ | ✅ |
| geo.placename | Нижний Новгород | ✅ |
| ICBM | 56.294, 43.936 | ⚠️ Проверить точность |
| Address в JSON-LD | Полный адрес | ✅ |

---

## 13. TODO-лист

- [x] **КРИТИЧНО:** Удалить `<meta name="yandex" content="noyandex">` из layout.tsx ✅
- [x] Создать страницу `/services/immediat-protez` (иммедиат-протез, 21 000 ₽) ✅
- [x] Пересобрать проект (`npm run build`) для обновления sitemap.xml ✅
- [ ] Проверить ortopednn.ru на HTTP 200
- [ ] Уточнить координаты клиники (GeoCoordinates)
- [ ] Заменить placeholder `yandex_verification_code` на реальный код из Яндекс.Вебмастер
- [ ] Добавить OG-изображение услуг
- [ ] Проверить PageSpeed Insights
- [ ] Добавить страницу сравнения имплант vs коронка
- [ ] Добавить информационную страницу о протезировании при пародонтозе

---

## 14. Чеклист перед запуском

- [ ] robots.txt доступен по URL
- [ ] sitemap.xml содержит все страницы (>15 URL)
- [ ] noindex убран
- [ ] Верификация в Яндекс.Вебмастер подтверждена
- [ ] Все внутренние ссылки ведут на существующие страницы
- [ ] Все изображения имеют alt-текст
- [ ] Schema.org валидна (проверить через https://validator.schema.org/)
- [ ] HTTPS работает
- [ ] Мобильная версия читаема