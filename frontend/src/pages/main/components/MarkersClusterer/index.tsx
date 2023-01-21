import { FC } from "react";

import { MarkerClusterer, Marker } from "@react-google-maps/api";

import { getPinIcon, getIcon } from "@/lib/getIcon";

import { IMakersClusterer } from "./models";
import { coordToAddress } from '@/lib/coordToAddress'

const MarkersClusterer: FC<IMakersClusterer> = ({
  ReportsData,
  SelectMarker,
}) => {

  const checkType = (report: any, reportType: string) => {
    if (reportType != "CityProject") {
      return ({
        start: report.incident.date_started,
        end: report.incident.date_ended
      })
    }
    return ({
      start: report.city_porject.date_started,
      end: report.city_porject.date_ended,
    })
  }


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
                  SelectMarker({
                    icon: getIcon(report.report_type),
                    report_type: report.report_type
                      .replace(/([A-Z])/g, " $1")
                      .trim(),
                    description: report.description,
                    addr: await coordToAddress({
                      lat: report.location.origin.lat,
                      lng: report.location.origin.lng
                    }),
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
                  SelectMarker({
                    icon: getIcon(report.report_type),
                    report_type: report.report_type
                      .replace(/([A-Z])/g, " $1")
                      .trim(),
                    description: report.description,
                    lat: report.location.destination.lat,
                    addr: await coordToAddress({
                      lat: report.location.origin.lat,
                      lng: report.location.origin.lng
                    }),
                    lng: report.location.destination.lng,
                    date_started: checkType(report, report.report_type).start,
                    date_ended: checkType(report, report.report_type).end,
                  });
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
