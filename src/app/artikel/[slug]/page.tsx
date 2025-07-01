// src/app/artikel/[slug]/page.tsx
import { getArticleData, getAllArticleIds, ArticleData } from '../../../lib/articles';
import React from 'react'; // React tetap diperlukan untuk JSX
import { Metadata } from 'next';
import Image from 'next/image';

// Definisikan antarmuka (interface) untuk properti komponen secara eksplisit
interface ArticleDetailProps {
  params: {
    slug: string;
  };
}

// Fungsi ini diperlukan untuk Static Site Generation (SSG) di App Router
// Next.js akan memanggilnya saat build time untuk mengetahui semua `slug` yang harus dihasilkan
export async function generateStaticParams() {
  const paths = getAllArticleIds();
  return paths;
}

// Fungsi untuk menghasilkan metadata dinamis
// Menggunakan interface yang didefinisikan untuk properti `params`
export async function generateMetadata({ params }: ArticleDetailProps): Promise<Metadata> {
  const articleData = await getArticleData(params.slug);
  return {
    title: articleData.title,
    description: articleData.excerpt || `Artikel tentang ${articleData.title} dari Kementerian Meme Republik Indonesia.`,
  };
}

// Menggunakan interface yang didefinisikan untuk properti komponen, tanpa 'React.FC'
const ArticleDetail = async ({ params }: ArticleDetailProps) => {
  const articleData = await getArticleData(params.slug);

  return (
    <article className="py-8 px-4 bg-white rounded-lg shadow-xl mb-12">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4 text-center">{articleData.title}</h1>
      <p className="text-sm text-gray-500 mb-6 text-center">
        Oleh {articleData.author} pada <time dateTime={articleData.date}>{new Date(articleData.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        {' | '} Kategori: {articleData.category}
      </p>

      {articleData.thumbnail && (
        <div className="relative w-64 h-64 mb-8 rounded-lg overflow-hidden">
          <Image
            src={articleData.thumbnail}
            alt={articleData.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}

      {/* Konten artikel dari Markdown yang sudah diubah ke HTML */}
      <div
        className="prose prose-blue max-w-none text-gray-800 leading-relaxed" // Gunakan 'prose' dari @tailwindcss/typography jika diinstal
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml! }}
      />
    </article>
  );
};

export default ArticleDetail;