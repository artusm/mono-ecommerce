import fetch from 'isomorphic-unfetch'
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const createHttpLink = (headers) => {
  const httpLink = new HttpLink({
    uri: process.env['NX_GRAPHQL_URL'] ?? 'http://localhost:1337/graphql',
    credentials: 'include',
    headers,
    fetch,
  });

  return httpLink;
};

export default function createApolloClient(initialState, headers) {
  const ssrMode = typeof window === 'undefined';
  const link = createHttpLink(headers);

  return new ApolloClient({
    ssrMode,
    link,
    cache: new InMemoryCache().restore(initialState),
  });
}
