import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-[33rem] w-full overflow-hidden">
      {/* Hero Image */}
      <Image
        src="/hero.jpg"
        width={1024}
        height={1024}
        objectFit="cover"
        quality={100}
        className="opacity-50  object-cover w-full"
        alt="Barbería elegante con estilo moderno"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 p-6">
        <p className="text-2xl text-white font-bold mb-4 max-w-lg text-center">
          Agenda tu corte y no pierdas tiempo esperando...
        </p>
        <button className='bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-8 rounded transition-colors'>
          Reservar Ahora
        </button>
      </div>
    </div>
  );
};

export default Hero;
