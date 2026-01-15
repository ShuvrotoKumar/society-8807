import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ExternalLink, Download, FileText, ShieldCheck } from 'lucide-react';

export default function CrsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="bg-[#121417] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-semibold tracking-wide text-[#D4AF37]">
              Client Relationship Summary (Form CRS)
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-neutral-400">
              This document provides important details about our services, fees, and relationships. Please review it carefully.
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="inline-flex h-10 items-center gap-3 rounded-md bg-[#D4AF37] px-6 text-[12px] font-semibold text-black transition-colors hover:bg-[#B99225]"
              >
                Download Form CRS
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm bg-black/10">
                  <Download className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#F3F0E7] py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
              <div className="px-8 py-10">
                <h2 className="font-serif text-2xl font-semibold text-neutral-900">Understanding Form CRS</h2>
                <p className="mt-2 text-xs leading-6 text-neutral-600">
                  The Form CRS provides essential information about our firm&apos;s services, fees, and conflicts of interest. Please read carefully.
                </p>
                <p className="mt-4 text-xs leading-6 text-neutral-600">
                  This standardized form is designed to help you make informed decisions about whether to engage our services as a client.
                </p>

                <ul className="mt-6 space-y-3 text-xs leading-6 text-neutral-700">
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-2 w-2 flex-none rounded-full bg-[#D4AF37]" />
                    <span>The types of services we offer</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-2 w-2 flex-none rounded-full bg-[#D4AF37]" />
                    <span>Our fees, costs, and how we are compensated</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-2 w-2 flex-none rounded-full bg-[#D4AF37]" />
                    <span>Any conflicts of interest that may affect our recommendations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-2 w-2 flex-none rounded-full bg-[#D4AF37]" />
                    <span>Our disciplinary history and regulatory oversight</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-2 w-2 flex-none rounded-full bg-[#D4AF37]" />
                    <span>How to find additional information about our firm</span>
                  </li>
                </ul>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="#"
                    className="inline-flex h-10 items-center gap-2 rounded-md bg-[#D4AF37] px-5 text-[12px] font-semibold text-black transition-colors hover:bg-[#B99225]"
                  >
                    <Download className="h-4 w-4" />
                    Download Full Form CRS
                  </a>
                  <a
                    href="#document"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-black/20 bg-white px-5 text-[12px] font-semibold text-neutral-900 transition-colors hover:bg-black/5"
                  >
                    View Online
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <h3 className="font-serif text-xl font-semibold text-neutral-900">Form CRS Document</h3>
            </div>

            <div id="document" className="mt-6 overflow-hidden rounded-2xl bg-[#F7F7F7] shadow-sm ring-1 ring-black/5">
              <div className="px-8 py-12 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1a1a]">
                  <FileText className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <h4 className="mt-6 font-serif text-lg font-semibold text-neutral-900">PDF Document Viewer</h4>
                <p className="mx-auto mt-3 max-w-md text-xs leading-6 text-neutral-600">
                  A button below to view the complete Form CRS document in your browser.
                </p>

                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#111111] px-6 text-[12px] font-semibold text-white transition-colors hover:bg-black"
                  >
                    Load PDF Document
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#121417] py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
              <ShieldCheck className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-semibold text-white">Regulatory Compliance</h3>
            <p className="mx-auto mt-3 max-w-3xl text-xs leading-6 text-neutral-300">
              This document is required by the SEC. The information provided is meant to ensure transparency in our relationship with you.
              Please contact us with any questions.
            </p>

            <div className="mt-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">Additional Resources</p>
              <a
                href="https://www.investor.gov/crs"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:text-[#E7C55A]"
              >
                Visit the SEC&apos;s Form CRS page for more details
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#D4AF37] px-6 text-[12px] font-semibold text-black transition-colors hover:bg-[#B99225]"
              >
                Contact Our Team
              </Link>
              <Link
                href="/schedule"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 text-[12px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}