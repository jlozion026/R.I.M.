import { ReportType } from "@/generated/graphql";

export interface BtnFilterItems {
  type: string;
  svg: string;
  reporttype: string;
}

export interface IFilter {
  setFilterType(reportType: ReportType): void;
  setFilterDate(date: string): void;
  filterDate: string | undefined;
}
