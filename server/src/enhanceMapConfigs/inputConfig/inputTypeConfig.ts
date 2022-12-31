import { InputTypeConfig } from "prisma/generated/type-graphql";

import {
  IsDate,
  IsEmail,
  IsLatLong,
  IsLowercase,
  IsNotEmpty,
  MinLength,
  ValidateNested,
} from "class-validator";

import { IsEmailAlreadyExist } from "./../../customResolver/account/middleware/isEmailAlreadyExist";

export const accountsInputTypesConfig: InputTypeConfig<"AccountCreateInput"> = {
  fields: { 
    email: [IsEmail(),IsLowercase(), <PropertyDecorator>(IsEmailAlreadyExist({ message: "email already exist" })),],
    password: [MinLength(8, {message: "must be longer than or equal to 8 characters"})],
    acc_type: [IsNotEmpty()]
  },
};

// ------------------------------------------------------------------------------------------------------------------ //

export const reportInputTtypesConfig: InputTypeConfig<"ReportCreateInput"> = {
  fields: {
    _all: [IsNotEmpty({ message: "Field Required" })],
    location: [IsLatLong({ message: "The location must be geocoded" })],
    city_porject: [ValidateNested()],
    incident: [ValidateNested()],
  },
};

export const cityProjectCreateNestedOneWithoutReport: InputTypeConfig<"CityProjectCreateNestedOneWithoutReportInput"> =
  {
    fields: {
      _all: [ValidateNested()],
    },
  };
export const cityProjectCreateWithouReport: InputTypeConfig<"CityProjectCreateWithoutReportInput"> =
  {
    fields: {
      _all: [IsNotEmpty({ message: "Field Required" })],
      date_started: [IsDate({ message: "Must be date" })],
      date_ended: [IsDate({ message: "Must be date" })],
    },
  };

export const incidentCreateNestedOneWithoutReport: InputTypeConfig<"IncidentCreateNestedOneWithoutReportInput"> =
  {
    fields: {
      _all: [ValidateNested()],
    },
  };
export const incidentCreateWithoutReport: InputTypeConfig<"IncidentCreateWithoutReportInput"> =
  {
    fields: {
      _all: [IsNotEmpty({ message: "Field Required" })],
      date_started: [IsDate({ message: "Must be date" })],
      date_ended: [IsDate({ message: "Must be date" })],
    },
  };

//------------------------------------------------------------------------------------------------------------------------- //

export const incidentInputTypesConfig: InputTypeConfig<"IncidentCreateInput"> =
  {
    fields: {
      _all: [IsNotEmpty()],
      report: [ValidateNested()],
    },
  };
export const reportCreateNestedOneWithoutCityProj: InputTypeConfig<"ReportCreateNestedOneWithoutCity_porjectInput"> =
  {
    fields: {
      _all: [ValidateNested()],
    },
  };
export const reportCreateWithoutCityProj: InputTypeConfig<"ReportCreateWithoutCity_porjectInput"> =
  {
    fields: {
      _all: [IsNotEmpty()],
    },
  };

//---------------------------------------------------------------------------------------------------------------------- //

export const cityProjectInputTypesConfig: InputTypeConfig<"CityProjectCreateInput"> =
  {
    fields: {
      project_name: [IsNotEmpty()],
      contractor_name: [IsNotEmpty()],
    },
  };

// -------------------------------------------------------------------------------------------------------------------- //
