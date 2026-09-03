import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Hammer,
  DoorOpen,
  Sofa,
  Ruler,
  PackageOpen,
  Wrench,
  Boxes,
  Phone,
  MessageCircle,
  MapPin,
  Facebook,
  Music2,
  Menu,
  X,
} from "lucide-react";
import logo from "@/assets/samanade-logo.jpg.asset.json";
import heroImage from "@/assets/hero-construction.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samanade C.R.D Enterprise | Carpentry & Construction, Dodowa" },
      {
        name: "description",
        content:
          "Carpentry, custom furniture, doors, interior fittings, construction, repairs and building material rentals in Dodowa Bawaleshie, Ghana. Call 0558729697.",
      },
      { property: "og:title", content: "Samanade C.R.D Enterprise | Carpentry & Construction" },
      {
        property: "og:description",
        content:
          "Quality craftsmanship built to last — carpentry, furniture, doors, interiors and construction in Dodowa, Ghana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE_1 = "0558729697";
const PHONE_2 = "0543773955";
const WHATSAPP = "233558729697";

const services = [
  {
    icon: PackageOpen,
    title: "Building Material Rentals",
    text: "Scaffolding, props, moulds and site equipment available for short or long hire.",
  },
  {
    icon: DoorOpen,
    title: "Doors Fixing & Installation",
    text: "Wooden, flush and security doors measured, hung and finished properly.",
  },
  {
    icon: Hammer,
    title: "Carpentry Works",
    text: "Roofing, formwork, framing and furniture making by experienced hands.",
  },
  {
    icon: Sofa,
    title: "Custom Furniture",
    text: "Beds, wardrobes, tables and chairs fabricated to your exact space.",
  },
  {
    icon: Ruler,
    title: "Interior Design & Fittings",
    text: "Local and modern interiors — ceilings, panelling, wardrobes and finishes.",
  },
  {
    icon: Boxes,
    title: "Cabinets & Woodwork",
    text: "Kitchen cabinets, TV units, shelving and all general woodwork.",
  },
  {
    icon: Wrench,
    title: "Construction & Repairs",
    text: "New builds, extensions, renovations and honest repair work.",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Samanade C.R.D Enterprise,%0A%0AName: ${encodeURIComponent(
      form.name,
    )}%0APhone: ${encodeURIComponent(form.phone)}%0A%0A${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="rule-stripe h-1 w-full" />
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
          <a href="#home" className="flex min-w-0 items-center gap-3">
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
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
              >
                {l.label}
              </a>
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
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-3 text-sm font-semibold last:border-0"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden bg-muted">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
            <div>
              <p className="section-eyebrow">Dodowa Bawaleshie · Ghana</p>
              <h1 className="mt-3 font-display text-4xl leading-[1.05] text-primary sm:text-5xl md:text-6xl">
                Quality Craftsmanship.
                <span className="block text-secondary">Built to Last.</span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                Carpentry, furniture fabrication, interiors, construction and repairs — plus
                building material rentals. Local know-how, modern finish.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`tel:${PHONE_1}`}
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  <Phone className="h-4 w-4" /> Call Us
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-lg">
              <img
                src={heroImage}
                alt="Samanade C.R.D Enterprise construction site — carpenters and builders at work on a blue-roofed house in Ghana"
                className="h-full max-h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-16">
          <p className="section-eyebrow">What we do</p>
          <h2 className="mt-2 font-display text-3xl text-primary sm:text-4xl">Our Services</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="surface-card p-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg leading-snug text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 py-16">
            <p className="section-eyebrow">About us</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Local hands. Modern finish.</h2>
            <p className="mt-5 text-base leading-relaxed opacity-90">
              We provide professional carpentry, furniture fabrication, interior design,
              construction, repairs, and equipment/material rental services. Our work covers both
              local and modern designs, including custom furniture, interior fittings, doors,
              cabinets, and general woodwork. We are committed to quality craftsmanship, durability,
              timely delivery, and customer satisfaction.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Durable", "Materials and joinery chosen to last."],
                ["On time", "Agreed timelines, kept."],
                ["Fair", "Clear pricing, no surprises."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-md border border-primary-foreground/20 p-4">
                  <p className="font-display text-lg">{t}</p>
                  <p className="mt-1 text-sm opacity-80">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <p className="section-eyebrow">Portfolio</p>
            <h2 className="mt-2 font-display text-3xl text-primary sm:text-4xl">Recent Work</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A look at our carpentry, doors, interiors and construction site work.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.label} delay={i * 90}>
                <figure className="media-zoom lift group relative aspect-4/3 overflow-hidden rounded-xl border border-border shadow-lg">
                  <img
                    src={g.src}
                    alt={g.label}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 text-sm font-bold text-primary-foreground">
                    {g.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Videos */}
        <section id="videos" className="bg-muted">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <Reveal>
              <p className="section-eyebrow">On site</p>
              <h2 className="mt-2 font-display text-3xl text-primary sm:text-4xl">
                Watch Us Work
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Sample clips from our sites and workshop.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {videos.map((v, i) => (
                <Reveal key={v.title} delay={i * 120}>
                  <div className="lift overflow-hidden rounded-xl border border-border bg-card shadow-lg">
                    <video
                      src={v.src}
                      poster={v.poster}
                      controls
                      muted
                      loop
                      playsInline
                      preload="none"
                      className="aspect-video w-full bg-primary object-cover"
                    />
                    <div className="p-4">
                      <p className="font-display text-lg text-primary">{v.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-muted">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
            <div>
              <p className="section-eyebrow">Get in touch</p>
              <h2 className="mt-2 font-display text-3xl text-primary sm:text-4xl">Contact Us</h2>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>
                    <a href={`tel:${PHONE_1}`} className="font-semibold hover:text-accent">
                      {PHONE_1}
                    </a>
                    <span className="text-muted-foreground"> / </span>
                    <a href={`tel:${PHONE_2}`} className="font-semibold hover:text-accent">
                      {PHONE_2}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>Dodowa Bawaleshie (near King Rich Junction), Ghana</span>
                </li>
                <li className="flex items-start gap-3">
                  <Facebook className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <a
                    href="https://facebook.com/anade.samuel.10"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold hover:text-accent"
                  >
                    facebook.com/anade.samuel.10
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Music2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <a
                    href="https://tiktok.com/@anadesamuel4"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold hover:text-accent"
                  >
                    @anadesamuel4
                  </a>
                </li>
              </ul>
            </div>

            <form onSubmit={sendWhatsApp} className="surface-card space-y-4 p-6">
              <div>
                <label htmlFor="name" className="text-xs font-bold tracking-wide uppercase">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-xs font-bold tracking-wide uppercase">
                  Phone
                </label>
                <input
                  id="phone"
                  required
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-bold tracking-wide uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Send via WhatsApp
              </button>
              <a
                href={`mailto:?subject=Enquiry for Samanade C.R.D Enterprise&body=${encodeURIComponent(form.message)}`}
                className="block text-center text-xs font-semibold text-muted-foreground underline"
              >
                or send as email instead
              </a>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="rule-stripe h-1 w-full" />
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt="Samanade C.R.D Enterprise logo"
              className="h-12 w-12 shrink-0 rounded-md bg-card object-contain p-1"
            />
            <div className="min-w-0">
              <p className="font-display text-lg">SAMANADE C.R.D</p>
              <p className="text-xs opacity-80">Dodowa Bawaleshie, Ghana</p>
            </div>
          </div>
          <div className="text-sm sm:text-right">
            <p>
              <a href={`tel:${PHONE_1}`} className="font-semibold hover:underline">
                {PHONE_1}
              </a>{" "}
              ·{" "}
              <a href={`tel:${PHONE_2}`} className="font-semibold hover:underline">
                {PHONE_2}
              </a>
            </p>
            <div className="mt-2 flex gap-3 sm:justify-end">
              <a
                href="https://facebook.com/anade.samuel.10"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@anadesamuel4"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <Music2 className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-3 text-xs opacity-70">
              © {new Date().getFullYear()} Samanade C.R.D Enterprise
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
