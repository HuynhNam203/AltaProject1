import { ListThietBi } from "./Thietbi.type";
import "./Thietbi.style.css";
import { useState } from "react";
import React from "react";
import "./addForm.style.css";

type Props = {
  data: ListThietBi;
  onUpdateBtn: (data: ListThietBi) => void;
  onHuyboBtn: () => void;
};

const EditThietbi = (props: Props) => {
  const { data } = props;

  const [thiet_bi, setThietbi] = useState(data.thiet_bi);
  const [name_thiet_bi, setNameTB] = useState(data.name_thiet_bi);
  const [ip_address, setIPTB] = useState(data.ip_address);
  const [action_thiet_bi, setActionTB] = useState(data.action_thiet_bi);
  const [connect_thiet_bi, setConnectTB] = useState(data.connect_thiet_bi);
  const [dichvusd, setDichvuSD] = useState(data.dichvusd);
  const [loai_thiet_bi, setLoaiTB] = useState(data.loai_thiet_bi);
  const [Username, setUsername] = useState(data.Username);
  const [Password, setPassword] = useState(data.Password);

  const { onUpdateBtn, onHuyboBtn } = props;

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

  const onSubmitBtnClick = (e: any) => {
    e.preventDefault();
    const updateData: ListThietBi = {
      id: data.id,
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

    onUpdateBtn(updateData);
    onHuyboBtn();
  };

  return (
    
    <form onSubmit={onSubmitBtnClick}>
      <p className="pageName">Quản lý thiết bị</p>

      
      <div className="submitForm">
      <p className="pageTitle">Thông tin thiết bị</p>
      <div className="box1">
        <label>Mã thiết bị:</label>
        <input type="text" className="textbox" value={thiet_bi} onChange={onThietBiChange} />
      </div>
      <div className="box2">
        <label>Tên thiết bị:</label>
        <input type="text" className="textbox" value={name_thiet_bi} onChange={onNameTBChange} />
      </div>
      <div className="box3">
        <label>Địa chỉ IP:</label>
        <input type="text" className="textbox" value={ip_address} onChange={onIPTBChange} />
      </div>
      <div className="box4">
        <label htmlFor={loai_thiet_bi}  onChange={onLoaiTBChange}>Loại thiết bị:</label>
        <select name={loai_thiet_bi} placeholder="Chọn loại thiết bị" className="textbox2">
          <option value="Kiosk">Kiosk</option>
          <option value="Display_counter">Display counter</option>
        </select>
      </div>
      <div className="box5">
        <label>Tên đăng nhập:</label>
        <input type="text" className="textbox2" value={Username} onChange={onUsernameChange} />
      </div>
      <div className="box6">
        <label>Mật khẩu:</label>
        <input type="password" className="textbox2" value={Password} onChange={onPasswordChange} />
      </div>
      <div className="box7">
        <label>Dịch vụ sử dụng:</label>
        <input type="text" className="textbox3" value={dichvusd} onChange={onDichvuSDChange} />
      </div>
      <div className="box8">
        <input className="btnHuy" type="button" value="Huỷ bỏ" onClick={onHuyboBtn} />
        <input className="btnThem" type="submit" value="Cập nhật" />
      </div>
      </div>
    </form>
  );
};

export default EditThietbi
