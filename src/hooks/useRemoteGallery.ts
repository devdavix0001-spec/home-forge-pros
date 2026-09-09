import { useEffect, useState } from "react";
import {
  fetchFeaturedWork,
  fetchGallery,
  fetchServiceImages,
  type GalleryCategory,
  type GalleryImage,
} from "@/lib/api";

/**
 * Loads the flattened "recent work" photo list from the admin-managed API.
 * Falls back to whatever static list you pass in (e.g. the existing
 * `featuredWork` from site.ts) if the API hasn't loaded yet or fails —
 * so the homepage never shows an empty gallery.
 */
export function useFeaturedWork(fallback: GalleryImage[]) {
  const [images, setImages] = useState<GalleryImage[]>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchFeaturedWork()
      .then((data) => {
        if (!cancelled && data.length > 0) setImages(data);
      })
      .catch(() => {
        // keep the fallback silently — a broken API call shouldn't break the page
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { images, loading };
}

/** Loads all gallery categories (for the Work page's tabbed gallery). */
export function useGalleryCategories(fallback: GalleryCategory[]) {
  const [categories, setCategories] = useState<GalleryCategory[]>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchGallery()
      .then((data) => {
        if (!cancelled && data.length > 0) setCategories(data);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { categories, loading };
}

/**
 * Loads current service thumbnail overrides keyed by slug. Merge this over
 * your static `services` array's `image` field so uploading a new photo in
 * the admin panel shows up without a redeploy.
 */
export function useServiceImageOverrides() {
  const [overrides, setOverrides] = useState<Record<string, string | null>>({});

  useEffect(() => {
    let cancelled = false;
    fetchServiceImages()
      .then((data) => {
        if (!cancelled) setOverrides(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return overrides;
}
