import React from 'react';
import Link from 'next/link';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { CtaSection } from '@/components/sections/cta-section';
import { advisors } from '@/lib/advisors';
import {
  BadgeDollarSign,
  FileText,
  GraduationCap,
  Laptop,
  MessageCircle,
  Shield,
  ShieldCheck,
  Users,
  Mail,
  Phone,
} from 'lucide-react';

const clientExperience = [
  {
    title: 'Fiduciary Commitment',
    description:
      'We are legally and ethically bound to act in your best interest at all times. No conflicts, no hidden agendas.',
    Icon: ShieldCheck,
  },
  {
    title: 'Proactive Communication',
    description:
      'Regular reviews, timely updates on market conditions, and immediate outreach when life changes require plan adjustments.',
    Icon: MessageCircle,
  },
  {
    title: 'Transparent Pricing',
    description:
      'Clear, upfront fee structure with no hidden costs. You’ll always know exactly what you’re paying and why.',
    Icon: BadgeDollarSign,
  },
  {
    title: 'Comprehensive Planning',
    description:
      'Holistic approach covering investments, taxes, insurance, estate planning, and retirement—all coordinated seamlessly.',
    Icon: FileText,
  },
  {
    title: 'Technology-Enabled Access',
    description:
      '24/7 access to your financial dashboard, documents, and performance reports through our secure client portal.',
    Icon: Laptop,
  },
  {
    title: 'Financial Education',
    description:
      'We believe informed clients make better decisions. Expect clear explanations, educational resources, and answers to all your questions.',
    Icon: GraduationCap,
  },
  {
    title: 'Family-Focused Approach',
    description:
      'We work with your entire family to ensure coordinated planning across generations and smooth wealth transitions.',
    Icon: Users,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Philosophy Section */}
        <section className="bg-[#121417] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-[#2A2A2A] text-[#C9A961] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Our Philosophy</span>
            <h2>
              <span className="font-serif text-5xl md:text-6xl font-bold text-[#C9A961] mt-6 leading-tight">
                Built on Trust,
              </span>
              <br />
              <span className="font-serif text-5xl md:text-6xl font-bold text-white mt-6 leading-tight">
                Driven by Your Goals
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg text-neutral-300 leading-relaxed">
              As a fiduciary-first advisory firm, we put your interests above all else. Our planning-first approach ensures every recommendation aligns with your life goals, not product quotas or sales targets.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <div className="flex items-center space-x-3 text-neutral-200">
                <Shield className="h-6 w-6 text-[#C9A961]" />
                <span>Fiduciary Standard</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-200">
                <Users className="h-6 w-6 text-[#C9A961]" />
                <span>Client-First Always</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-200">
                <FileText className="h-6 w-6 text-[#C9A961]" />
                <span>Independent Advice</span>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="bg-neutral-100 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-neutral-800 text-[#C9A961] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Our Journey</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-neutral-800 mt-6 leading-tight">
              A Legacy of Trusted Guidance
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg text-neutral-600 leading-relaxed">
              From a single advisor's vision to a comprehensive wealth management firm serving families across generations
            </p>

            <div className="relative mt-8">
              {/* Vertical line */}
              {/* <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-300"></div> */}

              {/* Timeline items */}
              <div className="relative space-y-6">
                {/* 2005 */}
                <div className="relative flex justify-center md:justify-start">
                  <div className="absolute left-1/2 top-6 w-4 h-4 bg-[#C9A961] rounded-full z-10"></div>
                  <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full md:w-auto md:ml-4">
                    <p className="text-[#C9A961] text-sm font-serif font-semibold text-right">2005</p>
                    <h3 className="font-serif text-2xl font-bold text-neutral-800 mt-2 text-right">Founded on Principle</h3>
                    <p className="text-neutral-600 mt-4 text-right">
                      Started with a commitment to fee-only, fiduciary advice when commission-based models dominated the industry.
                    </p>
                  </div>
                </div>

                {/* 2012 */}
                <div className="relative flex justify-center md:justify-end">
                  <div className="absolute left-1/2 top-6 w-4 h-4 bg-[#C9A961] rounded-full z-10"></div>
                  <div className="bg-white rounded-lg shadow-lg p-12 max-w-md w-full md:w-auto md:mr-4 text-left">
                    <p className="text-[#C9A961] text-sm font-semibold">2012</p>
                    <h3 className="font-serif text-2xl font-bold text-neutral-800 mt-2">Expanded Our Team</h3>
                    <p className="text-neutral-600 mt-4">
                      Welcomed senior advisors and support staff to serve growing client base with broader expertise.
                    </p>
                  </div>
                </div>

                {/* 2018 */}
                <div className="relative flex justify-center md:justify-start">
                  <div className="absolute left-1/2 top-6 w-4 h-4 bg-[#C9A961] rounded-full z-10"></div>
                  <div className="bg-white rounded-lg shadow-lg p-12 max-w-md w-full md:w-auto md:ml-8 text-right">
                    <p className="text-[#C9A961] text-sm font-semibold">2018</p>
                    <h3 className="font-serif text-2xl font-bold text-neutral-800 mt-2">Introduced Technology</h3>
                    <p className="text-neutral-600 mt-4">
                      Implemented digital planning tools and client portal for enhanced service delivery.
                    </p>
                  </div>
                </div>

                {/* 2024 */}
                <div className="relative flex justify-center md:justify-end">
                  <div className="absolute left-1/2 top-6 w-4 h-4 bg-[#C9A961] rounded-full z-10"></div>
                  <div className="bg-white rounded-lg shadow-lg p-12 max-w-md w-full md:w-auto md:mr-8 text-left">
                    <p className="text-[#C9A961] text-sm font-semibold">2024</p>
                    <h3 className="font-serif text-2xl font-bold text-neutral-800 mt-2">Next Generation Leadership</h3>
                    <p className="text-neutral-600 mt-4">
                      Transitioned leadership to next generation while maintaining founding values of client-first service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Planning Section */}
        <section className="bg-[#2A2A2A] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-[#C9A961] text-black text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Our Approach</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mt-6 leading-tight">
              Planning First, Products Second
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg text-neutral-300 leading-relaxed">
              We believe comprehensive financial planning should drive investment decisions, not the other way around
            </p>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Card 1 */}
              <div className="bg-[#3A3A3A] p-8 rounded-lg shadow-lg text-left transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 bg-[#C9A961] rounded-full mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.12 2-2.5 2S4 20.105 4 19s1.12-2 2.5-2S9 17.895 9 19zm0 0h12m-9 0a2.5 2.5 0 00-2.5-2H4m-2 0h2.5M12 3v13m0 0h2.5m-2.5 0a2.5 2.5 0 00-2.5-2H9m-2 0h2.5"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mt-2">Comprehensive Discovery</h3>
                <p className="text-neutral-300 mt-4">
                  We start by understanding your complete financial picture, life goals, values, and concerns before making any recommendations.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#3A3A3A] p-8 rounded-lg shadow-lg text-left transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 bg-[#C9A961] rounded-full mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.4 15.2c-1.1 1.2-2.8 1.2-4 0L4 6.8c-1.1-1.2-1.1-2.8 0-4l2.8-2.8c1.1-1.1 2.8-1.1 4 0l8.4 8.4c1.1 1.1 1.1 2.8 0 4l-2.8 2.8z"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mt-2">Customized Strategy</h3>
                <p className="text-neutral-300 mt-4">
                  Every plan is tailored to your unique circumstances, timeline, and risk tolerance—no cookie-cutter solutions.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#3A3A3A] p-8 rounded-lg shadow-lg text-left transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 bg-[#C9A961] rounded-full mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mt-2">Product Agnostic</h3>
                <p className="text-neutral-300 mt-4">
                  We evaluate solutions across the entire market, selecting only what truly serves your best interests.
                </p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-20 max-w-4xl mx-auto">
              <div className="bg-[#3A3A3A] p-10 rounded-lg shadow-lg text-center">
                <svg className="w-8 h-8 text-[#C9A961] mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-white text-lg italic leading-relaxed">
                  “The independence is what sets them apart. I never have to wonder if their recommendations are influenced by commissions or quotas.”
                </p>
                <p className="text-[#C9A961] font-semibold mt-6">— Michael Richardson</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="bg-[#F6F2E8] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border border-neutral-300 bg-white/60 px-4 py-1 text-[11px] text-[#C9A961] font-semibold uppercase tracking-[0.2em]">
                Meet Our Team
              </span>
              <h2 className="mt-6 font-serif text-4xl font-semibold text-neutral-900 md:text-5xl">
                Experienced Advisors You Can Trust
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-600 md:text-base">
                Our team combines decades of experience with ongoing education to provide you with
                the highest level of financial guidance.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
              {advisors.map((advisor, idx) => (
                <article key={`${advisor.name}-${idx}`} className="bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:scale-105">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                    <img
                      src={advisor.imageUrl}
                      alt={advisor.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-6 pb-7 pt-6">
                    <h3 className="font-serif text-lg font-semibold text-neutral-900">{advisor.name}</h3>
                    <p className="mt-1 text-xs text-neutral-500">{advisor.role}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {advisor.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-sm bg-[#F6F2E8] px-2 py-1 text-[10px] font-semibold text-[#A47B22] ring-1 ring-[#A47B22]/20"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                  

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="h-4 w-4 text-[#A47B22]" />
                        <a 
                          href={`mailto:${advisor.email}`}
                          className="text-neutral-600 hover:text-[#A47B22] transition-colors break-all"
                        >
                          {advisor.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="h-4 w-4 text-[#A47B22]" />
                        <a 
                          href={`tel:${advisor.phone}`}
                          className="text-neutral-600 hover:text-[#A47B22] transition-colors"
                        >
                          {advisor.phone}
                        </a>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-neutral-600">{advisor.bio}</p>
                    {/* <Link
                      href={`/about/advisors/${advisor.id}`}
                      className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#A47B22] hover:text-[#8D6A1D]"
                    >
                      View Full Bio
                      <span aria-hidden="true">→</span>
                    </Link> */}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/*Client Experience*/}
        <section className="bg-[#2c2c2c] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-flex items-center rounded-full bg-[#2A2A2A] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A961] ring-1 ring-white/10">
                Client Experience
              </span>
              <h2 className="mt-6 font-serif text-4xl font-semibold text-white md:text-5xl">What You Can Expect</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-300 md:text-base">
                Working with us means a partnership built on transparency, communication, and results.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {clientExperience.map(({ title, description, Icon }) => (
                <div key={title} className="bg-[#2A2A2A] px-6 py-6 shadow-sm ring-1 ring-white/5  transition-all duration-300 transform hover:scale-105">
                  <div className="flex gap-4">
                    <div className="relative shrink-0">
                      <div className="absolute left-0 top-0 h-full w-1 bg-[#C9A961]" />
                      <div className="pl-5">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1D21] text-[#C9A961] ring-1 ring-white/10">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-serif text-base font-semibold text-white md:text-lg">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-neutral-300">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/*CTA Section*/}
        <CtaSection/>
       </main>

      <Footer />
    </div>
  );
}