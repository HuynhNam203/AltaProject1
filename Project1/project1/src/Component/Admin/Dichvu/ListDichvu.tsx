import React from "react";
import { useState } from "react";
import "./Dichvu.style.css";
import { ListDichvu } from "./Dichvu.type";
import DichvuDetail from "./DichvuDetail";

type Props = {
  list: ListDichvu[];
  onEdit: (data: ListDichvu) => void;
};

const DichvuList = (props: Props) => {
  const { list , onEdit} = props;
  // Giá trị false giúp ẩn modal khi vào trang 
  const [showModal, setShowModal] = useState(false)
  const [datatoShow, setDataToShow] = useState(null as ListDichvu | null)

 // Gán giá trị true để khi gọi thì Modal sẽ xuất hiện và để hiện giá trị có trong ListDichvu
  const viewDichvu = (data: ListDichvu) => {
    setDataToShow(data)
    setShowModal(true)
  }

  const onCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="dvtitle">
      Danh sách dịch vụ
      <table className="tabledvname">
        <tr className="tabledvtitle">
          <th className="dvtitle1">Mã dịch vụ</th>
          <th className="dvtitle2">Tên dịch vụ</th>
          <th className="dvtitle3">Mô tả</th>
          <th className="dvtitle4">Trạng thái hoạt động</th>
          <th className="dvtitle5"></th>
          <th className="dvtitle6"></th>
        </tr>
        {list.map((dichvu) => {
          return(
          <tr key={dichvu.id} className="tabledvdata">
            <td className="dv1">{dichvu.dich_vu}</td>
            <td className="dv2">{dichvu.name}</td>
            <td className="dv3">{dichvu.description}</td>
            <td className="dv4">{dichvu.action}</td>

            <td className="dv5">
                <div >
                    <input className="buttonstyle" type="button" value="View" 
                    onClick={() => viewDichvu(dichvu)}/>
                </div>
            </td>
            <td className="dv6">
                <div >
                    <input className="buttonstyle" type="button" value="Edit" 
                    onClick={() => onEdit(dichvu)}/>
                </div>
            </td>
          </tr>
          );
        })}
      </table>
      {/* Trả về giá trị true để hiện Modal, nút tắt của Modal và xuất giá trị có trong ListDichVu */}

      {showModal && datatoShow !== null && <DichvuDetail onClose={onCloseModal} data={datatoShow}/>}
      
    </div>
  );
};

export default DichvuList;
