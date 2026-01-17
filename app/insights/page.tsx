import React from "react";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

const insights = [
  {
    title: "Market Volatility: Navigating Uncertain Times",
    date: "January 15, 2025",
    readTime: "5 min read",
    excerpt:
      "Understanding how to position your portfolio during periods of market turbulence and identify opportunities within volatility.",
    image:
      "/images/i1.png",
    href: "/insights/market-volatility",
  },
  {
    title: "ESG Investing: The Future of Sustainable Finance",
    date: "January 13, 2025",
    readTime: "5 min read",
    excerpt:
      "Exploring the growing importance of environmental, social, and governance factors in modern investment strategies.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=60",
    href: "/insights/esg-investing",
  },
  {
    title: "Retirement Planning in Your 40s and 50s",
    date: "January 7, 2025",
    readTime: "5 min read",
    excerpt:
      "Key strategies to maximize your retirement savings and ensure financial security in your golden years.",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=60",
    href: "/insights/retirement-planning",
  },
  {
    title: "Digital Assets: Understanding Crypto in Your Portfolio",
    date: "January 4, 2025",
    readTime: "5 min read",
    excerpt:
      "A comprehensive guide to incorporating cryptocurrency and digital assets into a diversified investment strategy.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1200&q=60",
    href: "/insights/digital-assets",
  },
  {
    title: "Digital Assets: Understanding Crypto in Your Portfolio",
    date: "January 4, 2025",
    readTime: "5 min read",
    excerpt:
      "A comprehensive guide to incorporating cryptocurrency and digital assets into a diversified investment strategy.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=60",
    href: "/insights/digital-assets-2",
  },
  {
    title: "International Diversification: Going Global",
    date: "January 7, 2025",
    readTime: "5 min read",
    excerpt:
      "Why expanding your portfolio beyond domestic markets can reduce risk and enhance long-term returns.",
    image:
      "/images/i2.png",
    href: "/insights/international-diversification",
  },
  {
    title: "Real Estate Investment Trusts: A Primer",
    date: "January 15, 2025",
    readTime: "5 min read",
    excerpt:
      "How REITs can provide real estate exposure with liquidity and diversification benefits for your portfolio.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=60",
    href: "/insights/reits-primer",
  },
  {
    title: "Real Estate Investment Trusts: A Primer",
    date: "January 15, 2025",
    readTime: "5 min read",
    excerpt:
      "How REITs can provide real estate exposure with liquidity and diversification benefits for your portfolio.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=60",
    href: "/insights/reits-primer-2",
  },
  {
    title: "The Psychology of Investing: Avoiding Common Biases",
    date: "January 5, 2025",
    readTime: "5 min read",
    excerpt:
      "Understanding behavioral finance and how emotional decision-making can impact your investment success.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=60",
    href: "/insights/psychology-of-investing",
  },
];

export default function InsightsPage() {
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
              {insights.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
                >
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="px-5 pb-6 pt-4 text-[#e8e6e3]">
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