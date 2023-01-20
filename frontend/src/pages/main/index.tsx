import {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

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

import { MarkerData } from "./models";

import { libraries, defaultCenter, options } from "@/utils";

import Zoom from "./components/Zoom";


import "./style.css";
import MarkersClusterer from "./components/MarkersClusterer";
import Loader from "@/components/Loader";

import { getToken } from '@/lib/auth'

const Main: FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

  // Zoom Control Button
  const [zoom, setZoom] = useState(13);

  const zoomIn = () => setZoom(zoom + 1);
  const zoomOut = () => setZoom(zoom - 1);

  const [pingPopUp, setPingPopUp] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  graphqlRequestClient.setHeader('authorization', `bearer ${getToken()}`) //sets the authorization header
  // send queries for all reports to the gql endpoint
  const { isLoading, data } = useGetAllReportsQuery<GetAllReportsQuery, Error>(graphqlRequestClient, {},
  {
      refetchIntervalInBackground: true
    }); 

  const hello = () => setPingPopUp(!pingPopUp);

  const windowSize = window.matchMedia(`(max-width: 960px)`);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const mapRef = useRef<google.maps.Map | null>(null);

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
  if (!isLoaded) return <div className="map-container"><Loader/></div>;

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
        >
          {zoom <= 14 ? (
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

          {isLoaded && !isLoading
            ?
              <MarkersClusterer ReportsData={data} SelectMarker={setSelectedMarker} />
            :
              null
          }

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
                <div className="iw-icons-bg">
                  <img className="window-icons" src={selectedMarker.icon}></img>
                </div>
                <h1 className="window-title">{selectedMarker.report_type}</h1>
                <hr className="iw-line" />
                <h3 className="address-title">Address</h3>
                <h5 className="latlng-container">
                  {"Lat: " + selectedMarker.lat}
                </h5>
                <h5 className="latlng-container">
                  {"Lng: " + selectedMarker.lng}
                </h5>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
        <div className="nav-container">
          <Navbar cardSize="nav--bar" PingPopOut={hello} />
        </div>
        <Zoom zoomIn={zoomIn} zoomOut={zoomOut} PanTo={() => panToQC(mapRef, defaultCenter)} />
        <ReportsBtn WindowSize={windowSize} PingPopUp={pingPopUp} />
      </div>
    </>
  );
};

export default memo(Main);
