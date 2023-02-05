// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

export enum AccType {
  Admin = 'ADMIN',
  Normal = 'NORMAL'
}

export type Account = {
  __typename?: 'Account';
  _count?: Maybe<AccountCount>;
  acc_id: Scalars['String'];
  acc_type: AccType;
  designation: Scalars['String'];
  email: Scalars['String'];
};

export type AccountCount = {
  __typename?: 'AccountCount';
  reports: Scalars['Int'];
};

export type AccountCreateInput = {
  acc_id?: InputMaybe<Scalars['String']>;
  acc_type: AccType;
  designation: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  reports?: InputMaybe<ReportCreateNestedManyWithoutReporterInput>;
};

export type AccountCreateNestedOneWithoutReportsInput = {
  connect?: InputMaybe<AccountWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AccountCreateOrConnectWithoutReportsInput>;
  create?: InputMaybe<AccountCreateWithoutReportsInput>;
};

export type AccountCreateOrConnectWithoutReportsInput = {
  create: AccountCreateWithoutReportsInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutReportsInput = {
  acc_id?: InputMaybe<Scalars['String']>;
  acc_type: AccType;
  designation: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AccountOrderByWithRelationInput = {
  acc_id?: InputMaybe<SortOrder>;
  acc_type?: InputMaybe<SortOrder>;
  designation?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  reports?: InputMaybe<ReportOrderByRelationAggregateInput>;
};

export type AccountRelationFilter = {
  is?: InputMaybe<AccountWhereInput>;
  isNot?: InputMaybe<AccountWhereInput>;
};

export enum AccountScalarFieldEnum {
  AccId = 'acc_id',
  AccType = 'acc_type',
  Designation = 'designation',
  Email = 'email',
  Password = 'password'
}

export type AccountUpdateOneWithoutReportsNestedInput = {
  connect?: InputMaybe<AccountWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AccountCreateOrConnectWithoutReportsInput>;
  create?: InputMaybe<AccountCreateWithoutReportsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AccountUpdateWithoutReportsInput>;
  upsert?: InputMaybe<AccountUpsertWithoutReportsInput>;
};

export type AccountUpdateWithoutReportsInput = {
  acc_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  acc_type?: InputMaybe<EnumAccTypeFieldUpdateOperationsInput>;
  designation?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpsertWithoutReportsInput = {
  create: AccountCreateWithoutReportsInput;
  update: AccountUpdateWithoutReportsInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  acc_id?: InputMaybe<StringFilter>;
  acc_type?: InputMaybe<EnumAccTypeFilter>;
  designation?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  reports?: InputMaybe<ReportListRelationFilter>;
};

export type AccountWhereUniqueInput = {
  acc_id?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
};

export type Addresses = {
  from: Scalars['String'];
  general_address: Scalars['String'];
  to: Scalars['String'];
};

export type AggregateReport = {
  __typename?: 'AggregateReport';
  _count?: Maybe<ReportCountAggregate>;
  _max?: Maybe<ReportMaxAggregate>;
  _min?: Maybe<ReportMinAggregate>;
};

export type CityProject = {
  __typename?: 'CityProject';
  contract_ammount: Scalars['Float'];
  contractor_name: Scalars['String'];
  date_ended: Scalars['DateTime'];
  date_started: Scalars['DateTime'];
  project_ammount: Scalars['Float'];
  project_id: Scalars['String'];
  project_name: Scalars['String'];
  report: Report;
  reports_id: Scalars['String'];
  source_fund: Scalars['String'];
};

export type CityProjectCreateNestedOneWithoutReportInput = {
  connect?: InputMaybe<CityProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityProjectCreateOrConnectWithoutReportInput>;
  create?: InputMaybe<CityProjectCreateWithoutReportInput>;
};

export type CityProjectCreateOrConnectWithoutReportInput = {
  create: CityProjectCreateWithoutReportInput;
  where: CityProjectWhereUniqueInput;
};

export type CityProjectCreateWithoutReportInput = {
  contract_ammount: Scalars['Float'];
  contractor_name: Scalars['String'];
  date_ended: Scalars['DateTime'];
  date_started: Scalars['DateTime'];
  project_ammount: Scalars['Float'];
  project_id?: InputMaybe<Scalars['String']>;
  project_name: Scalars['String'];
  source_fund: Scalars['String'];
};

export type CityProjectOrderByWithRelationInput = {
  contract_ammount?: InputMaybe<SortOrder>;
  contractor_name?: InputMaybe<SortOrder>;
  date_ended?: InputMaybe<SortOrder>;
  date_started?: InputMaybe<SortOrder>;
  project_ammount?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  project_name?: InputMaybe<SortOrder>;
  report?: InputMaybe<ReportOrderByWithRelationInput>;
  reports_id?: InputMaybe<SortOrder>;
  source_fund?: InputMaybe<SortOrder>;
};

export type CityProjectRelationFilter = {
  is?: InputMaybe<CityProjectWhereInput>;
  isNot?: InputMaybe<CityProjectWhereInput>;
};

export enum CityProjectScalarFieldEnum {
  ContractAmmount = 'contract_ammount',
  ContractorName = 'contractor_name',
  DateEnded = 'date_ended',
  DateStarted = 'date_started',
  ProjectAmmount = 'project_ammount',
  ProjectId = 'project_id',
  ProjectName = 'project_name',
  ReportsId = 'reports_id',
  SourceFund = 'source_fund'
}

export type CityProjectUpdateOneWithoutReportNestedInput = {
  connect?: InputMaybe<CityProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityProjectCreateOrConnectWithoutReportInput>;
  create?: InputMaybe<CityProjectCreateWithoutReportInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CityProjectUpdateWithoutReportInput>;
  upsert?: InputMaybe<CityProjectUpsertWithoutReportInput>;
};

export type CityProjectUpdateWithoutReportInput = {
  contract_ammount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  contractor_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  date_ended?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_started?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  project_ammount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  project_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  project_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  source_fund?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CityProjectUpsertWithoutReportInput = {
  create: CityProjectCreateWithoutReportInput;
  update: CityProjectUpdateWithoutReportInput;
};

export type CityProjectWhereInput = {
  AND?: InputMaybe<Array<CityProjectWhereInput>>;
  NOT?: InputMaybe<Array<CityProjectWhereInput>>;
  OR?: InputMaybe<Array<CityProjectWhereInput>>;
  contract_ammount?: InputMaybe<FloatFilter>;
  contractor_name?: InputMaybe<StringFilter>;
  date_ended?: InputMaybe<DateTimeFilter>;
  date_started?: InputMaybe<DateTimeFilter>;
  project_ammount?: InputMaybe<FloatFilter>;
  project_id?: InputMaybe<StringFilter>;
  project_name?: InputMaybe<StringFilter>;
  report?: InputMaybe<ReportRelationFilter>;
  reports_id?: InputMaybe<StringFilter>;
  source_fund?: InputMaybe<StringFilter>;
};

export type CityProjectWhereUniqueInput = {
  project_id?: InputMaybe<Scalars['String']>;
  reports_id?: InputMaybe<Scalars['String']>;
};

export type Coordinates = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type CustomAccountUpdateInput = {
  acc_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  acc_type?: InputMaybe<EnumAccTypeFieldUpdateOperationsInput>;
  designation?: InputMaybe<DesignationFieldUpdateOperationsInput>;
  email?: InputMaybe<EmailFieldUpdateOperationsInput>;
  password?: InputMaybe<PasswordFieldUpdateOperationsInput>;
  reports?: InputMaybe<ReportUpdateManyWithoutReporterNestedInput>;
};

export type CustomReportCreateInput = {
  city_project?: InputMaybe<CityProjectCreateNestedOneWithoutReportInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  incident?: InputMaybe<IncidentCreateNestedOneWithoutReportInput>;
  location: Location;
  report_id?: InputMaybe<Scalars['String']>;
  report_type: ReportType;
  reporter?: InputMaybe<AccountCreateNestedOneWithoutReportsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DesignationFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type EmailFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type EnumAccTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<AccType>;
};

export type EnumAccTypeFilter = {
  equals?: InputMaybe<AccType>;
  in?: InputMaybe<Array<AccType>>;
  not?: InputMaybe<NestedEnumAccTypeFilter>;
  notIn?: InputMaybe<Array<AccType>>;
};

export type EnumReportTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ReportType>;
};

export type EnumReportTypeFilter = {
  equals?: InputMaybe<ReportType>;
  in?: InputMaybe<Array<ReportType>>;
  not?: InputMaybe<NestedEnumReportTypeFilter>;
  notIn?: InputMaybe<Array<ReportType>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type Incident = {
  __typename?: 'Incident';
  date_ended: Scalars['DateTime'];
  date_started: Scalars['DateTime'];
  incident_id: Scalars['String'];
  report: Report;
  reports_id: Scalars['String'];
};

export type IncidentCreateNestedOneWithoutReportInput = {
  connect?: InputMaybe<IncidentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IncidentCreateOrConnectWithoutReportInput>;
  create?: InputMaybe<IncidentCreateWithoutReportInput>;
};

export type IncidentCreateOrConnectWithoutReportInput = {
  create: IncidentCreateWithoutReportInput;
  where: IncidentWhereUniqueInput;
};

export type IncidentCreateWithoutReportInput = {
  date_ended: Scalars['DateTime'];
  date_started: Scalars['DateTime'];
  incident_id?: InputMaybe<Scalars['String']>;
};

export type IncidentOrderByWithRelationInput = {
  date_ended?: InputMaybe<SortOrder>;
  date_started?: InputMaybe<SortOrder>;
  incident_id?: InputMaybe<SortOrder>;
  report?: InputMaybe<ReportOrderByWithRelationInput>;
  reports_id?: InputMaybe<SortOrder>;
};

export type IncidentRelationFilter = {
  is?: InputMaybe<IncidentWhereInput>;
  isNot?: InputMaybe<IncidentWhereInput>;
};

export enum IncidentScalarFieldEnum {
  DateEnded = 'date_ended',
  DateStarted = 'date_started',
  IncidentId = 'incident_id',
  ReportsId = 'reports_id'
}

export type IncidentUpdateOneWithoutReportNestedInput = {
  connect?: InputMaybe<IncidentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IncidentCreateOrConnectWithoutReportInput>;
  create?: InputMaybe<IncidentCreateWithoutReportInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<IncidentUpdateWithoutReportInput>;
  upsert?: InputMaybe<IncidentUpsertWithoutReportInput>;
};

export type IncidentUpdateWithoutReportInput = {
  date_ended?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_started?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  incident_id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type IncidentUpsertWithoutReportInput = {
  create: IncidentCreateWithoutReportInput;
  update: IncidentUpdateWithoutReportInput;
};

export type IncidentWhereInput = {
  AND?: InputMaybe<Array<IncidentWhereInput>>;
  NOT?: InputMaybe<Array<IncidentWhereInput>>;
  OR?: InputMaybe<Array<IncidentWhereInput>>;
  date_ended?: InputMaybe<DateTimeFilter>;
  date_started?: InputMaybe<DateTimeFilter>;
  incident_id?: InputMaybe<StringFilter>;
  report?: InputMaybe<ReportRelationFilter>;
  reports_id?: InputMaybe<StringFilter>;
};

export type IncidentWhereUniqueInput = {
  incident_id?: InputMaybe<Scalars['String']>;
  reports_id?: InputMaybe<Scalars['String']>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type Location = {
  addresses: Addresses;
  destination: Coordinates;
  origin: Coordinates;
};

export type LoginResponseSuccess = {
  __typename?: 'LoginResponseSuccess';
  accessToken: Scalars['String'];
  account: Account;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneAccount: Account;
  createOneReport: Report;
  deleteOneAccount?: Maybe<Account>;
  deleteOneReport?: Maybe<Report>;
  login?: Maybe<LoginResponseSuccess>;
  logout: Scalars['Boolean'];
  registerOneAccount: Account;
  updateOneAccount?: Maybe<Account>;
  updateOneReport?: Maybe<Report>;
};


export type MutationCreateOneAccountArgs = {
  data: AccountCreateInput;
};


export type MutationCreateOneReportArgs = {
  data: CustomReportCreateInput;
};


export type MutationDeleteOneAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type MutationDeleteOneReportArgs = {
  where: ReportWhereUniqueInput;
};


export type MutationLoginArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationRegisterOneAccountArgs = {
  data: AccountCreateInput;
};


export type MutationUpdateOneAccountArgs = {
  data: CustomAccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateOneReportArgs = {
  data: ReportUpdateInput;
  where: ReportWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumAccTypeFilter = {
  equals?: InputMaybe<AccType>;
  in?: InputMaybe<Array<AccType>>;
  not?: InputMaybe<NestedEnumAccTypeFilter>;
  notIn?: InputMaybe<Array<AccType>>;
};

export type NestedEnumReportTypeFilter = {
  equals?: InputMaybe<ReportType>;
  in?: InputMaybe<Array<ReportType>>;
  not?: InputMaybe<NestedEnumReportTypeFilter>;
  notIn?: InputMaybe<Array<ReportType>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type PasswordFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateReport: AggregateReport;
  cityProject?: Maybe<CityProject>;
  cityProjects: Array<CityProject>;
  findFirstReport?: Maybe<Report>;
  incident?: Maybe<Incident>;
  incidents: Array<Incident>;
  report?: Maybe<Report>;
  reports: Array<Report>;
};


export type QueryAggregateReportArgs = {
  cursor?: InputMaybe<ReportWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReportWhereInput>;
};


export type QueryCityProjectArgs = {
  where: CityProjectWhereUniqueInput;
};


export type QueryCityProjectsArgs = {
  cursor?: InputMaybe<CityProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<CityProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CityProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CityProjectWhereInput>;
};


export type QueryFindFirstReportArgs = {
  cursor?: InputMaybe<ReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReportWhereInput>;
};


export type QueryIncidentArgs = {
  where: IncidentWhereUniqueInput;
};


export type QueryIncidentsArgs = {
  cursor?: InputMaybe<IncidentWhereUniqueInput>;
  distinct?: InputMaybe<Array<IncidentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IncidentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IncidentWhereInput>;
};


export type QueryReportArgs = {
  where: ReportWhereUniqueInput;
};


export type QueryReportsArgs = {
  cursor?: InputMaybe<ReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReportOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReportWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Report = {
  __typename?: 'Report';
  city_project?: Maybe<CityProject>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  incident?: Maybe<Incident>;
  location: Scalars['JSON'];
  report_id: Scalars['String'];
  report_type: ReportType;
  reporter?: Maybe<Account>;
  reporter_id?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ReportCountAggregate = {
  __typename?: 'ReportCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  location: Scalars['Int'];
  report_id: Scalars['Int'];
  report_type: Scalars['Int'];
  reporter_id: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ReportCreateManyReporterInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  location: Scalars['JSON'];
  report_id?: InputMaybe<Scalars['String']>;
  report_type: ReportType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ReportCreateManyReporterInputEnvelope = {
  data: Array<ReportCreateManyReporterInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ReportCreateNestedManyWithoutReporterInput = {
  connect?: InputMaybe<Array<ReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReportCreateOrConnectWithoutReporterInput>>;
  create?: InputMaybe<Array<ReportCreateWithoutReporterInput>>;
  createMany?: InputMaybe<ReportCreateManyReporterInputEnvelope>;
};

export type ReportCreateOrConnectWithoutReporterInput = {
  create: ReportCreateWithoutReporterInput;
  where: ReportWhereUniqueInput;
};

export type ReportCreateWithoutReporterInput = {
  city_project?: InputMaybe<CityProjectCreateNestedOneWithoutReportInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  incident?: InputMaybe<IncidentCreateNestedOneWithoutReportInput>;
  location: Scalars['JSON'];
  report_id?: InputMaybe<Scalars['String']>;
  report_type: ReportType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ReportListRelationFilter = {
  every?: InputMaybe<ReportWhereInput>;
  none?: InputMaybe<ReportWhereInput>;
  some?: InputMaybe<ReportWhereInput>;
};

export type ReportMaxAggregate = {
  __typename?: 'ReportMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  report_id?: Maybe<Scalars['String']>;
  report_type?: Maybe<ReportType>;
  reporter_id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ReportMinAggregate = {
  __typename?: 'ReportMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  report_id?: Maybe<Scalars['String']>;
  report_type?: Maybe<ReportType>;
  reporter_id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ReportOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReportOrderByWithRelationInput = {
  city_project?: InputMaybe<CityProjectOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  incident?: InputMaybe<IncidentOrderByWithRelationInput>;
  location?: InputMaybe<SortOrder>;
  report_id?: InputMaybe<SortOrder>;
  report_type?: InputMaybe<SortOrder>;
  reporter?: InputMaybe<AccountOrderByWithRelationInput>;
  reporter_id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ReportRelationFilter = {
  is?: InputMaybe<ReportWhereInput>;
  isNot?: InputMaybe<ReportWhereInput>;
};

export enum ReportScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Location = 'location',
  ReportId = 'report_id',
  ReportType = 'report_type',
  ReporterId = 'reporter_id',
  UpdatedAt = 'updatedAt'
}

export type ReportScalarWhereInput = {
  AND?: InputMaybe<Array<ReportScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReportScalarWhereInput>>;
  OR?: InputMaybe<Array<ReportScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  location?: InputMaybe<JsonFilter>;
  report_id?: InputMaybe<StringFilter>;
  report_type?: InputMaybe<EnumReportTypeFilter>;
  reporter_id?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum ReportType {
  CityProject = 'CityProject',
  RoadAccident = 'RoadAccident',
  RoadClosure = 'RoadClosure',
  RoadConstruction = 'RoadConstruction',
  RoadEvent = 'RoadEvent',
  RoadHazard = 'RoadHazard'
}

export type ReportUpdateInput = {
  city_project?: InputMaybe<CityProjectUpdateOneWithoutReportNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  incident?: InputMaybe<IncidentUpdateOneWithoutReportNestedInput>;
  location?: InputMaybe<Location>;
  report_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  report_type?: InputMaybe<EnumReportTypeFieldUpdateOperationsInput>;
  reporter?: InputMaybe<AccountUpdateOneWithoutReportsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReportUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<Scalars['JSON']>;
  report_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  report_type?: InputMaybe<EnumReportTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReportUpdateManyWithWhereWithoutReporterInput = {
  data: ReportUpdateManyMutationInput;
  where: ReportScalarWhereInput;
};

export type ReportUpdateManyWithoutReporterNestedInput = {
  connect?: InputMaybe<Array<ReportWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReportCreateOrConnectWithoutReporterInput>>;
  create?: InputMaybe<Array<ReportCreateWithoutReporterInput>>;
  createMany?: InputMaybe<ReportCreateManyReporterInputEnvelope>;
  delete?: InputMaybe<Array<ReportWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReportScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReportWhereUniqueInput>>;
  set?: InputMaybe<Array<ReportWhereUniqueInput>>;
  update?: InputMaybe<Array<ReportUpdateWithWhereUniqueWithoutReporterInput>>;
  updateMany?: InputMaybe<Array<ReportUpdateManyWithWhereWithoutReporterInput>>;
  upsert?: InputMaybe<Array<ReportUpsertWithWhereUniqueWithoutReporterInput>>;
};

export type ReportUpdateWithWhereUniqueWithoutReporterInput = {
  data: ReportUpdateWithoutReporterInput;
  where: ReportWhereUniqueInput;
};

export type ReportUpdateWithoutReporterInput = {
  city_project?: InputMaybe<CityProjectUpdateOneWithoutReportNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  incident?: InputMaybe<IncidentUpdateOneWithoutReportNestedInput>;
  location?: InputMaybe<Scalars['JSON']>;
  report_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  report_type?: InputMaybe<EnumReportTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReportUpsertWithWhereUniqueWithoutReporterInput = {
  create: ReportCreateWithoutReporterInput;
  update: ReportUpdateWithoutReporterInput;
  where: ReportWhereUniqueInput;
};

export type ReportWhereInput = {
  AND?: InputMaybe<Array<ReportWhereInput>>;
  NOT?: InputMaybe<Array<ReportWhereInput>>;
  OR?: InputMaybe<Array<ReportWhereInput>>;
  city_project?: InputMaybe<CityProjectRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  incident?: InputMaybe<IncidentRelationFilter>;
  location?: InputMaybe<JsonFilter>;
  report_id?: InputMaybe<StringFilter>;
  report_type?: InputMaybe<EnumReportTypeFilter>;
  reporter?: InputMaybe<AccountRelationFilter>;
  reporter_id?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ReportWhereUniqueInput = {
  report_id?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type RegisterOneAccountMutationVariables = Exact<{
  data: AccountCreateInput;
}>;


export type RegisterOneAccountMutation = { __typename?: 'Mutation', registerOneAccount: { __typename?: 'Account', email: string, acc_type: AccType, designation: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type GetAllSearchResultQueryVariables = Exact<{
  searchString?: InputMaybe<Scalars['String']>;
}>;


export type GetAllSearchResultQuery = { __typename?: 'Query', reports: Array<{ __typename?: 'Report', report_id: string, report_type: ReportType, description: string, location: any }> };

export type GetCountOfIncidentQueryVariables = Exact<{
  reportType?: InputMaybe<ReportType>;
}>;


export type GetCountOfIncidentQuery = { __typename?: 'Query', aggregateReport: { __typename?: 'AggregateReport', _count?: { __typename?: 'ReportCountAggregate', report_type: number } | null } };

export type DeleteOneReportMutationVariables = Exact<{
  report_id?: InputMaybe<Scalars['String']>;
}>;


export type DeleteOneReportMutation = { __typename?: 'Mutation', deleteOneReport?: { __typename?: 'Report', report_id: string } | null };

export type UpdateOneReportMutationVariables = Exact<{
  report_id?: InputMaybe<Scalars['String']>;
  data: ReportUpdateInput;
}>;


export type UpdateOneReportMutation = { __typename?: 'Mutation', updateOneReport?: { __typename?: 'Report', report_id: string } | null };

export type GetOneReportQueryVariables = Exact<{
  reportId?: InputMaybe<Scalars['String']>;
}>;


export type GetOneReportQuery = { __typename?: 'Query', report?: { __typename?: 'Report', report_id: string, report_type: ReportType, location: any, description: string, incident?: { __typename?: 'Incident', date_started: any, date_ended: any } | null, city_project?: { __typename?: 'CityProject', project_name: string, contractor_name: string, date_started: any, date_ended: any, source_fund: string, project_ammount: number, contract_ammount: number } | null } | null };

export type GetAllReportsByAscOrderQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllReportsByAscOrderQuery = { __typename?: 'Query', reports: Array<{ __typename?: 'Report', report_id: string, report_type: ReportType, location: any }> };

export type GetAllReportsByDescOrderQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllReportsByDescOrderQuery = { __typename?: 'Query', reports: Array<{ __typename?: 'Report', report_id: string, report_type: ReportType, location: any }> };

export type PaginatedGetAllReportsByTypeQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  reportType?: InputMaybe<ReportType>;
}>;


export type PaginatedGetAllReportsByTypeQuery = { __typename?: 'Query', reports: Array<{ __typename?: 'Report', report_id: string, location: any, report_type: ReportType }> };

export type CreateOneReportMutationVariables = Exact<{
  data: CustomReportCreateInput;
}>;


export type CreateOneReportMutation = { __typename?: 'Mutation', createOneReport: { __typename?: 'Report', report_id: string, location: any, description: string, incident?: { __typename?: 'Incident', date_started: any, date_ended: any } | null } };

export type GetAllReportsWithDateCpQueryVariables = Exact<{
  reportType?: InputMaybe<ReportType>;
  date: Scalars['DateTime'];
}>;


export type GetAllReportsWithDateCpQuery = { __typename?: 'Query', reports: Array<{ __typename?: 'Report', location: any, report_id: string, report_type: ReportType, description: string, incident?: { __typename?: 'Incident', date_started: any, date_ended: any } | null, city_project?: { __typename?: 'CityProject', date_started: any, date_ended: any } | null }> };

export type GetAllReportsByTypeQueryVariables = Exact<{
  reportType?: InputMaybe<ReportType>;
}>;


export type GetAllReportsByTypeQuery = { __typename?: 'Query', reports: Array<{ __typename?: 'Report', location: any, report_id: string, report_type: ReportType, description: string, incident?: { __typename?: 'Incident', date_started: any, date_ended: any } | null, city_project?: { __typename?: 'CityProject', date_started: any, date_ended: any } | null }> };

export type GetAllReportsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllReportsQuery = { __typename?: 'Query', reports: Array<{ __typename?: 'Report', location: any, report_id: string, report_type: ReportType, description: string, incident?: { __typename?: 'Incident', date_started: any, date_ended: any } | null, city_project?: { __typename?: 'CityProject', date_started: any, date_ended: any } | null }> };

export type GetAllReportsWithDateQueryVariables = Exact<{
  reportType?: InputMaybe<ReportType>;
  date: Scalars['DateTime'];
}>;


export type GetAllReportsWithDateQuery = { __typename?: 'Query', reports: Array<{ __typename?: 'Report', location: any, report_id: string, report_type: ReportType, description: string, incident?: { __typename?: 'Incident', date_started: any, date_ended: any } | null, city_project?: { __typename?: 'CityProject', date_started: any, date_ended: any } | null }> };

export type GetAllActiveReportsQueryVariables = Exact<{
  currDate: Scalars['DateTime'];
}>;


export type GetAllActiveReportsQuery = { __typename?: 'Query', reports: Array<{ __typename?: 'Report', location: any, report_id: string, report_type: ReportType, description: string, incident?: { __typename?: 'Incident', date_started: any, date_ended: any } | null, city_project?: { __typename?: 'CityProject', date_started: any, date_ended: any } | null }> };

export type GetAllActiveReportsByTypeQueryVariables = Exact<{
  reportType?: InputMaybe<ReportType>;
  currDate: Scalars['DateTime'];
}>;


export type GetAllActiveReportsByTypeQuery = { __typename?: 'Query', reports: Array<{ __typename?: 'Report', location: any, report_id: string, report_type: ReportType, description: string, incident?: { __typename?: 'Incident', date_started: any, date_ended: any } | null, city_project?: { __typename?: 'CityProject', date_started: any, date_ended: any } | null }> };

export type LoginMutationVariables = Exact<{
  where?: InputMaybe<AccountWhereInput>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginResponseSuccess', accessToken: string, account: { __typename?: 'Account', acc_type: AccType } } | null };


export const RegisterOneAccountDocument = `
    mutation registerOneAccount($data: AccountCreateInput!) {
  registerOneAccount(data: $data) {
    email
    acc_type
    designation
  }
}
    `;
export const useRegisterOneAccountMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RegisterOneAccountMutation, TError, RegisterOneAccountMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RegisterOneAccountMutation, TError, RegisterOneAccountMutationVariables, TContext>(
      ['registerOneAccount'],
      (variables?: RegisterOneAccountMutationVariables) => fetcher<RegisterOneAccountMutation, RegisterOneAccountMutationVariables>(client, RegisterOneAccountDocument, variables, headers)(),
      options
    );
export const LogoutDocument = `
    mutation logout {
  logout
}
    `;
export const useLogoutMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LogoutMutation, TError, LogoutMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LogoutMutation, TError, LogoutMutationVariables, TContext>(
      ['logout'],
      (variables?: LogoutMutationVariables) => fetcher<LogoutMutation, LogoutMutationVariables>(client, LogoutDocument, variables, headers)(),
      options
    );
export const GetAllSearchResultDocument = `
    query getAllSearchResult($searchString: String) {
  reports(
    where: {OR: [{location: {path: ["addresses", "general_address"], string_contains: $searchString}}, {description: {contains: $searchString}}]}
  ) {
    report_id
    report_type
    description
    location
  }
}
    `;
export const useGetAllSearchResultQuery = <
      TData = GetAllSearchResultQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllSearchResultQueryVariables,
      options?: UseQueryOptions<GetAllSearchResultQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllSearchResultQuery, TError, TData>(
      variables === undefined ? ['getAllSearchResult'] : ['getAllSearchResult', variables],
      fetcher<GetAllSearchResultQuery, GetAllSearchResultQueryVariables>(client, GetAllSearchResultDocument, variables, headers),
      options
    );
export const GetCountOfIncidentDocument = `
    query GetCountOfIncident($reportType: ReportType) {
  aggregateReport(where: {report_type: {equals: $reportType}}) {
    _count {
      report_type
    }
  }
}
    `;
export const useGetCountOfIncidentQuery = <
      TData = GetCountOfIncidentQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetCountOfIncidentQueryVariables,
      options?: UseQueryOptions<GetCountOfIncidentQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCountOfIncidentQuery, TError, TData>(
      variables === undefined ? ['GetCountOfIncident'] : ['GetCountOfIncident', variables],
      fetcher<GetCountOfIncidentQuery, GetCountOfIncidentQueryVariables>(client, GetCountOfIncidentDocument, variables, headers),
      options
    );
export const DeleteOneReportDocument = `
    mutation deleteOneReport($report_id: String) {
  deleteOneReport(where: {report_id: $report_id}) {
    report_id
  }
}
    `;
export const useDeleteOneReportMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteOneReportMutation, TError, DeleteOneReportMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteOneReportMutation, TError, DeleteOneReportMutationVariables, TContext>(
      ['deleteOneReport'],
      (variables?: DeleteOneReportMutationVariables) => fetcher<DeleteOneReportMutation, DeleteOneReportMutationVariables>(client, DeleteOneReportDocument, variables, headers)(),
      options
    );
export const UpdateOneReportDocument = `
    mutation updateOneReport($report_id: String, $data: ReportUpdateInput!) {
  updateOneReport(where: {report_id: $report_id}, data: $data) {
    report_id
  }
}
    `;
export const useUpdateOneReportMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateOneReportMutation, TError, UpdateOneReportMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateOneReportMutation, TError, UpdateOneReportMutationVariables, TContext>(
      ['updateOneReport'],
      (variables?: UpdateOneReportMutationVariables) => fetcher<UpdateOneReportMutation, UpdateOneReportMutationVariables>(client, UpdateOneReportDocument, variables, headers)(),
      options
    );
export const GetOneReportDocument = `
    query GetOneReport($reportId: String) {
  report(where: {report_id: $reportId}) {
    report_id
    report_type
    location
    description
    incident {
      date_started
      date_ended
    }
    city_project {
      project_name
      contractor_name
      date_started
      date_ended
      source_fund
      project_ammount
      contract_ammount
    }
  }
}
    `;
export const useGetOneReportQuery = <
      TData = GetOneReportQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetOneReportQueryVariables,
      options?: UseQueryOptions<GetOneReportQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetOneReportQuery, TError, TData>(
      variables === undefined ? ['GetOneReport'] : ['GetOneReport', variables],
      fetcher<GetOneReportQuery, GetOneReportQueryVariables>(client, GetOneReportDocument, variables, headers),
      options
    );
export const GetAllReportsByAscOrderDocument = `
    query getAllReportsByAscOrder($take: Int, $skip: Int) {
  reports(orderBy: {createdAt: asc}, take: $take, skip: $skip) {
    report_id
    report_type
    location
  }
}
    `;
export const useGetAllReportsByAscOrderQuery = <
      TData = GetAllReportsByAscOrderQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllReportsByAscOrderQueryVariables,
      options?: UseQueryOptions<GetAllReportsByAscOrderQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllReportsByAscOrderQuery, TError, TData>(
      variables === undefined ? ['getAllReportsByAscOrder'] : ['getAllReportsByAscOrder', variables],
      fetcher<GetAllReportsByAscOrderQuery, GetAllReportsByAscOrderQueryVariables>(client, GetAllReportsByAscOrderDocument, variables, headers),
      options
    );
export const GetAllReportsByDescOrderDocument = `
    query getAllReportsByDescOrder($take: Int, $skip: Int) {
  reports(orderBy: {createdAt: desc}, take: $take, skip: $skip) {
    report_id
    report_type
    location
  }
}
    `;
export const useGetAllReportsByDescOrderQuery = <
      TData = GetAllReportsByDescOrderQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllReportsByDescOrderQueryVariables,
      options?: UseQueryOptions<GetAllReportsByDescOrderQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllReportsByDescOrderQuery, TError, TData>(
      variables === undefined ? ['getAllReportsByDescOrder'] : ['getAllReportsByDescOrder', variables],
      fetcher<GetAllReportsByDescOrderQuery, GetAllReportsByDescOrderQueryVariables>(client, GetAllReportsByDescOrderDocument, variables, headers),
      options
    );
export const PaginatedGetAllReportsByTypeDocument = `
    query PaginatedGetAllReportsByType($take: Int, $skip: Int, $reportType: ReportType) {
  reports(
    where: {report_type: {equals: $reportType}}
    take: $take
    skip: $skip
    orderBy: {createdAt: desc}
  ) {
    report_id
    location
    report_type
  }
}
    `;
export const usePaginatedGetAllReportsByTypeQuery = <
      TData = PaginatedGetAllReportsByTypeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: PaginatedGetAllReportsByTypeQueryVariables,
      options?: UseQueryOptions<PaginatedGetAllReportsByTypeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<PaginatedGetAllReportsByTypeQuery, TError, TData>(
      variables === undefined ? ['PaginatedGetAllReportsByType'] : ['PaginatedGetAllReportsByType', variables],
      fetcher<PaginatedGetAllReportsByTypeQuery, PaginatedGetAllReportsByTypeQueryVariables>(client, PaginatedGetAllReportsByTypeDocument, variables, headers),
      options
    );
export const CreateOneReportDocument = `
    mutation createOneReport($data: CustomReportCreateInput!) {
  createOneReport(data: $data) {
    report_id
    location
    description
    incident {
      date_started
      date_ended
    }
  }
}
    `;
export const useCreateOneReportMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateOneReportMutation, TError, CreateOneReportMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateOneReportMutation, TError, CreateOneReportMutationVariables, TContext>(
      ['createOneReport'],
      (variables?: CreateOneReportMutationVariables) => fetcher<CreateOneReportMutation, CreateOneReportMutationVariables>(client, CreateOneReportDocument, variables, headers)(),
      options
    );
export const GetAllReportsWithDateCpDocument = `
    query GetAllReportsWithDateCP($reportType: ReportType, $date: DateTime!) {
  reports(
    where: {AND: [{city_project: {is: {date_started: {equals: $date}}}}, {report_type: {equals: $reportType}}]}
  ) {
    location
    report_id
    report_type
    description
    incident {
      date_started
      date_ended
    }
    city_project {
      date_started
      date_ended
    }
  }
}
    `;
export const useGetAllReportsWithDateCpQuery = <
      TData = GetAllReportsWithDateCpQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAllReportsWithDateCpQueryVariables,
      options?: UseQueryOptions<GetAllReportsWithDateCpQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllReportsWithDateCpQuery, TError, TData>(
      ['GetAllReportsWithDateCP', variables],
      fetcher<GetAllReportsWithDateCpQuery, GetAllReportsWithDateCpQueryVariables>(client, GetAllReportsWithDateCpDocument, variables, headers),
      options
    );
export const GetAllReportsByTypeDocument = `
    query GetAllReportsByType($reportType: ReportType) {
  reports(where: {report_type: {equals: $reportType}}) {
    location
    report_id
    report_type
    description
    incident {
      date_started
      date_ended
    }
    city_project {
      date_started
      date_ended
    }
  }
}
    `;
export const useGetAllReportsByTypeQuery = <
      TData = GetAllReportsByTypeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllReportsByTypeQueryVariables,
      options?: UseQueryOptions<GetAllReportsByTypeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllReportsByTypeQuery, TError, TData>(
      variables === undefined ? ['GetAllReportsByType'] : ['GetAllReportsByType', variables],
      fetcher<GetAllReportsByTypeQuery, GetAllReportsByTypeQueryVariables>(client, GetAllReportsByTypeDocument, variables, headers),
      options
    );
export const GetAllReportsDocument = `
    query getAllReports {
  reports {
    location
    report_id
    report_type
    description
    incident {
      date_started
      date_ended
    }
    city_project {
      date_started
      date_ended
    }
  }
}
    `;
export const useGetAllReportsQuery = <
      TData = GetAllReportsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllReportsQueryVariables,
      options?: UseQueryOptions<GetAllReportsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllReportsQuery, TError, TData>(
      variables === undefined ? ['getAllReports'] : ['getAllReports', variables],
      fetcher<GetAllReportsQuery, GetAllReportsQueryVariables>(client, GetAllReportsDocument, variables, headers),
      options
    );
export const GetAllReportsWithDateDocument = `
    query GetAllReportsWithDate($reportType: ReportType, $date: DateTime!) {
  reports(
    where: {AND: [{incident: {is: {date_started: {equals: $date}}}}, {report_type: {equals: $reportType}}]}
  ) {
    location
    report_id
    report_type
    description
    incident {
      date_started
      date_ended
    }
    city_project {
      date_started
      date_ended
    }
  }
}
    `;
export const useGetAllReportsWithDateQuery = <
      TData = GetAllReportsWithDateQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAllReportsWithDateQueryVariables,
      options?: UseQueryOptions<GetAllReportsWithDateQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllReportsWithDateQuery, TError, TData>(
      ['GetAllReportsWithDate', variables],
      fetcher<GetAllReportsWithDateQuery, GetAllReportsWithDateQueryVariables>(client, GetAllReportsWithDateDocument, variables, headers),
      options
    );
export const GetAllActiveReportsDocument = `
    query GetAllActiveReports($currDate: DateTime!) {
  reports(
    where: {AND: [{OR: [{AND: [{incident: {is: {date_ended: {gte: $currDate}}}}]}, {AND: [{city_project: {is: {date_ended: {gte: $currDate}}}}]}]}]}
  ) {
    location
    report_id
    report_type
    description
    incident {
      date_started
      date_ended
    }
    city_project {
      date_started
      date_ended
    }
  }
}
    `;
export const useGetAllActiveReportsQuery = <
      TData = GetAllActiveReportsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAllActiveReportsQueryVariables,
      options?: UseQueryOptions<GetAllActiveReportsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllActiveReportsQuery, TError, TData>(
      ['GetAllActiveReports', variables],
      fetcher<GetAllActiveReportsQuery, GetAllActiveReportsQueryVariables>(client, GetAllActiveReportsDocument, variables, headers),
      options
    );
export const GetAllActiveReportsByTypeDocument = `
    query GetAllActiveReportsByType($reportType: ReportType, $currDate: DateTime!) {
  reports(
    where: {report_type: {equals: $reportType}, AND: [{OR: [{AND: [{incident: {is: {date_ended: {gte: $currDate}}}}]}, {AND: [{city_project: {is: {date_ended: {gte: $currDate}}}}]}]}]}
  ) {
    location
    report_id
    report_type
    description
    incident {
      date_started
      date_ended
    }
    city_project {
      date_started
      date_ended
    }
  }
}
    `;
export const useGetAllActiveReportsByTypeQuery = <
      TData = GetAllActiveReportsByTypeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetAllActiveReportsByTypeQueryVariables,
      options?: UseQueryOptions<GetAllActiveReportsByTypeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllActiveReportsByTypeQuery, TError, TData>(
      ['GetAllActiveReportsByType', variables],
      fetcher<GetAllActiveReportsByTypeQuery, GetAllActiveReportsByTypeQueryVariables>(client, GetAllActiveReportsByTypeDocument, variables, headers),
      options
    );
export const LoginDocument = `
    mutation login($where: AccountWhereInput) {
  login(where: $where) {
    accessToken
    account {
      acc_type
    }
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables, headers)(),
      options
    );