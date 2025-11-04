import Sidebar from '@/components/Sidebar';
import ArticleCard from '@/components/ArticleCard';

export default function despliege() {
    const articles = [
    {
      id: 1,
      imageUrl: '/image/1_0.png', // Reemplaza con tus imágenes
      title: '¿Cuánto me presta un banco para vivienda según mi sueldo?',
      description: 'Descubre cómo calcular el monto que un banco te puede prestar para comprar tu vivienda según tus ingresos.',
      href: '/articulo/cuanto-presta-banco',
    },
    {
      id: 2,
      imageUrl: '/image/2_0.jpg',
      title: '¿Necesitas guardar tus cosas? Descubre las ventajas de alquilar una mini bodega',
      description: 'Conoce los beneficios de las mini bodegas para guardar tus pertenencias de forma segura y conveniente.',
      href: '/articulo/ventajas-mini-bodega',
    },
    {
      id: 3,
      imageUrl: '/image/3_0.jpg',
      title: '¿Puede la reforma laboral mejorar el acceso a la vivienda?',
      description: 'Analizamos el impacto de la reforma laboral en el sector de la construcción y el acceso a la vivienda.',
      href: '/articulo/reforma-laboral-vivienda',
    },
  ];
  return (
    <>
    <div className="bg-gray-300 absolute w-full hidden md:block">
       <div className="flex container mx-auto gap-8">
          {/* Columna de la barra lateral */}
              <Sidebar />
          {/* Columna de los artículos */}
          <div className="md:col-span-3 p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Lo último en Metrocuadrado
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
                <ArticleCard
                key={article.id}
                imageUrl={article.imageUrl}
                title={article.title}
                description={article.description}
                href={article.href}
                />
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}