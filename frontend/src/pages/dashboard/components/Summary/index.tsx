import { FC } from "react";
import Card from "@/components/Card";
import { GraphItems } from "../../models";

import {
  GetCurrentAccidentQuery,
  useGetCurrentAccidentQuery,
  GetActiveCityProjectQuery,
  useGetActiveCityProjectQuery,
  GetCurrentClosedroadsQuery,
  useGetCurrentClosedroadsQuery
} from "@/generated/graphql";

import graphqlRequestClient from "@/lib/client/graphqlRequestClient";

import './style.css';
import { format } from "date-fns";

const Summary: FC<GraphItems> = ({ cardSize }) => {

  const dateNow = format(new Date(), "yyyy-MM-dd") + "T00:00:00.000Z";

  const { data: currentAccident } = useGetCurrentAccidentQuery<
    GetCurrentAccidentQuery,
    Error
  >(graphqlRequestClient, {
    currDate: dateNow,
  },
    {
      refetchIntervalInBackground: true,
    }
  );

  const { data: activeCityProj } = useGetActiveCityProjectQuery<
    GetActiveCityProjectQuery,
    Error
  >(graphqlRequestClient, {
    currDate: dateNow,
  },
    {
      refetchIntervalInBackground: true,
    }
  );

  const { data: currentClosedRoads } = useGetCurrentClosedroadsQuery<
    GetCurrentClosedroadsQuery,
    Error
  >(graphqlRequestClient, {
    currDate: dateNow,
  },
    {
      refetchIntervalInBackground: true,
    }
  );

  return (
    <Card cardSize={cardSize}>
      <div className="LongCardFlex">
        <div className="wrapperlong" >
          <div className="ellipse" ></div>
          <div className="datacln">
            <p className="cnl">Current Accident Now</p>
            <p className="percentageData">{
              currentAccident != null ?
                currentAccident?.aggregateReport._count?.report_type
                :
                0
            }</p>
            <p className="dataTitle"></p>
          </div>
        </div>
        <div className="wrapperlong" >
          <div className="ellipse" ></div>
          <div className="datacln">
            <p className="cnl">Current Closed Roads</p>
            <p className="percentageData">{
              currentClosedRoads != null ?
                currentClosedRoads.aggregateReport._count?.report_type
              :
                0
            }</p>
            <p className="dataTitle">Total Count</p>
          </div>
        </div>
        <div className="wrapperlong" >
          <div className="ellipse" ></div>
          <div className="datacln">
            <p className="cnl"></p>
            <p className="percentageData">{
              activeCityProj != null ?
                activeCityProj?.aggregateReport._count?.report_type
                :
                0
            }</p>
            <p className="dataTitle">Acitive City Projects</p>
          </div>
        </div>
      </div>

    </Card>

  )
}

export default Summary;
