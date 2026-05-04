export const CLINIC_ADDRESS = "Нижний Новгород, ул. Октябрьской Революции, д. 43, оф. 316";
export const CLINIC_PHONE = "+79202537317";

export const PRICE_LIST = [
  {
    category: "Несъемное протезирование",
    items: [
      { code: "О.1.1", name: "Врачебная вкладка", price: "3 180 ₽", link: "/services/vradecheskaya-vkladka" },
      { code: "О.1.2", name: "Лабораторная вкладка", price: "5 040 ₽", link: "/services/laboratornaya-vkladka" },
      { code: "О.1.4", name: "Безметалловая коронка на оксиде циркония", price: "27 000 ₽", link: "/services/cirkonievaya-koronka" },
      { code: "О.1.5", name: "Винир E-MAX", price: "30 000 ₽", link: "/services/viniry-emaks" },
      { code: "О.1.7", name: "Металлокерамическая коронка", price: "9 000 ₽", link: "/services/metallokeramicheskaya-koronka" },
      { code: "О.1.10", name: "Цельнолитая коронка (кобальт)", price: "6 060 ₽", link: "/services/celnolitaya-koronka" },
    ]
  },
  {
    category: "Съемное протезирование",
    items: [
      { code: "О.2.1.1", name: "Частичный съемный протез", price: "24 400 ₽", link: "/services/chastichny-sjemny-protez" },
      { code: "О.2.1.2", name: "Полный съемный протез", price: "27 360 ₽", link: "/services/polny-sjemny-protez" },
      { code: "О.2.2.1", name: "Протез «AcryFree»", price: "41 400 ₽", link: "/services/acryfree" },
      { code: "О.2.2.4", name: "Нейлоновый протез", price: "41 400 ₽", link: "/services/nejlonovyj-protez" },
    ]
  },
  {
    category: "Бюгельное протезирование",
    items: [
      { code: "О.2.3.1", name: "Бюгельный протез (2 кламмера)", price: "60 700 ₽", link: "/services/byugelnyj-klammery" },
      { code: "О.2.3.2", name: "Бюгельный протез (3 кламмера)", price: "62 400 ₽", link: "/services/byugelnyj-klammery" },
      { code: "О.2.3.3", name: "Бюгельный протез (замки)", price: "83 200 ₽", link: "/services/byugelnyj-zamki" },
    ]
  },
];

export const SPECIALIZATIONS = [
  { title: "Коронки", desc: "Металлокерамика, цирконий, цельно-литые", link: "/services/metallokeramicheskaya-koronka" },
  { title: "Виниры", desc: "E-MAX, керамические накладки", link: "/services/viniry-emaks" },
  { title: "Вкладки", desc: "Врачебные и лабораторные", link: "/services/vradecheskaya-vkladka" },
  { title: "Съемные протезы", desc: "Акрил, нейлон, AcryFree", link: "/services/chastichny-sjemny-protez" },
  { title: "Бюгельные", desc: "На кламмерах и замках", link: "/services/byugelnyj-klammery" },
];

export const NAV_LINKS = [
  { href: "/services", label: "Услуги" },
  { href: "#price", label: "Цены" },
  { href: "#contacts", label: "Контакты" },
];