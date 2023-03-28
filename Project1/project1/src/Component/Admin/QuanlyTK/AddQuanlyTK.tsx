import React from "react";
import { useState } from "react";
import { ListQuanlyTK } from "./QuanlyTK.type";
import "./addQuanlyTK.style.css";

type Props = {
  onHuyboBtn: () => void;
  onSubmitBtn: (data: ListQuanlyTK) => void;
};

const AddQuanlyTK = (props: Props) => {
  const [user_name, setUName] = useState("");
  const [user_phone, setUPhone] = useState("");
  const [user_email, setUEmail] = useState("");
  const [user_roles, setURoles] = useState("");
  const [user_account, setPUAccount] = useState("");
  const [user_password, setUPassword] = useState("");
  const [user_repassword, setURepassword] = useState("");
  const [user_action, setUAction] = useState("");

  const { onHuyboBtn, onSubmitBtn } = props;

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
    const data: ListQuanlyTK = {
      id_account: new Date().toJSON().toString(),
      user_name: user_name,
      user_phone: user_phone,
      user_email: user_email,
      user_roles: user_roles,
      user_account: user_account,
      user_password: user_password,
      user_repassword: user_repassword,
      user_action: user_action,
    };

    onSubmitBtn(data);
    onHuyboBtn();
  };

  return (
    // Khi nhấn vào nút thêm thì sẽ gọi tới hàm onSubmitBtnClick
    <form onSubmit={onSubmitBtnClick}>
      <p className="pageAccountName">Quản lý tài khoản</p>

      <div className="addAccountForm">
        <p className="pageAccountTitle">Thông tin tài khoản</p>

        <div className="boxAccount1">
          <label>Họ tên</label>
          <input
            type="text"
            className="accountTextBox"
            value={user_name}
            onChange={onUNameChange}
            placeholder="Nhập họ tên"
            required
          />
        </div>
        <div className="boxAccount2">
          <label>Số điện thoại</label>
          <input
            type="text"
            className="accountTextBox"
            value={user_phone}
            onChange={onUPhoneChange}
            placeholder="Nhập số điện thoại"
            required
          />
        </div>
        <div className="boxAccount3">
          <label>Email</label>
          <input
            type="text"
            className="accountTextBox"
            value={user_email}
            onChange={onUEmailChange}
            placeholder="Nhập email"
            required
          />
        </div>
        <div className="boxAccount4">
          <label>Vai trò</label>
          <input
            type="text"
            className="accountTextBox"
            value={user_roles}
            onChange={onURolesChange}
            placeholder="Chọn vai trò"
            required
          />
        </div>
        <div className="boxAccount5">
          <label>Tên đăng nhập</label>
          <input
            type="text"
            className="accountTextBox2"
            value={user_account}
            onChange={onUAccountChange}
            placeholder="Nhập tên đăng nhập"
            required
          />
        </div>
        <div className="boxAccount6">
          <label>Mật khẩu</label>
          <input
            type="password"
            className="accountTextBox2"
            value={user_password}
            onChange={onUPasswordChange}
            placeholder="Nhập mã thiết bị"
            required
          />
        </div>
        <div className="boxAccount7">
          <label>Nhập lại mật khẩu</label>
          <input
            type="password"
            className="accountTextBox2"
            value={user_repassword}
            onChange={onURepasswordChange}
            placeholder="Nhập mã thiết bị"
            required
          />
        </div>
        <div className="boxAccount8">
          <label>Tình trạng</label>
          <input
            type="text"
            className="accountTextBox2"
            value={user_action}
            onChange={onUActionChange}
            placeholder="Nhập tình trạng"
            required
          />
        </div>
        <div className="boxAccount9">
          <input className="btnHuy" type="button" value="Huỷ bỏ" onClick={onHuyboBtn} />
          <input className="btnThem" type="submit" value="Thêm" />
        </div>
      </div>
    </form>
  );
};

export default AddQuanlyTK;
