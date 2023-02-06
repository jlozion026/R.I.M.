import { AccType, ReportType } from "@/generated/graphql";
import { IDefaultUpdateData, IUpdateForm2Data, LatLngLiteral } from "@/models";
import { IForm2Data } from "@/pages/main/components/Form/models";

export type Props = {
  children: React.ReactNode;
};

export type AuthContextType = {
  auth: boolean;
  accType: AccType | undefined;
  setAccType(acc_type: AccType): void;
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
  startDate: Date;
  endDate: Date;
  form2Data: IForm2Data;
  setStartDate: (arg0: Date) => void;
  setEndDate: (arg0: Date) => void;
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
  genAdd: string;
  setGenAdd(arg0: string): void;
  setForm2Data: (arg0: IForm2Data) => void;
  resetForm2Data: () => void;
};

export type LogsInfoContextType = {
  startDate: Date;
  endDate: Date;
  setStartDate: (arg0: Date) => void;
  setEndDate: (arg0: Date) => void;
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
