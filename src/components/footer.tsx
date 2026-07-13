import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui";
import { LogoMark } from "@/components/logo";

type FooterLink = { label: string; href: string };

const company: FooterLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/about" },
  { label: "Our Team", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const expertise: FooterLink[] = [
  { label: "Resume Makeover", href: "/expertise/resume" },
  { label: "LinkedIn Boost", href: "/expertise/linkedin" },
  { label: "Interview Coaching", href: "/expertise/interview-coaching" },
  { label: "Offer Negotiation", href: "/expertise/offer-negotiation" },
  { label: "Career Transition", href: "/expertise/career-transition" },
  { label: "Onboarding", href: "/expertise/onboarding-guidance" },
  { label: "Mentorship", href: "/expertise/ongoing-mentorship" },
];

const resources: FooterLink[] = [
  { label: "All Services", href: "/services/it-staffing" },
  { label: "Top IT Roles", href: "/roles" },
  { label: "Contact Us", href: "/contact" },
];

function Column({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-gold">
        {title}
      </div>
      <div className="flex flex-col items-start gap-3">
        {links.map((l, i) => (
          <Link
            key={`${l.href}-${i}`}
            href={l.href}
            className="text-[13.5px] text-white/80 no-underline transition-colors hover:text-white"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  const addr = site.address;
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <LogoMark
        size={620}
        className="pointer-events-none absolute -right-[160px] -bottom-[180px] text-white"
        style={{ opacity: 0.045 }}
      />
      <Container className="relative pt-[76px]">
        <div className="grid grid-cols-1 gap-14 pb-16 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1.2fr_1fr]">
          <div className="flex flex-col items-start gap-[22px]">
            <Link
              href="/"
              aria-label="Velora Careers — home"
              className="flex items-center gap-3 no-underline"
            >
              <LogoMark size={44} className="block text-white" />
              <span className="flex flex-col gap-1">
                <span className="text-[18px] font-bold leading-none tracking-[0.05em] text-white">
                  VELORA
                </span>
                <span className="text-[8.5px] font-semibold leading-none tracking-[0.42em] text-white opacity-[0.72]">
                  CAREERS
                </span>
              </span>
            </Link>
            <p className="m-0 max-w-[320px] text-[14px] leading-[1.65] text-white/[0.66]">
              Your trusted partner in IT career excellence. We connect candidates
              with verified employers — without the spam.
            </p>
            <div className="font-mono text-[12.5px] leading-[1.9] text-white/[0.78]">
              <a href={`mailto:${site.email}`} className="text-white/[0.78] no-underline hover:text-white">
                {site.email}
              </a>
              <br />
              <a href={`tel:${site.phoneHref}`} className="text-white/[0.78] no-underline hover:text-white">
                {site.phone}
              </a>
              <br />
              {addr.street}, {addr.locality} {addr.region}
            </div>
          </div>

          <Column title="Company" links={company} />
          <Column title="Expertise" links={expertise} />
          <Column title="Resources" links={resources} />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/[0.14] py-6 pb-7">
          <div className="font-mono text-[11.5px] text-white/50">
            © 2026 Velora Careers. Built for candidates.
          </div>
          <div className="font-mono text-[11.5px] text-white/50">{site.domain}</div>
        </div>
      </Container>
    </footer>
  );
}
