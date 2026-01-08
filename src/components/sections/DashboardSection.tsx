import React, { useState } from "react";
import KPISection from "./KpiSection";
import CustomButton from "../buttons/CustomButton";
import "../../styles/linear-gradient.css";
import { Card, Row, Col, Typography } from "antd";
import { BankOutlined, CalendarOutlined, SearchOutlined } from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { dashboardData, dashboardSection } from "../../common/lang";

export default function DashboardSection() {
  const [store, setStore] = useState<string | undefined>(undefined);
  const stored = '';
  const period = '';
  const handleSearch = () => console.log("Ricerca store:", store);

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24}>
        <Card
          style={{
            backgroundColor: "transparent",
            color: "#fff",
          }}
          styles={{
            header: {
              color: "#fff", borderBottom: "1px solid #444"
            },
            body: {
              padding: 12,
              height: '130px',
            }
          }}

        >
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            // backgroundColor: 'aqua',
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: '100%',
              width: '25%',
            }}>
              <Typography style={{ fontSize: 28, fontWeight: "bold", color: "#fff" }}>{dashboardSection.dashboard.header}</Typography>
            </div>
            <div style={{
              display: "flex",
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '75%',
              // border: '1px dashed yellow',
            }}>
              {/* <MenuOptions value={store} onChange={setStore} options={storeOptions} placeholder="Seleziona uno store" />
              <RangeDatePicker onChange={(dates) => console.log(dates)} placeholder={["Dal", "Al"]} /> */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                height: '90%',
                gap: 2,
                // border: '2px dotted grey',
              }}>
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  width: '100%',
                  gap: 10,
                }}>
                  <CustomButton
                    label="Account bancario"
                    size="middle"
                    icon={<BankOutlined />}
                    iconPlacement="start"
                    style={{
                      width: '180px',
                      color: 'white',
                      backgroundOrigin: 'padding-box',
                      backgroundClip: 'padding-box, border-area',
                    }} onClick={() => { }}
                    className="linear_gradient_dark_apt"
                  />
                  <CustomButton label="Registro di cassa" size="middle" style={{
                    width: '180px',
                    color: 'white',
                    backgroundOrigin: 'padding-box',
                    backgroundClip: 'padding-box, border-area',
                  }} onClick={() => { }}
                    className="linear_gradient_dark_apt"
                  />
                  <CustomButton label={`Store: ${stored !== '' ? stored : 'nessuno'}`} size="middle" style={{
                    width: '180px',
                    color: 'white',
                    backgroundOrigin: 'padding-box',
                    backgroundClip: 'padding-box, border-area',
                  }} onClick={() => { }}
                    className="linear_gradient_dark_apt"
                  />
                  <CustomButton label={`Periodo: ${period !== '' ? stored : 'nessuno'}`} size="middle"
                    icon={<CalendarOutlined />}
                    iconPlacement="start"
                    style={{
                      width: '180px',
                      color: 'white',
                      backgroundOrigin: 'padding-box',
                      backgroundClip: 'padding-box, border-area',
                    }} onClick={() => { }}
                    className="linear_gradient_dark_apt"
                  />
                </div>
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  width: '100%',
                }}>
                  <CustomButton label="Cerca" size="middle"
                    icon={<SearchOutlined />}
                    style={{
                      width: '80px',
                      color: 'white',
                      backgroundOrigin: 'padding-box',
                      backgroundClip: 'padding-box, border-area',
                    }} onClick={handleSearch}
                    className="linear_gradient_dark_apt"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Col>

      <Col xs={24}>
        <Card
          title={dashboardSection.cashFlow.header}
          style={{ backgroundColor: "transparent", color: "#fff" }}
          styles={{
            header: {
              color: "#fff", borderBottom: "1px solid #444"
            }
          }}
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dashboardData}>
              <CartesianGrid stroke="#444" strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip
                contentStyle={{ backgroundColor: "#111", border: "none", color: "#fff" }}
                labelStyle={{ color: "#fff" }}
              />
              <Line type="monotone" dataKey="value" stroke="#1890ff" strokeWidth={4} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </Col>

      <Col xs={24}>
        <Card
          title={dashboardSection.kpi.header}
          style={{ backgroundColor: "transparent", color: "#fff" }}
          styles={{
            header: {
              color: "#fff", borderBottom: "1px solid #444"
            }
          }}
        >
          <KPISection storeId={Number(1)} startDate="2025-10-01" endDate="2025-12-01" />
        </Card>
      </Col>
    </Row>
  )
}
