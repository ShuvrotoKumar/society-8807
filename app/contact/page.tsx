import React from "react";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Phone,
  Info,
  Linkedin,
  Twitter,
  Facebook,
  CalendarDays,
  Check,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-b from-[#1A1D21] to-[#121417] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-semibold tracking-wide text-[#C9A961]">
              Get In Touch
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-neutral-400">
              We’re here to answer your questions and discuss how we can help you
              <br />
              achieve your financial goals.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[360px_1fr]">
              <aside className="overflow-hidden rounded-2xl bg-[#2A2A2A] text-neutral-100 shadow-sm">
                <div className="px-8 py-10">
                  <h2 className="font-serif text-xl font-semibold text-white">Contact Information</h2>

                  <div className="mt-10 space-y-8">
                    <div className="flex gap-4">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#3A3A3A]">
                        <MapPin className="h-4 w-4 text-[#C9A961]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Address</p>
                        <p className="mt-2 text-xs leading-6 text-neutral-300">
                          245 Park Avenue
                          <br />
                          New York, NY 10167
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#3A3A3A]">
                        <Phone className="h-4 w-4 text-[#C9A961]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Phone</p>
                        <p className="mt-2 text-xs leading-6 text-neutral-300">
                          +1 (212) 555-0147
                          <br />
                          Mon–Fri 9:00 AM - 6:00 PM EST
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#3A3A3A]">
                        <Mail className="h-4 w-4 text-[#C9A961]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Email</p>
                        <p className="mt-2 text-xs leading-6 text-neutral-300">
                          contact@heritagewealth.com
                          <br />
                          inquiries@heritagewealth.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-[#C9A961]/30" />

                <div className="px-8 py-8">
                  <p className="text-sm font-semibold text-white">Follow Us</p>
                  <div className="mt-5 flex gap-3">
                    <a
                      href="#"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#3A3A3A] text-[#C9A961]"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#3A3A3A] text-[#C9A961]"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#3A3A3A] text-[#C9A961]"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </aside>

              <section className="rounded-2xl bg-[#F3F0E7] px-8 py-10 shadow-sm ring-1 ring-black/5">
                <h2 className="font-serif text-2xl font-semibold text-neutral-900">Send Us a Message</h2>
                <p className="mt-2 text-xs leading-6 text-neutral-500">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="text-[11px] font-semibold text-neutral-600">Full Name *</label>
                      <input
                        placeholder="John Smith"
                        className="mt-2 w-full rounded-md border border-black/10 bg-white px-4 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C9A961]/60"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-neutral-600">Email Address *</label>
                      <input
                        placeholder="john@example.com"
                        className="mt-2 w-full rounded-md border border-black/10 bg-white px-4 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C9A961]/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-neutral-600">Phone Number</label>
                    <input
                      placeholder="+1 (555) 000-0000"
                      className="mt-2 w-full rounded-md border border-black/10 bg-white px-4 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C9A961]/60"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-neutral-600">Message *</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your financial goals and how we can help..."
                      className="mt-2 w-full resize-none rounded-md border border-black/10 bg-white px-4 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C9A961]/60"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-black/20 text-[#C9A961] focus:ring-[#C9A961]"
                    />
                    <p className="text-[11px] leading-5 text-neutral-500">
                      I consent to Heritage Wealth collecting and storing my information to respond to my inquiry.
                      I understand that my data will be handled in accordance with the
                      <Link href="/privacy" className="ml-1 text-[#C9A961] underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="pt-2">
                    <Button className="h-11 w-full rounded-md !bg-[#C9A961] text-[13px] font-medium !text-black hover:!bg-[#B99225] focus:!ring-[#C9A961]">
                      Send Message
                    </Button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f3f0] pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center m-[50px] pt-10">
              <h2 className="font-serif text-3xl font-semibold text-neutral-900 md:text-4xl">
                Schedule a Consultation
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-500">
                Book a complimentary 30-minute consultation with one of our wealth advisors
                <br />
                to discuss your financial future.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-[#1F1F1F] px-6 py-14 text-center shadow-sm sm:px-10">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#2E2E2E]">
                <CalendarDays className="h-5 w-5 text-[#C9A961]" />
              </div>

              <h3 className="mt-6 font-serif text-lg font-semibold text-white">Calendly Integration</h3>
              <p className="mx-auto mt-3 max-w-sm text-xs leading-6 text-neutral-300">
                Connect your Calendly account to enable online
                <br />
                scheduling for consultations.
              </p>

              <ul className="mx-auto mt-8 max-w-sm space-y-3 text-left text-xs leading-6 text-neutral-200">
                <li className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 text-[#C9A961]" />
                  <span>Choose a convenient time slot</span>
                </li>
                <li className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 text-[#C9A961]" />
                  <span>Automatic calendar synchronization</span>
                </li>
                <li className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 text-[#C9A961]" />
                  <span>Receive confirmations &amp; reminders</span>
                </li>
              </ul>

              <div className="mt-10 flex justify-center">
                <Link href="/schedule">
                  <Button className="h-10 rounded-md !bg-[#C9A961] px-6 text-[12px] font-medium !text-black hover:!bg-[#B99225] focus:!ring-[#C9A961]">
                      Connect Calendly
                    </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1a1a1a] px-4 p-16">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-xl bg-[#111111] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <div className="px-8 py-7 sm:px-10 sm:py-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2A2A2A]">
                    <Info className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-white">
                    Important Compliance Notice
                  </h3>
                </div>
                <p className="mt-2 max-w-4xl text-md leading-6 text-neutral-300">
                  Heritage Wealth Advisors is committed to protecting your privacy and maintaining the highest standards of
                  professional conduct. Please note the following:
                </p>

                <ul className="mt-5 space-y-3 text-md leading-6 text-neutral-200">
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-2 w-2 flex-none rounded-full bg-[#C9A961]" />
                    <span>
                      <span className="font-semibold text-white">No Financial Advice via Form:</span> The contact form is for
                      general inquiries only. We do not provide personalized financial advice, investment recommendations, or
                      portfolio management guidance through this channel.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-2 w-2 flex-none rounded-full bg-[#C9A961]" />
                    <span>
                      <span className="font-semibold text-white">Confidential Information:</span> Please do not include
                      sensitive personal or financial information in your message. Detailed discussions should be conducted
                      during scheduled consultations.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-2 w-2 flex-none rounded-full bg-[#C9A961]" />
                    <span>
                      <span className="font-semibold text-white">Regulatory Compliance:</span> All financial advice and
                      services are provided in accordance with SEC regulations and fiduciary standards.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}