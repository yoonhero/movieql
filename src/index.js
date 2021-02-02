import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/resolvers.js",
  resolvers
});

server.start(() => console.log("Graphql Server Running"));
