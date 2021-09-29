import { gql, ApolloServer } from "apollo-server-micro";
// import { PrismaClient } from "@prisma/client";
import {typeDefs} from '../../apollo/type-defs'
import {resolvers} from '../../apollo/resolvers'
import dbConnect from '../../utils/dbConnect';
import Item from '../../models/Item';

dbConnect("global");
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

// const resolvers = {
//   Query: {
//     prodtypes: (_parent, _args, _context) => {
//       // return { id: "yoo", text: "brooo" }
//       const types = Item.distinct("productType")
//       console.log(types)
//       return types
//     },
//   },
// };

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = { api: { bodyParser: false } };

export default handler;
