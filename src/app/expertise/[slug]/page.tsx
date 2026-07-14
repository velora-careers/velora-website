import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getExpertise, expertiseSlugs } from "@/data/expertise";
import { pageMetadata, plainText } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import {
  Container,
  Eyebrow,
  Rich,
  Button,
  CheckList,
  CodeCard,
} from "@/components/ui";
import { CTASection } from "@/components/cta-section";
import { Reveal, Stagger, Item, ParallaxWatermark } from "@/components/motion";
import { JsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return expertiseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getExpertise(slug);
  if (!item) return {};
  return pageMetadata({
    title: item.title,
    description: item.metaDescription,
    path: `/expertise/${slug}`,
    keywords: [item.title, "career service", "career coaching"],
  });
}

export default async function ExpertisePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getExpertise(slug);
  if (!item) notFound();

  const [included, process, testimonials, faq] = item.secHeads;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: item.title, path: `/expertise/${slug}` },
          ]),
          serviceSchema({
            name: item.title,
            description: plainText(item.lead),
            path: `/expertise/${slug}`,
            serviceType: "Career coaching",
          }),
          faqSchema(item.faq),
        ]}
      />

      {/* Hero */}
      <header className="relative overflow-hidden bg-navy">
        <ParallaxWatermark size={680} className="-right-[180px] -top-[160px]" />
        <Container className="relative py-[88px]">
          <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_1fr]">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-gold px-[15px] py-[7px] font-mono text-[11px] uppercase tracking-[0.14em] text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {item.tag}
              </span>
              <Rich
                as="h1"
                tone="dark"
                html={item.h1}
                className="mt-6 font-extrabold tracking-[-0.025em] text-white"
                style={{ fontSize: "clamp(42px,4.8vw,68px)", lineHeight: 1.04 }}
              />
              <div className="mt-5 text-[20px] font-semibold text-white/[0.92]">
                {item.subtitle}
              </div>
              <p className="mt-[18px] max-w-[540px] text-[16px] leading-[1.7] text-white/[0.72]">
                {item.lead}
              </p>
              <div className="mt-[34px] flex flex-wrap gap-[14px]">
                <Button href="/contact" variant="solidLight" arrow>
                  {item.actions[0]}
                </Button>
                <Button href="/contact" variant="outlineLight">
                  {item.actions[1]}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <CodeCard
                file={item.code.file}
                lang={item.code.lang}
                code={item.code.body}
                minHeight={110}
                footer={
                  <div className="grid grid-cols-3">
                    {item.metrics.map((m, i) => (
                      <div
                        key={m.l}
                        className={`px-[18px] py-4 ${i > 0 ? "border-l border-white/10" : ""}`}
                      >
                        <div className="whitespace-nowrap text-[19px] font-bold text-white">
                          {m.v}
                        </div>
                        <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.09em] text-white/50">
                          {m.l}
                        </div>
                      </div>
                    ))}
                  </div>
                }
              />
            </Reveal>
          </div>
        </Container>
      </header>

      {/* Why */}
      <section className="py-24">
        <Container>
          <div className="grid items-start gap-[72px] lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <Eyebrow>Why</Eyebrow>
              <Rich
                as="h2"
                html={item.whyH2}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(32px,3.4vw,48px)", lineHeight: 1.12 }}
              />
              <p className="mt-6 max-w-[500px] text-[15px] leading-[1.75] text-body">
                {item.whyP}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <CheckList items={item.checks} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Included */}
      <section className="pb-24">
        <Container>
          <Reveal className="mb-[52px] flex flex-wrap items-end justify-between gap-x-[60px] gap-y-6">
            <div>
              <Eyebrow>{included.eyebrow}</Eyebrow>
              <Rich
                as="h2"
                html={included.h2}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(32px,3.4vw,48px)", lineHeight: 1.12 }}
              />
            </div>
            <p className="m-0 max-w-[420px] text-[15.5px] leading-[1.7] text-muted">
              {included.desc}
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {item.tiles.map((t) => (
              <Item
                key={t.n}
                className="h-full rounded-2xl border border-line-card bg-white p-7 shadow-card transition-colors hover:border-gold-dark"
              >
                <div className="font-mono text-[12px] font-semibold tracking-[0.1em] text-gold-dark">
                  {t.n}
                </div>
                <h3 className="mt-3.5 text-[19px] font-bold text-ink">{t.h}</h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.6] text-muted">{t.p}</p>
              </Item>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Process */}
      <section className="pb-24">
        <Container>
          <Reveal className="mb-[52px] flex flex-wrap items-end justify-between gap-x-[60px] gap-y-6">
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
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {item.steps.map((s) => (
              <Item key={s.num} className="border-t-2 border-navy pt-[18px]">
                <div className="font-mono text-[11px] font-semibold tracking-[0.13em] text-gold-dark">
                  {s.num}
                </div>
                <h3 className="mt-3 text-[18px] font-bold text-ink">{s.h}</h3>
                <p className="mt-2.5 text-[13px] leading-[1.6] text-muted">{s.p}</p>
              </Item>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="pb-24">
        <Container>
          <Reveal className="mb-[52px] flex flex-wrap items-end justify-between gap-x-[60px] gap-y-6">
            <div>
              <Eyebrow>{testimonials.eyebrow}</Eyebrow>
              <Rich
                as="h2"
                html={testimonials.h2}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(32px,3.4vw,48px)", lineHeight: 1.12 }}
              />
            </div>
            <p className="m-0 max-w-[420px] text-[15.5px] leading-[1.7] text-muted">
              {testimonials.desc}
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {item.quotes.map((q) => (
              <Item
                key={q.a}
                className="grid h-full grid-rows-[1fr_auto] gap-[22px] rounded-2xl border border-line-card bg-white p-[30px] shadow-card"
              >
                <p className="m-0 text-[15px] font-medium leading-[1.7] text-ink-700">
                  {q.p}
                </p>
                <div className="border-t border-line-hair pt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                  {q.a}
                </div>
              </Item>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* FAQ */}
      <section className="pb-[104px]">
        <Container>
          <Reveal className="mb-[52px] flex flex-wrap items-end justify-between gap-x-[60px] gap-y-6">
            <div>
              <Eyebrow>{faq.eyebrow}</Eyebrow>
              <Rich
                as="h2"
                html={faq.h2}
                className="mt-4 font-bold tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(32px,3.4vw,48px)", lineHeight: 1.12 }}
              />
            </div>
            <p className="m-0 max-w-[420px] text-[15.5px] leading-[1.7] text-muted">
              {faq.desc}
            </p>
          </Reveal>
          <Stagger className="grid max-w-[860px] gap-3.5" stagger={0.06}>
            {item.faq.map((f) => (
              <Item key={f.q}>
                <details className="overflow-hidden rounded-[14px] border border-line-card bg-white [&_summary::-webkit-details-marker]:hidden">
                  <summary className="cursor-pointer list-inside px-6 py-[19px] text-[15px] font-semibold text-ink">
                    {f.q}
                  </summary>
                  <div className="px-6 pb-5 text-[14px] leading-[1.7] text-muted">
                    {f.a}
                  </div>
                </details>
              </Item>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection
        heading={item.ctaH2}
        primary={{ label: "Get started today", href: "/contact" }}
        secondary={{ label: "Learn about us", href: "/about" }}
      />
    </>
  );
}
