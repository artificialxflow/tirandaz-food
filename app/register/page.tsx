export default function RegisterPage() {
  return (
    <div className="container py-5" dir="rtl">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow rounded-4 p-4">
            <h2 className="fw-bold mb-4 text-center" style={{color: '#0d6efd'}}>ثبت‌نام در تیرانداز</h2>
            <form>
              <div className="mb-3 text-end">
                <label className="form-label fw-bold">نام و نام خانوادگی</label>
                <input type="text" className="form-control" placeholder="نام کامل" />
              </div>
              <div className="mb-3 text-end">
                <label className="form-label fw-bold">ایمیل</label>
                <input type="email" className="form-control" placeholder="ایمیل خود را وارد کنید" />
              </div>
              <div className="mb-3 text-end">
                <label className="form-label fw-bold">رمز عبور</label>
                <input type="password" className="form-control" placeholder="رمز عبور قوی" />
              </div>
              <button type="submit" className="btn btn-success w-100 py-2 fw-bold">ثبت‌نام</button>
            </form>
            <div className="text-center mt-3">
              <span>حساب کاربری دارید؟ </span>
              <a href="/login" className="fw-bold text-primary text-decoration-none">ورود</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 