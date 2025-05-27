export default function AdminDashboard() {
  return (
    <div>
      <h2 className="fw-bold mb-4 text-primary">داشبورد مدیریتی</h2>
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card shadow-sm text-center p-3">
            <div className="fs-1 text-success mb-2">📦</div>
            <div className="fw-bold">تعداد سفارشات</div>
            <div className="fs-4">۱۲۳</div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card shadow-sm text-center p-3">
            <div className="fs-1 text-primary mb-2">💰</div>
            <div className="fw-bold">فروش کل</div>
            <div className="fs-4">۵۴٬۰۰۰٬۰۰۰ تومان</div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card shadow-sm text-center p-3">
            <div className="fs-1 text-warning mb-2">🍔</div>
            <div className="fw-bold">تعداد محصولات</div>
            <div className="fs-4">۲۵</div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card shadow-sm text-center p-3">
            <div className="fs-1 text-info mb-2">👤</div>
            <div className="fw-bold">تعداد کاربران</div>
            <div className="fs-4">۴۵۰</div>
          </div>
        </div>
      </div>
      <div className="alert alert-info">این بخش فقط ظاهر نمونه است و اطلاعات واقعی نیست.</div>
      <div className="d-flex flex-wrap gap-3 mt-4">
        <a href="/admin/orders" className="btn btn-outline-primary">مدیریت سفارشات</a>
        <a href="/admin/products" className="btn btn-outline-primary">مدیریت محصولات</a>
        <a href="/admin/users" className="btn btn-outline-primary">مدیریت کاربران</a>
        <a href="/admin/inventory" className="btn btn-outline-primary">مدیریت انبار</a>
        <a href="/admin/reports" className="btn btn-outline-primary">گزارشات مالی</a>
      </div>
    </div>
  );
} 