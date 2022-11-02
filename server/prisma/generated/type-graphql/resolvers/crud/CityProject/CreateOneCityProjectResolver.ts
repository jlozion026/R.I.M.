import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneCityProjectArgs } from "./args/CreateOneCityProjectArgs";
import { CityProject } from "../../../models/CityProject";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CityProject)
export class CreateOneCityProjectResolver {
  @TypeGraphQL.Mutation(_returns => CityProject, {
    nullable: false
  })
  async createOneCityProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCityProjectArgs): Promise<CityProject> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cityProject.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
