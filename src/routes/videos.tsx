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

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {videos.map((video, index) => (
            <Reveal key={video.title} delay={index * 100}>
              <article className="surface-card overflow-hidden">
                <video
                  className="aspect-video w-full bg-primary object-cover"
                  controls
                  preload="metadata"
                  poster={video.poster}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
                <div className="p-5">
                  <h2 className="font-display text-xl text-primary">{video.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{video.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Planning your next build?" />
    </>
  );
}