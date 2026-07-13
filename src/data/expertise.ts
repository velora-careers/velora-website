/** Expertise (premium career services) — 7 template-driven pages. */

export type Metric = { v: string; l: string };
export type Tile = { n: string; h: string; p: string };
export type Step = { num: string; h: string; p: string };
export type Quote = { p: string; a: string };
export type Faq = { q: string; a: string };
export type SecHead = { eyebrow: string; h2: string; desc: string };

export type Expertise = {
  slug: string;
  title: string;
  tag: string;
  h1: string;
  subtitle: string;
  lead: string;
  actions: [string, string];
  code: { file: string; lang: string; body: string };
  metrics: Metric[];
  whyH2: string;
  whyP: string;
  checks: string[];
  /** [0] included, [1] process, [2] testimonials, [3] faq */
  secHeads: [SecHead, SecHead, SecHead, SecHead];
  tiles: Tile[];
  steps: Step[];
  quotes: Quote[];
  faq: Faq[];
  ctaH2: string;
  /** SEO */
  metaDescription: string;
};

export const expertise: Record<string, Expertise> = {
  resume: {
    slug: "resume",
    title: "Resume Makeover",
    tag: "PREMIUM SERVICE · 01",
    h1: "Resume<br><em>Makeover</em>.",
    subtitle: "A job-winning document in 5 days.",
    lead: "Get a professionally crafted resume that highlights your strengths, showcases your achievements, and passes ATS filters. Our writers ensure your story stands out — to humans and to bots.",
    actions: ["Get resume makeover", "See examples"],
    code: {
      file: "resume.json",
      lang: "ATS-ready",
      body: `{
  "summary": "Impact-focused engineer",
  "skills": ["React", "Node", "GCP"],
  "impact": ["+32% CVR", "-28% costs"]
}`,
    },
    metrics: [
      { v: "3×", l: "Interview lift" },
      { v: "1–5d", l: "Avg. turnaround" },
      { v: "PDF / DOCX", l: "Formats" },
    ],
    whyH2: "Why your resume <em>needs the work</em>.",
    whyP: "Your resume is often your first impression. Our makeover ensures it not only looks professional but effectively communicates value — and survives ATS filtering before a human ever sees it.",
    checks: [
      "ATS-optimized formatting for better visibility",
      "Industry-specific keyword integration",
      "Achievement-focused content (not job-duty lists)",
      "Professional design and layout",
      "Multiple format options (PDF, Word, ATS-plain)",
      "Unlimited revisions included",
    ],
    secHeads: [
      { eyebrow: "INCLUDED", h2: "What's <em>included</em>.", desc: "Six components every Velora makeover ships with." },
      { eyebrow: "PROCESS", h2: "The <em>process</em>.", desc: "Six stages from intake to final delivery — most clients done in 5 days." },
      { eyebrow: "WHAT CLIENTS SAY", h2: "Real <em>stories</em>.", desc: "Three short snapshots — full case studies available on request." },
      { eyebrow: "FAQ", h2: "Things people <em>ask first</em>.", desc: "Quick answers. For anything else, the contact form is two clicks away." },
    ],
    tiles: [
      { n: "/ 01", h: "Complete rewrite", p: "A professional rewrite focused on achievements and impact, not job duties." },
      { n: "/ 02", h: "ATS optimization", p: "Pass Applicant Tracking Systems with proper keywords and formatting." },
      { n: "/ 03", h: "Professional design", p: "Modern, clean design that stands out while staying readable." },
      { n: "/ 04", h: "Keyword research", p: "Industry-specific keyword research matched to your target roles." },
      { n: "/ 05", h: "Quality assurance", p: "Multiple rounds of review and editing to ensure perfection." },
      { n: "/ 06", h: "Expert consultation", p: "1:1 consultation with a career expert to understand your goals." },
    ],
    steps: [
      { num: "STEP 01", h: "Initial consultation", p: "We discuss your career goals, target roles, and current resume challenges." },
      { num: "STEP 02", h: "Content analysis", p: "Review work history, achievements, and skills — identify key selling points." },
      { num: "STEP 03", h: "Keyword research", p: "Industry-specific keywords and phrases for ATS optimization." },
      { num: "STEP 04", h: "Resume creation", p: "Craft a compelling resume with professional formatting and impactful content." },
      { num: "STEP 05", h: "Review & revisions", p: "Present the resume and make unlimited revisions based on feedback." },
      { num: "STEP 06", h: "Final delivery", p: "Deliver final resume in multiple formats with usage guidelines." },
    ],
    quotes: [
      { p: "“The makeover completely transformed how recruiters viewed my application. I went from zero responses to multiple interviews in a week.”", a: "Sarah Johnson · Software Engineer, Tech Corp" },
      { p: "“Professional, insightful, effective. My new resume led to a 40% salary increase.”", a: "Michael Chen · Marketing Manager, Global Brands" },
      { p: "“The ATS optimization was crucial. My resume finally got past automated filters and I landed my dream job.”", a: "Emily Rodriguez · Data Analyst, Analytics Solutions" },
    ],
    faq: [
      { q: "How long does the resume makeover process take?", a: "Most makeovers ship in 5 business days. Rush turnaround (48 hours) is available for an additional fee." },
      { q: "Do you guarantee job interviews?", a: "We can't guarantee interviews — anyone who does is lying. We guarantee an ATS-clean, achievement-focused resume that statistically outperforms the average." },
      { q: "What information do I need to provide?", a: "Your current resume (any format), 2–3 target job descriptions, and 30 minutes for a strategy call. That's it." },
      { q: "Can I get edits after delivery?", a: "Yes. Unlimited revisions are included for 30 days post-delivery, and you'll always have the editable source files." },
    ],
    ctaH2: "Transform your<br><em>career</em> story.",
    metaDescription:
      "Professional resume makeover in 5 days — ATS-optimized, achievement-focused, with unlimited revisions. Go from zero responses to multiple interviews.",
  },

  linkedin: {
    slug: "linkedin",
    title: "LinkedIn Profile Boost",
    tag: "PREMIUM SERVICE · 02",
    h1: "LinkedIn<br><em>Profile Boost</em>.",
    subtitle: "Turn LinkedIn into a recruiter magnet.",
    lead: "We transform your LinkedIn profile with a compelling headline, keyword-rich About, impact-driven Experience, and a clean visual identity. Optimized for LinkedIn SEO, recruiter search, and real human connection.",
    actions: ["Boost my LinkedIn", "See before / after"],
    code: {
      file: "profile.md",
      lang: "Profile config",
      body: `headline: "PM · Fintech · Growth & Activation"
about: "Impact-focused with 6 yrs..."
keywords: [product, growth, fintech]`,
    },
    metrics: [
      { v: "2×", l: "Interview lift" },
      { v: "1–5d", l: "Avg. turnaround" },
      { v: "PDF / DOCX", l: "Style guide" },
    ],
    whyH2: "Why your <em>LinkedIn matters</em>.",
    whyP: "Recruiters, clients, and hiring managers search LinkedIn first. A strategic profile makes you discoverable, credible, and memorable — before the first message is sent.",
    checks: [
      "Search-optimized headline and About for your target roles",
      "Impact-focused experience bullets (metrics, scope, outcomes)",
      "Custom banner guidance and cohesive visual identity",
      "Skills and endorsements aligned to role market",
      "Featured, Creator Mode, and URL best practices",
      "Connection, posting, and outreach playbooks",
    ],
    secHeads: [
      { eyebrow: "INCLUDED", h2: "What's <em>included</em>.", desc: "Six components every Velora LinkedIn boost ships with." },
      { eyebrow: "PROCESS", h2: "The <em>process</em>.", desc: "Six stages from discovery to a 30-day growth playbook." },
      { eyebrow: "WHAT CLIENTS SAY", h2: "Real <em>stories</em>.", desc: "Three short snapshots — full case studies available on request." },
      { eyebrow: "FAQ", h2: "Things people <em>ask first</em>.", desc: "Quick answers. For anything else, the contact form is two clicks away." },
    ],
    tiles: [
      { n: "/ 01", h: "Profile rewrite", p: "Headline, About, and Experience rewritten for outcomes, scope, and keywords." },
      { n: "/ 02", h: "LinkedIn SEO", p: "Role-aligned keyword research to rank in recruiter search and talent pools." },
      { n: "/ 03", h: "Visual identity", p: "Banner mockup, image guidelines, photo framing, and consistent brand cues." },
      { n: "/ 04", h: "Network strategy", p: "Connection strategy, warm intro templates, and smart list building." },
      { n: "/ 05", h: "Skills & proof", p: "Optimized skills order, endorsement prompts, and Featured curation." },
      { n: "/ 06", h: "Settings & safety", p: "Privacy, visibility, and creator-mode settings configured for reach." },
    ],
    steps: [
      { num: "STEP 01", h: "Discovery", p: "Align on target roles/clients, niche positioning, and differentiation." },
      { num: "STEP 02", h: "Research", p: "Keyword, competitor, and recruiter-search analysis to inform messaging." },
      { num: "STEP 03", h: "Rewrite", p: "Headline, About, Experience, and Skills crafted for clarity and SEO." },
      { num: "STEP 04", h: "Design", p: "Banner guidance and visual polish across photo, Featured, and creator tools." },
      { num: "STEP 05", h: "Activation", p: "Settings optimization, content starter pack, and outreach templates." },
      { num: "STEP 06", h: "Review & iterate", p: "Edits based on your feedback; we finalize and share a 30-day playbook." },
    ],
    quotes: [
      { p: "“Two weeks after the boost I had 6 recruiter DMs and 3 interviews lined up. The new headline and About did the heavy lifting.”", a: "Aisha Kapoor · Product Manager, Fintech Scaleup" },
      { p: "“The Featured and portfolio guidance was gold. Inbound leads doubled and my rate went up 30%.”", a: "Luis Ramirez · Freelance Data Engineer" },
      { p: "“My search appearance spiked and I finally show up for the roles I want. Clear, measurable upgrade.”", a: "Hannah Lee · Marketing Lead, D2C Brand" },
    ],
    faq: [
      { q: "Will this help me appear in more recruiter searches?", a: "Almost always, yes — our average client sees a 4-6× lift in recruiter search appearances within 30 days, driven by headline keywords and skills ordering." },
      { q: "Do you design a custom banner?", a: "We provide a banner mockup and image guidelines tailored to your industry. Final banner artwork can be added for an additional fee." },
      { q: "Can you also update my resume?", a: "Yes — many clients bundle resume + LinkedIn for a 15% discount. The two reinforce each other." },
      { q: "How many revisions do I get?", a: "Unlimited revisions for 30 days post-delivery on every section we touch." },
    ],
    ctaH2: "Transform your<br><em>career</em> story.",
    metaDescription:
      "LinkedIn profile optimization that turns your profile into a recruiter magnet — SEO headline, keyword-rich About, and a 30-day growth playbook.",
  },

  "interview-coaching": {
    slug: "interview-coaching",
    title: "Interview Coaching",
    tag: "PREMIUM SERVICE · 03",
    h1: "Interview<br><em>Coaching</em>.",
    subtitle: "Walk in calm. Walk out hired.",
    lead: "Mock interviews with real engineers and PMs, calibrated feedback, and behavioral story-mining that turns your career into compelling answers. We rehearse until the right thing comes out naturally.",
    actions: ["Book a coaching session", "See sample feedback"],
    code: {
      file: "feedback.md",
      lang: "Calibrated rubric",
      body: `STAR clarity: 7/10
Signal-to-noise: 8/10
Stakeholder framing: 6/10
Next: rework "ambiguity" story`,
    },
    metrics: [
      { v: "4×", l: "Offer rate lift" },
      { v: "1–2w", l: "Avg. prep cycle" },
      { v: "90 min", l: "Per mock session" },
    ],
    whyH2: "Why <em>interview coaching</em> moves the needle.",
    whyP: "Most candidates fail interviews not on knowledge but on framing. Our coaches have sat on both sides of the table — they tell you exactly what hiring committees write down after you leave the room.",
    checks: [
      "Mock interviews with role-matched coaches (not generic recruiters)",
      "Behavioral story bank: 12 STAR-format stories covering all common signals",
      "System design / case practice for tech and product roles",
      "Salary expectations & negotiation framing baked into prep",
      "Recorded sessions with timestamped feedback",
      "Pre-onsite calibration and post-loop debrief",
    ],
    secHeads: [
      { eyebrow: "INCLUDED", h2: "What's <em>included</em>.", desc: "Six components in every coaching engagement." },
      { eyebrow: "PROCESS", h2: "The <em>process</em>.", desc: "Six steps over 1–2 weeks. Faster paths available for active loops." },
      { eyebrow: "WHAT CLIENTS SAY", h2: "Real <em>stories</em>.", desc: "Three short snapshots. Full case studies available on request." },
      { eyebrow: "FAQ", h2: "Things people <em>ask first</em>.", desc: "Quick answers. For anything else, the contact form is two clicks away." },
    ],
    tiles: [
      { n: "/ 01", h: "Mock interviews", p: "3–5 mock loops with engineers, PMs, or hiring managers in your target field." },
      { n: "/ 02", h: "Story mining", p: "We extract the 8–12 stories you need and rehearse them until they land." },
      { n: "/ 03", h: "Behavioral rubric", p: "Written feedback against the same rubric top companies use internally." },
      { n: "/ 04", h: "System / case prep", p: "Domain-specific practice for technical, product, or consulting loops." },
      { n: "/ 05", h: "Compensation framing", p: "Practice the salary conversation — including the parts most coaches skip." },
      { n: "/ 06", h: "Pre-onsite playbook", p: "A one-pager you bring into the day to stay grounded." },
    ],
    steps: [
      { num: "STEP 01", h: "Intake call", p: "We learn your target roles, current loops, and where you tend to stumble." },
      { num: "STEP 02", h: "Story mining", p: "Pull your career inventory; identify 8–12 stories with the right signal." },
      { num: "STEP 03", h: "Mock #1", p: "Behavioral mock with full feedback against the rubric." },
      { num: "STEP 04", h: "Technical / case mock", p: "Domain-specific practice with a coach who has done that role." },
      { num: "STEP 05", h: "Onsite simulation", p: "Full-day or full-loop simulation tuned to the company you're prepping." },
      { num: "STEP 06", h: "Debrief & iterate", p: "Post-interview debrief — what to fix before the next loop." },
    ],
    quotes: [
      { p: "“After three mocks I walked into the Stripe onsite and it felt easier than the rehearsals. Got the offer the next week.”", a: "Daniel Park · Staff Engineer, Stripe" },
      { p: "“The story-mining was the unlock. I had been telling my stories wrong for years.”", a: "Priya Shah · Senior PM, B2B SaaS" },
      { p: "“I went 0/5 before coaching, 3/4 after. Same resume, totally different outcomes.”", a: "Marcus Williams · Cloud Architect, AWS" },
    ],
    faq: [
      { q: "How many sessions do I need?", a: "Most candidates do 3–5 sessions over 1–2 weeks. Active loops with onsites coming up may compress this." },
      { q: "Are coaches industry-specific?", a: "Yes. We match you with a coach who has held — and interviewed for — the role you're targeting." },
      { q: "Do you cover compensation negotiation?", a: "Yes, it's baked into the coaching. We also have a standalone Offer Negotiation service for active offers." },
      { q: "Can you help with system design or coding?", a: "Yes — our technical coaches cover ML system design, coding (LC mediums/hards), distributed systems, and product sense." },
    ],
    ctaH2: "Take the next step,<br><em>well-supported</em>.",
    metaDescription:
      "Interview coaching with role-matched engineers and PMs — mock loops, behavioral story-mining, and calibrated feedback that lifts your offer rate.",
  },

  "offer-negotiation": {
    slug: "offer-negotiation",
    title: "Offer Negotiation",
    tag: "PREMIUM SERVICE · 04",
    h1: "Offer<br><em>Negotiation</em>.",
    subtitle: "Leave nothing on the table.",
    lead: "When the offer lands, the next 72 hours decide your next year. We help you read the levers, set the anchor, and run the conversations — without burning the relationship.",
    actions: ["I have an offer", "How it works"],
    code: {
      file: "levers.json",
      lang: "Negotiation map",
      body: `{
  "base": { "ask": 215000, "anchor": 235000 },
  "equity": { "ask": "1.0x", "target": "1.3x" },
  "signing": { "ask": 40000 }
}`,
    },
    metrics: [
      { v: "+18%", l: "Avg. base lift" },
      { v: "+$22k", l: "Avg. equity gain" },
      { v: "48h", l: "Active engagement" },
    ],
    whyH2: "Why <em>negotiation</em> done well changes years.",
    whyP: "A 15% base increase compounds. Equity refresh percentages compound harder. Most people leave money on the table because they don't know which levers exist or how to pull them. We've run thousands of these conversations.",
    checks: [
      "Lever map: base, equity, refresh, signing, sign-on, RSU vesting",
      "Competing-offer strategy without lying about non-existent offers",
      "Scripted talking points for each levers-conversation",
      "Equity benchmarking against verified data",
      "Recruiter & hiring manager calibration",
      "Counter-offer playbook from your current employer",
    ],
    secHeads: [
      { eyebrow: "INCLUDED", h2: "What's <em>included</em>.", desc: "Six components when you bring us an active offer." },
      { eyebrow: "PROCESS", h2: "The <em>process</em>.", desc: "Six steps over 48–72 hours — the typical offer-decision window." },
      { eyebrow: "WHAT CLIENTS SAY", h2: "Real <em>stories</em>.", desc: "Three short snapshots. Full case studies available on request." },
      { eyebrow: "FAQ", h2: "Things people <em>ask first</em>.", desc: "Quick answers. For anything else, the contact form is two clicks away." },
    ],
    tiles: [
      { n: "/ 01", h: "Offer analysis", p: "A written read of every component — what's strong, what's weak, what's missing." },
      { n: "/ 02", h: "Comp benchmarking", p: "Cross-referenced data on similar offers at your target band and company." },
      { n: "/ 03", h: "Negotiation map", p: "Levers to pull, in what order, with target numbers and walk-away lines." },
      { n: "/ 04", h: "Scripts & talking points", p: "Word-for-word language for each conversation, by channel." },
      { n: "/ 05", h: "Live coaching", p: "We're on Slack/text while you negotiate. Real-time response review." },
      { n: "/ 06", h: "Counter-counter prep", p: "When they counter, you already know your next move." },
    ],
    steps: [
      { num: "STEP 01", h: "Offer intake", p: "You share the full offer letter. We sign an NDA." },
      { num: "STEP 02", h: "Benchmark", p: "We pull market comp for your level and target company." },
      { num: "STEP 03", h: "Strategy call", p: "60-minute call to map levers and set the anchor." },
      { num: "STEP 04", h: "Scripts ready", p: "Written scripts for the recruiter, hiring manager, and any backchannel." },
      { num: "STEP 05", h: "Live negotiate", p: "You run the conversations; we review each response live." },
      { num: "STEP 06", h: "Close & file", p: "Final offer signed, with a written summary of the gains." },
    ],
    quotes: [
      { p: "“I gained $47k base and 0.3x more equity in 4 days. Their fee paid for itself 30 times over.”", a: "Jenny Liu · Director, Series-B Fintech" },
      { p: "“The script-by-script coaching was unreal. I never once felt I was reading a script.”", a: "Carlos Mendez · Eng Manager, Big Tech" },
      { p: "“They told me to ask for things I didn't know existed. Two of them I got.”", a: "Anaya Mehta · Data Science Lead" },
    ],
    faq: [
      { q: "When should I engage you?", a: "The moment a verbal offer is mentioned. The earlier, the more levers we can pull." },
      { q: "Do you charge a percentage of the gain?", a: "No. Flat fee, decided up front. We're not incentivized to push past your walk-away point." },
      { q: "Can you negotiate without burning the relationship?", a: "Yes — that's most of the craft. We have not had a candidate lose an offer in 4 years." },
      { q: "What if I only have one offer?", a: "Doesn't matter. Most of the levers we use don't require a competing offer." },
    ],
    ctaH2: "Take the next step,<br><em>well-supported</em>.",
    metaDescription:
      "Offer negotiation coaching — lever mapping, comp benchmarking, and live scripts that lift base and equity without burning the relationship.",
  },

  "career-transition": {
    slug: "career-transition",
    title: "Career Transition Help",
    tag: "PREMIUM SERVICE · 05",
    h1: "Career<br><em>Transition Help</em>.",
    subtitle: "For the leap, not the lateral.",
    lead: "Industry switch, function pivot, returning from a break, or moving from IC to manager (or back). We rebuild the story, surface transferable signal, and route you into employers open to non-linear paths.",
    actions: ["Plan my transition", "Read case stories"],
    code: {
      file: "pivot.md",
      lang: "Transition plan",
      body: `From: Senior Eng (Finance)
To:   Product Manager (Climate)
Gap:  PM craft, climate domain
Plan: 12 wk roadmap, 3 portfolio projects`,
    },
    metrics: [
      { v: "85%", l: "Successful pivots" },
      { v: "90d", l: "Median to offer" },
      { v: "1:1", l: "Coach engagement" },
    ],
    whyH2: "Why <em>transitions</em> need a specialist.",
    whyP: "Recruiters filter resumes by linear pattern-match. A transition is a story that has to be told, not assumed. We position your background so hiring teams see what you can become — not just what you've been.",
    checks: [
      "Honest mapping of transferable vs. gap skills",
      "Story-shaping for the target field's vocabulary",
      "Portfolio / project plan to close credibility gaps",
      "Targeted employer list — companies open to non-linear paths",
      "Mentor introductions in the target function",
      "Pacing: realistic timeline you can actually live",
    ],
    secHeads: [
      { eyebrow: "INCLUDED", h2: "What's <em>included</em>.", desc: "Six pieces of the transition engagement." },
      { eyebrow: "PROCESS", h2: "The <em>process</em>.", desc: "Six steps over 60–120 days, depending on the size of the leap." },
      { eyebrow: "WHAT CLIENTS SAY", h2: "Real <em>stories</em>.", desc: "Three short snapshots. Full case studies available on request." },
      { eyebrow: "FAQ", h2: "Things people <em>ask first</em>.", desc: "Quick answers. For anything else, the contact form is two clicks away." },
    ],
    tiles: [
      { n: "/ 01", h: "Career map", p: "Honest read of where you are vs. where you want to be — with gap analysis." },
      { n: "/ 02", h: "Story rewrite", p: "Resume, LinkedIn, and verbal pitch shaped for the target field." },
      { n: "/ 03", h: "Skill plan", p: "8–16 week curriculum or portfolio plan to close the must-have gaps." },
      { n: "/ 04", h: "Employer routing", p: "Curated list of companies and roles that hire for transitions." },
      { n: "/ 05", h: "Mentor intros", p: "Warm intros to 3–5 mentors who made the same pivot." },
      { n: "/ 06", h: "Weekly check-ins", p: "Until your first offer, we're in your inbox every week." },
    ],
    steps: [
      { num: "STEP 01", h: "Intake", p: "What you're leaving, where you're going, and why — really." },
      { num: "STEP 02", h: "Map", p: "Skills audit, gap analysis, and a realistic timeline." },
      { num: "STEP 03", h: "Story", p: "Resume, LinkedIn, and pitch rebuilt for the new field." },
      { num: "STEP 04", h: "Build", p: "Portfolio projects, certifications, or domain depth to close credibility gaps." },
      { num: "STEP 05", h: "Route", p: "Targeted outreach + warm intros into companies open to transitions." },
      { num: "STEP 06", h: "Land", p: "Interview prep, offer support, and onboarding into your new chapter." },
    ],
    quotes: [
      { p: "“I went from data engineer to climate-tech PM in 9 months. The roadmap made it feel possible.”", a: "Ravi Subramaniam · PM, Watershed" },
      { p: "“Coming back from parental leave was the hardest interview cycle I'd ever done. They got me through it.”", a: "Hannah Choi · Eng Manager (returnship)" },
      { p: "“Going from IC to manager felt like changing identities. They held my hand through the entire pivot.”", a: "Tom Wright · Engineering Manager" },
    ],
    faq: [
      { q: "How big a transition can you support?", a: "We have placed function-to-function (eng → PM), industry-to-industry (finance → climate), and breaks-to-return (parental, sabbatical, career break)." },
      { q: "How long does it take?", a: "Most candidates land in 60–120 days. Bigger leaps (full re-skill) can run 6–9 months." },
      { q: "Do you guarantee the transition?", a: "We guarantee the work. We don't guarantee outcomes — anyone who does is exaggerating." },
      { q: "Can I keep my current job during the transition?", a: "Yes — most clients do. The plan is built to be compatible with full-time work." },
    ],
    ctaH2: "Take the next step,<br><em>well-supported</em>.",
    metaDescription:
      "Career transition coaching for industry switches, function pivots, and returnships — story rewrite, skill plan, and routing into employers open to non-linear paths.",
  },

  "onboarding-guidance": {
    slug: "onboarding-guidance",
    title: "Onboarding Guidance",
    tag: "PREMIUM SERVICE · 06",
    h1: "Onboarding<br><em>Guidance</em>.",
    subtitle: "The first 90 days, designed.",
    lead: "The offer is signed. Now what? We build the 30/60/90 plan that lands you on the right project, with the right relationships, and the right early wins to set the trajectory.",
    actions: ["Plan my first 90 days", "See a sample plan"],
    code: {
      file: "30_60_90.md",
      lang: "Onboarding plan",
      body: `Day 30: ship a small visible win
Day 60: own one team-wide ritual
Day 90: present trajectory to manager`,
    },
    metrics: [
      { v: "90 days", l: "Engagement window" },
      { v: "2×", l: "Faster ramp" },
      { v: "1×/wk", l: "Coach check-in" },
    ],
    whyH2: "Why <em>onboarding</em> is half the role.",
    whyP: "Promotion velocity, manager trust, and political capital — most of it is set in the first 90 days. We help you walk in with a plan: who to meet, what to ship, when to ask, and when to listen.",
    checks: [
      "A written 30/60/90 plan customized to your role and company",
      "Stakeholder map: who matters, and how to build trust with each",
      "Early-win selection: ship-now vs. ship-later trade-offs",
      "Manager 1:1 framework and trust-building rituals",
      "Cultural read of meetings, comms, and unwritten rules",
      "Weekly check-ins through day 90",
    ],
    secHeads: [
      { eyebrow: "INCLUDED", h2: "What's <em>included</em>.", desc: "Six pieces of the onboarding engagement." },
      { eyebrow: "PROCESS", h2: "The <em>process</em>.", desc: "Six steps over 90+ days — starting before day one." },
      { eyebrow: "WHAT CLIENTS SAY", h2: "Real <em>stories</em>.", desc: "Three short snapshots. Full case studies available on request." },
      { eyebrow: "FAQ", h2: "Things people <em>ask first</em>.", desc: "Quick answers. For anything else, the contact form is two clicks away." },
    ],
    tiles: [
      { n: "/ 01", h: "Pre-start prep", p: "What to do in the 2 weeks before you start — and what NOT to do." },
      { n: "/ 02", h: "30/60/90 plan", p: "A written plan with milestones, stakeholders, and visible early wins." },
      { n: "/ 03", h: "Stakeholder map", p: "Who matters, what they care about, and how to build trust with each." },
      { n: "/ 04", h: "Manager rituals", p: "1:1 framework, communication cadence, and feedback loops." },
      { n: "/ 05", h: "Politics read", p: "How decisions actually get made — and how to be seen as someone who makes them." },
      { n: "/ 06", h: "Weekly check-ins", p: "Through day 90, we troubleshoot whatever you bring us." },
    ],
    steps: [
      { num: "STEP 01", h: "Pre-start intake", p: "Role, company, team, and what success looks like at 90 days." },
      { num: "STEP 02", h: "Plan written", p: "A custom 30/60/90 plan with concrete milestones." },
      { num: "STEP 03", h: "Stakeholder map", p: "Who to meet first, who can sponsor you, who to win over." },
      { num: "STEP 04", h: "Week 1 debrief", p: "After your first week, we recalibrate the plan with what you learned." },
      { num: "STEP 05", h: "Weekly check-ins", p: "Through day 90 — questions, friction points, course-corrections." },
      { num: "STEP 06", h: "90-day review", p: "Performance review prep + a trajectory plan for the next 6 months." },
    ],
    quotes: [
      { p: "“I shipped a visible win in week 6 and got staff promo signal by month 9. The plan worked.”", a: "Layla Ahmed · Staff Engineer, OpenAI" },
      { p: "“I almost no-shipped my first quarter. The weekly check-ins course-corrected me twice.”", a: "Brian O'Hare · Senior PM, B2B SaaS" },
      { p: "“Switching companies always knocks me sideways. This time it didn't.”", a: "Yuki Tanaka · Director of Engineering" },
    ],
    faq: [
      { q: "When should I engage you?", a: "Ideally the week after you sign — before you start. We also support mid-onboarding rescues." },
      { q: "Do I need this if I've onboarded before?", a: "Every company is different. The 30/60/90 plan is most valuable when the role or scope is new — promotion, lateral move, manager pivot, etc." },
      { q: "Can you talk to my new manager?", a: "No — we keep it confidential. The whole engagement is on your side of the table." },
      { q: "How long are the check-ins?", a: "20–30 minutes weekly, plus async Slack/email for anything urgent." },
    ],
    ctaH2: "Take the next step,<br><em>well-supported</em>.",
    metaDescription:
      "Onboarding guidance for your first 90 days — a custom 30/60/90 plan, stakeholder map, and weekly coaching to set your trajectory in a new role.",
  },

  "ongoing-mentorship": {
    slug: "ongoing-mentorship",
    title: "Ongoing Career Mentorship",
    tag: "PREMIUM SERVICE · 07",
    h1: "Ongoing<br><em>Career Mentorship</em>.",
    subtitle: "A coach in your corner. Always.",
    lead: "A standing relationship with a senior coach who knows your career arc — for the quarterly decisions, the performance reviews, the manager-trouble, and the moments you can't talk about with your team.",
    actions: ["Start a mentorship", "How sessions work"],
    code: {
      file: "arc.md",
      lang: "Career arc · 2yr",
      body: `Q1: senior promo prep
Q2: cross-team scope expansion
Q3: speaking + writing flywheel
Q4: principal-track signaling`,
    },
    metrics: [
      { v: "Quarterly", l: "Cadence default" },
      { v: "1:1", l: "Always your coach" },
      { v: "Async", l: "Slack included" },
    ],
    whyH2: "Why <em>ongoing mentorship</em> compounds.",
    whyP: "Single-shot coaching solves a moment. A standing coach compounds — because they know your manager's name, last quarter's review, and the political map you walked into. Best decisions get made faster.",
    checks: [
      "A single senior coach assigned to you long-term (no rotation)",
      "Quarterly strategy + monthly check-ins (or your preferred cadence)",
      "Slack-channel access between sessions for tactical questions",
      "Performance review prep — both directions",
      "Promotion packet review and political-map updates",
      "Confidential outside-of-company sounding board",
    ],
    secHeads: [
      { eyebrow: "INCLUDED", h2: "What's <em>included</em>.", desc: "Six pieces of an ongoing mentorship engagement." },
      { eyebrow: "PROCESS", h2: "The <em>process</em>.", desc: "Six rhythms across a typical 12-month engagement." },
      { eyebrow: "WHAT CLIENTS SAY", h2: "Real <em>stories</em>.", desc: "Three short snapshots. Full case studies available on request." },
      { eyebrow: "FAQ", h2: "Things people <em>ask first</em>.", desc: "Quick answers. For anything else, the contact form is two clicks away." },
    ],
    tiles: [
      { n: "/ 01", h: "Coach matching", p: "Carefully matched to your career stage, function, and personality." },
      { n: "/ 02", h: "Quarterly strategy", p: "Look-back, look-forward, and one big bet per quarter." },
      { n: "/ 03", h: "Monthly check-ins", p: "Tactical session every 4 weeks on whatever's on your mind." },
      { n: "/ 04", h: "Slack access", p: "DM your coach between sessions. ~24h response on weekdays." },
      { n: "/ 05", h: "Review packets", p: "Self-reviews, performance docs, and promo packets reviewed before submission." },
      { n: "/ 06", h: "Crisis support", p: "Manager conflict, layoff news, surprise offers — we're a same-day call away." },
    ],
    steps: [
      { num: "STEP 01", h: "Match", p: "You meet 2 potential coaches; pick the one you click with." },
      { num: "STEP 02", h: "Map", p: "Career arc, 12-month goals, current blockers, and a written plan." },
      { num: "STEP 03", h: "Cadence", p: "Default: monthly 60-min + Slack. Customizable to your pace." },
      { num: "STEP 04", h: "Quarterly arc", p: "Every 3 months — a deeper look-back and look-forward session." },
      { num: "STEP 05", h: "Reviews", p: "Performance review windows get extra hours." },
      { num: "STEP 06", h: "Renew or pause", p: "Engagement renews annually; you can pause at any time." },
    ],
    quotes: [
      { p: "“Three years in. My coach has been at every inflection point — and the decisions are visibly better for it.”", a: "Janet Vu · VP Engineering, Fintech" },
      { p: "“Same coach for 18 months. I have never had a more honest professional relationship.”", a: "Adrian Petrov · Director of Product" },
      { p: "“The Slack access alone is worth it. Real-time check on a hard email saved me twice this quarter.”", a: "Sasha Kim · Engineering Manager" },
    ],
    faq: [
      { q: "How long is the typical engagement?", a: "Most clients stay 12–36 months. We have clients on year five." },
      { q: "Can I switch coaches?", a: "Yes — but it's rare. The match process up front is thorough." },
      { q: "Is everything confidential?", a: "Yes. We never communicate with your employer. Sessions are not recorded unless you ask." },
      { q: "What if I change jobs?", a: "Your coach goes with you. We've supported coaches through 4 job changes for the same client." },
    ],
    ctaH2: "Take the next step,<br><em>well-supported</em>.",
    metaDescription:
      "Ongoing career mentorship — a dedicated senior coach, quarterly strategy, monthly check-ins, and Slack access that compounds over years.",
  },
};

export const expertiseList: Expertise[] = Object.values(expertise);
export const expertiseSlugs = Object.keys(expertise);
export function getExpertise(slug: string): Expertise | undefined {
  return expertise[slug];
}
