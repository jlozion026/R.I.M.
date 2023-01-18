import { LatLngLiteral } from "@/models";
import { IAddress } from '@/models/index'

export const getAddresses = async (position: LatLngLiteral): Promise<IAddress> => {

  const res: IAddress = await new Promise(resolve => {
    const geocoder = new google.maps.Geocoder();
    setTimeout(() => {
      geocoder.geocode({ location: position }, (results, status) => {
        if (status === "OK") {
          if (results && results[0]) {
            resolve(
              {
                form_addr: results[0].formatted_address,
                plus_code: results[0].plus_code?.compound_code
              }
            );
          }
        } else {
          return {
            form_addr: "unknown",
            plus_code: "unknown"
          };
        }
      })
    }, 1000)
  })

  return res;
};
