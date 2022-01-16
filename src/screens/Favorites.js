import React from "react";
import { View, Text } from "react-native";
import { useQuery } from "@apollo/client";

import LoadingIndicator from "../components/LoadingIndicator";
import ErrorQuery from "../components/ErrorQuery";
import NoteFeed from "../components/NoteFeed";
import { GET_MY_FAVORITES } from "../API/Query";

const Favorites = () => {
  const { loading, error, data } = useQuery(GET_MY_FAVORITES);
  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorQuery error={error} />;
  if (data.me.favorites.length !== 0) {
    return (
      <>
        <View style={{ flex: 1 }}>
          <NoteFeed notes={data.me.favorites} />
        </View>
      </>
    );
  } else {
    return (
      <>
        <View
          style={{ alignSelf: "center", justifyContent: "center", flex: 1 }}
        >
          <Text>Nothing to show! Add to favorites any note!</Text>
        </View>
      </>
    );
  }
};

export default Favorites;
