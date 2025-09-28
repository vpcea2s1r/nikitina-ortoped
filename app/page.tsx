export default function Home() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center p-6 font-sans bg-gradient-to-br from-blue-100 via-blue-50 to-white"
    >
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="relative z-10 text-center max-w-xl">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-700">
          Стоматолог - ортопед Никитина Марина Георгиевна
        </h1>
        <p className="text-xl mb-10 text-gray-700">
          Профессиональное протезирование зубов — восстановление эстетики и функций улыбки в Нижнем Новгороде.
        </p>
        <section className="bg-blue-50 rounded-md p-6 shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Врачебная специализация</h2>
          <p className="text-base text-gray-700">
            Современное протезирование зубов любой сложности
          </p>
        </section>
        <a
          href="tel:+79202537317"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition inline-block"
        >
          Позвонить: 7 920 253 73 17
        </a>
      </div>
    </main>
  );
}
