export type LatLngLiteral = google.maps.LatLngLiteral;

export interface IDefaultFormData {
  from: LatLngLiteral|null;
  to: LatLngLiteral|null;
  startDate: string;
  endDate: string;
  description: string;
}

export interface IForm2Data extends IDefaultFormData {
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
  Submit(): void;
}

export interface IForm {
  PopUp(): void;
  FormType: boolean;
  Title: string;
}

export interface IPage extends IGetFormData {
  SetFrom(place: string): void;
  SetTo(place: string): void;
  SetFromCoord(position: google.maps.LatLngLiteral): void;
  SetToCoord(position: google.maps.LatLngLiteral): void;
  HandleStartDate(date: Date): void;
  HandleEndDate(date: Date): void;
  ClickCalendarStart(): void;
  ClickCalendarEnd(): void;
  CalendarStart: boolean;
  CalendarEnd: boolean;
  StartDate: string;
  EndDate: string;
}

export interface IPage1 extends IPage {
  Next(): void;
}

export interface Ipage2 extends IGetFormData, ISubmit {}

export interface IDefaultForm extends IPage, ISubmit {}

export interface IForm2 extends IPage1, ISubmit {
  page: boolean;
}
