import { PieChartOutlined, BarChartOutlined, ShopOutlined, DatabaseOutlined, FileTextOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";

export const menuItems = [
  { key: "1", label: "Dashboard", icon: <PieChartOutlined /> },
  { key: "2", label: "Forecast", icon: <BarChartOutlined /> },
  { key: "3", label: "Punti vendita", icon: <ShopOutlined /> },
  { key: "4", label: "Acquisizione dati", icon: <DatabaseOutlined /> },
  { key: "5", label: "Report", icon: <FileTextOutlined /> },
  { key: "6", label: "Notifiche", icon: <BellOutlined /> },
  { key: "7", label: "Utenti e permessi", icon: <UserOutlined /> },
];

export const dashBoardItems = [
  { key: "CashFlowChart", icon: <PieChartOutlined />, label: "Dashboard" },
  { key: "KPISection", icon: <BarChartOutlined />, label: "KPI" }
];


export const dashboardSection = {
  dashboard: {
    header: "Dashboard"
  },
  cashFlow: {
    header: "Cash Flow Overview"
  },
  kpi: {
    header: "KPI Overview",
    data: {
      criticalStock: {
        columnsCriticalStock: [
          { title: "Tutte le categorie", dataIndex: "departmentName", key: "departmentName" },
          { title: "Prodotto", dataIndex: "productName", key: "productName" },
          { title: "Quantità", dataIndex: "currentStock", key: "currentStock" },
          { title: "Soglia di riordino", dataIndex: "reorderPoint", key: "reorderPoint" }
        ]
      },
      outstandingInvoices: {
        columnsOutstandingInvoices: [
          { title: "Cliente", dataIndex: "clientName", key: "clientName" },
          { title: "Pagamento", dataIndex: "paymentStatus", key: "paymentStatus" },
          { title: "Ritardo", dataIndex: "daysOverdue", key: "daysOverdue" }
        ]
      },
    }
  }
}

export const dialog = {
  criticalStock: {
    header: {
      headerLeft: "Giacenze Critiche",
      headerCenter: "Ultimo aggiornamento",
      headerRight: "Prodotti Totali"
    }
  },
  outstandingInvoices: {
    header: {
      headerLeft: "Fatture in attesa",
      headerCenter: "",
      headerRight: ""
    }
  }
}

export const links = {
  dialogCriticalStock: "Scopri tutti i prodotti",
  dialogOutstandingInvoices: "Vedi Tutti",
}

export const headerSection = {
  role: {
    label: "Role"
  }
}

export const dashboardData = [
  { month: "Jan", value: 10 },
  { month: "Feb", value: 40 },
  { month: "Mar", value: 35 },
  { month: "Apr", value: 50 },
  { month: "May", value: 25 },
  { month: "Jun", value: 15 },
  { month: "Jul", value: 20 },
  { month: "Aug", value: 55 },
  { month: "Sep", value: 60 },
];