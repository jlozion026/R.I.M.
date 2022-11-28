import { Args, Ctx, Field, Mutation, ObjectType, Resolver } from "type-graphql";
import { ApolloError } from "apollo-server-express";

import { Context } from "src/Context";

import { Account,  FindFirstAccountArgs} from "../../../prisma/generated/type-graphql";

import { findUserByEmail,  verifyPassword } from "./utils/account.service";
import { createAccessToken, createRefreshToken } from "./utils/Auth";
import { sendRefreshToken } from "./utils/sendRefreshToken";


@ObjectType()
class LoginResponse{
    @Field()
    accessToken: String;
}

@Resolver(() => Account)
export class LoginResolver {

    @Mutation(() => LoginResponse, {nullable: true}) 
    async login(
        @Args() args: FindFirstAccountArgs,
        @Ctx() ctx : Context,
        @Ctx() {res}: Context
    ): Promise<LoginResponse| null>  {
        try {
            
            const account = await findUserByEmail(args, ctx);
            if (!account) {
                throw new ApolloError("Inval Credentials", "VALIDATION_FAILED")
                // TODO: Create Error Handling
            }
            
            const isValid = await verifyPassword({
                password: account.password, 
                candidatePassword: (<string|Buffer>args.where?.password?.equals) // !Typecasted because returning different type 

            }); 
            if(!isValid){
                throw new ApolloError("Invalid Credentials");
                // TODO: Create Error Handling
            }

            // *Refresh Token
            sendRefreshToken(res, createRefreshToken(account))
            
            // *Access Token 
            return {
                accessToken: createAccessToken(account)
            }

        } catch(e) {
            throw e;
        }
    }


}