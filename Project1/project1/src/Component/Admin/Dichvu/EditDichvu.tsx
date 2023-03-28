import { ListDichvu } from "./Dichvu.type";
import "./addDVForm.style.css";
import { useState } from "react";
import React from "react";
import { Checkbox } from "antd";

type Props = {
  data: ListDichvu;
  onUpdateBtn: (data: ListDichvu) => void;
  onHuyboBtn: () => void;
};

const EditDichvu = (props: Props) => {
  const { data } = props;

  const [dich_vu, setDichvu] = useState(data.dich_vu);
  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);
  const [action, setAction] = useState(data.action);
  const [tang_tu_dong_dau, setAutoIncreFir] = useState(data.tang_tu_dong_dau);
  const [tang_tu_dong_sau, setAutoIncreLas] = useState(data.tang_tu_dong_sau);
  const [prefix, setPrefix] = useState(data.prefix);
  const [surfix, setSurfix] = useState(data.surfix);

  const { onUpdateBtn, onHuyboBtn } = props;

  const onDichvuChange = (e: any) => {
    setDichvu(e.target.value);
  };
  const onNameChange = (e: any) => {
    setName(e.target.value);
  };
  const onDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };
  const onActionChange = (e: any) => {
    setAction(e.target.value);
  };
  const onAutoIncreFirChange = (e: any) => {
    setAutoIncreFir(e.target.value);
  };
  const onAutoIncreLasChange = (e: any) => {
    setAutoIncreLas(e.target.value);
  };
  const onPrefixChange = (e: any) => {
    setPrefix(e.target.value);
  };
  const onSurfixChange = (e: any) => {
    setSurfix(e.target.value);
  };
  const onSubmitBtnClick = (e: any) => {
    e.preventDefault();
    const updateData: ListDichvu = {
      id: data.id,
      dich_vu: dich_vu,
      name: name,
      description: description,
      action: action,
      tang_tu_dong_dau: tang_tu_dong_dau,
      tang_tu_dong_sau: tang_tu_dong_sau,
      prefix: prefix,
      surfix: surfix,
    };

    onUpdateBtn(updateData);
    onHuyboBtn();
  };

  return (
    <form onSubmit={onSubmitBtnClick}>
      <p className="pageName">Quản lý Dịch vụ</p>

      <div className="DichvuForm">
        <p className="pageTitle">Thông tin dịch vụ</p>

        <div className="boxdv1">
          <label> Mã dịch vụ:</label>
          <input
            className="dvtextbox1"
            type="text"
            value={dich_vu}
            onChange={onDichvuChange}
            placeholder="Nhập mã dịch vụ"
          />
        </div>
        <div className="boxdv2">
          <label> Tên dịch vụ:</label>
          <input
            className="dvtextbox1"
            type="text"
            value={name}
            onChange={onNameChange}
            placeholder="Nhập tên dịch vụ"
          />
        </div>
        <div className="boxdv3">
          <label> Mô tả:</label>
          <input
            className="dvtextbox2"
            type="text"
            value={description}
            onChange={onDescriptionChange}
            placeholder="Mô tả dịch vụ"
          />
        </div>
        <div className="boxdv4">
          <input
            className="btnHuy"
            type="button"
            value="Huỷ bỏ"
            onClick={onHuyboBtn}
          />
          <input className="btnThem" type="submit" value="Thêm dịch vụ" />
        </div>

        <p className="quytac">Quy tắc cấp số</p>
        <div className="boxdv5">
          <Checkbox className="checkbox">Tăng tự động từ:</Checkbox>
          <input
            className="dvtextbox3"
            type="number"
            value={tang_tu_dong_dau}
            onChange={onAutoIncreFirChange}
            placeholder="0"
          />
          <span className="spaninboxdv5">đến</span>
          <input
            className="dvtextbox4"
            type="number"
            value={tang_tu_dong_sau}
            onChange={onAutoIncreLasChange}
            placeholder="9999"
          />
        </div>
        <div className="boxdv6">
          <Checkbox
            value={prefix}
            onChange={onPrefixChange}
            className="checkbox"
          >
            Prefix:
          </Checkbox>
          <input
            className="dvtextbox5"
            type="number"
            value={prefix}
            onChange={onPrefixChange}
            placeholder="0"

          />
        </div>
        <div className="boxdv7">
          <Checkbox
            value={surfix}
            onChange={onSurfixChange}
            className="checkbox"
          >
            Surfix:
          </Checkbox>
          <input
            className="dvtextbox6"
            type="number"
            value={surfix}
            onChange={onSurfixChange}
            placeholder="0"

          />
        </div>
        <div className="boxdv8">
          <Checkbox className="checkbox">Reset mỗi ngày</Checkbox>
        </div>
      </div>
    </form>
  );
};

export default EditDichvu;
