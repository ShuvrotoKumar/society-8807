import React from 'react';

export const OurServicesSection: React.FC = () => {
  const services = [
    {
      title: "Investment Management",
      description: "Strategic portfolio management tailored to your risk tolerance and financial goals",
      features: ["Portfolio diversification", "Risk assessment", "Performance monitoring"]
    },
    {
      title: "Financial Planning",
      description: "Comprehensive financial planning to secure your future and achieve your goals",
      features: ["Retirement planning", "Tax optimization", "Estate planning"]
    },
    {
      title: "Wealth Preservation",
      description: "Protect and grow your wealth through sophisticated strategies",
      features: ["Asset protection", "Inflation hedging", "Capital preservation"]
    },
    {
      title: "Legacy Planning",
      description: "Ensure your wealth benefits future generations through strategic planning",
      features: ["Trust services", "Philanthropic planning", "Family governance"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive wealth management solutions designed to meet all your financial needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">
                      ✓
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
