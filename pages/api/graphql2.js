import { gql, ApolloServer } from 'apollo-server-micro'
// import { ApolloServer } from 'apollo-server'
// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { schema } from '../../apollo/schema'

const typeDefs = gql`
 type User {
    id: ID!
    name: String!
    status: String!
  }

  type Query {
    viewer: User
  }
`;

const resolvers = {
  Query: {
    viewer(_parent, _args, _context, _info) {
      console.log({ id: 1, name: 'John Smith', status: 'cached' })
      return { id: 1, name: 'John Smith', status: 'cached' }
    },
  }

};

// const apolloServer = new ApolloServer({ schema });
const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = { api: { bodyParser: false } };

export default handler;

// module.exports = apolloServer.start().then(() => {
//   return handler;
// });

// export default handler;
// await apolloServer.start()
// await apolloServer.listen()

  

// export default apolloServer.createHandler({ path: '/api/graphql' });

// module.exports = apolloServer.start().then(() => {
//   return apolloServer.createHandler({ path: '/api/graphql' });
// });


