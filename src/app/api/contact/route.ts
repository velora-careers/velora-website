import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
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

const escape = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Gmail / Google Workspace SMTP transport, or null if unconfigured. */
function getTransport() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return null;
  const port = Number(process.env.SMTP_PORT ?? 465);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user, pass: pass.replace(/\s+/g, "") },
  });
}

const NAVY = "#0a1f44";
const GOLD = "#b48a2c";

function brandedShell(title: string, inner: string) {
  return `<!doctype html><html><body style="margin:0;background:#f0eee9;font-family:'Segoe UI',Helvetica,Arial,sans-serif;color:#414b5c">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0eee9;padding:32px 12px">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #e6e9f0;border-radius:16px;overflow:hidden">
        <tr><td style="background:${NAVY};padding:26px 32px">
          <div style="font-size:19px;font-weight:700;letter-spacing:4px;color:#ffffff">VELORA <span style="color:${GOLD}">CAREERS</span></div>
        </td></tr>
        <tr><td style="height:3px;background:${GOLD}"></td></tr>
        <tr><td style="padding:34px 32px 12px">
          <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:${GOLD};font-weight:600">${title}</div>
          ${inner}
        </td></tr>
        <tr><td style="padding:22px 32px 30px;border-top:1px solid #edeff4;color:#8a94a6;font-size:12px;line-height:1.7">
          ${site.email} &nbsp;·&nbsp; ${site.phone}<br>
          ${site.address.street}, ${site.address.locality} ${site.address.region} ${site.address.postalCode}<br>
          <a href="${site.url}" style="color:${GOLD};text-decoration:none">veloracareers.com</a>
        </td></tr>
      </table>
      <div style="color:#8a94a6;font-size:11px;margin-top:16px">© 2026 Velora Careers</div>
    </td></tr>
  </table></body></html>`;
}

function thankYouEmail(data: ContactPayload) {
  const first = data.name.split(/\s+/)[0] || data.name;
  const inner = `
    <h1 style="margin:14px 0 0;font-size:26px;line-height:1.25;color:${NAVY};font-weight:700">Thank you, ${escape(first)}.</h1>
    <p style="margin:16px 0 0;font-size:15px;line-height:1.7">
      We've received your message and a Velora career coach will get back to you within
      <strong style="color:${NAVY}">24 business hours</strong>. We read every submission ourselves — no bots, no spam.
    </p>
    <p style="margin:16px 0 0;font-size:15px;line-height:1.7">Here's what you sent us:</p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:14px 0 0;font-size:14px;line-height:1.8;color:${NAVY}">
      <tr><td style="color:#8a94a6;padding-right:14px">Preferred track</td><td style="font-weight:600">${escape(data.track)}</td></tr>
      <tr><td style="color:#8a94a6;padding-right:14px">Location</td><td style="font-weight:600">${escape(data.location)}</td></tr>
      <tr><td style="color:#8a94a6;padding-right:14px">Work status</td><td style="font-weight:600">${escape(data.visa)}</td></tr>
    </table>
    <p style="margin:20px 0 0;font-size:15px;line-height:1.7">
      In the meantime, explore our <a href="${site.url}/roles" style="color:${GOLD};font-weight:600;text-decoration:none">role tracks</a>
      or read how we <a href="${site.url}/expertise/resume" style="color:${GOLD};font-weight:600;text-decoration:none">rebuild resumes</a>.
    </p>
    <p style="margin:20px 0 4px;font-size:15px;line-height:1.7">Talk soon,<br><strong style="color:${NAVY}">The Velora Careers team</strong></p>
  `;
  const text = `Thank you, ${first}.

We've received your message and a Velora career coach will get back to you within 24 business hours.

What you sent us:
- Preferred track: ${data.track}
- Location: ${data.location}
- Work status: ${data.visa}

In the meantime, explore our role tracks at ${site.url}/roles.

Talk soon,
The Velora Careers team
${site.email} · ${site.phone}`;
  return {
    subject: "Thanks for reaching out to Velora Careers",
    text,
    html: brandedShell("Message received", inner),
  };
}

function notifyEmail(data: ContactPayload) {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company || "—"],
    ["Work status", data.visa],
    ["Location", data.location],
    ["Preferred track", data.track],
  ];
  const table = rows
    .map(
      ([k, v]) =>
        `<tr><td style="color:#8a94a6;padding:4px 16px 4px 0;vertical-align:top">${k}</td><td style="font-weight:600;color:${NAVY}">${escape(v)}</td></tr>`,
    )
    .join("");
  const inner = `
    <h1 style="margin:14px 0 0;font-size:24px;line-height:1.25;color:${NAVY};font-weight:700">New candidate inquiry</h1>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:16px 0 0;font-size:14px;line-height:1.8">${table}</table>
    <div style="margin:18px 0 0;padding:16px 18px;background:#f6f5f1;border-radius:10px;font-size:14px;line-height:1.7;color:${NAVY};white-space:pre-wrap">${escape(data.msg)}</div>
  `;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\n${data.msg}`;
  return {
    subject: `New candidate inquiry — ${data.name} (${data.track})`,
    text,
    html: brandedShell("Contact form", inner),
  };
}

/**
 * Sends the thank-you email to the candidate and a notification to the team.
 * Falls back to a server-side log if SMTP isn't configured (keeps the form working).
 */
async function deliver(data: ContactPayload): Promise<boolean> {
  const transport = getTransport();
  const sender = process.env.SMTP_USER;
  const teamTo = process.env.CONTACT_TO_EMAIL ?? sender;

  if (!transport || !sender) {
    console.info("[contact] SMTP not configured — inquiry logged:", {
      name: data.name,
      email: data.email,
      track: data.track,
    });
    return true;
  }

  const from = `"Velora Careers" <${sender}>`;
  const thanks = thankYouEmail(data);
  const notify = notifyEmail(data);

  // Thank-you to the candidate.
  await transport.sendMail({
    from,
    to: data.email,
    replyTo: teamTo,
    subject: thanks.subject,
    text: thanks.text,
    html: thanks.html,
  });

  // Notification to the team (reply goes straight to the candidate).
  await transport.sendMail({
    from,
    to: teamTo,
    replyTo: data.email,
    subject: notify.subject,
    text: notify.text,
    html: notify.html,
  });

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
    await deliver(data);
  } catch (err) {
    console.error("[contact] delivery error:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
