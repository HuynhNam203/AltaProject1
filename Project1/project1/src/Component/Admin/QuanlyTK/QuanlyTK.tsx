import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import SideBar from '../../Side/SideBar';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { ListQuanlyTK, PageQuanlyTK } from "./QuanlyTK.type";
import "./QuanlyTK.style.css"
import QuanlyTKList from './ListQuanlyTK';
import AddQuanlyTK from './AddQuanlyTK';
import EditQuanlyTK from './EditQuanlyTK';

const { Header, Content, Sider } = Layout;


const QuanlyTK = () => {
    const [listQuanlyTK, setlistQuanlyTK] = useState(
        [] as ListQuanlyTK[]);

        // Show dưới dạng 1 list
        const [shownPage, setShownPage] = useState(PageQuanlyTK.list)
        const [dataToEdit, setDataToEdit] = useState({} as ListQuanlyTK)

        const onAddUAccountClick = () => {
            setShownPage(PageQuanlyTK.add)
        }

        const showListPage = () => {
            setShownPage(PageQuanlyTK.list)
        }

        const editListPage = () => {
            setShownPage(PageQuanlyTK.edit);

        }

        // Từ đây ta đẩy bản ghi và listonUAccount
        const addQuanlyTK = (data: ListQuanlyTK) => {
            setlistQuanlyTK([...listQuanlyTK, data]);
        }

        const editQuanlyTKData = (data: ListQuanlyTK) => {
            setShownPage(PageQuanlyTK.edit);
            setDataToEdit(data);
        }

        const updateData = (data: ListQuanlyTK) => {
            const filteredData = listQuanlyTK.filter(x => x.id_account == data.id_account)[0];
            const indexOfRecord = listQuanlyTK.indexOf(filteredData);
            const tempData = [...listQuanlyTK];
            tempData[indexOfRecord] = data;
            setlistQuanlyTK(tempData)
        }
    return (

        <Layout>
            <Sider>
                <SideBar></SideBar>
            </Sider>

            <Layout>
                <Content>
                    <section className='section-content'>

                        {/* show lên list */}
                        {shownPage === PageQuanlyTK.list  &&
                        (
                            <>
                            <input type="button"  onClick={onAddUAccountClick} className="addAccountbtn"  style={{fontSize:14,fontFamily:"Nunito",fontWeight:600,textAlign:'center',lineHeight:19}}/>
                            <div className="hoverAccountbtnicon" onClick={onAddUAccountClick}>
                                <div className='btnAccountname'>Thêm tài khoản</div>
                            <div className="btnAccounticon"><PlusOutlined /></div>
                            </div>
                            <QuanlyTKList 
                            list={listQuanlyTK}
                            onEdit={editQuanlyTKData}
                            />
                            {/* <input type="button" value="Cập nhật" onClick={() => onEdit(dichvu)}/> */}

                            </>
                        )}
                        
                        {shownPage === PageQuanlyTK.add && 
                        (<AddQuanlyTK onHuyboBtn={showListPage} onSubmitBtn={addQuanlyTK}/>)}

                        {shownPage === PageQuanlyTK.edit && 
                        (<EditQuanlyTK data={dataToEdit} onHuyboBtn={showListPage} onUpdateBtn={updateData}/>)}
                    </section>
                </Content>
            </Layout>

        </Layout>
    );
}

export default QuanlyTK;

function useSate(): [any, any] {
    throw new Error('Function not implemented.');
}

