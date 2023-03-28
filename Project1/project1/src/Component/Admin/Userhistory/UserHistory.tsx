import React, { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import SideBar from "../../Side/SideBar";
import { Layout, theme } from "antd";
import { Link } from "react-router-dom";
import "./userHistory.style.css";

const { Header, Content, Sider } = Layout;

export const UserHistory: React.FC = () => {
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
              

              <div className="uhTitle">
                Chọn thời gian
                <table className="tableUHName">
                  <tr className="tableUHTitle">
                    <th className="uht1">Tên đăng nhập</th>
                    <th className="uht2">Thời gian tác động</th>
                    <th className="uht3">IP thực hiện</th>
                    <th className="uht4">Thao tác thực hiện</th>
                  </tr>
                  <tr className="tableUHData1">
                    <td className="uhd1">tuyetnguyen@12</td>
                    <td className="uhd2">01/12/2021 15:12:17</td>
                    <td className="uhd3">192.168.3.1</td>
                    <td className="uhd4">Cập nhật thông tin dịch vụ DV_01</td>
                  </tr>
                  <tr className="tableUHData2">
                    <td className="uhd1">tuyetnguyen@12</td>
                    <td className="uhd2">01/12/2021 15:12:17</td>
                    <td className="uhd3">192.168.3.1</td>
                    <td className="uhd4">Cập nhật thông tin dịch vụ DV_01</td>
                  </tr>
                  <tr className="tableUHData1">
                    <td className="uhd1">tuyetnguyen@12</td>
                    <td className="uhd2">01/12/2021 15:12:17</td>
                    <td className="uhd3">192.168.3.1</td>
                    <td className="uhd4">Cập nhật thông tin dịch vụ DV_01</td>
                  </tr>
                  <tr className="tableUHData2">
                    <td className="uhd1">tuyetnguyen@12</td>
                    <td className="uhd2">01/12/2021 15:12:17</td>
                    <td className="uhd3">192.168.3.1</td>
                    <td className="uhd4">Cập nhật thông tin dịch vụ DV_01</td>
                  </tr>
                  <tr className="tableUHData1">
                    <td className="uhd1">tuyetnguyen@12</td>
                    <td className="uhd2">01/12/2021 15:12:17</td>
                    <td className="uhd3">192.168.3.1</td>
                    <td className="uhd4">Cập nhật thông tin dịch vụ DV_01</td>
                  </tr>
                  <tr className="tableUHData2">
                    <td className="uhd1">tuyetnguyen@12</td>
                    <td className="uhd2">01/12/2021 15:12:17</td>
                    <td className="uhd3">192.168.3.1</td>
                    <td className="uhd4">Cập nhật thông tin dịch vụ DV_01</td>
                  </tr>
                  <tr className="tableUHData1">
                    <td className="uhd1">tuyetnguyen@12</td>
                    <td className="uhd2">01/12/2021 15:12:17</td>
                    <td className="uhd3">192.168.3.1</td>
                    <td className="uhd4">Cập nhật thông tin dịch vụ DV_01</td>
                  </tr>
                  <tr className="tableUHData2">
                    <td className="uhd1">tuyetnguyen@12</td>
                    <td className="uhd2">01/12/2021 15:12:17</td>
                    <td className="uhd3">192.168.3.1</td>
                    <td className="uhd4">Cập nhật thông tin dịch vụ DV_01</td>
                  </tr>
                  <tr className="tableUHData1">
                    <td className="uhd1">tuyetnguyen@12</td>
                    <td className="uhd2">01/12/2021 15:12:17</td>
                    <td className="uhd3">192.168.3.1</td>
                    <td className="uhd4">Cập nhật thông tin dịch vụ DV_01</td>
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
