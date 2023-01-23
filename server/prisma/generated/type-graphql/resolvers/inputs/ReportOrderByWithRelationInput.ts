import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountOrderByWithRelationInput } from "../inputs/AccountOrderByWithRelationInput";
import { CityProjectOrderByWithRelationInput } from "../inputs/CityProjectOrderByWithRelationInput";
import { IncidentOrderByWithRelationInput } from "../inputs/IncidentOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReportOrderByWithRelationInput", {
  isAbstract: true
})
export class ReportOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  report_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  report_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AccountOrderByWithRelationInput, {
    nullable: true
  })
  reporter?: AccountOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reporter_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CityProjectOrderByWithRelationInput, {
    nullable: true
  })
  city_project?: CityProjectOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => IncidentOrderByWithRelationInput, {
    nullable: true
  })
  incident?: IncidentOrderByWithRelationInput | undefined;
}
