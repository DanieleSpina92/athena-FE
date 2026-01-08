import { Layout, Row, Col } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Sidebar.css";
import { SidebarProps } from "../types/props";
import CustomButton from "../buttons/CustomButton";
import MenuList from "../menu/MenuList";
import { menuItems } from "../../common/lang";

const { Sider } = Layout;

export default function Sidebar({ collapsed = false, onToggle, breakpoint }: SidebarProps) {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      width={250}
      breakpoint={breakpoint}
      trigger={null}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, rgb(25, 25, 25), rgb(175, 173, 173))",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col>
          <img
            src="/images/new_logo-aptismart.png"
            alt="Logo"
            style={{ height: 70, objectFit: "contain" }}
          />
        </Col>
      </Row>

      <Row style={{ width: "100%", padding: "0 16px 16px 16px" }}>
        <Col span={24}>
          <CustomButton
            type="text"
            onClick={onToggle}
            icon={
              collapsed ? (
                <RightOutlined style={{ color: "white", fontSize: 24 }} />
              ) : (
                <LeftOutlined style={{ color: "white", fontSize: 24 }} />
              )
            }
            style={{ width: "100%" }}
            label={null}
          />
        </Col>
      </Row>

      <Row style={{ flex: 1 }}>
        <Col span={24} style={{ height: "100%" }}>
        <MenuList
          items={menuItems}
          defaultSelectedKeys={["1"]}
          className="custom-sidebar-menu"
          style={{ background: "transparent", height: "100%" }}
          onClick={({ key }) => console.log("Selected:", key)}
        />;
        </Col>
      </Row>
    </Sider>
  );
}
