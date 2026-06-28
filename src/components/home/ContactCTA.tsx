import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ContactCTA() {
  return (
    <section id="contact" className="mb-16">
      <SectionLabel command="./send-message.sh" />
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 bg-[rgba(166,227,161,0.02)] border border-dashed border-border p-6 rounded-[6px]">
        <div className="flex-1">
          <h3 className="text-text font-bold text-[1.1rem] m-0">Let's build something scalable.</h3>
        </div>
        
        <Link 
          href="/contact"
          className="px-8 py-3 bg-[rgba(166,227,161,0.1)] border border-[rgba(166,227,161,0.3)] text-green rounded-[4px] hover:bg-[rgba(166,227,161,0.2)] transition-colors no-underline font-mono text-[0.85rem] font-bold text-center sm:w-auto w-full"
        >
          Execute
        </Link>
      </div>
    </section>
  );
}
