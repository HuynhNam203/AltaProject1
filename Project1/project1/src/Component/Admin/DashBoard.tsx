import React from 'react'
import "./DashBoard.css"
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import SideBar  from '../Side/SideBar';


import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;



export const DashBoard: React.FC = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    
      return (
        <Layout>
          <ul className='front'>
          <div className='dashboard'>
            <SideBar ></SideBar>
          </div>
          </ul>
          
        </Layout>
      );
}
