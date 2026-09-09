import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchAdminGallery, fetchAdminServices } from "@/admin/lib/api";

export const Route = createFileRoute("/admin/")({
  component: Dashboard,
});

function Dashboard() {
  const [photoCount, setPhotoCount] = useState<number | null>(null);
  const [categoryCount, setCategoryCount] = useState<number | null>(null);
  const [missingServiceCount, setMissingServiceCount] = useState<number | null>(null);
  const [totalServiceCount, setTotalServiceCount] = useState<number | null>(null);
  const [emptyCategories, setEmptyCategories] = useState<string[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [checkedAt, setCheckedAt] = useState<Date | null>(null);

  useEffect(() => {
    Promise.all([
      fetchAdminGallery().then((categories) => {
        setCategoryCount(categories.length);
        setPhotoCount(categories.reduce((sum, c) => sum + c.images.length, 0));
        setEmptyCategories(categories.filter((c) => c.images.length === 0).map((c) => c.title));
      }),
      fetchAdminServices().then((services) => {
        setTotalServiceCount(services.length);
        setMissingServiceCount(services.filter((s) => !s.image).length);
      }),
    ])
      .then(() => setCheckedAt(new Date()))
      .catch(() => setLoadError("Some numbers below couldn't load. Refresh to try again."));
  }, []);

  const siteIsComplete =
    missingServiceCount === 0 && emptyCategories.length === 0 && checkedAt !== null;

  return (
    <div>
      <header className="admin-page-header">
        <p className="admin-eyebrow">Overview</p>
        <h1>What's live on the site</h1>
        <p className="admin-page-sub">
          These numbers reflect the public Work and Services pages right now — any change you
          make here goes live immediately, with no redeploy needed.
        </p>
      </header>

      {loadError && <p className="admin-alert">{loadError}</p>}

      {/* Quick actions first — the two things an admin comes here to do,
          surfaced above the fold on mobile */}
      <div className="admin-quick-links">
        <Link to="/admin/gallery" className="admin-btn admin-btn-primary">
          Manage gallery photos
        </Link>
        <Link to="/admin/services" className="admin-btn admin-btn-outline">
          Manage service photos
        </Link>
      </div>

      <div className="admin-stat-row">
        <div className="admin-stat">
          <p className="admin-stat-number">{photoCount ?? "—"}</p>
          <p className="admin-stat-label">Gallery photos</p>
        </div>
        <div className="admin-stat">
          <p className="admin-stat-number">{categoryCount ?? "—"}</p>
          <p className="admin-stat-label">Gallery categories</p>
        </div>
        <div className="admin-stat">
          <p className="admin-stat-number">{missingServiceCount ?? "—"}</p>
          <p className="admin-stat-label">
            {totalServiceCount !== null
              ? `Services missing a photo (of ${totalServiceCount})`
              : "Services missing a photo"}
          </p>
        </div>
      </div>

      <div className="admin-dashboard-section">
        <h2>Site health check</h2>
        <ul className="admin-checklist">
          <li>
            <span className={`admin-checklist-dot ${missingServiceCount === 0 ? "is-ok" : "is-warn"}`} />
            {missingServiceCount === null
              ? "Checking service photos…"
              : missingServiceCount === 0
                ? "Every service has a photo."
                : `${missingServiceCount} service${missingServiceCount === 1 ? "" : "s"} still need${
                    missingServiceCount === 1 ? "s" : ""
                  } a photo — visitors will see a placeholder.`}
          </li>
          <li>
            <span
              className={`admin-checklist-dot ${emptyCategories.length === 0 ? "is-ok" : "is-warn"}`}
            />
            {categoryCount === null
              ? "Checking gallery categories…"
              : emptyCategories.length === 0
                ? "Every gallery category has at least one photo."
                : `${emptyCategories.length} empty categor${
                    emptyCategories.length === 1 ? "y" : "ies"
                  }: ${emptyCategories.join(", ")}.`}
          </li>
        </ul>
        {siteIsComplete && (
          <p className="admin-muted" style={{ marginTop: 12 }}>
            Everything looks complete as of {checkedAt.toLocaleTimeString()}.
          </p>
        )}
      </div>
    </div>
  );
}
