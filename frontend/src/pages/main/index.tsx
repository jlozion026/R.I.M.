import { FC, memo, useCallback, useEffect, useState, useContext } from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  Circle,
  InfoWindow,
} from "@react-google-maps/api";

import {
  closeOptions,
  defaultOptions,
  farOptions,
  middleOptions,
  panToQC,
} from "./utils";

import { GetAllReportsQuery, useGetAllReportsQuery } from "@/generated/graphql";
import graphqlRequestClient from "@/lib/client/graphqlRequestClient";

import ReportsBtn from "./components/ReportsBtn";
import Navbar from "@/components/Navbar";

import { LatLngLiteral, MarkerData } from "./models";

import pinRoadClosure from "@/Assets/svg/pinRoadClosure.svg";

import { MainContext } from "@/setup/context-manager/mainContext";

import { MainContextType } from "@/setup/context-manager/model";

import { libraries, defaultCenter, options } from "@/utils";

import Zoom from "./components/Zoom";

import MarkersClusterer from "./components/MarkersClusterer";
import Loader from "@/components/Loader";

import { getToken } from "@/lib/auth";

import { getPinIcon } from "@/lib/getIcon";

import "./style.css";

const Main: FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [trigger, setTrigger] = useState<boolean>(false);

  const formPopUp = () => {
    setTrigger(!trigger);
    resetMarkers();
  };

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
  } = useContext(MainContext) as MainContextType;

  const clickCoordinates = (event: google.maps.MapMouseEvent) => {
    if (trigger) {
      if (event.latLng) {
        const pin: LatLngLiteral = {
          lat: event.latLng.lat() as number,
          lng: event.latLng.lng() as number,
        };
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
        getAddresses(pin);
      }
    } else {
      setTrigger(false);
    }
  };

  const getAddresses = async (position: LatLngLiteral) => {
    const geocoder = new google.maps.Geocoder();

    try {
      const address = await geocoder.geocode({ location: position });
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
        return "No results found";
      }
    } catch (error) {
      console.log("Error!");
    }
  };

  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

  // Zoom Control Button
  const [zoom, setZoom] = useState<number | undefined>(13);

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
  const { isLoading, data } = useGetAllReportsQuery<GetAllReportsQuery, Error>(
    graphqlRequestClient,
    {},
    {
      refetchIntervalInBackground: true,
    }
  );

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

          {zoom! <= 14 ? (
            <>
              <Marker position={defaultCenter} />
              <Circle
                center={defaultCenter}
                radius={2500}
                options={defaultOptions}
              />
              <Circle
                center={defaultCenter}
                radius={4500}
                options={closeOptions}
              />
              <Circle
                center={defaultCenter}
                radius={6500}
                options={middleOptions}
              />
              <Circle
                center={defaultCenter}
                radius={8000}
                options={farOptions}
              />
            </>
          ) : null}

          {isLoaded && !isLoading ? (
            <MarkersClusterer
              ReportsData={data}
              SelectMarker={setSelectedMarker}
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
