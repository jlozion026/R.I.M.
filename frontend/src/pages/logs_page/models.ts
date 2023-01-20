import { ReportType } from "@/generated/graphql";

export type ArrReports = Array<{ __typename?: 'Report', report_id: string, location: any, report_type: ReportType }>

export interface INewReports extends Array<{
  form_addr: string,
  plus_code: string | undefined,
  __typename?: 'Report',
  report_id: string,
  location: any,
  report_type: ReportType
}> { }


export type ISearchResults = Array<{ __typename?: 'Report', report_id: string, report_type: ReportType, description: string, location: any }>

