const API_BASE = process.env.API_ABSOLUTE_PATH || "http://127.0.0.1:8000";

export const DASHBOARD_ENDPOINTS = {
    GET_DASHBOARD_OVERVIEW: `${API_BASE}/api/dashboard/overview`,
    GET_CRITICAL_STOCK: `${API_BASE}/api/dashboard/criticalStock`,
    GET_OUTSTANDING_INVOICES: `${API_BASE}/api/dashboard/outstandingInvoices`,
};