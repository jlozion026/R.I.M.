import {IsDate,ValidateNested,} from "class-validator";

import { InputTypeConfig } from "../../../prisma/generated/type-graphql";
  

// * Create Incident
export const incidentCreateNestedOneWithoutReport: InputTypeConfig<"IncidentCreateNestedOneWithoutReportInput"> =
  {  
    fields: {
      _all: [ValidateNested()],
    },
  };
export const incidentCreateWithoutReport: InputTypeConfig<"IncidentCreateWithoutReportInput"> =
  {
    fields: {
      date_started: [IsDate({message: "date start must be date"})],
      date_ended: [IsDate({ message: "date end must be date" })],
    },
  };
  

// * Update Incident
export const incidentUpdateOneWithoutReportNestedInput: InputTypeConfig<"IncidentUpdateOneWithoutReportNestedInput"> = 
{
  fields: {
    _all: [ValidateNested()]
  }
}
export const incidentUpdateWithoutReportInput: InputTypeConfig<"IncidentUpdateWithoutReportInput"> = 
{
  fields: {
    _all: [ValidateNested()]
  }
}