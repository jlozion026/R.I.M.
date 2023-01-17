import {
  FC,
  useCallback,
  useMemo,
  useRef,
  useState
} from "react";

import {
  GetOneReportQuery,
  useGetOneReportQuery,
  ReportType
} from "@/generated/graphql";

import graphqlRequestClient from "@/lib/client/graphqlRequestClient";

import { useLocation, useNavigate } from "react-router-dom";

import {
  GoogleMap,
  useLoadScript,
  DirectionsRenderer,
} from "@react-google-maps/api";

import { MarkerOptions, DirectionsResult } from "@/models";

import { defaultCenter, libraries, options } from "@/utils";

import { FaArrowLeft } from "react-icons/fa";

import "./style.css";

import { getToken } from "@/lib/auth";
import { getPinIcon } from "@/lib/getIcon"
import { fetchDirections } from "./utils";
import Loader from "@/components/Loader";

const LogInfo: FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const navigate = useNavigate();

  const { state } = useLocation();

  graphqlRequestClient.setHeader('authorization', `bearer ${getToken()}`)
  const { data: report, isLoading } = useGetOneReportQuery<GetOneReportQuery, Error>(graphqlRequestClient, {
    reportId: state.type
  });

  const [directions, setDirections] = useState<DirectionsResult>();


  const markerOptions: MarkerOptions = {
    icon: {
      url: getPinIcon(report?.report?.report_type) as string,
      // scaledSize: new google.maps.Size(40, 40),
    },
  };


  const drawDirection = useMemo(() => {
    if (!isLoading) {
      fetchDirections(report?.report?.location.origin, report?.report?.location.destination, setDirections);
    }
  }, [isLoading]);

  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map): void => {
    mapRef.current = map;
  }, []);

  const onUnMount = (map: google.maps.Map): void => {
    mapRef.current = map;
  };

  if (loadError) return <div>"Error Loading Maps"</div>;
  if (!isLoaded) return <div className="logsInfo"><Loader/></div>;

  return (
    <div className="logsInfo">
      <div className="info-cont">
        <p className="bck-cont" onClick={() => navigate(-1)}>
          <FaArrowLeft size={20} />
        </p>
        {!isLoaded && isLoading
          ?
          <Loader />
          :

          <>
            <div className="info-title">
              <h1>Project Title</h1>
            </div>
            <div className="info-title">
              <h3>Project Details</h3>
            </div>

            {report?.report?.report_type != ReportType.CityProject ?
              <>
                <ul className="info-dates">
                  <li className="date-title">DATES</li>
                  <li className="li-dates">{report?.report?.incident?.date_started}</li>
                  <li className="li-dates">{report?.report?.incident?.date_ended}</li>

                  <li className="date-title">LOCATION</li>
                  <li className="li-dates">
                    origin: {report?.report?.location.origin.lat}  {report?.report?.location.origin.lng}
                  </li>
                  <li className="li-dates">
                    destination: {report?.report?.location.destination.lat}  {report?.report?.location.destination.lng}
                  </li>
                </ul>

                <ul className="info-dates">
                  <li className="date-title">Description</li>
                  <li className="li-dates">{report?.report?.description}</li>
                </ul>
              </>
              :
              <>
                <ul className="info-dates">
                  <li className="date-title">DATES</li>
                  <li className="li-dates">{report?.report?.city_porject?.date_started}</li>
                  <li className="li-dates">{report?.report?.city_porject?.date_ended}</li>
                </ul>

                <ul className="city-project-info">
                  <li>LOCATION</li>
                  <li className="li-dates">
                    origin: {report?.report?.location.origin.lat}  {report?.report?.location.origin.lng}
                  </li>
                  <li className="li-dates">
                    destination: {report?.report?.location.destination.lat}  {report?.report?.location.destination.lng}
                  </li>
                  <li>CONTRACTOR</li>
                  <li className="li-dates">{report.report?.city_porject?.contractor_name}</li>
                  <li>SOURCE FUND</li>
                  <li className="li-dates">{report.report?.city_porject?.source_fund}</li>
                  <li>PROGRAM AMOUNT</li>
                  <li className="li-dates">{report.report?.city_porject?.project_ammount}</li>
                  <li>CONTRACTOR AMOUNT</li>
                  <li className="li-dates">{report.report?.city_porject?.contract_ammount}</li>
                  <li className="date-title">Description</li>
                  <li className="li-dates">{report?.report?.description}</li>
                </ul>
              </>
            }
          </>
        }


      </div>
      <div className="map-cont">
        <GoogleMap
          mapContainerClassName="mapContainerStyle"
          center={defaultCenter}
          zoom={25}
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
        <>{drawDirection}</>
      </div>
    </div>
  );
};
export default LogInfo;
