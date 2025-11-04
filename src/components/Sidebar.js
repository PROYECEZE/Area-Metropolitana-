// components/Sidebar.js
import Link from 'next/link';

export default function Sidebar({showHeader = true, showButton = true }) {
  const categories = [
    { name: 'Noticias', href: '/noticias' },
    { name: 'Economía', href: '/economia' },
    { name: 'Decoración', href: '/decoracion' },
    { name: 'Arquitectura', href: '/arquitectura' },
    { name: 'Entretenimiento', href: '/entretenimiento' },
    { name: 'Actualidad', href: '/actualidad' },
  ];

  return (
    <div className="group bg-gray-100 p-6 rounded-lg shadow-sm mt-6 mb-6 hover:bg-orange-500 hover:text-white transition duration-300">
      {showHeader && (
       <h2 className="text-xl font-bold mb-6 text-gray-800">Noticias y tendencias</h2>
      )}
      <ul className="space-y-4 group-hover:text-white text-gray-700 text-lg ">
        {categories.map((category) => (
          <li key={category.name}>
            <Link 
              href={category.href} 
              className="hover:underline underline-offset-4 decoration-2 decoration-white block"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
      {showButton && (
        <button className="mt-8 w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-md transition duration-200">
          Más noticias y tendencias
        </button>
       )}
    </div>
  );
}

