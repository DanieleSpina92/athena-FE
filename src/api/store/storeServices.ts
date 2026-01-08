import axios from "axios";
import { STORE_ENDPOINTS } from "./storeEndpoints";

export const fetchStores = async () => {
  try {
    const response = await axios.get(STORE_ENDPOINTS.STORES);
    return response.data;
  } catch (error) {
    console.error("Errore fetching stores:", error);
    throw error;
  }
};