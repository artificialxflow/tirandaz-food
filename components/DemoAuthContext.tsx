'use client';
import React, { createContext, useContext, useState, ReactNode } from "react";

interface DemoAuthContextType {
  user: null | { email: string };
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const DemoAuthContext = createContext<DemoAuthContextType | undefined>(undefined);

export function useDemoAuth() {
  const ctx = useContext(DemoAuthContext);
  if (!ctx) throw new Error("useDemoAuth must be used within DemoAuthProvider");
  return ctx;
}

export function DemoAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<null | { email: string }>(null);

  const login = async (email: string, password: string) => {
    if (email === "user@example.com" && password === "12345678") {
      setUser({ email });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <DemoAuthContext.Provider value={{ user, login, logout }}>
      {children}
    </DemoAuthContext.Provider>
  );
} 