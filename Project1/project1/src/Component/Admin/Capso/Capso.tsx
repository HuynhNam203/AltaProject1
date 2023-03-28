import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import SideBar from "../../Side/SideBar";
import { Layout, theme } from "antd";
import { Link } from "react-router-dom";
import "./capSo.style.css";

const { Header, Content, Sider } = Layout;

export const Capso: React.FC = () => {
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
          <section className="section-cscontent">
            <>
              <input
                type="button"
                className="addcsbtn"
                style={{
                  fontSize: 14,
                  fontFamily: "Nunito",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: 19,
                }}
              />
              <Link to="/CapSoMoi">
                <div className="hoverbtncsicon">
                  <div className="btnname">Cấp số mới</div>
                  <div className="btnicon">
                    <PlusOutlined />
                </div>
                </div>
              </Link>

              <div className="title">
                Quản lý cấp số
                <table className="tableCSName">
                  <tr className="tableCSTitle">
                    <th className="cst1">STT</th>
                    <th className="cst2">Tên khách hàng</th>
                    <th className="cst3">Tên dịch vụ</th>
                    <th className="cst4">Thời gian cấp</th>
                    <th className="cst5">Hạn sử dụng</th>
                    <th className="cst6">Trạng thái</th>
                    <th className="cst7">Nguồn cấp</th>
                    <th className="cst8"></th>
                  </tr>
                  <tr className="tableCSData1">
                    <td className="csd1">2010001</td>
                    <td className="csd2">Lê Huỳnh Ái Vân</td>
                    <td className="csd3">Khám tim mạch</td>
                    <td className="csd4">14:35 - 07/11/2021</td>
                    <td className="csd5">14:35 - 12/11/2021</td>
                    <td className="csd6">Đang chờ</td>
                    <td className="csd7">Kiosk</td>
                    <td className="csd8">
                      <Link to="/capSoDetail">
                        <div>
                          <input
                            className="buttoncsd8"
                            type="button"
                            value="Chi tiết"
                          />
                        </div>
                      </Link>
                    </td>
                  </tr>
                  <tr className="tableCSData2">
                    <td className="csd1">2010002</td>
                    <td className="csd2">Nguyễn Ái Vân</td>
                    <td className="csd3">Khám răng</td>
                    <td className="csd4">14:35 - 07/11/2021</td>
                    <td className="csd5">14:35 - 12/11/2021</td>
                    <td className="csd6">Đã sử dụng</td>
                    <td className="csd7">Kiosk</td>
                    <td className="csd8">
                      <div>
                        <input
                          className="buttoncsd8_2"
                          type="button"
                          value="Chi tiết"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="tableCSData1">
                    <td className="csd1">2010003</td>
                    <td className="csd2">Huỳnh Ái Vân</td>
                    <td className="csd3">Khám hô hấp</td>
                    <td className="csd4">14:35 - 07/11/2021</td>
                    <td className="csd5">14:35 - 12/11/2021</td>
                    <td className="csd6">Đang chờ</td>
                    <td className="csd7">Hệ thống</td>
                    <td className="csd8">
                      <div>
                        <input
                          className="buttoncsd8"
                          type="button"
                          value="Chi tiết"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="tableCSData2">
                    <td className="csd1">2010004</td>
                    <td className="csd2">Lê Ái Vân</td>
                    <td className="csd3">Khám tổng quát</td>
                    <td className="csd4">14:35 - 07/11/2021</td>
                    <td className="csd5">14:35 - 12/11/2021</td>
                    <td className="csd6">Đang chờ</td>
                    <td className="csd7">Kiosk</td>
                    <td className="csd8">
                      <div>
                        <input
                          className="buttoncsd8_2"
                          type="button"
                          value="Chi tiết"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="tableCSData1">
                    <td className="csd1">2010005</td>
                    <td className="csd2">Trần Thị Ái Vân</td>
                    <td className="csd3">Khám tổng quát</td>
                    <td className="csd4">14:35 - 07/11/2021</td>
                    <td className="csd5">14:35 - 12/11/2021</td>
                    <td className="csd6">Đang chờ</td>
                    <td className="csd7">Hệ thống</td>
                    <td className="csd8">
                      <div>
                        <input
                          className="buttoncsd8"
                          type="button"
                          value="Chi tiết"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="tableCSData2">
                    <td className="csd1">2010006</td>
                    <td className="csd2">Lê Huỳnh Nghĩa</td>
                    <td className="csd3">Khám răng hàm mặt</td>
                    <td className="csd4">14:35 - 07/11/2021</td>
                    <td className="csd5">14:35 - 12/11/2021</td>
                    <td className="csd6">Đã sử dụng</td>
                    <td className="csd7">Kiosk</td>
                    <td className="csd8">
                      <div>
                        <input
                          className="buttoncsd8_2"
                          type="button"
                          value="Chi tiết"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="tableCSData1">
                    <td className="csd1">2010007</td>
                    <td className="csd2">Lê Huỳnh Đức</td>
                    <td className="csd3">Khám tai mũi họng</td>
                    <td className="csd4">14:35 - 07/11/2021</td>
                    <td className="csd5">14:35 - 12/11/2021</td>
                    <td className="csd6">Đã sử dụng</td>
                    <td className="csd7">Hệ thống</td>
                    <td className="csd8">
                      <div>
                        <input
                          className="buttoncsd8"
                          type="button"
                          value="Chi tiết"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="tableCSData2">
                    <td className="csd1">2010008</td>
                    <td className="csd2">Lê Huỳnh Nghĩa</td>
                    <td className="csd3">Khám phụ khoa</td>
                    <td className="csd4">14:35 - 07/11/2021</td>
                    <td className="csd5">14:35 - 12/11/2021</td>
                    <td className="csd6">Bỏ qua</td>
                    <td className="csd7">Kiosk</td>
                    <td className="csd8">
                      <div>
                        <input
                          className="buttoncsd8_2"
                          type="button"
                          value="Chi tiết"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="tableCSData1">
                    <td className="csd1">2010009</td>
                    <td className="csd2">Phạm Văn Mạnh</td>
                    <td className="csd3">Khám tổng quát</td>
                    <td className="csd4">14:35 - 07/11/2021</td>
                    <td className="csd5">14:35 - 12/11/2021</td>
                    <td className="csd6">Đã sử dụng</td>
                    <td className="csd7">Hệ thống</td>
                    <td className="csd8">
                      <div>
                        <input
                          className="buttoncsd8"
                          type="button"
                          value="Chi tiết"
                        />
                      </div>
                    </td>
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
