import { ReportType } from "@/generated/graphql";
import { IDefaultUpdateData, IUpdateForm2Data, LatLngLiteral } from "@/models";

export type Props = {
  children: React.ReactNode;
};

export type AuthContextType = {
  auth: boolean;
  signOut: () => void;
  setAccToken: () => void;
};

export interface ICoordinates {
  origin: LatLngLiteral;
  destination: LatLngLiteral;
}

export interface IAddresses {
  addOrigin: string;
  addDestination: string;
}

export type MainContextType = {
  mapRef: React.MutableRefObject<google.maps.Map | null>;
  coordinates: ICoordinates;
  addresses: IAddresses;
  markerCount: number;
  setCoordinates: (coordinates: ICoordinates) => void;
  setAddresses: (addresses: IAddresses) => void;
  setMarkerCount: (arg0: number) => void;
  resetMarkers: () => void;
  reportType: ReportType | undefined;
  setReportType: (arg0: ReportType | undefined) => void;
};

export type LogsInfoContextType = {
  startDate: string | any;
  endDate: string | any;
  setStartDate: (arg0: string) => void;
  setEndDate: (arg0: string) => void;
  calendarStart: boolean;
  setCalendarStart: (arg0: boolean) => void;
  calendarEnd: boolean;
  setCalendarEnd: (arg0: boolean) => void;
  clickCalendar: () => void;
  page: boolean;
  setPage: (arg0: boolean) => void;
  next: () => void;
  reportType: ReportType | undefined;
  setReportType: (arg0: ReportType | undefined) => void;
  handleStartDate: (date: Date) => void;
  handleEndDate: (date: Date) => void;
  defaultUpdateData: IDefaultUpdateData;
  setDefaultUpdateData: (arg0: IDefaultUpdateData) => void;
  updateForm2Data: IUpdateForm2Data;
  setUpdateForm2Data: (arg0: IUpdateForm2Data) => void;
};
