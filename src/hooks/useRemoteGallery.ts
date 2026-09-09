import { useEffect, useState } from "react";
import {
  fetchFeaturedWork,
  fetchGallery,
  fetchServiceImages,
  type GalleryCategory,
  type GalleryImage,
} from "@/lib/api";

/**
 * ============================================================
 * Combined gallery/video types
 * ============================================================
 */

export interface CombinedGalleryVideo {
  id: string;
  src: string;
  title?: string;
  thumbnail?: string;
  category?: string;
}

/**
 * Combined videos can be imported from this hooks file.
 *
 * Keep this as an empty array for now so the application builds
 * even when there are no API-managed videos yet.
 *
 * You can add videos here later without changing the hook imports.
 */
export const combinedVideos: CombinedGalleryVideo[] = [];

/**
 * Alias for code that uses a capitalized name.
 */
export const CombinedVideos = combinedVideos;

/**
 * ============================================================
 * Featured Work
 * ============================================================
 *
 * Loads recent work from the API.
 * Falls back to the static featured work if the API fails
 * or returns no data.
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

  return {
    images,
    loading,
  };
}

/**
 * ============================================================
 * Gallery Categories
 * ============================================================
 *
 * Loads all gallery categories from the API.
 * Falls back to the supplied static categories if the API
 * fails or returns no data.
 */
export function useGalleryCategories(
  fallback: GalleryCategory[]
) {
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

  return {
    categories,
    loading,
  };
}

/**
 * ============================================================
 * Service Image Overrides
 * ============================================================
 *
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

/**
 * ============================================================
 * Combined Videos Hook
 * ============================================================
 *
 * Provides the combined video list without requiring another
 * module/export.
 */
export function useCombinedVideos(
  fallback: CombinedGalleryVideo[] = combinedVideos
) {
  const [videos] = useState<CombinedGalleryVideo[]>(fallback);

  return {
    videos,
    loading: false,
  };
}

/**
 * ============================================================
 * Route Gallery Hook
 * ============================================================
 *
 * Convenience hook that exposes the gallery data together.
 */
export function useRouteGallery(
  fallbackCategories: GalleryCategory[] = [],
  fallbackFeaturedWork: GalleryImage[] = [],
  fallbackVideos: CombinedGalleryVideo[] = combinedVideos
) {
  const {
    categories,
    loading: categoriesLoading,
  } = useGalleryCategories(fallbackCategories);

  const {
    images,
    loading: featuredLoading,
  } = useFeaturedWork(fallbackFeaturedWork);

  const serviceImageOverrides =
    useServiceImageOverrides();

  const {
    videos,
    loading: videosLoading,
  } = useCombinedVideos(fallbackVideos);

  return {
    categories,
    images,
    featuredWork: images,
    videos,
    combinedVideos: videos,
    serviceImageOverrides,

    loading:
      categoriesLoading ||
      featuredLoading ||
      videosLoading,
  };
}
