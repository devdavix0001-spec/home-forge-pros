import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/samanade-logo.jpg.asset.json";
import { navLinks, PHONE_1 } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="rule-stripe h-1 w-full" />
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="Samanade C.R.D Enterprise logo"
            className="h-11 w-11 shrink-0 rounded-md object-contain"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-base leading-tight text-primary">
              SAMANADE
            </span>
            <span className="block truncate text-[0.65rem] font-semibold tracking-[0.2em] text-muted-foreground">
              C.R.D ENTERPRISE
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${PHONE_1}`}
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Call Now
          </a>
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-card px-4 py-3 md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="block border-b border-border py-3 text-sm font-semibold last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${PHONE_1}`}
            className="mt-3 block rounded-md bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground"
          >
            Call Now
          </a>
        </nav>
      )}
    </header>
  );
}
