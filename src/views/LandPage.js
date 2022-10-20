import React from "react";
import backPic from "../assets/photos/back.jpg";
import { Card, Menu,Button, Checkbox, Form, Input } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import logo from "../assets/logo.jpeg"
import {useNavigate} from "react-router-dom"
const centerilse = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  width: "100%",
  height: "100vh",
};
const View = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
    console.log('Success:', values);
    navigate("/dashboard")
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
  return (
    <div
      style={{
        ...centerilse,
        background: `url(${backPic})`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          ...centerilse,
          background: `rgba(0, 0, 0, 0.180)`,
          width: "30%",
          backgroundSize: "cover",
          gap:"3rem",
          flexDirection:"column"
        }}
      >
        <img src={logo} style={{width:"5rem"}}/>
      <h1 style={{color:"white"}}>Online Birth Registration System </h1>
          {/* <h1 style={{color:"white"}}>Login Account</h1> */}
        <div
          style={{
            ...centerilse,
            boxShadow: " 2px 2px 20px #6EB9FF",
            background: "whiteSmoke",
            height: "50%",
            width: "80%",
            flexDirection: "column",
            gap:"2rem"
          }}
        > <h1 style={{color:"Black"}}>Login Account</h1>
       

    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form.Item>
    </Form>
        </div>
      </div>
      <div
        style={{
          ...centerilse,
            // background: "red",
          width: "70%",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding:"5rem 5rem",
          textAlign: "left"
        }}
      >
         </div>
    </div>
  );
};

export default View;
