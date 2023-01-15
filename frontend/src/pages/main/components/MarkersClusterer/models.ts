import { GetAllReportsQuery } from "@/generated/graphql";
import {MarkerData} from '../../models'

export interface IMakersClusterer{
  ReportsData: GetAllReportsQuery|undefined; 
  SelectMarker(pos: MarkerData): void;
}

export interface IReportData{
  report_id: string
  location: any
  icon: string|undefined
}

