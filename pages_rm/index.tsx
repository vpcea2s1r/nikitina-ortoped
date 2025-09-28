import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface DocIndexProps {
  docs: string[];
}

export default function DocsIndex({ docs }: DocIndexProps) {
  return (
    <main style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <h1>Документация проекта</h1>
      <ul>
        {docs.map((doc) => (
          <li key={doc}>
            <Link href={`/docs/${doc}`}>
              <a>{doc}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const docsDirectory = path.join(process.cwd(), 'docs');
  const filenames = fs.readdirSync(docsDirectory).map(f => f.replace(/\.md$/, ''));

  return {
    props: {
      docs: filenames, // ровно так, без вложенного объекта
    },
  };
}
