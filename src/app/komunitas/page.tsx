// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Image from 'next/image';
import React from 'react'; // Penting untuk JSX

const tentang: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Komunitas - Kementerian Meme Republik Indonesia</title>
        <meta name="description" content="Website resmi Kementerian Meme Republik Indonesia. Mengedukasi dan membimbing masyarakat dalam budaya meme." />
      </Head>

      <section className="py-12 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Komunitas KEMENMIMIN</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link href="https://chat.whatsapp.com/HhvUXhuyGDSIi6b0ExFZWi">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Komunitas Whatsapp</h3>
              <div className="relative size-[250] max-w-[100%] max-h-[100%] mx-auto mb-8 ">
                <Image
                  src="/bird.jpeg"
                  alt="Sudah pasti logo Whatsapp"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            </div>
          </Link>
          {/* Card 2 */}
          <Link href="https://whatsapp.com/channel/0029VaktUxN6RGJLzlsjE41d">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Saluran Whatsapp</h3>
              <div className="relative size-[250] max-w-[100%] max-h-[100%] mx-auto mb-8 ">
                <Image
                  src="/wachannel.svg"
                  alt="Logo Whatsapp Channel"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            </div>
          </Link>
          {/* Card 3 */}
          <Link href="https://discord.gg/fUmd8d7C4K">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Discord</h3>
              <div className="relative size-[250] max-w-[100%] max-h-[100%] mx-auto mb-8 ">
                <Image
                  src="Discord-Symbol-Black.svg"
                  alt="Logo Discord"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            </div>
          </Link>
          {/* Card 4 */}
          <Link href="https://www.instagram.com/kemenmimin">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Instragam</h3>
              <div className="relative size-[250] max-w-[100%] max-h-[100%] mx-auto mb-8 ">
                <Image
                  src="Instagram_icon.png"
                  alt="Logo Instragram"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default tentang;