import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Account } from "../models/Account";
import { CityProject } from "../models/CityProject";
import { Incident } from "../models/Incident";

@TypeGraphQL.ObjectType("Report", {
  isAbstract: true
})
export class Report {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  report_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  published!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  location!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  reporter?: Account | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reporter_id?: string | null;

  city_porject?: CityProject | null;

  incident?: Incident | null;
}
