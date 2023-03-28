import React from "react";
import { useState } from "react";
import { ListThietBi } from "./Thietbi.type";
import "./addForm.style.css";


type Props = {
  onHuyboBtn: () => void;
  onSubmitBtn: (data: ListThietBi) => void;
};

const AddThietBi = (props: Props) => {
  const [thiet_bi, setThietbi] = useState("");
  const [name_thiet_bi, setNameTB] = useState("");
  const [ip_address, setIPTB] = useState("");
  const [action_thiet_bi, setActionTB] = useState("");
  const [connect_thiet_bi, setConnectTB] = useState("");
  const [dichvusd, setDichvuSD] = useState("");
  const [loai_thiet_bi, setLoaiTB] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const { onHuyboBtn, onSubmitBtn } = props;

  const onThietBiChange = (e: any) => {
    setThietbi(e.target.value);
  };
  const onNameTBChange = (e: any) => {
    setNameTB(e.target.value);
  };
  const onIPTBChange = (e: any) => {
    setIPTB(e.target.value);
  };
  const onActionTBChange = (e: any) => {
    setActionTB(e.target.value);
  };
  const onConnectChange = (e: any) => {
    setConnectTB(e.target.value);
  };
  const onDichvuSDChange = (e: any) => {
    setDichvuSD(e.target.value);
  };
  const onLoaiTBChange = (e: any) => {
    setLoaiTB(e.target.value);
  };
  const onUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };
  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  // Ở đây ta sẽ gói dữ liệu đã thêm từ trang và truyền cho trang thietbi.tsx để hiện dữ liệu
  const onSubmitBtnClick = (e: any) => {
    e.preventDefault();
    const data: ListThietBi = {
      id: new Date().toJSON().toString(),
      thiet_bi: thiet_bi,
      name_thiet_bi: name_thiet_bi,
      ip_address: ip_address,
      action_thiet_bi: action_thiet_bi,
      connect_thiet_bi: connect_thiet_bi,
      dichvusd: dichvusd,
      loai_thiet_bi: loai_thiet_bi,
      Username: Username,
      Password: Password,
    };

    onSubmitBtn(data);
    onHuyboBtn();
  };

  return (
    
    // Khi nhấn vào nút thêm thì sẽ gọi tới hàm onSubmitBtnClick
    <form onSubmit={onSubmitBtnClick} >
      <p className="pageName">Quản lý thiết bị</p>
      

      <div className="addForm">
      <p className="pageTitle">Thông tin thiết bị</p>
      <div className="box1">
        <label>Mã thiết bị:</label>
        <input type="text" className="textbox" value={thiet_bi} onChange={onThietBiChange} placeholder="Nhập mã thiết bị" required />
      </div>
      <div className="box2">
        <label>Tên thiết bị:</label>
        <input type="text" className="textbox" value={name_thiet_bi} onChange={onNameTBChange} placeholder="Nhập tên thiết bị" required />
      </div>
      <div className="box3">
        <label>Địa chỉ IP:</label>
        <input type="text" className="textbox" value={ip_address} onChange={onIPTBChange} placeholder="Nhập địa chỉ IP" required />
      </div>
      <div className="box4">
        <label htmlFor={loai_thiet_bi} className="label2"  onChange={onLoaiTBChange}>Loại thiết bị:</label>
        <select name={loai_thiet_bi} placeholder="Chọn loại thiết bị" className="textbox2">
          <option value="Kiosk">Kiosk</option>
          <option value="Display_counter">Display counter</option>
        </select>
      </div>
      <div className="box5">
        <label className="label2">Tên đăng nhập:</label>
        <input type="text" className="textbox2" value={Username} onChange={onUsernameChange} placeholder="Nhập tài khoản" required/>
      </div>
      <div className="box6">
        <label className="label2">Mật khẩu:</label>
        <input type="password" className="textbox2" value={Password} onChange={onPasswordChange} placeholder="Nhập mật khẩu" required/>
      </div>
      <div className="box7">
        <label className="label3">Dịch vụ sử dụng:</label>
        <input type="text" className="textbox3" value={dichvusd} onChange={onDichvuSDChange} placeholder="Nhập dịch vụ sử dụng" required/>
      </div>
      <div className="box8">
        <input className="btnHuy" type="button" value="Huỷ bỏ" onClick={onHuyboBtn}/>
        <input className="btnThem" type="submit" value="Thêm thiết bị" />
      </div>
      </div>
    </form>
  );
};

export default AddThietBi;
