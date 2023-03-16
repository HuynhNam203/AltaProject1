import React, { useState } from 'react'
import { UserOutlined } from '@ant-design/icons';
import SideBar from '../../Side/SideBar';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { ListDichvu, childListDichvu, PageDichvu } from "./Dichvu.type";
import "./Dichvu.style.css"
import DichvuList from './ListDichvu';
import AddDichvu from './AddDichvu';
import EditDichvu from './EditDichvu';

const { Header, Content, Sider } = Layout;


const Dichvu = () => {
    const [listDichVu, setlistDichVu] = useState(
        childListDichvu as ListDichvu[]);

        // Show dưới dạng 1 list
        const [shownPage, setShownPage] = useState(PageDichvu.list)
        const [dataToEdit, setDataToEdit] = useState({} as ListDichvu)

        const onAddDichvuClick = () => {
            setShownPage(PageDichvu.add)
        }

        const showListPage = () => {
            setShownPage(PageDichvu.list)
        }

        const editListPage = () => {
            setShownPage(PageDichvu.edit);

        }

        // Từ đây ta đẩy bản ghi và listDichVu
        const addDichVu = (data: ListDichvu) => {
            setlistDichVu([...listDichVu, data]);
        }

        const editDichVuData = (data: ListDichvu) => {
            setShownPage(PageDichvu.edit);
            setDataToEdit(data);
        }

        const updateData = (data: ListDichvu) => {
            const filteredData = listDichVu.filter(x => x.id == data.id)[0];
            const indexOfRecord = listDichVu.indexOf(filteredData);
            const tempData = [...listDichVu];
            tempData[indexOfRecord] = data;
            setlistDichVu(tempData)
        }
    return (

        <Layout>
            <Sider>
                <SideBar></SideBar>
            </Sider>

            <Layout>
                <Content>
                    <p className='titleDichvu'>This is Dichvu Page</p>
                    <section className='section-content'>

                        {/* show lên list */}
                        {shownPage === PageDichvu.list  &&
                        (
                            <>
                            <input type="button" value="Thêm dịch vụ" onClick={onAddDichvuClick}/>
                            <DichvuList 
                            list={listDichVu}
                            onEdit={editDichVuData}
                            />
                            {/* <input type="button" value="Cập nhật" onClick={() => onEdit(dichvu)}/> */}

                            </>
                        )}
                        
                        {shownPage === PageDichvu.add && 
                        (<AddDichvu onHuyboBtn={showListPage} onSubmitBtn={addDichVu}/>)}

                        {shownPage === PageDichvu.edit && 
                        (<EditDichvu data={dataToEdit} onHuyboBtn={showListPage} onUpdateBtn={updateData}/>)}
                    </section>
                </Content>
            </Layout>

        </Layout>
    );
}

export default Dichvu;

function useSate(): [any, any] {
    throw new Error('Function not implemented.');
}

