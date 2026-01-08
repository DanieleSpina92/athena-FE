import React, { useState } from "react";
import { Layout, Button, Grid, Drawer, Menu } from "antd";
import { MenuOutlined, PieChartOutlined, BarChartOutlined } from "@ant-design/icons";
import Sidebar from "../sidebar/Sidebar";
import HeaderBar from "../header/Header";
import DashboardSection from "../sections/DashboardSection";
import { dashBoardItems } from "../../common/lang";

const { Content } = Layout;
const { useBreakpoint } = Grid;

export default function HomePageContainer() {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedPage, setSelectedPage] = useState<string>("CashFlowChart");
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);
  const toggleSidebar = () => setCollapsed(!collapsed);

  const handleMenuSelect = (key: string) => {
    setSelectedPage(key);
    if (isMobile) setDrawerVisible(false);
  };

  const renderContent = () => {
    switch (selectedPage) {
      case "CashFlowChart":
        return <DashboardSection />
      default:
        return <div>Seleziona una pagina dal menu</div>;
    }
  };



  return (
    <Layout style={{ minHeight: "100vh" }}>
      {!isMobile && (
        <Sidebar collapsed={collapsed} onToggle={toggleSidebar} breakpoint="md" />
      )}

      {isMobile && (
        <Drawer
          title={
            <div style={{ textAlign: "center" }}>
              <img
                src="/images/logo-aptismart.png"
                alt="Logo Aptismart"
                style={{ height: 60, objectFit: "contain", marginBottom: 16 }}
              />
            </div>
          }
          placement="left"
          onClose={toggleDrawer}
          open={drawerVisible}
          styles={{
            body: {
              padding: 0
            }
          }}
          size={250}
          style={{ height: "100vh" }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={[selectedPage]}
            selectedKeys={[selectedPage]}
            items={dashBoardItems}
            onClick={(info) => handleMenuSelect(info.key)}
            style={{ height: "100%", borderRight: 0 }}
          />
        </Drawer>
      )}

      <Layout>
        <HeaderBar role={"StoreManager"}>
          {isMobile && (
            <Button
              type="text"
              onClick={toggleDrawer}
              icon={<MenuOutlined style={{ fontSize: 24, color: "white" }} />}
            />
          )}
        </HeaderBar>

        <Content style={{ backgroundColor: "black" }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }} >
            {renderContent()}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
