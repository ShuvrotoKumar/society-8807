"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollText, ShieldCheck, AlertTriangle, Scale, Mail, ExternalLink, Edit2, Save, X } from 'lucide-react';
import { useGetTermsAndConditionsQuery, useUpdateTermsAndConditionsMutation } from '@/redux/api/termsApi';

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
  const { data: termsData, isLoading, error } = useGetTermsAndConditionsQuery({});
  const [updateTermsAndConditions, { isLoading: isUpdating }] = useUpdateTermsAndConditionsMutation();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');

  useEffect(() => {
    if (termsData) {
      setEditedContent(JSON.stringify(termsData, null, 2));
    }
  }, [termsData]);

  const handleSave = async () => {
    try {
      const parsedData = JSON.parse(editedContent);
      await updateTermsAndConditions({ requestData: parsedData }).unwrap();
      setIsEditing(false);
    } catch (err) {
      console.error('Failed to update terms and conditions:', err);
    }
  };

  const handleCancel = () => {
    if (termsData) {
      setEditedContent(JSON.stringify(termsData, null, 2));
    }
    setIsEditing(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-neutral-400">Loading terms and conditions...</div>
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
          <div className="text-red-400">Error loading terms and conditions. Please try again later.</div>
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
                Terms of Use
              </h1>
              {termsData && (
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  title={isEditing ? "Cancel editing" : "Edit terms and conditions"}
                >
                  {isEditing ? <X className="w-5 h-5 text-[#C9A961]" /> : <Edit2 className="w-5 h-5 text-[#C9A961]" />}
                </button>
              )}
            </div>
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
            {isEditing ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-white">Edit Terms and Conditions</h2>
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
                  placeholder="Enter terms and conditions data as JSON..."
                />
              </div>
            ) : (
              <div className="text-neutral-300">
                {termsData ? (
                  <TermsContent data={termsData} />
                ) : (
                  <div className="space-y-8">
                    {[
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

function TermsContent({ data }: { data: any }) {
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