import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export const MeetAdvisorSection: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#121417]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Meet Your Advisor
          </h2>
        </div>

        <div className="mt-12 bg-[#F1F0EE] rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-10 p-8 md:p-12 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="bg-white rounded-md p-4 shadow-sm">
                <Image
                  src="/images/advisor.jpg"
                  alt="Advisor"
                  width={100}
                  height={100}
                  className="w-60 h-60 object-cover rounded"
                />
              </div>
            </div>

            <div style={{ fontFamily: 'Playfair Display, serif' }}>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#121417]">
                Terance Takyi
              </h3>
              <p className="mt-1 text-sm text-[#C9A961]">
                Founder &amp; Managing Director
              </p>

              <p className="mt-5 text-sm md:text-base leading-relaxed text-[#6B6B6B] max-w-2xl">
                Terance Takyi is a Senior Independent Wealth Manager at Wealth Navigators, where he advises high-net-worth families, individuals, and foundations on comprehensive, long-term wealth strategies. He brings nearly two decades of experience delivering tailored financial solutions with a focus on trust and estate planning, philanthropic giving, tax-efficient lending, and holistic asset management.

                Prior to Wealth Navigators, Terance served as a Managing Director and Private Wealth Advisor at UBS Financial Services Inc., and before that as a Managing Director with First Republic Investment Management, where he specialized in advising ultra-high-net-worth clients. Earlier in his career, Terance held senior roles at JPMorgan as a Vice President managing personal assets for private clients, and at Goldman Sachs as a Private Client Advisor.

                Terance’s leadership and professional impact have earned notable recognition, including being named a Black Enterprise 40 Under 40 honoree in 2023. Beyond his professional work, he is deeply committed to community service and global equity. He actively serves as a Board Member for Amref Health Africa, supporting initiatives to expand healthcare access across Africa, and is the co-lead of the MKA Primary School Mosaic Affinity Group, where he helps foster diversity and inclusion within the school community.

                Terance holds a Bachelor’s degree in Economics from the University of North Carolina at Greensboro and an MBA from the UNC Kenan-Flagler Business School. He is also a graduate of the Executive IQ Program through the Money Management Institute.
              </p>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="border-[#121417] border-2 !bg-transparent hover:!bg-transparent text-[#121417] px-8 py-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Learn More About Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
