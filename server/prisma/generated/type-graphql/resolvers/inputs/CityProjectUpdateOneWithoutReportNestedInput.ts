import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityProjectCreateOrConnectWithoutReportInput } from "../inputs/CityProjectCreateOrConnectWithoutReportInput";
import { CityProjectCreateWithoutReportInput } from "../inputs/CityProjectCreateWithoutReportInput";
import { CityProjectUpdateWithoutReportInput } from "../inputs/CityProjectUpdateWithoutReportInput";
import { CityProjectUpsertWithoutReportInput } from "../inputs/CityProjectUpsertWithoutReportInput";
import { CityProjectWhereUniqueInput } from "../inputs/CityProjectWhereUniqueInput";

@TypeGraphQL.InputType("CityProjectUpdateOneWithoutReportNestedInput", {
  isAbstract: true
})
export class CityProjectUpdateOneWithoutReportNestedInput {
  @TypeGraphQL.Field(_type => CityProjectCreateWithoutReportInput, {
    nullable: true
  })
  create?: CityProjectCreateWithoutReportInput | undefined;

  @TypeGraphQL.Field(_type => CityProjectCreateOrConnectWithoutReportInput, {
    nullable: true
  })
  connectOrCreate?: CityProjectCreateOrConnectWithoutReportInput | undefined;

  @TypeGraphQL.Field(_type => CityProjectUpsertWithoutReportInput, {
    nullable: true
  })
  upsert?: CityProjectUpsertWithoutReportInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CityProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: CityProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CityProjectUpdateWithoutReportInput, {
    nullable: true
  })
  update?: CityProjectUpdateWithoutReportInput | undefined;
}
