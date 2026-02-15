'use client';

import React from "react";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { useGet_all_blogsQuery } from "@/redux/api/blogApi";

export default function InsightsPage() {
  const { data, error, isLoading } = useGet_all_blogsQuery({});

  console.log('API Response:', data); // Debug log to see the structure

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#2C2C2C]">
        <Header />
        <main>
          <section className="bg-gradient-to-b from-[#1A1D21] to-[#121417] py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide text-[#C9A961]">
                Investment Insights
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-neutral-400">
                Explore our latest perspectives on market trends, investment strategies, and
                <br />
                financial planning to help inform your decisions.
              </p>
            </div>
          </section>

          <section className="bg-[#2C2C2C] py-14">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="text-center">
                  <p>Loading...</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#2C2C2C]">
        <Header />
        <main>
          <section className="bg-gradient-to-b from-[#1A1D21] to-[#121417] py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide text-[#C9A961]">
                Investment Insights
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-neutral-400">
                Explore our latest perspectives on market trends, investment strategies, and
                <br />
                financial planning to help inform your decisions.
              </p>
            </div>
          </section>

          <section className="bg-[#2C2C2C] py-14">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="text-center">
                  <p>Error: {error instanceof Error ? error.message : 'Failed to load blogs'}</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2C2C2C]">
      <Header />
      <main>
        <section className="bg-gradient-to-b from-[#1A1D21] to-[#121417] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide text-[#C9A961]">
              Investment Insights
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-neutral-400">
              Explore our latest perspectives on market trends, investment strategies, and
              <br />
              financial planning to help inform your decisions.
            </p>
          </div>
        </section>

        <section className="bg-[#2C2C2C] py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {(Array.isArray(data) ? data : data?.data || data?.blogs || [])?.map((item: any) => (
                <Link
                  key={item.href || item.id}
                  href={item.href || `/insights/${item.id}`}
                  className="group overflow-hidden rounded-2xl bg-[#e8e6e3] shadow-sm ring-1 ring-black/5"
                >
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="px-5 pb-6 pt-4 bg-[#e8e6e3]">
                    <div className="text-[11px] text-neutral-500">
                      <span>{item.date}</span>
                      <span className="px-2">•</span>
                      <span>{item.readTime}</span>
                    </div>

                    <h3 className="mt-2 text-sm font-semibold leading-snug text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-neutral-600">{item.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <div className="inline-flex items-center gap-2">
                <button className="h-7 w-7 rounded bg-[#C9A961] text-[11px] font-medium text-black">
                  1
                </button>
                <button className="h-7 w-7 rounded bg-[#3A3A3A] text-[11px] text-neutral-200 ring-1 ring-white/10">
                  2
                </button>
                <button className="h-7 w-7 rounded bg-[#3A3A3A] text-[11px] text-neutral-200 ring-1 ring-white/10">
                  3
                </button>
                <button className="h-7 w-7 rounded bg-[#3A3A3A] text-[11px] text-neutral-200 ring-1 ring-white/10">
                  4
                </button>
                <button className="h-7 w-7 rounded bg-[#3A3A3A] text-[11px] text-neutral-200 ring-1 ring-white/10">
                  →
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}