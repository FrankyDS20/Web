import React from 'react';
import { StarIcon } from '@heroicons/react/24/outline';
import fondo_2 from 'assets/img/fondo_2.png';
import { Fade } from 'react-reveal';



const features = [
  {
    name: 'Calidad en Cada Soldadura',
    description: 'Técnicas de soldadura avanzadas para asegurar la durabilidad y resistencia de nuestras estructuras.',
  },
  { name: 'Profesionales de la Instalación', 
    description: 'Nuestro equipo altamente capacitado se encarga de la instalación de principio a fin.' },
  {
    name: 'Tu Socio Agrícola Confiable',
    description: 'Colaboramos estrechamente contigo para hacer realidad tus proyectos agrícolas.',
  },
  { name: 'Sostenibilidad y Crecimiento', description: 'Apoyamos prácticas agrícolas sostenibles a través de nuestras soluciones ecológicas.' },
  { name: 'Pasión por la Innovación', description: 'Impulsados por la pasión por la innovación, exploramos nuevas tecnologías y técnicas en la creación de invernaderos.' },
  { name: 'Compromiso con la Calidad', description: 'En Naypaqman, nuestra búsqueda incansable de la excelencia nos impulsa a mantener los más altos estándares de calidad en cada proyecto.' },
  { name: 'Equipo Experimentado y Dedicado', description: 'Nuestros ingenieros, soldadores y profesionales están comprometidos con la creación de invernaderos excepcionales.' },
  { name: 'Pasión por el Medio Ambiente', description: 'Nuestros invernaderos no solo son una inversión en la agricultura, sino también en un futuro más verde.' },
]

export default function Features() {
  return (
    <div
      className="bg-image"
      style={{
        backgroundImage: `url(${fondo_2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-16">
        <div>
          <h2 className="text-lg font-semibold text-blue-button">Invernaderos de Calidad: </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Tu Cosecha, Nuestra Pasión</p>
          <p className="mt-4 text-lg text-gray-500">
            Bienvenido a Naypaqman, donde creamos invernaderos de calidad que impulsan tu éxito agrícola. Desde la
            soldadura experta hasta la instalación impecable, estamos aquí para hacer crecer tus sueños verdes.
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature, index) => (
              <Fade key={feature.name} bottom delay={index * 200}>
                <div className="relative">
                  <dt>
                    <StarIcon className="absolute h-6 w-6 text-orange-500" aria-hidden="true" />
                    <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                </div>
              </Fade>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}