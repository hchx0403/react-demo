
import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";

import Sensor_describe_text from "../components/Sensor_descibe_text";
import Sensor_describe_file from "../components/Sensor_describe_file";
import Sensor_describe_picture from "../components/Sensor_describe_picture";
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
    
export default function Page2() {
  return (
    <div>
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">模块1</Menu.Item>
        <Menu.Item key="2">模块2</Menu.Item>
        <Menu.Item key="3">模块3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="设计元件库">
            <Menu.Item key="1"><Link to="/Page1/">材料库</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/Page2/">传感器库</Link></Menu.Item>
            <Menu.Item key="3">成品件库</Menu.Item>
            <Menu.Item key="4">自制件库</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          
          <div className="App-page1-01">
               <p>传感器简介</p>
               <Sensor_describe_text />
          </div> 

          <div className="App-page1-02">
               <p>传感器外形照片</p>
                <Sensor_describe_picture />
          </div>
          <div className="App-page1-03">
              <p>传感器产品资料</p>
              <Sensor_describe_file />
              <p>传感器数模</p>
              <Sensor_describe_file />
          </div>
        </Content>
      </Layout>
    </Layout>
  </Layout>,
  </div>
  )
}
