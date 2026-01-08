const API_BASE = process.env.API_ABSOLUTE_PATH || "http://127.0.0.1:8000";

export const CASH_REGISTER_ENDPOINTS = {
  GET_CASH_REGISTERS: `${API_BASE}/api/cashregister/`,
  GET_CASH_REGISTER_BY_ID: (cashRegisterCode: string) => `${API_BASE}/api/cashregister/${cashRegisterCode}`,
};
