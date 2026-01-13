import React from 'react';
import { Button } from '../ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#1A1A1A] h-[60vh] py-20" style={{ fontFamily: 'Playfair Display, serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Your Trusted Partner in Wealth Management
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
            Society Max provides comprehensive financial planning and investment management services 
            to help you achieve your financial goals and secure your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#C9A961] text-white hover:bg-[#B8B77A] transition-colors px-6 py-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Get Started Today
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#121417] transition-colors px-6 py-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
