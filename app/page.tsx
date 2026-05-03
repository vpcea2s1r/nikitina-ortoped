/**
 * Главная страница - Полностью автономная версия
 * Без внешних импортов для гарантированной сборки
 */
"use client";

import { useState } from "react";

const CLINIC_ADDRESS = "Нижний Новгород, ул. Октябрьской Революции, д. 43, оф. 316";
const CLINIC_PHONE = "+79202537317";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* HERO */}
      <section className="min-h-[80vh] flex items-center justify-center p-8 text-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#2A2A2A] mb-4">
            Никитина Марина Георгиевна
          </h1>
          <p className="text-xl text-[#2D6A6E] font-medium mb-6">
            Стоматолог-ортопед
          </p>
          <p className="text-[#6B5B55] max-w-lg mx-auto mb-8">
            Профессиональное протезирование зубов — восстановление эстетики и функций вашей улыбки
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${CLINIC_PHONE}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8846B] text-white rounded-full font-semibold hover:bg-[#D46F52] transition"
            >
              7 920 253 73 17
            </a>
            <button
              onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`, "_blank")}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#2D6A6E] text-[#2D6A6E] rounded-full font-semibold hover:bg-[#2D6A6E] hover:text-white transition"
            >
              Маршрут
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-[#2A2A2A] mb-12">
            Моя специализация
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Протезирование коронками", desc: "Металлокерамика, цирконий" },
              { title: "Виниры", desc: "Эстетическая реставрация" },
              { title: "Съёмные протезы", desc: "Частичные и полные" },
              { title: "Бюгельное протезирование", desc: "На кламмерах и замках" },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-[#FDF8F3] rounded-2xl text-center">
                <h3 className="font-semibold text-[#2A2A2A] mb-2">{item.title}</h3>
                <p className="text-[#6B5B55]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FDF8F3]">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-[#2A2A2A] mb-4">Запишитесь на приём</h2>
          <p className="text-[#6B5B55] mb-8">{CLINIC_ADDRESS}</p>
          <a
            href={`tel:${CLINIC_PHONE}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8846B] text-white rounded-full font-semibold text-lg hover:bg-[#D46F52] transition"
          >
            Позвонить
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-[#5A4A41] text-white/70 text-center">
        <p>© {new Date().getFullYear()} Никитина Марина Георгиевна</p>
      </footer>
    </div>
  );
}