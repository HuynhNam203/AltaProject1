import React from 'react'
import "./PerInfo.css"
import { UserOutlined } from '@ant-design/icons';
import SideBar from '../Side/SideBar';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import PerImgUpload from './PerImgUpload';

const { Header, Content, Sider } = Layout;


export const PerInfo = () => {
    return (

        <Layout>
            <Sider>
                <SideBar></SideBar>
            </Sider>

            <Layout>
                <Content>
                    <p className='titleInfo'>Thông tin cá nhân</p>

                    <div className='InfoBox'>
                        <div >
                            <div className='Ten'>Tên người dùng</div>
                            <div className='TenBox'>
                                <div className='InfoFont'>Lê Quỳnh Ái Vân</div>
                            </div>
                        </div>
                        <div>
                            <div className='Sdt'>Số điện thoại</div>
                            <div className='SdtBox'>
                                <div className='InfoFont'>0767375921</div>
                            </div>
                        </div>
                        <div>
                            <div className='Email'>Email:</div>
                            <div className='EmailBox'>
                                <div className='InfoFont'>adminSSO1@domain.com</div>
                            </div>
                        </div>
                        <div>
                            <div className='Username'>Tên đăng nhập</div>
                            <div className='UsernameBox'>
                                <div className='InfoFont'>lequynhaivan01</div>
                            </div>
                        </div>
                        <div>
                            <div className='Password'>Mật khẩu</div>
                            <div className='PasswordBox'>
                                <div className='InfoFont'>311940211</div>
                            </div>
                        </div>
                        <div>
                            <div className='Roles'>Vai trò:</div>
                            <div className='RolesBox'>
                                <div className='InfoFont'>Kế toán</div>
                            </div>
                        </div>
                        <div className='PerImg'>
                            <div className='PerImgChild'>
                            <UserOutlined/>

                            </div>
                            <div className='ImgUpload'>
                                <PerImgUpload />
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>

        </Layout>
    );
}

