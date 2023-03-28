import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import SideBar from '../../Side/SideBar';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { ListThietBi, PageThietBi } from "./Thietbi.type";
import "./Thietbi.style.css";
import ThietbiList from './ListThietbi';
import AddThietbi from './AddThietbi';
import EditThietbi from './EditThietbi';

const { Header, Content, Sider } = Layout;


const Thietbi = () => {
    const [listThietBi, setlistThietBi] = useState(
        [] as ListThietBi[]);

        // Show dưới dạng 1 list
        const [shownPage, setShownPage] = useState(PageThietBi.list)
        const [dataToEdit, setDataToEdit] = useState({} as ListThietBi)

        const onAddthietbiClick = () => {
            setShownPage(PageThietBi.add)
        }

        const showListPage = () => {
            setShownPage(PageThietBi.list)
        }

        const editListPage = () => {
            setShownPage(PageThietBi.edit);

        }

        // Từ đây ta đẩy bản ghi và ListThietBi
        const addThietBi = (data: ListThietBi) => {
            setlistThietBi([...listThietBi, data]);
        }

        const editThietBiData = (data: ListThietBi) => {
            setShownPage(PageThietBi.edit);
            setDataToEdit(data);
        }

        const updateData = (data: ListThietBi) => {
            const filteredData = listThietBi.filter(x => x.id == data.id)[0];
            const indexOfRecord = listThietBi.indexOf(filteredData);
            const tempData = [...listThietBi];
            tempData[indexOfRecord] = data;
            setlistThietBi(tempData)
        }
    return (

        <Layout>
            <Sider>
                <SideBar></SideBar>
            </Sider>

            <Layout>
                <Content>
                    <section className='section-tbcontent'>

                        {/* show lên list */}
                        {shownPage === PageThietBi.list  &&
                        (
                            <>
                            
                            <input type="button" onClick={onAddthietbiClick} className="addbtn" style={{fontSize:14,fontFamily:"Nunito",fontWeight:600,textAlign:'center',lineHeight:19}}/>
                            <div className="hoverbtnicon" onClick={onAddthietbiClick}>
                                <div className='btnname'>Thêm thiết bị</div>
                            <div className="btnicon"><PlusOutlined /></div>
                            </div>
                            <div className="listThietBi">
                            <ThietbiList 
                            list={listThietBi}
                            onEdit={editThietBiData}
                            />
                            </div>
                            {/* <input type="button" value="Cập nhật" onClick={() => onEdit(thietbi)}/> */}

                            </>
                        )}
                        
                        {shownPage === PageThietBi.add && 
                        (<AddThietbi onHuyboBtn={showListPage} onSubmitBtn={addThietBi}/>)}

                        {shownPage === PageThietBi.edit && 
                        (<EditThietbi data={dataToEdit} onHuyboBtn={showListPage} onUpdateBtn={updateData}/>)}
                    </section>
                </Content>
            </Layout>

        </Layout>
    );
}

export default Thietbi;

function useSate(): [any, any] {
    throw new Error('Function not implemented.');
}

