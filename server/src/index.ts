import 'reflect-metadata';
import { buildSchema } from "type-graphql";
import { PrismaClient } from '@prisma/client';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express, { Express } from 'express';

import { Context } from './Context';

import { applyResolversEnhanceMap } from '../prisma/generated/type-graphql';
import resolversEnhanceMap from './config';
import { resolver } from './ResolverSchema';

import cookieParser from 'cookie-parser';
import { verify } from 'jsonwebtoken';
import { createAccessToken, createRefreshToken } from './custom_resolver/account/utils/Auth';
import { sendRefreshToken } from './custom_resolver/account/utils/sendRefreshToken';

import cors from 'cors';



applyResolversEnhanceMap(resolversEnhanceMap);

const main = async () => {
  const schema = await buildSchema({
    resolvers: resolver,
    emitSchemaFile: true,
    validate: false
  })

  const prisma = new PrismaClient();

  const server = new ApolloServer({
    schema,
    context: ({ req, res }): Context => ({ prisma, res, req }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
  })

  await server.start();
  const app: Express = express();
  app.use(
    cors({
      origin: 'http://127.0.0.1:5173',
      credentials: true
    })
  )

  app.use(cookieParser())

  app.post("/refresh_token", async (req, res) => {
    const token = req.cookies.jid
    
    if (!token) {
      return res.send({ ok: false, accessToken: "" })
    }

    let payload: any = null;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET!)

    } catch (err) {
      console.log(err)
      return res.send({ ok: false, accessToken: "" })
    }

    const account = await prisma.account.findFirst(payload.accId)

    if (!account) {
      return res.send({ ok: false, accessToken: "" })
    }

    sendRefreshToken(res, createRefreshToken(account))

    return res.send({ ok: true, accessToken: createAccessToken(account) })

  });


  server.applyMiddleware({ app, cors: false })

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}/graphql`))
}


main().catch((err) => {
  console.log(err);
})


