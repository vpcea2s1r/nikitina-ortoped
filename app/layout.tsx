import './globals.css';

export const metadata = {
  title: 'Никитина М.Г. | Стоматолог-ортопед в Нижнем Новгороде',
  description: 'Профессиональное протезирование зубов любой сложности',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}