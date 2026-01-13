 import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-[#1A1A1A] to-[#222222]">
        {/* Divider */}
        <div className="pt-0 pb-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A961] to-transparent opacity-80" />
          </div>
        </div>

        {/* About Section */}
        <div className="px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
              Society 8807 operates as an independent, fee-only registered investment advisor. We are
              bound by fiduciary duty to act solely in your best interest—never accepting commissions,
              third-party payments, or proprietary product incentives. Our approach is rooted in evidence-based investing, comprehensive planning, and transparent communication designed for the long term.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};