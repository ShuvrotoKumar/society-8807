 import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <>
      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-neutral-700"></div>
      </div>

      {/* About Section */}
      <section className="bg-[#222222] px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
            Society 8807 operates as an independent, fee-only registered investment advisor. We are
            bound by fiduciary duty to act solely in your best interest—never accepting commissions,
            third-party payments, or proprietary product incentives. Our approach is rooted in evidence-based investing, comprehensive planning, and transparent communication designed for the long term.
          </p>
        </div>
      </section>
    </>
  );
};