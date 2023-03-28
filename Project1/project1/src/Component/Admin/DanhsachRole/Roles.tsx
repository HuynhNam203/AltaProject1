import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import SideBar from '../../Side/SideBar';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { ListRoles, PageRoles } from "./Roles.type";
import "./Roles.style.css"
import RolesList from './ListRoles';
import AddRoles from './AddRoles';
import EditRoles from './EditRoles';

const { Header, Content, Sider } = Layout;


const Roles = () => {
    const [listRoles, setlistRoles] = useState(
        [] as ListRoles[]);

        // Show dưới dạng 1 list
        const [shownPage, setShownPage] = useState(PageRoles.list)
        const [dataToEdit, setDataToEdit] = useState({} as ListRoles)

        const onAddRolesClick = () => {
            setShownPage(PageRoles.add)
        }

        const showListPage = () => {
            setShownPage(PageRoles.list)
        }

        const editListPage = () => {
            setShownPage(PageRoles.edit);

        }

        // Từ đây ta đẩy bản ghi và listRoles
        const addRoles = (data: ListRoles) => {
            setlistRoles([...listRoles, data]);
        }

        const editRolesData = (data: ListRoles) => {
            setShownPage(PageRoles.edit);
            setDataToEdit(data);
        }

        const updateData = (data: ListRoles) => {
            const filteredData = listRoles.filter(x => x.id_roles == data.id_roles)[0];
            const indexOfRecord = listRoles.indexOf(filteredData);
            const tempData = [...listRoles];
            tempData[indexOfRecord] = data;
            setlistRoles(tempData)
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
                        {shownPage === PageRoles.list  &&
                        (
                            <>
                            <input type="button" onClick={onAddRolesClick} className="addrolesbtn" style={{fontSize:14,fontFamily:"Nunito",fontWeight:600,textAlign:'center',lineHeight:19}}/>
                            <div className="hoverrolesbtnicon" onClick={onAddRolesClick}>
                                <div className='btnrolesname'>Thêm vai trò</div>
                            <div className="btnrolesicon"><PlusOutlined /></div>
                            </div>
                            <RolesList 
                            list={listRoles}
                            onEdit={editRolesData}
                            />
                            {/* <input type="button" value="Cập nhật" onClick={() => onEdit(dichvu)}/> */}

                            </>
                        )}
                        
                        {shownPage === PageRoles.add && 
                        (<AddRoles onHuyboBtn={showListPage} onSubmitBtn={addRoles}/>)}

                        {shownPage === PageRoles.edit && 
                        (<EditRoles data={dataToEdit} onHuyboBtn={showListPage} onUpdateBtn={updateData}/>)}
                    </section>
                </Content>
            </Layout>

        </Layout>
    );
}

export default Roles;

function useSate(): [any, any] {
    throw new Error('Function not implemented.');
}

