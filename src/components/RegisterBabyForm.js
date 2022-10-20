import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { PlusOutlined } from "@ant-design/icons";
import { registerBaby } from ".././services/callApi";
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
  notification,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const FormDisabledDemo = (props) => {
  const [componentDisabled, setComponentDisabled] = useState(
    props.componentDisabled
  );
  const [isLoading, setIsloading] = useState(false);

  const [data, setData] = useState(props.data || {});
  const onFinish = async (values) => {
    console.log("Success:", values);
    setIsloading(true);
    const res = await registerBaby(values);
    setIsloading(false);
    if (res.status === 201) {
      notification.success({ message: "Registered Successfully!" });
      props.setIsModalOpen(false);
    }
  };
  console.log(">>>>>>>", props.data);
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
        // initialValues={JSON.parse(data)}
      >
        <Row>
          <Col span={12}>
            <Divider orientation="left">Baby Infos</Divider>
            <Form.Item label="Child Names" name="names">
              <Input />
            </Form.Item>
            <Form.Item label="Gender" name="gender">
              <Radio.Group>
                <Radio value="male"> Male </Radio>
                <Radio value="female"> Female </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Birth Date" name="dateOfBirth">
              <DatePicker />
            </Form.Item>
            <Form.Item label="Weight" name="weight">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Blood Group" name="bloodType">
              <Select>
                <Select.Option value="O">O</Select.Option>
                <Select.Option value="A">A</Select.Option>
                <Select.Option value="B">B</Select.Option>
                <Select.Option value="AB">AB</Select.Option>
              </Select>
            </Form.Item>
            <Divider orientation="left">Parent Infos</Divider>
            <Form.Item label="Father " name="father">
              <Input />
            </Form.Item>

            <Form.Item label="Mother " name="mother">
              <Input />
            </Form.Item>

            <Form.Item label="Phone " name="parentPhone">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Divider orientation="left">Hospital Infos</Divider>
            <Form.Item label="Hospital " name="HospitalName">
              <Input />
            </Form.Item>

            <Form.Item label="Doctor" name="doctor">
              <Select>
                <Select.Option value="O">Benjamin</Select.Option>
                <Select.Option value="A">Yamu</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Address" name="address">
              <Input />
            </Form.Item>
            <Form.Item label="Comments" name="comments">
              <TextArea rows={4} />
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
