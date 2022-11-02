import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { Report } from "../../../models/Report";
import { AccountReportsArgs } from "./args/AccountReportsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Account)
export class AccountRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Report], {
    nullable: false
  })
  async reports(@TypeGraphQL.Root() account: Account, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AccountReportsArgs): Promise<Report[]> {
    return getPrismaFromContext(ctx).account.findUnique({
      where: {
        acc_id: account.acc_id,
      },
    }).reports(args);
  }
}
