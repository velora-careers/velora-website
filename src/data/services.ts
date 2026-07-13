/** Services (staffing offerings) — 5 template-driven pages. */
import type { Metric, Tile, Step, SecHead } from "./expertise";

export type ServiceAction = { label: string; href: string };

export type Service = {
  slug: string;
  /** Short label used in copy (e.g. "IT Staffing"). */
  title: string;
  /** Full navigation name (e.g. "IT Staffing", "RPO Services"). */
  name: string;
  eyebrow: string;
  h1: string;
  lead: string;
  actions: [ServiceAction, ServiceAction];
  metricsHead: string;
  metrics: Metric[];
  whyH2: string;
  whyP: string;
  checks: string[];
  /** [0] coverage tiles, [1] process, [2] industries, [3] benefits */
  secHeads: [SecHead, SecHead, SecHead, SecHead];
  expTiles: Tile[];
  steps: Step[];
  chips: string[];
  benefits: Tile[];
  ctaH2: string;
  metaDescription: string;
};

export const services: Record<string, Service> = {
  "it-staffing": {
    slug: "it-staffing",
    title: "IT Staffing",
    name: "IT Staffing",
    eyebrow: "IT STAFFING · OVERVIEW",
    h1: "IT Staffing<br><em>built for tech.</em>",
    lead: "Software, data, cloud, security. We staff the roles modern teams rely on — and we know the difference between a Spring developer and a Java dev who can ship.",
    actions: [
      { label: "Find IT talent", href: "/contact" },
      { label: "Browse roles", href: "/roles" },
    ],
    metricsHead: "LIVE METRICS · LAST 90 DAYS",
    metrics: [
      { v: "98%", l: "Placement success" },
      { v: "30d", l: "Median time to hire" },
      { v: "500+", l: "Companies served" },
    ],
    whyH2: "Why <em>IT staffing</em> with Velora?",
    whyP: "We're engineers turned recruiters. We can read a stack, parse a JIRA history, and ask the questions that surface real seniority. That means fewer false positives in your funnel — and candidates who actually want the role you're offering.",
    checks: [
      "Engineer-led intake — we understand the stack before we source",
      "Verified technical screening with calibrated take-homes",
      "Salary-band research and market intelligence for every offer",
      "Anti-ghosting clause with every employer partnership",
      "Seamless onboarding and 30 / 60 / 90 day check-ins",
      "Replacement guarantee within first 90 days",
    ],
    secHeads: [
      { eyebrow: "EXPERTISE", h2: "What we <em>cover</em>.", desc: "Six core IT verticals where our coaches and employer partnerships run deepest." },
      { eyebrow: "PROCESS", h2: "Our <em>process</em>.", desc: "Five stages, with weekly written status updates for both candidate and client." },
      { eyebrow: "INDUSTRIES", h2: "Industries we <em>know cold</em>.", desc: "Sectors where we have deep employer networks and proven placement history." },
      { eyebrow: "BENEFITS", h2: "The <em>upside</em>.", desc: "Why companies and candidates stick with us." },
    ],
    expTiles: [
      { n: "/ 01", h: "Software & Web", p: "Frontend, backend, full-stack. React, Node, Go, Rails, Spring. Senior and lead positions." },
      { n: "/ 02", h: "Data & ML", p: "Analysts, scientists, engineers. SQL/Python/Spark, ML platforms, applied research." },
      { n: "/ 03", h: "Cloud & DevOps", p: "AWS, Azure, GCP. SRE, platform, infra-as-code, CI/CD architects." },
      { n: "/ 04", h: "Security", p: "AppSec, infrastructure security, GRC, IR. Cleared and uncleared." },
      { n: "/ 05", h: "Product & Design", p: "PMs, designers, design engineers. Series A through enterprise." },
      { n: "/ 06", h: "Specialty", p: "Embedded, blockchain, robotics, FPGA. The roles other recruiters skip." },
    ],
    steps: [
      { num: "STAGE 01", h: "Intake", p: "Engineer-led role analysis — stack, team shape, scope, comp band." },
      { num: "STAGE 02", h: "Sourcing", p: "Multi-channel: our roster, GitHub, conferences, warm referrals." },
      { num: "STAGE 03", h: "Screening", p: "Technical assessment, behavioral interview, culture-fit conversation." },
      { num: "STAGE 04", h: "Presentation", p: "Shortlist with full profiles, code samples, and our written take." },
      { num: "STAGE 05", h: "Offer & Start", p: "Negotiation, onboarding, 30/60/90 check-ins." },
    ],
    chips: ["Tech & SaaS", "Financial Services", "Healthcare", "Manufacturing", "Retail", "Energy", "Government"],
    benefits: [
      { n: "01", h: "Lower cost-per-hire", p: "Compared to in-house recruiting — we share the savings." },
      { n: "02", h: "Faster time-to-offer", p: "30-day median vs. industry average of 47." },
      { n: "03", h: "Higher 1-year retention", p: "85% of placements still in seat after a year." },
      { n: "04", h: "Specialist coaches", p: "Each track owned by someone with depth in it." },
      { n: "05", h: "Verified pipeline", p: "Every candidate's claims double-checked before they reach you." },
      { n: "06", h: "Salary intelligence", p: "We share market data instead of hoarding it." },
    ],
    ctaH2: "Let's discuss your<br><em>career goals</em>.",
    metaDescription:
      "Engineer-led IT staffing — verified technical screening, salary intelligence, and a 90-day replacement guarantee across software, data, cloud, and security.",
  },

  permanent: {
    slug: "permanent",
    title: "Permanent",
    name: "Permanent Staffing",
    eyebrow: "PERMANENT STAFFING",
    h1: "Permanent staffing<br>that <em>actually sticks</em>.",
    lead: "Find long-term talent who shows up year two. We look past the resume — into work style, motivations, and cultural fit — so retention isn't a roll of the dice.",
    actions: [
      { label: "Find talent", href: "/contact" },
      { label: "Learn more", href: "/about" },
    ],
    metricsHead: "LIVE METRICS · LAST 90 DAYS",
    metrics: [
      { v: "98%", l: "Placement success" },
      { v: "30d", l: "Median time-to-hire" },
      { v: "85%", l: "1-year retention" },
    ],
    whyH2: "Why <em>permanent placement</em> with Velora?",
    whyP: "Our permanent staffing isn't a resume database with a fee. We go beyond the CV to understand personality, work style, and long-term career goals — for candidate and client. The result: hires you keep.",
    checks: [
      "Thorough assessment and cultural fit evaluation",
      "Extensive background checks and reference verification",
      "Competitive comp packages and benefits negotiation",
      "Seamless onboarding and integration support",
      "Ongoing performance monitoring and retention strategies",
      "Industry-leading placement success rates",
    ],
    secHeads: [
      { eyebrow: "EXPERTISE", h2: "Where we <em>place</em>.", desc: "Six core verticals for full-time, long-term hires." },
      { eyebrow: "PROCESS", h2: "Our <em>process</em>.", desc: "Five stages, written status updates throughout, no surprises at the offer table." },
      { eyebrow: "INDUSTRIES", h2: "Industries we <em>know cold</em>.", desc: "Sectors where we have deep employer networks and proven placement history." },
      { eyebrow: "BENEFITS", h2: "The <em>upside</em>.", desc: "Why permanent placements with us are different." },
    ],
    expTiles: [
      { n: "/ 01", h: "Executive leadership", p: "Senior executives and C-suite to lead the next chapter." },
      { n: "/ 02", h: "Technical specialists", p: "Highly skilled across all major disciplines and stacks." },
      { n: "/ 03", h: "Sales & marketing", p: "Top performers and marketers to drive revenue growth." },
      { n: "/ 04", h: "Operations & finance", p: "Steady hands for back-office stability." },
      { n: "/ 05", h: "Compliance & legal", p: "GC, deputy GC, compliance leads for regulated industries." },
      { n: "/ 06", h: "Human resources", p: "HR partners skilled in talent and org development." },
    ],
    steps: [
      { num: "STAGE 01", h: "Job analysis", p: "Detailed dive into role, responsibilities, and required competencies." },
      { num: "STAGE 02", h: "Candidate sourcing", p: "Multi-channel — database, network, referrals, targeted outreach." },
      { num: "STAGE 03", h: "Comprehensive screening", p: "Technical assessment, behavioral interviews, culture-fit eval." },
      { num: "STAGE 04", h: "Client presentations", p: "Top candidates with profiles and interview recommendations." },
      { num: "STAGE 05", h: "Offer & onboarding", p: "Salary negotiation, offer management, seamless integration." },
    ],
    chips: ["Technology & Software", "Financial Services", "Healthcare & Life Sciences", "Manufacturing", "Retail & E-commerce", "Professional Services", "Energy & Utilities", "Government & Education"],
    benefits: [
      { n: "01", h: "Long-term investment", p: "Stable, committed teams that grow with your org over time." },
      { n: "02", h: "Cultural alignment", p: "Candidates who share your values and your vision." },
      { n: "03", h: "Reduced turnover", p: "Lower recruitment costs and improved retention through better matching." },
      { n: "04", h: "Knowledge retention", p: "People who deepen their understanding of the business year over year." },
      { n: "05", h: "Career development", p: "Internal mobility plans we help you build with each hire." },
      { n: "06", h: "Brand enhancement", p: "Become known as the employer of choice in your space." },
    ],
    ctaH2: "Let's discuss your<br><em>career goals</em>.",
    metaDescription:
      "Permanent staffing that sticks — culture-fit evaluation, reference verification, and retention strategy for full-time hires who show up year two.",
  },

  contract: {
    slug: "contract",
    title: "Contract",
    name: "Contract Staffing",
    eyebrow: "CONTRACT STAFFING",
    h1: "Contract staffing<br>for <em>dynamic teams</em>.",
    lead: "Project-based, seasonal, or specialty — access skilled professionals on flexible terms. We handle compliance, paperwork, and extensions so you can focus on shipping.",
    actions: [
      { label: "Get started", href: "/contact" },
      { label: "Explore options", href: "/about" },
    ],
    metricsHead: "LIVE METRICS · LAST 90 DAYS",
    metrics: [
      { v: "20h", l: "Average response time" },
      { v: "78%", l: "Contractor retention" },
      { v: "163+", l: "Active contractors" },
    ],
    whyH2: "Why <em>contract staffing</em> with Velora?",
    whyP: "Our contract staffing provides flexibility without sacrificing quality. We handle every aspect of contractor management — sourcing, screening, compliance, paperwork — so you can focus on your core business.",
    checks: [
      "Flexible engagement terms from weeks to months",
      "Access to specialized skills on demand",
      "No long-term commitment or overhead costs",
      "Complete compliance and paperwork handling",
      "Seamless integration with your existing teams",
      "Scalable solutions for varying project needs",
    ],
    secHeads: [
      { eyebrow: "EXPERTISE", h2: "What we <em>offer</em>.", desc: "Six common shapes of contract engagement." },
      { eyebrow: "PROCESS", h2: "Our <em>process</em>.", desc: "Five stages — designed to get contractors productive in days, not weeks." },
      { eyebrow: "INDUSTRIES", h2: "Industries we <em>know cold</em>.", desc: "Sectors where we have deep employer networks and proven placement history." },
      { eyebrow: "BENEFITS", h2: "The <em>upside</em>.", desc: "Why contract is often the smarter first step." },
    ],
    expTiles: [
      { n: "/ 01", h: "Project-based roles", p: "Short-term specialists for projects with defined deliverables." },
      { n: "/ 02", h: "Seasonal support", p: "Additional workforce during peak seasons or business cycles." },
      { n: "/ 03", h: "Specialized skills", p: "Niche expertise too expensive to keep in-house full time." },
      { n: "/ 04", h: "Scalable resources", p: "Quickly scale your team up or down with project demand." },
      { n: "/ 05", h: "Compliance managed", p: "We handle contractor compliance, insurance, legal requirements." },
      { n: "/ 06", h: "Quality assured", p: "Rigorous screening — contractors meet your standards." },
    ],
    steps: [
      { num: "STAGE 01", h: "Requirements", p: "Detailed discussion of project needs, timeline, skill sets." },
      { num: "STAGE 02", h: "Matching", p: "Identify and screen qualified contractors from our network." },
      { num: "STAGE 03", h: "Contract setup", p: "Handle all legal agreements, rates, compliance documentation." },
      { num: "STAGE 04", h: "Onboarding", p: "Smooth introduction to your team, systems, project requirements." },
      { num: "STAGE 05", h: "Management", p: "Monitor performance, handle extensions, manage renewals." },
    ],
    chips: ["IT & Technology", "Engineering & Design", "Finance & Accounting", "Marketing & Creative", "Operations & Logistics", "Healthcare & Clinical", "Legal & Compliance", "Administrative Support"],
    benefits: [
      { n: "01", h: "Cost efficiency", p: "Pay only for the skills and time you need — no benefits overhead." },
      { n: "02", h: "Rapid deployment", p: "Qualified contractors started on projects within days, not months." },
      { n: "03", h: "Risk mitigation", p: "Test skills and culture fit before considering permanent." },
      { n: "04", h: "Specialist access", p: "Tap into expertise too expensive to keep in-house." },
      { n: "05", h: "Flexibility", p: "Adjust team size with project phases and business needs." },
      { n: "06", h: "Focus on core", p: "We handle contractor management so you focus on strategy." },
    ],
    ctaH2: "Let's discuss your<br><em>career goals</em>.",
    metaDescription:
      "Contract staffing for dynamic teams — flexible terms, specialist skills on demand, and full compliance handling so you can focus on shipping.",
  },

  rpo: {
    slug: "rpo",
    title: "RPO",
    name: "RPO Services",
    eyebrow: "RECRUITMENT PROCESS OUTSOURCING",
    h1: "RPO that<br>moves <em>the funnel</em>.",
    lead: "Recruitment Process Outsourcing. We manage your entire recruitment lifecycle, from sourcing to onboarding — so your internal team can focus on strategy, not scheduling.",
    actions: [
      { label: "Start outsourcing", href: "/contact" },
      { label: "Learn more", href: "/about" },
    ],
    metricsHead: "LIVE METRICS · LAST 90 DAYS",
    metrics: [
      { v: "24%", l: "Average cost reduction" },
      { v: "15%", l: "Faster time-to-hire" },
      { v: "600+", l: "Placements managed" },
    ],
    whyH2: "Why <em>RPO</em> with Velora?",
    whyP: "Our RPO is technology + process + dedicated recruiters in one engagement. Consistent, high-quality hiring at scale — without you needing to build the apparatus internally.",
    checks: [
      "Complete recruitment lifecycle management",
      "Dedicated recruitment team and infrastructure",
      "Advanced ATS and tooling integrations",
      "Scalable solutions for growing organizations",
      "Consistent quality and compliance standards",
      "Cost-effective alternative to in-house teams",
    ],
    secHeads: [
      { eyebrow: "EXPERTISE", h2: "What we <em>handle</em>.", desc: "Six pillars of a modern RPO engagement." },
      { eyebrow: "PROCESS", h2: "Our <em>process</em>.", desc: "Five-stage implementation with knowledge transfer at every step." },
      { eyebrow: "INDUSTRIES", h2: "Technologies & <em>tools</em> we run on.", desc: "Our RPO stack — proven tools we integrate or bring on day one." },
      { eyebrow: "BENEFITS", h2: "The <em>upside</em>.", desc: "What RPO unlocks for your hiring org." },
    ],
    expTiles: [
      { n: "/ 01", h: "Full-cycle recruitment", p: "End-to-end from job posting through offer acceptance and onboarding." },
      { n: "/ 02", h: "Strategic sourcing", p: "Multi-channel — socials, boards, networks, targeted outreach." },
      { n: "/ 03", h: "Compliance management", p: "Practices that comply with local and industry regulations." },
      { n: "/ 04", h: "Performance analytics", p: "Detailed reporting on time-to-hire, quality-of-hire, funnel health." },
      { n: "/ 05", h: "Tech integration", p: "Plug into your existing HR systems and ATS — or use ours." },
      { n: "/ 06", h: "Quality assurance", p: "Process discipline that keeps the hiring bar consistent." },
    ],
    steps: [
      { num: "STAGE 01", h: "Assessment & planning", p: "Analyze your current process and define RPO scope and objectives." },
      { num: "STAGE 02", h: "Technology setup", p: "Implement and integrate recruitment technology and ATS." },
      { num: "STAGE 03", h: "Team transition", p: "Knowledge transfer and smooth handoff of responsibilities." },
      { num: "STAGE 04", h: "Process optimization", p: "Streamline workflows for maximum efficiency." },
      { num: "STAGE 05", h: "Ongoing management", p: "Continuous monitoring, reporting, and process improvements." },
    ],
    chips: ["Applicant Tracking Systems (ATS)", "Candidate Relationship Management", "Video Interviewing", "Assessment & Testing", "Social Media Recruitment", "Job Board Integrations", "Analytics Dashboards", "Compliance Management"],
    benefits: [
      { n: "01", h: "Cost reduction", p: "Lower recruitment costs through scale and process efficiencies." },
      { n: "02", h: "Faster hiring", p: "Reduced time-to-hire with dedicated resources and tight processes." },
      { n: "03", h: "Scalability", p: "Scale recruitment efforts up or down based on business needs." },
      { n: "04", h: "Quality improvement", p: "Consistent, high-quality processes and better candidate experience." },
      { n: "05", h: "Focus on core", p: "Free up internal resources for strategic business objectives." },
      { n: "06", h: "Data-driven insights", p: "Recruitment analytics for continuous improvement." },
    ],
    ctaH2: "Let's discuss your<br><em>career goals</em>.",
    metaDescription:
      "Recruitment Process Outsourcing (RPO) — dedicated recruiters, ATS integration, and full-cycle hiring at scale with 24% average cost reduction.",
  },

  "executive-search": {
    slug: "executive-search",
    title: "Executive",
    name: "Executive Search",
    eyebrow: "EXECUTIVE SEARCH & LEADERSHIP",
    h1: "Executive search.<br>Leaders <em>worth the bet</em>.",
    lead: "C-suite and senior management placements. We combine deep industry knowledge with extensive networks to find leaders who drive transformative growth — discreetly.",
    actions: [
      { label: "Find leaders", href: "/contact" },
      { label: "Our approach", href: "/about" },
    ],
    metricsHead: "LIVE METRICS · LAST 90 DAYS",
    metrics: [
      { v: "48%", l: "Search success rate" },
      { v: "61d", l: "Median placement" },
      { v: "254+", l: "Executive placements" },
    ],
    whyH2: "Why <em>executive search</em> with Velora?",
    whyP: "Exec search demands a different approach. Our senior consultants bring decades of experience, deep industry context, and extensive networks to identify leaders who can drive your strategic vision — confidentially.",
    checks: [
      "Extensive C-suite and senior executive networks",
      "Deep industry and functional expertise",
      "Confidential, discreet search processes",
      "Strategic assessment of leadership capabilities",
      "Board-level advisory and succession planning",
      "Global reach with local market expertise",
    ],
    secHeads: [
      { eyebrow: "EXPERTISE", h2: "Our <em>expertise</em>.", desc: "Six engagement types for the top of the org chart." },
      { eyebrow: "PROCESS", h2: "Our <em>process</em>.", desc: "Five-stage executive search engagement — typically 8–12 weeks." },
      { eyebrow: "INDUSTRIES", h2: "Industries we <em>know cold</em>.", desc: "Sectors where we have deep employer networks and proven placement history." },
      { eyebrow: "BENEFITS", h2: "The <em>upside</em>.", desc: "Why exec search done well changes trajectory." },
    ],
    expTiles: [
      { n: "/ 01", h: "C-suite recruitment", p: "CEO, CFO, CTO, COO, and other executive leadership positions." },
      { n: "/ 02", h: "Board appointments", p: "Independent directors and board members for governance." },
      { n: "/ 03", h: "VP & senior leadership", p: "Vice presidents and senior leaders across all functions." },
      { n: "/ 04", h: "Succession planning", p: "Strategic planning for transitions and talent pipelines." },
      { n: "/ 05", h: "Confidential searches", p: "Discreet processes to protect organizational stability." },
      { n: "/ 06", h: "Industry specialists", p: "Deep expertise in specific industries and market sectors." },
    ],
    steps: [
      { num: "STAGE 01", h: "Strategic brief", p: "Deep dive into strategy, culture, and leadership requirements." },
      { num: "STAGE 02", h: "Research & mapping", p: "Identify and map candidates through network research." },
      { num: "STAGE 03", h: "Assessment", p: "Comprehensive evaluation of leadership, experience, fit." },
      { num: "STAGE 04", h: "Presentations", p: "Shortlisted candidates with detailed profiles and recommendations." },
      { num: "STAGE 05", h: "Offer & transition", p: "Facilitate offer negotiations and smooth leadership transitions." },
    ],
    chips: ["Technology & Software", "Financial Services & Banking", "Healthcare & Pharma", "Manufacturing & Industrial", "Retail & Consumer", "Energy & Resources", "Professional Services", "Non-Profit & Education"],
    benefits: [
      { n: "01", h: "Strategic alignment", p: "Leaders who understand and execute your strategic vision." },
      { n: "02", h: "Quality assurance", p: "Rigorous assessment ensures proven leadership." },
      { n: "03", h: "Network access", p: "Reach passive candidates who aren't actively looking." },
      { n: "04", h: "Risk mitigation", p: "Background checks and reference verification for high-stakes roles." },
      { n: "05", h: "Cultural fit", p: "Assessment of leadership style and org culture compatibility." },
      { n: "06", h: "Long-term impact", p: "Leaders who drive sustainable growth and transformation." },
    ],
    ctaH2: "Let's discuss your<br><em>career goals</em>.",
    metaDescription:
      "Confidential executive search for C-suite, VP, and board roles — deep networks, rigorous leadership assessment, and succession planning.",
  },
};

export const serviceList: Service[] = Object.values(services);
export const serviceSlugs = Object.keys(services);
export function getService(slug: string): Service | undefined {
  return services[slug];
}
