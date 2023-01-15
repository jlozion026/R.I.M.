import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Account: crudResolvers.AccountCrudResolver,
  Report: crudResolvers.ReportCrudResolver,
  CityProject: crudResolvers.CityProjectCrudResolver,
  Incident: crudResolvers.IncidentCrudResolver
};
const actionResolversMap = {
  Account: {
    aggregateAccount: actionResolvers.AggregateAccountResolver,
    createManyAccount: actionResolvers.CreateManyAccountResolver,
    createOneAccount: actionResolvers.CreateOneAccountResolver,
    deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
    deleteOneAccount: actionResolvers.DeleteOneAccountResolver,
    findFirstAccount: actionResolvers.FindFirstAccountResolver,
    accounts: actionResolvers.FindManyAccountResolver,
    account: actionResolvers.FindUniqueAccountResolver,
    groupByAccount: actionResolvers.GroupByAccountResolver,
    updateManyAccount: actionResolvers.UpdateManyAccountResolver,
    updateOneAccount: actionResolvers.UpdateOneAccountResolver,
    upsertOneAccount: actionResolvers.UpsertOneAccountResolver
  },
  Report: {
    aggregateReport: actionResolvers.AggregateReportResolver,
    createManyReport: actionResolvers.CreateManyReportResolver,
    createOneReport: actionResolvers.CreateOneReportResolver,
    deleteManyReport: actionResolvers.DeleteManyReportResolver,
    deleteOneReport: actionResolvers.DeleteOneReportResolver,
    findFirstReport: actionResolvers.FindFirstReportResolver,
    reports: actionResolvers.FindManyReportResolver,
    report: actionResolvers.FindUniqueReportResolver,
    groupByReport: actionResolvers.GroupByReportResolver,
    updateManyReport: actionResolvers.UpdateManyReportResolver,
    updateOneReport: actionResolvers.UpdateOneReportResolver,
    upsertOneReport: actionResolvers.UpsertOneReportResolver
  },
  CityProject: {
    aggregateCityProject: actionResolvers.AggregateCityProjectResolver,
    createManyCityProject: actionResolvers.CreateManyCityProjectResolver,
    createOneCityProject: actionResolvers.CreateOneCityProjectResolver,
    deleteManyCityProject: actionResolvers.DeleteManyCityProjectResolver,
    deleteOneCityProject: actionResolvers.DeleteOneCityProjectResolver,
    findFirstCityProject: actionResolvers.FindFirstCityProjectResolver,
    cityProjects: actionResolvers.FindManyCityProjectResolver,
    cityProject: actionResolvers.FindUniqueCityProjectResolver,
    groupByCityProject: actionResolvers.GroupByCityProjectResolver,
    updateManyCityProject: actionResolvers.UpdateManyCityProjectResolver,
    updateOneCityProject: actionResolvers.UpdateOneCityProjectResolver,
    upsertOneCityProject: actionResolvers.UpsertOneCityProjectResolver
  },
  Incident: {
    aggregateIncident: actionResolvers.AggregateIncidentResolver,
    createManyIncident: actionResolvers.CreateManyIncidentResolver,
    createOneIncident: actionResolvers.CreateOneIncidentResolver,
    deleteManyIncident: actionResolvers.DeleteManyIncidentResolver,
    deleteOneIncident: actionResolvers.DeleteOneIncidentResolver,
    findFirstIncident: actionResolvers.FindFirstIncidentResolver,
    incidents: actionResolvers.FindManyIncidentResolver,
    incident: actionResolvers.FindUniqueIncidentResolver,
    groupByIncident: actionResolvers.GroupByIncidentResolver,
    updateManyIncident: actionResolvers.UpdateManyIncidentResolver,
    updateOneIncident: actionResolvers.UpdateOneIncidentResolver,
    upsertOneIncident: actionResolvers.UpsertOneIncidentResolver
  }
};
const crudResolversInfo = {
  Account: ["aggregateAccount", "createManyAccount", "createOneAccount", "deleteManyAccount", "deleteOneAccount", "findFirstAccount", "accounts", "account", "groupByAccount", "updateManyAccount", "updateOneAccount", "upsertOneAccount"],
  Report: ["aggregateReport", "createManyReport", "createOneReport", "deleteManyReport", "deleteOneReport", "findFirstReport", "reports", "report", "groupByReport", "updateManyReport", "updateOneReport", "upsertOneReport"],
  CityProject: ["aggregateCityProject", "createManyCityProject", "createOneCityProject", "deleteManyCityProject", "deleteOneCityProject", "findFirstCityProject", "cityProjects", "cityProject", "groupByCityProject", "updateManyCityProject", "updateOneCityProject", "upsertOneCityProject"],
  Incident: ["aggregateIncident", "createManyIncident", "createOneIncident", "deleteManyIncident", "deleteOneIncident", "findFirstIncident", "incidents", "incident", "groupByIncident", "updateManyIncident", "updateOneIncident", "upsertOneIncident"]
};
const argsInfo = {
  AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAccountArgs: ["data", "skipDuplicates"],
  CreateOneAccountArgs: ["data"],
  DeleteManyAccountArgs: ["where"],
  DeleteOneAccountArgs: ["where"],
  FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAccountArgs: ["where"],
  GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAccountArgs: ["data", "where"],
  UpdateOneAccountArgs: ["data", "where"],
  UpsertOneAccountArgs: ["where", "create", "update"],
  AggregateReportArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyReportArgs: ["data", "skipDuplicates"],
  CreateOneReportArgs: ["data"],
  DeleteManyReportArgs: ["where"],
  DeleteOneReportArgs: ["where"],
  FindFirstReportArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyReportArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueReportArgs: ["where"],
  GroupByReportArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyReportArgs: ["data", "where"],
  UpdateOneReportArgs: ["data", "where"],
  UpsertOneReportArgs: ["where", "create", "update"],
  AggregateCityProjectArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCityProjectArgs: ["data", "skipDuplicates"],
  CreateOneCityProjectArgs: ["data"],
  DeleteManyCityProjectArgs: ["where"],
  DeleteOneCityProjectArgs: ["where"],
  FindFirstCityProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCityProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCityProjectArgs: ["where"],
  GroupByCityProjectArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCityProjectArgs: ["data", "where"],
  UpdateOneCityProjectArgs: ["data", "where"],
  UpsertOneCityProjectArgs: ["where", "create", "update"],
  AggregateIncidentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyIncidentArgs: ["data", "skipDuplicates"],
  CreateOneIncidentArgs: ["data"],
  DeleteManyIncidentArgs: ["where"],
  DeleteOneIncidentArgs: ["where"],
  FindFirstIncidentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyIncidentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueIncidentArgs: ["where"],
  GroupByIncidentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyIncidentArgs: ["data", "where"],
  UpdateOneIncidentArgs: ["data", "where"],
  UpsertOneIncidentArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Account: relationResolvers.AccountRelationsResolver,
  Report: relationResolvers.ReportRelationsResolver,
  CityProject: relationResolvers.CityProjectRelationsResolver,
  Incident: relationResolvers.IncidentRelationsResolver
};
const relationResolversInfo = {
  Account: ["reports"],
  Report: ["reporter", "city_porject", "incident"],
  CityProject: ["report"],
  Incident: ["report"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Account: ["acc_id", "email", "designation", "acc_type"],
  Report: ["report_id", "createdAt", "updatedAt", "location", "description", "reporter_id", "report_type"],
  CityProject: ["project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount", "reports_id"],
  Incident: ["incident_id", "date_started", "date_ended", "reports_id"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateAccount: ["_count", "_min", "_max"],
  AccountGroupBy: ["acc_id", "email", "password", "designation", "acc_type", "_count", "_min", "_max"],
  AggregateReport: ["_count", "_min", "_max"],
  ReportGroupBy: ["report_id", "createdAt", "updatedAt", "location", "description", "reporter_id", "report_type", "_count", "_min", "_max"],
  AggregateCityProject: ["_count", "_avg", "_sum", "_min", "_max"],
  CityProjectGroupBy: ["project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount", "reports_id", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateIncident: ["_count", "_min", "_max"],
  IncidentGroupBy: ["incident_id", "date_started", "date_ended", "reports_id", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  AccountCount: ["reports"],
  AccountCountAggregate: ["acc_id", "email", "password", "designation", "acc_type", "_all"],
  AccountMinAggregate: ["acc_id", "email", "password", "designation", "acc_type"],
  AccountMaxAggregate: ["acc_id", "email", "password", "designation", "acc_type"],
  ReportCountAggregate: ["report_id", "createdAt", "updatedAt", "location", "description", "reporter_id", "report_type", "_all"],
  ReportMinAggregate: ["report_id", "createdAt", "updatedAt", "description", "reporter_id", "report_type"],
  ReportMaxAggregate: ["report_id", "createdAt", "updatedAt", "description", "reporter_id", "report_type"],
  CityProjectCountAggregate: ["project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount", "reports_id", "_all"],
  CityProjectAvgAggregate: ["project_ammount", "contract_ammount"],
  CityProjectSumAggregate: ["project_ammount", "contract_ammount"],
  CityProjectMinAggregate: ["project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount", "reports_id"],
  CityProjectMaxAggregate: ["project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount", "reports_id"],
  IncidentCountAggregate: ["incident_id", "date_started", "date_ended", "reports_id", "_all"],
  IncidentMinAggregate: ["incident_id", "date_started", "date_ended", "reports_id"],
  IncidentMaxAggregate: ["incident_id", "date_started", "date_ended", "reports_id"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  AccountWhereInput: ["AND", "OR", "NOT", "acc_id", "email", "password", "designation", "acc_type", "reports"],
  AccountOrderByWithRelationInput: ["acc_id", "email", "password", "designation", "acc_type", "reports"],
  AccountWhereUniqueInput: ["acc_id", "email"],
  AccountOrderByWithAggregationInput: ["acc_id", "email", "password", "designation", "acc_type", "_count", "_max", "_min"],
  AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "acc_id", "email", "password", "designation", "acc_type"],
  ReportWhereInput: ["AND", "OR", "NOT", "report_id", "createdAt", "updatedAt", "location", "description", "reporter", "reporter_id", "report_type", "city_porject", "incident"],
  ReportOrderByWithRelationInput: ["report_id", "createdAt", "updatedAt", "location", "description", "reporter", "reporter_id", "report_type", "city_porject", "incident"],
  ReportWhereUniqueInput: ["report_id"],
  ReportOrderByWithAggregationInput: ["report_id", "createdAt", "updatedAt", "location", "description", "reporter_id", "report_type", "_count", "_max", "_min"],
  ReportScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "report_id", "createdAt", "updatedAt", "location", "description", "reporter_id", "report_type"],
  CityProjectWhereInput: ["AND", "OR", "NOT", "project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount", "report", "reports_id"],
  CityProjectOrderByWithRelationInput: ["project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount", "report", "reports_id"],
  CityProjectWhereUniqueInput: ["project_id", "reports_id"],
  CityProjectOrderByWithAggregationInput: ["project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount", "reports_id", "_count", "_avg", "_max", "_min", "_sum"],
  CityProjectScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount", "reports_id"],
  IncidentWhereInput: ["AND", "OR", "NOT", "incident_id", "date_started", "date_ended", "report", "reports_id"],
  IncidentOrderByWithRelationInput: ["incident_id", "date_started", "date_ended", "report", "reports_id"],
  IncidentWhereUniqueInput: ["incident_id", "reports_id"],
  IncidentOrderByWithAggregationInput: ["incident_id", "date_started", "date_ended", "reports_id", "_count", "_max", "_min"],
  IncidentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "incident_id", "date_started", "date_ended", "reports_id"],
  AccountCreateInput: ["acc_id", "email", "password", "designation", "acc_type", "reports"],
  AccountUpdateInput: ["acc_id", "email", "password", "designation", "acc_type", "reports"],
  AccountCreateManyInput: ["acc_id", "email", "password", "designation", "acc_type"],
  AccountUpdateManyMutationInput: ["acc_id", "email", "password", "designation", "acc_type"],
  ReportCreateInput: ["report_id", "createdAt", "updatedAt", "location", "description", "reporter", "report_type", "city_porject", "incident"],
  ReportUpdateInput: ["report_id", "createdAt", "updatedAt", "location", "description", "reporter", "report_type", "city_porject", "incident"],
  ReportCreateManyInput: ["report_id", "createdAt", "updatedAt", "location", "description", "reporter_id", "report_type"],
  ReportUpdateManyMutationInput: ["report_id", "createdAt", "updatedAt", "location", "description", "report_type"],
  CityProjectCreateInput: ["project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount", "report"],
  CityProjectUpdateInput: ["project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount", "report"],
  CityProjectCreateManyInput: ["project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount", "reports_id"],
  CityProjectUpdateManyMutationInput: ["project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount"],
  IncidentCreateInput: ["incident_id", "date_started", "date_ended", "report"],
  IncidentUpdateInput: ["incident_id", "date_started", "date_ended", "report"],
  IncidentCreateManyInput: ["incident_id", "date_started", "date_ended", "reports_id"],
  IncidentUpdateManyMutationInput: ["incident_id", "date_started", "date_ended"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumAccTypeFilter: ["equals", "in", "notIn", "not"],
  ReportListRelationFilter: ["every", "some", "none"],
  ReportOrderByRelationAggregateInput: ["_count"],
  AccountCountOrderByAggregateInput: ["acc_id", "email", "password", "designation", "acc_type"],
  AccountMaxOrderByAggregateInput: ["acc_id", "email", "password", "designation", "acc_type"],
  AccountMinOrderByAggregateInput: ["acc_id", "email", "password", "designation", "acc_type"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumAccTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  JsonFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  AccountRelationFilter: ["is", "isNot"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumReportTypeFilter: ["equals", "in", "notIn", "not"],
  CityProjectRelationFilter: ["is", "isNot"],
  IncidentRelationFilter: ["is", "isNot"],
  ReportCountOrderByAggregateInput: ["report_id", "createdAt", "updatedAt", "location", "description", "reporter_id", "report_type"],
  ReportMaxOrderByAggregateInput: ["report_id", "createdAt", "updatedAt", "description", "reporter_id", "report_type"],
  ReportMinOrderByAggregateInput: ["report_id", "createdAt", "updatedAt", "description", "reporter_id", "report_type"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  JsonWithAggregatesFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumReportTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ReportRelationFilter: ["is", "isNot"],
  CityProjectCountOrderByAggregateInput: ["project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount", "reports_id"],
  CityProjectAvgOrderByAggregateInput: ["project_ammount", "contract_ammount"],
  CityProjectMaxOrderByAggregateInput: ["project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount", "reports_id"],
  CityProjectMinOrderByAggregateInput: ["project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount", "reports_id"],
  CityProjectSumOrderByAggregateInput: ["project_ammount", "contract_ammount"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  IncidentCountOrderByAggregateInput: ["incident_id", "date_started", "date_ended", "reports_id"],
  IncidentMaxOrderByAggregateInput: ["incident_id", "date_started", "date_ended", "reports_id"],
  IncidentMinOrderByAggregateInput: ["incident_id", "date_started", "date_ended", "reports_id"],
  ReportCreateNestedManyWithoutReporterInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  EnumAccTypeFieldUpdateOperationsInput: ["set"],
  ReportUpdateManyWithoutReporterNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AccountCreateNestedOneWithoutReportsInput: ["create", "connectOrCreate", "connect"],
  CityProjectCreateNestedOneWithoutReportInput: ["create", "connectOrCreate", "connect"],
  IncidentCreateNestedOneWithoutReportInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  AccountUpdateOneWithoutReportsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  EnumReportTypeFieldUpdateOperationsInput: ["set"],
  CityProjectUpdateOneWithoutReportNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  IncidentUpdateOneWithoutReportNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  ReportCreateNestedOneWithoutCity_porjectInput: ["create", "connectOrCreate", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ReportUpdateOneRequiredWithoutCity_porjectNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ReportCreateNestedOneWithoutIncidentInput: ["create", "connectOrCreate", "connect"],
  ReportUpdateOneRequiredWithoutIncidentNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumAccTypeFilter: ["equals", "in", "notIn", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumAccTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumReportTypeFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedJsonFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumReportTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  ReportCreateWithoutReporterInput: ["report_id", "createdAt", "updatedAt", "location", "description", "report_type", "city_porject", "incident"],
  ReportCreateOrConnectWithoutReporterInput: ["where", "create"],
  ReportCreateManyReporterInputEnvelope: ["data", "skipDuplicates"],
  ReportUpsertWithWhereUniqueWithoutReporterInput: ["where", "update", "create"],
  ReportUpdateWithWhereUniqueWithoutReporterInput: ["where", "data"],
  ReportUpdateManyWithWhereWithoutReporterInput: ["where", "data"],
  ReportScalarWhereInput: ["AND", "OR", "NOT", "report_id", "createdAt", "updatedAt", "location", "description", "reporter_id", "report_type"],
  AccountCreateWithoutReportsInput: ["acc_id", "email", "password", "designation", "acc_type"],
  AccountCreateOrConnectWithoutReportsInput: ["where", "create"],
  CityProjectCreateWithoutReportInput: ["project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount"],
  CityProjectCreateOrConnectWithoutReportInput: ["where", "create"],
  IncidentCreateWithoutReportInput: ["incident_id", "date_started", "date_ended"],
  IncidentCreateOrConnectWithoutReportInput: ["where", "create"],
  AccountUpsertWithoutReportsInput: ["update", "create"],
  AccountUpdateWithoutReportsInput: ["acc_id", "email", "password", "designation", "acc_type"],
  CityProjectUpsertWithoutReportInput: ["update", "create"],
  CityProjectUpdateWithoutReportInput: ["project_id", "project_name", "contractor_name", "date_started", "date_ended", "source_fund", "project_ammount", "contract_ammount"],
  IncidentUpsertWithoutReportInput: ["update", "create"],
  IncidentUpdateWithoutReportInput: ["incident_id", "date_started", "date_ended"],
  ReportCreateWithoutCity_porjectInput: ["report_id", "createdAt", "updatedAt", "location", "description", "reporter", "report_type", "incident"],
  ReportCreateOrConnectWithoutCity_porjectInput: ["where", "create"],
  ReportUpsertWithoutCity_porjectInput: ["update", "create"],
  ReportUpdateWithoutCity_porjectInput: ["report_id", "createdAt", "updatedAt", "location", "description", "reporter", "report_type", "incident"],
  ReportCreateWithoutIncidentInput: ["report_id", "createdAt", "updatedAt", "location", "description", "reporter", "report_type", "city_porject"],
  ReportCreateOrConnectWithoutIncidentInput: ["where", "create"],
  ReportUpsertWithoutIncidentInput: ["update", "create"],
  ReportUpdateWithoutIncidentInput: ["report_id", "createdAt", "updatedAt", "location", "description", "reporter", "report_type", "city_porject"],
  ReportCreateManyReporterInput: ["report_id", "createdAt", "updatedAt", "location", "description", "report_type"],
  ReportUpdateWithoutReporterInput: ["report_id", "createdAt", "updatedAt", "location", "description", "report_type", "city_porject", "incident"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

