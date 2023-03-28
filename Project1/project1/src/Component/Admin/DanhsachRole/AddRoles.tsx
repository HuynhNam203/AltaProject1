import { Checkbox } from "antd";
import React from "react";
import { useState } from "react";
import "./addRoles.style.css"
import { ListRoles } from "./Roles.type";



type Props = {
    onHuyboBtn : () => void
    onSubmitBtn : (data: ListRoles) => void
}

const AddRoles = (props : Props) => {
    const [roles_name, setRName] = useState("");
    const [r_description, setRDescription] = useState("");
    
    const {onHuyboBtn ,onSubmitBtn} = props
    
    const onRolesChange = (e : any) => {
        setRName(e.target.value)
    };
    const onRDescriptionChange = (e : any) => {
        setRDescription(e.target.value)
    };

    // Ở đây ta sẽ gói dữ liệu đã thêm từ trang và truyền cho trang Dichvu.tsx để hiện dữ liệu
    const onSubmitBtnClick = (e: any) => {
        e.preventDefault()
;        const data: ListRoles = {
            id_roles: new Date().toJSON().toString(),
            roles_name: roles_name,
            r_description: r_description,
        }

        onSubmitBtn(data)
        onHuyboBtn()
    }

    return (

        // Khi nhấn vào nút thêm thì sẽ gọi tới hàm onSubmitBtnClick
        <form onSubmit={onSubmitBtnClick}>
      <p className="pageRolesName">Danh sách vai trò</p>

            <div className="rolesForm">
            <p className="pageRolesTitle">Thông tin vai trò</p>
                <div className="boxRoles1">
                <label>Tên vai trò</label>
                <input className="rolestextbox1" type="text" value={roles_name} onChange={onRolesChange}/>
            </div>
            <div className="boxRoles2">
                <label> Mô tả:</label>
                <textarea className="rolestextbox2"  value={r_description} onChange={onRDescriptionChange}/>
            </div>
            <div className="rolesFunctionForm">
            <div className="boxRoles3">
                <p className="chucNangA">Nhóm chức năng A</p>
                <Checkbox  className="checkboxa1">Tất cả</Checkbox>
                <Checkbox  className="checkboxa2">Chức năng A</Checkbox>
                <Checkbox  className="checkboxa3">Chức năng B</Checkbox>
                <Checkbox  className="checkboxa4">Chức năng C</Checkbox>
            </div>
            <div className="boxRoles4">
                <p className="chucNangB">Nhóm chức năng B</p>
                <Checkbox  className="checkboxb1">Tất cả</Checkbox>
                <Checkbox  className="checkboxb2">Chức năng X</Checkbox>
                <Checkbox  className="checkboxb3">Chức năng Y</Checkbox>
                <Checkbox  className="checkboxb4">Chức năng Z</Checkbox>
            </div>
            </div>
            <div className="boxRoles5">
                <input className="btnHuy" type="button" value="Huỷ bỏ" onClick={onHuyboBtn}/>
                <input className="btnThem" type="submit" value="Thêm"/>
            </div>
            </div>

        </form>
    )
        
}

export default AddRoles;