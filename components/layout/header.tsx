"use client";

import React, { useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <Link href="/whoweserve" className="text-gray-100 hover:text-[#C9A961] font-medium transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Who We Serve</Link>
            <Link href="/insights" className="text-gray-100 hover:text-[#C9A961] font-medium transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Insights</Link>
            <Link href="/contact" className="text-gray-100 hover:text-[#C9A961] font-medium transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Contact</Link>
          </nav>
          
          {/* Buttons */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center md:!hidden">
              <button
                type="button"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="inline-flex items-center justify-center rounded-md border border-[#C9A961] p-2 text-[#C9A961] hover:bg-[#C9A961] hover:text-[#121417] transition-all duration-300"
              >
                {mobileMenuOpen ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </div>
            <Link href="/login">
            <Button 
              variant="outline" 
              className="border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-[#121417] transition-all duration-300 px-6 py-2 rounded-md font-medium"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Log In
            </Button>
            </Link>
            <Link href="/register">
            <Button 
              variant="outline" 
              className="border-[#C9A961] bg-transparent text-[#C9A961] hover:bg-[#C9A961] hover:text-[#121417] transition-all duration-300 px-6 py-2 rounded-md font-medium"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Sign Up
            </Button>
            </Link>
            <Link href="/schedule">
              <Button 
                className="bg-gradient-to-r from-[#C9A961] to-[#B8B77A] !text-lg text-white hover:from-[#B8B77A] hover:to-[#A89668] transition-all duration-300 px-6 py-2 rounded-md font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="mt-2 rounded-lg border border-[#2A2F36] bg-[#0E1013] shadow-lg overflow-hidden">
              <nav className="flex flex-col">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-100 hover:text-[#C9A961] hover:bg-[#121417] transition-colors font-medium"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-100 hover:text-[#C9A961] hover:bg-[#121417] transition-colors font-medium"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-100 hover:text-[#C9A961] hover:bg-[#121417] transition-colors font-medium"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Services
                </Link>
                <Link
                  href="/whoweserve"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-100 hover:text-[#C9A961] hover:bg-[#121417] transition-colors font-medium"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Who We Serve
                </Link>
                <Link
                  href="/insights"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-100 hover:text-[#C9A961] hover:bg-[#121417] transition-colors font-medium"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Insights
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-100 hover:text-[#C9A961] hover:bg-[#121417] transition-colors font-medium"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A961] to-transparent opacity-80" />
      </div>
    </header>
  );
};