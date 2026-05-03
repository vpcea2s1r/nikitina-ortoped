# Настройка аналитики

## 1. Яндекс Метрика

1. Зарегистрируйтесь на https://metrika.yandex.ru
2. Создайте новый счётчик для сайта ortopednn.ru
3. Скопируйте ID счётчика (номер)
4. Замените значение в `components/Analytics.tsx`:
   ```javascript
   const YANDEX_METRIKA_ID = 'ВАШ_ID';
   ```

### Настройка целей в Яндекс Метрике:

| Цель | URL/Событие |
|------|-------------|
| Звонок по кнопке | reachGoal → call_button |
| Переход к карте | reachGoal → map_click |
| Просмотр прайса | reachGoal → price_view |

---

## 2. Google Analytics (GA4)

1. Зарегистрируйтесь на https://analytics.google.com
2. Создайте новый ресурс (GA4)
3. Скопируйте идентификатор (G-XXXXXXXXXX)
4. Замените значение в `components/Analytics.tsx`:
   ```javascript
   const GOOGLE_ANALYTICS_ID = 'G-XXXXXXXXXX';
   ```

### События GA4:

| Событие | Название |
|---------|----------|
| call_click | Телефон нажат |
| direction_click | Маршрут нажат |
| price_view | Прайс просмотрен |
| service_click | Услуга выбрана |

---

## 3. Как отслеживать события

В коде используйте:

```javascript
import { trackEvent } from '@/components/Analytics';

// Отслеживание клика
trackEvent('button', 'call_click', 'header');

// Отслеживание конверсии
trackConversion('order_123', 9000);
```

---

## 4. Проверка работы

- Яндекс Метрика: Счётчик → Настройка → Проверка счётчика
- Google Analytics: Отчёт в реальном времени

После запуска RelaxDev сделает Deploy, и счётчики начнут работать.