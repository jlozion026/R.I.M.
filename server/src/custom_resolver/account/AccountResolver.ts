import { PrismaClient } from "@prisma/client";
import { Args, Ctx, Mutation, Resolver } from "type-graphql";
import { Account, CreateOneAccountArgs, FindFirstAccountArgs} from "../../../prisma/generated/type-graphql"
import argon2 from "argon2"
import { ApolloError } from "apollo-server-express";

@Resolver(() => Account)
export class AccountResolver {
    // Register Mutation: It allows the user to create new Account

    @Mutation(() => Account) 
    async register(
        @Args() args: CreateOneAccountArgs,
        @Ctx() ctx: { prisma: PrismaClient }
    ): Promise<Account> {
        try{
            const hashedPassword = await argon2.hash(args.data.password)
            
            const account = await ctx.prisma.account.create({
                data: {
                    email: args.data.email,
                    password: hashedPassword, 
                    acc_type: args.data.acc_type
                }
            });
            return account;
        }catch(e){ 
            throw e;
        }
    }
    // Login Mutation: It checks the users login credentials

    @Mutation(() => Account) 
    async login(
        @Args() args: FindFirstAccountArgs,
        @Ctx() ctx: { prisma: PrismaClient }
    ): Promise<Account | null>  {
        try {

            /* The account finds the email and will check if the email inputted is in the database*/
            const account = await ctx.prisma.account.findFirst({
                where: {
                    email: args.where?.email?.equals
                } 
            });

            /* Else if the account is not available, then throw this error */
            if (!account) {
                throw new ApolloError("Invalid credentials")
            }
            /* The isValid will decrypt the hashed password created by argon 2 and check it to the database 
            NOTE!: The <string | Buffer > typecast the args.where?.password?.equals*/
            const isValid = argon2.verify(account.password, (<string | Buffer>args.where?.password?.equals)); 
            /* Else if the password is not equal, then throw this error */
            if(!isValid){
                throw new ApolloError("Invalid credentials");
            }
            
            return account;

        } catch(e) {
            throw e;
        }
    }
}