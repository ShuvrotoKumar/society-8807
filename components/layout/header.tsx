import React from 'react';
import { Button } from '../ui/button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-900">Society Max</h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">WealthCare</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Insights</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Submit</a>
          </nav>
          
          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 transition-colors">
              Client Log In
            </Button>
            <Button className="bg-blue-900 text-white hover:bg-blue-800 transition-colors">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};