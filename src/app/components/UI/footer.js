import React from 'react';
import Link from 'next/link';
import { FaHandScissors } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gradient-radial from-black  to-zinc-950 text-white mt-8 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center">
          <Link href="/" className="flex items-center space-x-2">
            <FaHandScissors className="h-6 w-6 text-yellow-500" />
            <span className="font-bold text-xl">TuLogo</span>
          </Link>
          <nav className="mt-4 md:mt-0 md:ml-6 space-x-4">
            <Link href="/about" className="hover:text-yellow-500 transition duration-300">Inicio</Link>
            <Link href="/services" className="hover:text-yellow-500 transition duration-300">Servicios</Link>
            <Link href="/contact" className="hover:text-yellow-500 transition duration-300">Contacto</Link>
          </nav>
        </div>
        <div className="text-center md:text-right">
          <p>Dirección: 123 Calle Ficticia, Montevideo, Uruguay</p>
          <p>Teléfono: +598 123 4567</p>
          <p>Email: contacto@tulogo.com</p>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} TuBarber. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
