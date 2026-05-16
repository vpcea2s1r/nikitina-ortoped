/**
 * Яндекс Метрика (SSR-режим)
 * ID: 109256747
 */

'use client';

import { useEffect } from 'react';

const YM_ID = 109258289;

export default function Analytics() {
  useEffect(() => {
    const ym = (window as any).ym || function() {
      ((window as any).ym.q = (window as any).ym.q || []).push(arguments);
    };
    (window as any).ym = ym;

    const s = document.createElement('script');
    s.src = 'https://mc.yandex.ru/metrika/tag.js?id=' + YM_ID;
    s.async = true;
    document.head.appendChild(s);

    ym(YM_ID, 'init', {
      ssr: true,
      webvisor: true,
      clickmap: true,
      ecommerce: 'dataLayer',
      accurateTrackBounce: true,
      trackLinks: true,
    });
  }, []);

  return null;
}