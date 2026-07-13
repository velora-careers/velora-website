"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check } from "@/components/icons";

const VISA_OPTIONS = [
  "US Citizen",
  "Green Card / PR",
  "H1B",
  "H4 EAD",
  "OPT / CPT",
  "Other / Need Sponsorship",
];

const TRACK_OPTIONS = [
  "Software Engineer",
  "Data Scientist",
  "Cloud Engineer",
  "DevOps Engineer",
  "Cyber Security",
  "Full Stack Developer",
  "Java Developer",
  "Python Developer",
  "Business Analyst",
  "Data Analyst",
  "Resume Makeover only",
  "LinkedIn Boost only",
  "Not sure yet",
];

const field =
  "w-full box-border rounded-[10px] border border-field-line bg-field px-[14px] py-[13px] font-sans text-[14px] text-ink outline-none transition-colors focus:border-navy focus:bg-white";
const labelCls =
  "mb-2 block font-mono text-[10.5px] uppercase tracking-[0.13em] text-muted";
const errCls = "mt-1.5 text-[12px] text-danger";

type Errors = Partial<
  Record<"name" | "email" | "visa" | "location" | "track" | "msg", boolean>
>;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [visa, setVisa] = useState("");
  const [location, setLocation] = useState("");
  const [track, setTrack] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  async function submit() {
    const next: Errors = {};
    if (!name.trim()) next.name = true;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = true;
    if (!visa) next.visa = true;
    if (!location.trim()) next.location = true;
    if (!track) next.track = true;
    if (msg.trim().length < 20) next.msg = true;
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setErrors({});
    setServerError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, visa, location, track, msg }),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        fields?: string[];
      };
      if (!res.ok || !json.ok) {
        if (Array.isArray(json.fields)) {
          const fieldErrors: Errors = {};
          for (const f of json.fields) fieldErrors[f as keyof Errors] = true;
          setErrors(fieldErrors);
        }
        setServerError(json.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSent(true);
    } catch {
      setServerError(
        "Network error — please check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-[18px] border border-line-card bg-white p-10 shadow-[0_2px_14px_rgba(10,31,68,0.07)]">
        <div className="px-5 py-14 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy text-gold">
            <Check className="h-[26px] w-[26px]" width={26} height={26} />
          </div>
          <h3 className="mt-[26px] text-[30px] font-bold tracking-[-0.015em] text-ink">
            Message <em className="italic text-gold-dark">received</em>.
          </h3>
          <p className="mx-auto mt-4 max-w-[400px] text-[14.5px] leading-[1.7] text-muted">
            Thanks for reaching out. A career coach will reply within 24 business
            hours. In the meantime, you might enjoy our{" "}
            <Link href="/roles" className="font-semibold text-gold-dark">
              role explorer
            </Link>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[18px] border border-line-card bg-white p-10 shadow-[0_2px_14px_rgba(10,31,68,0.07)]">
      <h3 className="text-[28px] font-bold leading-[1.2] tracking-[-0.015em] text-ink">
        Tell us about
        <br />
        your career goals.
      </h3>
      <p className="mt-3 text-[13.5px] text-faint">
        We&apos;ll route you to the right coach. All fields with{" "}
        <span className="text-gold-dark">*</span> required.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelCls}>
            FULL NAME *
          </label>
          <input
            id="cf-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Candidate"
            className={field}
          />
          {errors.name ? <div className={errCls}>Please enter your name.</div> : null}
        </div>
        <div>
          <label htmlFor="cf-email" className={labelCls}>
            EMAIL ADDRESS *
          </label>
          <input
            id="cf-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className={field}
          />
          {errors.email ? <div className={errCls}>Please enter a valid email.</div> : null}
        </div>
      </div>

      <div className="mt-[18px] grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        <div>
          <label htmlFor="cf-company" className={labelCls}>
            CURRENT COMPANY (OPTIONAL)
          </label>
          <input
            id="cf-company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Acme Inc."
            className={field}
          />
        </div>
        <div>
          <label htmlFor="cf-visa" className={labelCls}>
            VISA STATUS *
          </label>
          <select
            id="cf-visa"
            value={visa}
            onChange={(e) => setVisa(e.target.value)}
            className={field}
          >
            <option value="">Select…</option>
            {VISA_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {errors.visa ? <div className={errCls}>Please select your status.</div> : null}
        </div>
      </div>

      <div className="mt-[18px]">
        <label htmlFor="cf-location" className={labelCls}>
          LOCATION *
        </label>
        <input
          id="cf-location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="City, State / Remote"
          className={field}
        />
        {errors.location ? <div className={errCls}>Where are you based?</div> : null}
      </div>

      <div className="mt-[18px]">
        <label htmlFor="cf-track" className={labelCls}>
          PREFERRED ROLE TRACK *
        </label>
        <select
          id="cf-track"
          value={track}
          onChange={(e) => setTrack(e.target.value)}
          className={field}
        >
          <option value="">Select a track…</option>
          {TRACK_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        {errors.track ? (
          <div className={errCls}>Pick a track or &quot;Not sure yet&quot;.</div>
        ) : null}
      </div>

      <div className="mt-[18px]">
        <label htmlFor="cf-msg" className={labelCls}>
          CAREER GOALS &amp; DETAILS *
        </label>
        <textarea
          id="cf-msg"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          rows={5}
          placeholder="Tell us about your current situation, timeline, and what you're hoping to change…"
          className={`${field} min-h-[120px] resize-y`}
        />
        {errors.msg ? (
          <div className={errCls}>A few sentences, please — at least 20 characters.</div>
        ) : null}
      </div>

      {serverError ? (
        <div
          role="alert"
          className="mt-6 rounded-[10px] border border-danger/30 bg-danger/5 px-4 py-3 text-[13px] text-danger"
        >
          {serverError}
        </div>
      ) : null}

      <div className="mt-7 flex flex-wrap items-center justify-between gap-6">
        <div className="max-w-[340px] text-[11.5px] leading-[1.6] text-faint">
          By submitting, you agree to our privacy practices. We never share your
          details with third parties.
        </div>
        <button
          type="button"
          onClick={submit}
          disabled={submitting}
          aria-busy={submitting}
          className="inline-flex items-center gap-1.5 rounded-full bg-navy px-[30px] py-[15px] font-sans text-[14px] font-bold text-white transition-colors hover:bg-navy-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send Message"}
          {submitting ? null : <ArrowRight className="flex-none" />}
        </button>
      </div>
    </div>
  );
}
