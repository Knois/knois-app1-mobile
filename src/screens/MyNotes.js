import React from "react";
import { View, Text } from "react-native";
import { useQuery } from "@apollo/client";

import LoadingIndicator from "../components/LoadingIndicator";
import NoteFeed from "../components/NoteFeed";
import { GET_MY_NOTES } from "../API/Query";
import ErrorQuery from "../components/ErrorQuery";

const MyNotes = () => {
  const { loading, error, data } = useQuery(GET_MY_NOTES);

  if (loading) return <LoadingIndicator />;
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
