import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { AuthProvider } from "@/admin/context/AuthContext";
import { AdminShell } from "@/admin/components/AdminShell";
import "@/admin/admin.css";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Site control | Samanade C.R.D Enterprise" }],
  }),
  component: AdminLayout,
});

function AdminLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isLoginPage = pathname === "/admin/login";

  return (
    <div className="admin-root">
      <AuthProvider>
        {isLoginPage ? (
          <Outlet />
        ) : (
          <AdminShell>
            <Outlet />
          </AdminShell>
        )}
      </AuthProvider>
    </div>
  );
}
