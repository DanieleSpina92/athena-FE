export interface FetchIntegrationPayload {
  startDate: string;
  endDate: string;
  source: string;
}

export interface FetchIntegrationQuery {
  startDate: string;
  endDate: string;
}

export interface FetchIntegrationDetailsQuery {
  categoryScope?: string;
}