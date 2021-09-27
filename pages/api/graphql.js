import { gql, ApolloServer } from "apollo-server-micro";
// import { PrismaClient } from "@prisma/client";
import {typeDefs} from '../../apollo/type-defs'

// const prisma = new PrismaClient();

// const typeDefs = gql`
//   type BlogPost {
//     id: String
//     text: String
//   }
//    type Query {
//     blogPosts: BlogPost
//   }
// `;

const resolvers = {
  Query: {
    viewer: (_parent, _args, _context) => {
      return { id: "yoo", text: "brooo" }
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = { api: { bodyParser: false } };

export default handler;
