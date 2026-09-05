import {
  Building2,
  Compass,
  Hammer,
  DoorOpen,
  Sofa,
  Ruler,
  PackageOpen,
  Shapes,
  Wrench,
  Boxes,
} from "lucide-react";
import workCarpentry from "@/assets/work-carpentry.jpg";
import workDoors from "@/assets/work-doors.jpg";
import workInterior from "@/assets/work-interior.jpg";
import workFurniture from "@/assets/work-furniture.jpg";
import workCabinets from "@/assets/work-cabinets.jpg";
import workSite from "@/assets/work-site.jpg";
import videoSite from "@/assets/video-site.mp4.asset.json";
import videoWorkshop from "@/assets/video-workshop.mp4.asset.json";

// All project photos supplied by the client (samandecrd-01.jpg ... samandecrd-43.jpg),
// imported in numeric order so they can be used as the site's real work gallery.
const projectPhotoModules = import.meta.glob<string>("../assets/samandecrd-*.jpg", {
  eager: true,
  import: "default",
});
export const projectPhotos: string[] = Object.keys(projectPhotoModules)
  .sort((a, b) => {
    const numA = parseInt(a.match(/(\d+)/)?.[1] ?? "0", 10);
    const numB = parseInt(b.match(/(\d+)/)?.[1] ?? "0", 10);
    return numA - numB;
  })
  .map((key) => projectPhotoModules[key] as string);

export const PHONE_1 = "0558729697";
export const PHONE_2 = "0543773955";
export const WHATSAPP = "233558729697";
export const ADDRESS = "Dodowa Bawaleshie (at King Rich Junction), Ghana";
export const FACEBOOK = "https://facebook.com/anade.samuel.10";
export const TIKTOK = "https://tiktok.com/@anadesamuel4";

export const services = [
  {
    slug: "general-construction",
    navTitle: "General Construction",
    icon: Building2,
    title: "General Construction",
    text: "Residential and commercial building work planned, coordinated and delivered from groundwork to handover.",
    detail:
      "We support new homes, extensions, offices, shops and other commercial spaces with practical site coordination, blockwork, concrete work, roofing, finishes, repairs and clear progress updates.",
    image: workSite,
  },
  {
    slug: "construction-material-rentals-and-fixing",
    navTitle: "Material Rentals & Fixing",
    icon: PackageOpen,
    title: "Construction Material Rentals & Fixing",
    text: "Scaffolding, props, moulds and selected site equipment available for hire, setup and fixing.",
    detail:
      "Hire clean, well-maintained construction materials and site equipment by the day, week or month. We can also help with delivery, positioning, fixing and practical setup around Dodowa and greater Accra.",
    image: workSite,
  },
  {
    slug: "architecture-drafting-and-planning",
    navTitle: "Architecture Drafting",
    icon: Compass,
    title: "Architecture Drafting & Planning",
    text: "Practical drawings, room layouts and planning guidance to turn an idea into a buildable project.",
    detail:
      "Bring us your idea, plot details or rough sketch. We help shape clear architectural drafts, room layouts, elevations and material-minded plans ready for discussion with your project team.",
    image: workInterior,
  },
  {
    slug: "roofing-formwork-and-sheet-installation",
    navTitle: "Roofing & Formwork",
    icon: Hammer,
    title: "Roofing, Formwork & Sheet Installation",
    text: "Roof structures, concrete formwork and roofing sheets installed carefully for a dependable finish.",
    detail:
      "From roof framing and trusses to formwork, fascia details and sheet installation, we help create strong, weather-ready structures with measured alignment and proper site workmanship.",
    image: workSite,
  },
  {
    slug: "leakage-and-general-renovation",
    navTitle: "Leakage & Renovation",
    icon: Wrench,
    title: "Leakage Repairs & General Renovation",
    text: "Find the source of leaks, repair damage and renew tired residential or commercial spaces.",
    detail:
      "We investigate roof and building leakage, repair affected areas and handle renovation work such as replacements, surface repairs, ceilings, fittings, repainting support and general improvements.",
    image: workInterior,
  },
  {
    slug: "carpentry-works",
    navTitle: "Carpentry Works",
    icon: Hammer,
    title: "Carpentry Works",
    text: "Roofing carpentry, formwork, framing, joinery and woodwork by experienced hands.",
    detail:
      "Our carpentry service covers roof structures, formwork, framing, doors, repairs and detailed joinery. We work from measurements and reference images to produce useful, well-finished woodwork.",
    image: workCarpentry,
  },
  {
    slug: "furniture-making",
    navTitle: "Furniture Making",
    icon: Sofa,
    title: "Furniture Making",
    text: "Beds, wardrobes, tables, chairs and office furniture made to fit your space and daily use.",
    detail:
      "Share the room, measurements, preferred style and budget. We fabricate practical furniture for homes, offices, shops and hospitality spaces, with attention to proportion, storage and durable finishing.",
    image: workFurniture,
  },
  {
    slug: "cabinet-fabrication-and-installation",
    navTitle: "Cabinet Fabrication",
    icon: Boxes,
    title: "Cabinet Fabrication & Installation",
    text: "Kitchen cabinets, wardrobes, TV units, shelving and storage made, fitted and finished on site.",
    detail:
      "We measure the room, plan useful storage, fabricate the units and install them with careful alignment. Cabinet work can include kitchens, wardrobes, pantry units, TV walls, counters and office storage.",
    image: workCabinets,
  },
  {
    slug: "interior-design-and-events-setups",
    navTitle: "Interiors & Events",
    icon: Ruler,
    title: "Interior Design & Events Setups",
    text: "Interior fittings, ceilings, wall details and event-ready spaces designed around the occasion.",
    detail:
      "We help shape homes, offices, hospitality spaces and event environments with ceilings, panelling, backdrops, display structures, partitions, furniture placement and practical decorative finishes.",
    image: workInterior,
  },
  {
    slug: "moulding-ceilings-and-finishes",
    navTitle: "Moulding & Finishes",
    icon: Shapes,
    title: "Moulding, Ceilings & Finishes",
    text: "Decorative mouldings, ceiling details, wall treatments and finishing work with a clean final line.",
    detail:
      "We create and install mouldings, ceiling trims, feature walls, panelling and other architectural details that give homes, offices and hospitality spaces a finished identity.",
    image: workInterior,
  },
  {
    slug: "doors-fixing-and-installation",
    navTitle: "Doors Installation",
    icon: DoorOpen,
    title: "Doors Fixing & Installation",
    text: "Wooden, flush, panel and security doors measured, hung and finished properly.",
    detail:
      "We supply and hang wooden, flush, panel and security doors, including frames, locks, hinges, adjustments and final finishing for residential and commercial spaces.",
    image: workDoors,
  },
];

// Real project photos from the field — used across the "Selected work" section
// on the homepage and the full gallery on the Work page.
export const gallery = projectPhotos.map((src, i) => ({
  src,
  label: `Project ${String(i + 1).padStart(2, "0")}`,
}));

export const videos = [
  {
    src: videoSite.url,
    poster: workSite,
    title: "On the building site",
    text: "Scaffolding, blockwork and roofing in progress.",
  },
  {
    src: videoWorkshop.url,
    poster: workCarpentry,
    title: "Inside the workshop",
    text: "Sanding, assembling and finishing custom woodwork.",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Videos", to: "/videos" },
  { label: "Contact", to: "/contact" },
] as const;
