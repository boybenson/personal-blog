import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://graphql.contentful.com/content/v1/spaces/5v6dlypiwfe0/explore",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      access_token: "xYOc4FGHwhtDWKwHG6Fx7T3Zb4vWqCeNNtOPCsi8WRg",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
