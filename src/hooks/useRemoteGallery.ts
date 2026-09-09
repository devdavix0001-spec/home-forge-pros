import { useEffect, useState } from "react";
import {
  fetchFeaturedWork,
  fetchGallery,
  fetchServiceImages,
  type GalleryCategory,
  type GalleryImage,
} from "@/lib/api";

/**
 * Loads recent work from the API.
 * Falls back to the static featured work if the API fails or returns nothing.
 */
export function useFeaturedWork(fallback: GalleryImage[]) {
  const [images, setImages] = useState<GalleryImage[]>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await fetchFeaturedWork();

        if (!cancelled && data.length > 0) {
          setImages(data);
        }
      } catch {
        // Keep fallback data if API fails.
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return { images, loading };
}

/**
 * Loads all gallery categories.
 */
export function useGalleryCategories(fallback: GalleryCategory[]) {
  const [categories, setCategories] =
    useState<GalleryCategory[]>(fallback);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await fetchGallery();

        if (!cancelled && data.length > 0) {
          setCategories(data);
        }
      } catch {
        // Keep fallback categories if API fails.
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return { categories, loading };
}

/**
 * Loads service image overrides keyed by service slug.
 */
export function useServiceImageOverrides() {
  const [overrides, setOverrides] =
    useState<Record<string, string | null>>({});

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await fetchServiceImages();

        if (!cancelled) {
          setOverrides(data);
        }
      } catch {
        // Keep empty overrides if API fails.
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return overrides;
}
