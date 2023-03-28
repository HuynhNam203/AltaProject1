import React, { useState } from "react";
import SideBar from "../../Side/SideBar";
import { RollbackOutlined } from "@ant-design/icons";
import { Layout, theme } from "antd";
import { Link } from "react-router-dom";
import "./capSoDetail.style.css";

const { Header, Content, Sider } = Layout;

export const CapSoDetail: React.FC = () => {
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
          <input
                type="button"
                className="rollbackbtn"
                style={{
                  fontSize: 14,
                  fontFamily: "Nunito",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: 19,
                }}
              />
          <Link to="/CapSo">
                <div className="hoverbtnrollbackicon">
                  <div className="btnrollbackname">quay lại</div>
                  <div className="btnrollbackicon">
                  <RollbackOutlined />                  
                  </div>
                </div>
              </Link>
            <div className="capSoDetailTitle">Quản lý cấp số</div>
            <div className="capSoInfoBox">
              <div className="capSoDetailName">
                Thông tin cấp số
                <div className="csBox1">
                  <label style={{width:400}}>
                    Họ tên: <span style={{marginLeft:73, fontFamily:'Nunito', fontWeight:400,fontStyle:'normal',fontSize:16,lineHeight:24}}>Lê Huỳnh Ái Vân</span>
                  </label>
                </div>
                <div className="csBox2">
                  <label style={{width:400}}>
                    Tên dịch vụ: <span style={{marginLeft:39, fontFamily:'Nunito', fontWeight:400,fontStyle:'normal',fontSize:16,lineHeight:24}}>Khám tim mạch</span>
                  </label>
                </div>
                <div className="csBox3">
                  <label style={{width:400}}>
                    Số thứ tự: <span style={{marginLeft:55, fontFamily:'Nunito', fontWeight:400,fontStyle:'normal',fontSize:16,lineHeight:24}}>2010001</span>
                  </label>
                </div>
                <div className="csBox4">
                  <label style={{width:400}}>
                    Thời gian cấp: <span style={{marginLeft:24, fontFamily:'Nunito', fontWeight:400,fontStyle:'normal',fontSize:16,lineHeight:24}}>14:35 - 07/11/2021</span>
                  </label>
                </div>
                <div className="csBox5">
                  <label style={{width:400}}>
                    Hạn sử dụng: <span style={{marginLeft:29, fontFamily:'Nunito', fontWeight:400,fontStyle:'normal',fontSize:16,lineHeight:24}}>18:00 - 07/11/2021</span>
                  </label>
                </div>
                <div className="csBox6">
                  <label style={{width:400}}>
                    Nguồn cấp: <span style={{marginLeft:40, fontFamily:'Nunito', fontWeight:400,fontStyle:'normal',fontSize:16,lineHeight:24}}>Kiosk</span>
                  </label>
                </div>
                <div className="csBox7">
                  <label style={{width:400}}>
                    Trạng thái: <span style={{marginLeft:45, fontFamily:'Nunito', fontWeight:400,fontStyle:'normal',fontSize:16,lineHeight:24}}>Đang chờ</span>
                  </label>
                </div>
                <div className="csBox8">
                  <label style={{width:400}}>
                    Số điện thoại: <span style={{marginLeft:26, fontFamily:'Nunito', fontWeight:400,fontStyle:'normal',fontSize:16,lineHeight:24}}>0948523623</span>
                  </label>
                </div>
                <div className="csBox9">
                  <label style={{width:400}}>
                    Địa chỉ Email: <span style={{marginLeft:24, fontFamily:'Nunito', fontWeight:400,fontStyle:'normal',fontSize:16,lineHeight:24}}>nguyendung@gmail.com</span>
                  </label>
                </div>
              </div>
            </div>
          </section>
        </Content>
      </Layout>
    </Layout>
  );
};
