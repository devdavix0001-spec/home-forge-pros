import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useNavigate } from "@tanstack/react-router";

type AdminUser = {
  id: number;
  email: string;
  name?: string;
};

type AuthContextValue = {
  user: AdminUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

// ASSUMPTION: your PHP backend exposes these three endpoints and uses a
// session cookie (not a bearer token) for auth. Adjust the paths below to
// match your actual API — e.g. if your other admin calls hit
// "/api/admin/gallery", these are probably "/api/admin/me",
// "/api/admin/login", "/api/admin/logout".
const ME_ENDPOINT = "/api/admin/me";
const LOGIN_ENDPOINT = "/api/admin/login";
const LOGOUT_ENDPOINT = "/api/admin/logout";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(ME_ENDPOINT, { credentials: "include" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setUser(data ?? null))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  async function login(email: string, password: string) {
    const res = await fetch(LOGIN_ENDPOINT, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      throw new Error("Invalid email or password.");
    }
    const data = await res.json();
    setUser(data);
    navigate({ to: "/admin" });
  }

  async function logout() {
    try {
      await fetch(LOGOUT_ENDPOINT, { method: "POST", credentials: "include" });
    } finally {
      setUser(null);
      navigate({ to: "/admin/login" });
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside <AuthProvider>");
  }
  return ctx;
}
