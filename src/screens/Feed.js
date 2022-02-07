import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import LoadingIndicator from "../components/LoadingIndicator";
import NoteFeed from "../components/NoteFeed";
import { GET_NOTES } from "../API/Query";
import ErrorQuery from "../components/ErrorQuery";
import RefreshButton from "../components/RefreshButton";
import SystemMessage from "../components/SystemMessage";

const Feed = ({ navigation }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(GET_NOTES, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-first",
  });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <RefreshButton action={refetch} />,
    });
  }, []);

  if (loading) return <LoadingIndicator />;
  if (networkStatus === networkStatus.refetch) return <LoadingIndicator />;
  if (error) return <ErrorQuery error={error} />;

  if (data.notes.length !== 0) {
    return (
      <>
        <NoteFeed notes={data.notes} refetch={refetch} />
      </>
    );
  } else {
    return (
      <>
        <SystemMessage>Nothing to show!{"\n"}Feed is empty!</SystemMessage>
      </>
    );
  }
};

export default Feed;
