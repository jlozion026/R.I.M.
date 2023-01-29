import { ResolverActionsConfig } from "prisma/generated/type-graphql";

import { UseMiddleware } from "type-graphql";

import { isAuth } from "../../customResolver/account/middleware/isAuth";

export const accountsActionsConfig: ResolverActionsConfig<"Account"> = {
  accounts: [UseMiddleware(isAuth)],
  createOneAccount: [UseMiddleware(isAuth)],
};

export const reportActionsConfig: ResolverActionsConfig<"Report"> = {
  // report: [UseMiddleware(isAuth)],
  // reports: [UseMiddleware(isAuth)],
  createOneReport: [UseMiddleware(isAuth)],
  aggregateReport: [UseMiddleware(isAuth)],
};

export const incidentActionsConfig: ResolverActionsConfig<"Incident"> = {
  incident: [UseMiddleware(isAuth)],
  incidents: [UseMiddleware(isAuth)],
  createOneIncident: [UseMiddleware(isAuth)],
};

export const cityProjectActionsConfig: ResolverActionsConfig<"CityProject"> = {
  cityProject: [UseMiddleware(isAuth)],
  cityProjects: [UseMiddleware(isAuth)],
  createOneCityProject: [UseMiddleware(isAuth)],
};
