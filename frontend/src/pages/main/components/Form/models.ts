import { ReportType } from "@/generated/graphql";
export type LatLngLiteral = google.maps.LatLngLiteral;

export interface ICoordinates {
  lat: string;
  lng: string;
}

export interface ILocation {
  origin: LatLngLiteral | null;
  destination: LatLngLiteral | null;
}

export interface IDefaultFormData {
  location: ILocation;
  startDate: Date|undefined;
  endDate: Date|undefined;
  description: string;
}

export interface IForm2Data extends IDefaultFormData {
  projectName: string;
  contractor: string;
  sourceFund: string;
  programAmount: string;
  contractAmount: string;
}

export interface IGetFormData {
  GetFormData(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): any;
}

interface ISubmit {
  Submit(e: React.FormEvent<HTMLFormElement>): void;
}

export interface IForm {
  PopUp(): void;
  FormType: boolean;
  Title: string;
  TypeOfReport: ReportType | undefined;
}

export interface OnClickOutSide {
  ClickCalendar(): void;
}

export interface IPage extends IGetFormData {
  HandleStartDate(date: Date): void;
  HandleEndDate(date: Date): void;
  ClickCalendarStart(): void;
  ClickCalendarEnd(): void;
  CalendarStart: boolean;
  CalendarEnd: boolean;
  StartDate: Date;
  setGenAdd(arg0:string): void;
  EndDate: Date;
}

export interface IPage1 extends IPage, OnClickOutSide {
  Next(): void;
}

export interface Ipage2 extends IGetFormData, ISubmit {}

export interface IDefaultForm extends IPage, ISubmit, OnClickOutSide {}

export interface IForm2 extends IPage1, ISubmit {
  page: boolean;
}
