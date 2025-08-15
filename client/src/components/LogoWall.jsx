import React from 'react';

const LogoWall = () => {
  const clients = [
    { name: 'Anna College', initials: 'AC' },
    { name: 'Cochin Tech Institute', initials: 'CTI' },
    { name: 'Hyderabad Business School', initials: 'HBS' },
    { name: 'Chennai Engineering College', initials: 'CEC' },
    { name: 'Kerala Institute of Technology', initials: 'KIT' },
    { name: 'Andhra University', initials: 'AU' }
  ];

  return (
    <section className="py-12 bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-semibold text-gray-600 mb-8">
            Trusted by leading educational institutions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-brand-blue font-bold text-sm mb-2">
                  {client.initials}
                </div>
                <span className="text-xs text-gray-600 text-center">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoWall;
