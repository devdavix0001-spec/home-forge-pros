import { useEffect, type ReactNode } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useAuth } from "@/admin/context/AuthContext";
import { AdminBottomNav } from "@/admin/components/AdminBottomNav";

export function AdminShell({ children }: { children: ReactNode }) {
  const { status, logout } = useAuth();
  const navigate = useNavigate();

  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      navigate({
        to: "/admin/login",
        replace: true,
      });
    }
  }, [status, navigate]);

  if (status !== "authenticated") {
    return (
      <div className="admin-screen-center">
        Checking your session…
      </div>
    );
  }

  function navClass(path: string) {
    return pathname === path
      ? "admin-nav-item admin-active"
      : "admin-nav-item";
  }

  return (
    <div className="admin-root">
      <div className="admin-shell">

        <aside className="admin-sidebar">
          <div className="admin-brand">
            <span className="admin-brand-mark">
              SCRD
            </span>

            <span className="admin-brand-sub">
              site control
            </span>
          </div>

          <nav className="admin-nav">
            <Link
              to="/admin"
              className={navClass("/admin")}
            >
              Overview
            </Link>

            <Link
              to="/admin/gallery"
              className={navClass("/admin/gallery")}
            >
              Gallery
            </Link>

            <Link
              to="/admin/services"
              className={navClass("/admin/services")}
            >
              Services
            </Link>
          </nav>

          <button
            className="admin-btn admin-btn-ghost admin-sign-out"
            onClick={() => logout()}
          >
            Sign out
          </button>
        </aside>

        <main className="admin-content">
          {children}
        </main>

      </div>

      {/* Mobile navigation */}
      <AdminBottomNav />
    </div>
  );
}
