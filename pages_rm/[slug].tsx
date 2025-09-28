import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface DocPageProps {
  contentHtml: string;
  frontmatter: {
    title: string;
  };
}

export default function DocPage({ contentHtml, frontmatter }: DocPageProps) {
  return (
    <main style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <h1>{frontmatter.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}

export async function getStaticPaths() {
  const docsDirectory = path.join(process.cwd(), 'docs');
  const filenames = fs.readdirSync(docsDirectory);

  console.log('docsDirectory:', docsDirectory);
  console.log('filenames:', filenames);

  const paths = filenames.map((name) => ({
    params: { slug: name.replace(/\.md$/, '') },
  }));

  console.log('paths:', paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const docsDirectory = path.join(process.cwd(), 'docs');
  const fullPath = path.join(docsDirectory, `${params.slug}.md`);

  console.log('Reading file:', fullPath);

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      contentHtml,
      frontmatter: matterResult.data,
    },
  };
}
