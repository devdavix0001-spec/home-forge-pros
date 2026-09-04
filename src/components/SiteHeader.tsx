import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Menu, PhoneCall, X } from "lucide-react";
import logo from "@/assets/samanade-logo.jpg.asset.json";
import { navLinks, PHONE_1 } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="hidden border-b border-border bg-muted/60 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
          <span>Construction · Interiors · Drafting · Rentals</span>
          <span>Serving Dodowa & greater Accra</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="Samanade C.R.D Enterprise logo"
            className="h-12 w-12 shrink-0 rounded-sm object-contain mix-blend-multiply"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-[1.05rem] leading-tight tracking-[-0.04em] text-primary">
              SAMANADE C.R.D
            </span>
            <span className="block truncate text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Enterprise · Ghana
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="text-[0.78rem] font-bold uppercase tracking-[0.08em] text-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${PHONE_1}`}
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <PhoneCall className="h-3.5 w-3.5" /> Call Now
          </a>
        </nav>
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-sm border border-border p-2.5 text-primary transition-colors hover:bg-muted lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-card px-5 py-4 lg:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="flex items-center justify-between border-b border-border py-4 text-sm font-bold uppercase tracking-[0.08em] last:border-0"
            >
              {l.label} <ArrowUpRight className="h-4 w-4 text-accent" />
            </Link>
          ))}
          <a
            href={`tel:${PHONE_1}`}
            className="mt-4 flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3.5 text-center text-xs font-extrabold uppercase tracking-[0.08em] text-primary-foreground"
          >
            <PhoneCall className="h-4 w-4" /> Call Now
          </a>
        </nav>
      )}
    </header>
  );
}
