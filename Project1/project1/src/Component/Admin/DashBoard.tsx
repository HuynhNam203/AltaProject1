import React from 'react'
import "./DashBoard.css"
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import SideBar from '../Side/SideBar';
import MiniDashBoard from '../Side/MiniDashBoard';


import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;



export const DashBoard: React.FC = () => {
    const { token: {
        colorBgContainer
    } } = theme.useToken();

    return (

        <Layout>
            <SideBar></SideBar>
            <Layout>
                <Content>

                    <p className='titleDashboard'>Dashboard</p>
                    <p className='nameDashboard'>Biểu đồ cấp số</p>
                    <div className='BieuDo'>
                        
                        <div className='sttDaCap'>
                            <Link to="./CapSo">
                                <span>Số thứ tự đã cấp</span>
                            </Link>
                        </div>
                        <div className='sttDaSuDung'>
                            <Link to="./CapSo">
                                <span>Số thứ tự đã sử dụng</span>
                            </Link>
                        </div> 
                        <div className='sttDangCho'>
                            <Link to="./CapSo">
                                <span>Số thứ tự đang chờ</span>
                            </Link>
                        </div> 
                        <div className='sttBoQua'>
                            <Link to="./CapSo">
                                <span>Số thứ tự đã bỏ qua</span>
                            </Link>
                        </div>                       
                    </div>


                </Content>
            </Layout>
            <MiniDashBoard></MiniDashBoard>
        </Layout>
    );
}
