import React from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Calculator,
  CalendarCheck,
  Check,
  Handshake,
  Layers,
  LineChart,        
  MessageCircle,    
  Shield,
  X,
} from "lucide-react";

const services = [
  {
    title: "Comprehensive Financial Planning",
    description:
      "Professionals and families seeking clarity on their financial future, whether planning for retirement, major purchases, or life transitions.",
    Icon: LineChart,
    includes: [
      "Cash flow analysis and budgeting",
      "Retirement planning and projections",
      "Education funding strategies",
      "Insurance needs analysis",   
      "Goal-based financial roadmaps",
    ],
  },
  {
    title: "Investment Management",
    description:
      "Individuals with investable assets seeking professional portfolio management aligned with their risk tolerance and time horizon.",
    Icon: Layers,
    includes: [
      "Portfolio construction and rebalancing",
      "Tax-aware investment decisions",
      "Ongoing risk management",
      "Performance reporting and reviews",
      "Coordination with your broader plan",
    ],
  },
  {
    title: "Tax Optimization",
    description:
      "High-earning professionals and business owners looking to minimize tax burden while maximizing after-tax wealth.",
    Icon: Calculator,
    includes: [
      "Tax-efficient investment strategy",
      "Retirement account planning",
      "Charitable giving strategies",
      "Capital gains planning",
      "Coordination with your CPA",
    ],
  },
  {
    title: "Estate Planning Coordination",
    description:
      "Families wanting to ensure their wealth transfers efficiently to the next generation while minimizing taxes and complications.",
    Icon: Shield,
    includes: [
      "Beneficiary and titling review",
      "Trust and estate coordination",
      "Legacy and gifting strategies",
      "Liquidity planning",
      "Collaboration with your attorney",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-b from-[#1A1D21] to-[#121417] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-semibold tracking-wide text-[#D4AF37]">
              Our Services
            </h1>
            <div className="mx-auto mt-3 h-px w-16 bg-[#D4AF37]/80" />

            <p className="mx-auto mt-8 max-w-3xl text-xs leading-6 text-neutral-400 sm:text-sm md:text-base">
              We offer comprehensive wealth management designed to align your financial
              decisions with your life&apos;s purpose and values.
            </p>
            <p className="mx-auto mt-6 max-w-4xl text-xs leading-6 text-neutral-500 sm:text-sm md:text-base">
              Our holistic approach integrates investment strategy, financial planning, tax
              optimization, and estate coordination—all within an ongoing advisory
              relationship built on trust, transparency, and your unique goals.
            </p>
          </div>
        </section>

        <section className="bg-[#F6F2E8] py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {services.map(({ title, description, includes, Icon }) => (
                <article
                  key={title}
                  className="rounded-2xl bg-white px-6 py-8 shadow-sm ring-1 ring-black/5 md:px-10"
                >
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-[64px_1fr]">
                    <div className="flex justify-center md:justify-start">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2A2A2A]">
                        <Icon className="h-5 w-5 text-[#D4AF37]" />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-lg font-semibold text-neutral-900 md:text-xl">
                        {title}
                      </h2>

                      <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div>
                          <p className="text-xs font-semibold text-neutral-600">Who It’s For</p>
                          <p className="mt-2 text-sm leading-6 text-neutral-500">{description}</p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-neutral-600">What It Includes</p>
                          <ul className="mt-2 list-disc space-y-2 pl-4 text-sm leading-6 text-neutral-500">
                            {includes.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#2C2C2C] py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-medium text-white md:text-2xl">Our Engagement Model</h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#3A3A3A]">
                  <Handshake className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-neutral-100">Ongoing Partnership</h3>
                <p className="mx-auto mt-3 max-w-xs text-xs leading-6 text-neutral-300">
                  We work with you continuously, not just at a single point in time. Your financial plan
                  evolves as your life does.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#3A3A3A]">
                  <CalendarCheck className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-neutral-100">Regular Reviews</h3>
                <p className="mx-auto mt-3 max-w-xs text-xs leading-6 text-neutral-300">
                  Quarterly or semi-annual meetings to review progress, adjust strategies, and address
                  new opportunities or concerns.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#3A3A3A]">
                  <MessageCircle className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-neutral-100">Always Accessible</h3>
                <p className="mx-auto mt-3 max-w-xs text-xs leading-6 text-neutral-300">
                  Between scheduled meetings, we’re available for questions, guidance, and support
                  whenever you need it.
                </p>
              </div>
            </div>

            <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-6 text-neutral-300">
              This isn’t a transactional relationship. We’re committed to being your trusted advisor
              through every stage of your financial journey—offering proactive guidance, thoughtful
              planning, and the peace of mind that comes from knowing someone is always looking out
              for your best interests.
            </p>
          </div>
        </section>

        <section className="bg-[#F6F2E8] py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <article className="rounded-2xl bg-[#2A2A2A] px-8 py-10 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]">
                  <Check className="h-5 w-5 text-black" />
                </div>
                <h3 className="mt-6 text-sm font-semibold text-white">This Is For You If</h3>

                <ul className="mt-6 space-y-4 text-left text-xs leading-6 text-neutral-200">
                  <li className="flex gap-3">
                    <Check className="mt-2 h-4 w-4 shrink-0 rounded-full bg-[#D4AF37]" />
                    <span>You have $1M+ in investable assets</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-2 h-4 w-4 shrink-0 rounded-full bg-[#D4AF37]" />
                    <span>You value long-term relationships over quick fixes</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-2 h-4 w-4 shrink-0 rounded-full bg-[#D4AF37]" />
                    <span>You want comprehensive planning, not just investment management</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-2 h-4 w-4 shrink-0 rounded-full bg-[#D4AF37]" />
                    <span>You’re comfortable with fee-based advisory services</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-2 h-4 w-4 shrink-0 rounded-full bg-[#D4AF37]" />
                    <span>You’re looking for proactive guidance and education</span>
                  </li>
                </ul>
              </article>

              <article className="rounded-2xl bg-white px-8 py-10 text-center shadow-sm ring-1 ring-black/5">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]">
                  <X className="h-5 w-5 text-black" />
                </div>
                <h3 className="mt-6 text-sm font-semibold text-neutral-900">This Isn’t For You If</h3>

                <ul className="mt-6 space-y-4 text-left text-xs leading-6 text-neutral-600">
                  <li className="flex gap-3">
                    <X className="mt-2 h-4 w-4 shrink-0 rounded-full bg-[#D4AF37]" />
                    <span>You’re looking for day trading or speculation strategies</span>
                  </li>
                  <li className="flex gap-3">
                    <X className="mt-2 h-4 w-4 shrink-0 rounded-full bg-[#D4AF37]" />
                    <span>You prefer to manage investments entirely on your own</span>
                  </li>
                  <li className="flex gap-3">
                    <X className="mt-2 h-4 w-4 shrink-0 rounded-full bg-[#D4AF37]" />
                    <span>You want guaranteed returns or “get rich quick” schemes</span>
                  </li>
                  <li className="flex gap-3">
                    <X className="mt-2 h-4 w-4 shrink-0 rounded-full bg-[#D4AF37]" />
                    <span>You’re not comfortable with ongoing advisory fees</span>
                  </li>
                  <li className="flex gap-3">
                    <X className="mt-2 h-4 w-4 shrink-0 rounded-full bg-[#D4AF37]" />
                    <span>You need immediate liquidity for most of your assets</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1A1A1A] py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="mx-auto max-w-3xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[44px]">
                Ready to begin your wealth management journey?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-neutral-400 sm:text-[15px]">
                Schedule a confidential consultation to discuss your financial goals and explore how we
                <br />
                can serve you
              </p>

              <div className="mt-10 flex justify-center">
                <Link href="/contact">
                  <Button className="h-12 w-[260px] rounded-[10px] !bg-[#D4AF37] text-[13px] font-medium !text-black hover:!bg-[#B99225] focus:!ring-[#D4AF37]">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}