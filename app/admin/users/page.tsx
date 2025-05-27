export default function AdminUsersPage() {
  return (
    <div>
      <h3 className="fw-bold mb-4 text-primary">مدیریت کاربران</h3>
      <div className="table-responsive">
        <table className="table table-bordered align-middle text-center">
          <thead className="table-light">
            <tr>
              <th>نام</th>
              <th>ایمیل</th>
              <th>نقش</th>
              <th>وضعیت</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>علی رضایی</td>
              <td>ali@example.com</td>
              <td>مدیر</td>
              <td><span className="badge bg-success">فعال</span></td>
              <td><button className="btn btn-sm btn-outline-primary">ویرایش</button></td>
            </tr>
            <tr>
              <td>مریم احمدی</td>
              <td>maryam@example.com</td>
              <td>کاربر</td>
              <td><span className="badge bg-success">فعال</span></td>
              <td><button className="btn btn-sm btn-outline-primary">ویرایش</button></td>
            </tr>
            <tr>
              <td>حسین محمدی</td>
              <td>hossein@example.com</td>
              <td>پیک</td>
              <td><span className="badge bg-danger">غیرفعال</span></td>
              <td><button className="btn btn-sm btn-outline-primary">ویرایش</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
} 