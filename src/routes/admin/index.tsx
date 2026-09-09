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

  useEffect(() => {
    fetchAdminGallery().then((categories) => {
      setCategoryCount(categories.length);
      setPhotoCount(categories.reduce((sum, c) => sum + c.images.length, 0));
    });
    fetchAdminServices().then((services) => {
      setMissingServiceCount(services.filter((s) => !s.image).length);
    });
  }, []);

  return (
    <div>
      <header className="admin-page-header">
        <p className="admin-eyebrow">Overview</p>
        <h1>What's live on the site</h1>
      </header>

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
          <p className="admin-stat-label">Services missing a photo</p>
        </div>
      </div>

      <div className="admin-quick-links">
        <Link to="/admin/gallery" className="admin-btn admin-btn-primary">
          Manage gallery photos
        </Link>
        <Link to="/admin/services" className="admin-btn admin-btn-outline">
          Manage service photos
        </Link>
      </div>
    </div>
  );
}
