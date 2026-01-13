import React from 'react';

export const OurServicesSection: React.FC = () => {
  const services = [
    {
      title: "Investment Management",
      description:
        "Evidence-based portfolio construction with tax-aware rebalancing, risk management, and transparent fee structures aligned to your long-term objectives"
    },
    {
      title: "Financial Planning",
      description:
        "Holistic planning encompassing retirement, education funding, insurance analysis, and cash flow modeling to support life transitions"
    },
    {
      title: "Estate & Legacy Planning",
      description:
        "Coordinated estate design with legal and tax advisors to preserve wealth across generations and align with philanthropic intentions"
    },
    {
      title: "Tax Strategy",
      description:
        "Proactive tax planning including loss harvesting, Roth conversions, charitable giving strategies, and income timing optimization"
    },
    {
      title: "Retirement Planning",
      description:
        "Withdrawal strategy, Social Security optimization, healthcare planning, and sustainable spending frameworks for retirement confidence"
    },
    {
      title: "Executive Compensation",
      description:
        "Stock option exercise planning, restricted stock management, deferred compensation analysis, and equity diversification strategies"
    }
  ];

  return (
    <section className="bg-[#1A1A1A] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Services
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/60" style={{ fontFamily: 'Playfair Display, serif' }}>
            Comprehensive wealth management built on fiduciary principles
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {services.map((service, index) => (
            <div key={index} className="flex gap-6 transition-transform duration-300 ease-out hover:scale-[1.05]">
              <div className="w-px bg-[#C9A961]/80" />
              <div style={{ fontFamily: 'Playfair Display, serif' }}>
                <h3 className="text-white font-semibold text-base md:text-lg leading-snug">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
