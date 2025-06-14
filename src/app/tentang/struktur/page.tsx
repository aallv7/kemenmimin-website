// pages/index.tsx
import Head from 'next/head';
import Layout from '../../../components/Layout';
import React from 'react'; // Penting untuk JSX

const tentang: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Struktur - Kementerian Meme Republik Indonesia</title>
        <meta name="description" content="Website resmi Kementerian Meme Republik Indonesia. Mengedukasi dan membimbing masyarakat dalam budaya meme." />
      </Head>

      <section className="text-left py-12 px-4 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg shadow-xl mb-12">
        <h1 className="md:text-5xl font-extrabold text-blue-800 mb-4 tracking-tight leading-tight sm:text-4xl">
          Struktur Pengurus Kementerian Meme Republik Indonesia
        </h1>
        <p className="md:text-xl text-gray-700 max-w-2xl mb-8 sm:text-sm">
          Organisasi ini bersifat fiktif, nama-nama yang disebutkan hanya sekedar bermain peran saja.
        </p>
        <img src="/STRUKTUR.jpg" alt="Struktur" className="scale-80" />
      </section>
      <section className="text-center py-12 px-4 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg shadow-xl mb-12">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4 tracking-tight leading-tight">
          Tugas Birokrat KEMENMIMIN
        </h1>
        <ul className="text-xl text-gray-700 text-justify max-w-2xl mx-auto mb-8">
            <li>
              I. Pimpinan Kementerian & Dewan Pimpinan:
              <br /> <br />
              <ul className="ml-[2%]">
                Menteri Meme Republik Indonesia (Menteri):
                <br /> <br />
                <ul className="ml-[2%]">
                  Tugas Utama:
                  <li>Memimpin seluruh Kementerian Meme Republik Indonesia.</li>
                  <li>Berwenang untuk mengeluarkan Surat Keputusan (SK), Peraturan Menteri (PerMen), dan Surat Undangan.</li>
                  <li>Memiliki hak untuk mengubah bentuk birokrasi KEMENMIMIN.</li>
                  <li>Memiliki hak veto terhadap segala keputusan yang dikeluarkan oleh kementerian.</li>
                </ul>
              </ul>
              <br /> <br />
              <ul className="ml-[2%]">
                Wakil Menteri Meme Republik Indonesia (Wakil Menteri):
                <br /> <br />
                <ul className="ml-[2%]">
                  Tugas Utama:
                  <li>Membantu Menteri dalam menjalankan tugas dan wewenangnya.</li>
                  <li>Menggantikan tugas dan kewenangan Menteri apabila Menteri berhalangan hadir.</li>
                </ul>
              </ul>
              <br /> <br />
              <ul className="ml-[2%]">
                Sekretaris Jenderal:
                <br /> <br />
                <ul className="ml-[2%]">
                  Tugas Utama:
                  <li>Mengatur seluruh kinerja birokrasi KEMENMIMIN.</li>
                  <li>Melakukan pengawasan terhadap pejabat di luar dewan pimpinan.</li>
                  <li>Bertanggung jawab dalam mencari calon pejabat (kecuali untuk posisi dewan pimpinan).</li>
                  <li>Melakukan pendataan dan administrasi pejabat kementerian.</li>
                  <li>Membuat dan menerbitkan surat keputusan serta surat undangan atas perintah atau persetujuan dari Menteri atau Wakil Menteri.</li>
                  <li>Mengatur tugas dan penempatan pejabat sesuai dengan surat keputusan yang sah.</li>
                </ul>
              </ul>
              <br /> <br />
              <ul className="ml-[2%]">
                Inspektorat Jenderal
                <br /> <br />
                <ul className="ml-[2%]">
                  Tugas Utama:
                  <li>Melakukan pengawasan terhadap kinerja seluruh birokrasi KEMENMIMIN.</li>
                  <li>Menyampaikan laporan kinerja birokrasi kepada Menteri, Wakil Menteri, Staf Ahli, dan Sekretaris Umum.</li>
                  <li>Memberikan rekomendasi tindakan kepada Menteri terkait kinerja atau potensi pelanggaran oleh pejabat.</li>
                  <li>Memiliki kewenangan untuk memanggil rapat sidang kementerian istimewa (B) jika terjadi kondisi darurat yang memerlukan peninjauan kinerja atau perilaku pejabat.</li>
                </ul>
              </ul>
              <br /> <br />
              <ul className="ml-[2%]">
                Staf Ahli
                <br /> <br />
                <ul className="ml-[2%]">
                  Tugas Utama:
                  <li>Memberikan nasihat, masukan, dan pertimbangan kepada Menteri dan seluruh birokrasi KEMENMIMIN sesuai dengan bidang keahlian masing-masing.</li></ul>
              </ul>
            </li>
            <li>
              II. Unit Organisasi Pelaksana (di bawah koordinasi Sekretaris Umum):
              <br /> <br />
              <ul className="ml-[2%]">
                Direktorat Jenderal Bimbingan Masyarakat Meme (Dirjen BIMAS MEME):
                <br /> <br />
                <ul className="ml-[2%]">
                  Tugas Utama:
                  <li>Bertanggung jawab dalam membimbing masyarakat mengenai penggunaan, distribusi, pembuatan, dan pengenalan meme.</li>
                  <li>Melakukan aktivitas penyebaran meme melalui media sosial resmi KEMENMIMIN.</li>
                  <li>Menggugah dan mengimplementasikan program bimbingan masyarakat sesuai dengan rancangan kerja yang telah ditetapkan.</li>
                  <li>Berwenang untuk mengeluarkan surat keputusan sendiri (dengan persetujuan Menteri) yang bertujuan untuk membimbing masyarakat agar tetap positif dan rukun melalui meme.</li>
                </ul>
              </ul>
              <br /> <br />
              <ul className="ml-[2%]">
                Wakil Menteri Meme Republik Indonesia (Wakil Menteri):
                <br /> <br />
                <ul className="ml-[2%]">
                  Tugas Utama:
                  <li>Mengatur dan menjaga komunitas agar tetap dalam kondisi positif dan rukun.</li>
                  <li>Melindungi anggota komunitas dari potensi kerusuhan, konten yang tidak pantas, atau hal-hal yang melanggar norma.</li>
                  <li>Berwenang untuk mengeluarkan surat keputusan sendiri (dengan persetujuan Menteri) yang khusus mengatur komunitas.</li>
                  <li>Membentuk dan mengelola Satuan Petugas Rukun Komunitas (SATGAS RUKOM) untuk membantu tugasnya.</li>
                </ul>
              </ul>
            </li>
          </ul>
      </section>
    </Layout>
  );
};

export default tentang;