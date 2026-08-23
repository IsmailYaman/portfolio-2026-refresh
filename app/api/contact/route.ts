import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/data";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, subject, message } = body as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  try {
    const { error } = await resend.emails.send({
      from: `${SITE.name} website <noreply@ismailkayadelen.com>`,
      to: SITE.email,
      replyTo: email,
      subject: subject ? `New message: ${subject}` : `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message || ""}`,
    });

    if (error) {
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
