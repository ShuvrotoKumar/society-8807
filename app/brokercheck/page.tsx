import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ExternalLink, BadgeCheck, GraduationCap, Briefcase, Scale, Check } from 'lucide-react';

const cards = [
  {
    title: 'Registration Status',
    description:
      'Verify that our firm and advisors are properly registered and licensed.',
    Icon: BadgeCheck,
  },
  {
    title: 'Qualifications',
    description:
      'Review professional designations, certifications, and education details.',
    Icon: GraduationCap,
  },
  {
    title: 'Employment History',
    description:
      'Access detailed employment records and career progression information.',
    Icon: Briefcase,
  },
  {
    title: 'Regulatory History',
    description:
      'View any regulatory actions, customer disputes, or disciplinary events.',
    Icon: Scale,
  },
];

export default function BrokerCheckPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="bg-[#121417] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-semibold tracking-wide text-[#D4AF37]">
              Check Our Firm's Professional Credentials
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-neutral-400">
              Use FINRA's BrokerCheck tool to verify our registration status, qualifications, and regulatory history.
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href="https://brokercheck.finra.org/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center gap-3 rounded-md bg-[#D4AF37] px-6 text-[12px] font-semibold text-black transition-colors hover:bg-[#B99225]"
              >
                Go to BrokerCheck
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm bg-black/10">
                  <ExternalLink className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#F3F0E7] py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center bg-[#D4AF37]">
                <BadgeCheck className="h-5 w-5 text-black" />
              </div>
              <div className="min-w-0">
                <h2 className="font-serif text-3xl font-semibold text-neutral-900">What is BrokerCheck?</h2>
                <p className="mt-2 max-w-3xl text-xs leading-6 text-neutral-600">
                  BrokerCheck is a free tool provided by FINRA (Financial Industry Regulatory Authority) that helps you verify the professional background of brokerage firms and individual brokers.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {cards.map(({ title, description, Icon }) => (
                <div key={title} className="bg-white px-8 py-8 shadow-sm ring-1 ring-black/5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center bg-[#F6F2E8] ring-1 ring-black/5">
                      <Icon className="h-5 w-5 text-[#A47B22]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-serif text-base font-semibold text-neutral-900">{title}</h3>
                      <p className="mt-2 text-xs leading-6 text-neutral-600">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 overflow-hidden bg-[#111315] shadow-sm">
              <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-[1fr_200px]">
                <div className="px-8 py-10 text-white">
                  <h3 className="font-serif text-xl font-semibold">Why Verify Credentials?</h3>
                  <p className="mt-3 max-w-2xl text-xs leading-6 text-neutral-300">
                    Transparency and trust are the foundations of our relationship with clients. We encourage every investor to do their due diligence and understand who they're working with.
                  </p>

                  <div className="mt-8">
                    <a
                      href="https://brokercheck.finra.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:text-[#E7C55A]"
                    >
                      Visit FINRA's BrokerCheck
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-center bg-[#15181C] px-8 py-10">
                  <div className="flex h-16 w-16 items-center justify-center bg-[#0F1114] ring-1 ring-white/10">
                    <Check className="h-8 w-8 text-[#D4AF37]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}