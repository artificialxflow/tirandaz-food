"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDemoAuth } from "@/components/DemoAuthContext";

export default function LoginPage() {
  const { login } = useDemoAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const ok = await login(email, password);
    setLoading(false);
    if (ok) {
      router.push("/");
    } else {
      setError("ایمیل یا رمز عبور اشتباه است.");
    }
  };

  return (
    <div className="container py-5" dir="rtl">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow rounded-4 p-4">
            <h2 className="fw-bold mb-4 text-center" style={{color: '#0d6efd'}}>ورود به حساب کاربری</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 text-end">
                <label className="form-label fw-bold">ایمیل</label>
                <input type="email" className="form-control" placeholder="ایمیل خود را وارد کنید" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="mb-3 text-end">
                <label className="form-label fw-bold">رمز عبور</label>
                <input type="password" className="form-control" placeholder="رمز عبور" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              {error && <div className="alert alert-danger text-center py-2">{error}</div>}
              <button type="submit" className="btn btn-primary w-100 py-2 fw-bold" disabled={loading}>{loading ? "در حال ورود..." : "ورود"}</button>
            </form>
            <div className="text-center mt-3">
              <span>حساب کاربری ندارید؟ </span>
              <a href="/register" className="fw-bold text-primary text-decoration-none">ثبت‌نام</a>
            </div>
            <div className="text-center mt-3 small text-secondary">
              <div>یوزر دمو: <b>user@example.com</b></div>
              <div>رمز: <b>12345678</b></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 