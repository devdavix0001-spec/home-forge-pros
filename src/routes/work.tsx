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
        subtitle="A look at the joinery, fittings and building work we deliver for homes, offices and construction projects around Dodowa."
        image={gallery[2].src}
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <Reveal key={item.label} delay={index * 70}>
              <figure className="surface-card lift overflow-hidden">
                <div className="media-zoom aspect-[4/3]">
                  <img
                    src={item.src}
                    alt={item.label}
                    loading={index > 2 ? "lazy" : undefined}
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="p-4 font-display text-lg text-primary">{item.label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Have a project like this in mind?" />
    </>
  );
}