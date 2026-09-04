import { Phone, MessageCircle } from "lucide-react";
import { PHONE_1, WHATSAPP } from "@/lib/site";

export function CtaBand({
  title = "Ready to start your project?",
  text = "Call us or send a message on WhatsApp — we reply fast and quote honestly.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between lg:px-6 lg:py-20">
        <div>
          <p className="section-eyebrow text-accent">Let&apos;s work together</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-[-0.04em] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed opacity-70">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`tel:${PHONE_1}`}
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3.5 text-sm font-extrabold text-accent-foreground transition-colors hover:bg-background"
          >
            <Phone className="h-4 w-4" /> Call {PHONE_1}
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/25 px-5 py-3.5 text-sm font-extrabold text-primary-foreground transition-colors hover:bg-background hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
