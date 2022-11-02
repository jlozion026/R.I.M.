import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateNestedOneWithoutCity_porjectInput } from "../inputs/ReportCreateNestedOneWithoutCity_porjectInput";

@TypeGraphQL.InputType("CityProjectCreateInput", {
  isAbstract: true
})
export class CityProjectCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  project_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  contractor_name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_started!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_ended!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  source_fund!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  project_ammount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  contract_ammount!: number;

  @TypeGraphQL.Field(_type => ReportCreateNestedOneWithoutCity_porjectInput, {
    nullable: false
  })
  report!: ReportCreateNestedOneWithoutCity_porjectInput;
}
