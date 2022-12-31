import { ArgConfig } from "prisma/generated/type-graphql";

import { ValidateNested } from "class-validator";

export const createOneAccountArgConfig: ArgConfig<"CreateOneAccountArgs"> = {
  fields: {
    data: [ValidateNested()],
  },
};

export const createOneReportArgConfig: ArgConfig<"CreateOneReportArgs"> = {
  fields: {
    data: [ValidateNested()],
  },
};

export const createOneCityProjectArgConfig: ArgConfig<"CreateOneCityProjectArgs"> =
  {
    fields: {
      data: [ValidateNested()],
    },
  };

export const createOneIncidentArgConfig: ArgConfig<"CreateManyIncidentArgs"> = {
  fields: {
    data: [ValidateNested()],
  },
};

export const updateOneAccountArgConfig: ArgConfig<"UpdateOneAccountArgs"> = {
  fields: {
    data: [ValidateNested()],
    where: [ValidateNested()],
  },
};
