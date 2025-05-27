export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-light min-vh-100" dir="rtl">
      <div className="d-flex">
        {/* Sidebar */}
        <aside className="bg-white shadow-sm p-3" style={{width: 220, minHeight: '100vh'}}>
          <div className="fw-bold fs-5 mb-4 text-primary text-center">مدیریت تیرانداز</div>
          <ul className="nav flex-column gap-2">
            <li className="nav-item">
              <a className="nav-link text-dark fw-bold" href="/admin">داشبورد</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/admin/orders">سفارشات</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/admin/products">محصولات</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/admin/users">کاربران</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/admin/inventory">انبار</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/admin/reports">گزارشات</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/admin/blog">مدیریت بلاگ</a>
            </li>
            <li className="nav-item mt-3">
              <a className="nav-link text-danger fw-bold" href="/">بازگشت به سایت</a>
            </li>
          </ul>
        </aside>
        {/* Main content */}
        <main className="flex-grow-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
} 