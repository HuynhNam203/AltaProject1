import React from "react";
import { ListThietBi } from "./Thietbi.type";
import "./ThietbiDetail.style.css"


// gọi giá trị onClose và data từ ListThietbi
type Props = {
    onClose: () => void
    data: ListThietBi
}

const ThietbiDetail = (props: Props) => {
    // nhận giá trị
    const {onClose, data} = props
    return (
    <div id="myModal" className="modal">

    <div className="modal-content">
        {/* Gán chức năng cho button close */}
      <span className="close" onClick={onClose}>&times;</span>
      <div>
        <h3>Quản lý thiết bị</h3>
        <h4>Thông tin thiết bị</h4>
        <div>
            <label>Mã thiết bị: {data.thiet_bi}</label>
            </div>
            <div>
            <label>Tên thiết bị: {data.name_thiet_bi}</label>
            </div>
            <div>
            <label>Địa chỉ IP: {data.ip_address}</label>
            </div>
            <div>
            <label>Loại thiết bị: {data.loai_thiet_bi}</label>
            </div>
            <div>
            <label>Tên đăng nhập: {data.Username}</label>
            </div>
            <div>
            <label>Mật khẩu: {data.Password}</label>
            </div>
            <div>
            <label>Dịch vụ sử dụng: {data.dichvusd}</label>
            </div>
    </div>
    </div>
    
  
  </div>
  );
};


export default ThietbiDetail