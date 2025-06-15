// pages/index.tsx
import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import React from 'react'; // Penting untuk JSX

const Custom404: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>KEMENMIMIN - Kementerian Meme Republik Indonesia</title>
        <meta name="description" content="Website resmi Kementerian Meme Republik Indonesia. Mengedukasi dan membimbing masyarakat dalam budaya meme." />
      </Head>

      <section className="h-auto justify-center content-center grid md:grid-cols-1 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-2 text-center py-12 px-8 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg shadow-xl mb-12">
        
        <div className="md:text-left sm:text-center ">
          <h1 className="md:text-9xl sm:text-xl font-extrabold text-blue-800 mb-4 tracking-tight leading-tight">
            404
          </h1>
          <h1 className="md:text-4xl sm:text-xl font-extrabold text-blue-800 mb-4 tracking-tight leading-tight">
            Waduh!
          </h1>
          <p className="md:text-xl text-gray-700 max-w-2xl mb-8 sm:text-base">
            Keknya admin belum membuat page ini...
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Custom404;