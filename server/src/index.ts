import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import { createExpress } from "./createExpress";

import { resolver } from "./ResolverSchema";
import { Context } from "./Context";

import { enhanceMaps } from "./enhanceMaps";
import { myFormatError } from "./errorFromatter";

enhanceMaps();

const main = async () => {
  const schema = await buildSchema({
    resolvers: resolver,
    emitSchemaFile: true,
    validate: {
      forbidUnknownValues: false,
      validationError: {
        target: false,
        value: false,
      },
    },
  });

  const prisma = new PrismaClient();

  const server = new ApolloServer({
    schema,
    context: ({ req, res }): Context => ({ prisma, res, req }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    // * comment it out if you want to turn on the developers errors. 
    formatError: myFormatError,
    debug: process.env.NODE_ENV === "development",
  });

  await server.start();

  const { app } = await createExpress();

  server.applyMiddleware({ app, cors: false });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () =>
    console.log(`server started at http://localhost:${PORT}/graphql`)
  );
};

main().catch((err) => {
  console.log(err);
});
