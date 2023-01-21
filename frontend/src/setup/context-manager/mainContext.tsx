import { ReportType } from "@/generated/graphql";
import { FC, createContext, useState, useRef } from "react";
import { ICoordinates, IAddresses, MainContextType, Props } from "./model";

export const MainContext = createContext<MainContextType | null>(null);

const MainContextProvider: FC<Props> = ({ children }) => {
  // Instance of GoogleMap
  const mapRef = useRef<google.maps.Map | null>(null);


  const [reportType, setReportType] = useState<ReportType | undefined>();

  // Limit the Marker Using This State
  const [markerCount, setMarkerCount] = useState<number>(0);

  //Store the value of Origin and Destination in this State LatLngLiteral
  const [coordinates, setCoordinates] = useState<ICoordinates>({
    origin: { lat: 0, lng: 0 },
    destination: { lat: 0, lng: 0 },
  });

  //Store the value of Origin and Destination in this State String
  const [addresses, setAddresses] = useState<IAddresses>({
    addOrigin: "",
    addDestination: "",
  });

  const resetMarkers = () => {
    setAddresses({
      addOrigin: "",
      addDestination: "",
    });

    setCoordinates({
      origin: { lat: 0, lng: 0 },
      destination: { lat: 0, lng: 0 },
    });

    setMarkerCount(0);

    console.log("reset marker!");
  };

  return (
    <MainContext.Provider
      value={{
        coordinates,
        addresses,
        markerCount,
        setCoordinates,
        setAddresses,
        setMarkerCount,
        resetMarkers,
        reportType,
        setReportType,
        mapRef,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
