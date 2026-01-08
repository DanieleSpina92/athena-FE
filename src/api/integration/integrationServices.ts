// src/api/integration/service.ts
import axios from "axios";
import { INTEGRATION_ENDPOINTS } from "./integrationEndpoints";
import { FetchIntegrationDetailsQuery, FetchIntegrationPayload, FetchIntegrationQuery } from "./integrationModels";

export const fetchIntegrationBySource = async (payload: FetchIntegrationPayload) => {
  const { source, startDate, endDate } = payload;
  const url = INTEGRATION_ENDPOINTS.FETCH_BY_SOURCE(source);
  const response = await axios.post(url, { startDate, endDate, source });
  return response.data;
};

export const fetchIntegrations = async (query: FetchIntegrationQuery) => {
  try {
    const { startDate, endDate } = query;
    const response = await axios.get(INTEGRATION_ENDPOINTS.GET_INTEGRATIONS, {
      params: { startDate, endDate },
    });
    return response.data;
  } catch (error) {
    console.error("Errore fetching integrations:", error);
    throw error;
  }
};

export const fetchIntegrationDetails = async (
  businessId: number,
  query?: FetchIntegrationDetailsQuery
) => {
  try {
    const url = INTEGRATION_ENDPOINTS.GET_INTEGRATION_DETAILS_BY_BUSINESS(businessId);
    const response = await axios.get(url, { params: query });
    return response.data;
  } catch (error) {
    console.error(`Errore fetching integration details for business ${businessId}:`, error);
    throw error;
  }
};

export const fetchIntegrationLogs = async (businessId: number) => {
  try {
    const url = INTEGRATION_ENDPOINTS.GET_INTEGRATION_LOGS_BY_BUSINESS_ID(businessId);
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Errore fetching integration logs for business ${businessId}:`, error);
    throw error;
  }
};