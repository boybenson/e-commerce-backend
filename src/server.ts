import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { startStandaloneServer } from "@apollo/server/standalone";
import express, { Request, Response } from "express";
import http from "http";
import cors from "cors";
import resolvers from "./graphql/resolvers/index.js";
import typeDefs from "./graphql/typeDefs/index.js";
import dbInit from "./models/init.js";
import appConfig from "./config/appconfig.js";

interface MyContext {
  token?: String;
}

dbInit();

const app = express();
const httpServer = http.createServer(app);

// const server = new ApolloServer({ typeDefs, resolvers });
const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/graphql",
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

app.get("/test", (req: Request, res: Response) => {
  res.json({
    message: "Hello world",
  });
});

await new Promise<void>((resolve) =>
  httpServer.listen({ port: appConfig.port }, resolve)
);
console.log(`🚀 Server ready at http://localhost:${appConfig.port}/graphql`);
