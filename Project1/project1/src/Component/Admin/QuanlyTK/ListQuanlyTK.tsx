import React from "react";
import { useState } from "react";
import "./QuanlyTK.style.css";
import {  ListQuanlyTK } from "./QuanlyTK.type";
import QuanlyTKDetail from "./QuanlyTKDetail";

type Props = {
  list: ListQuanlyTK[];
  onEdit: (data: ListQuanlyTK) => void;
};

const QuanlyTKList = (props: Props) => {
  const { list , onEdit} = props;
  // Giá trị false giúp ẩn modal khi vào trang 
  const [showModal, setShowModal] = useState(false)
  const [datatoShow, setDataToShow] = useState(null as ListQuanlyTK | null)

 // Gán giá trị true để khi gọi thì Modal sẽ xuất hiện và để hiện giá trị có trong ListQuanlyTK
  const viewQuanlyTK = (data: ListQuanlyTK) => {
    setDataToShow(data)
    setShowModal(true)
  }

  const onCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="accountTitle">
      Danh sách tài khoản
      <table className="tableAccountName">
        <tr className="tableAccountTitle">
          <th className="accountTitle1">Tên đăng nhập</th>
          <th className="accountTitle2">Họ tên</th>
          <th className="accountTitle3">Số điện thoại</th>
          <th className="accountTitle4">Email</th>
          <th className="accountTitle5">Vai trò</th>
          <th className="accountTitle6">Trạng thái hoạt động</th>
          <th className="accountTitle7"></th>
        </tr>
        {list.map((UAccount) => {
          return(
          <tr key={UAccount.id_account} className="tableAccountdata">
            <td className="account1">{UAccount.user_account}</td>
            <td className="account2">{UAccount.user_name}</td>
            <td className="account3">{UAccount.user_phone}</td>
            <td className="account4">{UAccount.user_email}</td>
            <td className="account5">{UAccount.user_roles}</td>
            <td className="account6">{UAccount.user_action}</td>

            <td className="account7"> 
                <div>
                    <input className="buttonstyle" type="button" value="Cập nhật" 
                    onClick={() => onEdit(UAccount)}/>
                </div>
            </td>
          </tr>
          );
        })}
      </table>
      {/* Trả về giá trị true để hiện Modal, nút tắt của Modal và xuất giá trị có trong ListDichVu */}

      {showModal && datatoShow !== null && <QuanlyTKDetail onClose={onCloseModal} data={datatoShow}/>}
      
    </div>
  );
};

export default QuanlyTKList;
