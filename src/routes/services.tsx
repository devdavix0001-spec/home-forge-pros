import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Carpentry, Furniture & Construction — Samanade C.R.D" },
      {
        name: "description",
        content:
          "Carpentry works, custom furniture, door installation, interior fittings, cabinets, construction, repairs and building material rentals in Dodowa, Ghana.",
      },
      { property: "og:title", content: "Our Services — Samanade C.R.D Enterprise" },
      {
        property: "og:description",
        content:
          "Seven trades under one roof: carpentry, furniture, doors, interiors, cabinets, construction and equipment rentals.",
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
        title="Services built around your project"
        subtitle="From a single door to a full build, we handle the woodwork, the fittings and the site work with the same standard."
        image={services[2].image}
      />

      <section className="mx-auto max-w-6xl space-y-8 px-4 py-16">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <article className="surface-card lift grid gap-0 overflow-hidden md:grid-cols-[280px_1fr]">
              <div className="media-zoom overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-48 w-full object-cover md:h-full"
                />
              </div>
              <div className="p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                  <s.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 font-display text-xl text-primary">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <p className="mt-3 text-sm leading-relaxed">{s.detail}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <CtaBand title="Need a quote for one of these?" />
    </>
  );
}
