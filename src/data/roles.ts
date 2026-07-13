/** IT role tracks — 13 template-driven pages. */
import type { Metric } from "./expertise";

export type Role = {
  slug: string;
  title: string;
  badge: string;
  h1: string;
  lead: string;
  trust: string[];
  heroStats: Metric[];
  code: { file: string; lang: string; body: string };
  cities: string[];
  market: { eyebrow: string; h2: string; desc: string };
  bigStats: Metric[];
  whyH2: string;
  whyP: string;
  skills: string[];
  ctaH2: string;
  /** Explorer / home-grid metadata */
  category: "Engineering" | "Data & AI" | "Cloud & Security" | "Business";
  demand: string;
  openings: string;
  pay: string;
  topCities: string;
  metaDescription: string;
};

export const roles: Record<string, Role> = {
  "ai-ml-engineer": {
    slug: "ai-ml-engineer",
    title: "AI / ML Engineer",
    badge: "FASTEST GROWING · 52,140+ Openings",
    h1: "Ship intelligence,<br>not just <em>models</em>.",
    lead: "Fine-tune, evaluate, and deploy production ML — from RAG pipelines to fine-tuned LLMs. We place AI/ML engineers on teams shipping intelligence to real users.",
    trust: ["Verified Employers", "98% Success Rate", "500+ Happy Clients"],
    heroStats: [
      { v: "52,140+", l: "Total vacancies" },
      { v: "184+", l: "Successful placements" },
      { v: "$95 – $185", l: "Salary range / hr" },
    ],
    code: {
      file: "train.py",
      lang: "PyTorch · 🤗",
      body: `model = AutoModelForCausalLM.from_pretrained("base")
trainer = SFTTrainer(model, train_dataset=ds,
                     peft_config=LoraConfig(r=16))
trainer.train(); trainer.push_to_hub()`,
    },
    cities: ["San Francisco", "Seattle", "New York"],
    market: {
      eyebrow: "AI / ML ENGINEER JOBS",
      h2: "A market <em>on the move</em>.",
      desc: "AI is the fastest-growing skill set in tech. Organizations are racing to embed LLMs, vision models, and recommendation systems into their products — and engineers who can take models from notebook to production are scarce. We know this market deeply.",
    },
    bigStats: [
      { v: "52,140+", l: "Total vacancies" },
      { v: "184+", l: "Successful placements" },
      { v: "$95 – $185", l: "Salary range / hr" },
      { v: "San Francisco · Seattle · New York", l: "Top hiring cities" },
    ],
    whyH2: "What employers <em>actually ask for</em>.",
    whyP: "Our expertise placing top AI / ML Engineers is unmatched. We work backwards from real job descriptions to know exactly what hiring managers look for — and what to put higher up on your resume.",
    skills: [
      "Strong Python + PyTorch / TensorFlow / JAX",
      "LLM fine-tuning (LoRA, QLoRA, RLHF)",
      "RAG architectures and vector databases",
      "Model evaluation, observability, and guardrails",
      "GPU/TPU training at scale",
      "MLOps: experiment tracking, model registry, CI/CD for ML",
      "Production inference (TensorRT, vLLM, Triton)",
      "Mathematics, statistics, and ML fundamentals",
    ],
    ctaH2: "Let's connect you with<br><em>the right AI role</em>.",
    category: "Data & AI",
    demand: "FASTEST GROWING",
    openings: "52,140+",
    pay: "$95 – $185",
    topCities: "San Francisco · Seattle · New York",
    metaDescription:
      "AI / ML Engineer jobs — 52,140+ openings, $95–$185/hr. We place engineers who ship production ML: LLM fine-tuning, RAG, and MLOps at scale.",
  },

  "software-engineer": {
    slug: "software-engineer",
    title: "Software Engineer",
    badge: "IN-DEMAND · 45,892+ Openings",
    h1: "Build the future as a<br><em>Software Engineer</em>.",
    lead: "Ship resilient systems, craft delightful UIs, and scale products that matter. We match top engineers with teams where they can thrive.",
    trust: ["Verified Employers", "98% Success Rate", "500+ Happy Clients"],
    heroStats: [
      { v: "45,892+", l: "Total vacancies" },
      { v: "156+", l: "Successful placements" },
      { v: "$65 – $120", l: "Salary range / hr" },
    ],
    code: {
      file: "service.ts",
      lang: "TypeScript",
      body: `export const bootstrap = async () => {
  await connectDB();
  startQueue(['billing', 'search']);
  app.listen(443, () => log('ready'));
};`,
    },
    cities: ["San Francisco", "Seattle", "Austin"],
    market: {
      eyebrow: "SOFTWARE ENGINEER JOBS",
      h2: "A market <em>on the move</em>.",
      desc: "The demand for skilled Software Engineers continues to surge across industries. From Silicon Valley to emerging tech hubs, companies are seeking talented engineers who can build robust, scalable software solutions that drive innovation and business growth.",
    },
    bigStats: [
      { v: "45,892+", l: "Total vacancies" },
      { v: "156+", l: "Successful placements" },
      { v: "$65 – $120", l: "Salary range / hr" },
      { v: "San Francisco · Seattle · Austin", l: "Top hiring cities" },
    ],
    whyH2: "What employers <em>actually ask for</em>.",
    whyP: "Our expertise placing top Software Engineers is unmatched. We work backwards from real job descriptions to know exactly what hiring managers look for — and what to put higher up on your resume.",
    skills: [
      "Proficiency in programming languages (Java, Python, C++, etc.)",
      "Strong problem-solving and algorithmic skills",
      "Experience with software development methodologies",
      "Knowledge of data structures and algorithms",
      "Understanding of system design and architecture",
      "Familiarity with version control systems (Git)",
      "Experience with testing and debugging",
      "Knowledge of databases and SQL",
    ],
    ctaH2: "Let's connect you with<br><em>the right Software role</em>.",
    category: "Engineering",
    demand: "IN-DEMAND",
    openings: "45,892+",
    pay: "$65 – $120",
    topCities: "San Francisco · Seattle · Austin",
    metaDescription:
      "Software Engineer jobs — 45,892+ openings, $65–$120/hr. We match engineers with verified teams and coach the whole loop, from resume to offer.",
  },

  "data-scientist": {
    slug: "data-scientist",
    title: "Data Scientist",
    badge: "HIGH DEMAND · 38,756+ Openings",
    h1: "From raw data to<br><em>predictive intelligence</em>.",
    lead: "Build models, surface insights, and move metrics that matter. We place top Data Scientists on high-impact product and platform teams.",
    trust: ["Verified Employers", "98% Success Rate", "500+ Happy Clients"],
    heroStats: [
      { v: "38,756+", l: "Total vacancies" },
      { v: "98+", l: "Successful placements" },
      { v: "$75 – $140", l: "Salary range / hr" },
    ],
    code: {
      file: "model.py",
      lang: "PyTorch",
      body: `X, y = loader.batch()
y_hat = net(X)
loss = F.cross_entropy(y_hat, y)
loss.backward(); opt.step()`,
    },
    cities: ["San Francisco", "Seattle", "Boston"],
    market: {
      eyebrow: "DATA SCIENTIST JOBS",
      h2: "A market <em>on the move</em>.",
      desc: "In the age of big data, organizations are racing to unlock the power of their data assets. Data Scientists are at the forefront — using advanced analytics, machine learning, and statistical modeling to extract insights that drive strategic decisions and competitive advantage.",
    },
    bigStats: [
      { v: "38,756+", l: "Total vacancies" },
      { v: "98+", l: "Successful placements" },
      { v: "$75 – $140", l: "Salary range / hr" },
      { v: "San Francisco · Seattle · Boston", l: "Top hiring cities" },
    ],
    whyH2: "What employers <em>actually ask for</em>.",
    whyP: "Our expertise placing top Data Scientists is unmatched. We work backwards from real job descriptions to know exactly what hiring managers look for — and what to put higher up on your resume.",
    skills: [
      "Proficiency in Python, R, and SQL",
      "Strong statistical and mathematics background",
      "Experience with machine learning algorithms",
      "Knowledge of data visualization (Tableau, Power BI)",
      "Familiarity with big data (Hadoop, Spark)",
      "Deep learning frameworks (TensorFlow, PyTorch)",
      "Data preprocessing and feature engineering",
      "Strong problem-solving and analytical skills",
    ],
    ctaH2: "Let's connect you with<br><em>the right Data role</em>.",
    category: "Data & AI",
    demand: "HIGH DEMAND",
    openings: "38,756+",
    pay: "$75 – $140",
    topCities: "San Francisco · Seattle · Boston",
    metaDescription:
      "Data Scientist jobs — 38,756+ openings, $75–$140/hr. We place data scientists on high-impact product and platform teams.",
  },

  "cloud-engineer": {
    slug: "cloud-engineer",
    title: "Cloud Engineer",
    badge: "HIGH DEMAND · 41,203+ Openings",
    h1: "Architect, automate &amp;<br><em>scale in the cloud</em>.",
    lead: "Design resilient infrastructure, ship faster with IaC, and keep costs lean. We place top Cloud Engineers on teams driving real transformation.",
    trust: ["Verified Employers", "98% Success Rate", "500+ Happy Clients"],
    heroStats: [
      { v: "41,203+", l: "Total vacancies" },
      { v: "134+", l: "Successful placements" },
      { v: "$70 – $130", l: "Salary range / hr" },
    ],
    code: {
      file: "main.tf",
      lang: "Terraform",
      body: `resource "aws_instance" "app" {
  ami           = "ami-0abc123"
  instance_type = "t3.medium"
  tags = { Name = "demo-app" }
}`,
    },
    cities: ["Seattle", "San Francisco", "Austin"],
    market: {
      eyebrow: "CLOUD ENGINEER JOBS",
      h2: "A market <em>on the move</em>.",
      desc: "The cloud computing revolution is transforming how businesses operate and scale. Organizations worldwide are migrating to cloud platforms, creating unprecedented demand for skilled Cloud Engineers who can design, implement, and manage infrastructure that drives digital transformation.",
    },
    bigStats: [
      { v: "41,203+", l: "Total vacancies" },
      { v: "134+", l: "Successful placements" },
      { v: "$70 – $130", l: "Salary range / hr" },
      { v: "Seattle · San Francisco · Austin", l: "Top hiring cities" },
    ],
    whyH2: "What employers <em>actually ask for</em>.",
    whyP: "Our expertise placing top Cloud Engineers is unmatched. We work backwards from real job descriptions to know exactly what hiring managers look for — and what to put higher up on your resume.",
    skills: [
      "AWS, Azure, or Google Cloud Platform",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Container orchestration (Kubernetes, Docker)",
      "Network and security best practices",
      "CI/CD pipelines",
      "Monitoring and logging (CloudWatch, ELK)",
      "Scripting and automation (Python, Bash)",
      "Microservices architecture",
    ],
    ctaH2: "Let's connect you with<br><em>the right Cloud role</em>.",
    category: "Cloud & Security",
    demand: "HIGH DEMAND",
    openings: "41,203+",
    pay: "$70 – $130",
    topCities: "Seattle · San Francisco · Austin",
    metaDescription:
      "Cloud Engineer jobs — 41,203+ openings, $70–$130/hr. We place cloud engineers fluent in AWS/Azure/GCP, IaC, and Kubernetes.",
  },

  "python-developer": {
    slug: "python-developer",
    title: "Python Developer",
    badge: "HIGH DEMAND · 42,189+ Openings",
    h1: "Build fast, ship reliably<br>with <em>Python</em>.",
    lead: "From APIs to AI, Python powers modern products. We place top Python engineers on teams where their code moves the metrics that matter.",
    trust: ["Verified Employers", "98% Success Rate", "500+ Happy Clients"],
    heroStats: [
      { v: "42,189+", l: "Total vacancies" },
      { v: "143+", l: "Successful placements" },
      { v: "$60 – $110", l: "Salary range / hr" },
    ],
    code: {
      file: "api.py",
      lang: "FastAPI",
      body: `from fastapi import FastAPI
app = FastAPI()

@app.get("/health")
def ok():
    return {"status": "ready"}`,
    },
    cities: ["San Francisco", "Seattle", "Austin"],
    market: {
      eyebrow: "PYTHON DEVELOPER JOBS",
      h2: "A market <em>on the move</em>.",
      desc: "Python's simplicity, versatility, and extensive libraries have made it the language of choice for data science, ML, web, and automation. As organizations increasingly adopt Python for diverse applications, demand for skilled developers continues to soar across all sectors.",
    },
    bigStats: [
      { v: "42,189+", l: "Total vacancies" },
      { v: "143+", l: "Successful placements" },
      { v: "$60 – $110", l: "Salary range / hr" },
      { v: "San Francisco · Seattle · Austin", l: "Top hiring cities" },
    ],
    whyH2: "What employers <em>actually ask for</em>.",
    whyP: "Our expertise placing top Python Developers is unmatched. We work backwards from real job descriptions to know exactly what hiring managers look for — and what to put higher up on your resume.",
    skills: [
      "Strong proficiency in Python (3.x)",
      "Web frameworks (Django, Flask, FastAPI)",
      "Data science libraries (Pandas, NumPy, Scikit-learn)",
      "Database experience (SQL, MongoDB, PostgreSQL)",
      "RESTful APIs and microservices",
      "Version control (Git)",
      "Testing frameworks (pytest, unittest)",
      "Cloud platforms (AWS, Azure, GCP)",
    ],
    ctaH2: "Let's connect you with<br><em>the right Python role</em>.",
    category: "Engineering",
    demand: "HIGH DEMAND",
    openings: "42,189+",
    pay: "$60 – $110",
    topCities: "San Francisco · Seattle · Austin",
    metaDescription:
      "Python Developer jobs — 42,189+ openings, $60–$110/hr. We place Python engineers across web (Django/FastAPI), data, and automation.",
  },

  "devops-engineer": {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    badge: "HIGH DEMAND · 38,947+ Openings",
    h1: "Ship faster, safer,<br>and <em>at scale</em>.",
    lead: "Automate CI/CD, harden platforms, and keep costs lean. We place elite DevOps engineers on teams where reliability and velocity go hand-in-hand.",
    trust: ["Verified Employers", "98% Success Rate", "500+ Happy Clients"],
    heroStats: [
      { v: "38,947+", l: "Total vacancies" },
      { v: "132+", l: "Successful placements" },
      { v: "$70 – $125", l: "Salary range / hr" },
    ],
    code: {
      file: "pipeline.yml",
      lang: "CI/CD",
      body: `name: deploy
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4`,
    },
    cities: ["Seattle", "San Francisco", "Austin"],
    market: {
      eyebrow: "DEVOPS ENGINEER JOBS",
      h2: "A market <em>on the move</em>.",
      desc: "DevOps has become the cornerstone of modern software development and deployment. As organizations accelerate digital transformation, the need for skilled DevOps Engineers who can bridge development and operations continues to grow exponentially.",
    },
    bigStats: [
      { v: "38,947+", l: "Total vacancies" },
      { v: "132+", l: "Successful placements" },
      { v: "$70 – $125", l: "Salary range / hr" },
      { v: "Seattle · San Francisco · Austin", l: "Top hiring cities" },
    ],
    whyH2: "What employers <em>actually ask for</em>.",
    whyP: "Our expertise placing top DevOps Engineers is unmatched. We work backwards from real job descriptions to know exactly what hiring managers look for — and what to put higher up on your resume.",
    skills: [
      "Cloud platforms (AWS, Azure, GCP)",
      "Containerization (Docker, Kubernetes)",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "CI/CD pipelines (Jenkins, GitLab CI, GitHub Actions)",
      "Scripting and automation (Python, Bash, PowerShell)",
      "Monitoring and logging (ELK, Prometheus)",
      "Configuration management (Ansible, Puppet, Chef)",
      "Strong Linux/Unix systems understanding",
    ],
    ctaH2: "Let's connect you with<br><em>the right DevOps role</em>.",
    category: "Cloud & Security",
    demand: "HIGH DEMAND",
    openings: "38,947+",
    pay: "$70 – $125",
    topCities: "Seattle · San Francisco · Austin",
    metaDescription:
      "DevOps Engineer jobs — 38,947+ openings, $70–$125/hr. We place DevOps engineers who automate CI/CD and harden platforms at scale.",
  },

  "site-reliability-engineer": {
    slug: "site-reliability-engineer",
    title: "Site Reliability Engineer",
    badge: "HIGH DEMAND · 21,940+ Openings",
    h1: "Keep production<br><em>standing tall</em>.",
    lead: "Run the platforms that customers depend on. We place SREs on teams where SLOs, incident response, and reliability engineering are taken seriously.",
    trust: ["Verified Employers", "98% Success Rate", "500+ Happy Clients"],
    heroStats: [
      { v: "21,940+", l: "Total vacancies" },
      { v: "86+", l: "Successful placements" },
      { v: "$80 – $150", l: "Salary range / hr" },
    ],
    code: {
      file: "slo.yaml",
      lang: "SLO Spec",
      body: `service: checkout-api
slo:
  availability: 99.95
  latency_p95_ms: 200
  error_budget_policy: freeze_releases`,
    },
    cities: ["Seattle", "San Francisco", "Austin"],
    market: {
      eyebrow: "SITE RELIABILITY ENGINEER JOBS",
      h2: "A market <em>on the move</em>.",
      desc: "Reliability isn't a feature — it's the substrate everything else runs on. SREs combine software engineering with systems thinking to make sure platforms scale, fail gracefully, and recover fast. Companies pay a premium for the few who do it well.",
    },
    bigStats: [
      { v: "21,940+", l: "Total vacancies" },
      { v: "86+", l: "Successful placements" },
      { v: "$80 – $150", l: "Salary range / hr" },
      { v: "Seattle · San Francisco · Austin", l: "Top hiring cities" },
    ],
    whyH2: "What employers <em>actually ask for</em>.",
    whyP: "Our expertise placing top Site Reliability Engineers is unmatched. We work backwards from real job descriptions to know exactly what hiring managers look for — and what to put higher up on your resume.",
    skills: [
      "Linux internals, networking, and distributed systems",
      "SLOs, error budgets, and incident response",
      "Observability (Prometheus, Grafana, OpenTelemetry)",
      "Cloud platforms (AWS, GCP, Azure)",
      "Container orchestration (Kubernetes)",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Programming (Go, Python, Bash)",
      "Postmortem culture and blameless retros",
    ],
    ctaH2: "Let's connect you with<br><em>the right Site role</em>.",
    category: "Cloud & Security",
    demand: "HIGH DEMAND",
    openings: "21,940+",
    pay: "$80 – $150",
    topCities: "Seattle · San Francisco · Austin",
    metaDescription:
      "Site Reliability Engineer jobs — 21,940+ openings, $80–$150/hr. We place SREs on teams that take SLOs and incident response seriously.",
  },

  "cyber-security": {
    slug: "cyber-security",
    title: "Cyber Security",
    badge: "HIGH DEMAND · 31,567+ Openings",
    h1: "Protect what matters with<br><em>intelligence &amp; rigor</em>.",
    lead: "Prevent breaches, harden systems, and respond with precision. We place top security talent where resilience and compliance are mission-critical.",
    trust: ["Verified Employers", "98% Success Rate", "500+ Happy Clients"],
    heroStats: [
      { v: "31,567+", l: "Total vacancies" },
      { v: "98+", l: "Successful placements" },
      { v: "$75 – $135", l: "Salary range / hr" },
    ],
    code: {
      file: "siem_rule.yml",
      lang: "Detection",
      body: `title: Suspicious Admin Login
when: failed_logins > 5 and geo != usual_geo
then: alert(level="high", playbook="IR-001")`,
    },
    cities: ["Washington DC", "New York", "San Francisco"],
    market: {
      eyebrow: "CYBER SECURITY JOBS",
      h2: "A market <em>on the move</em>.",
      desc: "In an era of increasing cyber threats and data breaches, organizations across all industries are prioritizing cybersecurity. The demand for skilled professionals who can protect digital assets, detect threats, and respond to incidents has never been higher.",
    },
    bigStats: [
      { v: "31,567+", l: "Total vacancies" },
      { v: "98+", l: "Successful placements" },
      { v: "$75 – $135", l: "Salary range / hr" },
      { v: "Washington DC · New York · San Francisco", l: "Top hiring cities" },
    ],
    whyH2: "What employers <em>actually ask for</em>.",
    whyP: "Our expertise placing top Cyber Security specialists is unmatched. We work backwards from real job descriptions to know exactly what hiring managers look for — and what to put higher up on your resume.",
    skills: [
      "Network security and firewall management",
      "Intrusion detection and prevention systems",
      "Vulnerability assessment and pen testing",
      "Incident response and forensic analysis",
      "SIEM (Security Information and Event Management)",
      "Compliance frameworks (NIST, ISO 27001)",
      "Cloud security (AWS, Azure, GCP)",
      "Ethical hacking and red teaming",
    ],
    ctaH2: "Let's connect you with<br><em>the right Cyber role</em>.",
    category: "Cloud & Security",
    demand: "HIGH DEMAND",
    openings: "31,567+",
    pay: "$75 – $135",
    topCities: "Washington DC · New York · San Francisco",
    metaDescription:
      "Cyber Security jobs — 31,567+ openings, $75–$135/hr. We place security talent across AppSec, IR, SIEM, and cloud security.",
  },

  "full-stack-developer": {
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    badge: "IN-DEMAND · 27,486+ Openings",
    h1: "Become a<br><em>Full Stack Developer</em>.",
    lead: "Build end-to-end experiences across modern frontends and scalable backends. We connect talented engineers with high-growth teams nationwide.",
    trust: ["Verified Employers", "98% Success Rate", "500+ Happy Clients"],
    heroStats: [
      { v: "27,486+", l: "Total vacancies" },
      { v: "74+", l: "Successful placements" },
      { v: "$49 – $89", l: "Salary range / hr" },
    ],
    code: {
      file: "fullstack.ts",
      lang: "TypeScript",
      body: `const api = createServer({
  routes: ['auth', 'jobs', 'apply'],
})
app.mount(ui()).secure().scale();`,
    },
    cities: ["New York", "Austin"],
    market: {
      eyebrow: "FULL STACK DEVELOPER JOBS",
      h2: "A market <em>on the move</em>.",
      desc: "The job market for Full Stack Developers is booming nationwide. From bustling tech hubs on the coasts to growing innovation centers across the country, there are exciting opportunities for skilled developers all over the country.",
    },
    bigStats: [
      { v: "27,486+", l: "Total vacancies" },
      { v: "74+", l: "Successful placements" },
      { v: "$49 – $89", l: "Salary range / hr" },
      { v: "New York · Austin", l: "Top hiring cities" },
    ],
    whyH2: "What employers <em>actually ask for</em>.",
    whyP: "Our expertise placing top Full Stack Developers is unmatched. We work backwards from real job descriptions to know exactly what hiring managers look for — and what to put higher up on your resume.",
    skills: [
      "Proficiency in HTML/CSS",
      "Mastery of JavaScript",
      "Backend development",
      "Experience with databases",
      "Familiarity with frameworks (React, Vue, etc.)",
      "Knowledge of version control (Git)",
      "API design and integration",
      "Deployment and DevOps basics",
    ],
    ctaH2: "Let's connect you with<br><em>the right Full Stack role</em>.",
    category: "Engineering",
    demand: "IN-DEMAND",
    openings: "27,486+",
    pay: "$49 – $89",
    topCities: "New York · Austin",
    metaDescription:
      "Full Stack Developer jobs — 27,486+ openings, $49–$89/hr. We connect full-stack engineers with high-growth teams nationwide.",
  },

  "mobile-developer": {
    slug: "mobile-developer",
    title: "Mobile Developer",
    badge: "IN-DEMAND · 24,820+ Openings",
    h1: "Build apps that<br><em>live in pockets</em>.",
    lead: "iOS, Android, or cross-platform — we place mobile engineers on teams where craft, performance, and shipping cadence all matter.",
    trust: ["Verified Employers", "98% Success Rate", "500+ Happy Clients"],
    heroStats: [
      { v: "24,820+", l: "Total vacancies" },
      { v: "96+", l: "Successful placements" },
      { v: "$60 – $115", l: "Salary range / hr" },
    ],
    code: {
      file: "HomeView.swift",
      lang: "SwiftUI",
      body: `struct HomeView: View {
  @State var jobs: [Job] = []
  var body: some View {
    List(jobs) { JobRow(job: $0) }
      .task { jobs = await API.fetch() }
  }
}`,
    },
    cities: ["San Francisco", "New York", "Austin"],
    market: {
      eyebrow: "MOBILE DEVELOPER JOBS",
      h2: "A market <em>on the move</em>.",
      desc: "Mobile is where most users meet your product. Companies are doubling down on native experiences — and the bar for performance, accessibility, and offline-first design has never been higher. We match mobile specialists with teams that respect the craft.",
    },
    bigStats: [
      { v: "24,820+", l: "Total vacancies" },
      { v: "96+", l: "Successful placements" },
      { v: "$60 – $115", l: "Salary range / hr" },
      { v: "San Francisco · New York · Austin", l: "Top hiring cities" },
    ],
    whyH2: "What employers <em>actually ask for</em>.",
    whyP: "Our expertise placing top Mobile Developers is unmatched. We work backwards from real job descriptions to know exactly what hiring managers look for — and what to put higher up on your resume.",
    skills: [
      "iOS: Swift, SwiftUI, UIKit, Xcode",
      "Android: Kotlin, Jetpack Compose, Android Studio",
      "Cross-platform: React Native, Flutter",
      "Mobile architecture (MVVM, MVI, TCA)",
      "Networking, caching, and offline-first patterns",
      "App Store / Play Store release management",
      "Performance, memory, and battery profiling",
      "Accessibility and localization",
    ],
    ctaH2: "Let's connect you with<br><em>the right Mobile role</em>.",
    category: "Engineering",
    demand: "IN-DEMAND",
    openings: "24,820+",
    pay: "$60 – $115",
    topCities: "San Francisco · New York · Austin",
    metaDescription:
      "Mobile Developer jobs — 24,820+ openings, $60–$115/hr. We place iOS, Android, and cross-platform engineers on craft-first teams.",
  },

  "java-developer": {
    slug: "java-developer",
    title: "Java Developer",
    badge: "PROVEN STACK · 35,421+ Openings",
    h1: "Ship reliable systems with<br><em>Java &amp; Spring</em>.",
    lead: "Build robust microservices, scalable APIs, and enterprise-grade applications. We match top Java developers with teams moving mission-critical products forward.",
    trust: ["Verified Employers", "98% Success Rate", "500+ Happy Clients"],
    heroStats: [
      { v: "35,421+", l: "Total vacancies" },
      { v: "127+", l: "Successful placements" },
      { v: "$65 – $115", l: "Salary range / hr" },
    ],
    code: {
      file: "Application.java",
      lang: "Spring Boot",
      body: `@RestController
class Health {
  @GetMapping("/health")
  String ok() { return "UP"; }
}`,
    },
    cities: ["New York", "Chicago", "Atlanta"],
    market: {
      eyebrow: "JAVA DEVELOPER JOBS",
      h2: "A market <em>on the move</em>.",
      desc: "Java remains one of the most widely used languages in enterprise software. With its robustness, scalability, and extensive ecosystem, Java continues to power critical business applications across industries, creating sustained demand for skilled developers.",
    },
    bigStats: [
      { v: "35,421+", l: "Total vacancies" },
      { v: "127+", l: "Successful placements" },
      { v: "$65 – $115", l: "Salary range / hr" },
      { v: "New York · Chicago · Atlanta", l: "Top hiring cities" },
    ],
    whyH2: "What employers <em>actually ask for</em>.",
    whyP: "Our expertise placing top Java Developers is unmatched. We work backwards from real job descriptions to know exactly what hiring managers look for — and what to put higher up on your resume.",
    skills: [
      "Strong proficiency in Java (JDK 8+)",
      "Experience with Spring Framework (Boot, MVC)",
      "Microservices architecture",
      "Database experience (JPA, Hibernate, SQL)",
      "RESTful APIs and web services",
      "Build tools (Maven, Gradle)",
      "Testing frameworks (JUnit, Mockito)",
      "Version control (Git)",
    ],
    ctaH2: "Let's connect you with<br><em>the right Java role</em>.",
    category: "Engineering",
    demand: "PROVEN STACK",
    openings: "35,421+",
    pay: "$65 – $115",
    topCities: "New York · Chicago · Atlanta",
    metaDescription:
      "Java Developer jobs — 35,421+ openings, $65–$115/hr. We place Java/Spring developers on teams building mission-critical systems.",
  },

  "business-analyst": {
    slug: "business-analyst",
    title: "Business Analyst",
    badge: "HIGH DEMAND · 28,934+ Openings",
    h1: "Turn requirements into<br><em>measurable outcomes</em>.",
    lead: "Translate business needs, optimize processes, and enable data-driven decisions. We place top Business Analysts on teams where strategy meets execution.",
    trust: ["Verified Employers", "98% Success Rate", "500+ Happy Clients"],
    heroStats: [
      { v: "28,934+", l: "Total vacancies" },
      { v: "112+", l: "Successful placements" },
      { v: "$60 – $105", l: "Salary range / hr" },
    ],
    code: {
      file: "requirements.md",
      lang: "BA Draft",
      body: `Goal: Reduce onboarding time by 25%
KPIs: cycle_time, NPS, support_tickets
Plan: map AS-IS -> TO-BE, automate approvals`,
    },
    cities: ["New York", "Chicago", "Dallas"],
    market: {
      eyebrow: "BUSINESS ANALYST JOBS",
      h2: "A market <em>on the move</em>.",
      desc: "In today's competitive landscape, organizations rely on Business Analysts to bridge business needs and technology solutions. The demand for skilled professionals who can analyze complex business problems and drive strategic initiatives continues to grow across all industries.",
    },
    bigStats: [
      { v: "28,934+", l: "Total vacancies" },
      { v: "112+", l: "Successful placements" },
      { v: "$60 – $105", l: "Salary range / hr" },
      { v: "New York · Chicago · Dallas", l: "Top hiring cities" },
    ],
    whyH2: "What employers <em>actually ask for</em>.",
    whyP: "Our expertise placing top Business Analysts is unmatched. We work backwards from real job descriptions to know exactly what hiring managers look for — and what to put higher up on your resume.",
    skills: [
      "Strong analytical and problem-solving",
      "Requirement gathering and documentation",
      "Business process modeling",
      "Data analysis and visualization",
      "Project management methodologies",
      "Excellent communication and stakeholder management",
      "SQL and database concepts",
      "Industry tools (Jira, Confluence)",
    ],
    ctaH2: "Let's connect you with<br><em>the right Business role</em>.",
    category: "Business",
    demand: "HIGH DEMAND",
    openings: "28,934+",
    pay: "$60 – $105",
    topCities: "New York · Chicago · Dallas",
    metaDescription:
      "Business Analyst jobs — 28,934+ openings, $60–$105/hr. We place BAs who turn requirements into measurable outcomes.",
  },

  "data-analyst": {
    slug: "data-analyst",
    title: "Data Analyst",
    badge: "HIGH DEMAND · 32,567+ Openings",
    h1: "Turn data into<br><em>business impact</em>.",
    lead: "Uncover insights, build dashboards, and guide strategy with evidence. We place top Analysts in teams where their work drives real outcomes.",
    trust: ["Verified Employers", "98% Success Rate", "500+ Happy Clients"],
    heroStats: [
      { v: "32,567+", l: "Total vacancies" },
      { v: "89+", l: "Successful placements" },
      { v: "$55 – $95", l: "Salary range / hr" },
    ],
    code: {
      file: "analysis.py",
      lang: "Python",
      body: `import pandas as pd
df = pd.read_csv('events.csv')
kpis = df.groupby('channel').revenue.sum()
print(kpis.sort_values()[-3:])`,
    },
    cities: ["New York", "Chicago", "Boston"],
    market: {
      eyebrow: "DATA ANALYST JOBS",
      h2: "A market <em>on the move</em>.",
      desc: "The data revolution is transforming industries worldwide. Organizations are increasingly recognizing the value of data-driven decision making, creating unprecedented demand for skilled Data Analysts who can extract insights from complex datasets.",
    },
    bigStats: [
      { v: "32,567+", l: "Total vacancies" },
      { v: "89+", l: "Successful placements" },
      { v: "$55 – $95", l: "Salary range / hr" },
      { v: "New York · Chicago · Boston", l: "Top hiring cities" },
    ],
    whyH2: "What employers <em>actually ask for</em>.",
    whyP: "Our expertise placing top Data Analysts is unmatched. We work backwards from real job descriptions to know exactly what hiring managers look for — and what to put higher up on your resume.",
    skills: [
      "SQL and database querying",
      "Strong Excel skills",
      "Statistical analysis",
      "Data visualization (Tableau, Power BI)",
      "Python or R for data analysis",
      "Data warehousing concepts",
      "ETL processes",
      "Strong analytical and problem-solving skills",
    ],
    ctaH2: "Let's connect you with<br><em>the right Data role</em>.",
    category: "Data & AI",
    demand: "HIGH DEMAND",
    openings: "32,567+",
    pay: "$55 – $95",
    topCities: "New York · Chicago · Boston",
    metaDescription:
      "Data Analyst jobs — 32,567+ openings, $55–$95/hr. We place analysts who turn data into dashboards and decisions.",
  },
};

/** Ordered for the roles explorer / dropdown / home grid. */
export const roleOrder = [
  "ai-ml-engineer",
  "software-engineer",
  "data-scientist",
  "cloud-engineer",
  "python-developer",
  "devops-engineer",
  "site-reliability-engineer",
  "cyber-security",
  "full-stack-developer",
  "mobile-developer",
  "java-developer",
  "business-analyst",
  "data-analyst",
];

export const roleList: Role[] = roleOrder.map((slug) => roles[slug]);
export const roleSlugs = roleOrder;
export function getRole(slug: string): Role | undefined {
  return roles[slug];
}

/** Six featured tracks for the home page grid. */
export const featuredRoleSlugs = [
  "software-engineer",
  "data-scientist",
  "cloud-engineer",
  "python-developer",
  "devops-engineer",
  "cyber-security",
];
