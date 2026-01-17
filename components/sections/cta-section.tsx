import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

export const CtaSection: React.FC = () => {
  return (
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
            <Link href="/schedule">
            <Button className="h-12 w-[260px] rounded-[10px] !bg-[#C9A961] text-[16px] font-medium !text-black hover:!bg-[#B99225] focus:!ring-[#C9A961]">
              Schedule a Consultation
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
