import React from "react";
import { ListRoles } from "./Roles.type";
import "./RolesDetail.style.css"


// gọi giá trị onClose và data từ ListDichvu
type Props = {
    onClose: () => void
    data: ListRoles
}

const RolesDetail = (props: Props) => {
    // nhận giá trị
    const {onClose, data} = props
    return (
    <div id="myModal" className="modal">

    <div className="modal-content">
        {/* Gán chức năng cho button close */}
      <span className="close" onClick={onClose}>&times;</span>
      <div>
        <h3>Danh sách vai trò</h3>
        <h4>Thông tin vai trò</h4>
        <div>
            <label>Tên vai trò: {data.roles_name}</label>
            </div>
            <div>
            <label>Mô tả: {data.r_description}</label>
            </div>
    </div>
    </div>
    
  
  </div>
  );
};


export default RolesDetail