import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ReportCreateManyReporterInput", {
  isAbstract: true
})
export class ReportCreateManyReporterInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  report_id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  location!: Prisma.InputJsonValue;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;
}
