import React from 'react';

export const OurProcessSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with a comprehensive discussion about your financial goals, current situation, and aspirations for the future."
    },
    {
      step: "02",
      title: "Financial Analysis",
      description: "Our team conducts a thorough analysis of your current financial position, risk tolerance, and investment preferences."
    },
    {
      step: "03",
      title: "Strategy Development",
      description: "We create a personalized wealth management strategy tailored to your unique needs and long-term objectives."
    },
    {
      step: "04",
      title: "Implementation & Monitoring",
      description: "We implement the strategy and continuously monitor performance, making adjustments as needed to ensure optimal results."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Process</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A structured approach to wealth management that ensures your financial success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mb-6">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 right-0 w-full h-0.5 bg-blue-200 transform translate-x-6"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
