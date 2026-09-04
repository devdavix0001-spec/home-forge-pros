import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { videos } from "@/lib/site";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Videos | Samanade C.R.D Enterprise" },
      {
        name: "description",
        content:
          "See Samanade C.R.D Enterprise carpentry, workshop and construction work in action in Dodowa, Ghana.",
      },
    ],
  }),
  component: VideosPage,
});

function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="On site and in the workshop"
        title="See how the work comes together"
        subtitle="From the first cut to the final fitting, these short clips show the care behind each project."
        image={videos[0].poster}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="section-eyebrow">Behind the work</p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
            See the process in motion.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A closer look at the people, tools and site work behind the finished spaces.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {videos.map((video, index) => (
            <Reveal key={video.title} delay={index * 100}>
              <article className="overflow-hidden border border-border bg-background">
                <video
                  className="aspect-video w-full bg-primary object-cover"
                  controls
                  preload="metadata"
                  poster={video.poster}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
                <div className="p-6">
                  <p className="text-xs font-extrabold text-accent">0{index + 1}</p>
                  <h2 className="mt-4 font-display text-xl text-primary">{video.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{video.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-6 lg:py-20">
          <Reveal>
            <p className="section-eyebrow">Look closer</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
              The details behind the finished result.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              [
                "Preparation",
                "Good work starts with measurements, material choices and a clear sequence before the tools begin.",
              ],
              [
                "Craft",
                "Joinery, fitting, alignment and finishing details shape how a project looks and performs.",
              ],
              [
                "Site discipline",
                "A clean, considered workflow helps the team make progress while protecting the work around it.",
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-6 lg:py-24">
        <Reveal>
          <p className="section-eyebrow">From the first movement to the final line</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-[-0.04em] text-primary sm:text-4xl">
            A site is a sequence of decisions.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {[
            [
              "Prepare",
              "Measurements, material preparation and a workable order of tasks give the team a strong start.",
            ],
            [
              "Build",
              "The team turns drawings, dimensions and material into structure, fittings, joinery or finish.",
            ],
            [
              "Refine",
              "The last adjustments matter: alignment, smooth operation, clean edges and a ready-to-use space.",
            ],
          ].map(([title, text], index) => (
            <div key={title} className="bg-background p-6 lg:p-8">
              <p className="text-xs font-extrabold text-accent">0{index + 1}</p>
              <h3 className="mt-8 font-display text-xl text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Planning your next build?" />
    </>
  );
}
