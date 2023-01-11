import { FC, useCallback, useRef, useState } from "react";

import { useLocation } from "react-router-dom";

import {
  GoogleMap,
  useLoadScript,
  DirectionsRenderer,
} from "@react-google-maps/api";

import {
  LatLngLiteral,
  MapOptions,
  MarkerOptions,
  DirectionsResult,
} from "./models";

import { FaArrowLeft } from "react-icons/fa";

import pinRoadClosure from "@/Assets/svg/pinRoadClosure.svg";

import "./style.css";

const libraries: (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[] = ["places"];

// Default Center of GoogleMap
const center: LatLngLiteral = {
  lat: 14.676,
  lng: 121.0437,
};

const mapId = "753af1df20893fcc";

const options: MapOptions = {
  mapId: mapId,
  disableDefaultUI: true,
  zoomControl: false,
  clickableIcons: false,
};

const LogInfo: FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const { state } = useLocation();

  const [directions, setDirections] = useState<DirectionsResult>();

  const Origin: LatLngLiteral = { lat: 14.6825, lng: 121.0599 };
  const Destination: LatLngLiteral = { lat: 14.6821, lng: 121.0591 };

  const markerOptions: MarkerOptions = {
    icon: {
      url: pinRoadClosure,
      // scaledSize: new google.maps.Size(40, 40),
    },
  };

  const fetchDirections = (
    origin: LatLngLiteral,
    destination: LatLngLiteral
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
          setDirections(result);
        }
      }
    );
  };

  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map): void => {
    mapRef.current = map;
  }, []);

  const onUnMount = (map: google.maps.Map): void => {
    mapRef.current = map;
  };

  if (loadError) return <div>"Error Loading Maps"</div>;
  if (!isLoaded) return <div>"Loading Maps........"</div>;

  return (
    <div className="logsInfo">
      <div className="info-cont">
        <div className="bck-cont">
          <p>
            <FaArrowLeft size={20} />
          </p>
        </div>
        <div className="info-title">
          <h1>Project Title</h1>
        </div>
        <div className="info-title">
          <h3>Project Details</h3>
        </div>

        <ul className="info-dates">
          <li className="date-title">DATES</li>
          <li className="li-dates">Date started</li>
          <li className="li-dates">Date ended</li>
        </ul>

        <ul className="city-project-info">
          <li>LOCATION</li>
          <li>CONTRACTOR</li>
          <li>SOURCE FUND</li>
          <li>PROGRAM AMOUNT</li>
          <li>CONTRACTOR AMOUNT</li>
        </ul>
      </div>
      <div className="map-cont">
        <GoogleMap
          mapContainerClassName="mapContainerStyle"
          center={center}
          zoom={15}
          options={options}
          onLoad={onLoad}
          onUnmount={onUnMount}
        >
          {directions ? (
            <DirectionsRenderer
              directions={directions}
              options={{
                suppressMarkers: false,
                markerOptions: markerOptions,
              }}
            />
          ) : null}
        </GoogleMap>
        <>{isLoaded ? fetchDirections(Origin, Destination) : null}</>
      </div>
    </div>
  );
};
export default LogInfo;
