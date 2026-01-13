import React from 'react';
import { Button } from '../ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Your Financial Future Starts Here
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Society Max provides comprehensive wealth management solutions tailored to your unique financial goals. 
            From investment planning to retirement strategies, we're here to help you build a prosperous future.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-blue-900 text-white px-8 py-3 text-lg hover:bg-blue-800">
              Get Started Today
            </Button>
            <Button variant="outline" className="border-blue-900 text-blue-900 px-8 py-3 text-lg hover:bg-blue-50">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
