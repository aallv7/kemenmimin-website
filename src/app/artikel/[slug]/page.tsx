// src/app/artikel/[slug]/page.tsx
import { getArticleData, getAllArticleIds, ArticleData } from '../../../lib/articles';
import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Layout from '../../../components/Layout';

// Definisikan antarmuka (interface) untuk properti komponen secara eksplisit
// Tipe ini mungkin tidak perlu diubah jika Next.js secara internal menangani Promise untuk Anda
// Tapi untuk penggunaan, kita akan await params
interface ArticleDetailProps {
  params: {
    slug: string;
  };
}

// Fungsi ini diperlukan untuk Static Site Generation (SSG) di App Router
export async function generateStaticParams() {
  const paths = getAllArticleIds();
  return paths;
}

// Fungsi untuk menghasilkan metadata dinamis
export async function generateMetadata(props: ArticleDetailProps): Promise<Metadata> {
  // Await 'params' jika ia adalah Promise di Next.js 15
  const resolvedParams = await Promise.resolve(props.params); // Pastikan ini diselesaikan
  const { slug } = resolvedParams; // Destrukturisasi dari objek yang sudah diselesaikan
  
  const articleData = await getArticleData(slug); 
  return {
    title: articleData.title,
    description: articleData.excerpt || `Artikel tentang ${articleData.title} dari Kementerian Meme Republik Indonesia.`,
  };
}

// Komponen halaman utama
const ArticleDetail = async (props: ArticleDetailProps) => {
  // Await 'params' jika ia adalah Promise di Next.js 15
  const resolvedParams = await Promise.resolve(props.params); // Pastikan ini diselesaikan
  const articleData = await getArticleData(resolvedParams.slug); 

  return (
    <Layout>
      <article className="py-8 px-4 bg-white rounded-lg shadow-xl mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4 text-center">{articleData.title}</h1>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Oleh {articleData.author} pada <time dateTime={articleData.date}>{new Date(articleData.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          {' | '} Kategori: {articleData.category}
        </p>

        {articleData.thumbnail && (
          <div className="relative place-self-center w-64 h-64 mb-8 rounded-lg overflow-hidden">
            <Image
              src={articleData.thumbnail}
              alt={articleData.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}

        <div
          className="prose prose-blue max-w-none text-gray-800 leading-relaxed ml-[10%] mr-[10%] overflow-hidden text-clip"
          dangerouslySetInnerHTML={{ __html: articleData.contentHtml! }}
        />
      </article>
    </Layout>
  );
};

export default ArticleDetail;