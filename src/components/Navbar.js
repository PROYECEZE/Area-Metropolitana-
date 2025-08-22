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
    <span className={'icon icon-burguer'}></span>
  );
const CloseIcon = () => (
     <span className={'icon icon-close'}></span>
  );
// --- Componente Principal del Navbar ---
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNewsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const [isToolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  return (
    <header className="bg-white shadow-md font-sans">
      {/* ======================= NAVEGACIÓN PRINCIPAL ======================= */}
      <nav className="container mx-auto px-4 hidden md:flex items-center justify-between py-4">
        {/* Sección Izquierda: Logo + Links de Navegación */}
        <div className="flex items-center space-x-8">
          <a href="#" className="flex-shrink-0" aria-label="Metrocuadrado Inicio">
            <Image
              src="/image/frame.png"
              alt="Metrocuadrado Logo"
              width={120}
              height={40}
              priority
            />
          </a>
          {/* Menú principal */}
          <ul className="flex items-center space-x-6 text-sm text-gray-800">
            {/* Dropdown Noticias */}
            <li
              className="relative"
              onMouseEnter={() => setNewsDropdownOpen(true)}
              onMouseLeave={() => setNewsDropdownOpen(false)}
            >
              <button
                className="flex items-center hover:text-orange-500 transition-colors"
                aria-haspopup="true"
                aria-expanded={isNewsDropdownOpen}
              >
                Noticias y Tendencias 
                <ChevronDownIcon />
              </button>
              {isNewsDropdownOpen && (
                <ul className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Tendencias del Mercado
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Guías de Compra
                    </a>
                  </li>
                </ul>
              )}
            </li>
            {/* Dropdown Herramientas */}
            <li
              className="relative"
              onMouseEnter={() => setToolsDropdownOpen(true)}
              onMouseLeave={() => setToolsDropdownOpen(false)}
            >
              <button
                className="flex items-center hover:text-orange-500 transition-colors"
                aria-haspopup="true"
                aria-expanded={isToolsDropdownOpen}
              >
                Herramientas
               <ChevronDownIcon />
              </button>
              {isToolsDropdownOpen && (
                <ul className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Calculadora de Crédito
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Avalúo en Línea
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        {/* Sección Derecha: Autenticación + Publicar */}
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="flex items-center text-sm text-gray-800 hover:text-orange-500 transition-colors"
          >
            <UserIcon aria-hidden="true" />
            <span className="ml-2">Ingresar</span>
          </a>
          <a
            href="#"
            className="text-sm text-orange-500 border border-orange-500 rounded-md px-4 py-2 hover:bg-orange-500 hover:text-white transition-colors duration-300"
          >
            Publica tu inmueble
          </a>
        </div>
      </nav>
      {/* ========================= NAVEGACIÓN MÓVIL ========================= */}
      <nav className="container mx-auto px-4 md:hidden relative h-20">
        <div className="flex items-center justify-between h-full">
          {/* Botón de Menú Hamburguesa */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none z-30"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <CloseIcon aria-hidden="true" /> : <HamburgerIcon aria-hidden="true" />}
          </button>
          {/* Logo */}
          <a href="#" aria-label="Metrocuadrado Inicio">
            <Image
              src="/image/frame.png"
              alt="Metrocuadrado Logo"
              width={100}
              height={38}
              priority
            />
          </a>
          {/* Icono Usuario */}
          <a href="#" className="z-30" aria-label="Ingresar">
            <UserIcon aria-hidden="true" />
          </a>
        </div>
        {/* Menú Desplegable Móvil */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white border-t border-gray-200"
          >
            <ul className="flex flex-col px-4 py-4 space-y-2">
              <li><a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Noticias y tendencias</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Herramientas</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Ingresar</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Contáctenos</a></li>
              <li>
                <a
                  href="#"
                  className="block w-full text-center bg-orange-500 text-white px-4 py-3 rounded-md hover:bg-orange-600 mt-4 font-semibold"
                >
                  Publica tu inmueble
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;