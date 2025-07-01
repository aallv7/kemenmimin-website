// src/app/artikel/page.tsx
import { getSortedArticlesData } from '../../lib/articles';
import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import Layout from '../../components/Layout';

// Metadata untuk halaman ini
export const metadata: Metadata = {
  title: 'Artikel & Berita - KEMENMIMIN',
  description: 'Temukan artikel dan berita terbaru dari Kementerian Meme Republik Indonesia.',
};

const ArtikelPage: React.FC = () => {
  const allArticlesData = getSortedArticlesData();

  return (
    <Layout>
        <section className="py-12 px-4 bg-white rounded-lg shadow-xl mb-12">
          <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Artikel & Berita Terbaru</h1>

          {allArticlesData.length === 0 ? (
            <p className="text-center text-gray-600">Belum ada artikel yang tersedia.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allArticlesData.map(({ id, title, date, author, excerpt }) => (
                <div key={id} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 border-t-4 border-indigo-400">
                  <Link href={`/artikel/${id}`} className="text-2xl font-semibold text-blue-700 hover:text-blue-900 transition-colors duration-300 block mb-2">
                    {title}
                  </Link>
                  <p className="text-sm text-gray-500 mb-2">
                    Oleh {author} pada <time dateTime={date}>{new Date(date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  </p>
                  <p className="text-gray-600 text-base mb-4">
                    {excerpt || 'Baca lebih lanjut...'}
                  </p>
                  <Link href={`/artikel/${id}`} className="inline-block text-blue-600 hover:underline font-medium">
                    Baca Selengkapnya &rarr;
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>
    </Layout>
  );
};

export default ArtikelPage;