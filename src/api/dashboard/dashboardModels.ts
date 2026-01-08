export interface DashboardOverviewQuery {
  startDate: string;
  endDate: string;
  storeId: number;
  budget: number;
  cashRegisterId: number;
  bankAccountId: number;
  referenceDate?: string;
  daysLookback?: number;
  topNclients?: number | null;
}

export interface OutstandingInvoicesQuery {
  store: number;
  startDate: string;
  endDate: string;
}