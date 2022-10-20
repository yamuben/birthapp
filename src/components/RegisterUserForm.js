import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { PlusOutlined } from "@ant-design/icons";
import { singupUser } from "../services/callApi";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Row,
  Col,
  Cascader,
  Divider,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const FormDisabledDemo = (props) => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [adminEnabled, setAdminEnabled] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const onFinish = async (values) => {
    setIsloading(true);
    console.log("Success:", values);
    const res = await singupUser(values);
    setIsloading(false);
    // console.log("Success Response:", res)
    props.setIsModalOpen(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onValuesChange={() => {}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        disabled={componentDisabled}
      >
        <Row>
          <Col span={12}>
            <Divider orientation="left">Personal Infos</Divider>
            <Form.Item label="User Names" name="names">
              <Input />
            </Form.Item>

            <Form.Item label="Phone " name="phone">
              <Input />
            </Form.Item>
            <Form.Item label="Address" name="address">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Divider orientation="left">User Account</Divider>

            <Form.Item label="Role" name="role">
              <Select>
                <Select.Option value="admin" disabled={adminEnabled}>
                  Admin
                </Select.Option>
                <Select.Option value="doctor">
                  Community Health Worker
                </Select.Option>
                <Select.Option value="nurse">Nurse</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
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
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Divider orientation="center">Controls</Divider>
            <Form.Item
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "20rem" }}
                loading={isLoading}
              >
                Save
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default FormDisabledDemo;
