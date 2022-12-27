export interface ISearch  {
  SetCoordinates(position: google.maps.LatLngLiteral): void;
  SetPlace(place: string): void;
  Name:  string;
  Label: string;
  PlaceHolder: string;
};
