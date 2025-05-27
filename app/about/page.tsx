"use client";
import { FaUtensils, FaSmile, FaLeaf } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="container py-5" dir="rtl">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8 text-center">
          <h1 className="fw-bold mb-4" style={{color: '#0d6efd'}}>درباره تیرانداز</h1>
          <p className="lead mb-4 text-secondary">
            فروشگاه تیرانداز با هدف ارائه بهترین و باکیفیت‌ترین غذاهای ایرانی و فرنگی، تجربه‌ای متفاوت از سفارش آنلاین غذا را برای شما فراهم کرده است.<br/>
            ما با استفاده از مواد اولیه تازه و تیمی حرفه‌ای، همواره در تلاشیم تا رضایت و سلامت شما را تضمین کنیم.<br/>
            <b>تیرانداز؛ خوشمزه، سالم، سریع!</b>
          </p>
        </div>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-md-4">
          <div className="card shadow border-0 text-center p-4 h-100">
            <FaUtensils size={48} className="mb-3 text-primary" />
            <h5 className="fw-bold mb-2">تنوع منو</h5>
            <p className="text-secondary">انواع غذاهای ایرانی، فرنگی، فست‌فود و سالاد با بهترین کیفیت و طعم.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow border-0 text-center p-4 h-100">
            <FaLeaf size={48} className="mb-3 text-success" />
            <h5 className="fw-bold mb-2">مواد اولیه تازه</h5>
            <p className="text-secondary">استفاده از مواد اولیه سالم و تازه برای تضمین سلامت و طعم عالی غذاها.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow border-0 text-center p-4 h-100">
            <FaSmile size={48} className="mb-3 text-warning" />
            <h5 className="fw-bold mb-2">رضایت مشتری</h5>
            <p className="text-secondary">پشتیبانی سریع، ارسال به موقع و احترام به سلیقه و نیاز مشتریان.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 