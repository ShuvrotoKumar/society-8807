import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ShieldCheck, Cookie, Lock, User, Mail } from 'lucide-react';

const sections = [
  {
    id: 'overview',
    title: 'Overview',
    Icon: ShieldCheck,
    body: [
      'This Privacy Policy explains how Society 8807 Wealth Management (“we,” “us,” or “our”) collects, uses, and shares information when you visit our website or communicate with us.',
      'This website is intended for general informational purposes. We do not request sensitive personal or financial information through website forms.',
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    Icon: User,
    body: [
      'Information you provide: such as your name, email address, phone number, and message content when you contact us.',
      'Usage information: such as pages viewed, time spent on pages, browser type, device information, and approximate location (derived from IP address).',
      'Cookies and similar technologies: used to help the site function, understand usage, and improve the user experience.',
    ],
  },
  {
    id: 'how-we-use',
    title: 'How We Use Information',
    Icon: ShieldCheck,
    body: [
      'To respond to inquiries and provide requested information.',
      'To operate, maintain, and improve our website and services.',
      'To help protect against fraud, abuse, and security incidents.',
      'To comply with applicable legal and regulatory obligations.',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies & Analytics',
    Icon: Cookie,
    body: [
      'Cookies are small text files stored on your device. We may use cookies to remember preferences and to understand how visitors interact with our site.',
      'You can manage cookies through your browser settings. Disabling cookies may impact certain site features.',
    ],
  },
  {
    id: 'sharing',
    title: 'Sharing of Information',
    Icon: Lock,
    body: [
      'We do not sell your personal information. We may share information with service providers who perform services on our behalf (e.g., hosting, analytics), subject to appropriate safeguards.',
      'We may also disclose information as required to comply with law, regulation, legal process, or governmental request, or to protect our rights and safety.',
    ],
  },
  {
    id: 'security',
    title: 'Data Security',
    Icon: Lock,
    body: [
      'We use reasonable administrative, technical, and physical safeguards designed to protect information we collect. However, no method of transmission or storage is 100% secure.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Choices & Rights',
    Icon: User,
    body: [
      'You may request access, correction, or deletion of certain personal information by contacting us. We will respond in accordance with applicable law.',
      'You may opt out of non-essential cookies through your browser settings.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    Icon: Mail,
    body: [
      'If you have questions about this Privacy Policy or how we handle information, contact us at contact@society8807.com.',
    ],
  },
];

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-neutral-400">
              We respect your privacy and are committed to protecting the information you share with us.
            </p>

            <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white/5 px-6 py-6 text-left ring-1 ring-white/10 sm:px-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <a
                  href="#information-we-collect"
                  className="rounded-xl bg-black/20 px-4 py-4 text-xs font-semibold text-neutral-200 ring-1 ring-white/10 transition-colors hover:bg-black/30"
                >
                  Data We Collect
                </a>
                <a
                  href="#how-we-use"
                  className="rounded-xl bg-black/20 px-4 py-4 text-xs font-semibold text-neutral-200 ring-1 ring-white/10 transition-colors hover:bg-black/30"
                >
                  How We Use It
                </a>
                <a
                  href="#cookies"
                  className="rounded-xl bg-black/20 px-4 py-4 text-xs font-semibold text-neutral-200 ring-1 ring-white/10 transition-colors hover:bg-black/30"
                >
                  Cookies
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
                <div>
                  <h2 className="text-2xl font-semibold text-white">Introduction</h2>
                  <p className="mt-4 text-sm leading-6">
                    We respect your privacy and are committed to protecting your personal data. This privacy policy explains how
                    we collect, use, and safeguard your information when you use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white">Data Collection</h2>
                  <h3 className="mt-4 text-lg font-medium text-white">Information We Collect</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm leading-6 space-y-1">
                    <li>Personal Identifiable Information (name, email address, phone number)</li>
                    <li>Usage data and analytics information</li>
                    <li>Device information and technical data</li>
                    <li>Cookies and tracking technologies</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white">How We Use Your Data</h2>
                  <p className="mt-4 text-sm leading-6">
                    We use the collected data to provide, maintain, and improve our services, communicate with you, and enhance
                    the security of our platform. We may also use your information for analytics and marketing purposes with your
                    consent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white">Data Sharing</h2>
                  <p className="mt-4 text-sm leading-6">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
                    except as described in this policy. We may share data with trusted service providers who assist us in
                    operating our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white">Data Protection</h2>
                  <p className="mt-4 text-sm leading-6">
                    We implement appropriate security measures to protect your personal information against unauthorized
                    access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100%
                    secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white">Your Rights</h2>
                  <h3 className="mt-4 text-lg font-medium text-white">You have the right to:</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm leading-6 space-y-1">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Data portability and restriction of processing</li>
                  </ul>
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