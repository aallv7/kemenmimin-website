// components/Navbar.tsx
'use client'; // Pastikan directive ini ada di baris paling atas

import Link from 'next/link';
import React, { useState } from 'react'; // Impor useState

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk mengelola status menu hamburger

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold tracking-wide">
          KEMENMIMIN
        </Link>

        {/* Tombol Hamburger (Hanya Terlihat di Mobile/Layar Sempit) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // ikon x
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // ikon garis tiga
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-blue-200 transition duration-300">
              Homepage
            </Link>
          </li>
          <li>
            <Link href="/tentang" className="text-white hover:text-blue-200 transition duration-300">
              Tentang
            </Link>
          </li>
          <li>
            <Link href="/komunitas" className="text-white hover:text-blue-200 transition duration-300">
              Komunitas
            </Link>
          </li>
          <li>
            <Link href="/artikel" className="text-white hover:text-blue-200 transition duration-300">
              Artikel
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu Mobile legend */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-500 rounded-lg py-2 px-5 transition-all delay-150 duration-300 ease-in-out`}>
        <ul className="flex flex-col items-center space-y-3 transition-all delay-150 duration-300 ease-in-out">
          <li>
            <Link href="/" className="block rounded-lg text-white hover:bg-indigo-800 hover:scale-105 transition-all delay-150 duration-300 ease-in-out py-2 px-5" onClick={() => setIsOpen(false)}>
              Homepage
            </Link>
          </li>
          <li>
            <Link href="/tentang" className="block rounded-lg text-white hover:bg-indigo-800 hover:scale-105 transition-all delay-150 duration-300 ease-in-out py-2 px-4" onClick={() => setIsOpen(false)}>
              Tentang
            </Link>
          </li>
          <li>
            <Link href="/komunitas" className="block rounded-lg text-white hover:bg-indigo-800 hover:scale-105 transition-all delay-150 duration-300 ease-in-out py-2 px-4" onClick={() => setIsOpen(false)}>
              Komunitas
            </Link>
          </li>
          <li>
            <Link href="/artikel" className="block rounded-lg text-white hover:bg-indigo-800 hover:scale-105 transition-all delay-150 duration-300 ease-in-out py-2 px-4" onClick={() => setIsOpen(false)}>
              Artikel
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;