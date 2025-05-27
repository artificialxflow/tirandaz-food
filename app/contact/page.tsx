"use client";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="container py-5" dir="rtl">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8 text-center">
          <h1 className="fw-bold mb-4" style={{color: '#0d6efd'}}>تماس با ما</h1>
          <p className="lead mb-4 text-secondary">
            برای ثبت سفارش، انتقاد، پیشنهاد یا همکاری با ما در تماس باشید.<br/>
            ما همیشه پاسخگوی شما هستیم!
          </p>
        </div>
      </div>
      <div className="row g-4 justify-content-center mb-5">
        <div className="col-md-4">
          <div className="card shadow border-0 text-center p-4 h-100">
            <FaPhone size={40} className="mb-2 text-primary" />
            <h6 className="fw-bold">تلفن</h6>
            <div className="text-secondary">۰۲۱-۱۲۳۴۵۶۷۸</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow border-0 text-center p-4 h-100">
            <FaWhatsapp size={40} className="mb-2 text-success" />
            <h6 className="fw-bold">واتساپ</h6>
            <div className="text-secondary">۰۹۱۲۱۲۳۴۵۶۷</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow border-0 text-center p-4 h-100">
            <FaEnvelope size={40} className="mb-2 text-warning" />
            <h6 className="fw-bold">ایمیل</h6>
            <div className="text-secondary">info@tirandazfood.com</div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="card shadow border-0 p-4">
            <h5 className="fw-bold mb-3 text-primary">ارسال پیام</h5>
            <form>
              <div className="mb-3 text-end">
                <label className="form-label">نام شما</label>
                <input type="text" className="form-control" placeholder="نام و نام خانوادگی" />
              </div>
              <div className="mb-3 text-end">
                <label className="form-label">ایمیل</label>
                <input type="email" className="form-control" placeholder="ایمیل شما" />
              </div>
              <div className="mb-3 text-end">
                <label className="form-label">پیام شما</label>
                <textarea className="form-control" rows={4} placeholder="متن پیام..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary px-4">ارسال پیام</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 