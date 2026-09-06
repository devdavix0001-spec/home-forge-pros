import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import workInterior from "@/assets/samandecrd-60.jpeg";
import workSite from "@/assets/samandecrd-59.jpeg";
import { ADDRESS } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Samanade C.R.D Enterprise, Dodowa Ghana" },
      {
        name: "description",
        content:
          "Samanade C.R.D Enterprise delivers construction and building works, architectural and technical drawings, custom furniture fabrication, cabinetry, interior fittings, installation, renovation and construction material rentals in Dodowa and greater Accra. Your dreams, our blueprint.",
      },
      { property: "og:title", content: "About Samanade C.R.D Enterprise" },
      {
        property: "og:description",
        content:
          "A professional construction, architectural drawing, furniture fabrication, cabinet-making and installation service for homes, offices and commercial spaces in Dodowa Bawaleshie, Ghana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  [
    "Quality workmanship",
    "Every drawing, build, fabrication and installation is carried out to a high, consistent standard from start to finish.",
  ],
  [
    "Attention to detail",
    "Materials, measurements and finishes are chosen with care, so the small decisions add up to a better result.",
  ],
  [
    "Durability",
    "We build and fabricate for the long term, selecting methods and materials designed to stand up to everyday use.",
  ],
  [
    "Safety",
    "Site work, fabrication and installation follow safe, disciplined practice at every stage of a project.",
  ],
  [
    "Professionalism",
    "Clear pricing, honest timelines and dependable communication from the first conversation to handover.",
  ],
  [
    "Customer satisfaction",
    "We work closely with every client to understand their vision and deliver results that add lasting value.",
  ],
];

const sectors = [
  [
    "Homes",
    "New builds, extensions, renovations, fitted interiors, custom furniture and repairs for everyday living.",
  ],
  [
    "Workplaces",
    "Office fit-outs, reception areas, partitions, cabinetry and durable finishes for productive spaces.",
  ],
  [
    "Commercial & hospitality",
    "Construction support, cabinetry, shop and hospitality interiors, maintenance and site equipment rentals.",
  ],
];

const serviceList = [
  "Construction & Building Works",
  "Architectural & Technical Drawings",
  "Construction Material Rentals",
  "Custom Furniture Fabrication",
  "Kitchen & Wardrobe Cabinetry",
  "Interior Fittings & Finishing",
  "Door & Woodwork Installation",
  "Professional Furniture & Cabinet Installation",
  "Renovation, Remodeling & Maintenance",
  "Project Supervision & Site Coordination",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Building ideas. Creating spaces. Delivering excellence."
        subtitle="Samanade C.R.D Enterprise is a professional construction, architectural drawing, furniture fabrication, cabinet-making and installation service dedicated to transforming ideas into quality, functional and lasting spaces."
        image={workSite}
      />

      <section className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] lg:px-6 lg:py-28">
        <Reveal>
          <p className="section-eyebrow">More than carpentry</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
            Construction thinking, crafted detail.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We provide construction and building services, architectural and technical drawings,
            construction material rentals, custom furniture making, cabinet fabrication, interior
            fittings and professional installation. Our approach combines practical craftsmanship,
            creative design, technical precision and quality materials to deliver solutions that
            meet our clients' needs and expectations.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From concept and architectural drawings to construction, custom furniture, cabinetry
            and final installation, we provide a complete and coordinated service designed to make
            every project efficient, reliable and professionally executed. Samanade C.R.D
            Enterprise supports the full journey of a project: early architectural drafting and
            planning, practical site coordination, general construction, interior fitting, custom
            joinery, finishing and repairs.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our work is designed for both residential and commercial settings, from a family home
            or extension to an office, shop, hospitality space or larger building project. We also
            make selected construction materials and site equipment available for short- and
            long-term rental, helping other builders keep their projects moving.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            You will find our workshop at {ADDRESS}. Walk in with a sketch, a photo, plot details
            or simply an idea. We will listen, measure where needed, advise on a sensible route and
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
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="brand-pill">Our vision</p>
              <p className="mt-4 max-w-md text-base leading-relaxed opacity-75">
                To become a trusted and recognized provider of professional construction, design,
                fabrication, rental and installation solutions through quality, innovation and
                exceptional craftsmanship.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="brand-pill">Our promise</p>
              <p className="mt-4 max-w-md text-base leading-relaxed opacity-75">
                We don't just build or fabricate — we create practical solutions, beautiful spaces
                and quality results designed to stand the test of time.
              </p>
              <p className="mt-4 font-display text-xl tracking-[-0.02em]">
                Your dreams, our blueprint.
              </p>
            </Reveal>
          </div>
          <p className="mt-12 text-sm font-extrabold uppercase tracking-[0.15em] opacity-60">
            The standard we bring
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-[-0.04em] sm:text-4xl">How we work</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-75">
            Every project we take on, large or small, is measured against the same six
            commitments. They shape how we quote, how we build and how we hand a finished space
            back to you.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(([t, d]) => (
              <div key={t} className="bg-primary p-6">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <p className="mt-4 font-display text-lg">{t}</p>
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
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Every space has a different job to do. We tailor materials, sequencing and finishes to
            how a home, workplace or commercial space will actually be lived in and used.
          </p>
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

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-24">
          <Reveal>
            <p className="section-eyebrow">Our services</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
              A complete construction and design offer.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Ten coordinated services, delivered by one accountable team — from the first
              drawing to the final installation and everything a project needs to stay on
              schedule in between.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-2">
            {serviceList.map((title, index) => (
              <Reveal key={title} delay={index * 50}>
                <div className="flex h-full items-start gap-4 bg-background p-5 lg:p-6">
                  <span className="mt-0.5 text-xs font-extrabold text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-base leading-snug text-primary">{title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-24">
        <Reveal>
          <p className="section-eyebrow">What we bring together</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
            The practical sides of a good project.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            [
              "Planning",
              "We help turn rough ideas, measurements and site needs into a sensible sequence of work, backed by clear architectural and technical drawings.",
            ],
            [
              "Making",
              "Our workshop and site work cover general construction, custom furniture, cabinetry, doors and woodwork, plus material and equipment rentals.",
            ],
            [
              "Finishing",
              "Interior fittings, installation, renovation, remodeling and maintenance bring the final character to a space and keep it looking its best.",
            ],
          ].map(([title, text], index) => (
            <Reveal key={title} delay={index * 80}>
              <article className="border-t-2 border-accent pt-5">
                <p className="text-xs font-extrabold text-secondary">0{index + 1}</p>
                <h3 className="mt-5 font-display text-xl text-primary">{title}</h3>
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

      <section className="border-t border-border bg-muted">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-6 lg:py-24">
          <Reveal>
            <p className="section-eyebrow justify-center">Ready when you are</p>
            <p className="mt-5 font-display text-2xl leading-snug tracking-[-0.03em] text-primary sm:text-3xl">
              Whether it's a residential, commercial, office, hospitality or renovation project,
              we're ready to listen, advise and build something that lasts.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Your dreams, our blueprint" />
    </>
  );
}
