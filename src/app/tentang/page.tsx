// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import React from 'react'; // Penting untuk JSX

const tentang: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Tentang - Kementerian Meme Republik Indonesia</title>
        <meta name="description" content="Website resmi Kementerian Meme Republik Indonesia. Mengedukasi dan membimbing masyarakat dalam budaya meme." />
      </Head>

      <section className="py-12 px-4">
        <h2 className="md:text-4xl sm:text-xl font-bold text-center text-gray-800 mb-10">Mengenal KEMENMIMIN Secara Intim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Visi */}
          <Link href="/tentang/struktur">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Struktur</h3>
            </div>
          </Link>
          {/* Card 2: Misi */}
          <Link href="/tentang/sejarah">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Sejarah</h3>
            </div>
          </Link>
          {/* Card 3: Nilai-nilai */}
          <Link href="/tentang/proker">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Program Kerja</h3>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default tentang;