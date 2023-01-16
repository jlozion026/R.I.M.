import { InputTypesEnhanceMap } from "prisma/generated/type-graphql";

import { dateTimeFieldUpdateOperationsInput, enumReportTypeFieldUpdateOperationsInput, stringFieldUpdateOperationInput } from "./inputTypeConfigReusable";

import { accountsInputTypesConfig } from "./inputTypeConfigAccount";

import { incidentCreateNestedOneWithoutReport, incidentCreateWithoutReport, incidentUpdateOneWithoutReportNestedInput, incidentUpdateWithoutReportInput } from "./inputTypeConfigReportIncident";

import { cityProjectCreateNestedOneWithoutReport, cityProjectCreateWithouReport, cityProjectUpdateOneWithoutReportNestedInput, cityProjectUpdateWithoutReportInput } from "./inputTypeConfigReportCityProject";


const inputTypeEnhanceMap: InputTypesEnhanceMap = {
    // * Reusable Input TypesCongig
    DateTimeFieldUpdateOperationsInput: dateTimeFieldUpdateOperationsInput,
    StringFieldUpdateOperationsInput: stringFieldUpdateOperationInput,
    EnumReportTypeFieldUpdateOperationsInput: enumReportTypeFieldUpdateOperationsInput,

    // * Accounts Related TypesConfig

    // * Create Account
    AccountCreateInput: accountsInputTypesConfig,
    
    // * Report Incident Related TypesConfig
    
    // * Create Report Incident
    IncidentCreateNestedOneWithoutReportInput: incidentCreateNestedOneWithoutReport,
    IncidentCreateWithoutReportInput: incidentCreateWithoutReport,
    // * Update Report Incident
    IncidentUpdateOneWithoutReportNestedInput: incidentUpdateOneWithoutReportNestedInput,
    IncidentUpdateWithoutReportInput: incidentUpdateWithoutReportInput,

    // * Report CityProject Related TypesConfig
    
    // * Create Report City Project
    CityProjectCreateNestedOneWithoutReportInput: cityProjectCreateNestedOneWithoutReport,
    CityProjectCreateWithoutReportInput: cityProjectCreateWithouReport,
    // * Update Report Incident
    CityProjectUpdateOneWithoutReportNestedInput: cityProjectUpdateOneWithoutReportNestedInput,
    CityProjectUpdateWithoutReportInput: cityProjectUpdateWithoutReportInput
}

export default inputTypeEnhanceMap