import type { NextConfig } from "next";

/**
 * Cloudflare Pages конфигурация
 * @description Настройка для статического экспорта (SSG)
 * - output: 'export' — генерирует статические HTML файлы
 * - trailingSlash: true — для корректной работы на Cloudflare
 * - images.unoptimized: true — отключает оптимизацию изображений (не работает в export mode)
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Static export для Cloudflare Pages / Vercel / Netlify
  output: 'export',
  
  // Добавляем слеш в конец URL для корректной работы
  trailingSlash: true,
  
  // Отключаем оптимизацию изображений для static export
  images: {
    unoptimized: true,
  },
  
  // Настройки для Cloudflare Pages
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
};

export default nextConfig;