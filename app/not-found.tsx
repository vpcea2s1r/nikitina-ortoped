export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', background: '#F0F8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <div>
        <h1 style={{ fontSize: '4rem', color: '#4A90D9', marginBottom: '1rem' }}>404</h1>
        <h2 style={{ color: '#1E3A5F', marginBottom: '1rem' }}>Страница не найдена</h2>
        <p style={{ color: '#5A7A9A', marginBottom: '2rem' }}>Извините, такой страницы не существует. Возможно, она была удалена или адрес введен неверно.</p>
        <a href="/" className="btn btn-primary">На главную</a>
      </div>
    </div>
  );
}