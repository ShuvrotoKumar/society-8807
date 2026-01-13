import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Society Max</h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in wealth management and financial planning. 
              Building secure futures since 2010.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investment Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Financial Planning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wealth Preservation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Legacy Planning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Market Insights</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Financial Calculators</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Research Reports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Client Portal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="text-gray-300">
                <strong>Phone:</strong> (555) 123-4567
              </p>
              <p className="text-gray-300">
                <strong>Email:</strong> info@societymax.com
              </p>
              <p className="text-gray-300">
                <strong>Address:</strong> 123 Financial District, Suite 100, New York, NY 10001
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Society Max. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Disclosures</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
