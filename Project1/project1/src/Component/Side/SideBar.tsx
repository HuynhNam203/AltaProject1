import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Form, Link } from 'react-router-dom';
import "./SideBar.css"


const { Sider } = Layout;

const SideData = [
  {
    title: "DashBoard",
    path: "./DashBoard",
    icon: <UserOutlined />,
    cName: 'nav-text'

  },
  {
    title: "Thiết bị",
    path: "./ThietBi",
    icon: <UserOutlined />,
    cName: 'nav-text'

  },
  {
    title: "Dịch vụ",
    path: "./DichVu",
    icon: <UserOutlined />,
    cName: 'nav-text'

  },
  {
    title: "Cấp số",
    path: "./CapSo",
    icon: <UserOutlined />,
    cName: 'nav-text'

  }, {
    title: "Báo cáo",
    path: "./BaoCao",
    icon: <UserOutlined />,
    cName: 'nav-text'

  }, {
    title: "Cài đặt hệ thống",
    path: "./CaiDat",
    icon: <UserOutlined />,
    cName: 'nav-text'

  }
]

const SideBar = () => {
  return (
      <Sider className='Sider1'>

        <Menu>
          <div>
            <ul className='Side'>
              {
                SideData.map((item, index) => {
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
              } </ul>
            <ul className='Logout'>
              <Link to='./Login'>
                <UserOutlined /> { }
                <span>Đăng xuất</span>
              </Link>
            </ul>
          </div>
        </Menu>
      </Sider>

  )
}

export default SideBar
