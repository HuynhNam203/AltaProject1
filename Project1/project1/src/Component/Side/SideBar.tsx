import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "./SideBar.css"
import LogoIcon from '../../Img/LogoIcon.png'
import DashboardIcon from '../../Img/DashboardIcon.png'
import ThietbiIcon from '../../Img/ThietbiIcon.png'
import DichvuIcon from '../../Img/DichvuIcon.png'
import CapsoIcon from '../../Img/CapsoIcon.png'
import BaocaoIcon from '../../Img/BaocaoIcon.png'
import CaidatIcon from '../../Img/CaidatIcon.png'
import MenuCaidatIcon from '../../Img/MenuCaidatIcon.png'
import LogoutIcon from '../../Img/LogoutIcon.png'



const { Sider } = Layout;

const SideData  = [
  {
    title: "DashBoard",
    path: "./DashBoard",
    icon: <img src={DashboardIcon} width="20" height="20"/>,
    cName: 'nav-text'

  },
  {
    title: "Thiết bị",
    path: "./ThietBi",
    icon: <img src={ThietbiIcon} width="20" height="20"/>,
    cName: 'nav-text'

  },
  {
    title: "Dịch vụ",
    path: "./DichVu",
    icon: <img src={DichvuIcon} width="20" height="20"/>,
    cName: 'nav-text'

  },
  {
    title: "Cấp số",
    path: "./CapSo",
    icon: <img src={CapsoIcon} width="20" height="20"/>,
    cName: 'nav-text'

  }, {
    title: "Báo cáo",
    path: "./BaoCao",
    icon: <img src={BaocaoIcon} width="20" height="20"/>,
    cName: 'nav-text'

  }, {
    title: "Cài đặt hệ thống",
    path: "./CaiDat",
    icon: <img src={CaidatIcon} width="20" height="20"/>,
    cName: 'nav-text',
    menuicon: <img src={MenuCaidatIcon} width="15" height="20"/>

  }
]

const SideBar = () => {
  return (
    <div className='Sider1'>
      <div >
        <img src={LogoIcon} className='LogoCorp' ></img>
      </div>

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
                      <span className='PropIcon'>{
                        item.icon
                      }</span>
                      <span className='PropName'>{
                        item.title
                      }</span>
                      <span className='PropMenu'>{
                        item.menuicon
                      }</span>
                    </Link>
                  </li>
                )
              })
            } </ul>
          <ul className='Logout'>
            <Link to='./Login'>
            <img src={LogoutIcon} className="LogoutIcon" /> { }
              <span>Đăng xuất</span>
            </Link>
          </ul>
        </div>
      </Menu>
    </div>

  )
}

export default SideBar
