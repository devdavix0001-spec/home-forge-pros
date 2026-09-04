import {
  Hammer,
  DoorOpen,
  Sofa,
  Ruler,
  PackageOpen,
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

export const PHONE_1 = "0558729697";
export const PHONE_2 = "0543773955";
export const WHATSAPP = "233558729697";
export const ADDRESS = "Dodowa Bawaleshie (near King Rich Junction), Ghana";
export const FACEBOOK = "https://facebook.com/anade.samuel.10";
export const TIKTOK = "https://tiktok.com/@anadesamuel4";

export const services = [
  {
    icon: PackageOpen,
    title: "Building Material Rentals",
    text: "Scaffolding, props, moulds and site equipment available for short or long hire.",
    detail:
      "Hire clean, well-maintained site equipment by the day, week or month — delivered around Dodowa and greater Accra.",
    image: workSite,
  },
  {
    icon: DoorOpen,
    title: "Doors Fixing & Installation",
    text: "Wooden, flush and security doors measured, hung and finished properly.",
    detail:
      "We supply and hang wooden, flush, panel and security doors, including frames, locks, hinges and final finishing.",
    image: workDoors,
  },
  {
    icon: Hammer,
    title: "Carpentry Works",
    text: "Roofing, formwork, framing and furniture making by experienced hands.",
    detail:
      "From roof trusses and formwork to fine joinery — structural and decorative carpentry handled by trained carpenters.",
    image: workCarpentry,
  },
  {
    icon: Sofa,
    title: "Custom Furniture",
    text: "Beds, wardrobes, tables and chairs fabricated to your exact space.",
    detail:
      "Tell us the room and the look; we build beds, wardrobes, dining sets and office furniture to measure.",
    image: workFurniture,
  },
  {
    icon: Ruler,
    title: "Interior Design & Fittings",
    text: "Local and modern interiors — ceilings, panelling, wardrobes and finishes.",
    detail:
      "Ceilings, wall panelling, TV walls and full room fit-outs that mix local materials with a modern finish.",
    image: workInterior,
  },
  {
    icon: Boxes,
    title: "Cabinets & Woodwork",
    text: "Kitchen cabinets, TV units, shelving and all general woodwork.",
    detail:
      "Durable kitchen cabinets, pantry units, shelving and general woodwork built for Ghana's climate.",
    image: workCabinets,
  },
  {
    icon: Wrench,
    title: "Construction & Repairs",
    text: "New builds, extensions, renovations and honest repair work.",
    detail:
      "Blockwork, roofing, extensions, renovations and repairs — managed properly from first block to handover.",
    image: workSite,
  },
];

export const gallery = [
  { src: workCarpentry, label: "Carpentry & joinery" },
  { src: workDoors, label: "Door fixing & installation" },
  { src: workInterior, label: "Interior fittings & ceilings" },
  { src: workFurniture, label: "Custom furniture" },
  { src: workCabinets, label: "Kitchen cabinets" },
  { src: workSite, label: "Construction site work" },
];

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
