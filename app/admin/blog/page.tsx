"use client";
import { FaBookOpen, FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const posts = [
  {
    slug: "healthy-eating",
    title: "۵ نکته طلایی برای تغذیه سالم",
    date: "1403/03/20"
  },
  {
    slug: "pizza-history",
    title: "تاریخچه پیتزا و محبوبیت جهانی آن",
    date: "1403/03/18"
  },
  {
    slug: "fast-food-tips",
    title: "چطور فست‌فود سالم‌تر بخوریم؟",
    date: "1403/03/15"
  }
];

export default function AdminBlogPage() {
  return (
    <div>
      <h3 className="fw-bold mb-4 text-primary"><FaBookOpen className="mb-1 ms-2" />مدیریت بلاگ</h3>
      <div className="mb-4 text-end">
        <button className="btn btn-success px-4 fw-bold"><FaPlus className="ms-2" />افزودن مقاله جدید</button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered align-middle text-center">
          <thead className="table-light">
            <tr>
              <th>عنوان مقاله</th>
              <th>تاریخ</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.slug}>
                <td className="fw-bold">{post.title}</td>
                <td>{post.date}</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary me-2"><FaEdit className="ms-1" />ویرایش</button>
                  <button className="btn btn-sm btn-outline-danger"><FaTrash className="ms-1" />حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 