// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Penting untuk static export
  reactStrictMode: true,
  images: {
    unoptimized: true, // Opsional: jika ada masalah dengan optimisasi gambar di GitHub Pages
  },
  // basePath: '/kemenmimin-website', // Sesuaikan jika website di-host di sub-path GitHub Pages
};

module.exports = nextConfig;