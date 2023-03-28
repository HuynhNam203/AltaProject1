import React from "react";
import { useState } from "react";
import "./Thietbi.style.css";
import { ListThietBi } from "./Thietbi.type";
import ThietbiDetail from "./ThietbiDetail";

type Props = {
  list: ListThietBi[];
  onEdit: (data: ListThietBi) => void;
};

const ThietbiList = (props: Props) => {
  const { list , onEdit} = props;
  // Giá trị false giúp ẩn modal khi vào trang 
  const [showModal, setShowModal] = useState(false)
  const [datatoShow, setDataToShow] = useState(null as ListThietBi | null)

 // Gán giá trị true để khi gọi thì Modal sẽ xuất hiện và để hiện giá trị có trong ListThietbi
  const viewThietbi = (data: ListThietBi) => {
    setDataToShow(data)
    setShowModal(true)
  }

  const onCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="title">
      Danh sách thiết bị
      <table className="tablename">
        <tr  className="tabletitle">
          <th className="th1">Mã thiết bị</th>
          <th className="th2">Tên thiết bị</th>
          <th className="th3">Địa chỉ IP</th>
          <th className="th4">Trạng thái hoạt động</th>
          <th className="th5">Trạng thái kết nối</th>
          <th className="th6">Dịch vụ sử dụng</th>
          <th className="th7"></th>
          <th className="th8"></th>
        </tr>
        {list.map((Thietbi) => {
          return(
          <tr key={Thietbi.id} className="tabledata">
            <td className="td1">{Thietbi.thiet_bi}</td>
            <td className="td2">{Thietbi.name_thiet_bi}</td>
            <td className="td3">{Thietbi.ip_address}</td>
            <td className="td4"></td>
            <td className="td5"></td>
            <td className="td6">{Thietbi.dichvusd}</td>

            <td className="td7">
                <div>
                    <input className="buttonstyle" type="button" value="View" 
                    onClick={() => viewThietbi(Thietbi)}/>
                </div>
            </td>
            <td className="td8">
                <div>
                    <input className="buttonstyle" type="button" value="Edit" 
                    onClick={() => onEdit(Thietbi)}/>
                </div>
            </td>
          </tr>
          );
        })}
      </table>
      {/* Trả về giá trị true để hiện Modal, nút tắt của Modal và xuất giá trị có trong ListThietbi */}

      {showModal && datatoShow !== null && <ThietbiDetail onClose={onCloseModal} data={datatoShow}/>}
      
    </div>
  );
};

export default ThietbiList;
