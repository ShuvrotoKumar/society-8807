import React from 'react';
import { Button } from '../ui/button';

export const MeetAdvisorSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Meet Your Dedicated Wealth Advisor
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our experienced financial advisors are committed to helping you achieve your wealth management goals. 
              With personalized attention and expert guidance, we ensure your financial future is in capable hands.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">
                  ✓
                </div>
                <span className="text-gray-700">15+ Years Average Experience</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">
                  ✓
                </div>
                <span className="text-gray-700">Certified Financial Planner</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">
                  ✓
                </div>
                <span className="text-gray-700">Fiduciary Responsibility</span>
              </div>
            </div>
            <Button className="bg-blue-900 text-white px-8 py-3 hover:bg-blue-800">
              Schedule Your Consultation
            </Button>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <div className="text-6xl text-blue-900">👔</div>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Expert Guidance Every Step
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                From initial planning to ongoing management, your advisor provides comprehensive support 
                tailored to your unique financial situation and goals.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-900 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-900 mb-1">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
