import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers/index.js";
import typeDefs from "./typeDefs/index.js";
import dbInit from "./models/init.js";

const server = new ApolloServer({ typeDefs, resolvers });

dbInit();
const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 },
});

console.log(`🚀  Server ready at: ${url}`);
