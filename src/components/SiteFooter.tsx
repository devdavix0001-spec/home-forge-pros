import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Facebook, Music2, PhoneCall } from "lucide-react";
import logo from "@/assets/samanade-logo.jpg";
import { navLinks, PHONE_1, PHONE_2, FACEBOOK, TIKTOK, ADDRESS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="rule-stripe h-1 w-full" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:px-6">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Samanade C.R.D Enterprise logo"
              className="h-12 w-12 shrink-0 rounded-sm bg-card object-contain p-1"
            />
            <div className="min-w-0">
              <p className="font-display text-lg tracking-[-0.04em]">SAMANADE C.R.D</p>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] opacity-65">
                Enterprise · Ghana
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-75">
            A practical construction and design partner for residential and commercial spaces, from
            first drawing to final finish.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm lg:justify-self-center">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="opacity-75 transition-opacity hover:opacity-100">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm lg:text-right">
          <p className="section-eyebrow text-accent">Start a project</p>
          <p className="mt-3 flex items-center gap-2 font-display text-xl lg:justify-end">
            <PhoneCall className="h-4 w-4 text-accent" />
            <a href={`tel:${PHONE_1}`} className="hover:text-accent">
              {PHONE_1}
            </a>
          </p>
          <p className="mt-1 opacity-70 lg:text-right">
            {PHONE_2} · {ADDRESS}
          </p>
          <div className="mt-5 flex gap-3 lg:justify-end">
            <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href={TIKTOK} target="_blank" rel="noreferrer" aria-label="TikTok">
              <Music2 className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-6 flex items-center gap-1 text-xs opacity-55 lg:justify-end">
            <ArrowUpRight className="h-3 w-3" />© {new Date().getFullYear()} Samanade C.R.D
            Enterprise
          </p>
        </div>
      </div>
    </footer>
  );
}
