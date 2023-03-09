import React from 'react'
import "./DashBoard.css"
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import SideBar from '../Side/SideBar';
import MiniDashBoard from '../Side/MiniDashBoard';
import SttBoquaIcon from '../../Img/SttBoquaIcon.png'
import SttDacapIcon from '../../Img/SttDacapIcon.png'
import SttDangchoIcon from '../../Img/SttDangchoIcon.png'
import SttDasdIcon from '../../Img/SttDasdIcon.png'
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import Linear from './LinearChart';

const { Header, Content, Sider } = Layout;



export const DashBoard: React.FC = () => {
    const { token: {
        colorBgContainer
    } } = theme.useToken();

    return (

        <Layout>
            <Sider>
                <SideBar></SideBar>
            </Sider>

            <Layout>
                <Content>

                    <p className='titleDashboard'>Dashboard</p>
                    <p className='nameDashboard'>Biểu đồ cấp số</p>
                    <div className='BieuDo'>
                        <Link to="./CapSo" className='sttDaCap'>
                            <div className='sttDaCap'>
                                <div className='backGround1'>
                                    <img src={SttDacapIcon} className="dashboardImg" />
                                </div>
                                <div className='sttTitle'>
                                    <span  >Số thứ tự đã cấp</span>
                                </div>
                                <div className='sttNum'>
                                    4.221
                                </div>
                                <div className='increBackground'>
                                    <div className='increPercent'>
                                        <ArrowUpOutlined /> 32,41%
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="./CapSo" className='sttDaSuDung'>
                            <div className='sttDaSuDung'>
                                <div className='backGround2'>
                                    <img src={SttDasdIcon} className="dashboardImg" />
                                </div>
                                <div className='usedTitle'>
                                    <span>Số thứ tự đã sử dụng</span>
                                </div>
                                <div className='usedNum'>
                                    4.221
                                </div>
                                <div className='decreBackground'>
                                <div className='decrePercent'>
                                    <ArrowDownOutlined /> 32,41%
                                </div>
                                </div>
                            </div>

                        </Link>
                        <Link to="./CapSo" className='sttDangCho'>
                            <div className='sttDangCho'>
                                <div className='backGround3'>
                                    <img src={SttDangchoIcon} className="dashboardImg" />
                                </div>
                                <div className='waitedTitle'>
                                    <span>Số thứ tự đang chờ</span>
                                </div>
                                <div className='waitedNum'>
                                    468
                                </div>
                                <div className='increBackground'>
                                    <div className='increPercent'>
                                        <ArrowUpOutlined /> 56.41%
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="./CapSo" className='sttBoQua'>
                            <div className='sttBoQua'>
                                <div className='backGround4'>
                                    <img src={SttBoquaIcon} className="dashboardImg" />
                                </div>
                                <div className='passTitle'>
                                    Số thứ tự đã bỏ qua
                                </div>
                                <div className='passNum'>
                                    32
                                </div>
                                <div className='decreBackground'>
                                <div className='decrePercent'>
                                    <ArrowDownOutlined /> 22,41%
                                </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <Linear></Linear>
                </Content>
            </Layout>
            <MiniDashBoard></MiniDashBoard>

        </Layout>
    );
}
