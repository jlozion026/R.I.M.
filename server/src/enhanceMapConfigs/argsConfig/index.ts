import {
  ArgsTypesEnhanceMap
} from "prisma/generated/type-graphql";

import {
  createOneAccountArgConfig,
  createOneCityProjectArgConfig,
  createOneReportArgConfig,
  updateOneAccountArgConfig,
} from "./argsConfig";


const argsTypesEnhanceMap: ArgsTypesEnhanceMap = {
  CreateOneAccountArgs: createOneAccountArgConfig,
  CreateOneReportArgs: createOneReportArgConfig,
  CreateOneCityProjectArgs: createOneCityProjectArgConfig,

  UpdateOneAccountArgs: updateOneAccountArgConfig,
};

export default argsTypesEnhanceMap;
