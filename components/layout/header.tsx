import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
export const Header: React.FC = () => {
  return (
    <header className="bg-[#121417] shadow-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img 
                src="images/logo.png" 
                alt="Society Max" 
                className="h-8 w-auto mr-2"
              />
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-100 hover:text-[#C9A961] font-medium transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Home</Link>
            <Link href="/about" className="text-gray-100 hover:text-[#C9A961] font-medium transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>About</Link>
            <Link href="/services" className="text-gray-100 hover:text-[#C9A961] font-medium transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Services</Link>
            <Link href="/wealthcare" className="text-gray-100 hover:text-[#C9A961] font-medium transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>WealthCare</Link>
            <Link href="/insights" className="text-gray-100 hover:text-[#C9A961] font-medium transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Insights</Link>
            <Link href="/submit" className="text-gray-100 hover:text-[#C9A961] font-medium transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Submit</Link>
          </nav>
          
          {/* Buttons */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              className="border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-[#121417] transition-all duration-300 px-6 py-2 rounded-md font-medium"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Log In
            </Button>
            <Button 
              variant="outline" 
              className="border-[#C9A961] bg-transparent text-[#C9A961] hover:bg-[#C9A961] hover:text-[#121417] transition-all duration-300 px-6 py-2 rounded-md font-medium"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Sign Up
            </Button>
            <Button 
              className="bg-gradient-to-r from-[#C9A961] to-[#B8B77A] text-white hover:from-[#B8B77A] hover:to-[#A89668] transition-all duration-300 px-6 py-2 rounded-md font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};