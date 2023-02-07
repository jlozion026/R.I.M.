import { FC, useMemo, useState } from "react";

import {fetchDirections} from "../../utils";

import { MarkerClusterer, Marker, DirectionsRenderer } from "@react-google-maps/api";

import { getPinIcon, getIcon } from "@/lib/getIcon";

import { IMakersClusterer, IClickedMark } from "./models";




const MarkersClusterer: FC<IMakersClusterer> = ({
  ReportsData,
  SelectMarker,
  setDirections,
  directions
}) => {

  //const [directions, setDirections] = useState<DirectionsResult|undefined>();
  const [selectMarker, setSelectMarker] = useState<IClickedMark>({
    Destination: {
      lat: 0,
      lng: 0
    },
    Origin: {
      lat: 0,
      lng: 0
    }
  })

  const checkType = (report: any, reportType: string) => {
    if (reportType != "CityProject") {
      return ({
        start: report.incident.date_started,
        end: report.incident.date_ended
      })
    }
    return ({
      start: report.city_project.date_started,
      end: report.city_project.date_ended,
    })
  }
//
//  const fetchDirections = (
//    origin: LatLngLiteral,
//    destination: LatLngLiteral,
//  ) => {
//    if (!origin && !destination) return;
//    const service = new google.maps.DirectionsService();
//    service.route(
//      {
//        origin: origin,
//        destination: destination,
//        travelMode: google.maps.TravelMode.DRIVING,
//      },
//      (result, status) => {
//        if (status === "OK" && result) {
//          setDirections(result);
//        }
//      }
//    );
//  };

  useMemo(() => {
    fetchDirections(selectMarker.Origin, selectMarker.Destination, setDirections)
  },
    [selectMarker.Origin, selectMarker.Destination]
  )

  return (
    <MarkerClusterer maxZoom={20}>
      {(clusterer) => (
        <>
          {ReportsData?.reports.map((report, key) => (
            <div key={key}>
              <Marker
                key={report.report_id.concat("a")}
                position={report.location.origin}
                clusterer={clusterer}
                icon={getPinIcon(report.report_type)}
                onClick={async () => {
                  setSelectMarker({
                    Origin: report.location.origin,
                    Destination: report.location.destination
                  })

                  SelectMarker({
                    icon: getIcon(report.report_type),
                    report_type: report.report_type
                      .replace(/([A-Z])/g, " $1")
                      .trim(),
                    description: report.description,
                    addr: report.location.addresses.from,
                    lat: report.location.origin.lat,
                    lng: report.location.origin.lng,
                    date_started: checkType(report, report.report_type).start,
                    date_ended: checkType(report, report.report_type).end,
                  });
                }}
              />

              <Marker
                key={report.report_id.concat("b")}
                position={report.location.destination}
                clusterer={clusterer}
                icon={getPinIcon(report.report_type)}
                onClick={async () => {
                  setSelectMarker({
                    Origin: report.location.origin,
                    Destination: report.location.destination
                  })
                  SelectMarker({
                    icon: getIcon(report.report_type),
                    report_type: report.report_type
                      .replace(/([A-Z])/g, " $1")
                      .trim(),
                    description: report.description,
                    lat: report.location.destination.lat,
                    addr: report.location.addresses.to,
                    lng: report.location.destination.lng,
                    date_started: checkType(report, report.report_type).start,
                    date_ended: checkType(report, report.report_type).end,
                  });
                }}
              />

              <DirectionsRenderer
                directions={directions}
                options={{
                  suppressMarkers: true,
                }}
              />
            </div>
          ))}
        </>
      )}
    </MarkerClusterer>
  );
};
export default MarkersClusterer;
