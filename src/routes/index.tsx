import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Play, Plus } from "lucide-react";
import heroImage from "@/assets/samandecrd-60.jpg";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { services, featuredWork, videos, PHONE_1, WHATSAPP } from "@/lib/site";
import { useFeaturedWork, useCombinedVideos } from "@/hooks/useRemoteGallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samanade C.R.D Enterprise | Construction, Architecture & Fabrication, Dodowa" },
      {
        name: "description",
        content:
          "Samanade C.R.D Enterprise delivers construction and building works, architectural and technical drawings, custom furniture fabrication, kitchen and wardrobe cabinetry, interior fittings, installation, renovation and site equipment rentals in Dodowa Bawaleshie, Ghana. Your dreams, our blueprint.",
      },
      { property: "og:title", content: "Samanade C.R.D Enterprise | Building Ideas. Creating Spaces. Delivering Excellence." },
      {
        property: "og:description",
        content:
          "A complete construction, architectural drawing, furniture fabrication, cabinet-making and installation service for residential, commercial, office and hospitality projects in Dodowa, Ghana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { images: liveFeaturedWork } = useFeaturedWork(featuredWork);
  const { videos: allVideos } = useCombinedVideos(videos);
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center px-5 py-16 lg:px-12 lg:py-24">
            <p className="brand-pill">Building Ideas. Creating Spaces. Delivering Excellence.</p>
            <h1 className="mt-5 max-w-xl font-display text-4xl leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Welcome to Samanade C.R.D Enterprise.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/70 lg:text-lg">
              Samanade C.R.D Enterprise is a professional construction, architectural drawing,
              furniture fabrication, cabinet-making and installation service dedicated to
              transforming ideas into quality, functional and lasting spaces.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/60 lg:text-base">
              From concept and architectural drawings to construction, custom furniture, cabinetry
              and final installation, we provide a complete and coordinated service designed to
              make every project efficient, reliable and professionally executed.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_1}`}
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3.5 text-sm font-extrabold text-accent-foreground transition-colors hover:bg-background"
              >
                <Phone className="h-4 w-4" /> Call Us
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/25 px-5 py-3.5 text-sm font-extrabold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
            <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
              Your dreams, our blueprint.
            </p>
          </div>
          <div className="relative min-h-[25rem] lg:min-h-[39rem]">
            <div className="media-zoom absolute inset-0 overflow-hidden">
              <img
                src={heroImage}
                alt="Samanade C.R.D Enterprise construction site — carpenters and builders at work on a blue-roofed house in Ghana"
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-28">
        <Reveal>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="section-eyebrow">What we do</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
                A complete view of your project.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              We provide construction and building services, architectural and technical drawings,
              construction material rentals, custom furniture making, cabinet fabrication, interior
              fittings and professional installation — one coordinated service from concept to
              handover.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <Link
                to="/services/$serviceId"
                params={{ serviceId: s.slug }}
                className="group block h-full bg-background p-6 transition-colors hover:bg-primary hover:text-primary-foreground lg:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-accent/15 text-accent group-hover:bg-accent group-hover:text-accent-foreground">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-extrabold text-muted-foreground group-hover:text-primary-foreground/50">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-lg leading-snug text-primary group-hover:text-primary-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/70">
                  {s.text}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.1em] text-accent transition-[gap] group-hover:gap-3">
                  View details <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-accent hover:gap-3"
          >
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      <section className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-6 lg:py-24">
          <Reveal>
            <p className="section-eyebrow">Why work with us</p>
            <h2 className="mt-3 max-w-md font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
              Practical decisions. Stronger results.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Our commitment is built on quality workmanship, attention to detail, durability,
              safety, professionalism and customer satisfaction. Whether it is a residential,
              commercial, office, hospitality or renovation project, we work closely with our
              clients to understand their vision, provide effective solutions and deliver results
              that add lasting value.
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {[
              [
                "01",
                "One coordinated team",
                "Architectural drawings, construction, joinery, cabinetry, finishes and rentals planned around the same brief, from a single accountable team.",
              ],
              [
                "02",
                "Built around your space",
                "Measurements, access, use and budget shape every recommendation from the very first conversation to the final installation.",
              ],
              [
                "03",
                "Clear communication",
                "We keep the next step, material choice, pricing and progress visible throughout, so there are no surprises along the way.",
              ],
              [
                "04",
                "Residential or commercial",
                "Homes, offices, shops, hospitality spaces, renovations and building sites — we bring the same standard of care to every project.",
              ],
            ].map(([number, title, text], index) => (
              <Reveal key={title} delay={index * 70}>
                <div className="h-full bg-muted p-6 lg:p-7">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <p className="mt-7 text-xs font-extrabold text-secondary">{number}</p>
                  <h3 className="mt-2 font-display text-lg text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-24">
          <Reveal>
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="section-eyebrow">Selected work</p>
                <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
                  Made for use. Finished with care.
                </h2>
              </div>
              <Plus className="hidden h-8 w-8 text-accent sm:block" />
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {liveFeaturedWork.slice(0, 4).map((g, i) => (
              <Reveal key={g.label} delay={i * 80}>
                <div
                  className={`media-zoom overflow-hidden border border-border ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
                >
                  <img
                    src={g.src}
                    alt={g.label}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <Link
              to="/work"
              className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-accent hover:gap-3"
            >
              View the full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-24">
        <Reveal>
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="section-eyebrow">On site and in the workshop</p>
              <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
                See the process in motion.
              </h2>
            </div>
            <Play className="hidden h-8 w-8 text-accent sm:block" />
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {allVideos.slice(0, 3).map((video, index) => (
            <Reveal key={video.title + index} delay={index * 90}>
              <Link
                to="/videos"
                className="group block overflow-hidden border border-border bg-background"
              >
                <div className="media-zoom relative aspect-video overflow-hidden bg-primary">
                  <img
                    src={video.poster}
                    alt={video.title}
                    loading="lazy"
                    width={640}
                    height={360}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/30">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
                      <Play className="h-5 w-5" fill="currentColor" />
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-primary">{video.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{video.text}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <Link
            to="/videos"
            className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-accent hover:gap-3"
          >
            Watch all {allVideos.length} videos <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-24">
        <Reveal>
          <p className="section-eyebrow">A simple working rhythm</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
            From an idea to a finished space.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We don't just build or fabricate — we create practical solutions, beautiful spaces and
            quality results designed to stand the test of time.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {[
            [
              "01",
              "Tell us",
              "Call, WhatsApp or visit our workshop with your idea, drawing, measurements or reference photo.",
            ],
            [
              "02",
              "Plan it",
              "We clarify the scope, prepare drawings where needed, advise on materials and agree on a practical, clearly priced way forward.",
            ],
            [
              "03",
              "Make it real",
              "Our team builds, fabricates, installs, reviews every detail and leaves the result ready for use — on time and to a professional standard.",
            ],
          ].map(([number, title, text]) => (
            <div key={number} className="bg-background p-6 lg:p-8">
              <p className="text-sm font-extrabold text-accent">{number}</p>
              <h3 className="mt-8 font-display text-xl text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
