import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { advisors } from "@/lib/advisors";

type PageProps = {
  params: { slug: string };
};

export default function AdvisorDetailPage({ params }: PageProps) {
  console.log("DEBUG params.slug:", params.slug);
  const rawId = decodeURIComponent(params.slug ?? "").trim();
  const id = parseInt(rawId, 10);

  const advisor = advisors.find((a) => a.id === id);

  if (!advisor) {
    return (
      <div className="min-h-screen bg-[#F6F2E8]">
        <Header />
        <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-xs text-neutral-600">
            <Link href="/" className="hover:text-neutral-900">Home</Link>
            <span className="px-2">/</span>
            <Link href="/about" className="hover:text-neutral-900">About</Link>
          </div>

          <h1 className="mt-6 font-serif text-3xl md:text-4xl font-semibold text-neutral-900">
            Advisor not found
          </h1>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            The advisor profile you’re looking for doesn’t exist.
          </p>

          <div className="mt-6 rounded-xl bg-white/70 p-4 ring-1 ring-black/10">
            <div className="text-xs text-neutral-600">
              Requested id: <span className="font-medium text-neutral-900">{rawId || "(empty)"}</span>
            </div>
            <div className="mt-2 text-xs text-neutral-600">
              Available ids: <span className="font-medium text-neutral-900">{advisors.map((a) => a.id).join(", ")}</span>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md bg-[#C9A961] px-5 py-2 text-sm font-medium text-black"
            >
              Back to About
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F2E8]">
      <Header />
      <main>
        <section className="py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-xs text-neutral-600">
              <Link href="/" className="hover:text-neutral-900">Home</Link>
              <span className="px-2">/</span>
              <Link href="/about" className="hover:text-neutral-900">About</Link>
              <span className="px-2">/</span>
              <span className="text-neutral-800">Advisor</span>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
              <div className="overflow-hidden bg-white shadow-sm ring-1 ring-black/5">
                <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                  <img
                    src={advisor.imageUrl}
                    alt={advisor.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-6 py-6">
                  <h1 className="font-serif text-2xl font-semibold text-neutral-900">{advisor.name}</h1>
                  <p className="mt-1 text-sm text-neutral-600">{advisor.role}</p>
                  <p className="mt-2 text-[11px] text-neutral-500">Profile: /about/advisors/{advisor.id}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {advisor.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-sm bg-[#F6F2E8] px-2 py-1 text-[10px] font-semibold text-[#A47B22] ring-1 ring-[#A47B22]/20"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 shadow-sm ring-1 ring-black/5">
                <h2 className="font-serif text-xl font-semibold text-neutral-900">Biography</h2>
                <p className="mt-4 text-sm leading-6 text-neutral-700">{advisor.bio}</p>

                <div className="mt-10">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#A47B22] hover:text-[#8D6A1D]"
                  >
                    Back to About
                    <span aria-hidden="true">→</span>
                  </Link>
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
