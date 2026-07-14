import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import { getRole, roleSlugs } from "@/data/roles";
import { pageMetadata, plainText } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import {
  Container,
  Eyebrow,
  Rich,
  Button,
  CheckList,
  CodeCard,
  Watermark,
} from "@/components/ui";
import { CTASection } from "@/components/cta-section";
import { Reveal, Stagger, Item, ParallaxWatermark } from "@/components/motion";
import { JsonLd } from "@/components/json-ld";
import { Check } from "@/components/icons";

export function generateStaticParams() {
  return roleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) return {};
  return pageMetadata({
    title: `${role.title} Jobs & Placement`,
    description: role.metaDescription,
    path: `/roles/${slug}`,
    keywords: [role.title, `${role.title} jobs`, `${role.title} recruiter`],
  });
}

export default async function RolePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Top IT Roles", path: "/roles" },
            { name: role.title, path: `/roles/${slug}` },
          ]),
          serviceSchema({
            name: `${role.title} Placement`,
            description: plainText(role.lead),
            path: `/roles/${slug}`,
            serviceType: "IT staffing",
          }),
        ]}
      />

      {/* Hero */}
      <header className="relative overflow-hidden bg-navy">
        <ParallaxWatermark size={680} className="-right-[180px] -top-[160px]" />
        <Container className="relative py-[88px]">
          <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <nav
                aria-label="Breadcrumb"
                className="mb-[22px] flex flex-wrap gap-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white/50"
              >
                <Link href="/" className="text-white/50 no-underline hover:text-white">
                  Home
                </Link>
                <span>/</span>
                <Link href="/roles" className="text-white/50 no-underline hover:text-white">
                  Top IT Roles
                </Link>
                <span>/</span>
                <span className="text-white">{role.title}</span>
              </nav>

              <span className="inline-flex items-center gap-2.5 rounded-full border border-gold px-[15px] py-[7px] font-mono text-[11px] uppercase tracking-[0.14em] text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {role.badge}
              </span>

              <Rich
                as="h1"
                tone="dark"
                html={role.h1}
                className="mt-6 font-extrabold tracking-[-0.025em] text-white"
                style={{ fontSize: "clamp(40px,4.4vw,64px)", lineHeight: 1.04 }}
              />
              <p className="mt-6 max-w-[520px] text-[16px] leading-[1.7] text-white/[0.72]">
                {role.lead}
              </p>

              <div className="mt-[30px] flex flex-wrap gap-x-[26px] gap-y-3 font-mono text-[12px] text-white/60">
                {role.trust.map((t) => (
                  <span key={t} className="inline-flex items-center gap-2">
                    <span className="text-gold">
                      <Check />
                    </span>
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-[14px]">
                <Button href="/contact" variant="solidLight" arrow>
                  Schedule a Call
                </Button>
                <Button href="/about" variant="outlineLight">
                  Learn More
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="flex flex-col gap-[22px]">
              <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/[0.14] bg-white/5">
                {role.heroStats.map((s, i) => (
                  <div
                    key={s.l}
                    className={`px-[22px] py-5 ${i > 0 ? "border-l border-white/[0.12]" : ""}`}
                  >
                    <div className="whitespace-nowrap text-[24px] font-extrabold leading-none text-white">
                      {s.v}
                    </div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/55">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              <CodeCard
                file={role.code.file}
                lang={role.code.lang}
                code={role.code.body}
                footer={
                  <div className="flex flex-wrap items-center gap-x-[14px] gap-y-1.5 px-5 py-[14px] font-mono text-[11px] uppercase tracking-[0.1em] text-white/50">
                    <span>Highest vacancies in</span>
                    {role.cities.map((c, i) => (
                      <span key={c} className="flex items-center gap-[14px]">
                        {i > 0 ? <span className="text-white/30">·</span> : null}
                        <span className="text-[12px] normal-case tracking-[0.04em] text-gold">
                          {c}
                        </span>
                      </span>
                    ))}
                  </div>
                }
              />
            </Reveal>
          </div>
        </Container>
      </header>

      {/* Market */}
      <section className="py-24">
        <Container>
          <Reveal className="mb-[52px] flex flex-wrap items-end justify-between gap-x-[60px] gap-y-6">
            <div>
              <Eyebrow>{role.market.eyebrow}</Eyebrow>
              <Rich
                as="h2"
                html={role.market.h2}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(32px,3.4vw,48px)", lineHeight: 1.12 }}
              />
            </div>
            <p className="m-0 max-w-[420px] text-[15.5px] leading-[1.7] text-muted">
              {role.market.desc}
            </p>
          </Reveal>

          <Stagger
            className="grid grid-cols-1 border-l border-t border-[#d9d2c4] sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.07}
          >
            {role.bigStats.map((s, i) => (
              <Item
                key={s.l}
                className="h-full border-b border-r border-[#d9d2c4] px-7 py-[34px]"
              >
                <div
                  className={
                    i === 3
                      ? "text-[19px] font-extrabold leading-[1.4] text-ink"
                      : `text-[42px] font-extrabold leading-none ${
                          i === 0 ? "text-gold-dark" : "text-ink"
                        }`
                  }
                >
                  {s.v}
                </div>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                  {s.l}
                </div>
              </Item>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Key skills */}
      <section className="pb-[104px]">
        <Container>
          <div className="grid items-start gap-[72px] lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <Eyebrow>Key skills</Eyebrow>
              <Rich
                as="h2"
                html={role.whyH2}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(32px,3.4vw,48px)", lineHeight: 1.12 }}
              />
              <p className="mt-6 max-w-[500px] text-[15px] leading-[1.75] text-body">
                {role.whyP}
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="solidNavy" arrow>
                  Book intake call
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <CheckList items={role.skills} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Path ahead */}
      <section className="pb-[104px]">
        <Container>
          <div className="grid items-start gap-[72px] lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <Eyebrow>The path ahead</Eyebrow>
              <Rich
                as="h2"
                html={"We integrate, you <em>accelerate</em>."}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(32px,3.4vw,48px)", lineHeight: 1.12 }}
              />
              <p className="mt-6 max-w-[520px] text-[15px] leading-[1.75] text-body">
                We continuously enhance our services by integrating new
                technologies and methodologies — so both candidates and clients
                achieve their objectives through a seamless and rewarding
                placement process.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="relative overflow-hidden rounded-[18px] bg-navy p-[34px]">
              <Watermark size={300} className="-bottom-[100px] -right-[90px]" />
              <div className="relative">
                <div className="mb-[22px] font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
                  Get started today
                </div>
                <div className="font-mono text-[13px] leading-[1.9] text-white/85">
                  {site.address.street}
                  <br />
                  {site.address.locality} {site.address.region}{" "}
                  {site.address.postalCode}, USA
                  <br />
                  <br />
                  {site.email}
                  <br />
                  {site.phone}
                  <br />
                  Mon–Fri, 9am – 6pm
                </div>
                <div className="mt-[30px]">
                  <Button href="/contact" variant="solidLight" arrow>
                    Schedule a Call
                  </Button>
                </div>
                <div className="mt-[30px] grid gap-2.5 border-t border-white/[0.14] pt-6 font-mono text-[12px] text-white/60">
                  <div className="text-[11px] tracking-[0.15em] text-gold">
                    / WHY CHOOSE VELORA?
                  </div>
                  {["98% Success Rate", "500+ Happy Clients", "8+ Years Experience"].map(
                    (t) => (
                      <div key={t} className="flex items-center gap-2">
                        <span className="text-gold">
                          <Check />
                        </span>
                        {t}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection
        heading={role.ctaH2}
        primary={{ label: "Get started today", href: "/contact" }}
        secondary={{ label: "Browse all tracks", href: "/roles" }}
      />
    </>
  );
}
