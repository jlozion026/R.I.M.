import { ReportType } from "@/generated/graphql";

export type ArrReports = Array<{ __typename?: 'Report', report_id: string, location: any, report_type: ReportType }>

export interface INewReports extends Array<{
  __typename?: 'Report',
  report_id: string,
  location: any,
  report_type: ReportType
}> { }

export interface IPageButtons {
  orderPage: number;
  page: number;
  setPage(arg0: number): void;
  setOrderPage(arg0: number): void;
  typeOrder: string;
  length: number
}
