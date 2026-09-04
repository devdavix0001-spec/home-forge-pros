import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Construction, Drafting & Interiors — Samanade C.R.D" },
      {
        name: "description",
        content:
          "General construction, architecture drafting, moulding, carpentry, custom furniture, interior fittings, repairs and equipment rentals in Dodowa, Ghana.",
      },
      { property: "og:title", content: "Our Services — Samanade C.R.D Enterprise" },
      {
        property: "og:description",
        content:
          "Construction, drafting, moulding, carpentry, furniture, interiors, repairs and equipment rentals for residential and commercial projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="One team for the full project"
        subtitle="From architecture drafting and moulding to construction, fit-out, repairs and equipment rentals, we bring practical coordination to residential and commercial work."
        image={services[2].image}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-6 lg:py-20">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Our capabilities</p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
            From the drawing board to handover.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every project has different needs. We can support one defined trade or coordinate
            several parts of the job, with clear advice on materials, measurements, sequence and
            finish.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-5 pb-20 lg:px-6 lg:pb-24">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <article className="group grid gap-0 overflow-hidden border border-border bg-background md:grid-cols-[minmax(15rem,0.7fr)_1fr]">
              <div className="media-zoom min-h-56 overflow-hidden bg-muted">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full min-h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="relative p-6 lg:p-8">
                <div className="flex items-start justify-between gap-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-accent/15 text-accent">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-extrabold text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-8 font-display text-2xl tracking-[-0.035em] text-primary">
                  {s.title}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
                <p className="mt-5 max-w-2xl border-l-2 border-accent pl-4 text-sm leading-relaxed text-foreground/75">
                  {s.detail}
                </p>
                <Link
                  to="/services/$serviceId"
                  params={{ serviceId: s.slug }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-accent transition-[gap] hover:gap-3"
                >
                  Explore this service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <CtaBand title="Need a quote for one of these?" />
    </>
  );
}
