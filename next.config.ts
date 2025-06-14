// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ini yang penting untuk static export
  reactStrictMode: true,
  images: {
    unoptimized: true, // Opsional: Jika Anda menemukan masalah dengan optimisasi gambar di GitHub Pages
  },
  // tambahkan basePath jika website Anda di-host di sub-path seperti 'kemenmimin-website'
  // basePath: '/kemenmimin-website',
};

module.exports = nextConfig;