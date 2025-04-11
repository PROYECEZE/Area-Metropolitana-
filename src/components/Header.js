
"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [noticiasOpen, setNoticiasOpen] = useState(false)
  const [herramientasOpen, setHerramientasOpen] = useState(false)

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <div className="relative w-10 h-10 mr-2">
          <div className="absolute inset-0 bg-orange-500 rounded-md transform rotate-45"></div>
          <div className="absolute inset-0 flex items-center justify-center">
          </div>
        </div>
        <span className="text-gray-800 font-medium">metro cuadrado</span>
      </Link>

      {/* Navigation */}
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
        <Link href="/login" className="text-gray-700 hover:text-orange-500">
          Ingresar
        </Link>
        <Link
          href="/publicar"
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
        >
          Publica tu Inmueble
        </Link>
      </div>
    </header>
  )
}
