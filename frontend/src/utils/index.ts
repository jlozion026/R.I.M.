import { LatLngLiteral, MapOptions } from "../models";

export const mapId = "753af1df20893fcc";

export const libraries: (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[] = ["places"];

// Default Center of GoogleMap
export const defaultCenter: LatLngLiteral = {
  lat: 14.676,
  lng: 121.0437,
};

export const options: MapOptions = {
  mapId: mapId,
  disableDefaultUI: true,
  zoomControl: false,
  clickableIcons: false,
};

export interface ICoordinates {
  origin: LatLngLiteral;
  destination: LatLngLiteral;
}

export interface IAddresses {
  addOrigin: string;
  addDestination: string;
}
