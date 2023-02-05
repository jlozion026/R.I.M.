import {
  FC,
  useCallback,
  useEffect,
  useState,
  useContext,
  useRef,
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

import {
  GetAllActiveReportsByTypeQueryVariables,
  useGetAllActiveReportsByTypeQuery,
  GetAllActiveReportsQuery,
  useGetAllActiveReportsQuery,
  GetAllReportsByTypeQuery,
  useGetAllReportsByTypeQuery,
  GetAllReportsWithDateQuery,
  useGetAllReportsWithDateQuery,
  GetAllReportsWithDateCpQuery,
  useGetAllReportsWithDateCpQuery,
  ReportType,
} from "@/generated/graphql";

import graphqlRequestClient from "@/lib/client/graphqlRequestClient";

import { MarkerData, IModArr } from "./models";

import { libraries, defaultCenter, options } from "@/utils";

import Zoom from "./components/Zoom";
import MarkersClusterer from "./components/MarkersClusterer";
import Filter from "./components/Filter";
import Search from "./components/Search";

import Loader from "@/components/Loader";

import { SlLogin } from "react-icons/sl";

import { getToken } from "@/lib/auth";

import { Navigate } from "react-router-dom";
import { AuthContext } from "@/setup/context-manager/authContext";
import { AuthContextType } from "@/setup/context-manager/model";


import format from "date-fns/format";

import { useNavigate } from "react-router-dom";

import "./style.css";

const Public: FC = () => {
  const { auth } = useContext(AuthContext) as AuthContextType;

  if (auth) {
    return <Navigate to="/main" replace />;
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  // Zoom Control Button
  const [zoom, setZoom] = useState<number | undefined>(13);

  const [modArr, setModArr] = useState<IModArr>();

  const zoomIn = () => {
    mapRefPublic.current?.setZoom(mapRefPublic.current.getZoom()! + 1);
    setZoom(mapRefPublic.current?.getZoom());
  };
  const zoomOut = () => {
    mapRefPublic.current?.setZoom(mapRefPublic.current.getZoom()! - 1);
    setZoom(mapRefPublic.current?.getZoom());
  };


  const navigate = useNavigate();


  const [searchString, setSearchString] = useState<string>("");

  const [trigFilter, setTrigFilter] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<ReportType | undefined>();
  const [filterDate, setFilterDate] = useState<string>("");

  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

  graphqlRequestClient.setHeader("authorization", `bearer ${getToken()}`); //sets the authorization header
  // send queries for all reports to the gql endpoint

  const dateNow = format(new Date(), "yyyy-MM-dd") + "T00:00:00.000Z";


  const { isLoading, refetch: refetchAllReport } = useGetAllActiveReportsQuery<
    GetAllActiveReportsQuery,
    Error
  >(
    graphqlRequestClient,
    {
      currDate: dateNow,
    },
    {
      onSuccess: async (data: GetAllReportsByTypeQuery) => {
        setModArr(data);
      },
      refetchIntervalInBackground: true,
    }
  );

  const { refetch: refetchReportsByType } = useGetAllActiveReportsByTypeQuery<
    GetAllReportsByTypeQuery,
    Error
  >(
    graphqlRequestClient,
    {
      reportType: filterType,
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


  useEffect(() => {
    if (filterType) {
      if (filterType !== ReportType.CityProject) {
        refetchReportsByType();
      } else {
        refetchReportsByType();
      }
    }
  }, [filterType]);

  const resetFilter = () => {
    setFilterType(undefined);
  };

  // // Instance of GoogleMap in Public Page.
  const mapRefPublic = useRef<google.maps.Map | null>(null);

  // This function when the Map Loads it prevent from generate a
  //new version every time the component renders
  const onMapLoad = useCallback((map: google.maps.Map): void => {
    mapRefPublic.current = map;
  }, []);

  // This function called when the Map needs to clean up
  const onUnMount = (map: google.maps.Map): void => {
    mapRefPublic.current = map;
  };

  if (loadError) return <div>"Error Loading Maps"</div>;
  if (!isLoaded)
    return (
      <div className="public-page">
        <Loader />
      </div>
    );

  return (
    <div className="public-page">
      <GoogleMap
        mapContainerClassName="mapContainerStylePublic"
        center={defaultCenter}
        zoom={zoom}
        options={options}
        onLoad={onMapLoad}
        onUnmount={onUnMount}
      >
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
            <Circle center={defaultCenter} radius={8000} options={farOptions} />
          </>
        ) : null}

        {isLoaded && !isLoading ? (
          <MarkersClusterer
            ReportsData={modArr}
            SelectMarker={setSelectedMarker}
          />
        ) : null}

        {isLoaded && !isLoading ? (
          <MarkersClusterer
            ReportsData={modArr}
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

      <Search
        Label={""}
        Name={"search"}
        PlaceHolder={"Search Location"}
        SetGenAdd={setSearchString}
        setTrigFilter={() => setTrigFilter(!trigFilter)}
        setFilterDate={setFilterDate}
        resetFilter={resetFilter}
        fetchReport={refetchAllReport}
        MapRef={mapRefPublic}
      />

      {trigFilter ? (
        <Filter
          filterDate={filterDate}
          setFilterDate={setFilterDate}
          setFilterType={setFilterType}
        />
      ) : null}

      <Zoom
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        PanTo={() => panToQC(mapRefPublic, defaultCenter)}
      />

      <div className="login-text" onClick={() => navigate("/signin")}> <SlLogin />
      </div>
    </div>
  );
};
export default Public;
