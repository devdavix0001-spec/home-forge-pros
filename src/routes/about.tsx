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
          "Samanade C.R.D Enterprise is a Dodowa-based carpentry and construction team committed to quality craftsmanship, durability, timely delivery and customer satisfaction.",
      },
      { property: "og:title", content: "About Samanade C.R.D Enterprise" },
      {
        property: "og:description",
        content:
          "Local hands, modern finish — carpentry, furniture, interiors and construction from Dodowa Bawaleshie, Ghana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  ["Durable", "Materials and joinery chosen to last in Ghana's climate."],
  ["On time", "Agreed timelines, kept — and honest updates if anything shifts."],
  ["Fair", "Clear pricing before we start. No surprises at handover."],
];

export default function _unused() {
  return null;
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Local hands. Modern finish."
        subtitle="A hands-on carpentry and construction team serving Dodowa and greater Accra."
        image={workSite}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-16 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-2xl text-primary sm:text-3xl">Who we are</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We provide professional carpentry, furniture fabrication, interior design, construction,
            repairs, and equipment/material rental services. Our work covers both local and modern
            designs, including custom furniture, interior fittings, doors, cabinets, and general
            woodwork. We are committed to quality craftsmanship, durability, timely delivery, and
            customer satisfaction.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            You will find our workshop at {ADDRESS}. Walk in with a sketch, a photo or just an idea —
            we will measure, advise and give you a straight price.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="media-zoom overflow-hidden rounded-xl border border-border shadow-lg">
            <img
              src={workInterior}
              alt="Finished modern interior with fitted ceiling and wardrobe"
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-display text-2xl sm:text-3xl">How we work</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {values.map(([t, d]) => (
              <div key={t} className="rounded-md border border-primary-foreground/20 p-5">
                <p className="font-display text-lg">{t}</p>
                <p className="mt-1 text-sm opacity-80">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
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
