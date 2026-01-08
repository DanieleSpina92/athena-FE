import axios from "axios";
import { BANK_ACCOUNT_ENDPOINTS } from "./bankAccountEndpoints";

export const fetchBankAccounts = async () => {
  try {
    const response = await axios.get(BANK_ACCOUNT_ENDPOINTS.GET_BANK_ACCOUNTS);
    return response.data;
  } catch (error) {
    console.error("Errore fetching bank accounts:", error);
    throw error;
  }
};

export const fetchBankAccountById = async (bankAccountCode: string) => {
  try {
    const url = BANK_ACCOUNT_ENDPOINTS.GET_BANK_ACCOUNT_BY_ID(bankAccountCode);
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Errore fetching bank account ${bankAccountCode}:`, error);
    throw error;
  }
};