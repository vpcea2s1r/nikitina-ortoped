import { getDocBySlug, getDocsList } from '../../../lib/docs';
import { remark } from 'remark';
import html from 'remark-html';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const docs = getDocsList();
  return docs.map(doc => ({ slug: doc.slug }));
}

export default async function DocPage({ params }: Props) {
  const { slug } = params;
  const doc = getDocBySlug(slug);
  const processedContent = await remark().use(html).process(doc.content);
  const contentHtml = processedContent.toString();

  return (
    <main className="prose max-w-4xl mx-auto p-6">
      <h1 className="mb-6">{doc.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}
