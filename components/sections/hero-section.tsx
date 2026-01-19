import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#1a1a1a] min-h-[60vh] flex items-center py-20" style={{ fontFamily: 'Playfair Display, serif' }}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.06] text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          Building generational wealth through
          <br />
          disciplined
          <br />
          <span className="text-[#C9A961]">stewardship</span> and{' '}
          <span className="text-[#C9A961]">fiduciary care</span>
        </h1>

        <p className="mt-8 text-sm sm:text-base md:text-lg text-white/75 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
          Serving families, executives, and institutions who value independence, transparency, and
          long-term thinking in their wealth management partnership
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/schedule">
          <Button
            variant="outline"
            className="px-8 py-3 border-2 border-[#C9A961] !bg-transparent hover:!bg-transparent text-white hover:text-[#d7be86] hover:border-[#C9A961] transition-colors duration-300 text-md focus:ring-0 focus:ring-offset-0"
          >
            Schedule a Consultation
          </Button>
          </Link>

          <Link href="/contact">
            <span className="inline-flex items-center gap-2 text-[#C9A961] hover:text-[#d7be86] transition-colors text-md sm:text-base"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Learn Our Approach
            <span aria-hidden>→</span>
          </span>
          </Link>
        </div>
      </div>
      
    </section>
  );
};
