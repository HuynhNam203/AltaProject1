import { useState } from "react";
import "./Dichvu.style.css";
import { childListDichvu, ListDichvu } from "./Dichvu.type";
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
    <div>
      This is Dichvu List page
      <table>
        <tr>
          <th>Mã dịch vụ</th>
          <th>Tên dịch vụ</th>
          <th>Mô tả</th>
          <th>Trạng thái hoạt động</th>
        </tr>
        {list.map((dichvu) => {
          return(
          <tr key={dichvu.id}>
            <td>{dichvu.dich_vu}</td>
            <td>{dichvu.name}</td>
            <td>{dichvu.description}</td>
            <td>{dichvu.action}</td>

            <td>
                <div>
                    <input type="button" value="View" 
                    onClick={() => viewDichvu(dichvu)}/>
                </div>
            </td>
            <td>
                <div>
                    <input type="button" value="Edit" 
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
