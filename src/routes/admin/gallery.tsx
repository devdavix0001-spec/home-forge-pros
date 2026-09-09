import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  deleteGalleryImage,
  fetchAdminGallery,
  uploadGalleryImages,
  type GalleryCategory,
} from "@/admin/lib/api";

export const Route = createFileRoute("/admin/gallery")({
  component: GalleryManager,
});

function GalleryManager() {
  const [categories, setCategories] = useState<GalleryCategory[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [altText, setAltText] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function load() {
    setLoading(true);
    fetchAdminGallery()
      .then((data) => {
        setCategories(data);
        setActiveId((current) => current ?? data[0]?.id ?? null);
      })
      .catch(() => setError("Couldn't load the gallery. Refresh to try again."))
      .finally(() => setLoading(false));
  }

  useEffect(load, []);

  useEffect(() => {
    return () => previews.forEach((url) => URL.revokeObjectURL(url));
  }, [previews]);

  const active = categories.find((c) => c.id === activeId) ?? null;

  const totalPhotos = useMemo(
    () => categories.reduce((sum, c) => sum + c.images.length, 0),
    [categories],
  );

  function handleFiles(event: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files ?? []);
    setFiles(selected);
    previews.forEach((url) => URL.revokeObjectURL(url));
    setPreviews(selected.map((file) => URL.createObjectURL(file)));
  }

  async function handleUpload(event: FormEvent) {
    event.preventDefault();
    if (!active || files.length === 0) return;
    setUploading(true);
    setError(null);
    try {
      const created = await uploadGalleryImages(active.id, files, altText);
      setCategories((prev) =>
        prev.map((c) => (c.id === active.id ? { ...c, images: [...c.images, ...created] } : c)),
      );
      previews.forEach((url) => URL.revokeObjectURL(url));
      setFiles([]);
      setPreviews([]);
      setAltText("");
      (event.target as HTMLFormElement).reset();
    } catch {
      setError("Upload failed. Check the file type and size, then try again.");
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(imageId: number) {
    if (!active) return;
    if (!confirm("Delete this photo? This can't be undone.")) return;
    try {
      await deleteGalleryImage(imageId);
      setCategories((prev) =>
        prev.map((c) =>
          c.id === active.id ? { ...c, images: c.images.filter((img) => img.id !== imageId) } : c,
        ),
      );
    } catch {
      setError("Couldn't delete that photo. Try again.");
    }
  }

  if (loading) return <p className="admin-muted">Loading gallery…</p>;

  return (
    <div>
      <header className="admin-page-header">
        <p className="admin-eyebrow">Gallery</p>
        <h1>Photos by category</h1>
        <p className="admin-page-sub">
          {totalPhotos} photo{totalPhotos === 1 ? "" : "s"} across {categories.length} categor
          {categories.length === 1 ? "y" : "ies"}. Uploads appear on the Work page and homepage
          automatically — no redeploy needed.
        </p>
      </header>

      {error && <p className="admin-alert">{error}</p>}

      <div className="admin-tabs" role="tablist" aria-label="Gallery categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={cat.id === activeId}
            className={cat.id === activeId ? "admin-tab admin-tab-active" : "admin-tab"}
            onClick={() => setActiveId(cat.id)}
          >
            {cat.title}
            <span className="admin-tab-count">{cat.images.length}</span>
          </button>
        ))}
      </div>

      {active && (
        <>
          <form className="admin-upload-form" onSubmit={handleUpload}>
            <label className="admin-field">
              <span>Photo(s)</span>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                onChange={handleFiles}
                required
              />
              <span className="admin-file-hint">JPEG, PNG or WebP. Up to 8MB each.</span>
              {previews.length > 0 && (
                <span className="admin-preview-strip">
                  {previews.map((src) => (
                    <img key={src} src={src} alt="" className="admin-preview-thumb" />
                  ))}
                </span>
              )}
            </label>
            <label className="admin-field">
              <span>Alt text / caption (applied to this batch)</span>
              <input
                type="text"
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                placeholder="e.g. Roof framing on site, Dodowa"
              />
            </label>
            <button
              className="admin-btn admin-btn-primary"
              type="submit"
              disabled={uploading || files.length === 0}
            >
              {uploading
                ? "Uploading…"
                : files.length > 0
                  ? `Upload ${files.length} photo${files.length > 1 ? "s" : ""}`
                  : "Upload"}
            </button>
          </form>

          <div className="admin-image-grid">
            {active.images.map((img) => (
              <figure key={img.id} className="admin-image-tile">
                <img src={img.src} alt={img.altText} />
                <button
                  type="button"
                  className="admin-btn-delete"
                  onClick={() => handleDelete(img.id)}
                >
                  Delete
                </button>
              </figure>
            ))}
            {active.images.length === 0 && (
              <div className="admin-empty-state">
                No photos in {active.title} yet. Add your first batch above.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
