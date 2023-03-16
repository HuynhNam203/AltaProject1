import { ListDichvu } from "./Dichvu.type";
import "./DichvuDetail.style.css"


// gọi giá trị onClose và data từ ListDichvu
type Props = {
    onClose: () => void
    data: ListDichvu
}

const DichvuDetail = (props: Props) => {
    // nhận giá trị
    const {onClose, data} = props
    return (
    <div id="myModal" className="modal">

    <div className="modal-content">
        {/* Gán chức năng cho button close */}
      <span className="close" onClick={onClose}>&times;</span>
      <div>
        <h3>Quản lý dịch vụ</h3>
        <h4>Thông tin dịch vụ</h4>
        <div>
            <label>Mã dịch vụ: {data.dich_vu}</label>
            </div>
            <div>
            <label>Tên dịch vụ: {data.name}</label>
            </div>
            <div>
            <label>Mô tả: {data.description}</label>
            </div>
    </div>
    </div>
    
  
  </div>
  );
};


export default DichvuDetail