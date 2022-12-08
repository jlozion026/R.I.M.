// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
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
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AccountCount = {
  __typename?: 'AccountCount';
  reports: Scalars['Int'];
};

export type AccountCreateInput = {
  acc_id?: InputMaybe<Scalars['String']>;
  acc_type: AccType;
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
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AccountOrderByWithRelationInput = {
  acc_id?: InputMaybe<SortOrder>;
  acc_type?: InputMaybe<SortOrder>;
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
  Email = 'email',
  Password = 'password'
}

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  acc_id?: InputMaybe<StringFilter>;
  acc_type?: InputMaybe<EnumAccTypeFilter>;
  email?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  reports?: InputMaybe<ReportListRelationFilter>;
};

export type AccountWhereUniqueInput = {
  acc_id?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
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
  reports_id: Scalars['String'];
  source_fund: Scalars['String'];
};

export type CityProjectCreateInput = {
  contract_ammount: Scalars['Float'];
  contractor_name: Scalars['String'];
  date_ended: Scalars['DateTime'];
  date_started: Scalars['DateTime'];
  project_ammount: Scalars['Float'];
  project_id?: InputMaybe<Scalars['String']>;
  project_name: Scalars['String'];
  report: ReportCreateNestedOneWithoutCity_PorjectInput;
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

export type EnumAccTypeFilter = {
  equals?: InputMaybe<AccType>;
  in?: InputMaybe<Array<AccType>>;
  not?: InputMaybe<NestedEnumAccTypeFilter>;
  notIn?: InputMaybe<Array<AccType>>;
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
  incident_type: Scalars['String'];
  reports_id: Scalars['String'];
};

export type IncidentCreateInput = {
  date_ended: Scalars['DateTime'];
  date_started: Scalars['DateTime'];
  incident_id?: InputMaybe<Scalars['String']>;
  incident_type: Scalars['String'];
  report: ReportCreateNestedOneWithoutIncidentInput;
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
  incident_type: Scalars['String'];
};

export type IncidentOrderByWithRelationInput = {
  date_ended?: InputMaybe<SortOrder>;
  date_started?: InputMaybe<SortOrder>;
  incident_id?: InputMaybe<SortOrder>;
  incident_type?: InputMaybe<SortOrder>;
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
  IncidentType = 'incident_type',
  ReportsId = 'reports_id'
}

export type IncidentWhereInput = {
  AND?: InputMaybe<Array<IncidentWhereInput>>;
  NOT?: InputMaybe<Array<IncidentWhereInput>>;
  OR?: InputMaybe<Array<IncidentWhereInput>>;
  date_ended?: InputMaybe<DateTimeFilter>;
  date_started?: InputMaybe<DateTimeFilter>;
  incident_id?: InputMaybe<StringFilter>;
  incident_type?: InputMaybe<StringFilter>;
  report?: InputMaybe<ReportRelationFilter>;
  reports_id?: InputMaybe<StringFilter>;
};

export type IncidentWhereUniqueInput = {
  incident_id?: InputMaybe<Scalars['String']>;
  reports_id?: InputMaybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneCityProject: CityProject;
  createOneIncident: Incident;
  createOneReport: Report;
  login?: Maybe<LoginResponse>;
  register: Account;
};


export type MutationCreateOneCityProjectArgs = {
  data: CityProjectCreateInput;
};


export type MutationCreateOneIncidentArgs = {
  data: IncidentCreateInput;
};


export type MutationCreateOneReportArgs = {
  data: ReportCreateInput;
};


export type MutationLoginArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationRegisterArgs = {
  data: AccountCreateInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
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

export type Query = {
  __typename?: 'Query';
  accounts: Array<Account>;
  cityProjects: Array<CityProject>;
  incidents: Array<Incident>;
  reports: Array<Report>;
};


export type QueryAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryCityProjectsArgs = {
  cursor?: InputMaybe<CityProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<CityProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CityProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CityProjectWhereInput>;
};


export type QueryIncidentsArgs = {
  cursor?: InputMaybe<IncidentWhereUniqueInput>;
  distinct?: InputMaybe<Array<IncidentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IncidentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IncidentWhereInput>;
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
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  location: Scalars['String'];
  published: Scalars['Boolean'];
  report_id: Scalars['String'];
  reporter_id?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ReportCreateInput = {
  city_porject?: InputMaybe<CityProjectCreateNestedOneWithoutReportInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  incident?: InputMaybe<IncidentCreateNestedOneWithoutReportInput>;
  location: Scalars['String'];
  published: Scalars['Boolean'];
  report_id?: InputMaybe<Scalars['String']>;
  reporter?: InputMaybe<AccountCreateNestedOneWithoutReportsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ReportCreateManyReporterInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  location: Scalars['String'];
  published: Scalars['Boolean'];
  report_id?: InputMaybe<Scalars['String']>;
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

export type ReportCreateNestedOneWithoutCity_PorjectInput = {
  connect?: InputMaybe<ReportWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ReportCreateOrConnectWithoutCity_PorjectInput>;
  create?: InputMaybe<ReportCreateWithoutCity_PorjectInput>;
};

export type ReportCreateNestedOneWithoutIncidentInput = {
  connect?: InputMaybe<ReportWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ReportCreateOrConnectWithoutIncidentInput>;
  create?: InputMaybe<ReportCreateWithoutIncidentInput>;
};

export type ReportCreateOrConnectWithoutCity_PorjectInput = {
  create: ReportCreateWithoutCity_PorjectInput;
  where: ReportWhereUniqueInput;
};

export type ReportCreateOrConnectWithoutIncidentInput = {
  create: ReportCreateWithoutIncidentInput;
  where: ReportWhereUniqueInput;
};

export type ReportCreateOrConnectWithoutReporterInput = {
  create: ReportCreateWithoutReporterInput;
  where: ReportWhereUniqueInput;
};

export type ReportCreateWithoutCity_PorjectInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  incident?: InputMaybe<IncidentCreateNestedOneWithoutReportInput>;
  location: Scalars['String'];
  published: Scalars['Boolean'];
  report_id?: InputMaybe<Scalars['String']>;
  reporter?: InputMaybe<AccountCreateNestedOneWithoutReportsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ReportCreateWithoutIncidentInput = {
  city_porject?: InputMaybe<CityProjectCreateNestedOneWithoutReportInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  location: Scalars['String'];
  published: Scalars['Boolean'];
  report_id?: InputMaybe<Scalars['String']>;
  reporter?: InputMaybe<AccountCreateNestedOneWithoutReportsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ReportCreateWithoutReporterInput = {
  city_porject?: InputMaybe<CityProjectCreateNestedOneWithoutReportInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  incident?: InputMaybe<IncidentCreateNestedOneWithoutReportInput>;
  location: Scalars['String'];
  published: Scalars['Boolean'];
  report_id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ReportListRelationFilter = {
  every?: InputMaybe<ReportWhereInput>;
  none?: InputMaybe<ReportWhereInput>;
  some?: InputMaybe<ReportWhereInput>;
};

export type ReportOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReportOrderByWithRelationInput = {
  city_porject?: InputMaybe<CityProjectOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  incident?: InputMaybe<IncidentOrderByWithRelationInput>;
  location?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  report_id?: InputMaybe<SortOrder>;
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
  Published = 'published',
  ReportId = 'report_id',
  ReporterId = 'reporter_id',
  UpdatedAt = 'updatedAt'
}

export type ReportWhereInput = {
  AND?: InputMaybe<Array<ReportWhereInput>>;
  NOT?: InputMaybe<Array<ReportWhereInput>>;
  OR?: InputMaybe<Array<ReportWhereInput>>;
  city_porject?: InputMaybe<CityProjectRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  incident?: InputMaybe<IncidentRelationFilter>;
  location?: InputMaybe<StringFilter>;
  published?: InputMaybe<BoolFilter>;
  report_id?: InputMaybe<StringFilter>;
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

export type LoginMutationVariables = Exact<{
  where?: InputMaybe<AccountWhereInput>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginResponse', accessToken: string } | null };


export const LoginDocument = `
    mutation login($where: AccountWhereInput) {
  login(where: $where) {
    accessToken
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