'use client';

import { useState, useEffect } from 'react';
import React from 'react';


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
const GuideCard = ({ title, link }) => (
  <a href={link} className="block text-gray-700 hover:text-orange-500 py-1">
    {title}
  </a>
); 
const ToolGi = ({ showGui = true}) => {
  const [open, setOpen] = useState(false);
  const [opn, setPen] = useState(false);
  const [pen, setEn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobil, setIMobile ] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
      setIMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  return (
  <div className="bg-gray-100 md:bg-transparent">
    <div className="col-span-1">
        <div className="bg-transparent md:bg-white md:p-6 rounded-lg md:shadow-md md:border-l-4 md:border-orange-500 md:mb-8">
            <h2 onClick={() => isMobile && setOpen(!open)}
            className="md:text-xl md:font-bold md:mb-4 mb-6 text-gray-900 flex justify-between md:px-0 px-5">Calculadora
             <pt-icon 
              className="py-2"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}>
             {isMobile && (
                open ? (
                  <AboveDownIcon aria-hidden="true" className="block lg:hidden" />
                ) : (
                  <BelowDownIcon aria-hidden="true" className="block lg:hidden" />
                )
               )}
            </pt-icon>
            </h2>
               <ul className={`flex flex-col gap-3 mt-2 ${open ? 'block' : 'hidden'} lg:block md:bg-transparent bg-gray-300 md:px-0 px-5`}>
                  <li className="mb-2"><a href="#" className="text-gray-700 hover:text-orange-500">Simulador de crédito</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-700 hover:text-orange-500">Simulador gastos notariales</a></li>
                  <li className="mb-6"><a href="#" className="text-gray-700 hover:text-orange-500">Precios m2</a></li>
                </ul>
        </div>
        <div className="bg-transparent md:bg-white md:p-6 rounded-lg md:shadow-md md:border-l-4 md:border-orange-500">
            <h2 onClick={() => isMobil && setPen(!opn)}
            className="md:text-xl md:font-bold md:mb-4 mb-6 text-gray-900 flex justify-between md:px-0 px-5">Tu inmueble
              <pt-icon 
                className="py-2"
                aria-label={opn ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={opn}>
               {isMobil && (
                opn ? (
                  <AboveDownIcon aria-hidden="true" className="block lg:hidden" />
                ) : (
                  <BelowDownIcon aria-hidden="true" className="block lg:hidden" />
                )
               )}
              </pt-icon>
             </h2>
             <ul className={`flex flex-col gap-3 mt-2 ${opn ? 'block' : 'hidden'} lg:block md:bg-transparent bg-gray-300 md:px-0 px-5`}>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:text-orange-500">Búsqueda personalizada</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:text-orange-500">Solicita tu inmueble</a></li>
                <li className="mb-2"><a href="#" className="text-gray-700 hover:text-orange-500">Consigna tu inmueble</a></li>
                <li className="mb-6"><a href="#" className="text-gray-700 hover:text-orange-500">Calcular precio sugerido</a></li>
            </ul>
        </div>
     </div>
     {showGui && (
        <div className="">
          <h2 onClick={() => setEn(!pen)}
           className ="md:text-xl md:font-bold md:mb-0 mb:4 text-gray-900 flex justify-between md:px-0 px-5">Guias
            <pt-icon 
              className="py-2"
              aria-label={pen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={pen}>
              {pen ? <AboveDownIcon aria-hidden="true" /> : <BelowDownIcon aria-hidden="true" />}
            </pt-icon>
          </h2>
          {pen&& (
            <div className="flex flex-col md:mt-0 mt-6 gap-3 bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-2 bg-gray-300 md:bg-transparent md:px-0 px-5">
              <GuideCard title="Guía de arriendo" link="#" />
              <GuideCard title="Guía de compra y venta" link="#" />
              <GuideCard title="Guía de propiedad horizontal" link="#" />
              <GuideCard title="Guía de crédito" link="#" />
            </div>
          )}
        </div>
      )}
     </div>
   );
};
export default ToolGi;