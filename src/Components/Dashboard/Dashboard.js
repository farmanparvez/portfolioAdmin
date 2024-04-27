import { React, useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import "./dashboard.css";
import { Link } from "react-router-dom";
import menu from "../../utils/NavMenu";
const { Header, Sider, Content } = Layout;

const Dashboard = ({ children }) => {
  const [state, setState] = useState({ collapsed: false });
  // const match = useRouteMatch();
  // console.log(match);
  return (
    <Layout style={{ paddingTop: "98px" }}>
      <Sider trigger={null} collapsible collapsed={state.collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          // items={menu}
        >
          {menu.map((val) => (
            <Menu.Item key={val.key}>
              {/* console.log() */}
              <Link to={`${val.to}`}>
                {/* <Icon type="pie-chart" /> */}
                <span>{val.label}</span>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div
            className="trigger"
            onClick={() => setState({ collapsed: !state.collapsed })}
          >
            {state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "500px",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
