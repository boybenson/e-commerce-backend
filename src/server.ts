import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers/index.js";
import typeDefs from "./typeDefs/index.js";
import dbInit from "./models/init.js";
import appConfig from "./config/appconfig.js";

const server = new ApolloServer({ typeDefs, resolvers });

dbInit();
const { url } = await startStandaloneServer(server, {
  listen: { port: appConfig.port },
});

console.log(`🚀  Server ready at: ${url}`);
