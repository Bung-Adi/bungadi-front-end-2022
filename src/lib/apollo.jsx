import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'Your_BackEnd_URL',
  cache: new InMemoryCache(),
});

export default client;