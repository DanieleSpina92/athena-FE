import React, { useEffect, useState } from "react";
import CardItem from "../card/CardItem";
import { Row, Col, Table, Typography } from "antd";
import { CardItemWithDialog } from "../card/CardItemWithDialog";
import { dashboardSection, dialog, links } from "../../common/lang";
import { fetchCriticalStock, fetchOutstandingInvoices } from "../../api/dashboard/dashboardServices";
import { KpiSectionProps } from "../types/props";
import CustomTable from "../table/CustomTable";
import { ArrowUpOutlined } from '@ant-design/icons';
import { OutstandingInvoicesQuery } from "../../api/dashboard/dashboardModels";

const { Link } = Typography;

export default function KPISection({ storeId, startDate, endDate }: KpiSectionProps) {

  const [dataCriticalStock, setDataCriticalStock] = useState<any[]>([]);
  const [dataOutstandingInvoices, setDataOutstandingInvoices] = useState<any[]>([]);
  const [selectedStoreId, setSelectedStoreId] = useState(0);

  useEffect(() => {
    if(storeId) {
      setSelectedStoreId(storeId)
    }
  }, [storeId]);

  const loadCriticalStock = async () => {
    if (!selectedStoreId) return;
    try {
      const data = await fetchCriticalStock(selectedStoreId);
      console.log("Response GetCriticalStock: ", data);
      setDataCriticalStock(data.criticalStock);
    } catch (error) {
      console.error("Error in GetCriticalStock: ", error);
    }
  };

  const loadOutstandingInvoices = async () => {
    if (!selectedStoreId) return;
    try {
      const query: OutstandingInvoicesQuery = {
        store: selectedStoreId,
        startDate: startDate,
        endDate: endDate,
      };
      const data = await fetchOutstandingInvoices(query);
      console.log("Response GetOutstandingInvoices:", data);
      setDataOutstandingInvoices(data.outstandingInvoices);
    } catch (error) {
      console.error("Error in GetOutstandingInvoices:", error);
    }
  };

  return <>
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <CardItem title="Saldo attuale" value="€ 1.245.300" description="+ €52k vs 7gg fa" 
          icon={<ArrowUpOutlined rotate={45} style={{ fontSize: 21 }} />}
          style={{
            background: 'linear-gradient(-140deg, rgba(19, 22, 20, 1), rgba(62, 139, 255, 1))',
            backgroundColor: 'transparent',
            color: 'white',
            overflow: 'hidden',
          }}
        />
      </Col>
      <Col span={8}>
        <CardItem title="Scostamento budget" value="-3,2%" description="+0,8% vs mese scorso"
          icon={<ArrowUpOutlined rotate={45} style={{ fontSize: 21 }} />}
          style={{
            background: 'linear-gradient(-140deg, rgba(19, 22, 20, 1), rgba(62, 139, 255, 1))',
            backgroundColor: 'transparent',
            color: 'white',
            overflow: 'hidden',
          }} />
      </Col>
      <Col span={8}>
        <CardItem title="Accuratezza forecast" value="94%" description="-1,3% vs mese scorso"
          icon={<ArrowUpOutlined rotate={45} style={{ fontSize: 21 }} />}
          style={{
            background: 'linear-gradient(-140deg, rgba(19, 22, 20, 1), rgba(62, 139, 255, 1))',
            backgroundColor: 'transparent',
            color: 'white',
          }}
        />
      </Col>
      <Col span={8}>
        <CardItem title="Margine di sicurezza" value="20gg 20/08/2025"
          style={{
            background: 'linear-gradient(-140deg, rgba(19, 22, 20, 1), rgba(62, 139, 255, 1))',
            backgroundColor: 'transparent',
            color: 'white',
            overflow: 'hidden',
          }} />
      </Col>

      <Col span={8}>
        <CardItemWithDialog
          title="Giacenze Critiche"
          value="8 Prodotti Totali"
          style={{
            background: 'linear-gradient(-140deg, rgba(19, 22, 20, 1), rgba(62, 139, 255, 1))',
            backgroundColor: 'transparent',
            color: 'white',
            overflow: 'hidden',
          }}
          dialogHeaderContent={
            <Row
              style={{ width: "100%", padding: "16px 24px", alignItems: "center", gap: 16 }}
              justify="space-between"
            >
              <Col>
                <Typography style={{ color: "#fff", fontWeight: 600, margin: 0, fontSize: "1rem" }}>
                  {dialog.criticalStock.header.headerLeft}
                </Typography>
              </Col>

              <Col>
                <Typography.Text style={{ color: "#fff" }}>
                  {dialog.criticalStock.header.headerCenter}{" "}
                  <Typography.Text
                    strong
                    style={{
                      fontSize: 18,
                      color: "#fff",
                    }}
                  >
                    06/08/2026
                  </Typography.Text>
                </Typography.Text>
              </Col>

              <Col>
                <div
                  style={{
                    border: "1px solid #fff",
                    borderRadius: 8,
                    padding: "2px 8px",
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  3 {dialog.criticalStock.header.headerRight}
                </div>
              </Col>
            </Row>
          }
          extra={(openDialog) => (
            <Link
              style={{ cursor: "pointer", color: 'white' }}
              onClick={() => {
                loadCriticalStock()
                openDialog()
              }}
            >
              {links.dialogCriticalStock}
            </Link>
          )}
        >
          <CustomTable
            columns={dashboardSection.kpi.data.criticalStock.columnsCriticalStock}
            data={dataCriticalStock}
            headerGradient="linear-gradient(to right, #001324, #00488a)"
            headerTextColor="#fff"
            rowGradient="linear-gradient(135deg, #003160, #0061bb)"
            rowTextColor="#fff"
            style={{ marginTop: 5, borderRadius: 2, minWidth: 900 }}
          />
        </CardItemWithDialog>
      </Col>

      <Col span={8}>
        <CardItemWithDialog
          title="Fatture in attesa"
          value="€ 2.000 bloccati"
          style={{
            background: 'linear-gradient(-140deg, rgba(19, 22, 20, 1), rgba(62, 139, 255, 1))',
            backgroundColor: 'transparent',
            color: 'white',
            overflow: 'hidden',
          }}
          dialogHeaderContent={
            <Row
              style={{ width: "100%", padding: "16px 24px", alignItems: "center", gap: 16 }}
              justify="space-between"
            >
              <Col>
                <Typography style={{ color: "#fff", fontWeight: 600, margin: 0, fontSize: "1rem" }}>
                  {dialog.outstandingInvoices.header.headerLeft}
                </Typography>
              </Col>
            </Row>
          }
          extra={(openDialog) => (
            <Link
              style={{ cursor: "pointer", color: 'white' }}
              onClick={() => {
                loadOutstandingInvoices()
                openDialog()
              }}
            >
              {links.dialogOutstandingInvoices}
            </Link>
          )}
        >
          <CustomTable
            columns={dashboardSection.kpi.data.outstandingInvoices.columnsOutstandingInvoices}
            data={dataOutstandingInvoices}
            headerGradient="linear-gradient(to right, #001324, #00488a)"
            headerTextColor="#fff"
            rowGradient="linear-gradient(135deg, #003160, #0061bb)"
            rowTextColor="#fff"
            style={{ marginTop: 5, borderRadius: 2, minWidth: 900 }}
          />
        </CardItemWithDialog>
      </Col>

    </Row>
  </>
}
