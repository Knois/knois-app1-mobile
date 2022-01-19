import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useQuery } from "@apollo/client";

import LoadingIndicator from "../components/LoadingIndicator";
import NoteFeed from "../components/NoteFeed";
import { GET_MY_NOTES } from "../API/Query";
import ErrorQuery from "../components/ErrorQuery";
import RefreshButton from "../components/RefreshButton";

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
        <View style={{ flex: 1 }}>
          <NoteFeed notes={data.me.notes} />
        </View>
      </>
    );
  } else {
    return (
      <>
        <View
          style={{ alignSelf: "center", justifyContent: "center", flex: 1 }}
        >
          <Text>Nothing to show! Create something...</Text>
        </View>
      </>
    );
  }
};

export default MyNotes;
