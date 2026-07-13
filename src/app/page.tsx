import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { featuredRoleSlugs, roles } from "@/data/roles";
import { Container, Eyebrow, Rich, Button, Watermark } from "@/components/ui";
import { CTASection } from "@/components/cta-section";
import { CountUp } from "@/components/count-up";
import { LiveClock } from "@/components/live-clock";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

const COMPANIES = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Apple",
  "Netflix",
  "Stripe",
  "Oracle",
  "IBM",
  "Tesla",
  "Nvidia",
  "Salesforce",
];

const WHY = [
  {
    n: "01",
    h: "Personalized, not pipelined",
    p: "You're not a row in a spreadsheet. Every candidate gets a coach, a written strategy, and weekly touch-ins until offer.",
  },
  {
    n: "02",
    h: "Verified employers only",
    p: "50+ partner companies who've signed our anti-ghosting clause. If they interview, they reply — guaranteed.",
  },
  {
    n: "03",
    h: "Outcomes, not output",
    p: "We don't bill for applications sent. We're paid when you sign — which is the only metric that matters.",
  },
  {
    n: "04",
    h: "Built by candidates, for candidates",
    p: "Our founders sat in your seat. Visa transitions, layoffs, returnships — we've been there.",
  },
];

const SERVICE_CARDS = [
  {
    kicker: "01 · IT STAFFING",
    title: "Find your<br/>fit, fast.",
    p: "Permanent placements for software, data, cloud and security professionals across US tech hubs.",
    href: "/services/it-staffing",
    cta: "Explore",
    accent: false,
  },
  {
    kicker: "02 · PERMANENT",
    title: "Long-term<br/>roots.",
    p: "Full-time roles with culture-fit screening, salary negotiation, and 90-day check-ins after you start.",
    href: "/services/permanent",
    cta: "Explore",
    accent: false,
  },
  {
    kicker: "03 · CONTRACT",
    title: "Flexible,<br/>specialist.",
    p: "3–12 month engagements with rate negotiation, paperwork handled, and extension support built in.",
    href: "/services/contract",
    cta: "Explore",
    accent: false,
  },
  {
    kicker: "04 · RPO",
    title: "For hiring<br/>teams.",
    p: "Recruitment process outsourcing. We run the whole funnel — sourcing, screening, scheduling, offers.",
    href: "/services/rpo",
    cta: "Explore",
    accent: false,
  },
  {
    kicker: "05 · EXECUTIVE",
    title: "Leadership<br/>placements.",
    p: "Confidential search for VP / C-suite, board appointments, and succession planning across industries.",
    href: "/services/executive-search",
    cta: "Explore",
    accent: false,
  },
  {
    kicker: "+ ADD-ONS",
    title: "Expertise<br/>add-ons.",
    p: "Resume makeover + LinkedIn boost. Often the missing piece between “applying” and “interviewing.”",
    href: "/expertise/resume",
    cta: "See offers",
    accent: true,
  },
];

export default function HomePage() {
  const featured = featuredRoleSlugs.map((s) => roles[s]);

  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <header className="relative overflow-hidden bg-navy">
        <Watermark size={760} className="-right-[190px] -top-[170px]" />
        <Container className="relative pb-[88px] pt-[104px]">
          <div className="grid items-center gap-[72px] lg:grid-cols-[1.5fr_1fr]">
            <div>
              <Eyebrow tone="gold" className="tracking-[0.18em]">
                EST. 2018 · NJ → REMOTE WORLDWIDE
              </Eyebrow>
              <Rich
                as="h1"
                tone="dark"
                html={"Get hired by the<br>teams you <em>actually</em><br>want to work for."}
                className="mt-[26px] font-extrabold tracking-[-0.025em] text-white"
                style={{ fontSize: "clamp(46px,5vw,76px)", lineHeight: 1.02 }}
              />
              <p className="mt-7 max-w-[520px] text-[16.5px] leading-[1.7] text-white/[0.72]">
                {site.description}
              </p>
              <div className="mt-9 flex flex-wrap gap-[14px]">
                <Button href="/contact" variant="solidLight" arrow>
                  Start your match
                </Button>
                <Button href="/roles" variant="outlineLight">
                  See open roles
                </Button>
              </div>
            </div>

            <div className="flex flex-col border-l border-white/[0.16] pl-11">
              <div className="py-5">
                <div className="text-[52px] font-extrabold leading-none text-white">
                  <CountUp value={site.stats.careers} suffix="+" />
                </div>
                <div className="mt-2.5 font-mono text-[11.5px] uppercase tracking-[0.12em] text-white/55">
                  Careers transformed
                </div>
              </div>
              <div className="border-t border-white/[0.12] py-5">
                <div className="text-[52px] font-extrabold leading-none text-white">
                  <CountUp value={site.stats.success} suffix="%" />
                </div>
                <div className="mt-2.5 font-mono text-[11.5px] uppercase tracking-[0.12em] text-white/55">
                  Placement success rate
                </div>
              </div>
              <div className="border-t border-white/[0.12] py-5">
                <div className="text-[52px] font-extrabold leading-none text-white">
                  <CountUp value={site.stats.rating} decimals={1} />
                  <span className="text-[26px] font-semibold text-white/60">/5</span>
                </div>
                <div className="mt-2.5 font-mono text-[11.5px] uppercase tracking-[0.12em] text-white/55">
                  Average candidate rating
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* ticker */}
        <div className="relative border-t border-white/[0.12]">
          <Container className="flex flex-wrap justify-between gap-6 py-[14px] font-mono text-[11.5px] tracking-[0.06em] text-white/55">
            <span>
              <span className="mr-1.5 inline-block h-[7px] w-[7px] rounded-full bg-gold align-[1px]" />
              LIVE · 11 candidates in interview loops this week
            </span>
            <span>NJ · 40°33&apos;N 74°44&apos;W</span>
            <LiveClock />
          </Container>
        </div>
      </header>

      {/* --------------------------------------------------- Placements band */}
      <div className="flex items-center overflow-hidden border-b border-line-nav">
        <div className="relative z-[2] flex-none border-r border-line-nav bg-cream px-8 py-[22px]">
          <span className="whitespace-nowrap font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-faint">
            Our candidates land at
          </span>
        </div>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-[60px] px-9 py-[18px]">
            {[...COMPANIES, ...COMPANIES].map((name, i) => (
              <span
                key={`${name}-${i}`}
                aria-hidden={i >= COMPANIES.length}
                className="flex items-center gap-3 whitespace-nowrap"
              >
                <span className="h-[7px] w-[7px] rounded-full bg-gold-dark opacity-70" />
                <span className="text-[16px] font-semibold tracking-[0.01em] text-navy opacity-75">
                  {name}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- Why */}
      <section className="pb-24 pt-[104px]">
        <Container>
          <div className="mb-[60px] flex flex-wrap items-end justify-between gap-x-[60px] gap-y-6">
            <div>
              <Eyebrow>Why Velora</Eyebrow>
              <Rich
                as="h2"
                html={"Recruiting is broken.<br><em>We rebuilt it</em> for candidates."}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(34px,3.6vw,52px)", lineHeight: 1.1 }}
              />
            </div>
            <p className="m-0 max-w-[420px] text-[15.5px] leading-[1.7] text-muted">
              Most recruiters work for the company. We work for you — your story,
              your numbers, your career arc. Every signal we send to hiring teams
              is one we&apos;d want sent on our own behalf.
            </p>
          </div>

          <div className="grid items-start gap-[72px] lg:grid-cols-[1.15fr_1fr]">
            <div className="flex flex-col">
              {WHY.map((item, i) => (
                <div
                  key={item.n}
                  className={`grid grid-cols-[72px_1fr] gap-6 border-t border-[#d9d2c4] py-[26px] ${
                    i === WHY.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="pt-1.5 font-mono text-[11px] tracking-[0.15em] text-gold-dark">
                    {item.n}
                  </div>
                  <div>
                    <h3 className="mb-2 text-[22px] font-bold tracking-[-0.01em] text-ink">
                      {item.h}
                    </h3>
                    <p className="m-0 text-[14.5px] leading-[1.65] text-muted">
                      {item.p}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-line-card bg-white p-9 shadow-[0_2px_12px_rgba(10,31,68,0.07)]">
              <Eyebrow>CASE · 002</Eyebrow>
              <Rich
                as="h3"
                html={"From PIP to<br><em>Principal</em>."}
                className="mt-3.5 text-[34px] font-bold leading-[1.15] tracking-[-0.02em] text-ink"
              />
              <p className="mt-[18px] text-[14.5px] leading-[1.7] text-muted">
                Senior eng on a performance plan came to us in March. We
                re-positioned his impact story, rebuilt his LinkedIn around
                platform reliability, and ran two coached interview loops.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-5 border-t border-line-hair pt-[26px]">
                <div>
                  <div className="text-[40px] font-extrabold leading-none text-ink">
                    +$74k
                  </div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                    TC bump
                  </div>
                </div>
                <div>
                  <div className="text-[40px] font-extrabold leading-none text-ink">
                    38d
                  </div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                    Time to offer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------- Services */}
      <section className="pb-[104px]">
        <Container>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-x-[60px] gap-y-6">
            <div>
              <Eyebrow>Services</Eyebrow>
              <Rich
                as="h2"
                html={"Five ways<br>we move <em>you forward</em>."}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(34px,3.6vw,52px)", lineHeight: 1.1 }}
              />
            </div>
            <p className="m-0 max-w-[420px] text-[15.5px] leading-[1.7] text-muted">
              From contract gigs to C-suite — pick the engagement that fits your
              moment. Or talk to us and we&apos;ll route you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CARDS.map((c) => (
              <Link
                key={c.kicker}
                href={c.href}
                className={`group grid min-h-[260px] grid-rows-[auto_1fr_auto] rounded-2xl border p-[30px] no-underline shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-lg ${
                  c.accent
                    ? "border-gold-dark bg-gradient-to-br from-gold-dark/[0.12] to-gold-dark/[0.02]"
                    : "border-line-card bg-white hover:border-gold-dark"
                }`}
              >
                <div className="font-mono text-[11px] font-semibold tracking-[0.14em] text-gold-dark">
                  {c.kicker}
                </div>
                <Rich
                  as="h3"
                  html={c.title}
                  className="mb-2 mt-4 text-[28px] font-bold leading-[1.15] tracking-[-0.015em] text-ink"
                />
                <div>
                  <p className="m-0 text-[14px] leading-[1.6] text-muted">{c.p}</p>
                  <span className="mt-[22px] inline-flex items-center gap-2 font-mono text-[11.5px] font-semibold uppercase tracking-[0.1em] text-gold-dark">
                    {c.cta}
                    <ArrowRight className="flex-none" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* --------------------------------------------------------- Top roles */}
      <section className="pb-[104px]">
        <Container>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-x-[60px] gap-y-6">
            <div>
              <Eyebrow>Top IT roles</Eyebrow>
              <Rich
                as="h2"
                html={"Thirteen tracks<br>we know <em>cold</em>."}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(34px,3.6vw,52px)", lineHeight: 1.1 }}
              />
            </div>
            <p className="m-0 max-w-[420px] text-[15.5px] leading-[1.7] text-muted">
              Each track has dedicated coaches, employer partners, and a shortlist
              of vetted interview questions. Browse, then book a track-specific
              intake call.
            </p>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-[#d9d2c4] sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((r) => (
              <Link
                key={r.slug}
                href={`/roles/${r.slug}`}
                className="group relative grid min-h-[190px] grid-rows-[auto_1fr_auto] border-b border-r border-[#d9d2c4] px-7 py-8 no-underline transition-colors hover:bg-white/75"
              >
                <div className="font-mono text-[11px] font-semibold tracking-[0.12em] text-gold-dark">
                  {r.demand}
                </div>
                <h3 className="mb-1 mt-4 text-[23px] font-bold tracking-[-0.01em] text-ink">
                  {r.title}
                </h3>
                <div>
                  <div className="font-mono text-[12px] text-muted">
                    {r.openings} openings
                  </div>
                  <div className="mt-3.5 font-mono text-[12px] text-muted">
                    {r.pay} / hr
                  </div>
                </div>
                <div className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-[#cfc7b6] text-navy transition-all duration-200 group-hover:rotate-45 group-hover:border-navy group-hover:bg-navy group-hover:text-white">
                  <ArrowUpRight />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Button href="/roles" variant="outlineNavy" arrow>
              See all 13 role tracks
            </Button>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------- Testimonial */}
      <section className="pb-[104px]">
        <Container>
          <div className="grid items-center gap-[72px] lg:grid-cols-[1.1fr_1fr]">
            <div>
              <Eyebrow>Candidate · 048</Eyebrow>
              <Rich
                as="div"
                html={"“Two weeks after the boost I had <em>six recruiter DMs</em> and three interviews lined up. They didn’t apply to a single job for me — they just made the right one impossible to ignore.”"}
                className="mt-[26px] font-semibold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(24px,2.6vw,38px)", lineHeight: 1.32 }}
              />
              <div className="mt-[26px] font-mono text-[11.5px] uppercase tracking-[0.12em] text-faint">
                AISHA K. · PRODUCT MANAGER · FINTECH SCALEUP
              </div>
            </div>
            <div className="rounded-2xl border border-line-card bg-white p-10 shadow-[0_2px_12px_rgba(10,31,68,0.07)]">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-dark">
                Recruiter search appearances — last 30 days
              </div>
              <div className="mt-8 grid grid-cols-[1fr_24px_1fr] items-end gap-6">
                <div>
                  <div className="text-[56px] font-extrabold leading-none text-ink opacity-45">
                    38
                  </div>
                  <div className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                    Before
                  </div>
                </div>
                <div className="flex justify-center pb-[26px] text-gold-dark">
                  <ArrowRight />
                </div>
                <div>
                  <div className="text-[56px] font-extrabold leading-none text-gold-dark">
                    412
                  </div>
                  <div className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                    After
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-line-hair pt-[26px]">
                <div>
                  <div className="font-mono text-[12px] text-faint">Profile views</div>
                  <div className="mt-1.5 text-[28px] font-bold text-ink">+982%</div>
                </div>
                <div>
                  <div className="font-mono text-[12px] text-faint">Inbound DMs</div>
                  <div className="mt-1.5 text-[28px] font-bold text-ink">+18×</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Ready when you are"
        heading={"Your next role isn't<br>going to find <em>itself</em>."}
        maxCh={18}
        headingSize="clamp(36px,4.6vw,66px)"
        primary={{ label: "Get started today", href: "/contact" }}
        secondary={{ label: "Learn about us", href: "/about" }}
      />
    </>
  );
}
