import { NextResponse } from "next/server";
import { site } from "@/data/site";

export const runtime = "nodejs";
// Never cache a form submission endpoint.
export const dynamic = "force-dynamic";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  visa: string;
  location: string;
  track: string;
  msg: string;
};

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

function validate(body: Record<string, unknown>) {
  const data: ContactPayload = {
    name: str(body.name),
    email: str(body.email),
    company: str(body.company),
    visa: str(body.visa),
    location: str(body.location),
    track: str(body.track),
    msg: str(body.msg),
  };
  const fields: string[] = [];
  if (!data.name) fields.push("name");
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) fields.push("email");
  if (!data.visa) fields.push("visa");
  if (!data.location) fields.push("location");
  if (!data.track) fields.push("track");
  if (data.msg.length < 20) fields.push("msg");
  return { data, fields };
}

/**
 * Delivers the inquiry. Configuration is optional and read from env:
 *   - RESEND_API_KEY + CONTACT_TO_EMAIL  → sends an email via Resend
 *   - CONTACT_WEBHOOK_URL                → POSTs the JSON payload to a webhook
 *   - (neither)                          → logs server-side (safe default)
 * Returns false only if a configured delivery attempt fails.
 */
async function deliver(data: ContactPayload): Promise<boolean> {
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Velora Careers <onboarding@resend.dev>";
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  const summary = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || "—"}`,
    `Visa status: ${data.visa}`,
    `Location: ${data.location}`,
    `Preferred track: ${data.track}`,
    "",
    data.msg,
  ].join("\n");

  if (resendKey && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `New candidate inquiry — ${data.name}`,
        text: summary,
      }),
    });
    return res.ok;
  }

  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, site: site.domain }),
    });
    return res.ok;
  }

  // No delivery configured — log and accept (keeps the site functional pre-config).
  console.info("[contact] inquiry received (no delivery configured):", summary);
  return true;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const { data, fields } = validate(body);
  if (fields.length > 0) {
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields.", fields },
      { status: 400 },
    );
  }

  try {
    const delivered = await deliver(data);
    if (!delivered) {
      return NextResponse.json(
        { ok: false, error: "We couldn't send your message. Please try again." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[contact] delivery error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong on our end. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
