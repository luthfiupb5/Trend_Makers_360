import React from 'react';
import { Link } from 'react-router-dom';
import { breadcrumbSchema } from '../lib/jsonld';

const Breadcrumbs = ({ items }) => {
  const jsonLd = breadcrumbSchema(items);

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <svg 
                    className="w-4 h-4 text-gray-400 mx-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                )}
                {index === items.length - 1 ? (
                  <span className="text-gray-600 font-medium">{item.name}</span>
                ) : (
                  <Link 
                    to={item.url} 
                    className="text-brand-blue hover:text-brand-cyan transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
