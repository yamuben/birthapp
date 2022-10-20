import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const App = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ minHeight: "100vh" }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Dashboard",
              onClick: () => navigate("/dashboard"),
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Manage Users",
              onClick: () => navigate("/dashboard/users"),
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Manage Births",
              onClick: () => {
                navigate("/dashboard/births");
              },
            },
            {
              key: "4",
              icon: <UploadOutlined />,
              label: "Logout",
              onClick: () => {
                navigate("/home");
              },
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div></div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
