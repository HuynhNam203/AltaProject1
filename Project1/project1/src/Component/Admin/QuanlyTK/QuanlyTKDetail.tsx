import React from "react";
import { ListQuanlyTK } from "./QuanlyTK.type";
import "./QuanlyTKDetail.style.css"


// gọi giá trị onClose và data từ ListDichvu
type Props = {
    onClose: () => void
    data: ListQuanlyTK
}

const QuanlyTKDetail = (props: Props) => {
    // nhận giá trị
    const {onClose, data} = props
    return (
    <div id="myModal" className="modal">

    <div className="modal-content">
        {/* Gán chức năng cho button close */}
      <span className="close" onClick={onClose}>&times;</span>
      <div>
        <h3>Danh sách tài khoản</h3>
        <h4>Thông tin tài khoản</h4>
        <div>
            <label>Họ tên</label>
            <label>{data.user_name}</label>
        </div>
        <div>
            <label>Số điện thoại</label>
            <label>{data.user_phone}</label>

        </div>
        <div>
            <label>Email</label>
            <label>{data.user_email}</label>

        </div>
        <div>
            <label>Vai trò</label>
            <label>{data.user_roles}</label>

        </div>
        <div>
            <label>Tên đăng nhập</label>
            <label>{data.user_account}</label>

        </div>
        <div>
            <label>Mật khẩu</label>
            <label>{data.user_password}</label>

        </div>
        <div>
            <label>Nhập lại mật khẩu</label>
            <label>{data.user_repassword}</label>

        </div>
        <div>
            <label>Tình trạng</label>
            <label>{data.user_action}</label>
        </div>
    </div>
    </div>
    
  
  </div>
  );
};


export default QuanlyTKDetail