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

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:text-[#C9A961] hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#C9A961]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
          
          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-3">
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
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/60"
            aria-label="Close menu overlay"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 z-50 h-full w-[85vw] max-w-sm bg-[#121417] shadow-2xl border-l border-white/10">
            <div className="flex items-center justify-between h-20 px-6 border-b border-white/10">
              <span className="text-gray-100 font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>Menu</span>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:text-[#C9A961] hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#C9A961]"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="px-6 py-6 space-y-6">
              <nav className="flex flex-col space-y-4">
                <Link onClick={() => setMobileMenuOpen(false)} href="/" className="text-gray-100 hover:text-[#C9A961] font-medium transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Home</Link>
                <Link onClick={() => setMobileMenuOpen(false)} href="/about" className="text-gray-100 hover:text-[#C9A961] font-medium transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>About</Link>
                <Link onClick={() => setMobileMenuOpen(false)} href="/services" className="text-gray-100 hover:text-[#C9A961] font-medium transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Services</Link>
                <Link onClick={() => setMobileMenuOpen(false)} href="/whoweserve" className="text-gray-100 hover:text-[#C9A961] font-medium transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Who We Serve</Link>
                <Link onClick={() => setMobileMenuOpen(false)} href="/insights" className="text-gray-100 hover:text-[#C9A961] font-medium transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Insights</Link>
                <Link onClick={() => setMobileMenuOpen(false)} href="/contact" className="text-gray-100 hover:text-[#C9A961] font-medium transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Contact</Link>
              </nav>

              <div className="pt-2 space-y-3">
                <Link onClick={() => setMobileMenuOpen(false)} href="/login" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-[#121417] transition-all duration-300 px-6 py-2 rounded-md font-medium"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Log In
                  </Button>
                </Link>
                <Link onClick={() => setMobileMenuOpen(false)} href="/register" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-[#C9A961] bg-transparent text-[#C9A961] hover:bg-[#C9A961] hover:text-[#121417] transition-all duration-300 px-6 py-2 rounded-md font-medium"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Sign Up
                  </Button>
                </Link>
                <Link onClick={() => setMobileMenuOpen(false)} href="/schedule" className="block">
                  <Button
                    className="w-full bg-gradient-to-r from-[#C9A961] to-[#B8B77A] !text-lg text-white hover:from-[#B8B77A] hover:to-[#A89668] transition-all duration-300 px-6 py-2 rounded-md font-medium shadow-lg hover:shadow-xl"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A961] to-transparent opacity-80" />
      </div>
    </header>
  );
};