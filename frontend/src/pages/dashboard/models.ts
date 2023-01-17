import { GetCountOfIncidentQuery } from "@/generated/graphql";

export interface GraphItems {
  cardSize: string
}

export interface IDashboardData {
  RoadClosure: GetCountOfIncidentQuery | undefined;
  RoadAccident: GetCountOfIncidentQuery | undefined;
  RoadEvent: GetCountOfIncidentQuery | undefined;
  RoadHazard: GetCountOfIncidentQuery | undefined;
  RoadConstruction: GetCountOfIncidentQuery | undefined;
  CityProject: GetCountOfIncidentQuery | undefined;
}
