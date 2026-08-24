"use client";

import React from "react";
import { Input } from "./input";
import { Button } from "../core/button";
import { Eyebrow } from "../core/eyebrow";
import { t } from "@/lib/dictionary";
import type { Locale } from "@/lib/locale";

export function ContactForm({ locale }: { locale: Locale }) {
  const d = t(locale).form;
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-6)" }}>
      <h2 className="ev-h4">{d.getInTouch}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--ev-space-6)" }}>
        <Input label={d.name} placeholder={d.namePlaceholder} required name="name" />
        <Input label={d.email} type="email" placeholder={d.emailPlaceholder} required name="email" />
      </div>
      <Input label={d.subject} placeholder={d.subjectPlaceholder} name="subject" />
      <Input label={d.message} multiline rows={5} placeholder={d.messagePlaceholder} name="message" />
      <div style={{ display: "flex", alignItems: "center", gap: "var(--ev-space-5)" }}>
        <Button variant="solid" size="lg" arrow disabled={status === "sending"}>
          {status === "sending" ? d.sending : status === "sent" ? d.sent : d.send}
        </Button>
        {status === "sent" && <Eyebrow dot="signal">{d.sentNote}</Eyebrow>}
        {status === "error" && <Eyebrow dot="ink">{d.errorNote}</Eyebrow>}
      </div>
    </form>
  );
}
