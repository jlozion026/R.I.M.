import 'reflect-metadata';
import { buildSchema, NonEmptyArray } from "type-graphql";
import { PrismaClient } from '@prisma/client';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express, { Express } from 'express';
import {
  FindManyAccountResolver,
  FindUniqueAccountResolver,
  CreateOneAccountResolver,
  FindFirstAccountResolver
} from '../prisma/generated/type-graphql';
import { AccountResolver } from './custom_resolver/account/AccountResolver';


interface Context {
  prisma: PrismaClient;
}


const main = async () => {
  const resolver =  [
    FindManyAccountResolver,
    FindUniqueAccountResolver,
    CreateOneAccountResolver,
    AccountResolver,
    FindFirstAccountResolver
    ] as NonEmptyArray<Function>
    resolver.concat(AccountResolver) as NonEmptyArray<Function>
  const schema = await buildSchema({
    resolvers: resolver,
    emitSchemaFile: true,
    validate: false
  })

  const prisma = new PrismaClient();
  
  await prisma.$connect();

  const server = new ApolloServer({
    schema,
    context: (): Context => ({ prisma }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
  })

  await server.start();
  const app: Express = express();

  server.applyMiddleware({ app })

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}/graphql`))
}


main().catch((err) => {
  console.log(err);
})


