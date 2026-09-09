import { useEffect, useState, type ChangeEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { fetchAdminServices, uploadServiceImage, type AdminService } from "@/admin/lib/api";

export const Route = createFileRoute("/admin/services")({
  component: ServicesManager,
});

function ServicesManager() {
  const [services, setServices] = useState<AdminService[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAdminServices()
      .then(setServices)
      .catch(() => setError("Couldn't load services."))
      .finally(() => setLoading(false));
  }, []);

  async function handleReplace(service: AdminService, event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setBusyId(service.id);
    setError(null);
    try {
      const image = await uploadServiceImage(service.id, file);
      setServices((prev) => prev.map((s) => (s.id === service.id ? { ...s, image } : s)));
    } catch {
      setError(`Couldn't upload a photo for ${service.title}. Try again.`);
    } finally {
      setBusyId(null);
      event.target.value = "";
    }
  }

  if (loading) return <p className="admin-muted">Loading services…</p>;

  return (
    <div>
      <header className="admin-page-header">
        <p className="admin-eyebrow">Services</p>
        <h1>Service thumbnails</h1>
        <p className="admin-page-sub">
          Each service shows one photo on the Services and About pages. Uploading a replacement
          removes the old one automatically.
        </p>
      </header>

      {error && <p className="admin-alert">{error}</p>}

      <div className="admin-service-grid">
        {services.map((s) => (
          <div key={s.id} className="admin-service-card">
            {s.image ? (
              <img src={s.image} alt={s.title} />
            ) : (
              <div className="admin-service-placeholder">No photo yet</div>
            )}
            <p className="admin-service-title">{s.title}</p>
            <label className="admin-btn admin-btn-small admin-btn-outline admin-file-btn">
              {busyId === s.id ? "Uploading…" : "Replace photo"}
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => handleReplace(s, e)}
                disabled={busyId === s.id}
                hidden
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
