import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Jeevan Jyoti Srivastava",
  description: "Get in touch for engineering roles, consulting, or architecture reviews.",
};

export default function ContactPage() {
  return (
    <div className="mb-24 max-w-[600px]">
      <div className="mb-12">
        <h1 className="text-[2rem] font-bold text-text mb-4">Get in Touch</h1>
        <p className="text-muted text-[1.05rem] leading-relaxed">
          I'm always open to collaborating with like-minded engineers, discussing complex system architecture, and exploring new ideas in AI infrastructure and distributed systems.
        </p>
      </div>

      <SectionLabel command="./send-message.sh" />

      <ContactForm />

      <div className="mt-16 pt-8 border-t border-dashed border-border font-mono text-[0.85rem] text-dim flex flex-col gap-3">
        <div><span className="text-green">$</span> cat ./direct-contact.json</div>
        <div className="pl-4 text-muted">
          {"{"}
          <br />
          &nbsp;&nbsp;"email": <a href="mailto:hello@jeevansrivastava.com" className="text-accent hover:underline">"hello@jeevansrivastava.com"</a>,
          <br />
          &nbsp;&nbsp;"linkedin": <a href="https://www.linkedin.com/in/jeevanjsrivastava" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">"@jeevanjsrivastava"</a>
          <br />
          {"}"}
        </div>
      </div>
    </div>
  );
}
