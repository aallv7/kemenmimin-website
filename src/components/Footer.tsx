// components/Footer.tsx
import React from 'react'; // Penting untuk JSX

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center text-sm mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Kementerian Meme Republik Indonesia. Semua Hak Cipta Dilindungi.</p>
        <p className="mt-2 text-xs text-gray-400">Organisasi ini bersifat fiktif dan tidak memiliki wewenang dalam pemerintahan Negara Republik Indonesia.</p>
      </div>
    </footer>
  );
};

export default Footer;