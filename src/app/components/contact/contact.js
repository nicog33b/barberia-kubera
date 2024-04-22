import React from 'react';
import './contact.css'; // Asegúrate de tener este archivo en la ruta correcta y con los estilos actualizados

const ContactSection = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center text-white my-4 p-3 roboto">
  Ponte en Contacto con Nosotros
</h1>

    <section id='contactSection' className="text-gray-600 body-font relative bg-white p-12 mt-3 mb-3 rounded-md">
      <div className="container px-5 py-8 mx-auto flex flex-col lg:flex-row justify-between items-stretch rounded-sm shadow-lg bg-white">
        {/* Contenedor del formulario */}
        <div className="lg:w-1/3 md:w-1/2 flex flex-col w-full mb-8 lg:mb-0">
          <p className="leading-relaxed mb-5 text-gray-600">¿Quieres comunicarte con nosotros? Aprovecha este espacio. </p>
          <form action="#" method="POST"> {/* Si estás manejando la lógica del formulario */}
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre completo</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensaje</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">Enviar</button>
          </form>
          <p className="text-xs text-gray-500 mt-3">Tus datos serán usados exclusivamente para comunicarnos contigo sobre tu cita y promociones.</p>
        </div>

        {/* Contenedor del mapa */}
        <div className="lg:w-2/3 md:w-1/2 w-full h-64 sm:h-48 lg:h-auto overflow-hidden rounded-lg shadow-lg relative mb-8 lg:mb-0">
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg grayscale contrast-125 opacity-80"
            title="map"
            loading="lazy"
            // Asegúrate de que la altura mínima sea adecuada para móviles y que el mapa se expanda correctamente en dispositivos más grandes
            style={{ minHeight: '250px' }}
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=La%20ubicación%20de%20tu%20barbería&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContactSection;
