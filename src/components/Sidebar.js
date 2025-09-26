// components/Sidebar.js
import Link from 'next/link';

export default function Sidebar() {
  const categories = [
    { name: 'Noticias', href: '/noticias' },
    { name: 'Economía', href: '/economia' },
    { name: 'Decoración', href: '/decoracion' },
    { name: 'Arquitectura', href: '/arquitectura' },
    { name: 'Entretenimiento', href: '/entretenimiento' },
    { name: 'Actualidad', href: '/actualidad' },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-sm mt-6 mb-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Noticias y tendencias</h2>
      <ul className="space-y-4">
        {categories.map((category) => (
          <li key={category.name}>
            <Link 
              href={category.href} 
              className="text-gray-700 hover:text-orange-500 text-lg block"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
      <button className="mt-8 w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-md transition duration-200">
        Más noticias y tendencias
      </button>
    </div>
  );
}

