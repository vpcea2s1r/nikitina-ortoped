/**
 * Главная страница - Улучшенная мобильная версия
 * @page
 */
"use client";

import React, { useState, useCallback, useEffect } from "react";
import SymptomCalculator from "@/components/SymptomCalculator";
import PatientEducationHub from "@/components/PatientEducationHub";
import { CLINIC_ADDRESS, CLINIC_PHONE } from "@/lib/constants";

const DOCTOR_NAME = "Никитина Марина Георгиевна";
const DOCTOR_TITLE = "Стоматолог-ортопед";
const TAGLINE = "Профессиональное протезирование зубов — восстановление эстетики и функций вашей улыбки";
const LOCATION = "Нижний Новгород";

// =============================================================================
// ИКОНКИ
// =============================================================================

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function RouteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.5 2 6 4.5 6 8c0 2 1 3.5 2 5 1 1.5 2 4 3 6 1-2 2-4.5 3-6 1-1.5 2-3 2-5 0-3.5-2.5-6-6-6z"/>
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

// =============================================================================
// МОБИЛЬНОЕ МЕНЮ
// =============================================================================

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "О враче" },
    { href: "#services", label: "Услуги" },
    { href: "#contacts", label: "Контакты" },
  ];

  const handleLinkClick = () => setIsOpen(false);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Кнопка меню */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 right-4 z-50 w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center"
        aria-label="Открыть меню"
      >
        <MenuIcon className="w-6 h-6 text-warm-700" />
      </button>

      {/* Оверлей */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Меню */}
      <div className={`
        lg:hidden fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-hover
        transform transition-transform duration-300 ease-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-6">
          {/* Заголовок */}
          <div className="flex items-center justify-between mb-8">
            <span className="font-serif text-lg text-warm-800">Меню</span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center"
              aria-label="Закрыть меню"
            >
              <CloseIcon className="w-6 h-6 text-warm-600" />
            </button>
          </div>

          {/* Навигация */}
          <nav className="space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="block py-3 text-lg text-warm-700 hover:text-coral-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Контакты в меню */}
          <div className="mt-8 pt-8 border-t border-warm-200">
            <a
              href={`tel:${CLINIC_PHONE}`}
              className="flex items-center gap-3 text-warm-700 font-medium"
            >
              <PhoneIcon className="w-5 h-5 text-coral-500" />
              7 920 253 73 17
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// =============================================================================
// НАВИГАЦИЯ ДЛЯ ДЕСКТОПА
// =============================================================================

function DesktopNav() {
  const navItems = [
    { href: "#about", label: "О враче" },
    { href: "#services", label: "Услуги" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-warm-700 hover:text-coral-500 transition-colors font-medium"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

// =============================================================================
// КНОПКИ
// =============================================================================

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${CLINIC_PHONE}`}
      className={`btn-primary flex items-center gap-3 ${className}`}
    >
      <PhoneIcon className="w-5 h-5" />
      <span className="whitespace-nowrap">7 920 253 73 17</span>
    </a>
  );
}

function DirectionsButton({ className = "" }: { className?: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenMaps = useCallback(() => {
    if (!navigator.geolocation) {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`,
        "_blank"
      );
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(CLINIC_ADDRESS)}`;
        window.open(mapsUrl, "_blank");
        setIsLoading(false);
      },
      () => {
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`,
          "_blank"
        );
        setIsLoading(false);
      }
    );
  }, []);

  return (
    <button
      onClick={handleOpenMaps}
      disabled={isLoading}
      className={`btn-secondary flex items-center gap-2 ${className}`}
    >
      <RouteIcon className="w-5 h-5" />
      {isLoading ? "Загрузка..." : "Маршрут"}
    </button>
  );
}

// =============================================================================
// HERO СЕКЦИЯ
// =============================================================================

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden pt-16 lg:pt-0">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 md:w-96 md:h-96 bg-coral-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 md:w-80 md:h-80 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Текст */}
          <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-teal-600 font-medium mb-4 text-sm">
              <ToothIcon className="w-4 h-4" />
              <span>{LOCATION}</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-display text-warm-800 mb-4 md:mb-6">
              {DOCTOR_NAME}
            </h1>
            
            <p className="text-lg md:text-xl text-teal-600 font-medium mb-6 md:mb-8">
              {DOCTOR_TITLE}
            </p>
            
            <p className="text-warm-600 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 text-base md:text-lg">
              {TAGLINE}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <CallButton className="w-full sm:w-auto justify-center" />
              <DirectionsButton className="w-full sm:w-auto justify-center" />
            </div>
          </div>

          {/* Фото врача */}
          <div className="relative animate-slide-up delay-200 order-1 lg:order-2">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-coral-500/20" />
              <div className="absolute inset-4 rounded-full border-2 border-teal-500/10" />
              
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cream-200 to-warm-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <ToothIcon className="w-16 sm:w-20 md:w-24 h-auto text-coral-400 mx-auto mb-2 md:mb-4" />
                  <p className="text-warm-500 text-xs sm:text-sm">Фото врача</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// СЕКЦИЯ УСЛУГ
// =============================================================================

function ServicesSection() {
  const services = [
    { title: "Протезирование коронками", desc: "Металлокерамика, цирконий" },
    { title: "Виниры", desc: "Эстетическая реставрация" },
    { title: "Съёмные протезы", desc: "Частичные и полные" },
    { title: "Бюгельное протезирование", desc: "На кламмерах и замках" },
  ];

  return (
    <section id="services" className="py-16 md:py-22 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-serif text-2xl md:text-heading-1 text-warm-800 mb-3 md:mb-4">
            Моя специализация
          </h2>
          <p className="text-warm-600 max-w-2xl mx-auto text-sm md:text-base">
            Современное протезирование зубов любой сложности с использованием качественных материалов
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card text-center p-4 md:p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-coral-100 flex items-center justify-center">
                <ToothIcon className="w-6 h-6 md:w-7 md:h-7 text-coral-500" />
              </div>
              <h3 className="font-semibold text-warm-800 mb-1 md:mb-2 text-sm md:text-base">{service.title}</h3>
              <p className="text-warm-500 text-xs md:text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// СЕКЦИЯ КОНТАКТОВ
// =============================================================================

function ContactsSection() {
  return (
    <section id="contacts" className="py-16 md:py-22 bg-gradient-to-b from-white to-cream-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-heading-1 text-warm-800 mb-4 md:mb-6">
            Запишитесь на приём
          </h2>
          
          <p className="text-warm-600 mb-8 md:mb-10 text-sm md:text-base">
            Приходите по адресу: {CLINIC_ADDRESS}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <CallButton className="w-full sm:w-auto justify-center" />
            <DirectionsButton className="w-full sm:w-auto justify-center" />
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// ФУТЕР
// =============================================================================

function Footer() {
  return (
    <footer className="py-6 md:py-8 bg-warm-800 text-white/70 text-center">
      <p className="text-xs md:text-sm px-4">
        © {new Date().getFullYear()} {DOCTOR_NAME}. Все права защищены.
      </p>
    </footer>
  );
}

// =============================================================================
// ОСНОВНОЙ КОМПОНЕНТ
// =============================================================================

export default function Home() {
  return (
    <main className="min-h-screen">
      <MobileNav />
      <DesktopNav />
      
      <div className="lg:pl-64">
        <HeroSection />
        <ServicesSection />
        <PatientEducationHub />
        <SymptomCalculator />
        <ContactsSection />
        <Footer />
      </div>
    </main>
  );
}