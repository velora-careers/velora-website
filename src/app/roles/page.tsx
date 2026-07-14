import type { Metadata } from "next";
import { pageMetadata, absoluteUrl } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { roleList } from "@/data/roles";
import { Container, Eyebrow, Rich } from "@/components/ui";
import { CTASection } from "@/components/cta-section";
import { RolesExplorer, type ExplorerRole } from "@/components/roles-explorer";
import { Reveal, ParallaxWatermark } from "@/components/motion";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "Top IT Roles — 13 Career Tracks",
  description:
    "Explore 13 specialized IT role tracks — software, data, cloud, security, and more. Each track has dedicated coaches, employer partners, and a vetted question bank.",
  path: "/roles",
  keywords: ["IT roles", "tech job tracks", "software engineer jobs", "data scientist jobs"],
});

export default function RolesPage() {
  const explorerRoles: ExplorerRole[] = roleList.map((r) => ({
    slug: r.slug,
    name: r.title,
    category: r.category,
    openings: r.openings,
    pay: r.pay,
    topCities: r.topCities,
    href: `/roles/${r.slug}`,
  }));

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Velora Careers — IT role tracks",
    itemListElement: roleList.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.title,
      url: absoluteUrl(`/roles/${r.slug}`),
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Top IT Roles", path: "/roles" },
          ]),
          itemList,
        ]}
      />

      <header className="relative overflow-hidden bg-navy">
        <ParallaxWatermark size={640} className="-right-[170px] -top-[150px]" />
        <Container className="relative pb-[92px] pt-[100px]">
          <Reveal>
            <Eyebrow tone="gold" className="tracking-[0.18em]">
              Top IT roles · 320,000+ openings this quarter
            </Eyebrow>
            <Rich
              as="h1"
              tone="dark"
              html={"Thirteen tracks.<br><em>One career studio.</em>"}
              className="mt-[26px] font-extrabold tracking-[-0.025em] text-white"
              style={{ fontSize: "clamp(44px,5vw,74px)", lineHeight: 1.04 }}
            />
            <p className="mt-7 max-w-[600px] text-[16.5px] leading-[1.7] text-white/[0.72]">
              Pick the track that fits your story. Each role has dedicated coaches,
              employer partners, and a vetted interview question bank.
            </p>
          </Reveal>
        </Container>
      </header>

      <section className="pb-[104px] pt-[72px]">
        <Container>
          <Reveal>
            <RolesExplorer roles={explorerRoles} />
          </Reveal>
        </Container>
      </section>

      <CTASection
        eyebrow="Can't decide?"
        heading={"Tell us your story.<br><em>We'll suggest the track.</em>"}
        headingSize="clamp(34px,4.4vw,62px)"
        primary={{ label: "Book an intake call", href: "/contact" }}
        secondary={{ label: "Browse services", href: "/services/it-staffing" }}
      />
    </>
  );
}
