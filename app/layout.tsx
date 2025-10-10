// app/layout.tsx
import './globals.css'; // Импорт глобальных стилей Tailwind

export const metadata = {
  title: 'Никитина М.Г. стоматолог - ортопед',
  description: 'Стоматолог - ортопед Никитина Марина Георгиевна',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-white text-gray-800 font-sans">
        {children}
      </body>
    </html>
  );
}
