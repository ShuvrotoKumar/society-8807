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
  const { data: cookieData, isLoading, error } = useGetCookiePolicyQuery({});
  const [updateCookiePolicy, { isLoading: isUpdating }] = useUpdateCookiePolicyMutation();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');

  useEffect(() => {
    if (cookieData) {
      setEditedContent(JSON.stringify(cookieData, null, 2));
    }
  }, [cookieData]);

  const handleSave = async () => {
    try {
      const parsedData = JSON.parse(editedContent);
      await updateCookiePolicy({ requestData: parsedData }).unwrap();
      setIsEditing(false);
    } catch (err) {
      console.error('Failed to update cookie policy:', err);
    }
  };

  const handleCancel = () => {
    if (cookieData) {
      setEditedContent(JSON.stringify(cookieData, null, 2));
    }
    setIsEditing(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-neutral-400">Loading cookie policy...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-red-400">Error loading cookie policy. Please try again later.</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="bg-gradient-to-b from-[#1A1D21] to-[#121417] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center rounded-full bg-white/5 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A961] ring-1 ring-white/10">
              Legal
            </span>
            <div className="flex items-center justify-center gap-4 mt-6">
              <h1 className="font-serif text-5xl md:text-6xl font-semibold tracking-wide text-[#C9A961]">
                Cookie Policy
              </h1>
              {cookieData && (
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  title={isEditing ? "Cancel editing" : "Edit cookie policy"}
                >
                  {isEditing ? <X className="w-5 h-5 text-[#C9A961]" /> : <Edit2 className="w-5 h-5 text-[#C9A961]" />}
                </button>
              )}
            </div>
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
            {isEditing ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-white">Edit Cookie Policy</h2>
                  <div className="flex gap-2">
                    <button
                      onClick={handleCancel}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-white transition-colors"
                    >
                      <X className="w-4 h-4" />
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={isUpdating}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C9A961] hover:bg-[#B09050] text-black font-medium transition-colors disabled:opacity-50"
                    >
                      <Save className="w-4 h-4" />
                      {isUpdating ? 'Saving...' : 'Save'}
                    </button>
                  </div>
                </div>
                <textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  className="w-full h-96 p-4 bg-black/50 border border-white/10 rounded-lg text-neutral-300 font-mono text-sm focus:outline-none focus:border-[#C9A961]"
                  placeholder="Enter cookie policy data as JSON..."
                />
              </div>
            ) : (
              <div className="text-neutral-300">
                {cookieData ? (
                  <CookieContent data={cookieData} />
                ) : (
                  <div className="space-y-8">
                    {[
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
                    ].map(({ id, title, body, Icon }) => (
                      <div key={id} id={id}>
                        <div className="flex items-center gap-3">
                          <Icon className="w-6 h-6 text-[#C9A961]" />
                          <h2 className="text-2xl font-semibold text-white">{title}</h2>
                        </div>
                        <div className="mt-4 space-y-2">
                          {body.map((paragraph) => (
                            <p key={paragraph} className="text-sm leading-6">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function CookieContent({ data }: { data: any }) {
  if (!data) return null;

  return (
    <div className="space-y-8">
      {Object.entries(data).map(([key, value]: [string, any]) => {
        if (typeof value === 'string') {
          return (
            <div key={key}>
              <h2 className="text-2xl font-semibold text-white capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </h2>
              <p className="mt-4 text-sm leading-6">{value}</p>
            </div>
          );
        }
        if (typeof value === 'object' && value !== null) {
          return (
            <div key={key}>
              <h2 className="text-2xl font-semibold text-white capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </h2>
              <div className="mt-4 space-y-2">
                {Object.entries(value).map(([subKey, subValue]: [string, any]) => (
                  <div key={subKey}>
                    <h3 className="text-lg font-medium text-white capitalize">
                      {subKey.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <p className="mt-2 text-sm leading-6">{subValue}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}