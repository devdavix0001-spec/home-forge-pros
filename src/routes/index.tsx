import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Plus } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { services, gallery, PHONE_1, WHATSAPP } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samanade C.R.D Enterprise | Construction & Design, Dodowa" },
      {
        name: "description",
        content:
          "Residential and commercial construction, architecture drafting, interiors, carpentry, moulding, repairs and equipment rentals in Dodowa Bawaleshie, Ghana.",
      },
      { property: "og:title", content: "Samanade C.R.D Enterprise | Construction & Design" },
      {
        property: "og:description",
        content:
          "A practical construction and design partner for homes, workplaces and commercial spaces in Dodowa, Ghana.",
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
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center px-5 py-16 lg:px-12 lg:py-24">
            <p className="brand-pill">Dodowa Bawaleshie · Ghana</p>
            <h1 className="mt-5 max-w-xl font-display text-4xl leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              We shape spaces that work.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/70 lg:text-lg">
              Construction, architecture drafting, interiors and crafted finishes for residential
              and commercial projects. One practical team from first idea to final handover.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_1}`}
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3.5 text-sm font-extrabold text-accent-foreground transition-colors hover:bg-background"
              >
                <Phone className="h-4 w-4" /> Call Us
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/25 px-5 py-3.5 text-sm font-extrabold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>
          <div className="relative min-h-[25rem] lg:min-h-[39rem]">
            <div className="media-zoom absolute inset-0 overflow-hidden">
              <img
                src={heroImage}
                alt="Samanade C.R.D Enterprise construction site — carpenters and builders at work on a blue-roofed house in Ghana"
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-28">
        <Reveal>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="section-eyebrow">What we do</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
                A complete view of your project.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              We combine planning, construction, fabrication and finishing so the details stay
              connected.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3">
          {[services[0], services[2], services[5]].map((service, index) => (
            <Link
              key={service.slug}
              to="/services/$serviceId"
              params={{ serviceId: service.slug }}
              className={`group relative overflow-hidden border border-border ${index === 0 ? "col-span-2 aspect-[2/1]" : "aspect-[4/3]"}`}
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
              <span className="absolute bottom-4 left-4 right-4 font-display text-lg text-white sm:text-xl">
                {service.title}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <Link
                to="/services/$serviceId"
                params={{ serviceId: s.slug }}
                className="group block h-full bg-background p-6 transition-colors hover:bg-primary hover:text-primary-foreground lg:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-accent/15 text-accent group-hover:bg-accent group-hover:text-accent-foreground">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-extrabold text-muted-foreground group-hover:text-primary-foreground/50">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-lg leading-snug text-primary group-hover:text-primary-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/70">
                  {s.text}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.1em] text-accent transition-[gap] group-hover:gap-3">
                  View details <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-accent hover:gap-3"
          >
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      <section className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-6 lg:py-24">
          <Reveal>
            <p className="section-eyebrow">Why work with us</p>
            <h2 className="mt-3 max-w-md font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
              Practical decisions. Stronger results.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              We bring site experience, fabrication skill and a clear working rhythm to projects
              that need dependable hands and thoughtful detail.
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {[
              [
                "01",
                "One coordinated team",
                "Construction, woodwork, fittings and finishes planned around the same brief.",
              ],
              [
                "02",
                "Built around your space",
                "Measurements, access, use and budget shape the recommendation from the beginning.",
              ],
              [
                "03",
                "Clear communication",
                "We keep the next step, material choice and progress visible as work moves ahead.",
              ],
              [
                "04",
                "Residential or commercial",
                "Homes, offices, shops, hospitality spaces, events and building sites all welcome.",
              ],
            ].map(([number, title, text], index) => (
              <Reveal key={title} delay={index * 70}>
                <div className="h-full bg-muted p-6 lg:p-7">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <p className="mt-7 text-xs font-extrabold text-secondary">{number}</p>
                  <h3 className="mt-2 font-display text-lg text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-24">
          <Reveal>
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="section-eyebrow">Selected work</p>
                <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
                  Made for use. Finished with care.
                </h2>
              </div>
              <Plus className="hidden h-8 w-8 text-accent sm:block" />
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.slice(0, 4).map((g, i) => (
              <Reveal key={g.label} delay={i * 80}>
                <div
                  className={`media-zoom overflow-hidden border border-border ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
                >
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
              className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-accent hover:gap-3"
            >
              View the full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-24">
        <Reveal>
          <p className="section-eyebrow">A simple working rhythm</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
            From an idea to a finished space.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {[
            [
              "01",
              "Tell us",
              "Call, WhatsApp or visit with your idea, drawing, measurements or reference photo.",
            ],
            [
              "02",
              "Plan it",
              "We clarify the scope, advise on materials and agree on a practical way forward.",
            ],
            [
              "03",
              "Make it real",
              "Our team builds, installs, reviews the details and leaves the result ready for use.",
            ],
          ].map(([number, title, text]) => (
            <div key={number} className="bg-background p-6 lg:p-8">
              <p className="text-sm font-extrabold text-accent">{number}</p>
              <h3 className="mt-8 font-display text-xl text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
