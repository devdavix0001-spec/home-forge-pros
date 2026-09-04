import { Link } from "@tanstack/react-router";
import { Facebook, Music2 } from "lucide-react";
import logo from "@/assets/samanade-logo.jpg.asset.json";
import { navLinks, PHONE_1, PHONE_2, FACEBOOK, TIKTOK, ADDRESS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="rule-stripe h-1 w-full" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="Samanade C.R.D Enterprise logo"
            className="h-12 w-12 shrink-0 rounded-md bg-card object-contain p-1"
          />
          <div className="min-w-0">
            <p className="font-display text-lg">SAMANADE C.R.D</p>
            <p className="text-xs opacity-80">{ADDRESS}</p>
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-2 text-sm md:justify-self-center">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="opacity-90 hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm md:text-right">
          <p>
            <a href={`tel:${PHONE_1}`} className="font-semibold hover:underline">
              {PHONE_1}
            </a>{" "}
            ·{" "}
            <a href={`tel:${PHONE_2}`} className="font-semibold hover:underline">
              {PHONE_2}
            </a>
          </p>
          <div className="mt-2 flex gap-3 md:justify-end">
            <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href={TIKTOK} target="_blank" rel="noreferrer" aria-label="TikTok">
              <Music2 className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-3 text-xs opacity-70">
            © {new Date().getFullYear()} Samanade C.R.D Enterprise
          </p>
        </div>
      </div>
    </footer>
  );
}
