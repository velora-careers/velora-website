import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { Container, Eyebrow, Rich } from "@/components/ui";
import { CTASection } from "@/components/cta-section";
import { CountUp } from "@/components/count-up";
import { Reveal, Stagger, Item, ParallaxWatermark } from "@/components/motion";
import { EVerifyBadge } from "@/components/everify-badge";
import { JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo";

export const metadata: Metadata = pageMetadata({
  title: "About Velora Careers",
  description:
    "We sit on your side of the table. Velora Careers is a small team of coaches and recruiters who rebuilt recruiting for candidates — founded 2018 in Branchburg, NJ.",
  path: "/about",
  keywords: ["about Velora", "career coaching team", "IT recruiting firm"],
});

const STORY_FACTS = [
  "/ founded 2018",
  "/ branchburg, nj → remote",
  "/ 12 ppl across 4 timezones",
  "/ 50+ verified employers",
  "/ 13 specialized role tracks",
];

const MARQUEE = [
  "Personalized approach",
  "Trusted partnership",
  "Integrity first",
  "Continuous innovation",
  "Candidate-first always",
];

type Member = {
  role: string;
  name: string;
  bio: string;
  photo?: string;
  /** Extra classes to fine-tune how the photo sits in the circular frame. */
  imgClass?: string;
};

const TEAM: Member[] = [
  {
    role: "Founder & Managing Director",
    name: "Parth Raval",
    bio: "Founded Velora to put candidates first. He sets the vision, leads the team, and stays close to the placements that matter most.",
    photo: "/team/parth-raval.jpg",
    // Photo is already a tight circle on black — scale up slightly to clip the corners.
    imgClass: "scale-[1.05] object-center",
  },
  {
    role: "Head of Business Development",
    name: "Kunj Suthar",
    bio: "Builds and nurtures the employer partnerships behind every role — the verified companies our candidates actually want to join.",
    photo: "/team/kunj-suthar.jpg",
    imgClass: "object-center",
  },
  {
    role: "Head of Talent & Delivery",
    name: "Raj Patel",
    bio: "Runs sourcing, screening, and placement delivery — the engine that turns a shortlist into a signed offer, on time and without the spam.",
    photo: "/team/raj-patel.jpg",
    // Portrait headshot — bias the crop upward so the face sits centered in the circle.
    imgClass: "object-[center_22%]",
  },
];

const VALUES = [
  {
    n: "/ 01",
    h: "Personalized approach.",
    p: "Every career journey is unique. We tailor coaching and placement strategy to your specific goals, constraints, and stage.",
  },
  {
    n: "/ 02",
    h: "Trusted partnership.",
    p: "Your success is the only success. We're your advocate inside the room and outside of it — invested in the long-term.",
  },
  {
    n: "/ 03",
    h: "Integrity first.",
    p: "Highest standards of professionalism, transparency, and ethical practice. No surprise fees. No ghosting.",
  },
  {
    n: "/ 04",
    h: "Continuous innovation.",
    p: "We stay ahead of industry trends and refine our methods. The market moves; so do we.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

const IMPACT = [
  { key: "careers", l: "Careers transformed" },
  { key: "success", l: "Placement success rate" },
  { key: "partners", l: "Partner companies" },
  { key: "rating", l: "Candidate satisfaction" },
] as const;

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      {/* Hero */}
      <header className="relative overflow-hidden bg-navy">
        <ParallaxWatermark size={640} className="-right-[170px] -top-[150px]" />
        <Container className="relative pb-[92px] pt-[100px]">
          <Reveal>
            <Eyebrow tone="gold" className="tracking-[0.18em]">
              About — EST. 2018
            </Eyebrow>
            <Rich
              as="h1"
              tone="dark"
              html={"We sit on <em>your side</em><br>of the table."}
              className="mt-[26px] font-extrabold tracking-[-0.025em] text-white"
              style={{ fontSize: "clamp(44px,5vw,74px)", lineHeight: 1.04 }}
            />
            <p className="mt-7 max-w-[600px] text-[16.5px] leading-[1.7] text-white/[0.72]">
              Velora Careers is a small team of career coaches and recruiters who
              got tired of how the industry treats candidates. So we built the firm
              we&apos;d want representing us.
            </p>
          </Reveal>
        </Container>
      </header>

      {/* Impact */}
      <section className="pb-24 pt-[104px]">
        <Container>
          <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-x-[60px] gap-y-6">
            <div>
              <Eyebrow>Our impact</Eyebrow>
              <Rich
                as="h2"
                html={"Real results.<br>No <em>fluff</em>."}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(34px,3.6vw,52px)", lineHeight: 1.1 }}
              />
            </div>
            <p className="m-0 max-w-[420px] text-[15.5px] leading-[1.7] text-muted">
              Five years in, the numbers speak for themselves. But the stories
              behind them — sat in our office, on Zoom, in coffee shops — are what
              we&apos;re really proud of.
            </p>
          </Reveal>

          <Stagger
            className="grid grid-cols-1 border-l border-t border-[#d9d2c4] sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.08}
          >
            {IMPACT.map((s) => (
              <Item
                key={s.key}
                className="h-full border-b border-r border-[#d9d2c4] px-[30px] py-9"
              >
                <div className="text-[54px] font-extrabold leading-none text-ink">
                  {s.key === "careers" && (
                    <CountUp value={site.stats.careers} suffix="+" />
                  )}
                  {s.key === "success" && (
                    <>
                      <CountUp value={site.stats.success} />
                      <span className="text-gold-dark">%</span>
                    </>
                  )}
                  {s.key === "partners" && (
                    <CountUp value={site.stats.partners} suffix="+" />
                  )}
                  {s.key === "rating" && (
                    <>
                      <CountUp value={site.stats.rating} decimals={1} />
                      <span className="text-gold-dark">/5</span>
                    </>
                  )}
                </div>
                <div className="mt-3 font-mono text-[11.5px] uppercase tracking-[0.12em] text-faint">
                  {s.l}
                </div>
              </Item>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Story */}
      <section className="pb-[104px]">
        <Container>
          <div className="grid items-start gap-[72px] md:grid-cols-[280px_1fr]">
            <Reveal>
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">
                Chapter 01
              </div>
              <div className="mt-2 text-[26px] font-bold text-ink">Our story</div>
              <div className="mt-11 font-mono text-[12.5px] leading-[2] text-faint">
                {STORY_FACTS.map((f) => (
                  <div key={f}>{f}</div>
                ))}
              </div>
              <EVerifyBadge className="mt-9" />
            </Reveal>
            <Reveal delay={0.1} className="flex max-w-[680px] flex-col gap-6">
              <Rich
                as="p"
                html={"Velora Careers began as a passion project to <em>bridge the gap</em> between talent and opportunity."}
                className="m-0 font-semibold tracking-[-0.015em] text-ink"
                style={{ fontSize: "clamp(22px,2.2vw,30px)", lineHeight: 1.4 }}
              />
              <p className="m-0 text-[16px] leading-[1.75] text-body">
                Our founders had all been on the candidate side at some point —
                through visa transitions, layoffs, returnships, and the long,
                lonely middle of a job search. We noticed something: traditional
                recruiters work for the company. The candidate is the product.
                That&apos;s a fine business model, but it&apos;s a terrible career
                partner.
              </p>
              <p className="m-0 text-[16px] leading-[1.75] text-body">
                So we built the firm we&apos;d have wanted in those moments. One
                that takes time to understand strengths, aspirations, and
                constraints. One that re-writes your story before sending it
                anywhere. One that you can call when an offer feels wrong.
              </p>
              <Rich
                as="p"
                html={"Today, we're a <em>trusted partner</em> for professionals and the companies that hire them — and we're still small enough to know everyone by name."}
                className="m-0 text-[16px] leading-[1.75] text-body"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values marquee */}
      <div className="overflow-hidden border-y border-line-nav bg-navy">
        <div className="marquee-track flex w-max py-[18px]">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((m, i) => (
            <span
              key={`${m}-${i}`}
              aria-hidden={i >= MARQUEE.length}
              className="flex items-center gap-7 whitespace-nowrap px-7"
            >
              <span className="text-[15px] font-bold uppercase tracking-[0.08em] text-white/85">
                {m}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold opacity-80" />
            </span>
          ))}
        </div>
      </div>

      {/* Team */}
      <section className="py-[104px]">
        <Container>
          <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-x-[60px] gap-y-6">
            <div>
              <Eyebrow>The team</Eyebrow>
              <Rich
                as="h2"
                html={"The three<br>behind <em>the work</em>."}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(34px,3.6vw,52px)", lineHeight: 1.1 }}
              />
            </div>
            <p className="m-0 max-w-[420px] text-[15.5px] leading-[1.7] text-muted">
              Expert career coaches and recruiters dedicated to your professional
              success. Each of us has sat in a candidate&apos;s chair — and we
              don&apos;t forget it.
            </p>
          </Reveal>

          <Stagger className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((p) => (
              <Item
                key={p.name}
                className="h-full rounded-2xl border border-line-card bg-white p-9 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-dark hover:shadow-card-lg"
              >
                <div className="relative mx-auto h-[172px] w-[172px] overflow-hidden rounded-full ring-1 ring-line-card">
                  {p.photo ? (
                    <Image
                      src={p.photo}
                      alt={`${p.name} — ${p.role}, Velora Careers`}
                      fill
                      sizes="172px"
                      className={`object-cover ${p.imgClass ?? "object-center"}`}
                    />
                  ) : (
                    <div className="relative flex h-full w-full items-center justify-center bg-navy">
                      <LogoMark
                        size={150}
                        className="absolute -right-8 -top-8 text-white"
                        style={{ opacity: 0.08 }}
                      />
                      <span className="relative text-[46px] font-extrabold tracking-[-0.02em] text-gold">
                        {initials(p.name)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-6 font-mono text-[10.5px] font-semibold uppercase tracking-[0.15em] text-gold-dark">
                  {p.role}
                </div>
                <h3 className="mt-2 text-[22px] font-bold text-ink">{p.name}</h3>
                <p className="mx-auto mt-2.5 max-w-[320px] text-[13.5px] leading-[1.6] text-muted">
                  {p.bio}
                </p>
              </Item>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Values */}
      <section className="pb-[104px]">
        <Container>
          <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-x-[60px] gap-y-6">
            <div>
              <Eyebrow>Core values</Eyebrow>
              <Rich
                as="h2"
                html={"Four principles<br>that <em>don't bend</em>."}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(34px,3.6vw,52px)", lineHeight: 1.1 }}
              />
            </div>
            <p className="m-0 max-w-[420px] text-[15.5px] leading-[1.7] text-muted">
              We use these to make every hard call — whether to take a client,
              push back on an offer, or stay late to fix a resume.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <Item
                key={v.n}
                className="h-full rounded-2xl border border-line-card bg-white p-[30px] shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-dark hover:shadow-card-lg"
              >
                <div className="font-mono text-[12px] font-semibold tracking-[0.1em] text-gold-dark">
                  {v.n}
                </div>
                <h3 className="mt-4 text-[22px] font-bold leading-[1.25] tracking-[-0.01em] text-ink">
                  {v.h}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-muted">{v.p}</p>
              </Item>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection
        heading={"Let's design the<br>next chapter <em>together</em>."}
        maxCh={18}
        headingSize="clamp(36px,4.6vw,66px)"
        primary={{ label: "Get started today", href: "/contact" }}
        secondary={{ label: "Browse services", href: "/services/it-staffing" }}
      />
    </>
  );
}
