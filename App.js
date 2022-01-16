import React from "react";
import { StatusBar } from "expo-status-bar";
import AppNavigation from "./src/screens";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { AuthProvider } from "./src/AuthContext";

const uri = "http://knois-app1.herokuapp.com/api";
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri,
  cache,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <AppNavigation />
        <StatusBar style="auto" />
      </AuthProvider>
    </ApolloProvider>
  );
}
