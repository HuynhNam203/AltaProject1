import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./ResetPass.css";
import ResetPassIcon from "../../Img/ResetPassIcon.png";
import { Layout } from "antd";
import LogoIcon from "../../Img/LogoIcon.png";
import { Link } from 'react-router-dom';

const { Content, Sider } = Layout;

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const ResetPass: React.FC = () => (
  <Layout>
    <div>
      <img src={LogoIcon} className="LogoLoginCorp"></img>
    </div>
    <Sider className="LoginSider" style={{ color: "#37474f" }}>
      <Form
        className="LoginForm"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 13 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <div className="ResetPassTitle">
          Đặt lại mật khẩu
        </div>
        <Form.Item
          labelCol={ {span: 16}}
          className="EnterEmailForm"
          label="Vui lòng nhập email để đặt lại mật khẩu của bạn"
          name="email_check"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{ offset: 1, span: 16 }}
          className="ResetPassBox"
        >
          <Button type="primary" htmlType="submit" className="CancleButton">
          <Link to='/Login'>           
            Huỷ
            </Link>
          </Button>
          
          <Button type="primary" htmlType="submit" className="ContinueButton">
          <Link to='/NewPass'>
            Tiếp tục
            </Link>
          </Button>
          
        </Form.Item>
      </Form>
    </Sider>
    <Content>
      <div className="LogoBox">
        <div className="LogoResetPass">
          <img src={ResetPassIcon} className="ResetPassImg" />
        </div>
      </div>
    </Content>
  </Layout>
);

export default ResetPass;
