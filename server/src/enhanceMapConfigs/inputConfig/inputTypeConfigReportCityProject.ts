import {IsDate,IsNotEmpty,ValidateNested,} from "class-validator";
import { InputTypeConfig } from "../../../prisma/generated/type-graphql";
  
// * Create City Project 
export const cityProjectCreateNestedOneWithoutReport: InputTypeConfig<"CityProjectCreateNestedOneWithoutReportInput"> =
{
    fields: {
        _all: [ValidateNested()],
    },
};
export const cityProjectCreateWithouReport: InputTypeConfig<"CityProjectCreateWithoutReportInput"> =
{
    fields: {
        _all: [IsNotEmpty({ message: "must not be empty" })],
        date_started: [IsDate({ message: "start date is not a date" })],
        date_ended: [IsDate({ message: "end date is not a date" })],
    },
};
  
// * Update City Project 
export const cityProjectUpdateOneWithoutReportNestedInput: InputTypeConfig<"CityProjectUpdateOneWithoutReportNestedInput"> = 
{
    fields: {
        _all: [ValidateNested()]
    }
}
export const cityProjectUpdateWithoutReportInput: InputTypeConfig<"CityProjectUpdateWithoutReportInput"> = {
    fields: {
        _all: [ValidateNested()]
    }
}

