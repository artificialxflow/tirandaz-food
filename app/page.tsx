"use client";
import Link from "next/link";
import { FaUtensils, FaBolt, FaLeaf, FaGift, FaBlog } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="container py-5" dir="rtl">
      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-lg-8 text-center">
          <h1 className="mb-4 fw-bold" style={{fontSize: '2.7rem', color: '#0d6efd'}}>به فروشگاه تیرانداز خوش آمدید</h1>
          <p className="lead mb-4 text-secondary">
            سفارش آنلاین انواع غذاهای خوشمزه، مدیریت حرفه‌ای سفارشات، ارسال سریع و تجربه کاربری عالی با پلتفرم مدرن تیرانداز.<br/>
            <b>تضمین کیفیت، مواد اولیه تازه و پشتیبانی ۲۴ ساعته</b>
          </p>
          <Link href="/menu" className="btn btn-lg btn-primary px-5 fw-bold shadow-sm" style={{fontSize: '1.2rem'}}>مشاهده منوی غذاها</Link>
        </div>
      </div>
      <div className="row g-4 mb-5">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm text-center p-4 h-100">
            <FaUtensils size={40} className="mb-2 text-primary" />
            <h6 className="fw-bold">تنوع منو</h6>
            <div className="text-secondary small">انواع غذاهای ایرانی، فرنگی، فست‌فود و سالاد</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm text-center p-4 h-100">
            <FaLeaf size={40} className="mb-2 text-success" />
            <h6 className="fw-bold">مواد اولیه تازه</h6>
            <div className="text-secondary small">تضمین سلامت و طعم عالی غذاها</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm text-center p-4 h-100">
            <FaBolt size={40} className="mb-2 text-warning" />
            <h6 className="fw-bold">ارسال سریع</h6>
            <div className="text-secondary small">تحویل سفارش در کمترین زمان</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm text-center p-4 h-100">
            <FaGift size={40} className="mb-2 text-danger" />
            <h6 className="fw-bold">آفر ویژه</h6>
            <div className="text-secondary small">تخفیف ۲۰٪ اولین سفارش + ارسال رایگان بالای ۳۰۰ هزار تومان</div>
          </div>
        </div>
      </div>
      <div className="alert alert-info shadow-sm text-center mb-5" style={{fontSize: '1.1rem'}}>
        <b>🎁 آفر ویژه:</b> با ثبت اولین سفارش خود، ۲۰٪ تخفیف بگیرید و برای سفارش‌های بالای ۳۰۰ هزار تومان ارسال رایگان دریافت کنید!
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8 text-center">
          <h3 className="fw-bold mb-3" style={{color: '#0d6efd'}}><FaBlog className="mb-1 ms-2" />بلاگ تیرانداز</h3>
          <p className="text-secondary mb-4">جدیدترین مقالات، نکات تغذیه، اخبار و آموزش‌های آشپزی را در بلاگ ما بخوانید و با دنیای غذا بیشتر آشنا شوید.</p>
          <Link href="/blog" className="btn btn-outline-primary px-4 fw-bold">ورود به بلاگ تیرانداز</Link>
        </div>
      </div>
    </div>
  );
}
