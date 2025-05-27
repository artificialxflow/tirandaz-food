export default function AdminOrdersPage() {
  return (
    <div>
      <h3 className="fw-bold mb-4 text-primary">مدیریت سفارشات</h3>
      <div className="table-responsive">
        <table className="table table-bordered align-middle text-center">
          <thead className="table-light">
            <tr>
              <th>کد سفارش</th>
              <th>نام مشتری</th>
              <th>تاریخ</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>علی رضایی</td>
              <td>1403/03/20</td>
              <td>۳۵۰٬۰۰۰ تومان</td>
              <td><span className="badge bg-warning text-dark">در حال آماده‌سازی</span></td>
              <td><button className="btn btn-sm btn-outline-primary">جزئیات</button></td>
            </tr>
            <tr>
              <td>1002</td>
              <td>مریم احمدی</td>
              <td>1403/03/19</td>
              <td>۲۱۰٬۰۰۰ تومان</td>
              <td><span className="badge bg-success">تحویل شده</span></td>
              <td><button className="btn btn-sm btn-outline-primary">جزئیات</button></td>
            </tr>
            <tr>
              <td>1003</td>
              <td>حسین محمدی</td>
              <td>1403/03/18</td>
              <td>۴۸۰٬۰۰۰ تومان</td>
              <td><span className="badge bg-danger">لغو شده</span></td>
              <td><button className="btn btn-sm btn-outline-primary">جزئیات</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
} 