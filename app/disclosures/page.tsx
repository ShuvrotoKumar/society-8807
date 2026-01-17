import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  ShieldCheck,
  FileText,
  BadgeDollarSign,
  AlertTriangle,
  ScrollText,
  ExternalLink,
} from 'lucide-react';

const disclosures = [
  {
    id: 'relationship',
    title: 'Our Relationship & Scope of Services',
    Icon: ShieldCheck,
    body: [
      'Society 8807 Wealth Management provides investment advisory services and financial planning. We work to understand your goals, risk tolerance, and time horizon before making recommendations.',
      'Information on this website is for educational purposes only and should not be considered individualized investment, tax, or legal advice.',
    ],
  },
  {
    id: 'compensation',
    title: 'Fees & Compensation',
    Icon: BadgeDollarSign,
    body: [
      'We strive to be transparent about fees. Your advisory fee schedule and billing details are provided in your advisory agreement and/or disclosure documents.',
      'Fees may vary based on service type, account size, and engagement complexity. Ask us for the most current fee schedule before engaging services.',
    ],
  },
  {
    id: 'risks',
    title: 'Investment Risks',
    Icon: AlertTriangle,
    body: [
      'All investing involves risk, including the possible loss of principal. Past performance is not indicative of future results.',
      'Diversification and asset allocation do not ensure a profit or protect against loss in declining markets.',
    ],
  },
  {
    id: 'regulatory',
    title: 'Regulatory & Registration Information',
    Icon: ScrollText,
    body: [
      'Investment advice is offered through Society 8807 Wealth Management, a registered investment advisor.',
      'Securities offered through LPL Financial, Member FINRA/SIPC. Society 8807 Wealth Management is a separate entity from LPL Financial.',
      'Representatives associated with this website may discuss investment advisory services only with residents of the states in which they are properly registered or licensed.',
    ],
  },
  {
    id: 'tax-legal',
    title: 'Tax & Legal',
    Icon: FileText,
    body: [
      'Neither LPL Financial nor its registered representatives offer tax or legal advice. Please consult qualified tax and legal professionals regarding your specific circumstances.',
      'Any tax-related discussion contained on this website is not intended or written to be used, and cannot be used, for the purpose of avoiding penalties under the Internal Revenue Code or any other applicable tax law.',
    ],
  },
];

export default function DisclosuresPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="bg-gradient-to-b from-[#1A1D21] to-[#121417] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center rounded-full bg-white/5 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A961] ring-1 ring-white/10">
              Legal & Regulatory
            </span>
            <h1 className="mt-6 font-serif text-5xl md:text-6xl font-semibold tracking-wide text-[#C9A961]">
              Disclosures
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-neutral-400">
              Transparency matters. Below you’ll find important information about our services, compensation,
              regulatory status, and key investment risks.
            </p>

            <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white/5 px-6 py-6 text-left ring-1 ring-white/10 sm:px-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <a
                  href="#relationship"
                  className="rounded-xl bg-black/20 px-4 py-4 text-xs font-semibold text-neutral-200 ring-1 ring-white/10 transition-colors hover:bg-black/30"
                >
                  Our Services
                </a>
                <a
                  href="#compensation"
                  className="rounded-xl bg-black/20 px-4 py-4 text-xs font-semibold text-neutral-200 ring-1 ring-white/10 transition-colors hover:bg-black/30"
                >
                  Fees
                </a>
                <a
                  href="#regulatory"
                  className="rounded-xl bg-black/20 px-4 py-4 text-xs font-semibold text-neutral-200 ring-1 ring-white/10 transition-colors hover:bg-black/30"
                >
                  Registration
                </a>
                <a
                  href="#resources"
                  className="rounded-xl bg-black/20 px-4 py-4 text-xs font-semibold text-neutral-200 ring-1 ring-white/10 transition-colors hover:bg-black/30"
                >
                  Resources
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f3f0] py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
              <div className="space-y-8">
                {disclosures.map(({ id, title, Icon, body }) => (
                  <section
                    key={id}
                    id={id}
                    className="scroll-mt-28 rounded-2xl bg-white px-8 py-10 shadow-sm ring-1 ring-black/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#F6F2E8] ring-1 ring-black/5">
                        <Icon className="h-5 w-5 text-[#A47B22]" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-serif text-2xl font-semibold text-neutral-900">{title}</h2>
                        <div className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
                          {body.map((p) => (
                            <p key={p}>{p}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}

                <section
                  id="resources"
                  className="scroll-mt-28 rounded-2xl bg-[#1a1a1a] px-8 py-10 text-white shadow-sm"
                >
                  <h2 className="font-serif text-2xl font-semibold text-white">Helpful Resources</h2>
                  <p className="mt-2 text-sm leading-6 text-neutral-300">
                    These links may help you review additional disclosures and investor education materials.
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <a
                      href="/brokercheck"
                      className="group flex items-center justify-between rounded-xl bg-white/5 px-5 py-4 ring-1 ring-white/10 transition-colors hover:bg-white/10"
                    >
                      <span className="text-sm font-semibold text-[#C9A961]">BrokerCheck</span>
                      <ExternalLink className="h-4 w-4 text-neutral-200 transition-transform group-hover:translate-x-0.5" />
                    </a>
                    <a
                      href="/crs"
                      className="group flex items-center justify-between rounded-xl bg-white/5 px-5 py-4 ring-1 ring-white/10 transition-colors hover:bg-white/10"
                    >
                      <span className="text-sm font-semibold text-[#C9A961]">Form CRS</span>
                      <ExternalLink className="h-4 w-4 text-neutral-200 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </section>
              </div>

              <aside className="h-fit rounded-2xl bg-white px-8 py-10 shadow-sm ring-1 ring-black/5">
                <h3 className="font-serif text-lg font-semibold text-neutral-900">Need a Copy?</h3>
                <p className="mt-2 text-xs leading-6 text-neutral-500">
                  If you’d like current versions of our disclosures, ADV documents, or agreements, contact us and we’ll provide them.
                </p>

                <div className="mt-8 space-y-4 text-sm">
                  <div className="rounded-xl bg-[#F6F2E8] px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A47B22]">Email</p>
                    <p className="mt-1 text-sm font-semibold text-neutral-900">contact@society8807.com</p>
                  </div>
                  <div className="rounded-xl bg-[#F6F2E8] px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A47B22]">Phone</p>
                    <p className="mt-1 text-sm font-semibold text-neutral-900">(555) 123-4567</p>
                  </div>
                </div>

                <div className="mt-8 border-t border-black/10 pt-6">
                  <p className="text-xs leading-6 text-neutral-500">
                    Looking for additional policies?
                  </p>
                  <div className="mt-3 space-y-2 text-sm">
                    <Link href="/privacy" className="inline-flex items-center gap-2 font-semibold text-[#A47B22] hover:text-[#8D6A1D]">
                      Privacy Policy
                      <span aria-hidden="true">→</span>
                    </Link>
                    <div />
                    <Link href="/terms" className="inline-flex items-center gap-2 font-semibold text-[#A47B22] hover:text-[#8D6A1D]">
                      Terms of Use
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}