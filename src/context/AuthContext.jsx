import { createContext, useContext, useState } from "react";
import * as auth from "../components/services/Auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(auth.getSession);

  const value = {
    user,
    signup: async (data) => setUser(await auth.signup(data)),
    login: async (data) => setUser(await auth.login(data)),
    logout: () => {
      auth.logout();
      setUser(null);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}