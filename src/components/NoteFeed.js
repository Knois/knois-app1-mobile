import React, { useCallback, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import NoteFeedItem from "./NoteFeedItem";

const NoteFeed = ({ notes, refetch }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch().then(setRefreshing(false));
  }, []);

  return (
    <FlatList
      data={notes}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => <NoteFeedItem item={item} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default NoteFeed;
