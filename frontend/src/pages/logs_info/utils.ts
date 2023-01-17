import { LatLngLiteral, DirectionsResult } from "@/models";

export const fetchDirections = (
  origin: LatLngLiteral,
  destination: LatLngLiteral,
  setDirection: (result: DirectionsResult) => void
) => {
  if (!origin && !destination) return;
  const service = new google.maps.DirectionsService();
  service.route(
    {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (result, status) => {
      if (status === "OK" && result) {
        setDirection(result);
      }
    }
  );
};
