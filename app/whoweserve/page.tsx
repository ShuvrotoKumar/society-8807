import React from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function WhoWeServePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>

        <section className="bg-gradient-to-b from-[#1A1D21] to-[#121417] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide text-[#D4AF37]">
              Who We Serve
            </h1>
            <div className="mx-auto mt-3 h-px w-16 bg-[#D4AF37]/80" />

            <p className="mx-auto mt-8 max-w-3xl text-sm leading-6 text-neutral-400 md:text-base">
              We partner with clients navigating complex financial decisions—professionals,
              families, and business owners—who value independent guidance and a long-term
              approach.
            </p>
          </div>
        </section>

        {/* Divider */}
        <section className="bg-[#2C2C2C]">
          <div className="pt-0 pb-16">
            <div className="max-w-6xl mx-auto px-6">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A961] to-transparent opacity-80" />
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 py-14">
            <h2 className="font-serif text-3xl font-medium text-[#C9A961]">Enterprise Organizations</h2>
            <div className="mt-5 h-px w-16 bg-[#C9A961]/70" />

            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-x-32">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A961]">Challenges</p>
                <ul className="mt-5 space-y-4 text-base leading-6 text-neutral-200">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Navigating digital transformation while maintaining operational continuity across global operations
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Aligning diverse stakeholder interests and managing organizational change at scale
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Optimizing complex supply chains and legacy systems while innovating for future growth
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Balancing regulatory compliance with competitive agility in rapidly evolving markets
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A961]">Planning Considerations</p>
                <ul className="mt-5 space-y-4 text-base leading-6 text-neutral-200">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Multi-year transformation roadmaps with phased implementation strategies
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Executive alignment workshops and board-level strategic planning sessions
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Integration of sustainability and ESG frameworks into core business strategy
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Comprehensive risk assessment and scenario planning for market volatility
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A961]">Relevant Services</p>
                <ul className="mt-5 space-y-4 text-base leading-6 text-neutral-200">
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>Digital Transformation Strategy</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>Organizational Restructuring</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>M&amp;A Strategy &amp; Integration</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>Global Market Expansion</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>Performance Optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-[#C9A961]/25" />

          <div className="mx-auto max-w-6xl px-6 py-14">
            <h2 className="font-serif text-3xl font-medium text-[#C9A961]">Growth-Stage Companies</h2>
            <div className="mt-5 h-px w-16 bg-[#C9A961]/70" />

            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-x-32">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A961]">Challenges</p>
                <ul className="mt-5 space-y-4 text-base leading-6 text-neutral-200">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Navigating digital transformation while maintaining operational continuity across global operations
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Aligning diverse stakeholder interests and managing organizational change at scale
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Optimizing complex supply chains and legacy systems while innovating for future growth
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Balancing regulatory compliance with competitive agility in rapidly evolving markets
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A961]">Planning Considerations</p>
                <ul className="mt-5 space-y-4 text-base leading-6 text-neutral-200">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Multi-year transformation roadmaps with phased implementation strategies
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Executive alignment workshops and board-level strategic planning sessions
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Integration of sustainability and ESG frameworks into core business strategy
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Comprehensive risk assessment and scenario planning for market volatility
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A961]">Relevant Services</p>
                <ul className="mt-5 space-y-4 text-base leading-6 text-neutral-200">
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>Digital Transformation Strategy</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>Organizational Restructuring</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>M&amp;A Strategy &amp; Integration</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>Global Market Expansion</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>Performance Optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-[#C9A961]/25" />

          <div className="mx-auto max-w-6xl px-6 py-14">
            <h2 className="font-serif text-3xl font-medium text-[#C9A961]">Nonprofit &amp; Social Impact</h2>
            <div className="mt-5 h-px w-16 bg-[#C9A961]/70" />

            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-x-32">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A961]">Challenges</p>
                <ul className="mt-5 space-y-4 text-base leading-6 text-neutral-200">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Aligning mission priorities with sustainable funding and long-term financial resilience
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Managing governance expectations while communicating impact to donors and stakeholders
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Balancing program expansion with operational capacity and risk controls
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Maintaining transparency and compliance across grants, reporting, and regulatory needs
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A961]">Planning Considerations</p>
                <ul className="mt-5 space-y-4 text-base leading-6 text-neutral-200">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Multi-year funding models and scenario planning for donor and grant volatility
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Board alignment sessions and governance operating model refinement
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Impact measurement frameworks with clear KPIs and reporting cadence
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Risk management policies for operations, reputation, and compliance
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A961]">Relevant Services</p>
                <ul className="mt-5 space-y-4 text-base leading-6 text-neutral-200">
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>Digital Transformation Strategy</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>Organizational Restructuring</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>M&amp;A Strategy &amp; Integration</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>Global Market Expansion</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>Performance Optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-[#C9A961]/25" />

          <div className="mx-auto max-w-6xl px-6 py-14">
            <h2 className="font-serif text-3xl font-medium text-[#C9A961]">Family Offices &amp; Private Equity</h2>
            <div className="mt-5 h-px w-16 bg-[#C9A961]/70" />

            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-x-32">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A961]">Challenges</p>
                <ul className="mt-5 space-y-4 text-base leading-6 text-neutral-200">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Coordinating multi-entity structures while maintaining strong governance and oversight
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Managing liquidity planning across investments, distributions, and capital calls
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Integrating reporting across public/private assets with consistent performance measurement
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Balancing risk controls with long-term growth objectives and family priorities
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A961]">Planning Considerations</p>
                <ul className="mt-5 space-y-4 text-base leading-6 text-neutral-200">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Governance model design (committees, investment policy statements, decision rights)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Multi-year liquidity and cash flow forecasting for complex portfolios
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Operating model optimization for reporting, controls, and vendor management
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961]" />
                    <span>
                      Scenario planning for market drawdowns and private market valuation shifts
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A961]">Relevant Services</p>
                <ul className="mt-5 space-y-4 text-base leading-6 text-neutral-200">
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>Digital Transformation Strategy</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>Organizational Restructuring</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>M&amp;A Strategy &amp; Integration</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>Global Market Expansion</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 text-[#C9A961]">→</span>
                    <span>Performance Optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*cta section*/}
        
      </main>
      <Footer />
    </div>
  );
}