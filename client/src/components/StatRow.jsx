import React from 'react';

const StatRow = () => {
  const stats = [
    { number: '20+', label: 'Institutions Served' },
    { number: '1000+', label: 'Creatives Delivered' },
    { number: '3', label: 'States Covered' }
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-brand-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatRow;
