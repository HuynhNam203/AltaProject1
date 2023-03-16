import { ListDichvu } from "./Dichvu.type";
import "./Dichvu.style.css"
import { useState } from "react";

type Props = {
    data: ListDichvu;
    onUpdateBtn : (data: ListDichvu) => void
    onHuyboBtn : () => void


}

const EditDichvu = (props: Props) => {
    const {data} = props

    const [dich_vu, setDichvu] = useState(data.dich_vu);
    const [name, setName] = useState(data.name);
    const [description, setDescription] = useState(data.description);
    const [action, setAction] = useState(data.action);

    const {onUpdateBtn, onHuyboBtn} = props

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

    const onSubmitBtnClick = (e: any) => {
        e.preventDefault()
;        const updateData: ListDichvu = {
            id: data.id,
            dich_vu: dich_vu,
            name: name,
            description: description,
            action: action
        }

        onUpdateBtn(updateData)
        onHuyboBtn()
    }

    return (
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
        <input type="submit" value="Cập nhật"/>
    </div>

</form>)
}

export default EditDichvu