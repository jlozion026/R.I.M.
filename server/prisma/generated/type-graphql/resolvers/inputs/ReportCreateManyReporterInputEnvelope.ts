import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateManyReporterInput } from "../inputs/ReportCreateManyReporterInput";

@TypeGraphQL.InputType("ReportCreateManyReporterInputEnvelope", {
  isAbstract: true
})
export class ReportCreateManyReporterInputEnvelope {
  @TypeGraphQL.Field(_type => [ReportCreateManyReporterInput], {
    nullable: false
  })
  data!: ReportCreateManyReporterInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
