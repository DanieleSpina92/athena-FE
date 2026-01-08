const API_BASE = process.env.API_ABSOLUTE_PATH || "http://127.0.0.1:8000";

export const INTEGRATION_ENDPOINTS = {
  FETCH_BY_SOURCE: (source: string) => `${API_BASE}/api/integration/${source}/fetch`,
  GET_INTEGRATIONS: `${API_BASE}/api/integration/`,
  GET_INTEGRATION_DETAILS_BY_BUSINESS: (businessId: number) => `${API_BASE}/api/integration/${businessId}/details`,
  GET_INTEGRATION_LOGS_BY_BUSINESS_ID: (businessId: number) => `${API_BASE}/api/integration/logs/${businessId}`,
};