import { ListQuanlyTK } from "./QuanlyTK.type";
import "./QuanlyTK.style.css";
import { useState } from "react";
import React from "react";

type Props = {
  data: ListQuanlyTK;
  onUpdateBtn: (data: ListQuanlyTK) => void;
  onHuyboBtn: () => void;
};

const EditQuanlyTK = (props: Props) => {
  const { data } = props;

  const [user_name, setUName] = useState(data.user_account);
  const [user_phone, setUPhone] = useState(data.user_phone);
  const [user_email, setUEmail] = useState(data.user_email);
  const [user_roles, setURoles] = useState(data.user_roles);
  const [user_account, setPUAccount] = useState(data.user_account);
  const [user_password, setUPassword] = useState(data.user_password);
  const [user_repassword, setURepassword] = useState(data.user_repassword);
  const [user_action, setUAction] = useState(data.user_action);

  const {onUpdateBtn, onHuyboBtn} = props

  const onUNameChange = (e: any) => {
    setUName(e.target.value);
  };
  const onUPhoneChange = (e: any) => {
    setUPhone(e.target.value);
  };
  const onUEmailChange = (e: any) => {
    setUEmail(e.target.value);
  };
  const onURolesChange = (e: any) => {
    setURoles(e.target.value);
  };
  const onUAccountChange = (e: any) => {
    setPUAccount(e.target.value);
  };
  const onUPasswordChange = (e: any) => {
    setUPassword(e.target.value);
  };
  const onURepasswordChange = (e: any) => {
    setURepassword(e.target.value);
  };
  const onUActionChange = (e: any) => {
    setUAction(e.target.value);
  };

  // Ở đây ta sẽ gói dữ liệu đã thêm từ trang và truyền cho trang Dichvu.tsx để hiện dữ liệu
  const onSubmitBtnClick = (e: any) => {
    e.preventDefault();
    const updateData: ListQuanlyTK = {
      id_account: data.id_account,
      user_name: user_name,
      user_phone: user_phone,
      user_email: user_email,
      user_roles: user_roles,
      user_account: user_account,
      user_password: user_password,
      user_repassword: user_repassword,
      user_action: user_action,
    };

    onUpdateBtn(updateData);
    onHuyboBtn();
  };

  return (

    // Khi nhấn vào nút thêm thì sẽ gọi tới hàm onSubmitBtnClick
    <form onSubmit={onSubmitBtnClick}>
        <div>
            <label>Họ tên</label>
            <input type="text" value={user_name} onChange={onUNameChange}/>
        </div>
        <div>
            <label>Số điện thoại</label>
            <input type="text" value={user_phone} onChange={onUPhoneChange}/>
        </div>
        <div>
            <label>Email</label>
            <input type="text" value={user_email} onChange={onUEmailChange}/>
        </div>
        <div>
            <label>Vai trò</label>
            <input type="text" value={user_roles} onChange={onURolesChange}/>
        </div>
        <div>
            <label>Tên đăng nhập</label>
            <input type="text" value={user_account} onChange={onUAccountChange}/>
        </div>
        <div>
            <label>Mật khẩu</label>
            <input type="password" value={user_password} onChange={onUPasswordChange}/>
        </div>
        <div>
            <label>Nhập lại mật khẩu</label>
            <input type="password" value={user_repassword} onChange={onURepasswordChange}/>
        </div>
        <div>
            <label>Tình trạng</label>
            <input type="text" value={user_action} onChange={onUActionChange}/>
        </div>
        <div>
            <input type="button" value="Huỷ bỏ" onClick={onHuyboBtn}/>
            <input type="submit" value="Cập nhật"/>
        </div>

    </form>
);
};

export default EditQuanlyTK;
