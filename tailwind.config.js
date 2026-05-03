/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,tsx}",
  ],
  theme: {
    extend: {
      // Цветовая палитра "Тёплый профессионализм"
      colors: {
        // Основные цвета
        cream: {
          50: '#FDFCFB',
          100: '#FDF8F3',
          200: '#FEF6EE',
          300: '#FCEFDF',
        },
        coral: {
          400: '#F09B84',
          500: '#E8846B',
          600: '#D46F52',
        },
        teal: {
          400: '#4A9A9D',
          500: '#2D6A6E',
          600: '#245457',
          700: '#1D4344',
        },
        warm: {
          50: '#FAF6F3',
          100: '#F5EBE4',
          200: '#E8DDD3',
          300: '#D5C5B8',
          400: '#B8A899',
          500: '#9A8A7A',
          600: '#7C6D5F',
          700: '#6B5B55',
          800: '#5A4A41',
          900: '#2A2A2A',
        },
        
        // Алиасы для обратной совместимости (старые медицинские цвета -> новые)
        blue: {
          50: '#F0F7FF',
          100: '#E0EBFF',
          200: '#BBD6FF',
          300: '#8BBEFF',
          400: '#5AA1FF',
          500: '#2979FF',
          600: '#0D6EFD',
          700: '#0A58CA',
          800: '#084298',
          900: '#052C65',
        },
        red: {
          100: '#FFE5E5',
          200: '#FFB8B8',
          300: '#FF8A8A',
          400: '#FF5C5C',
          500: '#E53E3E',
          600: '#DC2626',
          700: '#C53030',
        },
        gray: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
        },
      },
      // Типографика
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['3rem', { lineHeight: '1.2' }],
        'heading-1': ['2.5rem', { lineHeight: '1.2' }],
        'heading-2': ['2rem', { lineHeight: '1.3' }],
        'heading-3': ['1.5rem', { lineHeight: '1.4' }],
      },
      // Тени
      shadow: {
        'soft': '0 4px 20px rgba(45, 106, 110, 0.08)',
        'card': '0 8px 30px rgba(45, 106, 110, 0.12)',
        'hover': '0 12px 40px rgba(45, 106, 110, 0.18)',
      },
      // Бордеры
      borderRadius: {
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
      },
      // Анимации
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
    },
  },
  plugins: [],
}