import React from "react";
import AppNavigation from "./src/screens";
import * as SecureStore from "expo-secure-store";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "apollo-link-context";
import { AuthProvider } from "./src/AuthContext";

const uri = "http://knois-app1.herokuapp.com/api";
const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri });

const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: (await SecureStore.getItemAsync("token")) || "",
    },
  };
});

const client = new ApolloClient({ link: authLink.concat(httpLink), cache });

export default App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <AppNavigation />
      </AuthProvider>
    </ApolloProvider>
  );
};
