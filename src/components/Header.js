
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from 'next/image';

export default function Header() {
  const [noticiasOpen, setNoticiasOpen] = useState(false)
  const [herramientasOpen, setHerramientasOpen] = useState(false)

  return (
    <header className="container mx-xl flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <Image className=""
          src="/image/frame.png"
          alt="Descripción de la imagen"
          width={100}
          height={50}
      />
      <nav className="hidden md:flex items-center space-x-8">
        <div className="relative">
          <button
            className="flex items-center text-gray-700 hover:text-orange-500"
            onClick={() => setNoticiasOpen(!noticiasOpen)}
          >
            Noticias y Tendencias
          </button>
          {noticiasOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
              <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">
                Últimas noticias
              </Link>
              <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">
                Tendencias del mercado
              </Link>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="flex items-center text-gray-700 hover:text-orange-500"
            onClick={() => setHerramientasOpen(!herramientasOpen)}
          >
            Herramientas
          </button>
          {herramientasOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
              <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">
                Calculadora hipotecaria
              </Link>
              <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">
                Comparador de precios
              </Link>
            </div>
          )}
        </div>
      </nav>
      {/* Auth buttons */}
      <div className="flex items-center space-x-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 11C10.9 11 9.95833 10.6083 9.175 9.825C8.39167 9.04167 8 8.1 8 7C8 5.9 8.39167 4.95833 9.175 4.175C9.95833 3.39167 10.9 3 12 3C13.1 3 14.0417 3.39167 14.825 4.175C15.6083 4.95833 16 5.9 16 7C16 8.1 15.6083 9.04167 14.825 9.825C14.0417 10.6083 13.1 11 12 11ZM4 21V16.2C4 15.6333 4.14583 15.1125 4.4375 14.6375C4.72917 14.1625 5.11667 13.8 5.6 13.55C6.63333 13.0333 7.68333 12.6458 8.75 12.3875C9.81667 12.1292 10.9 12 12 12C13.1 12 14.1833 12.1292 15.25 12.3875C16.3167 12.6458 17.3667 13.0333 18.4 13.55C18.8833 13.8 19.2708 14.1625 19.5625 14.6375C19.8542 15.1125 20 15.6333 20 16.2V21H4ZM6 19H18V16.2C18 16.0167 17.9542 15.85 17.8625 15.7C17.7708 15.55 17.65 15.4333 17.5 15.35C16.6 14.9 15.6917 14.5625 14.775 14.3375C13.8583 14.1125 12.9333 14 12 14C11.0667 14 10.1417 14.1125 9.225 14.3375C8.30833 14.5625 7.4 14.9 6.5 15.35C6.35 15.4333 6.22917 15.55 6.1375 15.7C6.04583 15.85 6 16.0167 6 16.2V19ZM12 9C12.55 9 13.0208 8.80417 13.4125 8.4125C13.8042 8.02083 14 7.55 14 7C14 6.45 13.8042 5.97917 13.4125 5.5875C13.0208 5.19583 12.55 5 12 5C11.45 5 10.9792 5.19583 10.5875 5.5875C10.1958 5.97917 10 6.45 10 7C10 7.55 10.1958 8.02083 10.5875 8.4125C10.9792 8.80417 11.45 9 12 9Z" fill="currentColor"></path>
        </svg>
        <Link href="/login" className="text-gray-700 hover:text-orange-500">
          Ingresar
        </Link>
        <Link
          href="/publicar"

          className="bg-orange-500 text-white px-4 py-2 rounded-md zhover:bg-orange-600 transition-colors"
        >
          Publica tu Inmueble
        </Link>
      </div>
    </header>
  )
}
