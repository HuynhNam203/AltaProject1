import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import "./Login.css";
import LoginLogo1 from "../../Img/LoginLogo1.png";
import { Layout } from "antd";
import LogoIcon from "../../Img/LogoIcon.png";
import Password from "antd/es/input/Password";
import { Link, NavLink } from 'react-router-dom';


const { Content, Sider } = Layout;



const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};



const Login: React.FC = () => (
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
          className="UsernameForm"
          label="Tài khoản"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="PasswordForm"
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Link to='/ResetPass'>
              <div className="ForgotPassButton">Quên mật khẩu?</div>
        </Link>
        
        <Form.Item wrapperCol={{ offset: 5, span: 16 }} className="LoginBox">
          <Link to="/Dashboard">
          <Button type="primary" htmlType="submit" className="LoginButton" >            
          Đăng nhập
          </Button>
          </Link>
        </Form.Item>
      </Form>
    </Sider>
    <Content>
      <div className="LogoBox">
        <div className="LogoLogin">
          <img src={LoginLogo1} className="LogoLogin1" />
          <div className="Logo_Login_Title1">Hệ thống</div>
          <div className="Logo_Login_Title2">QUẢN LÝ XẾP HÀNG</div>
        </div>
      </div>
    </Content>
  </Layout>
);

export default Login;
