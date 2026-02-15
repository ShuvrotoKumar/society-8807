"use client";

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ShieldCheck, Cookie, Lock, User, Mail, Edit2, Save, X } from 'lucide-react';
import { useGetPrivacyQuery, useUpdatePrivacyMutation } from '@/redux/api/privacyApi';

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
  const { data: privacyData, isLoading, error } = useGetPrivacyQuery({});
  const [updatePrivacy, { isLoading: isUpdating }] = useUpdatePrivacyMutation();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');

  useEffect(() => {
    if (privacyData) {
      setEditedContent(JSON.stringify(privacyData, null, 2));
    }
  }, [privacyData]);

  const handleSave = async () => {
    try {
      const parsedData = JSON.parse(editedContent);
      await updatePrivacy({ requestData: parsedData }).unwrap();
      setIsEditing(false);
    } catch (err) {
      console.error('Failed to update privacy policy:', err);
    }
  };

  const handleCancel = () => {
    if (privacyData) {
      setEditedContent(JSON.stringify(privacyData, null, 2));
    }
    setIsEditing(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-neutral-400">Loading privacy policy...</div>
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
          <div className="text-red-400">Error loading privacy policy. Please try again later.</div>
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
                Privacy Policy
              </h1>
              {privacyData && (
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  title={isEditing ? "Cancel editing" : "Edit privacy policy"}
                >
                  {isEditing ? <X className="w-5 h-5 text-[#C9A961]" /> : <Edit2 className="w-5 h-5 text-[#C9A961]" />}
                </button>
              )}
            </div>
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
            {isEditing ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-white">Edit Privacy Policy</h2>
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
                  placeholder="Enter privacy policy data as JSON..."
                />
              </div>
            ) : (
              <div className="text-neutral-300">
                {privacyData ? (
                  <PrivacyContent data={privacyData} />
                ) : (
                  <div className="space-y-8">
                    {sections.map((section) => (
                      <div key={section.id} id={section.id}>
                        <div className="flex items-center gap-3">
                          <section.Icon className="w-6 h-6 text-[#C9A961]" />
                          <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                        </div>
                        <div className="mt-4 space-y-2">
                          {section.body.map((paragraph, index) => (
                            <p key={index} className="text-sm leading-6">
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

function PrivacyContent({ data }: { data: any }) {
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