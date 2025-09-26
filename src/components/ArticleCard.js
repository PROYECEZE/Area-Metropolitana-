// components/ArticleCard.js
import Link from 'next/link';

export default function ArticleCard({ imageUrl, title, description, href }) {
  return (
    <Link href={href} className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
        <img src={imageUrl} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
            {title}
          </h3>
          {description && (
            <p className="text-gray-600 text-sm">{description}</p>
          )}
        </div>
    </Link>
  );
}