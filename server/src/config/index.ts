import { ResolversEnhanceMap } from "prisma/generated/type-graphql";

import { accountsActionsConfig, 
         cityProjectActionsConfig, 
         incidentActionsConfig, 
         reportActionsConfig } from "./actionConfig"


const resolversEnhanceMap: ResolversEnhanceMap = {
    Account: accountsActionsConfig,
    CityProject: cityProjectActionsConfig,
    Incident: incidentActionsConfig,
    Report: reportActionsConfig
}

export default resolversEnhanceMap