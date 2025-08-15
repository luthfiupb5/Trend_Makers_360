import React from 'react';
import { Link } from 'react-router-dom';

const CTAButtons = ({ 
  primaryText = "Book Strategy Call", 
  primaryHref = "#",
  secondaryText = "WhatsApp Us", 
  secondaryHref = "https://wa.me/91XXXXXXXXXX",
  className = ""
}) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Link
        to={primaryHref}
        className="px-8 py-4 bg-brand-gradient text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
      >
        {primaryText}
      </Link>
      <a
        href={secondaryHref}
        className="px-8 py-4 border-2 border-brand-blue text-brand-blue rounded-xl font-semibold hover:bg-brand-blue hover:text-white transition-all duration-300 text-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        {secondaryText}
      </a>
    </div>
  );
};

export default CTAButtons;
