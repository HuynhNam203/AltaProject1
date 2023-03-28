import React, { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import SideBar from "../../Side/SideBar";
import { Layout, theme } from "antd";
import { Link } from "react-router-dom";
import "./baoCao.style.css";

const { Header, Content, Sider } = Layout;

export const Baocao: React.FC = () => {
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
          <section className="section-uhcontent">
            <>
              <input
                type="button"
                className="addbcbtn"
                style={{
                  fontSize: 14,
                  fontFamily: "Nunito",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: 19,
                }}
              />
                <div className="hoverbtnbcicon">
                  <div className="btnbcname">Tải về</div>
                  <div className="btnbcicon">
                  <DownloadOutlined />
                                    </div>
                </div>
              

              <div className="bcTitle">
                Chọn thời gian
                <table className="tableBCName">
                  <tr className="tableBCTitle">
                    <th className="bct1">STT</th>
                    <th className="bct2">Tên dịch vụ</th>
                    <th className="bct3">Thời gian cấp</th>
                    <th className="bct4">Tình trạng</th>
                    <th className="bct5">Nguồn cấp</th>
                  </tr>
                  <tr className="tableBCData1">
                    <td className="bcd1">2010001</td>
                    <td className="bcd2">Khám tim mạch</td>
                    <td className="bcd3">14:35 - 07/11/2021</td>
                    <td className="bcd4">Đang chờ</td>
                    <td className="bcd5">Kiosk</td>
                  </tr>
                  <tr className="tableBCData2">
                    <td className="bcd1">2010002</td>
                    <td className="bcd2">Khám răng</td>
                    <td className="bcd3">14:35 - 07/11/2021</td>
                    <td className="bcd4">Đã sử dụng</td>
                    <td className="bcd5">Kiosk</td>
                  </tr>
                  <tr className="tableBCData1">
                    <td className="bcd1">2010003</td>
                    <td className="bcd2">Khám hô hấp</td>
                    <td className="bcd3">14:35 - 07/11/2021</td>
                    <td className="bcd4">Đang chờ</td>
                    <td className="bcd5">Hệ thống</td>
                    
                  </tr>
                  <tr className="tableBCData2">
                    <td className="bcd1">2010004</td>
                    <td className="bcd2">Khám tổng quát</td>
                    <td className="bcd3">14:35 - 07/11/2021</td>
                    <td className="bcd4">Đang chờ</td>
                    <td className="bcd5">Kiosk</td>
                    
                  </tr>
                  <tr className="tableBCData1">
                    <td className="bcd1">2010005</td>
                    <td className="bcd2">Khám tổng quát</td>
                    <td className="bcd3">14:35 - 07/11/2021</td>
                    <td className="bcd4">Đang chờ</td>
                    <td className="bcd5">Hệ thống</td>
                    
                  </tr>
                  <tr className="tableBCData2">
                    <td className="bcd1">2010006</td>
                    <td className="bcd2">Khám răng hàm mặt</td>
                    <td className="bcd3">14:35 - 07/11/2021</td>
                    <td className="bcd4">Đã sử dụng</td>
                    <td className="bcd5">Kiosk</td>
                    
                  </tr>
                  <tr className="tableBCData1">
                    <td className="bcd1">2010007</td>
                    <td className="bcd2">Khám tai mũi họng</td>
                    <td className="bcd3">14:35 - 07/11/2021</td>
                    <td className="bcd4">Đã sử dụng</td>
                    <td className="bcd5">Hệ thống</td>
                    
                  </tr>
                  <tr className="tableBCData2">
                    <td className="bcd1">2010008</td>
                    <td className="bcd2">Khám phụ khoa</td>
                    <td className="bcd3">14:35 - 07/11/2021</td>
                    <td className="bcd4">Bỏ qua</td>
                    <td className="bcd5">Kiosk</td>
                    
                  </tr>
                  <tr className="tableBCData1">
                    <td className="bcd1">2010009</td>
                    <td className="bcd2">Khám tổng quát</td>
                    <td className="bcd3">14:35 - 07/11/2021</td>
                    <td className="bcd4">Đã sử dụng</td>
                    <td className="bcd5">Hệ thống</td>
                    
                  </tr>
                </table>
              </div>
            </>
          </section>
        </Content>
      </Layout>
    </Layout>
  );
};
