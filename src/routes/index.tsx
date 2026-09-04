import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import workCarpentry from "@/assets/work-carpentry.jpg";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { services, gallery, PHONE_1, WHATSAPP } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samanade C.R.D Enterprise | Carpentry & Construction, Dodowa" },
      {
        name: "description",
        content:
          "Carpentry, custom furniture, doors, interior fittings, construction, repairs and building material rentals in Dodowa Bawaleshie, Ghana. Call 0558729697.",
      },
      { property: "og:title", content: "Samanade C.R.D Enterprise | Carpentry & Construction" },
      {
        property: "og:description",
        content:
          "Quality craftsmanship built to last — carpentry, furniture, doors, interiors and construction in Dodowa, Ghana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-muted">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="section-eyebrow">Dodowa Bawaleshie · Ghana</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] text-primary sm:text-5xl md:text-6xl">
              Quality Craftsmanship.
              <span className="block text-secondary">Built to Last.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Carpentry, furniture fabrication, interiors, construction and repairs — plus building
              material rentals. Local know-how, modern finish.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_1}`}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
              >
                <Phone className="h-4 w-4" /> Call Us
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="media-zoom overflow-hidden rounded-xl border border-border shadow-lg">
              <img
                src={heroImage}
                alt="Samanade C.R.D Enterprise construction site — carpenters and builders at work on a blue-roofed house in Ghana"
                width={1024}
                height={768}
                className="h-full max-h-[420px] w-full object-cover"
              />
            </div>
            <div className="float-soft absolute -bottom-6 -left-4 hidden w-40 overflow-hidden rounded-xl border-4 border-background shadow-xl sm:block">
              <img
                src={workCarpentry}
                alt="Carpenter building a wardrobe in the workshop"
                loading="lazy"
                width={1024}
                height={768}
                className="h-28 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <p className="section-eyebrow">What we do</p>
          <h2 className="mt-2 font-display text-3xl text-primary sm:text-4xl">Our Services</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="surface-card lift h-full p-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg leading-snug text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"
          >
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* Work strip */}
      <section className="bg-primary/5">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <Reveal>
            <p className="section-eyebrow">Portfolio</p>
            <h2 className="mt-2 font-display text-3xl text-primary sm:text-4xl">Recent Work</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.slice(0, 4).map((g, i) => (
              <Reveal key={g.label} delay={i * 80}>
                <div className="media-zoom aspect-square overflow-hidden rounded-xl border border-border shadow-lg">
                  <img
                    src={g.src}
                    alt={g.label}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <Link
              to="/work"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"
            >
              View the full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
