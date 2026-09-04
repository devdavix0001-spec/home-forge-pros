import { createFileRoute } from "@tanstack/react-router";
import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { ADDRESS, PHONE_1, PHONE_2, WHATSAPP } from "@/lib/site";
import workSite from "@/assets/work-site.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Samanade C.R.D Enterprise" },
      {
        name: "description",
        content:
          "Call, WhatsApp or visit Samanade C.R.D Enterprise in Dodowa Bawaleshie, Ghana for a project quote.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Start a conversation"
        title="Tell us what you want to build"
        subtitle="Share your measurements, photos or a rough idea. We will help you choose the right approach and prepare a clear quote."
        image={workSite}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <h2 className="font-display text-2xl text-primary sm:text-3xl">Reach the team</h2>
          <div className="mt-6 space-y-4">
            <a href={`tel:${PHONE_1}`} className="surface-card lift flex items-start gap-4 p-5">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <span>
                <span className="block font-display text-lg text-primary">Call us</span>
                <span className="mt-1 block text-sm text-muted-foreground">{PHONE_1} · {PHONE_2}</span>
              </span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="surface-card lift flex items-start gap-4 p-5"
            >
              <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <span>
                <span className="block font-display text-lg text-primary">WhatsApp</span>
                <span className="mt-1 block text-sm text-muted-foreground">Send photos or project details</span>
              </span>
            </a>
            <div className="surface-card flex items-start gap-4 p-5">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <span>
                <span className="block font-display text-lg text-primary">Visit the workshop</span>
                <span className="mt-1 block text-sm text-muted-foreground">{ADDRESS}</span>
              </span>
            </div>
            <div className="surface-card flex items-start gap-4 p-5">
              <Clock3 className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <span>
                <span className="block font-display text-lg text-primary">Best time to reach us</span>
                <span className="mt-1 block text-sm text-muted-foreground">Monday to Saturday · 8:00am to 6:00pm</span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-card overflow-hidden">
            <img src={workSite} alt="Construction work in progress" width={1024} height={768} className="h-64 w-full object-cover" />
            <div className="p-6">
              <p className="section-eyebrow">Before you call</p>
              <h2 className="mt-2 font-display text-2xl text-primary">A useful brief saves time</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Include the type of work, your location, approximate measurements and any reference photos. For a site job, tell us whether you need materials, labour or both.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand title="Let's discuss your project" />
    </>
  );
}