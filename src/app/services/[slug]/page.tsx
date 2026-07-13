import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, serviceSlugs, serviceList } from "@/data/services";
import { pageMetadata, plainText } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import {
  Container,
  Eyebrow,
  Rich,
  Button,
  CheckList,
  Watermark,
} from "@/components/ui";
import { CTASection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { ArrowRight } from "@/components/icons";
import { cn } from "@/lib/cn";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.name,
    description: service.metaDescription,
    path: `/services/${slug}`,
    keywords: [service.name, "staffing", "recruiting"],
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const [coverage, process, industries, benefits] = service.secHeads;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: service.name, path: `/services/${slug}` },
          ]),
          serviceSchema({
            name: service.name,
            description: plainText(service.lead),
            path: `/services/${slug}`,
            serviceType: "Staffing & recruiting",
          }),
        ]}
      />

      {/* Hero */}
      <header className="relative overflow-hidden bg-navy">
        <Watermark size={680} className="-right-[180px] -top-[160px]" />
        <Container className="relative py-[92px]">
          <div className="grid items-center gap-[72px] lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Eyebrow tone="gold" className="tracking-[0.18em]">
                {service.eyebrow}
              </Eyebrow>
              <Rich
                as="h1"
                tone="dark"
                html={service.h1}
                className="mt-6 font-extrabold tracking-[-0.025em] text-white"
                style={{ fontSize: "clamp(42px,4.8vw,70px)", lineHeight: 1.04 }}
              />
              <p className="mt-[26px] max-w-[540px] text-[16.5px] leading-[1.7] text-white/[0.72]">
                {service.lead}
              </p>
              <div className="mt-[34px] flex flex-wrap gap-[14px]">
                <Button href={service.actions[0].href} variant="solidLight" arrow>
                  {service.actions[0].label}
                </Button>
                <Button href={service.actions[1].href} variant="outlineLight">
                  {service.actions[1].label}
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[18px] border border-white/[0.14] bg-white/5">
              <div className="flex items-center gap-2.5 border-b border-white/[0.12] px-[26px] py-4 font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/60">
                <span className="h-[7px] w-[7px] rounded-full bg-gold" />
                {service.metricsHead}
              </div>
              {service.metrics.map((m, i) => (
                <div
                  key={m.l}
                  className={cn(
                    "px-[26px] py-[22px]",
                    i > 0 && "border-t border-white/[0.12]",
                  )}
                >
                  <div className="text-[34px] font-extrabold leading-none text-white">
                    {m.v}
                  </div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-white/55">
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </header>

      {/* Service sub-nav */}
      <div className="flex flex-wrap border-b border-line-nav">
        {serviceList.map((s) => {
          const active = s.slug === service.slug;
          return (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={cn(
                "flex flex-1 items-center justify-center gap-1.5 border-r border-line-nav px-[22px] py-[17px] text-center font-mono text-[11.5px] uppercase tracking-[0.12em] no-underline",
                active
                  ? "bg-white font-bold text-gold-dark"
                  : "text-[#3c4a63] hover:bg-white/60 hover:text-navy",
              )}
              style={{ minWidth: 150 }}
            >
              {s.title}
              {active ? <ArrowRight className="flex-none" /> : null}
            </Link>
          );
        })}
      </div>

      {/* Why */}
      <section className="py-24">
        <Container>
          <div className="grid items-start gap-[72px] lg:grid-cols-[1fr_1.1fr]">
            <div>
              <Eyebrow>Why us</Eyebrow>
              <Rich
                as="h2"
                html={service.whyH2}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(32px,3.4vw,48px)", lineHeight: 1.12 }}
              />
              <p className="mt-6 max-w-[500px] text-[15px] leading-[1.75] text-body">
                {service.whyP}
              </p>
            </div>
            <CheckList items={service.checks} />
          </div>
        </Container>
      </section>

      {/* Coverage */}
      <section className="pb-24">
        <Container>
          <div className="mb-[52px] flex flex-wrap items-end justify-between gap-x-[60px] gap-y-6">
            <div>
              <Eyebrow>{coverage.eyebrow}</Eyebrow>
              <Rich
                as="h2"
                html={coverage.h2}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(32px,3.4vw,48px)", lineHeight: 1.12 }}
              />
            </div>
            <p className="m-0 max-w-[420px] text-[15.5px] leading-[1.7] text-muted">
              {coverage.desc}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {service.expTiles.map((t) => (
              <div
                key={t.n}
                className="rounded-2xl border border-line-card bg-white p-7 shadow-card transition-colors hover:border-gold-dark"
              >
                <div className="font-mono text-[12px] font-semibold tracking-[0.1em] text-gold-dark">
                  {t.n}
                </div>
                <h3 className="mt-3.5 text-[19px] font-bold text-ink">{t.h}</h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.6] text-muted">{t.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="pb-24">
        <Container>
          <div className="mb-[52px] flex flex-wrap items-end justify-between gap-x-[60px] gap-y-6">
            <div>
              <Eyebrow>{process.eyebrow}</Eyebrow>
              <Rich
                as="h2"
                html={process.h2}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(32px,3.4vw,48px)", lineHeight: 1.12 }}
              />
            </div>
            <p className="m-0 max-w-[420px] text-[15.5px] leading-[1.7] text-muted">
              {process.desc}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {service.steps.map((s) => (
              <div key={s.num} className="border-t-2 border-navy pt-[18px]">
                <div className="font-mono text-[11px] font-semibold tracking-[0.13em] text-gold-dark">
                  {s.num}
                </div>
                <h3 className="mt-3 text-[18px] font-bold text-ink">{s.h}</h3>
                <p className="mt-2.5 text-[13px] leading-[1.6] text-muted">{s.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="pb-24">
        <Container>
          <div className="mb-[52px] flex flex-wrap items-end justify-between gap-x-[60px] gap-y-6">
            <div>
              <Eyebrow>{industries.eyebrow}</Eyebrow>
              <Rich
                as="h2"
                html={industries.h2}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(32px,3.4vw,48px)", lineHeight: 1.12 }}
              />
            </div>
            <p className="m-0 max-w-[420px] text-[15.5px] leading-[1.7] text-muted">
              {industries.desc}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {service.chips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-[#ccc4b4] px-[22px] py-3 text-[13px] font-semibold text-[#3c4a63]"
              >
                {c}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="pb-[104px]">
        <Container>
          <div className="mb-[52px] flex flex-wrap items-end justify-between gap-x-[60px] gap-y-6">
            <div>
              <Eyebrow>{benefits.eyebrow}</Eyebrow>
              <Rich
                as="h2"
                html={benefits.h2}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(32px,3.4vw,48px)", lineHeight: 1.12 }}
              />
            </div>
            <p className="m-0 max-w-[420px] text-[15.5px] leading-[1.7] text-muted">
              {benefits.desc}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((b) => (
              <div
                key={b.n}
                className="rounded-2xl border border-line-card bg-white p-7 shadow-card transition-colors hover:border-gold-dark"
              >
                <div className="text-[26px] font-extrabold text-gold-dark opacity-85">
                  {b.n}
                </div>
                <h3 className="mt-3.5 text-[18px] font-bold text-ink">{b.h}</h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.6] text-muted">{b.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading={service.ctaH2}
        primary={{ label: "Get started today", href: "/contact" }}
        secondary={{ label: "Learn about us", href: "/about" }}
      />
    </>
  );
}
