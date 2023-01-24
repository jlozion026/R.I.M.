import { FC, useCallback, useMemo, useRef, useState } from "react";

import {
  GetOneReportQuery,
  useGetOneReportQuery,
  ReportType,
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
import { getPinIcon } from "@/lib/getIcon";
import { fetchDirections } from "./utils";
import Loader from "@/components/Loader";

const LogInfo: FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const navigate = useNavigate();

  const { state } = useLocation();

  graphqlRequestClient.setHeader("authorization", `bearer ${getToken()}`);
  const { data: report, isLoading } = useGetOneReportQuery<
    GetOneReportQuery,
    Error
  >(graphqlRequestClient, {
    reportId: state.type,
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
      fetchDirections(
        report?.report?.location.origin,
        report?.report?.location.destination,
        setDirections
      );
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
  if (!isLoaded)
    return (
      <div className="logsInfo">
        <Loader />
      </div>
    );

  return (
    <div className="logsInfo">
      <div className="info-cont">
        <div className="bck-cont">
          <span className="fa-arrow-left" onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </span>
        </div>
        {!isLoaded && isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="info-title">
              <h1>Project Title</h1>
            </div>
            <div className="info-title">
              <p>Project Details</p>
            </div>

            {report?.report?.report_type != ReportType.CityProject ? (
              <>
                <div className="default-li">
                  <p className="sm-titles">DATES</p>
                  <div className="li-d">
                    Started:
                    <span>
                      {report?.report?.incident?.date_started.split("T")[0]}
                    </span>
                  </div>

                  <div className="li-d">
                    Ended:
                    <span>
                      {report?.report?.incident?.date_ended.split("T")[0]}
                    </span>
                  </div>

                  <p className="sm-titles">LOCATION</p>
                  <div className="li-d">
                    Origin:
                    <span>{report?.report?.location.addresses.from}</span>
                  </div>
                  <div className="li-d">
                    Destination:
                    <span>{report?.report?.location.addresses.to}</span>
                  </div>
                  <p className="sm-titles">DESCRIPTION</p>
                  <div className="li-d">{report?.report?.description}</div>
                </div>
              </>
            ) : (
              <>
                <div className="default-li">
                  <p className="sm-titles">DATES</p>
                  <div className="li-d">
                    Started:
                    <span>
                      {report?.report?.city_project?.date_started.split("T")[0]}
                    </span>
                  </div>
                  <div className="li-d">
                    Ended:
                    <span>
                      {report?.report?.city_project?.date_ended.split("T")[0]}
                    </span>
                  </div>

                  <p className="sm-titles">LOCATION</p>
                  <div className="li-d">
                    Origin:
                    <span>{report?.report?.location.addresses.from}</span>
                  </div>
                  <div className="li-d">
                    Destination:
                    <span>{report?.report?.location.addresses.to}</span>
                  </div>

                  <p className="sm-titles">CONTRACTOR</p>
                  <div className="li-d">
                    <span> {report.report?.city_project?.contractor_name}</span>
                  </div>

                  <p className="sm-titles">SOURCE FUND</p>
                  <div className="li-d">
                    <span>{report.report?.city_project?.source_fund}</span>
                  </div>

                  <p className="sm-titles">PROGRAM AMOUNT</p>
                  <div className="li-d">
                    <span>
                      <span className="peso-sign">&#8369;</span>
                      {report.report?.city_project?.project_ammount}
                    </span>
                  </div>

                  <p className="sm-titles">CONTRACTOR AMOUNT</p>
                  <div className="li-d">
                    <span>
                      <span className="peso-sign">&#8369;</span>
                      {report.report?.city_project?.contract_ammount}
                    </span>
                  </div>

                  <p className="sm-titles">DESCRIPTION</p>
                  <div className="li-d">
                    <span>{report?.report?.description}</span>
                  </div>
                </div>
              </>
            )}
          </>
        )}
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
