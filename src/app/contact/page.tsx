import type { Metadata } from "next";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { Container, Eyebrow, Rich } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { Reveal, ParallaxWatermark } from "@/components/motion";
import { EVerifyBadge } from "@/components/everify-badge";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "Contact Velora Careers",
  description:
    "Tell us about your career goals and we'll route you to the right coach — reply within 24 hours. Email info@veloracareers.com or call +1 (908) 491-3002.",
  path: "/contact",
  keywords: ["contact Velora", "career consultation", "book intake call"],
});

function InfoBlock({
  label,
  children,
  note,
}: {
  label: string;
  children: React.ReactNode;
  note?: string;
}) {
  return (
    <div>
      <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">
        {label}
      </div>
      <div className="mt-2.5 text-[22px] font-bold leading-[1.35] text-ink">
        {children}
      </div>
      {note ? <div className="mt-1.5 text-[13px] text-faint">{note}</div> : null}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <header className="relative overflow-hidden bg-navy">
        <ParallaxWatermark size={640} className="-right-[170px] -top-[150px]" />
        <Container className="relative pb-[92px] pt-[100px]">
          <Reveal>
            <Eyebrow tone="gold" className="tracking-[0.18em]">
              Contact · Always open
            </Eyebrow>
            <Rich
              as="h1"
              tone="dark"
              html={"Thank you<br>for your <em>interest</em>."}
              className="mt-[26px] font-extrabold tracking-[-0.025em] text-white"
              style={{ fontSize: "clamp(44px,5vw,74px)", lineHeight: 1.04 }}
            />
            <p className="mt-7 max-w-[620px] text-[16.5px] leading-[1.7] text-white/[0.72]">
              Fill the form below and we&apos;ll get back to you within 24 hours.
              Need help with your career journey? We&apos;re here to guide you — our
              team specializes in career transformation and IT recruitment.
            </p>
          </Reveal>
        </Container>
      </header>

      <section className="pb-[104px] pt-24">
        <Container>
          <div className="grid items-start gap-[72px] lg:grid-cols-[1fr_1.4fr]">
            <Reveal className="flex flex-col gap-10">
              <InfoBlock label="Email here" note="Reply within 24 hours">
                <a href={`mailto:${site.email}`} className="no-underline">
                  info@<em className="italic text-gold-dark">veloracareers</em>.com
                </a>
              </InfoBlock>
              <InfoBlock label="Call here" note="Mon–Fri, 9am – 6pm EST">
                <a href={`tel:${site.phoneHref}`} className="no-underline">
                  +1 (908) <em className="italic text-gold-dark">491-3002</em>
                </a>
              </InfoBlock>
              <div>
                <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">
                  Our location
                </div>
                <div className="mt-2.5 text-[22px] font-bold leading-[1.35] text-ink">
                  971 US Hwy 202N, STE R
                  <br />
                  Branchburg, <em className="italic text-gold-dark">NJ 08876</em>
                </div>
                <div className="mt-1.5 text-[13px] text-faint">United States</div>
              </div>
              <div>
                <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">
                  Office hours
                </div>
                <div className="mt-2.5 text-[22px] font-bold leading-[1.35] text-ink">
                  Always open for
                  <br />
                  <em className="italic text-gold-dark">career opportunities</em>.
                </div>
              </div>
              <div>
                <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">
                  Compliance
                </div>
                <EVerifyBadge
                  className="mt-3.5"
                  caption="Velora Careers participates in E-Verify to confirm employment eligibility."
                />
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
