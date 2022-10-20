import React, { useState, useEffect } from "react";
import { Button, Card, Table, Tag, Space, Modal } from "antd";
// import users from "../../assets/users.json";
import { getAllUsers } from "../../services/callApi";
import { EyeOutlined, EditOutlined, DownloadOutlined } from "@ant-design/icons";

import RegisterUserForm from "../../components/RegisterUserForm";
const View = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState();
  const [users, setUsers] = useState([]);
  const [isLoading,setIsloading]=useState(true)

  useEffect(() => {
    getAllUsers().then((usersRes) => {
      if(usersRes.status === 200){
        setIsloading(false)
        setUsers(usersRes.data.data)
      }
    });
  }, [isModalOpen]);

  const birthColumn = [
    {
      title: "Names",
      dataIndex: "names",
      key: "names",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
      //   render:(data)=><Tag key="bloodType" color="volcano">{data}</Tag>
    },
    {
      title: "Account Role",
      key: "role",
      dataIndex: "role",
      render: (data) => (
        <Tag key="bloodType" color={data == "admin" ? "volcano" : "cyan"}>
          {data}
        </Tag>
      ),
    },
    {
      title: "Status",
      key: "isActive",
      dataIndex: "isActive",
      render: (data) => (
        <Tag key="bloodType" color={data ? "cyan" : "volcano"}>
          {data ? "Active" : "Inactive"}
        </Tag>
      ),
    },
    {
      title: "Address",
      key: "address",
      dataIndex: "address",
      render: (data) => <>{data.split(",")[0] + ", " + data.split(",")[1]}</>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a style={{ color: "blue" }} disabled={false}>
            Reset Password
          </a>
          <a style={{ color: record.isActive ? "red" : "darkGreen" }}>
            Block User
          </a>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Modal
        title={modalTitle}
        open={isModalOpen}
        width={1000}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => setIsModalOpen(false)}
      >
        <RegisterUserForm setIsModalOpen={setIsModalOpen}/>
      </Modal>
      <Card>
        <Button
          onClick={() => {
            setIsModalOpen(true);
            setModalTitle("Register New User");
          }}
        >
          Register New User
        </Button>
      </Card>
      <Card>
        <Table dataSource={users} columns={birthColumn} loading={isLoading}/>
      </Card>
    </>
  );
};

export default View;
