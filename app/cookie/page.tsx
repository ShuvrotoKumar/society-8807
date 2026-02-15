"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Cookie, ShieldCheck, SlidersHorizontal, Lock, Mail, Edit2, Save, X } from 'lucide-react';
import { useGetCookiePolicyQuery, useUpdateCookiePolicyMutation } from '@/redux/api/cookieApi';

const sections = [
  {
    id: 'overview',
    title: 'Overview',
    Icon: Cookie,
    body: [
      'This Cookie Policy explains how Society 8807 Wealth Management uses cookies and similar technologies when you visit our website.',
      'Cookies help us deliver a better experience, understand website usage, and improve performance. Some cookies are necessary for the site to function.',
    ],
  }, 
  {
    id: 'what-are-cookies',
    title: 'What Are Cookies?',
    Icon: ShieldCheck,
    body: [
      'Cookies are small text files stored on your device when you visit a website. They can remember preferences and help websites function efficiently.',
      'Similar technologies (such as pixels or local storage) may be used for comparable purposes.',
    ],
  },
  {
    id: 'types',
    title: 'Types of Cookies We May Use',
    Icon: SlidersHorizontal,
    body: [
      'Strictly necessary cookies: required for core site functionality and security.',
      'Performance and analytics cookies: help us understand how visitors use the site so we can improve content and usability.',
      'Preference cookies: remember selections like language or region (if applicable).',
    ],
  },
  {
    id: 'choices',
    title: 'Your Choices',
    Icon: SlidersHorizontal,
    body: [
      'You can control cookies through your browser settings, including blocking or deleting cookies.',
      'If you disable cookies, some parts of the site may not work as intended.',
    ],
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    Icon: Lock,
    body: [
      'We do not use cookies to collect sensitive personal information such as account numbers or passwords.',
      'For more information on how we handle personal data, please review our Privacy Policy.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    Icon: Mail,
    body: [
      'If you have questions about this Cookie Policy, contact us at contact@society8807.com.',
    ],
  },
];

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-neutral-400">
              Learn how we use cookies to improve your experience and how you can manage your preferences.
            </p>

            <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white/5 px-6 py-6 text-left ring-1 ring-white/10 sm:px-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <a
                  href="#types"
                  className="rounded-xl bg-black/20 px-4 py-4 text-xs font-semibold text-neutral-200 ring-1 ring-white/10 transition-colors hover:bg-black/30"
                >
                  Cookie Types
                </a>
                <a
                  href="#choices"
                  className="rounded-xl bg-black/20 px-4 py-4 text-xs font-semibold text-neutral-200 ring-1 ring-white/10 transition-colors hover:bg-black/30"
                >
                  Your Choices
                </a>
                <a
                  href="#security"
                  className="rounded-xl bg-black/20 px-4 py-4 text-xs font-semibold text-neutral-200 ring-1 ring-white/10 transition-colors hover:bg-black/30"
                >
                  Security
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
                {sections.map(({ id, title, body }) => (
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