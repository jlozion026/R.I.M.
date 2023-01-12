import * as TypeGraphQL from "type-graphql";
import {Account} from "../../../prisma/generated/type-graphql";
import {getPrismaFromContext} from "../../../prisma/generated/type-graphql/helpers";
import argon2 from "argon2";
import { CustomUpdateOneAccountArgs } from "./args/CustomUpdateOneAccountArgs";
import { isAuth } from "./middleware/isAuth";
import { UseMiddleware } from "type-graphql";

@TypeGraphQL.Resolver((_of) => Account)
export class UpdateAccountResolver {
  @UseMiddleware(isAuth)
  @TypeGraphQL.Mutation((_returns) => Account, {
    nullable: true,
  })
  async updateOneAccount(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: CustomUpdateOneAccountArgs
  ): Promise<Account | null> {
    
    const password = args.data.password?.set ?? "testpass1234";
    const hashedPassword = await argon2.hash(password);
    
    return getPrismaFromContext(ctx).account.update({
      ...args,
      data: {
        ...args.data,
        password: hashedPassword,
      },
    });
  }
}
