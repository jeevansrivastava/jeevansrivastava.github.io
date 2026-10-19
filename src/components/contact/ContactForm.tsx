"use client";
import { useState } from "react";
import { profile } from "@/content/portfolio";
export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error("Message service rejected submission");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <form
      className="contact-form"
      action="https://formspree.io/f/xeebkpqr"
      method="POST"
      onSubmit={handleSubmit}
      aria-busy={status === "submitting"}
    >
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          autoComplete="name"
          required
          maxLength={120}
          disabled={status === "submitting"}
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          required
          maxLength={254}
          disabled={status === "submitting"}
        />
      </div>
      <div className="form-field">
        <label htmlFor="message">What would you like to discuss?</label>
        <textarea
          name="message"
          id="message"
          rows={6}
          placeholder="The technical question, context and kind of input you’re looking for…"
          aria-describedby="project-brief-help"
          required
          maxLength={5000}
          disabled={status === "submitting"}
        />
      </div>
      <p className="form-help" id="project-brief-help">
        A short overview is enough to start. Share the system or decision
        you’re thinking about and what would make a conversation useful.
      </p>
      <p className="form-help">
        Your details are sent through Formspree to handle this enquiry. Prefer
        email? <a href={`mailto:${profile.email}`}>Write to me directly.</a>
      </p>
      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="form-feedback">
            Your message was accepted by the message service. Thank you for
            getting in touch.
          </p>
        )}
        {status === "error" && (
          <p className="form-feedback form-error">
            Your message could not be sent. Your text is still here. Please try
            again or email me directly.
          </p>
        )}
      </div>
      <button
        type="submit"
        className="button button-primary"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
