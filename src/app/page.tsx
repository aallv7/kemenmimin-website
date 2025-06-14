// pages/index.tsx
import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import React from 'react'; // Penting untuk JSX

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>KEMENMIMIN - Kementerian Meme Republik Indonesia</title>
        <meta name="description" content="Website resmi Kementerian Meme Republik Indonesia. Mengedukasi dan membimbing masyarakat dalam budaya meme." />
      </Head>

      <section className="h-auto justify-center content-center grid md:grid-cols-1 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-2 text-center py-12 px-8 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg shadow-xl mb-12">
        
        <div className="md:scale-80 sm:scale-100 md:-translate-y-25 justify-center content-center grid grid-cols-3 grid-rows-1">
          <a href="/tentang/struktur">
            <Image 
            src="/BIRHUMAS.svg" 
            alt="Logo Kementerian Meme RI" 
            width={0}
            height={0}
            className="drop-shadow-xl drop-shadow-blue-950 grid justify-center content-center w-auto h-auto z-0 scale-80 relative md:translate-x-55 sm:translate-x-0 transition delay-150 duration-300 ease-in-out hover:-translate-x-5 hover:scale-110"
            />
          </a>
          <a href="">
            <Image 
            src="/KEMENMIMIN.svg" 
            alt="Logo Kementerian Meme RI" 
            width={0}
            height={0}
            className="drop-shadow-xl drop-shadow-blue-950 grid justify-center content-center w-auto h-auto z-1 relative translate-x-0 transition delay-150 duration-300 ease-in-out hover:scale-110"
            />
          </a>
          <a href="/tentang/struktur">
          <Image 
            src="/BIRMOKOM.svg" 
            alt="Logo Kementerian Meme RI" 
            width={0}
            height={0}
            className="drop-shadow-xl drop-shadow-blue-950 grid justify-center content-center w-auto h-auto z-0 scale-80 relative md:-translate-x-55 sm:translate-x-0 transition delay-150 duration-300 ease-in-out hover:translate-x-5 hover:scale-110"
            />
          </a>
        </div>
        
        <div className="md:text-left sm:text-center md:-translate-y-25">
          <h1 className="md:text-5xl font-extrabold text-blue-800 mb-4 tracking-tight leading-tight sm:text-4xl">
            Selamat Datang di Kementerian Meme Republik Indonesia
          </h1>
          <p className="md:text-xl text-gray-700 max-w-2xl mb-8 sm:text-base">
            Mengedukasi, membimbing, dan menjaga budaya meme di Indonesia agar tetap positif, kreatif, dan mempersatukan.
          </p>
          <a
            href="/tentang"
            className="inline-block bg-blue-600 md:scale-100 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full md:text-lg sm:text-[1px] shadow-lg transition duration-300 transform hover:scale-105"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Mengenal KEMENMIMIN Secara Intim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Visi */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Visi Kami</h3>
            <p className="text-gray-600">
              Menjadi lembaga terdepan dalam membimbing masyarakat untuk berinteraksi dengan meme secara positif dan bertanggung jawab, demi terwujudnya masyarakat yang lebih gooning dan sybau.
            </p>
          </div>
          {/* Card 2: Misi */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Misi Kami</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Mengkaji dan merumuskan pedoman interaksi meme.</li>
              <li>Mengedukasi masyarakat tentang etika bermeme.</li>
              <li>Mendorong kreativitas dan inovasi meme yang positif.</li>
              <li>Menjaga kerukunan komunitas meme.</li>
            </ul>
          </div>
          {/* Card 3: Nilai-nilai */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Nilai-Nilai Inti</h3>
            <p className="text-gray-600">
              <strong>Jana Vilaksana (Rakyat Lucu):</strong> Kejujuran, Tanggung Jawab, Kreativitas, Persatuan, dan Edukasi dalam setiap aspek budaya meme.
            </p>
          </div>
        </div>
      </section>

      {/* Hero section for current news or announcement (optional) */}
      <section className="bg-blue-700 text-white py-12 px-4 rounded-lg shadow-lg mt-12 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Pengumuman Terbaru</h2>
          <p className="text-xl mb-6">
            Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa Jawa.
          </p>
          <a
            href="/komunitas"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 hover:bg-gray-200 transform hover:scale-105"
          >
            Lihat lebih lanjut di komunitas
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;