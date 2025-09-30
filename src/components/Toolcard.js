import React from 'react';

const ToolCard = ({ title, description, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden relative hover:text-orange-500 hover:drop-shadow-[0_2px_6px_rgba(249,115,22,0.8)]">
      <a href="#" className="absolute inset-0 z-10 text-[0]"></a>
    <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const GuideCard = ({ title, link }) => (
  <a href={link} className="block text-gray-700 hover:text-orange-500 py-1">
    {title}
  </a>
);

const ToolsPage = () => {
  return (
   <div className="absolute bg-gray-300 md:grid md:grid-cols-1 md:grid-cols-4 gap-8 p-7 hidden md:block">
    {/* Columna Izquierda: Calculadora y Tu Inmueble */}
        <div className="col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500 mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Calculadora</h2>
              <ul>
                  <li className="mb-2"><a href="#" className="text-gray-700 hover:text-orange-500">Simulador de crédito</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-700 hover:text-orange-500">Simulador gastos notariales</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-700 hover:text-orange-500">Precios m2</a></li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Tu inmueble</h2>
              <ul>
                  <li className="mb-2"><a href="#" className="text-gray-700 hover:text-orange-500">Búsqueda personalizada</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-700 hover:text-orange-500">Solicita tu inmueble</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-700 hover:text-orange-500">Consigna tu inmueble</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-700 hover:text-orange-500">Calcular precio sugerido</a></li>
              </ul>
            </div>
        </div>
         {/* Columnas Derechas: Guías y Otras Guías */}
        <div className="col-span-3">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Guías</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative text-gray-900">
            <ToolCard
                title="Simula tu crédito hipotecario desde el detalle del inmueble"
                description=""
                imageUrl="/image/im1.png"
            />
            <ToolCard
                title="Nuevos paquetes de publicación en Metrocuadrado"
                description=""
                imageUrl="/image/im2.png" 
            />
            <ToolCard
                title="Construye tu plan de pagos para comprar vivienda sobre planos"
                description=""
                imageUrl="/image/im3.png"
            />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Otras guías</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
            <GuideCard title="Guía de arriendo" link="#" />
            <GuideCard title="Guía de compra y venta" link="#" />
            <GuideCard title="Guía de propiedad horizontal" link="#" />
            <GuideCard title="Guía de crédito" link="#" />
            </div>
        </div>
    </div>
  );
};

export default ToolsPage;