import { ResolversEnhanceMap } from "prisma/generated/type-graphql";

import {
  accountsActionsConfig,
  cityProjectActionsConfig,
  incidentActionsConfig,
  reportActionsConfig,
} from "./actionConfig";

const resolversEnhanceMap: ResolversEnhanceMap = {
  Account: accountsActionsConfig,
  Report: reportActionsConfig,
  CityProject: cityProjectActionsConfig,
  Incident: incidentActionsConfig,
};

export default resolversEnhanceMap;
