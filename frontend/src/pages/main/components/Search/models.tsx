export interface ICoordinates {
  lat: string;
  lng: string;
}

export interface ISearch {
  Name: string;
  Label: string;
  PlaceHolder: string;
  SetGenAdd(arg0: string): void
  setTrigFilter(): void;
  resetFilter(): void;
  setFilterDate(date: string): void;
}
