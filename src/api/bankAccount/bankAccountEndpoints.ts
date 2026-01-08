const API_BASE = process.env.API_ABSOLUTE_PATH || "http://127.0.0.1:8000";

export const BANK_ACCOUNT_ENDPOINTS = {
  GET_BANK_ACCOUNTS: `${API_BASE}/api/bankaccount/`,
  GET_BANK_ACCOUNT_BY_ID: (bankAccountCode: string) => `${API_BASE}/api/bankaccount/${bankAccountCode}`,
};

