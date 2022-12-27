import { FC, memo, useCallback, useRef, useState } from "react";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import ReportsBtn from "./components/ReportsBtn";
import Navbar from "@/components/Navbar";

import "./style.css";
import Zoom from "./components/Zoom";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

// Default Center
const center: google.maps.LatLngLiteral = {
  lat: 14.6444,
  lng: 121.0335,
};

const mapId = "753af1df20893fcc";

const options: google.maps.MapOptions = {
  mapId: mapId,
  disableDefaultUI: true,
  zoomControl: false,
  clickableIcons: false,
};

const libraries: (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[] = ["places"];

const Main: FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapRef = useRef();

  const onMapLoad = useCallback((map: any) => {
    mapRef.current = map;
  }, []);

  // Zoom Control Button
  const [zoom, setZoom] = useState(15);

  const zoomIn = () => setZoom(zoom + 1);
  const zoomOut = () => setZoom(zoom - 1);

  const onUnmount = useCallback((map: any) => (mapRef.current = map), []);

  if (loadError) return <>"Error Loading Maps"</>;
  if (!isLoaded) return <>"Loading Maps........"</>;

  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        options={options}
        onLoad={onMapLoad}
        onUnmount={onUnmount}
      ></GoogleMap>
      <div className="nav-container">
        <Navbar cardSize="card--main-nav" />
      </div>
      <Zoom zoomIn={zoomIn} zoomOut={zoomOut} />
      <ReportsBtn />
    </div>
  );
};

export default memo(Main);
