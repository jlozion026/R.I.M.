import { GetAllReportsQuery } from "@/generated/graphql";
import {MarkerData} from '../../models'
import { DirectionsResult, LatLngLiteral } from "@/models";

export interface IMakersClusterer{
  ReportsData: GetAllReportsQuery|undefined; 
  SelectMarker(pos: MarkerData): void;
  setDirections(arg0: DirectionsResult|undefined): void;
  directions:DirectionsResult|undefined;
}

export interface IReportData{
  report_id: string
  location: any
  icon: string|undefined
}

export interface IClickedMark {
  Origin: LatLngLiteral,
  Destination: LatLngLiteral
}
