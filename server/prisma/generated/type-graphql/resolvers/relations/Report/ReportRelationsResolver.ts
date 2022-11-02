import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { CityProject } from "../../../models/CityProject";
import { Incident } from "../../../models/Incident";
import { Report } from "../../../models/Report";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Report)
export class ReportRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Account, {
    nullable: true
  })
  async reporter(@TypeGraphQL.Root() report: Report, @TypeGraphQL.Ctx() ctx: any): Promise<Account | null> {
    return getPrismaFromContext(ctx).report.findUnique({
      where: {
        report_id: report.report_id,
      },
    }).reporter({});
  }

  @TypeGraphQL.FieldResolver(_type => CityProject, {
    nullable: true
  })
  async city_porject(@TypeGraphQL.Root() report: Report, @TypeGraphQL.Ctx() ctx: any): Promise<CityProject | null> {
    return getPrismaFromContext(ctx).report.findUnique({
      where: {
        report_id: report.report_id,
      },
    }).city_porject({});
  }

  @TypeGraphQL.FieldResolver(_type => Incident, {
    nullable: true
  })
  async incident(@TypeGraphQL.Root() report: Report, @TypeGraphQL.Ctx() ctx: any): Promise<Incident | null> {
    return getPrismaFromContext(ctx).report.findUnique({
      where: {
        report_id: report.report_id,
      },
    }).incident({});
  }
}
