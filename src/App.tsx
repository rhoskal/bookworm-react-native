import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

import { BootstrapLoader } from "./navigation/bootstrap_loader";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: "https://bookworm.hansjhoffman.dev/graphql" }),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BootstrapLoader />
    </ApolloProvider>
  );
}
