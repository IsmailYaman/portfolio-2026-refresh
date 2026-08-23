"use client";

import React from "react";
import { Input } from "./input";
import { Button } from "../core/button";
import { Eyebrow } from "../core/eyebrow";

export function ContactForm() {
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
      <h2 className="ev-h4">Get in touch</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--ev-space-6)" }}>
        <Input label="Name" placeholder="Jane Doe" required name="name" />
        <Input label="Email" type="email" placeholder="you@studio.com" required name="email" />
      </div>
      <Input label="Subject" placeholder="Brand identity for a new studio" name="subject" />
      <Input label="Message" multiline rows={5} placeholder="Tell me about the project" name="message" />
      <div style={{ display: "flex", alignItems: "center", gap: "var(--ev-space-5)" }}>
        <Button variant="solid" size="lg" arrow disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send message"}
        </Button>
        {status === "sent" && <Eyebrow dot="signal">Thanks — I&rsquo;ll reply within two days</Eyebrow>}
        {status === "error" && <Eyebrow dot="ink">Something went wrong — please try again</Eyebrow>}
      </div>
    </form>
  );
}
