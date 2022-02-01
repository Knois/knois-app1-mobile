import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useQuery } from "@apollo/client";

import LoadingIndicator from "../components/LoadingIndicator";
import ErrorQuery from "../components/ErrorQuery";
import NoteFeed from "../components/NoteFeed";
import { GET_MY_FAVORITES } from "../API/Query";
import RefreshButton from "../components/RefreshButton";
import { SECONDARY_DARK } from "../styles/constants";

const Favorites = ({ navigation }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_MY_FAVORITES,
    {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: "cache-first",
    }
  );

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <RefreshButton action={refetch} />,
    });
  }, []);

  if (loading) return <LoadingIndicator />;
  if (networkStatus === networkStatus.refetch) return <LoadingIndicator />;
  if (error) return <ErrorQuery error={error} />;
  if (data.me.favorites.length !== 0) {
    console.log(data);
    return (
      <>
        <View style={{ flex: 1 }}>
          <NoteFeed notes={data.me.favorites} refetch={refetch} />
        </View>
      </>
    );
  } else {
    return (
      <>
        <View
          style={{
            alignSelf: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              textAlign: "center",
              color: SECONDARY_DARK,
            }}
          >
            Nothing to show!
          </Text>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: SECONDARY_DARK,
            }}
          >
            Add to favorite any note!
          </Text>

          <NoteFeed notes={data.me.favorites} refetch={refetch} />
        </View>
      </>
    );
  }
};

export default Favorites;
