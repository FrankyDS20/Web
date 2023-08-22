import color_fondo2 from 'assets/img/color_fondo2.jpg' 
import inverndero from 'assets/img/invernadero.png' ;
import soldador from 'assets/img/soldador.png' ;
import instalacion from 'assets/img/instalacion.png' ;
import {NavLink,Link} from 'react-router-dom'
import logo_dots from 'assets/img/loading-dots.gif'




const incentives = [
    {
      name: 'Diseño de Invernaderos Personalizados',
      imageSrc: inverndero,
      description: "Creamos invernaderos a medida para optimizar tus cultivos y maximizar la eficiencia. Nuestros diseños se adaptan a tus necesidades específicas, garantizando resultados sobresalientes",
    },
    {
      name: 'Construcción de Estructuras Metálicas:',
      imageSrc: soldador,
      description: "Expertos en soldadura y construcción de alta calidad. Creamos estructuras metálicas robustas y duraderas que se adaptan a diversos propósitos, desde agrícolas hasta industriales.",
    },
    {
      name: 'Instalación Profesional: ',
      imageSrc: instalacion,
      description:
        "Nuestro equipo altamente capacitado se encarga de la instalación meticulosa de tus invernaderos y estructuras. La seguridad y el funcionamiento adecuado son nuestra prioridad..",
    },
  ]
  
  export default function Incentives() {
    return (
      <div className="bg-image" style={{ backgroundImage: `url(${color_fondo2})` }}>
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-16 ">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-blue-button">
                Servicios de Calidad para un Futuro Sostenible
              </h2>
              <p className="mt-4 text-gray-500">
               En Naypaqman, nos dedicamos a brindarte soluciones
               integrales en construcción de invernaderos y estructuras metálicas. Nuestro compromiso es crear espacios
               que perduren en el tiempo, fusionando innovación, resistencia y diseño. Cada proyecto es una oportunidad
               para contribuir a un futuro más sostenible, donde la calidad y la excelencia son nuestro sello distintivo.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3 ">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16 text-center" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-2xl font-medium text-blue-button">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
  <div className="inline-flex rounded-md shadow">
    <Link
      to="/servicios"
      className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-button px-5 py-3 text-base font-medium text-white hover:bg-blue-button"
    >
      Ver mas
      <img src={logo_dots} className='w-7 h-2 mt-1 ml-2'/>
    </Link>
  </div>

 
</div>

        </div>
        
      </div>
      

      
    )
  }