import React from "react";
import { Layout, Badge, Avatar, Space, Typography, Grid } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { HeaderBarProps } from "../types/props";
import { headerSection } from "../../common/lang";

const { Header } = Layout;
const { Text } = Typography;
const { useBreakpoint } = Grid;

export default function HeaderBar({ children, role }: HeaderBarProps) {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <Header
      style={{
        background: "#003a19",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid white",
        height: 64,
      }}
    >
      {/* Logo + Role */}
      <Space align="center" size="middle">
        <img
          src="/images/athena-logo.jpg"
          alt="Logo Athena"
          style={{ borderRadius:"50%", height: 50, objectFit: "contain", marginTop: "22px" }}
        />
        <Text style={{ color: "white", fontSize: 16 }}>
          {headerSection.role.label}: {role}
        </Text>
      </Space>

      {/* Icone e children */}
      <Space align="center" size="middle">
        {isMobile && children}
        <Badge count={6} offset={[0, 18]} size="small">
          <BellOutlined
            style={{
              fontSize: 30,
              color: "white",
              borderRadius: 6,
              padding: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          />
        </Badge>
        <Avatar
          src="/images/user.png"
          alt="user"
          style={{ border: "1px solid white", marginLeft: 12 }}
        />
      </Space>
    </Header>
  );
}
