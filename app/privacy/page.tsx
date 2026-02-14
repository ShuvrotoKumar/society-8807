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

        <section className="bg-[#f5f3f0] py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px] xl:gap-10">
              <div className="space-y-6 sm:space-y-8">
                {sections.map(({ id, title, Icon, body }) => (
                  <section
                    key={id}
                    id={id}
                    className="scroll-mt-28 rounded-xl sm:rounded-2xl bg-white px-6 py-8 sm:px-8 sm:py-10 shadow-sm ring-1 ring-black/5"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="mt-1 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#F6F2E8] ring-1 ring-black/5 flex-shrink-0">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#A47B22]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h2 className="font-serif text-xl sm:text-2xl font-semibold text-neutral-900">{title}</h2>
                        <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-sm leading-6 text-neutral-600">
                          {body.map((p) => (
                            <p key={p}>{p}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              <aside className="order-first lg:order-last h-fit rounded-xl sm:rounded-2xl bg-white px-6 py-8 sm:px-8 sm:py-10 shadow-sm ring-1 ring-black/5">
                <h3 className="font-serif text-lg font-semibold text-neutral-900">Effective Date</h3>
                <p className="mt-2 text-xs leading-6 text-neutral-500">Last updated: January 2026</p>

                <div className="mt-6 sm:mt-8 rounded-xl bg-[#1a1a1a] px-4 sm:px-6 py-4 sm:py-6 text-white">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/10 flex-shrink-0">
                      <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#C9A961]" />
                    </div>
                    <p className="font-serif text-base sm:text-lg font-semibold">Important Note</p>
                  </div>
                  <p className="mt-2 sm:mt-3 text-xs leading-5 sm:leading-6 text-neutral-300">
                    Please do not submit confidential or account-specific information through website forms.
                    For sensitive matters, schedule a consultation.
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 rounded-xl bg-[#F6F2E8] px-4 sm:px-6 py-4 sm:py-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A47B22]">Contact</p>
                  <p className="mt-2 text-sm font-semibold text-neutral-900 break-all">contact@society8807.com</p>
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