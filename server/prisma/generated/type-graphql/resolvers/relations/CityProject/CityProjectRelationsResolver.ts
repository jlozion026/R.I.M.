import * as TypeGraphQL from "type-graphql";
import { CityProject } from "../../../models/CityProject";
import { Report } from "../../../models/Report";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CityProject)
export class CityProjectRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Report, {
    nullable: false
  })
  async report(@TypeGraphQL.Root() cityProject: CityProject, @TypeGraphQL.Ctx() ctx: any): Promise<Report> {
    return getPrismaFromContext(ctx).cityProject.findUnique({
      where: {
        project_id: cityProject.project_id,
      },
    }).report({});
  }
}
