import React from "react";
import { useState } from "react";
import "./Roles.style.css";
import { ListRoles } from "./Roles.type";
import RolesDetail from "./RolesDetail";

type Props = {
  list: ListRoles[];
  onEdit: (data: ListRoles) => void;
};

const RolesList = (props: Props) => {
  const { list , onEdit} = props;
  // Giá trị false giúp ẩn modal khi vào trang 
  const [showModal, setShowModal] = useState(false)
  const [datatoShow, setDataToShow] = useState(null as ListRoles | null)

 // Gán giá trị true để khi gọi thì Modal sẽ xuất hiện và để hiện giá trị có trong ListRoles
  const viewRoles = (data: ListRoles) => {
    setDataToShow(data)
    setShowModal(true)
  }

  const onCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="rolestitle">
      Danh sách vai trò
      <table className="tablerolesname">
        <tr className="tablerolestitle">
          <th className="rt1">Tên vai trò</th>
          <th className="rt2">Số người dùng</th>
          <th className="rt3">Mô tả</th>
          <th className="rt4"></th>
        </tr>
        {list.map((roles) => {
          return(
          <tr key={roles.id_roles} className="tablerolesdata">
            <td className="rd1">{roles.roles_name}</td>
            <td className="rd2">..</td>
            <td className="rd3">{roles.r_description}</td>

            {/* <td>
                <div>
                    <input type="button" value="View" 
                    onClick={() => viewRoles(roles)}/>
                </div>
            </td> */}
            <td className="rd4">
                <div>
                    <input className="buttonstyle" type="button" value="Edit" 
                    onClick={() => onEdit(roles)}/>
                </div>
            </td>
          </tr>
          );
        })}
      </table>
      {/* Trả về giá trị true để hiện Modal, nút tắt của Modal và xuất giá trị có trong ListDichVu */}

      {showModal && datatoShow !== null && <RolesDetail onClose={onCloseModal} data={datatoShow}/>}
      
    </div>
  );
};

export default RolesList;
