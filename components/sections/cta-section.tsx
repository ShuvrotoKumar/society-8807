import React from 'react';
import { Button } from '../ui/button';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Take Control of Your Financial Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied clients who have transformed their financial lives with Society Max. 
            Schedule your free consultation today and discover how we can help you achieve your wealth management goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-white text-blue-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" className="border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-blue-900">
              Download Our Guide
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">No Obligation</div>
              <div className="text-blue-200">Free Initial Consultation</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">Expert Team</div>
              <div className="text-blue-200">Certified Professionals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
