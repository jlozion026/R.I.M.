import { ReportType } from "@/generated/graphql";
import { LatLngLiteral } from "@/models";

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
  reportType: ReportType| undefined
  setReportType: (arg0: ReportType|undefined) => void
};
