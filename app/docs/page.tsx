import Link from 'next/link';
import { getDocsList } from '../../lib/docs';

export default function DocsPage() {
  const docs = getDocsList();

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Список документов</h1>
      <ul className="list-disc pl-5 space-y-2">
        {docs.map(doc => (
          <li key={doc.slug}>
            <Link href={`/docs/${doc.slug}`} className="text-blue-600 hover:underline">
              {doc.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
