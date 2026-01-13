import React from 'react';

export const OurProcessSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description:
        "We begin with a comprehensive review of your financial situation, goals, and values. This includes asset inventory, risk tolerance assessment, and understanding your broader life objectives and family dynamics."
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Based on discovery findings, we design a customized wealth management strategy including investment policy, tax optimization, estate considerations, and risk management recommendations."
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "We execute the agreed-upon strategy with precision—establishing accounts, transitioning assets, coordinating with external advisors, and ensuring all elements are properly integrated."
    },
    {
      step: "04",
      title: "Ongoing Management",
      description:
        "Continuous portfolio monitoring, rebalancing, tax-loss harvesting, and proactive adjustments based on market conditions and your evolving circumstances."
    },
    {
      step: "05",
      title: "Review & Refinement",
      description:
        "Quarterly performance reviews and annual comprehensive planning meetings ensure your strategy remains aligned with your goals as life circumstances and markets evolve."
    }
  ];

  return (
    <section className="bg-[#F5F3F0] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#121417]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Process
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#6B6B6B]" style={{ fontFamily: 'Playfair Display, serif' }}>
            A disciplined approach to building and preserving wealth
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {steps.map((step) => (
            <div key={step.step} className="grid grid-cols-[64px_1fr] gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[#C9A961] flex items-center justify-center text-[#121417] font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                {step.step}
              </div>

              <div style={{ fontFamily: 'Playfair Display, serif' }}>
                <h3 className="text-lg md:text-xl font-semibold text-[#121417]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed text-[#6B6B6B]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
