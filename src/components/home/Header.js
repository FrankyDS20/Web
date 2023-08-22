import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import HeaderImage from 'assets/img/holaa2.png' 


const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
      { name: 'Contacto', href: '/contacto' },
  ],
  company: [
      { name: 'Casos', href: '/casos' },
      { name: 'Servicios', href: '/servicios' },
      { name: 'Nosotros', href: '/nosotros' },
      { name: 'Carreras', href: '/carreras' },
      { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],

}
function Header() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Cuando la imagen se cargue, establece la opacidad en 1
    const img = new Image();
    img.src = HeaderImage; // Usa la importación de la imagen aquí
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
          <div className="absolute inset-x-0 left-0 -z-20 transform-gpu overflow-hidden bg-white lg:top-[-200px] sm:top-[-150px]">
            <img
              src={HeaderImage}
              className={`w-full h-full object-cover header-image ${
                imageLoaded ? 'opacity-1' : 'opacity-0'
              } transition-opacity duration-1000 ease-in-out`}
              alt="Header Background"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-semibold tracking-tight pb-16 sm:text-7xl mt-[-80px]">
              <span
                className={`inline-block ${
                  imageLoaded
                    ? 'transform transition-transform duration-1000 ease-in-out translate-y-0'
                    : 'opacity-0 translate-y-16'
                }`}
              >
                Innovacion{' '}
              </span>
              <br />
              <span
                className={`inline-block ${
                  imageLoaded
                    ? 'transform transition-transform duration-1000 text-orange-button ease-in-out translate-y-0'
                    : 'opacity-0 translate-y-16'
                }`}
              >
                <Typewriter
                  words={['Metalica !']}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={120}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onInit={() => setImageLoaded(true)}
                />
              </span>
            </h1>
  
            <p className="mt-16 text-2xl max-w-3xl leading-8 text-black">
              <span
                className={`inline-block ${
                  imageLoaded
                    ? 'transform transition-transform duration-1000 ease-in-out translate-y-0'
                    : 'opacity-0 translate-y-16'
                }`}
              >
                Jumpstart today your business with
                <br /> one of our services that range from <br />
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
  
};

export default Header