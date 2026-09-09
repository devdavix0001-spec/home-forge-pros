/**
 * Client for the api.samanadecrd.com PHP/MySQL backend.
 *
 * These two endpoints are public, read-only GETs — no auth needed from the
 * frontend. The PHP admin dashboard (at api.samanadecrd.com/admin) is what
 * writes the data; this file only reads it.
 *
 * Set VITE_API_URL in your Vercel project's environment variables
 * (and in a local .env for dev) to:
 *   https://api.samanadecrd.com
 */

const API_URL = import.meta.env.VITE_API_URL ?? "https://api.samanadecrd.com";

export interface GalleryImage {
  src: string;
  label: string;
}

export interface GalleryCategory {
  slug: string;
  title: string;
  images: GalleryImage[];
}

export interface ServiceImage {
  slug: string;
  title: string;
  image: string | null;
}

async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`Request to ${path} failed: ${res.status}`);
  }
  return res.json() as Promise<T>;
}

/** All gallery categories with their current photos, from the admin dashboard. */
export async function fetchGallery(): Promise<GalleryCategory[]> {
  const data = await fetchJson<{ categories: GalleryCategory[] }>("/api/gallery.php");
  return data.categories;
}

/** Current thumbnail image for every service, keyed by slug for easy lookup. */
export async function fetchServiceImages(): Promise<Record<string, string | null>> {
  const data = await fetchJson<{ services: ServiceImage[] }>("/api/services.php");
  return Object.fromEntries(data.services.map((s) => [s.slug, s.image]));
}

/** Flattened list of every gallery photo across all categories, newest-first per category. */
export async function fetchFeaturedWork(): Promise<GalleryImage[]> {
  const categories = await fetchGallery();
  return categories.flatMap((c) => c.images);
}
