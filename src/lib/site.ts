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

// All project photos supplied by the client, imported from /assets.
// Filenames follow samandecrd-NN.jpg but are NOT guaranteed to be contiguous —
// there can be gaps (e.g. 44-49 missing), and new batches are added in blocks
// (50-60, 70-80, 90-100, ...) with unused numbers left as spacing between
// categories. Never assume array-index === number - 1 anywhere in this file;
// always look photos up by number via `projectPhotosByNumber` below.
const projectPhotoModules = import.meta.glob<string>(
  "../assets/samandecrd-*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  {
    eager: true,
    import: "default",
  }
);

const sortedPhotoKeys = Object.keys(projectPhotoModules).sort((a, b) => {
  const numA = parseInt(a.match(/(\d+)/)?.[1] ?? "0", 10);
  const numB = parseInt(b.match(/(\d+)/)?.[1] ?? "0", 10);
  return numA - numB;
});

// Full list of photos, in filename-number order. Kept for backwards
// compatibility — prefer `projectPhotosByNumber` or `workGallery` for
// anything new, since this array's position does NOT match filename number.
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

// Looks up a photo by its filename number, falling back to an old
// array-position photo if that number hasn't been uploaded yet. Lets us move
// every image on the site onto the new numbering scheme immediately, while
// categories that haven't gotten their new batch yet keep showing *something*
// instead of a broken image.
function pickPhoto(number: number, fallbackIndex: number): string {
  return (projectPhotosByNumber[number] ?? projectPhotos[fallbackIndex]) as string;
}

export const PHONE_1 = "0558729697";
export const PHONE_2 = "0543773955";
export const WHATSAPP = "233558729697";
export const ADDRESS = "Dodowa Bawaleshie (at King Rich Junction), Ghana";
export const FACEBOOK = "https://facebook.com/anade.samuel.10";
export const TIKTOK = "https://tiktok.com/@anadesamuel4";
export const INSTAGRAM = "https://www.instagram.com/orn.samuel/";

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

// Returns the first available photo for a category (matched by its
// navTitle/workCategories title). Used so a service's thumbnail switches
// over to its real new-numbered photos automatically the moment that
// category's batch gets uploaded, with no code change needed.
function firstPhotoForCategory(title: string, fallbackIndex: number): string {
  const match = workGallery.find((group) => group.title === title)?.images[0]?.src;
  return (match ?? projectPhotos[fallbackIndex]) as string;
}

// Named picks from the real photo set, used for page heroes and one-off
// spots (About, Contact pages). Pulled from the General Construction batch
// (50-60) — the only batch uploaded so far — via pickPhoto, so these will
// keep working even if a specific number above ever gets removed. Swap the
// first argument to try a different shot for any of these spots.
export const heroImage = pickPhoto(50, 0);
export const aboutHeroImage = pickPhoto(55, 16);
export const aboutInteriorImage = pickPhoto(56, 17);
export const contactHeroImage = pickPhoto(58, 18);
export const contactMidImage = pickPhoto(59, 19);

export const services = [
  {
    slug: "general-construction",
    navTitle: "General Construction",
    icon: Building2,
    title: "General Construction",
    text: "Residential and commercial building work planned, coordinated and delivered from groundwork to handover.",
    detail:
      "We support new homes, extensions, offices, shops and other commercial spaces with practical site coordination, blockwork, concrete work, roofing, finishes, repairs and clear progress updates.",
    image: firstPhotoForCategory("General Construction", 5),
  },
  {
    slug: "construction-material-rentals-and-fixing",
    navTitle: "Material Rentals & Fixing",
    icon: PackageOpen,
    title: "Construction Material Rentals & Fixing",
    text: "Scaffolding, props, moulds and selected site equipment available for hire, setup and fixing.",
    detail:
      "Hire clean, well-maintained construction materials and site equipment by the day, week or month. We can also help with delivery, positioning, fixing and practical setup around Dodowa and greater Accra.",
    image: firstPhotoForCategory("Material Rentals & Fixing", 6),
  },
  {
    slug: "architecture-drafting-and-planning",
    navTitle: "Architecture Drafting",
    icon: Compass,
    title: "Architecture Drafting & Planning",
    text: "Practical drawings, room layouts and planning guidance to turn an idea into a buildable project.",
    detail:
      "Bring us your idea, plot details or rough sketch. We help shape clear architectural drafts, room layouts, elevations and material-minded plans ready for discussion with your project team.",
    image: firstPhotoForCategory("Architecture Drafting", 7),
  },
  {
    slug: "roofing-formwork-and-sheet-installation",
    navTitle: "Roofing & Formwork",
    icon: Hammer,
    title: "Roofing, Formwork & Sheet Installation",
    text: "Roof structures, concrete formwork and roofing sheets installed carefully for a dependable finish.",
    detail:
      "From roof framing and trusses to formwork, fascia details and sheet installation, we help create strong, weather-ready structures with measured alignment and proper site workmanship.",
    image: firstPhotoForCategory("Roofing & Formwork", 8),
  },
  {
    slug: "leakage-and-general-renovation",
    navTitle: "Leakage & Renovation",
    icon: Wrench,
    title: "Leakage Repairs & General Renovation",
    text: "Find the source of leaks, repair damage and renew tired residential or commercial spaces.",
    detail:
      "We investigate roof and building leakage, repair affected areas and handle renovation work such as replacements, surface repairs, ceilings, fittings, repainting support and general improvements.",
    image: firstPhotoForCategory("Leakage & Renovation", 9),
  },
  {
    slug: "carpentry-works",
    navTitle: "Carpentry Works",
    icon: Hammer,
    title: "Carpentry Works",
    text: "Roofing carpentry, formwork, framing, joinery and woodwork by experienced hands.",
    detail:
      "Our carpentry service covers roof structures, formwork, framing, doors, repairs and detailed joinery. We work from measurements and reference images to produce useful, well-finished woodwork.",
    image: firstPhotoForCategory("Carpentry Works", 10),
  },
  {
    slug: "furniture-making",
    navTitle: "Furniture Making",
    icon: Sofa,
    title: "Furniture Making",
    text: "Beds, wardrobes, tables, chairs and office furniture made to fit your space and daily use.",
    detail:
      "Share the room, measurements, preferred style and budget. We fabricate practical furniture for homes, offices, shops and hospitality spaces, with attention to proportion, storage and durable finishing.",
    image: firstPhotoForCategory("Furniture Making", 11),
  },
  {
    slug: "cabinet-fabrication-and-installation",
    navTitle: "Cabinet Fabrication",
    icon: Boxes,
    title: "Cabinet Fabrication & Installation",
    text: "Kitchen cabinets, wardrobes, TV units, shelving and storage made, fitted and finished on site.",
    detail:
      "We measure the room, plan useful storage, fabricate the units and install them with careful alignment. Cabinet work can include kitchens, wardrobes, pantry units, TV walls, counters and office storage.",
    image: firstPhotoForCategory("Cabinet Fabrication", 12),
  },
  {
    slug: "interior-design-and-events-setups",
    navTitle: "Interiors & Events",
    icon: Ruler,
    title: "Interior Design & Events Setups",
    text: "Interior fittings, ceilings, wall details and event-ready spaces designed around the occasion.",
    detail:
      "We help shape homes, offices, hospitality spaces and event environments with ceilings, panelling, backdrops, display structures, partitions, furniture placement and practical decorative finishes.",
    image: firstPhotoForCategory("Interiors & Events", 13),
  },
  {
    slug: "moulding-ceilings-and-finishes",
    navTitle: "Moulding & Finishes",
    icon: Shapes,
    title: "Moulding, Ceilings & Finishes",
    text: "Decorative mouldings, ceiling details, wall treatments and finishing work with a clean final line.",
    detail:
      "We create and install mouldings, ceiling trims, feature walls, panelling and other architectural details that give homes, offices and hospitality spaces a finished identity.",
    image: firstPhotoForCategory("Moulding & Finishes", 14),
  },
  {
    slug: "doors-fixing-and-installation",
    navTitle: "Doors Installation",
    icon: DoorOpen,
    title: "Doors Fixing & Installation",
    text: "Wooden, flush, panel and security doors measured, hung and finished properly.",
    detail:
      "We supply and hang wooden, flush, panel and security doors, including frames, locks, hinges, adjustments and final finishing for residential and commercial spaces.",
    image: firstPhotoForCategory("Doors Installation", 15),
  },
];

// Real project photos from the field — every photo the site has, in
// filename-number order. Kept for anywhere that still wants "all photos" —
// prefer `featuredWork` for previews that should follow the new numbering.
export const gallery = projectPhotos.map((src, i) => ({
  src,
  label: `Project ${String(i + 1).padStart(2, "0")}`,
}));

// 19 real project video clips, uploaded straight into /public/videos
// (sm-crd-1.mp4 ... sm-crd-19.mp4). Files in /public are served as-is at a
// direct URL, so no import is needed — just the plain path string below.
// Posters cycle through the real categorized project photos so every clip
// has a distinct thumbnail.
export const videos = Array.from({ length: 19 }, (_, i) => {
  const n = i + 1;
  return {
    src: `/videos/sm-crd-${n}.mp4`,
    poster: (featuredWork[i % featuredWork.length]?.src ?? projectPhotos[0]) as string,
    title: `Work Clip ${String(n).padStart(2, "0")}`,
    text: "A short look at our work on site and in the workshop.",
  };
});

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Videos", to: "/videos" },
  { label: "Contact", to: "/contact" },
] as const;
