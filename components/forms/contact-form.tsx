"use client";

import React from "react";
import { Input } from "./input";
import { Button } from "../core/button";
import { Eyebrow } from "../core/eyebrow";

export function ContactForm() {
  const [sent, setSent] = React.useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-6)" }}
    >
      <h2 className="ev-h4">Get in touch</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--ev-space-6)" }}>
        <Input label="Name" placeholder="Jane Doe" required name="name" />
        <Input label="Email" type="email" placeholder="you@studio.com" required name="email" />
      </div>
      <Input label="Subject" placeholder="Brand identity for a new studio" name="subject" />
      <Input label="Message" multiline rows={5} placeholder="Tell me about the project" name="message" />
      <div style={{ display: "flex", alignItems: "center", gap: "var(--ev-space-5)" }}>
        <Button variant="solid" size="lg" arrow>
          {sent ? "Message sent" : "Send message"}
        </Button>
        {sent && <Eyebrow dot="signal">Thanks — I&rsquo;ll reply within two days</Eyebrow>}
      </div>
    </form>
  );
}
