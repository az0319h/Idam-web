import nodemailer from "nodemailer";
import { contactSchema, formatPhone } from "@/lib/contact-schema";

export const runtime = "nodejs";

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

function env(name: string): string | undefined {
  const v = process.env[name];
  return v && v.trim() ? v.trim() : undefined;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "잘못된 요청입니다." }, { status: 400 });
  }

  // 허니팟에 값이 있으면 봇으로 보고 검증 전에 조용히 성공 처리
  if (typeof body === "object" && body !== null && "website" in body && (body as { website?: unknown }).website) {
    return Response.json({ ok: true });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return Response.json({ ok: false, error: issue?.message ?? "입력 내용을 확인해 주세요.", field: issue?.path[0] }, { status: 400 });
  }
  const data = parsed.data;

  const host = env("SMTP_HOST");
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");
  const to = env("CONTACT_TO") ?? user;
  if (!host || !user || !pass || !to) {
    console.error("[contact] SMTP env missing: set SMTP_HOST, SMTP_USER, SMTP_PASS (and optionally SMTP_PORT, CONTACT_TO)");
    return Response.json({ ok: false, error: "지금은 전송할 수 없습니다. 전화나 문자로 연락 주세요." }, { status: 503 });
  }
  const port = Number(env("SMTP_PORT") ?? 465);

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const phone = formatPhone(data.phone);
  const receivedAt = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
  const subject = `[이담건축 견적 문의] ${data.name} · ${data.area}`;
  const text = [
    `이름: ${data.name}`,
    `연락처: ${phone}`,
    `상담 분야: ${data.area}`,
    `접수 시각: ${receivedAt}`,
    "",
    "내용:",
    data.message,
  ].join("\n");
  const html = `
    <table style="font-family:-apple-system,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;font-size:15px;line-height:1.6;border-collapse:collapse">
      <tr><td style="padding:4px 16px 4px 0;color:#666">이름</td><td style="padding:4px 0"><strong>${escapeHtml(data.name)}</strong></td></tr>
      <tr><td style="padding:4px 16px 4px 0;color:#666">연락처</td><td style="padding:4px 0"><a href="tel:${data.phone}">${phone}</a></td></tr>
      <tr><td style="padding:4px 16px 4px 0;color:#666">상담 분야</td><td style="padding:4px 0">${escapeHtml(data.area)}</td></tr>
      <tr><td style="padding:4px 16px 4px 0;color:#666">접수 시각</td><td style="padding:4px 0">${receivedAt}</td></tr>
      <tr><td style="padding:12px 16px 4px 0;color:#666;vertical-align:top">내용</td><td style="padding:12px 0 4px;white-space:pre-wrap">${escapeHtml(data.message)}</td></tr>
    </table>`;

  try {
    await transporter.sendMail({
      from: `"이담건축 웹사이트" <${user}>`,
      to,
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error("[contact] sendMail failed:", err);
    return Response.json({ ok: false, error: "전송 중 문제가 생겼습니다. 잠시 후 다시 시도하거나 전화로 연락 주세요." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
