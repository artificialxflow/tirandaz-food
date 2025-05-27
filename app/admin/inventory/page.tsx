export default function AdminInventoryPage() {
  return (
    <div>
      <h3 className="fw-bold mb-4 text-primary">مدیریت انبار</h3>
      <div className="table-responsive">
        <table className="table table-bordered align-middle text-center">
          <thead className="table-light">
            <tr>
              <th>نام ماده اولیه</th>
              <th>واحد</th>
              <th>موجودی فعلی</th>
              <th>حداقل موجودی</th>
              <th>وضعیت</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>پنیر موزارلا</td>
              <td>کیلوگرم</td>
              <td>۲</td>
              <td>۱</td>
              <td><span className="badge bg-success">مناسب</span></td>
              <td><button className="btn btn-sm btn-outline-primary">ویرایش</button></td>
            </tr>
            <tr>
              <td>گوشت گوساله</td>
              <td>کیلوگرم</td>
              <td>۰.۵</td>
              <td>۱</td>
              <td><span className="badge bg-danger">کمبود</span></td>
              <td><button className="btn btn-sm btn-outline-primary">ویرایش</button></td>
            </tr>
            <tr>
              <td>سس مخصوص</td>
              <td>لیتر</td>
              <td>۳</td>
              <td>۱</td>
              <td><span className="badge bg-success">مناسب</span></td>
              <td><button className="btn btn-sm btn-outline-primary">ویرایش</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
} 