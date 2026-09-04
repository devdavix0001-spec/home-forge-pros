import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-muted">
      <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-4 py-10 md:grid-cols-[1fr_0.9fr] md:gap-12 md:py-14">
        <div className="flex flex-col justify-center">
          <p className="section-eyebrow">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.05] text-primary sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
        </div>
        {image && (
          <div className="media-zoom relative min-h-56 overflow-hidden rounded-xl border border-border bg-primary shadow-lg md:min-h-72">
            <img src={image} alt="" aria-hidden="true" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
        )}
      </div>
    </section>
  );
}
