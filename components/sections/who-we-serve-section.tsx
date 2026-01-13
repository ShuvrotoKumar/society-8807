import React from 'react';

export const WhoWeServeSection: React.FC = () => {
  const clients = [
    {
      title: "High-Net-Worth\nFamilies",
      description: "Multi-generational planning\nwith estate coordination, tax\nefficiency, and legacy\nstructuring"
    },
    {
      title: "Corporate\nExecutives",
      description: "Equity compensation strategy,\nretirement transition planning,\nand concentrated stock\nmanagement"
    },
    {
      title: "Business\nOwners",
      description: "Exit planning, succession\nstrategy, and personal\nwealth separation from\nbusiness operations"
    },
    {
      title: "Endowments &\nFoundations",
      description: "Mission-aligned investment\npolicy, spending strategy,\nand governance support for\ninstitutional clients"
    }
  ];

  return (
    <section className="bg-[#F5F3F0] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#121417]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Who We Serve
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#6B6B6B]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Tailored wealth management for those who value independence and long-term thinking
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-[#2A2A2A] p-8 transition-transform duration-300 ease-out hover:scale-[1.05]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <h3 className="text-[#C9A961] text-lg font-medium leading-snug whitespace-pre-line">
                {client.title}
              </h3>
              <div className="mt-4 h-px w-14 bg-[#C9A961]/70" />
              <p className="mt-5 text-sm leading-relaxed text-[#CFCFCF] whitespace-pre-line">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
