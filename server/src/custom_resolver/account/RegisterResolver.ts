import { Context } from "src/Context";

import { Args, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Account, CreateOneAccountArgs} from "../../../prisma/generated/type-graphql"

import { createUser } from "./utils/account.service";
import { isAuth } from "./middleware/isAuth";


@Resolver(() => Account)
export class RegisterResolver {

    @Mutation(() => Account) 
    @UseMiddleware(isAuth)
    async register(
        @Args() args: CreateOneAccountArgs,
        @Ctx() ctx: Context
    ): Promise<Account> {

        try{
            const account = await createUser(args,ctx);
            // TODO: Create Error Handling and Validation
            return account;
        }catch(err){ 
            console.log(err);
            throw err;

        }
    }
}