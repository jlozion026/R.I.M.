import * as TypeGraphQL from "type-graphql";
import { Incident } from "../../../models/Incident";
import { Report } from "../../../models/Report";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Incident)
export class IncidentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Report, {
    nullable: false
  })
  async report(@TypeGraphQL.Root() incident: Incident, @TypeGraphQL.Ctx() ctx: any): Promise<Report> {
    return getPrismaFromContext(ctx).incident.findUnique({
      where: {
        incident_id: incident.incident_id,
      },
    }).report({});
  }
}
