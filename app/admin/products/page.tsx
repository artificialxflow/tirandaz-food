"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  description?: string;
  price: number;
  category?: string;
  image?: string;
  stock?: number;
  isActive?: boolean;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError("خطا در دریافت محصولات");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h3 className="fw-bold mb-4 text-primary">مدیریت محصولات</h3>
      {loading ? (
        <div className="alert alert-info text-center">در حال دریافت اطلاعات...</div>
      ) : error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered align-middle text-center">
            <thead className="table-light">
              <tr>
                <th>عکس</th>
                <th>نام محصول</th>
                <th>دسته‌بندی</th>
                <th>قیمت</th>
                <th>موجودی</th>
                <th>وضعیت</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr><td colSpan={7} className="text-center">محصولی ثبت نشده است.</td></tr>
              ) : (
                products.map(product => (
                  <tr key={product._id}>
                    <td>
                      {product.image ? (
                        <Image src={product.image} alt={product.name} width={48} height={32} style={{objectFit:'cover',borderRadius:6}} />
                      ) : (
                        <div className="d-flex align-items-center justify-content-center bg-light" style={{height:48, width:64, borderRadius:8, margin:'0 auto'}}>
                          <svg width="40" height="40" fill="#6c757d" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" fill="#e9ecef" />
                            <path d="M7 17c0-2.5 2.5-4 5-4s5 1.5 5 4" stroke="#6c757d" strokeWidth="1.5" fill="none"/>
                            <circle cx="9" cy="10" r="1.5" fill="#6c757d"/>
                            <circle cx="15" cy="10" r="1.5" fill="#6c757d"/>
                          </svg>
                        </div>
                      )}
                    </td>
                    <td className="fw-bold">{product.name}</td>
                    <td>{product.category || '-'}</td>
                    <td>{product.price.toLocaleString()} تومان</td>
                    <td>{product.stock ?? '-'}</td>
                    <td>
                      {product.isActive ? (
                        <span className="badge bg-success">فعال</span>
                      ) : (
                        <span className="badge bg-warning text-dark">غیرفعال</span>
                      )}
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary">ویرایش</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 