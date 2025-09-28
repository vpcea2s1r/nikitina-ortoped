export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h2>Документация</h2>
      <div>{children}</div>
    </section>
  );
}
