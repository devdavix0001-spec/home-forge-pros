import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import workInterior from "@/assets/work-interior.jpg";
import workSite from "@/assets/work-site.jpg";
import { ADDRESS } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Samanade C.R.D Enterprise, Dodowa Ghana" },
      {
        name: "description",
        content:
          "Samanade C.R.D Enterprise delivers residential and commercial construction, architecture drafting, interiors, carpentry, moulding, repairs and equipment rentals in Dodowa and greater Accra.",
      },
      { property: "og:title", content: "About Samanade C.R.D Enterprise" },
      {
        property: "og:description",
        content:
          "A practical construction and design partner for homes, offices and commercial spaces in Dodowa Bawaleshie, Ghana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  [
    "Built for use",
    "Materials, details and finishes selected for the way each space will actually be used.",
  ],
  [
    "One accountable team",
    "Drafting, construction, joinery, finishes and rentals coordinated around your brief.",
  ],
  [
    "Clear from the start",
    "Practical advice, clear pricing and honest updates through delivery and handover.",
  ],
];

const sectors = [
  [
    "Homes",
    "New builds, extensions, renovations, fitted interiors, furniture and repairs for everyday living.",
  ],
  [
    "Workplaces",
    "Office fit-outs, reception areas, partitions, cabinets and durable finishes for productive spaces.",
  ],
  [
    "Commercial spaces",
    "Construction support, moulding, shop and hospitality interiors, maintenance and site equipment rentals.",
  ],
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A practical partner for building, design and finish"
        subtitle="From a first drawing to the final installation, we help residential and commercial clients move ideas into useful, well-made spaces."
        image={workSite}
      />

      <section className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] lg:px-6 lg:py-28">
        <Reveal>
          <p className="section-eyebrow">More than carpentry</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
            Construction thinking, crafted detail.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Samanade C.R.D Enterprise is a hands-on construction and design company serving Dodowa,
            Bawaleshie and the wider Accra area. We support the full journey of a project: early
            architectural drafting and moulding ideas, practical site planning, general
            construction, interior fitting, custom joinery, finishing and repairs.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our work is designed for both residential and commercial settings, from a family home or
            extension to an office, shop, hospitality space or larger building project. We also make
            selected scaffolding, props, moulds and site equipment available for short- and
            long-term rental, helping other builders keep their projects moving.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            You will find our workshop at {ADDRESS}. Walk in with a sketch, a photo, plot details or
            simply an idea. We will listen, measure where needed, advise on a sensible route and
            give you a clear next step.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="media-zoom overflow-hidden rounded-xl border border-border">
            <img
              src={workInterior}
              alt="Finished modern interior with fitted ceiling and wardrobe"
              loading="lazy"
              width={1024}
              height={768}
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-6 lg:py-20">
          <p className="section-eyebrow text-accent">The standard we bring</p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] sm:text-4xl">How we work</h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-3">
            {values.map(([t, d]) => (
              <div key={t} className="bg-primary p-6">
                <p className="font-display text-lg">{t}</p>
                <p className="mt-2 text-sm leading-relaxed opacity-65">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-24">
        <Reveal>
          <p className="section-eyebrow">Who we serve</p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
            Spaces with a purpose.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {sectors.map(([title, text], index) => (
            <Reveal key={title} delay={index * 80}>
              <article className="h-full bg-background p-6 lg:p-7">
                <p className="text-xs font-extrabold text-accent">0{index + 1}</p>
                <h3 className="mt-8 font-display text-xl text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-6 lg:pb-24">
        <Reveal>
          <h2 className="font-display text-2xl text-primary sm:text-3xl">Our process</h2>
        </Reveal>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["1. Talk", "Call or WhatsApp us with what you need."],
            ["2. Measure", "We visit, measure and advise on materials."],
            ["3. Quote", "A clear written price and timeline."],
            ["4. Build", "We fabricate, install and clean up."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 80}>
              <li className="surface-card lift h-full list-none p-5">
                <p className="font-display text-lg text-primary">{t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <CtaBand title="Let's build something that lasts" />
    </>
  );
}
