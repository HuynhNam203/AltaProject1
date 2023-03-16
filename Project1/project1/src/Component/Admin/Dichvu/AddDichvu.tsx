import { useState } from "react";
import { ListDichvu } from "./Dichvu.type";



type Props = {
    onHuyboBtn : () => void
    onSubmitBtn : (data: ListDichvu) => void
}

const AddDichvu = (props : Props) => {
    const [dich_vu, setDichvu] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [action, setAction] = useState("");
    
    const {onHuyboBtn ,onSubmitBtn} = props
    
    const onDichvuChange = (e : any) => {
        setDichvu(e.target.value)
    };
    const onNameChange = (e : any) => {
        setName(e.target.value)
    };
    const onDescriptionChange = (e : any) => {
        setDescription(e.target.value)
    };
    const onActionChange = (e : any) => {
        setAction(e.target.value)
    };

    // Ở đây ta sẽ gói dữ liệu đã thêm từ trang và truyền cho trang Dichvu.tsx để hiện dữ liệu
    const onSubmitBtnClick = (e: any) => {
        e.preventDefault()
;        const data: ListDichvu = {
            id: new Date().toJSON().toString(),
            dich_vu: dich_vu,
            name: name,
            description: description,
            action: action
        }

        onSubmitBtn(data)
        onHuyboBtn()
    }

    return (

        // Khi nhấn vào nút thêm thì sẽ gọi tới hàm onSubmitBtnClick
        <form onSubmit={onSubmitBtnClick}>
            <div>
                <label> Mã dịch vụ:</label>
                <input type="text" value={dich_vu} onChange={onDichvuChange}/>
            </div>
            <div>
                <label> Tên dịch vụ:</label>
                <input type="text" value={name} onChange={onNameChange}/>
            </div>
            <div>
                <label> Mô tả:</label>
                <input type="text" value={description} onChange={onDescriptionChange}/>
            </div>
            <div>
                <label> Hoạt động:</label>
                <input type="text" value={action} onChange={onActionChange}/>
            </div>
            <div>
                <input type="button" value="Huỷ bỏ" onClick={onHuyboBtn}/>
                <input type="submit" value="Thêm dịch vụ"/>
            </div>

        </form>
    )
        
}

export default AddDichvu;