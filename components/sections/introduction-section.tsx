import React from 'react';

export const IntroductionSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Building Wealth Through Smart Financial Planning
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Society Max, we understand that every financial journey is unique. Our team of experienced 
              advisors works closely with you to develop personalized strategies that align with your specific 
              goals and risk tolerance.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              With decades of combined experience in wealth management, we've helped thousands of clients 
              achieve their financial dreams through disciplined investing and comprehensive planning.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">$2.5B+</div>
                <div className="text-gray-600">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">15,000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Personalized Approach</h3>
                  <p className="text-gray-600">Customized financial strategies tailored to your unique needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Expert Guidance</h3>
                  <p className="text-gray-600">Access to seasoned financial professionals</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Proven Results</h3>
                  <p className="text-gray-600">Track record of delivering consistent returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
