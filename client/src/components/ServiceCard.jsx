import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  link, 
  gradient = "from-pink-500 to-purple-600" 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center text-white mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-brand-text mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link 
        to={link}
        className="text-brand-blue font-semibold hover:text-brand-cyan transition-colors"
      >
        Learn More →
      </Link>
    </div>
  );
};

export default ServiceCard;
