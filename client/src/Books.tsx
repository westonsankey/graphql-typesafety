import { useQuery } from "@apollo/client";
import { graphql } from "./gql";
import { BooksQueryDocument } from "./gql/graphql";

const BooksQuery = graphql(/* GraphQL */ `
  query BooksQuery {
    books {
      id
      title
    }
  }
`);

export const Books = () => {
  const { data, loading } = useQuery(BooksQuery);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {data?.books.map((book) => {
          return <li key={book.id}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
};
