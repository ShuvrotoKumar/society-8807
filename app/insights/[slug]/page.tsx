import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { insights } from "@/lib/insights";

type PageProps = {
  params: { slug: string };
};

export default function InsightDetailPage({ params }: PageProps) {
  const rawSlug = decodeURIComponent(params.slug ?? "").trim();
  const normalizedSlug = rawSlug.replace(/^\/+|\/+$/g, "");
  const slugParts = normalizedSlug
    .split("/")
    .filter(Boolean)
    .map((p) => p.toLowerCase())
    .filter((p) => p !== "insights");

  const slugSegment = slugParts[slugParts.length - 1] ?? "";

  const item =
    insights.find((i) => {
      const href = (i.href ?? "").trim().replace(/^\/+|\/+$/g, "");
      const hrefParts = href
        .split("/")
        .filter(Boolean)
        .map((p) => p.toLowerCase())
        .filter((p) => p !== "insights");

      const hrefSegment = hrefParts[hrefParts.length - 1] ?? "";
      return hrefSegment === slugSegment;
    }) ??
    insights.find((i) => {
      const href = (i.href ?? "").trim().toLowerCase();
      return slugSegment ? href.includes(slugSegment) : false;
    }) ??
    insights[0];

  return (
    <div className="min-h-screen bg-[#f6f2e9]">
      <Header />
      <main className="pb-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="pt-10">
            <div className="text-[11px] text-neutral-500">
              <Link href="/" className="hover:text-neutral-800">Home</Link>
              <span className="px-2">/</span>
              <Link href="/insights" className="hover:text-neutral-800">Insights</Link>
              <span className="px-2">/</span>
              <span className="text-neutral-700">Article</span>
            </div>

            <h1 className="mt-6 font-serif text-3xl sm:text-4xl font-semibold leading-tight text-neutral-900">
              {item.title}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-neutral-200 ring-1 ring-black/10" />
              <div className="leading-tight">
                <div className="text-sm font-medium text-neutral-900">Mason Reynolds</div>
                <div className="text-[11px] text-neutral-500">
                  {item.date}
                  <span className="px-2">•</span>
                  {item.readTime}
                </div>
              </div>
            </div>

            <div className="mt-7 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
              <img src={item.image} alt={item.title} className="h-[260px] w-full object-cover sm:h-[320px]" />
            </div>

            <div className="prose prose-sm max-w-none prose-headings:font-serif prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-strong:text-neutral-900 mt-8">
              <p>
                {item.excerpt}
              </p>
              <p>
                In today’s rapidly evolving business landscape, the ability to make strategic decisions has become
                more important than ever. Leaders must evaluate risk and opportunity, consider multiple scenarios,
                and align choices with long-term objectives.
              </p>

              <h2>The Framework of Strategic Thinking</h2>
              <p>
                Strategic decision-making starts with a clear view of the mission and the constraints. By defining
                the problem carefully, you reduce noise and ensure the team focuses on the right outcomes.
              </p>

              <blockquote className="border-l-4 border-[#C9A961] bg-white/70 p-5 rounded-xl not-prose">
                <p className="text-sm leading-6 text-neutral-800">
                  “The best decisions are made when you have the courage to challenge your own assumptions and the
                  wisdom to learn from every outcome.”
                </p>
              </blockquote>

              <h2>Balancing Risk and Opportunity</h2>
              <p>
                Every strategic choice involves tradeoffs. The goal isn’t to remove risk, but to understand it,
                price it, and manage it. A disciplined process turns uncertainty into a competitive advantage.
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-[#1f2328] p-6 ring-1 ring-white/10">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-7 w-7 rounded-full bg-[#C9A961]" />
                <div>
                  <div className="text-xs font-semibold text-[#C9A961]">Key takeaway</div>
                  <p className="mt-2 text-sm leading-6 text-neutral-200">
                    Build a repeatable decision framework: define goals, gather facts, test assumptions, and evaluate
                    second-order effects before committing capital.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-sm max-w-none prose-headings:font-serif prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-strong:text-neutral-900 mt-8">
              <h2>The Human Element in Strategic Decisions</h2>
              <p>
                Great strategy isn’t only analysis. It’s communication, alignment, and execution. The strongest
                leaders create clarity, reduce ambiguity, and empower teams to act with confidence.
              </p>
              <h2>Building a Culture of Strategic Thinking</h2>
              <p>
                Organizations that consistently outperform create systems for learning: post-mortems, feedback loops,
                and transparent metrics. Over time, this builds better judgment across the entire team.
              </p>
              <h2>Looking Forward</h2>
              <p>
                The market rewards thoughtful execution. By investing in process and perspective, decision-making
                becomes a strategic asset that compounds over years.
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-[#1f2328] p-6 ring-1 ring-white/10">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-7 w-7 rounded-full bg-[#C9A961]" />
                <div>
                  <div className="text-xs font-semibold text-[#C9A961]">Leadership note</div>
                  <p className="mt-2 text-sm leading-6 text-neutral-200">
                    If you’re uncertain, write down the decision criteria first. This keeps the team aligned and
                    prevents the goalposts from moving mid-process.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-6">
              <Link href="/insights" className="text-xs text-neutral-600 hover:text-neutral-900">
                Back to Insights
              </Link>

              <div className="flex items-center gap-2">
                <button className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-700">
                  Share
                </button>
                <button className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-white">
                  Read later
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
