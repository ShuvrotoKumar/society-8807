import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0B0E11] to-[#0A0C0F] text-white">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <Link href="/">
              <Image src="/images/logo.png" alt="Society 8807" width={128} height={128} />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-400">
              Independent, fiduciary-focused wealth management and financial planning.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">Navigation</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="/" className="text-neutral-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="text-neutral-300 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="/services" className="text-neutral-300 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="/insights" className="text-neutral-300 hover:text-white transition-colors">Insights</a>
              </li>
              <li>
                <a href="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">Legal</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="/disclosures" className="text-neutral-300 hover:text-white transition-colors">Disclosures</a>
              </li>
              <li>
                <a href="/privacy" className="text-neutral-300 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-neutral-300 hover:text-white transition-colors">Terms of Use</a>
              </li>
              <li>
                <a href="/cookie" className="text-neutral-300 hover:text-white transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-neutral-300">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center text-[#D4AF37]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>
                  123 Financial District
                  <br />
                  New York, NY 10005
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center text-[#D4AF37]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M22 16.92V21a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1 4.18 2 2 0 0 1 3 2h4.09a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.12a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <a href="#" className="hover:text-white transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center text-[#D4AF37]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M4 4h16v16H4z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </span>
                <a href="#" className="hover:text-white transition-colors">contact@society8807.com</a>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center text-[#D4AF37]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </span>
                <span>
                  Mon - Fri: 9:00 AM - 5:00 PM
                  <br />
                  Saturday: By appointment
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#D4AF37]/30" />

        <div className="mx-auto mt-10 max-w-5xl text-center">
          <p className="text-xs leading-6 text-neutral-500">
            Securities offered through LPL Financial, Member FINRA/SIPC. Investment advice offered through Society 8807 Wealth Management, a registered investment
            advisor and separate entity from LPL Financial. The LPL Financial representatives associated with this website may discuss investment advisory services
            only with residents of the states in which they are properly registered or licensed.
          </p>
          <p className="mt-5 text-xs leading-6 text-neutral-500">
            This material was prepared by LPL Financial nor its registered representatives offer tax or legal advice. Always consult a qualified tax
            advisor for information as to how taxes may affect your particular situation.
          </p>

          <div className="mt-8 flex items-center justify-center gap-8 text-[11px]">
            <a href="#" className="text-[#D4AF37] hover:text-[#E7C55A] transition-colors">BrokerCheck</a>
            <a href="#" className="text-[#D4AF37] hover:text-[#E7C55A] transition-colors">Form CRS</a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6">
          <p className="text-center text-xs text-neutral-500">© 2026 Society 8807 Wealth Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
