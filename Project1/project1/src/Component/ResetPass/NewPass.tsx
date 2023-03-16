import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./NewPass.css";
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
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          className="NewPassForm"
          label="Mật khẩu"
          name="newPass"
          rules={[{ required: true, message: "Please input your new password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          className="ReNewPassForm"
          label="Nhập lại mật khẩu"
          name="reNewPass"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 5, span: 16 }} className="LoginBox">
          <Button type="primary" htmlType="submit" className="Confirm">
            <Link to='/Login'>
            Xác nhận
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
