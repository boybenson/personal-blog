import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://graphql.contentful.com/content/v1/spaces/5v6dlypiwfe0",
  headers: {
    Authorization: "Bearer xYOc4FGHwhtDWKwHG6Fx7T3Zb4vWqCeNNtOPCsi8WRg",
  },
});

export default client;
