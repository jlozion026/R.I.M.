export type MapOptions = google.maps.MapOptions;
export type LatLngLiteral = google.maps.LatLngLiteral;
export type MarkerOptions = google.maps.MarkerOptions;
export type DirectionsResult = google.maps.DirectionsResult;

// interface for the returned object of coord to addr function
export interface IAddress {
  form_addr: string;
  plus_code: string|undefined;
}
