import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateNestedOneWithoutIncidentInput } from "../inputs/ReportCreateNestedOneWithoutIncidentInput";

@TypeGraphQL.InputType("IncidentCreateInput", {
  isAbstract: true
})
export class IncidentCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  incident_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  incident_type!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_started!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_ended!: Date;

  @TypeGraphQL.Field(_type => ReportCreateNestedOneWithoutIncidentInput, {
    nullable: false
  })
  report!: ReportCreateNestedOneWithoutIncidentInput;
}
