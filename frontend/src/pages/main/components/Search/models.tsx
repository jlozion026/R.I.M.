import { LatLngLiteral } from '@/models'

export interface ICoordinates {
  lat: string;
  lng: string;
}

export interface ISearch {
  SetCoordinates(position: LatLngLiteral): void;
  SetPlace(place: string): void;
  Name: string;
  Label: string;
  PlaceHolder: string;
};
