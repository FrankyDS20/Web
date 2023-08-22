import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function LogoCloud() {
  const images = [
    'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg',
    'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg',
    'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg',
    'https://tailwindui.com/img/logos/transistor-logo-gray-400.svg',
    'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg',
    // Agrega aquí más enlaces de imágenes si es necesario
  ];

  return (
    <div className="bg-white mt-20">
      <div className="text-center py-8 ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-16">Principales Clientes</h2> {/* Agregado mb-8 para espacio inferior */}
      </div>
      <div className="mx-auto max-w-7xl pb-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 gap-y-32"> {/* Cambiado gap-y-20 a gap-y-8 */}
          {images.map((image, index) => (
            <ImageWithScrollAnimation key={index} src={image} alt={`Image ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ImageWithScrollAnimation({ src, alt }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px', // Ajusta este valor para controlar cuándo se activa la animación
    delay: 300, // Ajusta este valor según tus necesidades
  });

  return (
    <div ref={ref} className={`col-span-1 flex justify-center ${inView ? 'opacity-100 transform translate-y-0 transition-opacity transition-transform duration-3000 delay-7000' : 'opacity-0 transform translate-y-10'}`}>
      <img className="h-12 transition-opacity transition-transform duration-3000" src={src} alt={alt} />
    </div>
  );
}
