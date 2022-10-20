import React from "react";
import { Card, Space, Row, Col } from "antd";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  BarChart,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import {
  EyeOutlined,
  MedicineBoxOutlined,
  EditOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

const gridStyle: React.CSSProperties = {
  width: "25%",
  minHeight: "15vh",
  textAlign: "center",
  boxShadow: " 2px 2px 20px #6EB9FF",
  borderRadius: 15,
  display: "flex",
  //   gap:"1rem",
  justifyContent: "center",
  alignItems: "center",
};
const iconStyle: React.CSSProperties = {
  fontSize: "5rem",
  padding: "1.5rem",
};

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Marc",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const View = () => {
  const cardArray = [
    {
      icon: <MedicineBoxOutlined style={iconStyle} />,
      title: "Doctors",
      num: 500,
    },
    {
      icon: <MedicineBoxOutlined style={iconStyle} />,
      title: "Births",
      num: 500,
    },
    // {
    //   icon: <DownloadOutlined style={iconStyle} />,
    //   title: "Downloads",
    //   num: 500,
    // },
  ];
  return (
    <>
      {" "}
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {cardArray.map((carte) => (
          <div style={gridStyle}>
            {carte.icon}
            <Space direction="vertical" style={{ width: "50%" }}>
              <h2>{carte.title}</h2>
              <h1>{carte.num}</h1>
            </Space>
          </div>
        ))}
      </div>
      <Card style={{ display: "flex" }}>
        <Row>
          <Col span={12}>
            <LineChart width={500} height={300} data={data}>
              <XAxis dataKey="Months" />
              <YAxis />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              {/* <Line type="monotone" dataKey="uv" stroke="#663030" /> */}
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
          </Col>
          <Col span={12}>
            <BarChart
              width={600}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {/* <Bar dataKey="pv" stackId="a" fill="#663030" /> */}
              <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            </BarChart>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default View;
