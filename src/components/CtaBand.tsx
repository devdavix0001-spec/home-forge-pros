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
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl">{title}</h2>
          <p className="mt-2 max-w-xl text-sm opacity-90">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`tel:${PHONE_1}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" /> Call {PHONE_1}
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-bold text-primary transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
