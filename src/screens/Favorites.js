import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import LoadingIndicator from "../components/LoadingIndicator";
import ErrorQuery from "../components/ErrorQuery";
import NoteFeed from "../components/NoteFeed";
import { GET_MY_FAVORITES } from "../API/Query";
import RefreshButton from "../components/RefreshButton";
import SystemMessage from "../components/SystemMessage";

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
    return (
      <>
        <NoteFeed notes={data.me.favorites} refetch={refetch} />
      </>
    );
  } else {
    return (
      <>
        <SystemMessage>
          Nothing to show!{"\n"}Add something to favorites!
        </SystemMessage>
      </>
    );
  }
};

export default Favorites;
