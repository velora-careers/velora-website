/**
 * Global site configuration — brand, contact, and navigation model.
 * Single source of truth for the header, footer, JSON-LD, and SEO.
 */

export const site = {
  name: "Velora Careers",
  shortName: "Velora",
  domain: "veloracareers.com",
  url: "https://veloracareers.com",
  tagline: "Your trusted partner in IT staffing excellence.",
  description:
    "Velora Careers is a career studio for IT talent. We rewrite resumes, reshape LinkedIn, coach interviews, and place candidates directly with verified employers — without the recruiter spam.",
  founded: "2018",
  keywords: [
    "IT staffing",
    "tech recruiting",
    "career coaching",
    "resume makeover",
    "LinkedIn optimization",
    "interview coaching",
    "offer negotiation",
    "IT recruitment agency",
    "tech jobs",
  ],
  email: "info@veloracareers.com",
  phone: "+1 (908) 491-3002",
  phoneHref: "+19084913002",
  hours: "Mon–Fri, 9am – 6pm EST",
  address: {
    street: "971 US Hwy 202N, STE R",
    locality: "Branchburg",
    region: "NJ",
    postalCode: "08876",
    country: "US",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/velora-careers",
  },
  stats: {
    careers: 500,
    success: 95,
    rating: 4.9,
    partners: 50,
  },
} as const;

export type NavLink = { label: string; slug: string; href: string };

const link = (base: string) => (slug: string, label: string): NavLink => ({
  label,
  slug,
  href: `${base}/${slug}`,
});

const svc = link("/services");
const exp = link("/expertise");
const role = link("/roles");

export const nav = {
  services: [
    svc("it-staffing", "IT Staffing"),
    svc("permanent", "Permanent Staffing"),
    svc("contract", "Contract Staffing"),
    svc("rpo", "RPO Services"),
    svc("executive-search", "Executive Search"),
  ] satisfies NavLink[],
  expertise: [
    exp("resume", "Resume Makeover"),
    exp("linkedin", "LinkedIn Profile Boost"),
    exp("interview-coaching", "Interview Coaching"),
    exp("offer-negotiation", "Offer Negotiation"),
    exp("career-transition", "Career Transition Help"),
    exp("onboarding-guidance", "Onboarding Guidance"),
    exp("ongoing-mentorship", "Ongoing Career Mentorship"),
  ] satisfies NavLink[],
  roles: [
    role("ai-ml-engineer", "AI / ML Engineer"),
    role("software-engineer", "Software Engineer"),
    role("data-scientist", "Data Scientist"),
    role("cloud-engineer", "Cloud Engineer"),
    role("python-developer", "Python Developer"),
    role("devops-engineer", "DevOps Engineer"),
    role("site-reliability-engineer", "Site Reliability Engineer"),
    role("cyber-security", "Cyber Security"),
    role("full-stack-developer", "Full Stack Developer"),
    role("mobile-developer", "Mobile Developer"),
    role("java-developer", "Java Developer"),
    role("business-analyst", "Business Analyst"),
    role("data-analyst", "Data Analyst"),
  ] satisfies NavLink[],
} as const;
