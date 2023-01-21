export type MapOptions = google.maps.MapOptions;
export type LatLngLiteral = google.maps.LatLngLiteral;

export interface MarkerData {
  icon: string|undefined;
  description: string;
  date_started: any;
  date_ended: any;
  report_type: string|undefined;
  addr:  string | undefined;
  lat: number;
  lng: number;
}
