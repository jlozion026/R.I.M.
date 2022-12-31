import { InputTypesEnhanceMap } from "prisma/generated/type-graphql";
import { accountsInputTypesConfig,  cityProjectCreateNestedOneWithoutReport, cityProjectCreateWithouReport, cityProjectInputTypesConfig, incidentCreateNestedOneWithoutReport, incidentCreateWithoutReport, reportCreateNestedOneWithoutCityProj, reportCreateWithoutCityProj, reportInputTtypesConfig } from "./inputTypeConfig";



const inputTypeEnhanceMap: InputTypesEnhanceMap = {
    AccountCreateInput: accountsInputTypesConfig,

    ReportCreateInput: reportInputTtypesConfig,
    CityProjectCreateNestedOneWithoutReportInput: cityProjectCreateNestedOneWithoutReport,
    IncidentCreateNestedOneWithoutReportInput: incidentCreateNestedOneWithoutReport,
    CityProjectCreateWithoutReportInput: cityProjectCreateWithouReport,
    IncidentCreateWithoutReportInput: incidentCreateWithoutReport,

    CityProjectCreateInput: cityProjectInputTypesConfig,
    ReportCreateNestedOneWithoutCity_porjectInput: reportCreateNestedOneWithoutCityProj,
    ReportCreateWithoutCity_porjectInput: reportCreateWithoutCityProj

}

export default inputTypeEnhanceMap