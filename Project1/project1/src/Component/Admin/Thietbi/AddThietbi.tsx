import { useState } from "react";
import { ListThietBi } from "./thietbi.type";



type Props = {
    onHuyboBtn : () => void
    onSubmitBtn : (data: ListThietBi) => void
}

const Addthietbi = (props : Props) => {
    const [dich_vu, setthietbi] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [action, setAction] = useState("");
    
    const {onHuyboBtn ,onSubmitBtn} = props
    
    const onthietbiChange = (e : any) => {
        setthietbi(e.target.value)
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

    // Ở đây ta sẽ gói dữ liệu đã thêm từ trang và truyền cho trang thietbi.tsx để hiện dữ liệu
    const onSubmitBtnClick = (e: any) => {
        e.preventDefault()
;        const data: ListThietBi = {
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
                <input type="text" value={dich_vu} onChange={onthietbiChange}/>
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

export default Addthietbi;