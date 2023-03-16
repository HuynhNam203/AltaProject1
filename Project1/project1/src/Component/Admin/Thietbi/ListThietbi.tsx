import { useState } from "react";
import "./Thietbi.style.css";
import { childListThietBi, ListThietBi } from "./Thietbi.type";
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
    <div>
      This is Thietbi List page
      <table>
        <tr>
          <th>Mã dịch vụ</th>
          <th>Tên dịch vụ</th>
          <th>Mô tả</th>
          <th>Trạng thái hoạt động</th>
        </tr>
        {list.map((Thietbi) => {
          return(
          <tr key={Thietbi.id}>
            <td>{Thietbi.dich_vu}</td>
            <td>{Thietbi.name}</td>
            <td>{Thietbi.description}</td>
            <td>{Thietbi.action}</td>

            <td>
                <div>
                    <input type="button" value="View" 
                    onClick={() => viewThietbi(Thietbi)}/>
                </div>
            </td>
            <td>
                <div>
                    <input type="button" value="Edit" 
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
