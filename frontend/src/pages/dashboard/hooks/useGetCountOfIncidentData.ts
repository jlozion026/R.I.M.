import { GetCountOfIncidentQuery, useGetCountOfIncidentQuery, ReportType } from "@/generated/graphql";

import graphqlRequestClient from "@/lib/client/graphqlRequestClient";


export const useIncidentCountData = (typeOfReport: ReportType) => {
  return useGetCountOfIncidentQuery<GetCountOfIncidentQuery, Error>(graphqlRequestClient, {
    reportType: typeOfReport
  });

}
