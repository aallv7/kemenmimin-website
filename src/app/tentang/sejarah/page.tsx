// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import Image from 'next/image';
import React from 'react'; // Penting untuk JSX

const tentang: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Sejarah - Kementerian Meme Republik Indonesia</title>
        <meta name="description" content="Website resmi Kementerian Meme Republik Indonesia. Mengedukasi dan membimbing masyarakat dalam budaya meme." />
      </Head>

      <section className="text-center py-12 px-4 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg shadow-xl mb-12">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4 tracking-tight leading-tight">
          Sejarah Kementerian Meme Repulbik Indonesia
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Kementerian Meme Republik Indonesia (KEMENMIMIN) adalah sebuah entitas fiktif yang didirikan dengan misi untuk membimbing dan mengedukasi masyarakat dalam interaksi sosial seputar budaya meme.
        </p>

        <h2 className="text-3xl font-extrabold text-blue-800 mb-4 tracking-tight leading-tight">
          Fase 1: Pendirian dan Masa Awal (Januari - Oktober 2024)
        </h2>
        <p className="text-xl text-gray-700 text-justify max-w-2xl mx-auto mb-8">
          Tanggal Pendirian Resmi: KEMENMIMIN secara resmi didirikan pada 21 Januari 2024. Tanggal ini secara formal ditetapkan dalam Pasal 2, BAB II: PENDIRIAN dari Ketentuan Birokrasi Kementerian Meme Republik Indonesia (yang merupakan bagian dari SK/1/KMN.MMN/A/2025/I). Tanggal ini juga diperkuat oleh catatan deskripsi grup KEMENMIMIN yang dibuat oleh Andhika Wahyu Adi Pratama pada hari yang sama, menunjukkan peran beliau sebagai inisiator awal.
          <br /> <br />
          Kepemimpinan Awal: Pada masa-masa awal, kepemimpinan KEMENMIMIN melibatkan Andhika Wahyu Adi Pratama sebagai Menteri dan Maulvi Imaduddin sebagai Wakil Menteri.
          <br /> <br />
          Pembentukan Unit Pertama: Menjelang akhir tahun 2024, KEMENMIMIN mulai membentuk unit-unit operasional, seperti Biro Hubungan Masyarakat (BIRHUMASMIM) dan Badan Regulasi Meme (BASIMIN). BASIMIN memiliki peran penting dalam regulasi, pengembangan, dan pengawasan meme, sebagaimana tercantum dalam Rancangan Peraturan Menteri (Desember 2024).
          
        </p>

        <h2 className="text-3xl font-extrabold text-blue-800 mb-4 tracking-tight leading-tight">
          Fase 2: Dinamika Restrukturisasi dan Eksperimen Organisasi (November 2024 - April 2025)
        </h2>
        <p className="text-xl text-gray-700 text-justify max-w-2xl mx-auto mb-8">
          Konsolidasi Kepengurusan (Oktober 2024): "Pengesahan Struktur Pengurus" pada 20 Oktober 2024 menjadi langkah awal dalam memformalkan dan mengonsolidasikan individu-individu dalam posisi kunci, menetapkan Maulvi sebagai Menteri dan Andhika sebagai Wakil Menteri, serta beberapa nama yang akan mengisi posisi vital di kemudian hari.
          <br /> <br />
          Perubahan Struktur Awal 2025:
          <br /> <br />
          SK/2/KMN.MM/STK/2025 (9 Januari 2025): Sekretariat Jenderal di bawah pimpinan, serta dua Direktorat Jenderal: Pendidikan Meme (yang membawahi Badan Regulasi Meme) dan Direktorat Jenderal Biro (yang membawahi Hubungan Masyarakat dan Kreatif, serta Riset dan Teknologi).
          <br /> <br />
          Pembentukan Unit Pertama: Menjelang akhir tahun 2024, KEMENMIMIN mulai membentuk unit-unit operasional, seperti Biro Hubungan Masyarakat (BIRHUMASMIM) dan Badan Regulasi Meme (BASIMIN). BASIMIN memiliki peran penting dalam regulasi, pengembangan, dan pengawasan meme, sebagaimana tercantum dalam Rancangan Peraturan Menteri (Desember 2024).
          <br /> <br />
          Pembubaran BASIMIN (Januari 2025): Meskipun baru dibentuk, Badan Regulasi Meme (BASIMIN) kemudian dibubarkan melalui SK/4/KMN.MM/STK-A/2025 pada 24 Januari 2025, bersamaan dengan dirilisnya diagram struktur yang lebih kompleks.
          <br /> <br />
          Evolusi Peran: Unit yang menangani hubungan masyarakat mengalami evolusi dari Biro Hubungan Masyarakat (BIRHUMASMIM) menjadi Biro Hubungan Masyarakat dan Kreatif Meme (BIRHUMASKRIFMIM), sebelum akhirnya bertransformasi menjadi Direktorat Jenderal Bimbingan Masyarakat Meme (BIMAS MEME). Demikian pula, fungsi moderasi komunitas yang sebelumnya mungkin tersebar kemudian dikonsolidasikan menjadi Direktorat Jenderal Biro Moderasi Komunitas, dan akhirnya menjadi Badan Rukun Komunitas (BARUKOM).
        </p>

        <h2 className="text-3xl font-extrabold text-blue-800 mb-4 tracking-tight leading-tight">
          Fase 3: Struktur Final dan Penegasan Aturan (Mei 2025)
        </h2>
        <p className="text-xl text-gray-700 text-justify max-w-2xl mx-auto mb-8">
          Penetapan Struktur Resmi (10 Mei 2025): SK/1/KMN.MMN/A/2025/I secara resmi menetapkan struktur KEMENMIMIN saat ini.
          <br /> <br />
          SK ini juga meresmikan "Ketentuan Birokrasi" yang mengatur berbagai aspek seperti pendirian, identitas (logo dengan trollface dan semboyan "Jana Vilaksana" / "Rakyat Lucu"), sistem penomoran surat, dan keanggotaan.
          <br /> <br />
          Pembubaran Struktur Lama (11 Mei 2025): Sebagai penutup dari proses restrukturisasi, SK/2/KMN.MMN/A/BIRO/2025/I secara tegas membubarkan semua jabatan atau posisi yang tidak disebutkan dalam SK/1, memastikan tidak ada lagi tumpang tindih atau sisa dari struktur lama. SK ini juga secara resmi menetapkan Muhammad Fatih sebagai Staf Ahli Anggaran.
          <br /> <br />
        </p>      

        <p className="text-xl text-gray-700 text-justify max-w-2xl mx-auto mb-8">
          Sepanjang sejarahnya, KEMENMIMIN secara konsisten didefinisikan sebagai organisasi fiktif yang tidak memiliki wewenang hukum dalam pemerintahan Negara Republik Indonesia. Misinya adalah membimbing masyarakat dalam berinteraksi dengan meme secara positif, kreatif, dan menjaga kerukunan, sebuah semangat yang tertuang dalam semboyan "Jana Vilaksana" (Rakyat Lucu).
          <br /><br />
          Demikianlah sejarah KEMENMIMIN. Sejarah ini menunjukkan sebuah entitas yang dinamis, terus berevolusi dan beradaptasi untuk memenuhi tujuan fiktifnya dalam ekosistem meme.
        </p>
      </section>
    </Layout>
  );
};

export default tentang;