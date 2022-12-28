import { FC, memo, useCallback, useMemo, useRef, useState } from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  Circle,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";

import {
  closeOptions,
  defaultOptions,
  farOptions,
  middleOptions,
} from "./utils";

import ReportsBtn from "./components/ReportsBtn";
import Navbar from "@/components/Navbar";

import GenerateCoordinates from "./components/GenerateCoordinates";

import { MarkerData } from "./components/GenerateCoordinates/models";

import { MapOptions, LatLngLiteral } from "./models";

import Zoom from "./components/Zoom";

import Constructions from "@/Assets/svg/Constructions.svg";

import "./style.css";

const mapId = "753af1df20893fcc";

const libraries: (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[] = ["places"];

// Default Center of GoogleMap
const defaultCenter: LatLngLiteral = {
  lat: 14.676,
  lng: 121.0437,
};

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

  const options: MapOptions = {
    mapId: mapId,
    disableDefaultUI: true,
    zoomControl: false,
    clickableIcons: false,
  };

  // dummy coordinates to generate multiple markers
  const coordinates = useMemo(
    () => GenerateCoordinates(defaultCenter),
    [defaultCenter]
  );

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

  //recenter the Map when we clicked the Target Sign in the Map
  const panToQC = (): void => {
    if (mapRef.current) {
      mapRef.current?.panTo(defaultCenter);
    }
  };

  if (loadError) return <div>"Error Loading Maps"</div>;
  if (!isLoaded) return <div>"Loading Maps........"</div>;

  return (
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
            <Circle center={defaultCenter} radius={8000} options={farOptions} />
          </>
        ) : null}

        <MarkerClusterer>
          {(clusterer) => (
            <>
              {coordinates.map((marker, index) => (
                <Marker
                  key={index}
                  position={marker}
                  icon={marker.icons}
                  clusterer={clusterer}
                  onClick={() => {
                    setSelectedMarker(marker);
                  }}
                />
              ))}
            </>
          )}
        </MarkerClusterer>

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
                <img className="window-icons" src={Constructions}></img>
              </div>
              <h1 className="window-title">Project Title</h1>
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
        <Navbar cardSize="card--main-nav" />
      </div>
      <Zoom zoomIn={zoomIn} zoomOut={zoomOut} PanTo={panToQC} />
      <ReportsBtn />
    </div>
  );
};

export default memo(Main);
