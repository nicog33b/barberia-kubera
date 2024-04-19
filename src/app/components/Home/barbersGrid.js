import Image from 'next/image';

function BarbersGrid() {
  const barbers = [
    { id: 1, name: "John Doe", imageSrc: "/barbers/1.webp" },
    { id: 2, name: "Jane Doe", imageSrc: "/barbers/2.jpg" },
    { id: 3, name: "Sam Smith", imageSrc: "/barbers/3.jpg" }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-8 bg-white w-full">
      {barbers.map(barber => (
        <div key={barber.id} className="flex flex-col items-center bg-zinc-950 p-4 rounded-lg shadow-xl transition duration-300 ease-in-out hover:bg-yellow-600 w-full md:w-6/12">
          <div className="w-32 h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
            <Image 
              src={barber.imageSrc} 
              alt={`Portrait of ${barber.name}`}
              width={192} 
              height={192} 
              className="object-fill w-full h-full"
              priority // Use priority for above-the-fold images
            />
          </div>
          <h3 className="mt-4 font-semibold text-lg text-white">{barber.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default BarbersGrid;
