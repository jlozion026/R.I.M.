import { ReportType } from "@/generated/graphql";
import { IForm2Data } from "@/pages/main/components/Form/models";
import { FC, createContext, useState, useRef } from "react";
import { ICoordinates, IAddresses, MainContextType, Props } from "./model";

export const MainContext = createContext<MainContextType | null>(null);

const MainContextProvider: FC<Props> = ({ children }) => {
  const [genAdd, setGenAdd] = useState<string>("Search Location");

  //Calendar
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  //Todo state of origin and destination Form2Data.
  const [form2Data, setForm2Data] = useState<IForm2Data>({
    location: {
      origin: { lat: 0, lng: 0 },
      destination: { lat: 0, lng: 0 },
    },
    projectName: "",
    startDate: startDate,
    endDate: endDate,
    description: "",
    contractor: "",
    sourceFund: "",
    programAmount: "",
    contractAmount: "",
  });

  const resetForm2Data = () => {
    setForm2Data({
      location: {
        origin: { lat: 0, lng: 0 },
        destination: { lat: 0, lng: 0 },
      },
      projectName: "",
      startDate: startDate,
      endDate: endDate,
      description: "",
      contractor: "",
      sourceFund: "",
      programAmount: "",
      contractAmount: "",
    });

    setGenAdd("Search Location");
  };

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
  };

  return (
    <MainContext.Provider
      value={{
        startDate,
        endDate,
        form2Data,
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
        genAdd,
        setStartDate,
        setEndDate,
        setForm2Data,
        resetForm2Data,
        setGenAdd,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
