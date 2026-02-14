import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollText, ShieldCheck, AlertTriangle, Scale, Mail, ExternalLink } from 'lucide-react';

const termsSections = [
  {
    id: 'acceptance',
    title: 'Acceptance of These Terms',
    Icon: ScrollText,
    body: [
      'By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree, do not use the site.',
      'We may update these Terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised Terms.',
    ],
  },
  {
    id: 'no-advice',
    title: 'No Investment, Tax, or Legal Advice',
    Icon: ShieldCheck,
    body: [
      'Information on this website is provided for general educational and informational purposes only and should not be construed as personalized investment, tax, or legal advice.',
      'You should consult qualified professionals regarding your specific circumstances before making financial decisions.',
    ],
  },
  {
    id: 'risks',
    title: 'Risk Disclosures',
    Icon: AlertTriangle,
    body: [
      'All investing involves risk, including the potential loss of principal. Past performance is not indicative of future results.',
      'Any forward-looking statements are based on assumptions and may differ materially from actual outcomes.',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    Icon: Scale,
    body: [
      'Unless otherwise noted, all content on this site (text, graphics, logos, and design) is owned by or licensed to Society 8807 Wealth Management and is protected by applicable laws.',
      'You may view and print pages for your personal, non-commercial use. You may not reproduce, distribute, modify, or create derivative works without prior written permission.',
    ],
  },
  {
    id: 'third-party',
    title: 'Third-Party Links',
    Icon: ExternalLink,
    body: [
      'This site may contain links to third-party websites. We do not control those sites and are not responsible for their content, policies, or practices.',
      'Links are provided for convenience and do not imply endorsement.',
    ],
  },
  {
    id: 'limitations',
    title: 'Disclaimers & Limitation of Liability',
    Icon: AlertTriangle,
    body: [
      'This website is provided on an “as is” and “as available” basis, without warranties of any kind, either express or implied.',
      'To the fullest extent permitted by law, Society 8807 Wealth Management will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the site.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    Icon: Mail,
    body: [
      'Questions about these Terms? Contact us at contact@society8807.com.',
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="bg-gradient-to-b from-[#1A1D21] to-[#121417] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center rounded-full bg-white/5 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A961] ring-1 ring-white/10">
              Legal
            </span>
            <h1 className="mt-6 font-serif text-5xl md:text-6xl font-semibold tracking-wide text-[#C9A961]">
              Terms of Use
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-neutral-400">
              These Terms govern your access to and use of the Society 8807 Wealth Management website.
            </p>

            <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white/5 px-6 py-6 text-left ring-1 ring-white/10 sm:px-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <a
                  href="#no-advice"
                  className="rounded-xl bg-black/20 px-4 py-4 text-xs font-semibold text-neutral-200 ring-1 ring-white/10 transition-colors hover:bg-black/30"
                >
                  No Advice
                </a>
                <a
                  href="#intellectual-property"
                  className="rounded-xl bg-black/20 px-4 py-4 text-xs font-semibold text-neutral-200 ring-1 ring-white/10 transition-colors hover:bg-black/30"
                >
                  IP & Content
                </a>
                <a
                  href="#third-party"
                  className="rounded-xl bg-black/20 px-4 py-4 text-xs font-semibold text-neutral-200 ring-1 ring-white/10 transition-colors hover:bg-black/30"
                >
                  Third-Party Links
                </a>
                <a
                  href="#contact"
                  className="rounded-xl bg-black/20 px-4 py-4 text-xs font-semibold text-neutral-200 ring-1 ring-white/10 transition-colors hover:bg-black/30"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1a1a1a] py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-neutral-300">
              <div className="space-y-8">
                {termsSections.map(({ id, title, body }) => (
                  <div key={id}>
                    <h2 className="text-2xl font-semibold text-white">{title}</h2>
                    {body.map((p) => (
                      <p key={p} className="mt-4 text-sm leading-6">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}