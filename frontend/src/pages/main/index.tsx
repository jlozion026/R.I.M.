import { FC, memo, useCallback, useEffect, useState, useContext } from "react";
import qcIcon from '@/Assets/svg/qcIcon.png';

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  Polygon,
  DirectionsRenderer,
} from "@react-google-maps/api";

import {
  qCpaths,
  polyOnLoad,
  polyOptions
} from "@/utils/";

import {
  panToQC,
  fetchDirections
} from "./utils";

import {
  GetAllReportsQuery,
  useGetAllReportsQuery,
  GetAllReportsByTypeQuery,
  useGetAllReportsByTypeQuery,
  GetAllReportsWithDateQuery,
  useGetAllReportsWithDateQuery,
  GetAllReportsWithDateCpQuery,
  useGetAllReportsWithDateCpQuery,
  ReportType,
  useGetAllActiveReportsQuery,
  GetAllActiveReportsQuery,
} from "@/generated/graphql";

import graphqlRequestClient from "@/lib/client/graphqlRequestClient";

import ReportsBtn from "./components/ReportsBtn";
import Navbar from "@/components/Navbar";

import { LatLngLiteral, MarkerData, IModArr } from "./models";

import { MainContext } from "@/setup/context-manager/mainContext";

import { MainContextType } from "@/setup/context-manager/model";

import { libraries, defaultCenter, options } from "@/utils";

import Zoom from "./components/Zoom";

import MarkersClusterer from "./components/MarkersClusterer";
import Search from "./components/Search";
import Loader from "@/components/Loader";
import Filter from "./components/Filter";

import { getToken } from "@/lib/auth";

import { getPinIcon } from "@/lib/getIcon";

import "./style.css";
import { format } from "date-fns";
import { DirectionsResult, MarkerOptions } from "@/models";

import { toast } from "react-toastify";


const Main: FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });


  const [trigger, setTrigger] = useState<boolean>(false);
  const [modArr, setModArr] = useState<IModArr>();

  const formPopUp = () => {
    setTrigger(!trigger);
    resetMarkers();
    resetForm2Data();
  };

  const [searchString, setSearchString] = useState<string>("");
  const [directions, setDirections] = useState<DirectionsResult | undefined>();

  const {
    coordinates,
    addresses,
    markerCount,
    setMarkerCount,
    setCoordinates,
    setAddresses,
    resetMarkers,
    reportType,
    mapRef,
    resetForm2Data,
  } = useContext(MainContext) as MainContextType;


  useEffect(() => {
    if (isLoaded) {
      fetchDirections(coordinates.origin, coordinates.destination, setDirections);
    }
  }, [coordinates.destination])

  const clickCoordinates = async (event: google.maps.MapMouseEvent) => {
    if (trigger) {
      if (event.latLng) {
        const pin: LatLngLiteral = {
          lat: event.latLng.lat() as number,
          lng: event.latLng.lng() as number,
        };

        if (await getAddresses(pin)) {
          if (markerCount === 0) {
            setCoordinates({
              ...coordinates,
              origin: pin,
            });

            setMarkerCount(1);
          } else if (markerCount === 1) {
            setCoordinates({
              ...coordinates,
              destination: pin,
            });
            setMarkerCount(0);
          }
        } else {
          toast.error("Invalid pin! Please pin only inside Quezon City boundaries");
        }
      }
    } else {
      setTrigger(false);
    }
  };

  const getAddresses = async (position: LatLngLiteral) => {
    const geocoder = new google.maps.Geocoder();

    try {
      const address = await geocoder.geocode({ location: position });
      const formattd_addr = address.results[0].formatted_address;
      if (!formattd_addr.includes("Quezon City")) return false;

      if (address.results && address.results[0]) {
        if (markerCount === 0) {
          setAddresses({
            ...addresses,
            addOrigin: address.results[0].formatted_address,
          });
        } else if (markerCount === 1) {
          setAddresses({
            ...addresses,
            addDestination: address.results[0].formatted_address,
          });
        }
      } else {
        return false;
      }
      return true;


    } catch (error) { }
  };

  const [trigFilter, setTrigFilter] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<ReportType | undefined>();
  const [filterDate, setFilterDate] = useState<string>("");

  const resetFilter = () => {
    setFilterType(undefined);
  };

  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

  // Zoom Control Button
  const [zoom, setZoom] = useState<number | undefined>(12.3);

  const zoomIn = () => {
    mapRef.current?.setZoom(mapRef.current.getZoom()! + 1);
    setZoom(mapRef.current?.getZoom());
  };
  const zoomOut = () => {
    mapRef.current?.setZoom(mapRef.current.getZoom()! - 1);
    setZoom(mapRef.current?.getZoom());
  };

  const [pingPopUp, setPingPopUp] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  graphqlRequestClient.setHeader("authorization", `bearer ${getToken()}`); //sets the authorization header
  // send queries for all reports to the gql endpoint

  const { isLoading, refetch: refetchAllReport } = useGetAllReportsQuery<
    GetAllReportsQuery,
    Error
  >(
    graphqlRequestClient,
    {},
    {
      onSuccess: async (data: GetAllReportsByTypeQuery) => {
        setModArr(data);
      },
      refetchIntervalInBackground: true,
    }
  );

  const dateNow = format(new Date(), "yyyy-MM-dd") + "T00:00:00.000Z";

  const { refetch: refetchActiveReports } = useGetAllActiveReportsQuery<
    GetAllActiveReportsQuery,
    Error
  >(
    graphqlRequestClient,
    {
      currDate: dateNow,
    },
    {
      enabled: false,
      onSuccess: async (data: GetAllReportsByTypeQuery) => {
        setModArr(data);
      },
      refetchIntervalInBackground: true,
    }
  );

  // call back function to fetch active reports
  const getActiveReports = () => { refetchActiveReports(); }

  const { refetch: refetchReportsByType } = useGetAllReportsByTypeQuery<
    GetAllReportsByTypeQuery,
    Error
  >(
    graphqlRequestClient,
    {
      reportType: filterType,
    },
    {
      enabled: false,
      onSuccess: async (data: GetAllReportsByTypeQuery) => {
        setModArr(data);
      },
      refetchIntervalInBackground: true,
    }
  );

  const { refetch: refetchReportsWithDate } = useGetAllReportsWithDateQuery<
    GetAllReportsWithDateQuery,
    Error
  >(
    graphqlRequestClient,
    {
      reportType: filterType,
      date: filterDate,
    },
    {
      enabled: false,
      onSuccess: async (data: GetAllReportsByTypeQuery) => {
        setModArr(data);
      },
      refetchIntervalInBackground: true,
    }
  );

  const { refetch: refetchReportsWithDateCP } = useGetAllReportsWithDateCpQuery<
    GetAllReportsWithDateCpQuery,
    Error
  >(
    graphqlRequestClient,
    {
      reportType: filterType,
      date: filterDate,
    },
    {
      enabled: false,
      onSuccess: async (data: GetAllReportsWithDateCpQuery) => {
        setModArr(data);
      },
      refetchIntervalInBackground: true,
    }
  );

  useEffect(() => {
    if (filterType) {
      if (filterType !== ReportType.CityProject) {
        if (filterDate) {
          refetchReportsWithDate();
        } else {
          refetchReportsByType();
        }
      } else {
        if (filterDate) {
          refetchReportsWithDateCP();
        } else {
          refetchReportsByType();
        }
      }
    }
  }, [filterType]);

  const hello = () => setPingPopUp(!pingPopUp);

  const windowSize = window.matchMedia(`(max-width: 960px)`);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // This function when the Map Loads it prevent from generate a
  //new version every time the component renders
  const onMapLoad = useCallback((map: google.maps.Map): void => {
    mapRef.current = map;
  }, []);

  // This function called when the Map needs to clean up
  const onUnMount = (map: google.maps.Map): void => {
    mapRef.current = map;
  };

  const qcMarker: MarkerOptions = {
    icon: {
      url: qcIcon,
    },
  };

  if (loadError) return <div>"Error Loading Maps"</div>;
  if (!isLoaded)
    return (
      <div className="map-container">
        <Loader />
      </div>
    );

  return (
    <>
      <div className="map-container">
        <GoogleMap
          mapContainerClassName="mapContainerStyle"
          center={defaultCenter}
          zoom={zoom}
          options={options}
          onLoad={onMapLoad}
          onUnmount={onUnMount}
          onClick={clickCoordinates}
        >
          <Marker
            position={defaultCenter}
            title={"Quezon City Hall"}
            options={qcMarker}
          />
          {coordinates.origin ? (
            <Marker
              position={coordinates.origin}
              title={"Origin"}
              icon={getPinIcon(reportType)}
            />
          ) : null}
          {coordinates.destination ? (
            <Marker
              position={coordinates.destination}
              title={"Destination"}
              icon={getPinIcon(reportType)}
            />
          ) : null}

          {zoom! <= 14 ?
            <Polygon
              onLoad={polyOnLoad}
              paths={qCpaths}
              options={polyOptions}
              visible={true}
            />
            :
            null
          }

          <DirectionsRenderer
            directions={directions}
            options={{
              suppressMarkers: true,
            }}
          />

          {isLoaded && !isLoading ? (
            <MarkersClusterer
              ReportsData={modArr}
              SelectMarker={setSelectedMarker}
              directions={directions}
              setDirections={setDirections}
            />
          ) : null}

          {selectedMarker ? (
            <InfoWindow
              position={{
                lat: selectedMarker.lat,
                lng: selectedMarker.lng,
              }}
              onCloseClick={() => {
                setSelectedMarker(null);
              }}
            >
              <div className="info-window-container">
                <div className={selectedMarker.report_type}>
                  <img className="window-icons" src={selectedMarker.icon}></img>
                </div>
                <h1 className="window-title">{selectedMarker.report_type}</h1>
                <div className="iw-description">
                  <p>{selectedMarker.description}</p>
                </div>
                <div className="address-title">
                  <span className="txt-cw"> Address:</span>
                </div>
                <div className="info-details">{selectedMarker?.addr}</div>
                <div className="ds-container">
                  <p className="txt-cw"> Date Started: </p>
                  {selectedMarker.date_started.split("T")[0]}
                </div>
                <div className="de-container">
                  <p className="txt-cw">Date Ended: </p>
                  {selectedMarker.date_ended.split("T")[0]}
                </div>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>

        <Search
          Label={""}
          Name={"search"}
          PlaceHolder={"Search Location"}
          SetGenAdd={setSearchString}
          setTrigFilter={() => setTrigFilter(!trigFilter)}
          setFilterDate={setFilterDate}
          resetFilter={resetFilter}
          fetchReport={refetchAllReport}
        />

        {trigFilter ? (
          <Filter
            filterDate={filterDate}
            setFilterDate={setFilterDate}
            setFilterType={setFilterType}
            fetchActiveReports={getActiveReports}
          />
        ) : null}

        <div className="nav-container">
          <Navbar cardSize="nav--bar" PingPopOut={hello} />
        </div>
        <Zoom
          zoomIn={zoomIn}
          zoomOut={zoomOut}
          PanTo={() => panToQC(mapRef, defaultCenter)}
        />
        <ReportsBtn
          WindowSize={windowSize}
          PingPopUp={pingPopUp}
          trigger={trigger}
          popUp={formPopUp}
        />
      </div>
    </>
  );
};

export default memo(Main);
