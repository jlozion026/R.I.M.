import { LatLngLiteral } from "@/models";

export const getAddresses = async (position: LatLngLiteral) => {
  console.log('pos:', position);
  const geocoder = new google.maps.Geocoder();

  const hello = await geocoder.geocode({ location: position }, (results, status) => {
    if (status === "OK") {
      if (results && results[0]) {
        return results[0].formatted_address
      } else {
        return "No results found";
      }
    } else {
      return `Geocoder failed due to: ${status}`;
    }
  });
  return hello;
};
