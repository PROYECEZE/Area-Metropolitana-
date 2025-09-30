'use client';

import { useState } from 'react';
import Image from 'next/image';
import Despliege from '@/components/despliege';
import Sidebar from './Sidebar';
import ToolsPage from './toolcard';

// --- Componentes de Iconos para mayor legibilidad ---
const UserIcon = () => (
  <span className={'icon icon-user'}></span>
);
const BelowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);
const AboveDownIcon = () => (
  <svg className="ml-2" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.469402 5.96945L5.4694 0.969449C5.53908 0.899529 5.62187 0.844052 5.71304 0.806198C5.8042 0.768344 5.90194 0.748858 6.00065 0.748858C6.09936 0.748858 6.1971 0.768344 6.28827 0.806198C6.37943 0.844052 6.46222 0.899529 6.5319 0.969449L11.5319 5.96945C11.6728 6.11034 11.752 6.30144 11.752 6.5007C11.752 6.69996 11.6728 6.89105 11.5319 7.03195C11.391 7.17284 11.1999 7.252 11.0007 7.252C10.8014 7.252 10.6103 7.17284 10.4694 7.03195L6.00003 2.56257L1.53065 7.03257C1.38976 7.17347 1.19866 7.25263 0.999403 7.25263C0.800145 7.25263 0.609049 7.17347 0.468153 7.03257C0.327257 6.89168 0.2481 6.70058 0.2481 6.50132C0.2481 6.30207 0.327257 6.11097 0.468153 5.97007L0.469402 5.96945Z" fill="black"/>
  </svg>
);
const HamburgerIcon = () => (
  <span className={'icon icon-burguer'}></span>
);
const CloseIcon = () => (
  <span className={'icon icon-close'}></span>
);
const MasIcon = () => (
  <span className={'icon icon-plus'}></span>
);

const MenosIcon = () => (
  <span className={'icon icon-minus'}></span>
);
// --- Componente Principal del Navbar ---
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNewsDropdownOpen] = useState(false);
  const [onpe, NewDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [opn, closeOpen] = useState(false);

  return (
    <div className="bg-white shadow-md font-sans">
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
          <div className="md:flex items-center space-x-6 text-sm text-gray-800">
            {/* Dropdown Noticias */}
            <pt>
              <button
                onClick={() => setOpen(!open)}
                className="relative flex items-center hover:text-orange-500 transition-colors"
                aria-haspopup="true"
                aria-expanded={isNewsDropdownOpen}
              >
                Noticias y Tendencias 
                 {open ? <AboveDownIcon aria-hidden="true" /> : <BelowDownIcon aria-hidden="true" />}
              </button>
            </pt>
            {/* Dropdown Herramientas */}
            <pt>
              <button
                 onClick={() => NewDropdownOpen(!onpe)}
                className="relative flex items-center hover:text-orange-500 transition-colors"
                aria-haspopup="true"
                aria-expanded={NewDropdownOpen}
              >
                Noticias y Tendencias 
                 {onpe ? <AboveDownIcon aria-hidden="true" /> : <BelowDownIcon aria-hidden="true" />}
              </button>
            </pt>
          </div>
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
      {onpe && (
        <ToolsPage />
      )}
      {/* ========================= NAVEGACIÓN MÓVIL ========================= */}
      <nav className="container mx-auto px-0 md:hidden h-20 relative">
        <div className="flex items-center justify-between pt-3 pb-1.5 px-4">
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
            <div className="flex flex-col px-4 py-4 space-y-2 gap-4 cursor-pointer">
              <div onClick={() => closeOpen(!opn)} 
                className="flex items-center justify-between text-gray-700 hover:text-orange-500">Noticias y tendencias
                <pt-icon 
                   className="py-2"
                   aria-label={opn ? "Cerrar menú" : "Abrir menú"}
                   aria-expanded={opn}>
                   {opn ? <MenosIcon aria-hidden="true" /> : <MasIcon aria-hidden="true" />}
                </pt-icon>
              </div>
              {opn && (
                <Sidebar showHeader={false} showButton={false}/>
              )}
              <li className="flex items-center justify-between">
                <a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Herramientas</a>
                <span className={'icon icon-plus'}/></li>
              <li>
                <a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Ingresar</a>
              </li>
              <li>
                <a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Contáctenos</a>
              </li>
              <li>
                <a
                  href="#"
                  className="block w-full text-center bg-orange-500 text-white px-4 py-3 rounded-md hover:bg-orange-600 mt-4 font-semibold"
                >
                  Publica tu inmueble
                </a>
              </li>
            </div>
          </div>
        )}
      </nav>
         {open && (
          <Despliege/>
       )}
    </div>
  );
};
export default Navbar;