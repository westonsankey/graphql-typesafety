import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

let client: ApolloClient<NormalizedCacheObject>;

export const getApolloClient = (forceNew?: boolean) => {
  if (!client || forceNew) {
    client = new ApolloClient({
      uri: "http://localhost:4000",
      cache: new InMemoryCache(),
    });
  }

  return client;
};
