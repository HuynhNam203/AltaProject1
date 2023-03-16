import React, { useState } from 'react'
import { UserOutlined } from '@ant-design/icons';
import SideBar from '../../Side/SideBar';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { ListThietBi, childListThietBi, PageThietBi } from "./thietbi.type";
import "./thietbi.style.css"
import thietbiList from './Listthietbi';
import Addthietbi from './Addthietbi';
import Editthietbi from './Editthietbi';

const { Header, Content, Sider } = Layout;


const thietbi = () => {
    const [listthietbi, setlistthietbi] = useState(
        childListThietBi as ListThietBi[]);

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
        const addthietbi = (data: ListThietBi) => {
            setlistthietbi([...listthietbi, data]);
        }

        const editthietbiData = (data: ListThietBi) => {
            setShownPage(PageThietBi.edit);
            setDataToEdit(data);
        }

        const updateData = (data: ListThietBi) => {
            const filteredData = listthietbi.filter(x => x.id == data.id)[0];
            const indexOfRecord = listthietbi.indexOf(filteredData);
            const tempData = [...listthietbi];
            tempData[indexOfRecord] = data;
            setlistthietbi(tempData)
        }
    return (

        <Layout>
            <Sider>
                <SideBar></SideBar>
            </Sider>

            <Layout>
                <Content>
                    <p className='titlethietbi'>This is thietbi Page</p>
                    <section className='section-content'>

                        {/* show lên list */}
                        {shownPage === PageThietBi.list  &&
                        (
                            <>
                            <input type="button" value="Thêm dịch vụ" onClick={onAddthietbiClick}/>
                            <thietbiList 
                            list={listthietbi}
                            onEdit={editthietbiData}
                            />
                            {/* <input type="button" value="Cập nhật" onClick={() => onEdit(thietbi)}/> */}

                            </>
                        )}
                        
                        {shownPage === PageThietBi.add && 
                        (<Addthietbi onHuyboBtn={showListPage} onSubmitBtn={addthietbi}/>)}

                        {shownPage === PageThietBi.edit && 
                        (<Editthietbi data={dataToEdit} onHuyboBtn={showListPage} onUpdateBtn={updateData}/>)}
                    </section>
                </Content>
            </Layout>

        </Layout>
    );
}

export default thietbi;

function useSate(): [any, any] {
    throw new Error('Function not implemented.');
}

