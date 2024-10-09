import React, { useState } from 'react';

const images = [
  'https://i0.wp.com/www.comunidadclubmarcopolo.com/wp-content/uploads/2022/01/Isla-Baru-playa-blanca.jpg?fit=1030%2C682&ssl=1',
  'https://media.urgente24.com/p/e3b35e92cd12a5f1ff5ab231a5363dea/adjuntos/319/imagenes/002/814/0002814808/1200x0/smart/los-roquesjpg.jpg',
  'https://estudia-en-argentina.com.ar/wp-content/uploads/2023/08/Iguazu_Catarata-1024x569.jpg.webp',
  'https://i0.wp.com/viajerodemexico.com/wp-content/uploads/2023/04/Playas-de-Acapulco.jpg?resize=800%2C410&ssl=1'
];

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
    <div className='p-5'>

    <div className="relative w-full max-w-2xl mx-auto">
      <div className="overflow-hidden relative h-64">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-md" />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ❯
      </button>
    </div>
    </div>
    </>
    
  );
}
