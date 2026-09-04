import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services/$serviceId")({
  head: ({ params }) => {
    const service = services.find((item) => item.slug === params.serviceId);
    return {
      meta: [
        { title: `${service?.title ?? "Service"} | Samanade C.R.D Enterprise` },
        {
          name: "description",
          content:
            service?.detail ??
            "Professional construction, interiors, fabrication and rental support from Samanade C.R.D Enterprise in Dodowa, Ghana.",
        },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { serviceId } = Route.useParams();
  const service = services.find((item) => item.slug === serviceId);

  if (!service) {
    return (
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-6">
        <p className="section-eyebrow">Service not found</p>
        <h1 className="mt-3 font-display text-4xl text-primary">That service is not available.</h1>
        <Link to="/services" className="mt-6 inline-flex items-center gap-2 font-bold text-accent">
          <ArrowLeft className="h-4 w-4" /> Back to services
        </Link>
      </section>
    );
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={service.title}
        subtitle={service.text}
        image={service.image}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-6 lg:py-24">
        <Reveal>
          <p className="section-eyebrow">The service in detail</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
            A clear plan for work that needs to last.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {service.detail}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We begin by understanding the space, measurements, materials and finish you need. Then
            we agree on the practical sequence of work, explain what is included and keep
            communication open as the project moves forward.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="border border-border bg-muted p-6 lg:p-8">
            <p className="section-eyebrow">What you can expect</p>
            <ul className="mt-6 space-y-4">
              {[
                "A conversation about your brief, site and priorities",
                "Practical advice on measurements, materials and finish",
                "Clear steps before work begins and updates during delivery",
                "Careful installation, review and handover",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-6 lg:py-20">
          <p className="section-eyebrow text-accent">Our approach</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-[-0.04em] sm:text-4xl">
            From first conversation to finished work.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-primary-foreground/15 bg-primary-foreground/15 md:grid-cols-3">
            {[
              [
                "01",
                "Understand",
                "We listen to the brief, inspect the site where needed and confirm what a successful result looks like.",
              ],
              [
                "02",
                "Prepare",
                "We agree on measurements, materials, sequence, timing and the practical details needed to start.",
              ],
              [
                "03",
                "Deliver",
                "We complete the work carefully, review the finish with you and leave the next steps clear.",
              ],
            ].map(([number, title, text]) => (
              <div key={number} className="bg-primary p-6 lg:p-8">
                <p className="text-sm font-extrabold text-accent">{number}</p>
                <h3 className="mt-8 font-display text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-24">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="section-eyebrow">Continue exploring</p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
              Other ways we can help.
            </h2>
          </div>
          <Link
            to="/services"
            className="hidden items-center gap-2 text-sm font-extrabold text-accent sm:inline-flex"
          >
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {relatedServices.map((item) => (
            <Link
              key={item.slug}
              to="/services/$serviceId"
              params={{ serviceId: item.slug }}
              className="bg-background p-6 transition-colors hover:bg-muted lg:p-7"
            >
              <item.icon className="h-5 w-5 text-accent" />
              <h3 className="mt-8 font-display text-xl text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand title={`Ready to discuss ${service.navTitle.toLowerCase()}?`} />
    </>
  );
}
