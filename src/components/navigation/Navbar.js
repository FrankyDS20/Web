import { connect } from 'react-redux';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo_central from 'assets/img/logo_naypaqman.png';
import logo_dots from 'assets/img/loading-dots.gif';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('shadow-navbar', 'bg-white');
      } else {
        navbar.classList.remove('shadow-navbar', 'bg-white');
      }
    }
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <nav
      id='navbar'
      className='w-full pt-3 top-0 transition duration-500 ease-in-out z-40 fixed'
    >
      <div className='px-4 sm:px-6'>
        <div className='-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2'>
          <Link to='/' className='ml-4 mt-2'>
            <img src={logo_central} width={150} height={80} className='' alt='Logo' />
          </Link>
          <div className={`ml-auto mt-12 sm:hidden fixed top-0 right-12 z-50`}>
  {/* Mostrar solo en pantallas pequeñas */}
  <button
    type='button'
    className='text-gray-600 hover:text-gray-900 focus:outline-none'
    onClick={toggleMobileMenu} 
  >
    <svg
      className='h-10 w-10'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
    </svg>
  </button>
  <div className={`bg-white mt-2 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id='mobile-menu'>
    <ul className='text-lg'>
      <li>
        <NavLink
          to='/casos'
          className='font-medium text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4 block py-2'
        >
          Casos
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/servicios'
          className='font-medium text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4 block py-2'
        >
          Servicio
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/nosotros'
          className='font-medium text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4 block py-2'
        >
          Nosotros
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/carreras'
          className='font-medium text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4 block py-2'
        >
          Carreras
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/blog'
          className='font-medium text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4 block py-2'
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/contactanos'
          className='font-medium text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4 block py-2'
        >
          Contactanos
        </NavLink>
      </li>
      <li>
        <Link
          to='/contactanos'
          className='relative inline-flex items-center rounded-md border border-transparent bg-orange-button px-6 py-2 text-lg font-bold text-white shadow-sm transition duration-500 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
        >
          Contratanos
          <img src={logo_dots} className='w-7 h-2 mt-1 ml-2' alt='Dots' />
        </Link>
      </li>
    </ul>
  </div>
</div>

          <div className={`ml-4 mt-2 flex-shrink-0 hidden sm:block`} id='web-menu'>
            {/* Menú horizontal para modo web */}
            <NavLink
              to='/casos'
              className='text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4'
            >
              Casos
            </NavLink>
            <NavLink
              to='/servicios'
              className='text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4'
            >
              Servicio
            </NavLink>
            <NavLink
              to='/nosotros'
              className='text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4'
            >
              Nosotros
            </NavLink>
            <NavLink
              to='/carreras'
              className='text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4'
            >
              Carreras
            </NavLink>
            <NavLink
              to='/blog'
              className='text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4'
            >
              Blog
            </NavLink>
            <NavLink
              to='/contactanos'
              className='text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4'
            >
              Contactanos
            </NavLink>
            <Link
              to='/contactanos'
              className='ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-button px-6 py-2 text-lg font-bold text-white shadow-sm transition duration-500 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
            >
              Contratanos
              <img src={logo_dots} className='w-7 h-2 mt-1 ml-2' alt='Dots' />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
