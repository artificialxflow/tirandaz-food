import { useCart } from "@/components/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutPage() {
  const { items } = useCart();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="container py-5" dir="rtl">
      <h2 className="fw-bold mb-4 text-center" style={{color: '#0d6efd'}}>تکمیل سفارش</h2>
      <div className="row g-4 justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow rounded-4 p-4 mb-4">
            <h5 className="fw-bold mb-3">خلاصه سبد خرید</h5>
            {items.length === 0 ? (
              <div className="alert alert-warning text-center">سبد خرید شما خالی است. <Link href="/menu" className="fw-bold">منوی غذاها</Link></div>
            ) : (
              <ul className="list-group mb-3">
                {items.map(item => (
                  <li key={item.slug} className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      {item.image ? (
                        <Image src={item.image} alt={item.name} width={40} height={28} style={{objectFit: 'cover', borderRadius: 6}} />
                      ) : (
                        <svg width="32" height="32" fill="#adb5bd" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10C22 6.477 17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8 0 1.657-.672 3.157-1.757 4.243A7.963 7.963 0 0 1 12 20a7.963 7.963 0 0 1-6.243-3.757A7.963 7.963 0 0 1 4 12c0-4.418 3.582-8 8-8zm0 2a6 6 0 0 0-6 6c0 1.306.418 2.512 1.143 3.5h9.714A5.978 5.978 0 0 0 18 12a6 6 0 0 0-6-6zm-4.5 8a4.5 4.5 0 0 1 9 0h-9z"/></svg>
                      )}
                      <span className="fw-bold">{item.name}</span>
                      <span className="badge bg-light text-dark">×{item.quantity}</span>
                    </div>
                    <span className="text-primary fw-bold">{(item.price * item.quantity).toLocaleString()} تومان</span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
                  <span className="fw-bold">جمع کل</span>
                  <span className="fw-bold text-primary fs-5">{total.toLocaleString()} تومان</span>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card shadow rounded-4 p-4">
            <h5 className="fw-bold mb-3">اطلاعات تحویل سفارش</h5>
            <form>
              <div className="mb-3 text-end">
                <label className="form-label fw-bold">آدرس کامل</label>
                <textarea className="form-control" rows={3} placeholder="آدرس دقیق محل تحویل سفارش" />
              </div>
              <div className="mb-3 text-end">
                <label className="form-label fw-bold">شماره تماس</label>
                <input type="tel" className="form-control" placeholder="مثلاً 09123456789" />
              </div>
              <button type="submit" className="btn btn-success w-100 py-2 fw-bold">ثبت سفارش</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 