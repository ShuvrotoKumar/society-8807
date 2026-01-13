import React from 'react';

export const WhoWeServeSection: React.FC = () => {
  const clients = [
    {
      title: "High Net Worth Individuals",
      description: "Comprehensive wealth management for individuals with significant assets",
      icon: "👤"
    },
    {
      title: "Families",
      description: "Multi-generational wealth planning and family office services",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Business Owners",
      description: "Strategic financial planning for entrepreneurs and executives",
      icon: "💼"
    },
    {
      title: "Retirees",
      description: "Income planning and preservation strategies for retirement",
      icon: "🏖️"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Who We Serve</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide specialized wealth management solutions tailored to your unique financial situation and goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">{client.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3 text-center">
                {client.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
