"use client";
import Link from "next/link";
import { FaBookOpen, FaArrowLeft } from "react-icons/fa";

const posts = [
  {
    slug: "healthy-eating",
    title: "۵ نکته طلایی برای تغذیه سالم",
    excerpt: "تغذیه سالم یکی از مهم‌ترین عوامل سلامتی است. در این مقاله با ۵ نکته ساده و کاربردی برای داشتن رژیم غذایی سالم آشنا می‌شوید...",
    date: "1403/03/20"
  },
  {
    slug: "pizza-history",
    title: "تاریخچه پیتزا و محبوبیت جهانی آن",
    excerpt: "پیتزا یکی از غذاهای پرطرفدار دنیاست. اما آیا می‌دانید ریشه این غذای خوشمزه به کجا برمی‌گردد؟...",
    date: "1403/03/18"
  },
  {
    slug: "fast-food-tips",
    title: "چطور فست‌فود سالم‌تر بخوریم؟",
    excerpt: "فست‌فود همیشه ناسالم نیست! با رعایت چند نکته ساده می‌توانید انتخاب‌های سالم‌تری داشته باشید...",
    date: "1403/03/15"
  }
];

export default function BlogPage() {
  return (
    <div className="container py-5" dir="rtl">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8 text-center">
          <h1 className="fw-bold mb-4" style={{color: '#0d6efd'}}><FaBookOpen className="mb-2 ms-2" />بلاگ تیرانداز</h1>
          <p className="lead text-secondary mb-4">جدیدترین مقالات، نکات تغذیه، اخبار و آموزش‌های آشپزی را اینجا بخوانید.</p>
        </div>
      </div>
      <div className="row g-4 justify-content-center">
        {posts.map(post => (
          <div className="col-md-6 col-lg-4" key={post.slug}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="fw-bold mb-2">{post.title}</h5>
                <div className="text-secondary small mb-2">{post.date}</div>
                <p className="text-secondary mb-3 flex-grow-1">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="btn btn-outline-primary btn-sm align-self-end">
                  <FaArrowLeft className="ms-1" /> ادامه مطلب
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 