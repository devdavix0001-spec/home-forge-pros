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
        image={gallery[2].src}
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <Reveal key={item.label} delay={index * 70}>
              <figure
                className={`group overflow-hidden border border-border bg-background ${index === 0 ? "sm:col-span-2 lg:row-span-2" : ""}`}
              >
                <div className="media-zoom aspect-[4/3]">
                  <img
                    src={item.src}
                    alt={item.label}
                    loading={index > 2 ? "lazy" : undefined}
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 p-5 font-display text-lg text-primary">
                  {item.label}
                  <span className="text-xs font-extrabold text-accent">0{index + 1}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Have a project like this in mind?" />
    </>
  );
}
