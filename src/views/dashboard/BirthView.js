import React, { useState, useEffect } from "react";
import { Button, Card, Table, Tag, Space, Modal } from "antd";
// import / from "../../assets/births.json";
import { EyeOutlined, EditOutlined, ShareAltOutlined } from "@ant-design/icons";
import RegisterBabyForm from "../../components/RegisterBabyForm";
import { getAllBabies } from "../../services/callApi";
const View = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState();
  const [selectedBirth,setSelectedBirth]=useState(null);
  const [births, setBirths] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [componentDisabled, setComponentDisabled] = useState(false);

  useEffect(() => {
    getAllBabies().then((res) => {
      setBirths(res?.data?.data);
      setIsloading(false);
    });
  }, [isModalOpen]);
  const birthColumn = [
    {
      title: "Birth of Date",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
    },
    {
      title: "Names",
      dataIndex: "names",
      key: "names",
    },
    {
      title: "Blood Type",
      key: "bloodType",
      dataIndex: "bloodType",
      render: (data) => (
        <Tag key="bloodType" color={data == "O" ? "volcano" : "cyan"}>
          {data}
        </Tag>
      ),
    },
    {
      title: "Hospital",
      key: "HospitalName",
      dataIndex: "HospitalName",
      //   render:(data)=><Tag key="bloodType" color="volcano">{data}</Tag>
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
          <a
            onClick={() => {
              setSelectedBirth(record);
              setComponentDisabled(true)
              setIsModalOpen(true);
              setModalTitle("Birth Certificate");
            }}
          >
            <EyeOutlined />{" "}
          </a>
          <a>
            <EditOutlined />
          </a>
          <a>
            {/* <DownloadOutlined /> */}
            <ShareAltOutlined />
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
        <RegisterBabyForm
          setIsModalOpen={setIsModalOpen}
          componentDisabled={componentDisabled}
          // data={selectedBirth}
        />
      </Modal>
      <Card>
        <Button
          onClick={() => {
            setIsModalOpen(true);
            setModalTitle("Register New Baby");
          }}
        >
          Register New Born
        </Button>
      </Card>
      <Card>
        <Table dataSource={births} columns={birthColumn} loading={isLoading} />
      </Card>
    </>
  );
};

export default View;
