
export const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 1,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  strokeColor: "0C85FF",
  fillColor: "#A3F9A1",
};
export const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
export const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
export const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};

//recenter the Map when we clicked the Target Sign in the Map
export const panToQC = (
  mapRef: React.MutableRefObject<google.maps.Map | null>,
  defaultCenter: google.maps.LatLng | google.maps.LatLngLiteral
): void => {
  if (mapRef.current) {
    mapRef.current?.panTo(defaultCenter);
  }
};
