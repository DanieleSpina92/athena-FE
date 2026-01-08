import axios from "axios";
import { CASH_REGISTER_ENDPOINTS } from "./cashRegisterEndpoints";

export const fetchCashRegisters = async () => {
  try {
    const response = await axios.get(CASH_REGISTER_ENDPOINTS.GET_CASH_REGISTERS);
    return response.data;
  } catch (error) {
    console.error("Errore fetching cash registers:", error);
    throw error;
  }
};

export const fetchCashRegisterById = async (cashRegisterCode: string) => {
  try {
    const url = CASH_REGISTER_ENDPOINTS.GET_CASH_REGISTER_BY_ID(cashRegisterCode);
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Errore fetching cash register ${cashRegisterCode}:`, error);
    throw error;
  }
};