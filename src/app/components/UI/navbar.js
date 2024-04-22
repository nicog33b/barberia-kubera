'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-30 bg-black bg-opacity-50 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="font-bold text-xl">
          <Link href="/" className='flex items-center space-x-2'>
         <Image className='object-fit w-16 h-16' height={210} width={210} src='/brand.png'></Image>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="hover:text-gray-300 transition duration-300 ease-in-out">
            Inicio
          </Link>
          <Link href="/services" className="hover:text-gray-300 transition duration-300 ease-in-out">
            Servicios
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition duration-300 ease-in-out">
            Contacto
          </Link>
          <Link href="/book" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            Reservar
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <aside className="fixed inset-0 bg-black bg-opacity-100 text-white flex flex-col items-center justify-center space-y-6 p-4 transition-opacity duration-300 ease-out">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
            <FaTimes className="h-8 w-8" />
          </button>
          <Link href="/about" className="hover:text-gray-300 transition duration-300 ease-in-out text-2xl" onClick={toggleMenu}>
            Inicio
          </Link>
          <Link href="/services" className="hover:text-gray-300 transition duration-300 ease-in-out text-2xl" onClick={toggleMenu}>
            Servicios
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition duration-300 ease-in-out text-2xl" onClick={toggleMenu}>
            Contacto
          </Link>
          <Link href="/book" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out text-2xl" onClick={toggleMenu}>
            Reservar
          </Link>
        </aside>
      )}
    </nav>
  );
};

export default Navbar;
