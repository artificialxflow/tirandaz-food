"use client";
import Link from "next/link";
import { useDemoAuth } from "./DemoAuthContext";

export default function AuthButtons() {
  const { user, logout } = useDemoAuth();

  if (user) {
    return (
      <div className="d-flex align-items-center gap-2 ms-2">
        <span className="text-white-50 small">{user.email}</span>
        <button className="btn btn-outline-light btn-sm" onClick={logout}>خروج</button>
      </div>
    );
  }
  return (
    <div className="d-flex align-items-center gap-2 ms-2">
      <Link href="/login" className="btn btn-outline-light btn-sm">ورود</Link>
      <Link href="/register" className="btn btn-light btn-sm text-primary fw-bold">ثبت‌نام</Link>
    </div>
  );
} 