

import axios from "axios";
import { DASHBOARD_ENDPOINTS } from "./dashboardEndpoints";
import { DashboardOverviewQuery, OutstandingInvoicesQuery } from "./dashboardModels";

export const fetchDashboardOverview = async (query: DashboardOverviewQuery) => {
  try {
    const response = await axios.get(DASHBOARD_ENDPOINTS.GET_DASHBOARD_OVERVIEW, { params: query });
    return response.data;
  } catch (error) {
    console.error("Errore fetching dashboard overview:", error);
    throw error;
  }
};

export const fetchCriticalStock = async (storeId: number) => {
  try {
    const response = await axios.get(DASHBOARD_ENDPOINTS.GET_CRITICAL_STOCK, {
      params: { store: storeId },
    });
    return response.data;
  } catch (error) {
    console.error(`Errore fetching critical stock for store ${storeId}:`, error);
    throw error;
  }
};

export const fetchOutstandingInvoices = async (query: OutstandingInvoicesQuery) => {
  try {
    const response = await axios.get(DASHBOARD_ENDPOINTS.GET_OUTSTANDING_INVOICES, { params: query });
    return response.data;
  } catch (error) {
    console.error(`Errore fetching outstanding invoices for store ${query.store}:`, error);
    throw error;
  }
};