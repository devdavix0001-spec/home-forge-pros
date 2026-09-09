import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { checkSession, login as apiLogin, logout as apiLogout } from "@/admin/lib/api";

type AuthStatus = "checking" | "authenticated" | "unauthenticated";

interface AuthState {
  status: AuthStatus;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>("checking");

  useEffect(() => {
    checkSession()
      .then((authed) => setStatus(authed ? "authenticated" : "unauthenticated"))
      .catch(() => setStatus("unauthenticated"));
  }, []);

  async function login(username: string, password: string) {
    await apiLogin(username, password);
    setStatus("authenticated");
  }

  async function logout() {
    await apiLogout();
    setStatus("unauthenticated");
  }

  return <AuthContext.Provider value={{ status, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
