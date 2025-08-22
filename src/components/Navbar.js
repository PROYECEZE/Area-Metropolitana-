'use client';

import { useState } from 'react';
import Image from 'next/image';

// --- Componentes de Iconos para mayor legibilidad ---

const UserIcon = () => (
    <span className={'icon icon-user'}></span>
  );
const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
const HamburgerIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  );

const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );
// --- Componente Principal del Navbar ---
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNewsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const [isToolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  return (
    <section className="bg-white shadow-md font-sans">
      {/* ======================= VISTA DE ESCRITORIO ======================= */}
      <div className="container mx-auto px-4 hidden md:flex items-center justify-between py-4">
        {/* Sección Izquierda: Logo + Links de Navegación */}
        <div className="flex items-center space-x-8">
          <a href="#" className="flex-shrink-0">
            <Image
              src="/image/frame.png"
              alt="Metrocuadrado Logo"
              width={120}
              height={40}
              priority
            />
          </a>
          <nav className="flex items-center space-x-6 text-sm text-gray-800">
            <ul className="relative" onMouseEnter={() => setNewsDropdownOpen(true)} onMouseLeave={() => setNewsDropdownOpen(false)}>
              <button className="flex items-center hover:text-orange-500 transition-colors">
                Noticias y Tendencias
                <ChevronDownIcon />
              </button>
              {isNewsDropdownOpen && (
                <li className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tendencias del Mercado</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Guías de Compra</a>
                </li>
              )}
            </ul>
            
            {/* Dropdown de Herramientas */}
            <ul className="relative" onMouseEnter={() => setToolsDropdownOpen(true)} onMouseLeave={() => setToolsDropdownOpen(false)}>
               <button className="flex items-center hover:text-orange-500 transition-colors">
                Herramientas
                <ChevronDownIcon />
              </button>
              {isToolsDropdownOpen && (
                 <li className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Calculadora de Crédito</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Avalúo en Línea</a>
                </li>
              )}
            </ul>
          </nav>
        </div>
        {/* Sección Derecha: Autenticación + Publicar */}
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center text-sm text-gray-800 hover:text-orange-500 transition-colors">
            <UserIcon />
            <span className="ml-2">Ingresar</span>
          </a>
          <a href="#" className="text-sm text-orange-500 border border-orange-500 rounded-md px-4 py-2 hover:bg-orange-500 hover:text-white transition-colors duration-300">
            Publica tu inmueble
          </a>
        </div>
      </div>
      {/* ========================= VISTA MÓVIL ========================= */}
      <div className="container mx-auto px-4 md:hidden relative h-20">
        <div className="flex items-center justify-between h-full">
           {/* Botón de Menú Hamburguesa */}
           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none z-30">
             {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
           </button>
            <div>
                 <a href="#">
                    <Image
                        src="/image/frame.png"
                        alt="Metrocuadrado Logo"
                        width={100}
                        height={38}
                        priority
                    />
                </a>
            </div>
            {/* Icono de Usuario */}
            <a href="#" className="z-30">
                <UserIcon />
            </a>
        </div>
      </div>
       {/* Menú Desplegable Móvil */}
        {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
                <nav className="flex flex-col px-4 py-4 space-y-2">
                    <a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Noticias y tendencias</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Herramientas</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Ingresar</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Contáctenos</a>
                    <a href="#" className="block w-full text-center bg-orange-500 text-white px-4 py-3 rounded-md hover:bg-orange-600 mt-4 font-semibold">
                        Publica tu inmueble
                    </a>
                </nav>
            </div>
        )}
    </section>
  );
};

export default Navbar;