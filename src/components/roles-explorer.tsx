"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "@/components/icons";
import { cn } from "@/lib/cn";

export type ExplorerRole = {
  slug: string;
  name: string;
  category: string;
  openings: string;
  pay: string;
  topCities: string;
  href: string;
};

const CATEGORIES = ["All", "Engineering", "Data & AI", "Cloud & Security", "Business"];

const CITY_BAND = [
  { city: "San Francisco", openings: "68,210+" },
  { city: "New York", openings: "54,800+" },
  { city: "Seattle", openings: "41,950+" },
  { city: "Austin", openings: "36,200+" },
  { city: "Boston", openings: "28,400+" },
  { city: "Chicago", openings: "23,150+" },
];

export function RolesExplorer({ roles }: { roles: ExplorerRole[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    const query = q.toLowerCase().trim();
    return roles
      .map((r, i) => ({ ...r, idx: `/ ${String(i + 1).padStart(2, "0")}` }))
      .filter(
        (r) =>
          (cat === "All" || r.category === cat) &&
          (!query || r.name.toLowerCase().includes(query)),
      );
  }, [roles, q, cat]);

  return (
    <>
      <div className="mb-7 flex flex-wrap items-center gap-[18px]">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search tracks…"
          aria-label="Search role tracks"
          className="box-border min-w-[220px] flex-1 rounded-full border border-[#ddd6c8] bg-white px-[22px] py-[13px] font-sans text-[14px] text-ink outline-none focus:border-navy"
        />
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((label) => {
            const active = cat === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setCat(label)}
                className={cn(
                  "cursor-pointer rounded-full px-[18px] py-[11px] text-[12.5px] font-semibold transition-colors",
                  active
                    ? "border border-navy bg-navy text-white"
                    : "border border-[#ccc4b4] bg-transparent text-[#3c4a63] hover:border-navy",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
        <div className="font-mono text-[12px] text-faint">
          <span className="font-semibold text-gold-dark">{filtered.length}</span> tracks
        </div>
      </div>

      <div className="border-t border-line">
        {filtered.map((r) => (
          <Link
            key={r.slug}
            href={r.href}
            className="group grid grid-cols-[1fr_auto] items-center gap-x-5 gap-y-3 border-b border-line px-[18px] py-6 no-underline transition-colors hover:bg-white/80 md:grid-cols-[60px_1.7fr_1fr_0.9fr_1.5fr_44px]"
          >
            <div className="order-1 hidden font-mono text-[11.5px] text-gold-dark md:block">
              {r.idx}
            </div>
            <div className="order-1 text-[21px] font-bold tracking-[-0.01em] text-ink md:order-2">
              {r.name}
            </div>
            <div className="order-3 md:order-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.13em] text-faint">
                Openings
              </div>
              <div className="mt-1 font-mono text-[13.5px] font-semibold text-ink">
                {r.openings}
              </div>
            </div>
            <div className="order-4 md:order-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.13em] text-faint">
                Pay / hr
              </div>
              <div className="mt-1 font-mono text-[13.5px] text-ink">{r.pay}</div>
            </div>
            <div className="order-5 md:order-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.13em] text-faint">
                Top cities
              </div>
              <div className="mt-1 text-[13px] text-muted">{r.topCities}</div>
            </div>
            <div className="order-2 flex h-[38px] w-[38px] items-center justify-center place-self-end rounded-full border border-[#cfc7b6] text-navy transition-all group-hover:rotate-45 group-hover:border-navy group-hover:bg-navy group-hover:text-white md:order-6">
              <ArrowUpRight />
            </div>
          </Link>
        ))}
        {filtered.length === 0 ? (
          <div className="px-5 py-14 text-center font-mono text-[13px] text-faint">
            — No matching roles. Try a different search —
          </div>
        ) : null}
      </div>

      <div className="mt-16">
        <div className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
          Where the openings are
        </div>
        <div className="grid grid-cols-2 gap-[14px] sm:grid-cols-3 lg:grid-cols-6">
          {CITY_BAND.map((c) => (
            <div
              key={c.city}
              className="rounded-[14px] border border-line-card bg-white px-[22px] py-[22px] shadow-[0_2px_8px_rgba(10,31,68,0.04)]"
            >
              <div className="text-[16.5px] font-bold text-ink">{c.city}</div>
              <div className="mt-1.5 font-mono text-[13px] font-semibold text-gold-dark">
                {c.openings}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
