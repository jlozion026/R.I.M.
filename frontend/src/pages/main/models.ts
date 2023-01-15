export type MapOptions = google.maps.MapOptions;
export type LatLngLiteral = google.maps.LatLngLiteral;

export interface MarkerData {
  icon: string|undefined;
  report_type: string|undefined
  lat: number;
  lng: number;
}
