/**
 * Client for the api.samanadecrd.com admin API (api/admin/*.php).
 *
 * Auth model: a PHP session cookie (httpOnly, SameSite=None, cross-site)
 * plus a CSRF token issued at login and echoed back on every mutating
 * request as the X-CSRF-Token header. `credentials: "include"` is required
 * on every call so the browser sends/receives that cookie.
 *
 * Set VITE_API_URL in a local .env and in your Vercel project's
 * environment variables. Defaults to https://api.samanadecrd.com.
 */

const API_URL = import.meta.env["VITE_API_URL"] ?? "https://api.samanadecrd.com";

export interface GalleryImage {
  id: number;
  src: string;
  altText: string;
}

export interface GalleryCategory {
  id: number;
  slug: string;
  title: string;
  images: GalleryImage[];
}

export interface AdminService {
  id: number;
  slug: string;
  title: string;
  image: string | null;
}

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

// Held in memory only — never in localStorage. It's re-issued by /me.php
// on every page load, so losing it on refresh is expected and fine.
let csrfToken: string | null = null;

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    credentials: "include",
    headers: {
      ...(options.headers ?? {}),
      ...(csrfToken ? { "X-CSRF-Token": csrfToken } : {}),
    },
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new ApiError(data.error ?? `Request failed (${res.status})`, res.status);
  }
  return data as T;
}

/** Checks for an existing session on page load; also refreshes the CSRF token. */
export async function checkSession(): Promise<boolean> {
  const data = await request<{ authenticated: boolean; csrfToken?: string }>("/api/admin/me.php");
  if (data.authenticated && data.csrfToken) csrfToken = data.csrfToken;
  return data.authenticated;
}

export async function login(username: string, password: string): Promise<void> {
  const data = await request<{ success: boolean; csrfToken: string }>("/api/admin/login.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  csrfToken = data.csrfToken;
}

export async function logout(): Promise<void> {
  await request("/api/admin/logout.php", { method: "POST" });
  csrfToken = null;
}

export async function fetchAdminGallery(): Promise<GalleryCategory[]> {
  const data = await request<{ categories: GalleryCategory[] }>("/api/admin/gallery.php");
  return data.categories;
}

export async function uploadGalleryImages(
  categoryId: number,
  files: File[],
  altText: string,
): Promise<GalleryImage[]> {
  const form = new FormData();
  form.append("category_id", String(categoryId));
  form.append("alt_text", altText);
  files.forEach((file) => form.append("images[]", file));

  const data = await request<{ success: boolean; images: GalleryImage[] }>(
    "/api/admin/gallery-upload.php",
    { method: "POST", body: form },
  );
  return data.images;
}

export async function deleteGalleryImage(id: number): Promise<void> {
  await request("/api/admin/gallery-delete.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
}

export async function fetchAdminServices(): Promise<AdminService[]> {
  const data = await request<{ services: AdminService[] }>("/api/admin/services.php");
  return data.services;
}

export async function uploadServiceImage(serviceId: number, file: File): Promise<string> {
  const form = new FormData();
  form.append("service_id", String(serviceId));
  form.append("image", file);

  const data = await request<{ success: boolean; image: string }>(
    "/api/admin/services-upload.php",
    { method: "POST", body: form },
  );
  return data.image;
}
