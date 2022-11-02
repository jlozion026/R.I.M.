import 'reflect-metadata';
import { buildSchema } from "type-graphql";
import { PrismaClient } from '@prisma/client';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import { ApolloServer } from 'apollo-server-express';
import express, { Express } from 'express';

import {
  FindManyAccountResolver,
  FindUniqueAccountResolver,
  CreateOneAccountResolver
} from '../prisma/generated/type-graphql';

interface Context {
  prisma: PrismaClient;
}

const main = async () => {

  const schema = await buildSchema({
    resolvers: [
      FindManyAccountResolver,
      FindUniqueAccountResolver,
      CreateOneAccountResolver
    ],
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
