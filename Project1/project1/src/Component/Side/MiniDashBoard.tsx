import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import { Form, Link } from 'react-router-dom';
import "./MiniDashBoard.css"
import { PerInfo } from '../Info/PerInfo';

const { Sider } = Layout;
const MiniDashBoardData = [
    {
        title: "Thiết bị",
        path: "./ThietBi",
        icon: <UserOutlined />
    }, {
        title: "Thiết bị",
        path: "./ThietBi",
        icon: <UserOutlined />
    }, {
        title: "Dịch vụ",
        path: "./DichVu",
        icon: <UserOutlined />
    }, {
        title: "Cấp số",
        path: "./CapSo",
        icon: <UserOutlined />
    },

]

const MiniDashBoard = () => {
    return (

        <div className='Sider2'>
            <div className='Notification'>
                <BellOutlined className='NotificationIcon' />
            </div>
            <div className='User'>
            <Link to='/PerInfo'>
                    <UserOutlined className='UserImg' />
                </Link>
                <Link to='/PerInfo'>
                    <span className='xinchao'>Xin chào</span>
                    <span className='userName'>Lê Quỳnh Ái Vân</span>
                </Link>
            </div>

            <div className='Sider2Name'>
                <h1>
                    <span>Tổng quan</span>
                </h1>
            </div>
            <div className='MiniBoard'>

                {
                    MiniDashBoardData.map((item, index) => {
                        return (

                            <li key={index}>
                                <Link to={
                                    item.path
                                }>
                                    {
                                        item.icon
                                    }
                                    <span>{
                                        item.title
                                    }</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </div>

            <div className='Lich'>
                <span>Lịch</span>
            </div>

        </div>

    )
}

export default MiniDashBoard
