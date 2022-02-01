import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useQuery } from "@apollo/client";

import LoadingIndicator from "../components/LoadingIndicator";
import NoteFeed from "../components/NoteFeed";
import { GET_MY_NOTES } from "../API/Query";
import ErrorQuery from "../components/ErrorQuery";
import RefreshButton from "../components/RefreshButton";
import { SECONDARY_DARK } from "../styles/constants";

const MyNotes = ({ navigation }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_MY_NOTES,
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
  if (data.me.notes.length !== 0) {
    return (
      <>
        <NoteFeed notes={data.me.notes} refetch={refetch} />
      </>
    );
  } else {
    return (
      <>
        <View
          style={{ alignSelf: "center", justifyContent: "center", flex: 1 }}
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
            Create something...
          </Text>
        </View>
      </>
    );
  }
};

export default MyNotes;
