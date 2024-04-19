import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 mt-[6rem]">
      <hr className='text-white h-1'></hr>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="p-5">
            <h3 className="text-lg font-semibold">Barbería Estilo</h3>
            <p className="mt-1">La mejor experiencia para tu estilo.</p>
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <ul>
              <li>Teléfono: +1 234 567 890</li>
              <li>Email: contacto@barberiaestilo.com</li>
              <li>Dirección: Av. Principal 123, Ciudad, País</li>
            </ul>
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold">Redes Sociales</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className="text-center pt-5 border-t border-gray-700">
          <p>© 2024 Barbería Estilo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
