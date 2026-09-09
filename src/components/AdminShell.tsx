import { type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { useAuth } from "@/admin/context/AuthContext";
import { AdminBottomNav } from "@/admin/components/AdminBottomNav";

const links = [
  { to: "/admin", label: "Overview" },
  { to: "/admin/gallery", label: "Gallery" },
  { to: "/admin/services", label: "Services" },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  // ASSUMPTION: AuthContext exposes a `logout` function. If yours is named
  // differently (e.g. signOut), rename this line to match.
  const { logout } = useAuth();

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <p className="admin-sidebar-title">Samanade C.R.D</p>
        <nav className="admin-sidebar-nav" aria-label="Admin sections">
          {links.map((link) => {
            const active =
              link.to === "/admin" ? pathname === "/admin" : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={active ? "admin-sidebar-link is-active" : "admin-sidebar-link"}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <button type="button" className="admin-btn admin-btn-outline admin-sidebar-logout" onClick={logout}>
          Log out
        </button>
      </aside>

      <div className="admin-shell-main">
        <header className="admin-topbar">
          <p className="admin-topbar-title">Samanade C.R.D admin</p>
          <button type="button" className="admin-btn admin-btn-small admin-btn-outline" onClick={logout}>
            Log out
          </button>
        </header>

        <main className="admin-shell-content">{children}</main>
      </div>

      <AdminBottomNav />
    </div>
  );
}
