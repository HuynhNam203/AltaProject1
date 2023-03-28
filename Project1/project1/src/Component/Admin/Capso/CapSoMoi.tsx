import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import SideBar from "../../Side/SideBar";
import { Layout, theme } from "antd";
import { Link } from "react-router-dom";
import "./capSoMoi.style.css";

const { Header, Content, Sider } = Layout;



export const CapSoMoi: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  

  


  return (
    <Layout>
      <Sider>
        <SideBar></SideBar>
      </Sider>

      <Layout>
        <Content>
          
          <section className="section-tbcontent">
            <div className="capSoMoiTitle">Quản lý cấp số</div>

            <div className="capSoMoiForm">
              <p className="capSoMoiName">CẤP SỐ MỚI</p>

              <div className="dichVuListTitle">Dịch vụ khách hàng lựa chọn</div>
              <select className="dichVuList">
                <option value="">Chọn dịch vụ</option>
                <option value="phuKhoa">Khám phụ khoa</option>
                <option value="timMach">Khám tim mạch</option>
                <option value="rangHamMat">Khám răng hàm mặt</option>
                <option value="taiMuiHong">Khám tai mũi họng</option>
              </select>

              <div className="dichVuListBox">
                <Link to="/Capso"><input className="btnCSMHuy" type="button" value="Huỷ bỏ" /></Link>
                <input
                  className="btnCSMIn"
                  id="myBtn"
                  type="submit"
                  value="In số"
                />
              </div>
            </div>
            
          </section>
        </Content>
      </Layout>
    </Layout>
  );
};
