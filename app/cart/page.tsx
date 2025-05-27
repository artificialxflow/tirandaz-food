import { useCart } from "@/components/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="container py-5" dir="rtl">
      <h2 className="fw-bold mb-4 text-center" style={{color: '#0d6efd'}}>سبد خرید</h2>
      {items.length === 0 ? (
        <div className="alert alert-warning text-center">سبد خرید شما خالی است. <Link href="/menu" className="fw-bold">منوی غذاها</Link></div>
      ) : (
        <>
          <div className="table-responsive mb-4">
            <table className="table align-middle text-center">
              <thead className="table-light">
                <tr>
                  <th>عکس</th>
                  <th>نام غذا</th>
                  <th>تعداد</th>
                  <th>قیمت واحد</th>
                  <th>قیمت کل</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.slug}>
                    <td>
                      {item.image ? (
                        <Image src={item.image} alt={item.name} width={60} height={40} style={{objectFit: 'cover', borderRadius: 8}} />
                      ) : (
                        <svg width="40" height="40" fill="#adb5bd" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10C22 6.477 17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8 0 1.657-.672 3.157-1.757 4.243A7.963 7.963 0 0 1 12 20a7.963 7.963 0 0 1-6.243-3.757A7.963 7.963 0 0 1 4 12c0-4.418 3.582-8 8-8zm0 2a6 6 0 0 0-6 6c0 1.306.418 2.512 1.143 3.5h9.714A5.978 5.978 0 0 0 18 12a6 6 0 0 0-6-6zm-4.5 8a4.5 4.5 0 0 1 9 0h-9z"/></svg>
                      )}
                    </td>
                    <td className="fw-bold">{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price.toLocaleString()} تومان</td>
                    <td>{(item.price * item.quantity).toLocaleString()} تومان</td>
                    <td>
                      <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.slug)}>حذف</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <button className="btn btn-outline-danger" onClick={clearCart}>خالی کردن سبد</button>
            <span className="fs-5 fw-bold">جمع کل: <span className="text-primary">{total.toLocaleString()} تومان</span></span>
          </div>
          <div className="text-center">
            <Link href="/checkout" className="btn btn-lg btn-success px-5">ادامه و پرداخت</Link>
          </div>
        </>
      )}
    </div>
  );
} 