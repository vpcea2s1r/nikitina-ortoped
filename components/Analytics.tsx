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
    (function(m,e,t,r,i,k,a){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for(let j=0;j<document.scripts.length;j++)
        if(document.scripts[j].src===r)return;
      k=e.createElement(t),a=e.getElementsByTagName(t)[0];
      k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
    })(window,document,'script','https://mc.yandex.ru/metrika/watch.js','ym');
    
    window.ym = window.ym || function() {
      (window.ym.a = window.ym.a || []).push(arguments);
    };
    window.ym(YANDEX_METRIKA_ID, 'init', {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true
    });

    // Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GOOGLE_ANALYTICS_ID}');
    `;
    document.head.appendChild(script2);

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