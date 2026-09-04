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
      <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-5 py-12 md:grid-cols-[1fr_0.9fr] md:gap-14 md:py-16 lg:px-6">
        <div className="flex flex-col justify-center">
          <p className="section-eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.05em] text-primary sm:text-5xl lg:text-6xl">
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
          <div className="media-zoom relative min-h-64 overflow-hidden rounded-sm border border-border bg-primary shadow-lg md:min-h-80">
            <img src={image} alt="" aria-hidden="true" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
        )}
      </div>
    </section>
  );
}
