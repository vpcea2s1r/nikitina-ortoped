/**
 * Компонент для подключения аналитики
 * @description Яндекс Метрика и Google Analytics
 */

'use client';

import { useEffect } from 'react';

const YANDEX_METRIKA_ID = '98765432'; // Замените на ваш ID
const GOOGLE_ANALYTICS_ID = 'G-XXXXXXXXXX'; // Замените на ваш ID

export default function Analytics() {
  useEffect(() => {
    // Яндекс Метрика
    const ymFunc = (window as any).ym || function() {
      (window as any).ym.q = (window as any).ym.q || [];
      (window as any).ym.q.push(arguments);
    };
    (window as any).ym = ymFunc;

    const script = document.createElement('script');
    script.src = 'https://mc.yandex.ru/metrika/watch.js';
    script.async = true;
    document.head.appendChild(script);

    ymFunc(YANDEX_METRIKA_ID, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    });

    // Google Analytics
    const gaScript1 = document.createElement('script');
    gaScript1.async = true;
    gaScript1.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
    document.head.appendChild(gaScript1);

    const gaScript2 = document.createElement('script');
    gaScript2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GOOGLE_ANALYTICS_ID}');
    `;
    document.head.appendChild(gaScript2);

  }, []);

  return null;
}

/**
 * Отслеживание событий
 * @example trackEvent('click', 'call_button', 'phone')
 */
export function trackEvent(category: string, action: string, label?: string) {
  // Яндекс Метрика
  if (typeof window !== 'undefined' && (window as any).ym) {
    (window as any).ym(YANDEX_METRIKA_ID, 'reachGoal', action, {
      category,
      label
    });
  }
  
  // Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label
    });
  }
}

/**
 * Отслеживание конверсий
 * @example trackConversion('order', 5000)
 */
export function trackConversion(transactionId: string, value?: number) {
  if (typeof window !== 'undefined') {
    // Яндекс Метрика
    if ((window as any).ym) {
      (window as any).ym(YANDEX_METRIKA_ID, 'reachGoal', 'purchase', {
        order_id: transactionId,
        price: value
      });
    }
    
    // Google Analytics
    if ((window as any).gtag) {
      (window as any).gtag('event', 'purchase', {
        transaction_id: transactionId,
        value: value,
        currency: 'RUB'
      });
    }
  }
}