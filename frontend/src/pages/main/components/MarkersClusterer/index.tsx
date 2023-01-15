import { FC } from 'react'

import { MarkerClusterer, Marker } from "@react-google-maps/api";

import { getPinIcon, getIcon } from '@/lib/getIcon'

import { IMakersClusterer } from './models'

const MarkersClusterer: FC<IMakersClusterer> = ({ ReportsData, SelectMarker }) => {

  return (

    <MarkerClusterer>
      {(clusterer) => (
        <>
          {ReportsData?.reports.map((report, key) => (
            <div key={key}>
              <Marker
                key={report.report_id.concat('a')}
                position={report.location.origin}
                clusterer={clusterer}
                icon={getPinIcon(report.report_type)}
                onClick={() => {
                  SelectMarker({
                    icon: getIcon(report.report_type),
                    report_type: report.report_type.replace(/([A-Z])/g, " $1").trim(),
                    lat: report.location.origin.lat,
                    lng: report.location.origin.lng
                  });
                }
                }
              />

              <Marker
                key={report.report_id.concat('b')}
                position={report.location.destination}
                clusterer={clusterer}
                icon={getPinIcon(report.report_type)}
                onClick={() => {
                  SelectMarker({
                    icon: getIcon(report.report_type),
                    report_type: report.report_type.replace(/([A-Z])/g, " $1").trim(),
                    lat: report.location.destination.lat,
                    lng: report.location.destination.lng
                  });
                }
                }
              />
            </div>
          ))}
        </>
      )}
    </MarkerClusterer>
  )

}
export default MarkersClusterer;
