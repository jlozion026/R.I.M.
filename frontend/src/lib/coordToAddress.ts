import { LatLngLiteral } from "@/models";

export const coordToAddress = async (coord: LatLngLiteral) => {
  const geocoder = new google.maps.Geocoder();
  try {
    const addr = await geocoder.geocode({ location: coord })
    return addr.results[0].formatted_address
  }
  catch (e) {
    console.log(e);

  }
}
