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

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-6 lg:py-20">
          <Reveal>
            <p className="section-eyebrow">How to choose a starting point</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
              Start with the part of the project you know.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {[
              ["Building", "New builds, extensions, roofing, formwork, repairs or site support."],
              ["Making", "Carpentry, furniture, doors and cabinet fabrication for a precise fit."],
              [
                "Finishing",
                "Interiors, event setups, ceilings, fittings, moulding and final details.",
              ],
            ].map(([title, text], index) => (
              <div key={title} className="bg-background p-6 lg:p-8">
                <p className="text-xs font-extrabold text-accent">0{index + 1}</p>
                <h3 className="mt-8 font-display text-xl text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-6 lg:pb-24">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <p className="section-eyebrow">Service directory</p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
              Choose the support your project needs.
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted-foreground sm:block">
            Open any service for a fuller explanation of the process, scope and next steps.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <Link
                to="/services/$serviceId"
                params={{ serviceId: s.slug }}
                className="group block h-full overflow-hidden border border-border bg-background transition-colors hover:border-secondary"
              >
                <article className="flex h-full flex-col">
                  <div className="media-zoom aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 lg:p-7">
                    <div className="flex items-start justify-between gap-5">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-accent/15 text-accent">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-extrabold text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-7 font-display text-xl tracking-[-0.035em] text-primary">
                      {s.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                    <p className="mt-4 border-l-2 border-accent pl-4 text-sm leading-relaxed text-foreground/75">
                      {s.detail}
                    </p>
                    <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-extrabold text-accent transition-[gap] group-hover:gap-3">
                      Explore this service <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-6 lg:py-20">
          <Reveal>
            <p className="section-eyebrow text-accent">Once you choose a direction</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-[-0.04em] sm:text-4xl">
              The next steps stay clear.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden border border-primary-foreground/15 bg-primary-foreground/15 md:grid-cols-3">
            {[
              [
                "01",
                "Brief",
                "We clarify exactly what needs to be done, where it will happen and what a good result means to you.",
              ],
              [
                "02",
                "Scope",
                "We discuss measurements, materials, labour, rental needs, timing and the practical limits of the job.",
              ],
              [
                "03",
                "Delivery",
                "We agree on the work sequence, keep you informed and review the completed details before handover.",
              ],
            ].map(([number, title, text]) => (
              <div key={number} className="bg-primary p-6 lg:p-8">
                <p className="text-sm font-extrabold text-accent">{number}</p>
                <h3 className="mt-8 font-display text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Need a quote for one of these?" />
    </>
  );
}
