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
import videoSite from "@/assets/video-site.mp4.asset.json";
import videoWorkshop from "@/assets/video-workshop.mp4.asset.json";

// All project photos supplied by the client, imported from /assets.
// Filenames follow samandecrd-NN.jpg but are NOT guaranteed to be contiguous —
// there can be gaps (e.g. 44-49 missing), and new batches are added in blocks
// (50-60, 70-80, 90-100, ...) with unused numbers left as spacing between
// categories. Never assume array-index === number - 1 anywhere in this file;
// always look photos up by number via `projectPhotosByNumber` below.
const projectPhotoModules = import.meta.glob<string>("../assets/samandecrd-*.jpg", {
  eager: true,
  import: "default",
});

const sortedPhotoKeys = Object.keys(projectPhotoModules).sort((a, b) => {
  const numA = parseInt(a.match(/(\d+)/)?.[1] ?? "0", 10);
  const numB = parseInt(b.match(/(\d+)/)?.[1] ?? "0", 10);
  return numA - numB;
});

// Full list of photos, in filename-number order. Fine to use for anything
// that just wants "all photos in order" (e.g. the homepage gallery), but do
// NOT use `projectPhotos[n - 1]` to find a specific numbered photo — the
// array has gaps, so array position and filename number are NOT the same.
export const projectPhotos: string[] = sortedPhotoKeys.map(
  (key) => projectPhotoModules[key] as string
);

// Maps the literal filename number (e.g. 57 for samandecrd-57.jpg) to its
// photo. This is the safe way to fetch a specific numbered photo, since it
// works correctly even with gaps in the numbering.
const projectPhotosByNumber: Record<number, string> = {};
sortedPhotoKeys.forEach((key) => {
  const num = parseInt(key.match(/(\d+)/)?.[1] ?? "0", 10);
  projectPhotosByNumber[num] = projectPhotoModules[key] as string;
});

// Named picks from the real photo set, used for page heroes and one-off spots.
// These still use array position (fine for "just grab something reasonable
// looking", not for a specific numbered file).
export const heroImage = projectPhotos[0] as string;
export const aboutHeroImage = projectPhotos[16] as string;
export const aboutInteriorImage = projectPhotos[17] as string;
export const contactHeroImage = projectPhotos[18] as string;
export const contactMidImage = projectPhotos[19] as string;

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
    image: projectPhotos[5],
  },
  {
    slug: "construction-material-rentals-and-fixing",
    navTitle: "Material Rentals & Fixing",
    icon: PackageOpen,
    title: "Construction Material Rentals & Fixing",
    text: "Scaffolding, props, moulds and selected site equipment available for hire, setup and fixing.",
    detail:
      "Hire clean, well-maintained construction materials and site equipment by the day, week or month. We can also help with delivery, positioning, fixing and practical setup around Dodowa and greater Accra.",
    image: projectPhotos[6],
  },
  {
    slug: "architecture-drafting-and-planning",
    navTitle: "Architecture Drafting",
    icon: Compass,
    title: "Architecture Drafting & Planning",
    text: "Practical drawings, room layouts and planning guidance to turn an idea into a buildable project.",
    detail:
      "Bring us your idea, plot details or rough sketch. We help shape clear architectural drafts, room layouts, elevations and material-minded plans ready for discussion with your project team.",
    image: projectPhotos[7],
  },
  {
    slug: "roofing-formwork-and-sheet-installation",
    navTitle: "Roofing & Formwork",
    icon: Hammer,
    title: "Roofing, Formwork & Sheet Installation",
    text: "Roof structures, concrete formwork and roofing sheets installed carefully for a dependable finish.",
    detail:
      "From roof framing and trusses to formwork, fascia details and sheet installation, we help create strong, weather-ready structures with measured alignment and proper site workmanship.",
    image: projectPhotos[8],
  },
  {
    slug: "leakage-and-general-renovation",
    navTitle: "Leakage & Renovation",
    icon: Wrench,
    title: "Leakage Repairs & General Renovation",
    text: "Find the source of leaks, repair damage and renew tired residential or commercial spaces.",
    detail:
      "We investigate roof and building leakage, repair affected areas and handle renovation work such as replacements, surface repairs, ceilings, fittings, repainting support and general improvements.",
    image: projectPhotos[9],
  },
  {
    slug: "carpentry-works",
    navTitle: "Carpentry Works",
    icon: Hammer,
    title: "Carpentry Works",
    text: "Roofing carpentry, formwork, framing, joinery and woodwork by experienced hands.",
    detail:
      "Our carpentry service covers roof structures, formwork, framing, doors, repairs and detailed joinery. We work from measurements and reference images to produce useful, well-finished woodwork.",
    image: projectPhotos[10],
  },
  {
    slug: "furniture-making",
    navTitle: "Furniture Making",
    icon: Sofa,
    title: "Furniture Making",
    text: "Beds, wardrobes, tables, chairs and office furniture made to fit your space and daily use.",
    detail:
      "Share the room, measurements, preferred style and budget. We fabricate practical furniture for homes, offices, shops and hospitality spaces, with attention to proportion, storage and durable finishing.",
    image: projectPhotos[11],
  },
  {
    slug: "cabinet-fabrication-and-installation",
    navTitle: "Cabinet Fabrication",
    icon: Boxes,
    title: "Cabinet Fabrication & Installation",
    text: "Kitchen cabinets, wardrobes, TV units, shelving and storage made, fitted and finished on site.",
    detail:
      "We measure the room, plan useful storage, fabricate the units and install them with careful alignment. Cabinet work can include kitchens, wardrobes, pantry units, TV walls, counters and office storage.",
    image: projectPhotos[12],
  },
  {
    slug: "interior-design-and-events-setups",
    navTitle: "Interiors & Events",
    icon: Ruler,
    title: "Interior Design & Events Setups",
    text: "Interior fittings, ceilings, wall details and event-ready spaces designed around the occasion.",
    detail:
      "We help shape homes, offices, hospitality spaces and event environments with ceilings, panelling, backdrops, display structures, partitions, furniture placement and practical decorative finishes.",
    image: projectPhotos[13],
  },
  {
    slug: "moulding-ceilings-and-finishes",
    navTitle: "Moulding & Finishes",
    icon: Shapes,
    title: "Moulding, Ceilings & Finishes",
    text: "Decorative mouldings, ceiling details, wall treatments and finishing work with a clean final line.",
    detail:
      "We create and install mouldings, ceiling trims, feature walls, panelling and other architectural details that give homes, offices and hospitality spaces a finished identity.",
    image: projectPhotos[14],
  },
  {
    slug: "doors-fixing-and-installation",
    navTitle: "Doors Installation",
    icon: DoorOpen,
    title: "Doors Fixing & Installation",
    text: "Wooden, flush, panel and security doors measured, hung and finished properly.",
    detail:
      "We supply and hang wooden, flush, panel and security doors, including frames, locks, hinges, adjustments and final finishing for residential and commercial spaces.",
    image: projectPhotos[15],
  },
];

// Real project photos from the field — used across the "Selected work" section
// on the homepage. This is just "all photos, in order" — not tied to the
// category numbering scheme below.
export const gallery = projectPhotos.map((src, i) => ({
  src,
  label: `Project ${String(i + 1).padStart(2, "0")}`,
}));

// ─────────────────────────────────────────────────────────────────────────
// WORK PAGE CATEGORIES
// Groups project photos into tabs named after our actual services.
//
// NUMBERING SCHEME (as of the Sept 2026 photo rearrange):
// We stopped using samandecrd-01 through 43. Each category now gets its own
// block of 11 numbers, with a 10-number gap left unused between blocks, so
// there's room to add a photo or two later without renumbering everything:
//   General Construction        -> 50-60
//   Material Rentals & Fixing   -> 70-80
//   Architecture Drafting       -> 90-100
//   Roofing & Formwork          -> 110-120
//   Leakage & Renovation        -> 130-140
//   Carpentry Works             -> 150-160
//   Furniture Making            -> 170-180
//   Cabinet Fabrication         -> 190-200
//   Interiors & Events          -> 210-220
//   Moulding & Finishes         -> 230-240
//   Doors Installation          -> 250-260
//
// Only 50-60 has real uploaded files right now. The rest are placeholders —
// trim each array down to however many photos actually exist once you
// upload that batch (a number with no matching file just won't render).
// ─────────────────────────────────────────────────────────────────────────
export const workCategories: { title: string; photoNumbers: number[] }[] = [
  { title: "General Construction", photoNumbers: [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60] },
  { title: "Material Rentals & Fixing", photoNumbers: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80] },
  { title: "Architecture Drafting", photoNumbers: [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100] },
  { title: "Roofing & Formwork", photoNumbers: [110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120] },
  { title: "Leakage & Renovation", photoNumbers: [130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140] },
  { title: "Carpentry Works", photoNumbers: [150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160] },
  { title: "Furniture Making", photoNumbers: [170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180] },
  { title: "Cabinet Fabrication", photoNumbers: [190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200] },
  { title: "Interiors & Events", photoNumbers: [210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220] },
  { title: "Moulding & Finishes", photoNumbers: [230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240] },
  { title: "Doors Installation", photoNumbers: [250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260] },
];

// Looks each category's photos up by their literal filename number
// (gap-safe — works no matter what numbers are actually uploaded).
export const workGallery = workCategories.map((category) => ({
  title: category.title,
  images: category.photoNumbers
    .filter((n) => projectPhotosByNumber[n] !== undefined)
    .map((n) => ({
      src: projectPhotosByNumber[n] as string,
      label: `${category.title} ${n}`,
    })),
}));

// Flattened list of every category's photos, in category order, following
// the new 50/70/90... numbering scheme. Use this (not `gallery`) anywhere
// that wants a general-purpose preview of recent work — e.g. the homepage
// "Selected work" section — so it stays in sync with the Work page and
// only ever shows photos that actually exist.
export const featuredWork = workGallery.flatMap((group) => group.images);

export const videos = [
  {
    src: videoSite.url,
    poster: projectPhotos[20],
    title: "On the building site",
    text: "Scaffolding, blockwork and roofing in progress.",
  },
  {
    src: videoWorkshop.url,
    poster: projectPhotos[21],
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
