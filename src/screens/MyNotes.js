import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import LoadingIndicator from "../components/LoadingIndicator";
import NoteFeed from "../components/NoteFeed";
import { GET_MY_NOTES } from "../API/Query";
import ErrorQuery from "../components/ErrorQuery";
import RefreshButton from "../components/RefreshButton";
import SystemMessage from "../components/SystemMessage";

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
        <SystemMessage>Nothing to show!{"\n"}Create something...</SystemMessage>
      </>
    );
  }
};

export default MyNotes;
