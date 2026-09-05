import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { gallery } from "@/lib/site";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work | Samanade C.R.D Enterprise" },
      {
        name: "description",
        content:
          "Browse carpentry, doors, furniture, cabinets, interior fittings and construction work by Samanade C.R.D Enterprise in Dodowa, Ghana.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Made for real homes and working sites"
        subtitle="A look at the joinery, fittings, interiors and building work we deliver for homes, offices and commercial projects around Dodowa."
        image={gallery[0].src}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-24">
        <div className="mb-10 flex max-w-2xl flex-col gap-3">
          <p className="section-eyebrow">Selected work</p>
          <h2 className="font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
            Practical work, carefully finished.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Each project starts with the way a space needs to work, then we bring the materials,
            measurements and finishing details together.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <Reveal key={item.label} delay={(index % 8) * 60}>
              <figure className="media-zoom group overflow-hidden border border-border bg-background">
                <div className="aspect-square">
                  <img
                    src={item.src}
                    alt={item.label}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-6 lg:py-20">
          <Reveal>
            <p className="section-eyebrow">What the gallery represents</p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
              Work that follows the purpose of the space.
            </h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              [
                "Homes",
                "Furniture, cabinets, doors, ceilings and renovations made for daily life.",
              ],
              [
                "Businesses",
                "Durable interiors, counters, storage and repairs for working spaces.",
              ],
              [
                "Sites",
                "Roofing, formwork, construction support and rentals that keep work moving.",
              ],
            ].map(([title, text], index) => (
              <Reveal key={title} delay={index * 80}>
                <div className="border-t-2 border-secondary pt-4">
                  <p className="text-xs font-extrabold text-accent">0{index + 1}</p>
                  <h3 className="mt-4 font-display text-lg text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-24">
        <Reveal>
          <p className="section-eyebrow">How the work comes together</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
            Good results begin before production.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            [
              "Read the space",
              "We consider how people move, store, work, gather and live in the finished environment.",
            ],
            [
              "Choose the right material",
              "The material, fixing method and finish are selected for use, climate, maintenance and appearance.",
            ],
            [
              "Review the detail",
              "Alignment, edges, fitting and final adjustments are checked before the work is handed over.",
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

      <CtaBand title="Have a project like this in mind?" />
    </>
  );
}
