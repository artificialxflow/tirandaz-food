"use client";
import Link from "next/link";
import { useEffect } from "react";
import AuthButtons from "./AuthButtons";
import { useCart } from "./CartContext";

export default function Navbar() {
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const { items } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-2" dir="rtl">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white ms-4" href="/" style={{letterSpacing: '1px', fontSize: '1.3rem'}}>
          تیرانداز
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="تغییر نمایش منو"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-2">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" href="/">خانه</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" href="/menu">منو</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" href="/about">درباره ما</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" href="/contact">تماس با ما</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" href="/blog">بلاگ</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3 me-lg-auto">
            <Link href="/cart" className="position-relative me-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#fff" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 14H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5zm3.14 4l1.25 6.5h7.22l1.25-6.5H3.14zM5.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
              </svg>
              {items.length > 0 && (
                <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger" style={{fontSize: '0.7rem'}}>
                  {items.reduce((sum, i) => sum + i.quantity, 0)}
                </span>
              )}
            </Link>
            <AuthButtons />
          </div>
        </div>
      </div>
    </nav>
  );
}
