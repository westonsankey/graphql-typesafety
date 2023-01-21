import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book!]!
  }
`;

const books = [
  {
    id: 1,
    title: "Mistborn",
    author: "Brandon Sanderson",
  },
  {
    id: 2,
    title: "Leviathan Wakes",
    author: "James S. A. Corey",
  },
  {
    id: 3,
    title: "Red Rising",
    author: "Pierce Brown",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);
